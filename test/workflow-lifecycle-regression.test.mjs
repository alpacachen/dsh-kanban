// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest'
import { DatabaseSync } from 'node:sqlite'
import { createHash, randomUUID } from 'node:crypto'
import { mkdir, mkdtemp, realpath, rename, rm, readFile, symlink, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { openWorkflowStore } from '../workflow/store.js'
import { createWorkflowRunner } from '../workflow/runner.js'
import { createWorkflowCore } from '../workflow/index.js'
import { ensureTaskDirectory, listTaskFiles, deleteTaskFile, saveStageResult } from '../workflow/task-files.js'
const USER = { kind: 'user', id: 'regression-owner' }, MODEL = { provider: 'fixture', model: 'fixture' }
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const hosts = []
async function boot({ report = 'Verified report', prompt = 'Produce a report.', failSettlement = 0 } = {}) {
  const root = await realpath(await mkdtemp(join(tmpdir(), 'dsh-workflow-lifecycle-'))), store = openWorkflowStore(join(root, 'workflow.sqlite'))
  const flow = store.publishDefinition({ requestId: randomUUID(), workspaceId: 'regression', rootPath: root, executionScope: root, name: 'Regression', definition: { stages: [
    { id: 'work', kind: 'agent', title: 'Work', prompt }, { id: 'review', kind: 'review', title: 'Review', returnStageId: 'work' },
  ] } }, USER)
  const objects = new Map(), errors = [], readAttachment = vi.fn()
  const attachments = {
    async saveFile({ data, name }) { const bytes = Buffer.from(data), attachmentId = `sha256:${hash(bytes)}`; objects.set(attachmentId, bytes); return { attachmentId, name, bytes: bytes.length } },
    async *readFileStream(ref) { readAttachment(); yield objects.get(ref.attachmentId) },
  }
  const executor = { run: vi.fn(async request => {
    const messageId = `msg-${request.attemptId}`
    request.onBound({ sessionId: request.sessionId, requestId: request.requestId, messageId })
    request.onObserved({ sessionId: request.sessionId, requestId: request.requestId, messageId, turnNumber: 1 })
    return { text: report, evidence: { kind: 'dsh-session-log', policy: 'dsh-native/v1', attemptId: request.attemptId, sessionId: request.sessionId, requestId: request.requestId, messageId, turnNumber: 1, completed: true, quiescent: true, flushConfirmed: true, toolInvocationCount: 0, ownedJobCount: 0, userSeq: 1, assistantSeq: 2, endSeq: 3, endReason: 'completed', outputSha256: hash(Buffer.from(report)) } }
  }), cancel: vi.fn(() => ({ requested: false })), async dispose() {} }
  let remainingFailures = failSettlement
  const finishAttempt = vi.fn(payload => { if (remainingFailures-- > 0) throw Object.assign(Error('Injected SQLite failure'), { code: 'SQLITE_IOERR' }); return store.finishAttempt(payload) })
  const workspaceRegistry = { get: () => ({ id: 'regression', path: root, status: async () => 'ok' }) }
  const runnerStore = { ...store, finishAttempt }
  const runner = createWorkflowRunner({ store: runnerStore, executor, attachments, workspaceRegistry, onError: e => errors.push(e) })
  const core = createWorkflowCore({ store, runner, attachments, workspaceRegistry, currentModel: () => MODEL, profileDir: root,
    reconcileNative: async (attempt, commit) => commit({ kind: 'dsh-native-stop', ownership: 'live-idle', attemptId: attempt.id, sessionId: attempt.sessionId, requestId: attempt.requestId, messageId: attempt.messageId, turnNumber: attempt.turnNumber, logLastSeq: 3, quiescent: true, ownedJobCount: 0 }) })
  const task = store.createTask({ requestId: randomUUID(), workflowId: flow.workflowId, title: 'Regression', input: { text: 'Inspect this input.' }, executionConfig: { policy: 'dsh-native/v1', modelSelection: MODEL } }, USER)
  const h = { root, store, runnerStore, runner, core, workspaceRegistry, task, executor, attachments, readAttachment, finishAttempt, errors, recoverDatabase() { remainingFailures = 0 } }; hosts.push(h)
  return h
}
afterEach(async () => {
  vi.restoreAllMocks(); vi.useRealTimers()
  for (const h of hosts.splice(0)) { await h.runner.dispose(); h.store.close(); await rm(h.root, { recursive: true, force: true }) }
})
describe('Workflow lifecycle fault recovery', () => {
  it('retries only settlement after transient database failures, retaining the successful model result', async () => {
    const h = await boot({ failSettlement: 2 })
    await h.runner.start(); await h.runner.whenIdle()
    await vi.waitFor(() => expect(h.store.getTask(h.task.id).state).toBe('waiting_review'), { timeout: 4000 })
    expect(h.executor.run).toHaveBeenCalledTimes(1)
    expect(h.store.getTask(h.task.id).artifacts).toHaveLength(1)
  })
  it('allows stopping an idle native execution whose database settlement is still pending', async () => {
    const h = await boot({ failSettlement: 100 })
    await h.runner.start(); await h.runner.whenIdle()
    const before = await h.core.getTask(h.task.id)
    expect(before.canReconcile).toBe(true)
    const result = await h.core.terminateTask({ taskId: before.id, expectedRevision: before.revision, requestId: randomUUID() }, USER)
    expect(result.state).toBe('terminated')
    h.recoverDatabase(); await h.runner.kick(); await h.runner.whenIdle()
    expect(h.executor.run).toHaveBeenCalledTimes(1)
    expect(h.store.getTask(h.task.id).state).toBe('terminated')
  })
  it('accepts large completed replies and stage inputs without Workflow execution quotas', async () => {
    const report = '完整报告与证据。'.repeat(15000), h = await boot({ report, prompt: 'Stage instruction '.repeat(6000) })
    await h.runner.start(); await h.runner.whenIdle()
    const task = h.store.getTask(h.task.id)
    expect(task.state).toBe('waiting_review')
    expect((await h.core.getArtifact(task.id, task.artifacts[0].id)).text).toBe(report)
  })
  it('retries failed attachment persistence without repeating the model call', async () => {
    const h = await boot(), save = h.attachments.saveFile
    let failures = 2
    h.attachments.saveFile = async args => { if (failures-- > 0) throw Error('Attachment store temporarily unavailable'); return save(args) }
    await h.runner.start(); await h.runner.whenIdle()
    await vi.waitFor(() => expect(h.store.getTask(h.task.id).state).toBe('waiting_review'), { timeout: 4000 })
    expect(h.executor.run).toHaveBeenCalledTimes(1)
  })
  it('does not block an unrelated workspace while one completed result is waiting for storage', async () => {
    const h = await boot(), otherRoot = join(h.root, 'other-project')
    await mkdir(otherRoot)
    h.workspaceRegistry.get = id => ({ id, path: id === 'other' ? otherRoot : h.root })
    h.runnerStore.finishAttempt = payload => {
      if (h.store.getTask(h.task.id).attempts.some(attempt => attempt.id === payload.attemptId)) throw Error('First workspace storage unavailable')
      return h.store.finishAttempt(payload)
    }
    const flow = h.store.publishDefinition({ requestId: randomUUID(), workspaceId: 'other', rootPath: otherRoot, executionScope: otherRoot, name: 'Other', definition: { stages: [
      { id: 'work', kind: 'agent', title: 'Work', prompt: 'Complete the task.' },
    ] } }, USER)
    const other = h.store.createTask({ requestId: randomUUID(), workflowId: flow.workflowId, title: 'Other task', input: { text: 'Other input' }, executionConfig: { policy: 'dsh-native/v1', modelSelection: MODEL } }, USER)
    await h.runner.start(); await h.runner.whenIdle()
    expect(h.store.getTask(other.id).state).toBe('completed')
    expect(h.store.getTask(h.task.id).state).toBe('running')
    expect(h.executor.run).toHaveBeenCalledTimes(2)
  })
  it('does not read report bodies during status refresh, but reads on explicit artifact access', async () => {
    const h = await boot(); await h.runner.start(); await h.runner.whenIdle(); h.readAttachment.mockClear()
    const view = await h.core.getTask(h.task.id)
    expect(view.outputs).toHaveLength(1); expect(view.outputs[0].text).toBeUndefined()
    expect(h.readAttachment).not.toHaveBeenCalled()
    expect((await h.core.getArtifact(view.id, view.outputs[0].id)).text).toBe('Verified report')
  })
  it('never deletes files before the deletion receipt commits, and resumes committed cleanup after reopening', async () => {
    const h = await boot(), directory = await ensureTaskDirectory(h.task)
    await writeFile(join(directory, 'deliverable.md'), 'keep until commit')
    const request = { taskId: h.task.id, expectedRevision: h.task.revision, requestId: randomUUID() }
    const exec = DatabaseSync.prototype.exec
    const spy = vi.spyOn(DatabaseSync.prototype, 'exec').mockImplementation(function(sql, ...args) { if (sql === 'COMMIT') throw Error('Injected commit failure'); return exec.call(this, sql, ...args) })
    expect(() => h.store.deleteTask(request, USER)).toThrow('Injected commit failure'); spy.mockRestore()
    expect(await readFile(join(directory, 'deliverable.md'), 'utf8')).toBe('keep until commit')
    expect(h.store.listTaskSummaries()).toHaveLength(1)
    h.store.deleteTask(request, USER)
    expect(h.store.listTaskSummaries()).toHaveLength(0)
    await h.runner.dispose(); h.store.close()
    h.store = openWorkflowStore(join(h.root, 'workflow.sqlite'))
    h.runner = createWorkflowRunner({ store: h.store, executor: h.executor, attachments: h.attachments, workspaceRegistry: { get: () => ({ path: h.root }) } })
    await h.runner.start(); await h.runner.whenIdle()
    await expect(readFile(join(directory, 'deliverable.md'))).rejects.toMatchObject({ code: 'ENOENT' })
    expect(h.store.listPendingTaskDeletions()).toEqual([])
  })
  it('reports and retries pending cleanup without following a substituted directory link', async () => {
    const h = await boot(), directory = await ensureTaskDirectory(h.task), saved = join(h.root, 'saved-output')
    await writeFile(join(directory, 'deliverable.md'), 'preserve outside links')
    await rename(directory, saved); await symlink(saved, directory)
    const result = await h.core.deleteTask({ taskId: h.task.id, expectedRevision: h.task.revision, requestId: randomUUID() }, USER)
    expect(result.cleanupPending).toBe(true)
    expect(h.store.listTaskSummaries()).toEqual([])
    expect(await readFile(join(saved, 'deliverable.md'), 'utf8')).toBe('preserve outside links')
    await rm(directory); await rename(saved, directory)
    await h.runner.start(); await h.runner.whenIdle()
    expect(h.store.listPendingTaskDeletions()).toEqual([])
    await expect(readFile(join(directory, 'deliverable.md'))).rejects.toMatchObject({ code: 'ENOENT' })
    expect(h.executor.run).not.toHaveBeenCalled()
  })
  it('continues cleanup when reading its durable pending list temporarily fails', async () => {
    const h = await boot(); await h.runner.start(); await h.runner.whenIdle()
    const original = h.runnerStore.listPendingTaskDeletions
    h.runnerStore.listPendingTaskDeletions = vi.fn().mockImplementationOnce(() => { throw Error('Injected cleanup query failure') }).mockImplementation(original)
    const task = h.store.getTask(h.task.id), directory = (await listTaskFiles(task)).directory
    expect((await h.core.deleteTask({ taskId: task.id, expectedRevision: task.revision, requestId: randomUUID() }, USER)).cleanupPending).toBe(true)
    expect(h.runner.status().cleanupPending).toBeGreaterThan(0)
    await vi.waitFor(() => expect(h.store.listPendingTaskDeletions()).toEqual([]), { timeout: 4000 })
    await expect(readFile(join(directory, '.workflow-results', `${task.attempts[0].id}.md`))).rejects.toMatchObject({ code: 'ENOENT' })
    expect(h.executor.run).toHaveBeenCalledTimes(1)
  })
  it('keeps report history out of deliverables, rejects its deletion and repairs modified report copies', async () => {
    const h = await boot(), directory = await ensureTaskDirectory(h.task), attemptId = randomUUID()
    const path = await saveStageResult(h.task, attemptId, 'Canonical report')
    await writeFile(join(directory, 'report.md'), 'Editable deliverable')
    expect((await listTaskFiles(h.task)).files.map(f => f.path)).toEqual(['report.md'])
    await expect(deleteTaskFile(h.task, path, 'any-version')).rejects.toMatchObject({ code: 'WF_FILE_READ_ONLY' })
    await writeFile(join(directory, path), 'Modified internal copy')
    await saveStageResult(h.task, attemptId, 'Canonical report')
    expect(await readFile(join(directory, path), 'utf8')).toBe('Canonical report')
  })
})
