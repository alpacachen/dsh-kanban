// @vitest-environment node
import { afterEach, describe, expect, it } from 'vitest'
import { mkdtemp, readFile, rm, symlink, writeFile, mkdir, lstat } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createHash, randomUUID } from 'node:crypto'
import { ensureTaskDirectory, listTaskFiles, taskFilePath, deleteTaskFile, deleteTaskDirectory, saveStageResult } from '../workflow/task-files.js'
import { openWorkflowStore } from '../workflow/store.js'
import { createWorkflowCore } from '../workflow/index.js'
import { createWorkflowRunner, PROJECT_POLICY } from '../workflow/runner.js'

const roots = [], stores = [], runners = []
afterEach(async () => { for (const runner of runners.splice(0)) await runner.dispose(); for (const store of stores.splice(0)) store.close(); for (const root of roots.splice(0)) await rm(root, { recursive: true, force: true }) })
const temp = async () => { const root = await mkdtemp(join(tmpdir(), 'dsh-task-files-')); const { realpath } = await import('node:fs/promises'); const canonical = await realpath(root); roots.push(canonical); return canonical }
const actor = { kind: 'user', id: 'test' }
const hash = bytes => createHash('sha256').update(bytes).digest('hex')

describe('Task artifact directories', () => {
  it('shares one directory between stages, isolates identical filenames between tasks and saves each reply', async () => {
    const root = await temp(), store = openWorkflowStore(join(root, 'workflow.sqlite')); stores.push(store)
    const flow = store.createWorkflow({ requestId: randomUUID(), workspaceId: 'workspace', rootPath: root, executionScope: root, name: 'Files', definition: { stages: [
      { id: 'first', kind: 'agent', title: 'Generate', prompt: 'Write report.txt' }, { id: 'second', kind: 'agent', title: 'Read', prompt: 'Read report.txt and write notes.txt' },
    ] } }, actor)
    const objects = new Map(), calls = []
    const attachments = { async saveFile({ data, name }) { const attachmentId = `sha256:${hash(data)}`; objects.set(attachmentId, data); return { attachmentId, name, bytes: data.length } }, async *readFileStream(ref) { yield objects.get(ref.attachmentId) } }
    const executor = { async run(request) {
      calls.push(request)
      const messageId = randomUUID()
      await request.onBound({ attemptId: request.attemptId, sessionId: request.sessionId, requestId: request.requestId, messageId })
      await request.onObserved({ attemptId: request.attemptId, sessionId: request.sessionId, requestId: request.requestId, messageId, turnNumber: 1 })
      const task = store.listTasks().find(task => task.attempts.some(attempt => attempt.id === request.attemptId))
      if (task.currentStage.id === 'first') await writeFile(join(request.cwd, 'report.txt'), task.input.text)
      else { expect(await readFile(join(request.cwd, 'report.txt'), 'utf8')).toBe(task.input.text); await writeFile(join(request.cwd, 'notes.txt'), 'stage two') }
      const text = `Done ${task.input.text} ${task.currentStage.id}`
      return { text, evidence: { kind: 'dsh-session-log', policy: 'dsh-native/v1', attemptId: request.attemptId, sessionId: request.sessionId, requestId: request.requestId, messageId, userSeq: 1, assistantSeq: 2, endSeq: 3, endReason: "completed", turnNumber: 1, completed: true, flushConfirmed: true, quiescent: true, ownedJobCount: 0, toolInvocationCount: 0, outputSha256: hash(text) } }
    }, cancel: async () => ({}), dispose: async () => {} }
    const runner = createWorkflowRunner({ store, executor, attachments, workspaceRegistry: { get: () => ({ path: root }) } }); runners.push(runner)
    const first = store.createTask({ requestId: randomUUID(), workflowId: flow.id, title: 'One', input: { text: 'one' }, executionConfig: { policy: PROJECT_POLICY, modelSelection: { provider: 'test', model: 'test' } } }, actor)
    const second = store.createTask({ requestId: randomUUID(), workflowId: flow.id, title: 'Two', input: { text: 'two' }, executionConfig: { policy: PROJECT_POLICY, modelSelection: { provider: 'test', model: 'test' } } }, actor)
    await runner.start(); await runner.whenIdle()
    expect(store.getTask(first.id).state).toBe('completed'); expect(store.getTask(second.id).state).toBe('completed')
    const a = await listTaskFiles(first), b = await listTaskFiles(second)
    expect(a.directory).not.toBe(b.directory)
    expect(await readFile(join(a.directory, 'report.txt'), 'utf8')).toBe('one')
    expect(await readFile(join(b.directory, 'report.txt'), 'utf8')).toBe('two')
    expect(a.files.every(file => file.kind === 'file')).toBe(true)
    expect((await listTaskFiles(store.getTask(first.id), { includeStageResults: true })).files.filter(file => file.kind === 'stage-result')).toHaveLength(2)
    expect(calls.filter(call => call.cwd === a.directory)).toHaveLength(2)
    expect(calls[1].prompt).not.toContain('Done one first')
    expect(calls[1].prompt).toContain('"needsRead":true')
    const reportPath = `.workflow-results/${store.getTask(first.id).attempts[0].id}.md`
    expect(calls[1].prompt).toContain(reportPath)
    expect(await readFile(join(a.directory, reportPath), 'utf8')).toBe('Done one first')
    expect(calls[0].prompt).toContain(a.directory)
    expect(calls[0].prompt).toContain(root)
    let logReads = 0
    const core = createWorkflowCore({ store, runner, attachments, workspaceRegistry: {}, readSessionLog: async () => { logReads++; throw Error('missing') } })
    await expect(core.getStageTrace({ taskId: first.id, stageId: 'first', attemptId: store.getTask(second.id).attempts[0].id })).rejects.toMatchObject({ code: 'WF_TRACE_NOT_FOUND' })
    expect(logReads).toBe(0)
    await expect(core.getStageTrace({ taskId: first.id, stageId: 'first' })).rejects.toMatchObject({ code: 'WF_TRACE_UNAVAILABLE' })

  })

  it('rejects traversal, absolute cross-task paths and file/directory symlinks', async () => {
    const root = await temp(), task = { id: randomUUID(), rootPath: root }, other = { id: randomUUID(), rootPath: root }
    const directory = await ensureTaskDirectory(task), outside = await ensureTaskDirectory(other)
    await writeFile(join(outside, 'private.txt'), 'other task')
    await symlink(join(outside, 'private.txt'), join(directory, 'link.txt'))
    await symlink(outside, join(directory, 'linked-dir'))
    await mkdir(join(directory, 'nested')); await writeFile(join(directory, 'nested', '可预览 #1.md'), 'text')
    expect((await listTaskFiles(task)).files.map(file => file.path)).toEqual(['nested/可预览 #1.md'])
    for (const path of ['../private.txt', join(outside, 'private.txt'), 'link.txt', 'linked-dir/private.txt', 'nested/../link.txt', '']) await expect(taskFilePath(task, path)).rejects.toMatchObject({ code: 'WF_TASK_FILES_UNAVAILABLE' })
    expect((await taskFilePath(task, 'nested/可预览 #1.md')).path).toBe(join(directory, 'nested', '可预览 #1.md'))
  })
  it('conditionally deletes only this Task file and preserves changed or other-task files', async () => {
    const root = await temp(), task = { id: randomUUID(), rootPath: root }, other = { id: randomUUID(), rootPath: root }
    const directory = await ensureTaskDirectory(task), otherDirectory = await ensureTaskDirectory(other)
    await writeFile(join(directory, 'report.md'), 'original'); await writeFile(join(otherDirectory, 'report.md'), 'other')
    const before = (await listTaskFiles(task)).files[0]
    await writeFile(join(directory, 'report.md'), 'changed while confirm was open')
    await expect(deleteTaskFile(task, before.path, before.version)).rejects.toMatchObject({ code: 'WF_FILE_CHANGED' })
    const current = (await listTaskFiles(task)).files[0]
    await expect(deleteTaskFile(task, '../report.md', current.version)).rejects.toMatchObject({ code: 'WF_TASK_FILES_UNAVAILABLE' })
    await expect(deleteTaskFile(task, current.path, current.version)).resolves.toEqual({ path: 'report.md', deleted: true })
    expect((await listTaskFiles(task)).files).toEqual([])
    expect(await readFile(join(otherDirectory, 'report.md'), 'utf8')).toBe('other')
  })

  it('removes the whole task directory without following links or touching other task/project files', async () => {
    const root = await temp(), task = { id: randomUUID(), rootPath: root }, other = { id: randomUUID(), rootPath: root }
    const directory = await ensureTaskDirectory(task), otherDirectory = await ensureTaskDirectory(other)
    await writeFile(join(root, 'project.txt'), 'project')
    await writeFile(join(otherDirectory, 'report.md'), 'other')
    await mkdir(join(directory, 'nested')); await writeFile(join(directory, 'nested', 'report.md'), 'own')
    await symlink(otherDirectory, join(directory, 'other-task'))
    await deleteTaskDirectory(task)
    await expect(lstat(directory)).rejects.toMatchObject({ code: 'ENOENT' })
    expect(await readFile(join(otherDirectory, 'report.md'), 'utf8')).toBe('other')
    expect(await readFile(join(root, 'project.txt'), 'utf8')).toBe('project')
    await expect(deleteTaskDirectory(task)).resolves.toBeUndefined()
    await expect(lstat(directory)).rejects.toMatchObject({ code: 'ENOENT' })
  })

  it('refuses linked task directories, linked parents and invalid task ids', async () => {
    const root = await temp(), outside = await temp(), task = { id: randomUUID(), rootPath: root }
    const directory = await ensureTaskDirectory(task)
    await writeFile(join(outside, 'keep.md'), 'keep')
    await rm(directory, { recursive: true }); await symlink(outside, directory)
    await expect(deleteTaskDirectory(task)).rejects.toMatchObject({ code: 'WF_TASK_FILES_UNAVAILABLE' })
    await rm(join(root, '.dsh'), { recursive: true }); await symlink(outside, join(root, '.dsh'))
    await expect(deleteTaskDirectory(task)).rejects.toMatchObject({ code: 'WF_TASK_FILES_UNAVAILABLE' })
    await expect(deleteTaskDirectory({ ...task, id: '../other-task' })).rejects.toMatchObject({ code: 'WF_TASK_FILES_UNAVAILABLE' })
    expect(await readFile(join(outside, 'keep.md'), 'utf8')).toBe('keep')
  })

  it('repairs missing or modified reserved report copies without following links', async () => {
    const root = await temp(), task = { id: randomUUID(), rootPath: root }, attemptId = randomUUID()
    const directory = await ensureTaskDirectory(task), text = 'Complete stage report with sources'
    const path = await saveStageResult(task, attemptId, text)
    expect(await saveStageResult(task, attemptId, text)).toBe(path)
    await rm(join(directory, path))
    await saveStageResult(task, attemptId, text)
    expect(await readFile(join(directory, path), 'utf8')).toBe(text)
    await writeFile(join(directory, path), 'changed')
    await saveStageResult(task, attemptId, text)
    expect(await readFile(join(directory, path), 'utf8')).toBe(text)
    await rm(join(directory, path)); await writeFile(join(root, 'outside.md'), 'outside')
    await symlink(join(root, 'outside.md'), join(directory, path))
    await expect(saveStageResult(task, attemptId, text)).rejects.toMatchObject({ code: 'WF_TASK_FILES_UNAVAILABLE' })
    expect(await readFile(join(root, 'outside.md'), 'utf8')).toBe('outside')
  })

})
