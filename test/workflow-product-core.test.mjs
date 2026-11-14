// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createHash, randomUUID } from 'node:crypto'
import { mkdtempSync, realpathSync, rmSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { tmpdir } from 'node:os'
import { openWorkflowStore } from '../workflow/store.js'
import { createWorkflowCore } from '../workflow/index.js'
import { createWorkflowRunner, PROJECT_POLICY } from '../workflow/runner.js'

// Real Core + SQLite + runner/generator. Native executor, attachment objects and
// capabilities are isolated fixtures: no model, profile, network or OS sandbox probe.
const USER = { kind: 'user', id: 'isolated-core-owner' }
const AGENT = { kind: 'agent', id: 'isolated-management-agent' }
const MODEL = { provider: 'fixture-provider', model: 'fixture-model' }
const NONE = { web: false, read: false, write: false, command: false }
const ALL = { web: true, read: true, write: true, command: true }
const hosts = [], directories = []
const digest = bytes => createHash('sha256').update(bytes).digest('hex')
const definition = (permissions = NONE) => ({ description: 'Inspect and summarize', inputLabel: 'Goal', inputHint: 'Describe the outcome', permissions: { ...permissions }, stages: [
  { id: 'work', kind: 'agent', title: 'Work', prompt: 'Inspect permitted inputs and write the result.' },
  { id: 'review', kind: 'review', title: 'Review', returnStageId: 'work' },
] })
function deferred() { let resolve; const promise = new Promise(done => { resolve = done }); return { promise, resolve } }
function temp() {
  const path = realpathSync(mkdtempSync(join(tmpdir(), 'dsh-workflow-product-core-')))
  directories.push(path)
  return path
}
function removeTemp(path) {
  expect(dirname(path)).toBe(realpathSync(tmpdir()))
  expect(basename(path).startsWith('dsh-workflow-product-core-')).toBe(true)
  rmSync(path, { recursive: true, force: true })
}
function attachmentFixture() {
  const objects = new Map()
  return { objects,
    async saveFile({ data, name }) {
      const bytes = Buffer.from(data), attachmentId = `sha256:${digest(bytes)}`
      objects.set(attachmentId, bytes)
      return { attachmentId, name, bytes: bytes.length }
    },
    async *readFileStream(ref) {
      const bytes = objects.get(ref.attachmentId)
      if (!bytes) throw new Error('Fixture attachment missing')
      yield bytes.subarray(0, 2)
      yield bytes.subarray(2)
    },
  }
}
function executorFixture(manual = false) {
  const calls = [], gates = new Map(), starts = [], cancelCalls = []
  const start = index => (starts[index] ??= deferred())
  return { calls, cancelCalls, disposed: false,
    waitForRun: index => start(index).promise,
    releaseAll() { for (const gate of gates.values()) gate.resolve() },
    async run(request) {
      const index = calls.push(request) - 1, gate = deferred()
      gates.set(request.attemptId, gate)
      const messageId = `message-${request.attemptId}`
      await request.onBound({ sessionId: request.sessionId, requestId: request.requestId, messageId })
      await request.onObserved({ sessionId: request.sessionId, requestId: request.requestId, messageId, turnNumber: 1 })
      start(index).resolve(request)
      if (manual) await gate.promise
      gates.delete(request.attemptId)
      const text = `Fixture result ${index + 1}`
      const toolNames = request.tools?.map(tool => tool.name) ?? []
      const toolAudit = toolNames.map((name, i) => ({ callId: `call-${i}`, name, startSeq: 2 + 2 * i, endSeq: 3 + 2 * i }))
      const evidence = { kind: 'dsh-session-log', attemptId: request.attemptId, sessionId: request.sessionId,
        requestId: request.requestId, messageId, turnNumber: 1, completed: !request.signal.aborted, quiescent: true,
        flushConfirmed: true, ownedJobCount: 0, toolInvocationCount: toolAudit.length,
        userSeq: 1, assistantSeq: 2 + 2 * toolAudit.length, endSeq: 3 + 2 * toolAudit.length,
        endReason: request.signal.aborted ? 'cancelled' : 'completed', outputSha256: digest(Buffer.from(text)),
        policy: 'dsh-native/v1' }
      if (request.signal.aborted) throw Object.assign(new Error('Fixture cancelled'), { code: 'WORKFLOW_CANCELLED', outcome: 'cancelled', evidence })
      return { text, evidence }
    },
    cancel(attemptId) { cancelCalls.push(attemptId); gates.get(attemptId)?.resolve(); return { requested: true } },
    async dispose() { this.disposed = true; this.releaseAll() },
  }
}
function boot({ manual = false, unavailable = false, failScope = false, preflightQuiescent = true, runtimeSnapshot = {},
  modelInfo = null, modelInfoFor = vi.fn(async () => modelInfo), currentModel = vi.fn(() => MODEL), reconcileNative } = {}) {
  const root = temp(), dbRoot = temp(), store = openWorkflowStore(join(dbRoot, 'workflow.sqlite'))
  const workspaces = new Map([['workspace-core', { id: 'workspace-core', path: root, status: async () => 'ok' }]])
  const workspaceRegistry = { get: id => workspaces.get(id) }
  const attachments = attachmentFixture(), executor = executorFixture(manual), errors = [], scopes = []
  const createToolScope = vi.fn(async task => {
    if (failScope) throw Object.assign(new Error('Fixture preflight refused'), { code: 'WORKFLOW_SANDBOX_UNAVAILABLE',
      ...(preflightQuiescent ? { preflightQuiescent: true } : {}) })
    const permissions = task.executionConfig.permissions
    const names = [...(permissions.read ? ['workflow_read_file', 'workflow_list_files'] : []),
      ...(permissions.write ? ['workflow_write_file'] : []), ...(permissions.command ? ['workflow_run_command'] : []),
      ...(permissions.web ? ['workflow_fetch_url', 'workflow_web_search'] : [])]
    const scope = { task, tools: names.map(name => ({ name })), disposed: false,
      async dispose() { this.disposed = true }, status: () => ({ quiescent: true, active: 0, ownedJobCount: 0 }) }
    scopes.push(scope)
    return scope
  })
  const capabilitiesFor = vi.fn(async () => unavailable ? { ...NONE, unavailableReason: 'Fixture unavailable' } : { ...ALL })
  if (failScope) executor.run = vi.fn(async request => { throw Object.assign(Error('Native setup failed'), { code: 'NATIVE_SETUP_FAILED', evidence: {
    kind: 'workflow-preflight', attemptId: request.attemptId, sessionId: request.sessionId, requestId: request.requestId,
    completed: false, quiescent: preflightQuiescent, flushConfirmed: false, ownedJobCount: 0, toolInvocationCount: 0,
  } }) })
  const runner = createWorkflowRunner({ store, executor, attachments, workspaceRegistry, createToolScope, runtimeSnapshot,
    ownerInstanceId: 'core-test-runner', onError: error => errors.push(error) })
  const confirmStopped = vi.fn(async ({ attempt, processes }) => ({ kind: 'workflow-process-journal',
    attemptId: attempt.id, sessionId: attempt.sessionId, requestId: attempt.requestId,
    hostProcess: { ...attempt.executorSnapshot.hostProcess }, processes: processes.map(item => ({ ...item })),
    hostStopped: true, processesStopped: true, quiescent: true, ownedJobCount: 0 }))
  const generationExecutor = { run: vi.fn(async () => ({ text: JSON.stringify({ name: 'Generated', definition: definition() }) })) }
  const generator = { dispose() {} }
  const core = createWorkflowCore({ store, runner, generator, attachments, workspaceRegistry, currentModel, modelInfoFor,
    profileDir: join(dbRoot, 'not-a-real-profile'), capabilitiesFor, confirmStopped, reconcileNative })
  const host = { root, store, core, runner, executor, attachments, workspaces, scopes, createToolScope, capabilitiesFor, confirmStopped, generationExecutor, generator, modelInfoFor, currentModel, errors }
  hosts.push(host)
  host.createWorkflow = (extra = {}, actor = USER) => core.createWorkflow({ requestId: randomUUID(), workspaceId: 'workspace-core', name: 'Reusable workflow', definition: definition(), ...extra }, actor)
  host.publish = async (permissions = NONE) => {
    const draft = await host.createWorkflow({ definition: definition(permissions) })
    return core.getWorkflow(draft.id)
  }
  host.taskRequest = (workflow, extra = {}) => ({ requestId: randomUUID(), workspaceId: 'workspace-core', workflowId: workflow.id,
    ...(workflow.versionId ? { expectedVersionId: workflow.versionId } : {}),
    title: 'Task title', text: 'Original task input', modelSelection: MODEL, ...extra })
  host.decision = (task, extra = {}) => ({ requestId: randomUUID(), taskId: task.id, expectedRevision: task.revision,
    reviewId: task.review.id, subjectHash: task.review.subjectHash, decision: 'approved', ...extra })
  return host
}
afterEach(async () => {
  for (const host of hosts.splice(0)) {
    host.executor.releaseAll()
    host.generator.dispose()
    try { await host.runner.dispose() } finally { host.store.close() }
  }
  for (const path of directories.splice(0)) removeTemp(path)
})
function noSecrets(value) {
  const blocked = new Set(['rootPath', 'executionScope', 'ownerToken', 'ownerInstanceId', 'snapshotRef', 'executorSnapshot', 'promptPayload', 'inputBundle'])
  if (!value || typeof value !== 'object') return
  for (const [key, child] of Object.entries(value)) { expect(blocked.has(key), key).toBe(false); noSecrets(child) }
}

describe('Workflow deletion authority', () => {
  it('requires a human to delete a task and keeps it out of subsequent overviews', async () => {
    const h = boot(), flow = await h.publish(), task = await h.core.createTask(h.taskRequest(flow), USER)
    const request = { requestId: randomUUID(), taskId: task.id, expectedRevision: task.revision }
    await expect(h.core.deleteTask(request, AGENT)).rejects.toMatchObject({ code: 'WF_HUMAN_REQUIRED' })
    expect(await h.core.deleteTask(request, USER)).toMatchObject({ taskId: task.id, deleted: true })
    expect((await h.core.listTasks(flow.workspaceId)).tasks).toEqual([])
    expect((await h.core.deleteTask(request, USER)).deleted).toBe(true)
  })

  it('keeps deletion human-only and replays the original deletion receipt', async () => {
    const h = boot(), flow = await h.createWorkflow()
    const request = { requestId: randomUUID(), workflowId: flow.id, expectedRevision: flow.revision }
    expect(() => h.core.deleteWorkflow(request, AGENT)).toThrow(expect.objectContaining({ code: 'WF_HUMAN_REQUIRED' }))
    expect(h.core.deleteWorkflow(request, USER)).toEqual({ workflowId: flow.id, deleted: true })
    expect(h.core.deleteWorkflow(request, USER)).toEqual({ workflowId: flow.id, deleted: true })
    expect(h.core.listWorkflows(flow.workspaceId)).toEqual([])
  })
})

describe('real Workflow product Core', () => {
  it('returns lossless JSON task details before and after execution and human review', async () => {
    const h = boot(), workflow = await h.createWorkflow()
    const created = await h.core.createTask(h.taskRequest(workflow), USER)
    const assertJson = value => expect(value).toStrictEqual(JSON.parse(JSON.stringify(value)))
    assertJson(created)
    await h.runner.start(); await h.runner.whenIdle()
    const waiting = await h.core.getTask(created.id)
    expect(waiting.state).toBe('waiting_review')
    expect(waiting.reviews[0].artifactIds).toEqual(waiting.outputs.map(output => output.id))
    assertJson(waiting)
    await h.core.decideReview(h.decision(waiting), USER)
    const completed = await h.core.getTask(created.id)
    expect(completed.state).toBe('completed')
    expect(completed.reviews[0].artifactIds).toEqual(waiting.reviews[0].artifactIds)
    assertJson(completed)
  })

  it('creates a workflow and runs independent tasks directly to human review', async () => {
    const h = boot(), workflow = await h.createWorkflow()
    const first = await h.core.createTask(h.taskRequest(workflow, { title: 'First' }), USER)
    const second = await h.core.createTask(h.taskRequest(workflow, { title: 'Second' }), USER)
    await h.runner.start(); await h.runner.whenIdle()
    expect((await h.core.getTask(first.id)).state).toBe('waiting_review')
    expect((await h.core.getTask(second.id)).state).toBe('waiting_review')
    expect(h.executor.calls).toHaveLength(2)
  })

  it('retains actor identity, refuses payload impersonation and agent publication, and rejects cross-workspace Tasks', async () => {
    const h = boot(), draft = await h.createWorkflow({}, AGENT)
    const publication = { requestId: randomUUID(), workflowId: draft.id, expectedRevision: draft.revision }
    expect(h.core).not.toHaveProperty('publishWorkflow')
    const published = h.core.getWorkflow(draft.id)
    await expect(h.core.createTask(h.taskRequest(published, { workspaceId: 'another-workspace' }), USER)).rejects.toMatchObject({ code: 'WF_WORKSPACE_MISMATCH' })
    await expect(h.core.createTask(h.taskRequest(published, { actor: USER }), AGENT)).rejects.toMatchObject({ code: 'WF_INVALID_INPUT' })
    const task = await h.core.createTask(h.taskRequest(published), AGENT)
    expect(h.store.getTask(task.id).events[0].actor).toEqual(AGENT)
    await expect(h.core.createWorkflow({ requestId: randomUUID(), workspaceId: 'workspace-core', name: 'Spoof', definition: definition(), actor: USER }, AGENT))
      .rejects.toMatchObject({ code: 'WF_INVALID_INPUT' })
    expect(h.store.listTasks()).toHaveLength(1)
    await h.runner.start(); await h.runner.whenIdle()
    const waiting = await h.core.getTask(task.id), before = h.store.getTask(task.id)
    await expect(h.core.decideReview(h.decision(waiting), AGENT)).rejects.toMatchObject({ code: 'WF_HUMAN_REQUIRED' })
    expect(h.store.getTask(task.id)).toEqual(before)
    expect((await h.core.decideReview(h.decision(waiting), USER)).state).toBe('completed')
  })

  it('replays original Workflow and Task creation after workspace loss and later permission publication', async () => {
    const h = boot(), creation = { requestId: randomUUID(), workspaceId: 'workspace-core', name: 'Receipt workflow', definition: definition() }
    const draft = await h.core.createWorkflow(creation, USER)
    const published = await h.core.getWorkflow(draft.id)
    const { expectedVersionId: omittedVersion, ...request } = h.taskRequest(published)
    const original = await h.core.createTask(request, USER)
    const saved = h.core.updateWorkflow({ requestId: randomUUID(), workflowId: published.id, expectedRevision: published.revision,
      name: published.name, definition: definition({ ...NONE, read: true, write: true }) }, USER)
    const v2 = await h.core.getWorkflow(saved.id)
    const next = await h.core.createTask(h.taskRequest(v2), USER)
    expect(h.store.getTask(original.id).executionConfig).toEqual({ policy: 'dsh-native/v1', modelSelection: MODEL })
    expect(h.store.getTask(next.id).executionConfig).not.toHaveProperty('permissions')
    h.workspaces.clear(); removeTemp(h.root)
    expect(await h.core.createWorkflow(creation, USER)).toEqual(draft)
    expect(await h.core.createTask(request, USER)).toEqual(original)
    await expect(h.core.createTask({ ...request, text: 'changed input' }, USER)).rejects.toMatchObject({ code: 'WF_IDEMPOTENCY_CONFLICT' })
    await expect(h.core.createTask(request, AGENT)).rejects.toMatchObject({ code: 'WF_IDEMPOTENCY_CONFLICT' })
    await expect(h.core.createWorkflow(creation, AGENT)).rejects.toMatchObject({ code: 'WF_IDEMPOTENCY_CONFLICT' })
    await expect(h.core.createWorkflow({ ...creation, workspaceId: 'different' }, USER)).rejects.toMatchObject({ code: 'WF_IDEMPOTENCY_CONFLICT' })
  })

  it.each([true, false])('rejects a publication race while model metadata awaits (explicit pin=%s)', async explicit => {
    const h = boot(), workflow = await h.publish({ ...NONE, read: true })
    const entered = deferred(), release = deferred()
    h.modelInfoFor.mockImplementationOnce(async () => { entered.resolve(); await release.promise; return null })
    const { expectedVersionId, ...base } = h.taskRequest(workflow)
    const pending = h.core.createTask(explicit ? { ...base, expectedVersionId } : base, USER)
    const rejection = expect(pending).rejects.toMatchObject({ code: 'WF_VERSION_CHANGED' })
    await entered.promise
    const saved = h.core.updateWorkflow({ requestId: randomUUID(), workflowId: workflow.id, expectedRevision: workflow.revision,
      name: workflow.name, definition: { ...workflow.definition, stages: [{ ...workflow.definition.stages[0], prompt: 'Entirely new instructions' }] } }, USER)
    const v2 = await h.core.getWorkflow(saved.id)
    release.resolve()
    await rejection
    expect(h.store.listTasks()).toEqual([])
    expect(h.executor.calls).toEqual([])
    await expect(h.core.createTask(h.taskRequest(workflow), USER)).rejects.toMatchObject({ code: 'WF_VERSION_CHANGED' })
  })

  it('public projections omit internal secrets and artifact reads are readonly and task-associated', async () => {
    const h = boot(), workflow = await h.publish({ ...NONE, read: true })
    const first = await h.core.createTask(h.taskRequest(workflow), USER), second = await h.core.createTask(h.taskRequest(workflow), USER)
    await h.runner.start(); await h.runner.whenIdle()
    const view = await h.core.getTask(first.id), internal = h.store.getTask(first.id)
    for (const value of [view, await h.core.listTasks('workspace-core'), h.core.getWorkflow(workflow.id)]) noSecrets(value)
    const serialized = JSON.stringify(view)
    expect(serialized).not.toContain(internal.attempts[0].ownerToken)
    expect(serialized).not.toContain(h.root)
    expect(serialized).not.toContain(internal.artifacts[0].snapshotRef)
    const artifact = await h.core.getArtifact(first.id, view.outputs[0].id)
    expect(artifact.text).toBe('Fixture result 1')
    noSecrets(artifact)
    expect(h.store.getTask(first.id)).toEqual(internal)
    await expect(h.core.getArtifact(second.id, view.outputs[0].id)).rejects.toMatchObject({ code: 'WF_ARTIFACT_NOT_FOUND' })
    expect(view.canReview).toBe(true)
  })

  it('missing or corrupt immutable output disables review and blocks approval without changing SQL facts', async () => {
    const h = boot(), workflow = await h.publish(), created = await h.core.createTask(h.taskRequest(workflow), USER)
    await h.runner.start(); await h.runner.whenIdle()
    const before = h.store.getTask(created.id), ref = JSON.parse(before.artifacts[0].snapshotRef)
    h.attachments.objects.set(ref.attachmentId, Buffer.from('tampered'))
    const view = await h.core.getTask(created.id, { includeOutputText: true })
    expect(view.canReview).toBe(false)
    expect(view.outputs[0]).toMatchObject({ unavailable: true, text: '' })
    await expect(h.core.decideReview(h.decision(view), USER)).rejects.toMatchObject({ code: 'WF_ARTIFACT_UNAVAILABLE' })
    await expect(h.core.getArtifact(created.id, view.outputs[0].id)).rejects.toMatchObject({ code: 'WF_ARTIFACT_UNAVAILABLE' })
    expect(h.store.getTask(created.id)).toEqual(before)
  })

  it('passes the workspace and model to DSH without tool injection or a permission snapshot', async () => {
    const h = boot({ unavailable: true }), workflow = await h.publish(ALL), task = await h.core.createTask(h.taskRequest(workflow), USER)
    await h.runner.start(); await h.runner.whenIdle()
    const request = h.executor.calls[0]
    expect(request.cwd).toBe(join(h.root, '.dsh', 'workflow-artifacts', task.id))
    expect(request.modelSelection).toEqual(MODEL)
    expect(request).not.toHaveProperty('tools')
    expect(request).not.toHaveProperty('toolScope')
    expect(h.createToolScope).not.toHaveBeenCalled()
    expect(h.capabilitiesFor).not.toHaveBeenCalled()
    expect(h.store.getTask(task.id)).toMatchObject({ state: 'waiting_review', attempts: [{ executorSnapshot: { policy: 'dsh-native/v1' } }] })
  })

  it('runs an existing task through DSH while preserving its obsolete frozen configuration', async () => {
    const h = boot(), workflow = await h.publish()
    const config = { policy: PROJECT_POLICY, permissions: NONE, modelSelection: MODEL }
    const task = h.store.createTask({ requestId: randomUUID(), workflowId: workflow.id,
      title: 'Existing task', input: { text: 'Existing input' }, executionConfig: config }, USER)
    await h.runner.start(); await h.runner.whenIdle()
    const saved = h.store.getTask(task.id)
    expect(saved.state).toBe('waiting_review')
    expect(saved.executionConfig).toEqual(config)
    expect(saved.attempts[0].executorSnapshot).toMatchObject({ policy: 'dsh-native/v1' })
    expect(h.executor.calls[0].cwd).toBe(join(h.root, '.dsh', 'workflow-artifacts', task.id))
    expect(h.executor.calls[0]).not.toHaveProperty('tools')
  })

  it('workspace preflight failure never constructs tools or dispatches', async () => {
    const h = boot(), workflow = await h.publish(), task = await h.core.createTask(h.taskRequest(workflow), USER)
    h.workspaces.clear()
    await h.runner.start(); await h.runner.whenIdle()
    expect(h.store.getTask(task.id)).toMatchObject({ state: 'needs_attention', attempts: [] })
    expect(h.createToolScope).not.toHaveBeenCalled()
    expect(h.executor.calls).toEqual([])
  })

  it('cancel waits for executor stop and disposes its scope without approving or advancing', async () => {
    const h = boot({ manual: true }), workflow = await h.publish({ ...NONE, read: true })
    const created = await h.core.createTask(h.taskRequest(workflow), USER)
    await h.runner.start()
    const run = await h.executor.waitForRun(0), running = h.store.getTask(created.id)
    await h.core.terminateTask({ requestId: randomUUID(), taskId: created.id, expectedRevision: running.revision }, USER)
    await h.runner.whenIdle()
    expect(h.executor.cancelCalls).toEqual([run.attemptId])
    expect(run.signal.aborted).toBe(true)
    expect(h.store.getTask(created.id)).toMatchObject({ state: 'terminated', review: null, reviews: [], effectiveArtifacts: [] })
    await h.runner.dispose()
    expect(h.executor.disposed).toBe(true)
  })
})

describe('Workflow stage models and frozen execution', () => {
  const info = { reasoning: { efforts: [{ id: 'high', name: 'High' }, { id: 'ultra', name: 'Ultra' }], defaultEffort: 'ultra' } }
  const native = { ...MODEL, reasoningEffort: 'high' }
  const configured = modelSelection => ({ ...definition(), stages: definition().stages.map(stage => stage.kind === 'agent' ? { ...stage, modelSelection } : stage) })

  it('does not load task model controls while listing tasks', async () => {
    const h = boot({ modelInfo: info })
    expect(await h.core.listTasks('workspace-core')).not.toHaveProperty('modelSelection')
    expect(h.currentModel).not.toHaveBeenCalled()
    expect(h.modelInfoFor).not.toHaveBeenCalled()
  })

  it.each([{ ...MODEL, reasoningEffort: 'ultra' }, MODEL])('uses a stage model without a Workflow Ultra ban: %j', async modelSelection => {
    const h = boot({ modelInfo: info }), workflow = await h.createWorkflow({ definition: configured(modelSelection) })
    const created = await h.core.createTask(h.taskRequest(workflow, { modelSelection: { provider: 'ignored', model: 'task-override' } }), USER)
    expect(created.stages[0].modelSelection).toEqual(modelSelection)
    expect(created.executionModel).toEqual(modelSelection)
    expect(h.currentModel).not.toHaveBeenCalled()
  })

  it('uses each frozen stage model after workflow edits, global changes and a human return', async () => {
    const h = boot({ modelInfo: info }), first = { ...MODEL, reasoningEffort: 'ultra' }, second = { provider: 'second', model: 'second-model', reasoningEffort: 'high' }
    const def = configured(first)
    def.stages.splice(1, 0, { id: 'second', kind: 'agent', title: 'Second', prompt: 'Use the first result.', modelSelection: second })
    const workflow = await h.createWorkflow({ definition: def }), created = await h.core.createTask(h.taskRequest(workflow), USER)
    const edited = structuredClone(def); edited.stages[0].modelSelection = second
    await h.core.updateWorkflow({ requestId: randomUUID(), workflowId: workflow.id, expectedRevision: workflow.revision, name: workflow.name, definition: edited }, USER)
    h.currentModel.mockReturnValue({ provider: 'changed', model: 'changed-global' })
    await h.runner.start(); await h.runner.whenIdle()
    expect(h.executor.calls.map(call => call.modelSelection)).toEqual([first, second])
    const review = await h.core.getTask(created.id)
    await h.core.decideReview(h.decision(review, { decision: 'returned', feedback: 'Recheck the sources.' }), USER)
    await h.runner.whenIdle()
    expect(h.executor.calls.map(call => call.modelSelection)).toEqual([first, second, first, second])
    expect(h.store.getTask(created.id).attempts.map(attempt => attempt.executorSnapshot.modelSelection)).toEqual([first, second, first, second])
    expect((await h.core.listTasks('workspace-core')).tasks[0].inputText).toBe('Original task input')
  })

  it('rejects a stage effort unsupported by its actual model before creating a task', async () => {
    const h = boot({ modelInfo: info }), workflow = await h.createWorkflow({ definition: configured({ ...MODEL, reasoningEffort: 'invented' }) })
    await expect(h.core.createTask(h.taskRequest(workflow), USER)).rejects.toMatchObject({ code: 'WF_MODEL_UNSUPPORTED' })
    expect(h.store.listTasks()).toEqual([])
    expect(h.executor.calls).toEqual([])
  })

  it('replays a committed create before metadata, ignoring removed task model settings but detecting changed input', async () => {
    const h = boot({ modelInfo: info }), workflow = await h.createWorkflow({ definition: configured(native) }), request = h.taskRequest(workflow)
    const created = await h.core.createTask(request, USER)
    h.modelInfoFor.mockClear().mockRejectedValue(new Error('offline'))
    expect(await h.core.createTask({ ...request, modelSelection: { ...MODEL, reasoningEffort: 'ultra' } }, USER)).toEqual(created)
    await expect(h.core.createTask({ ...request, text: 'Changed input' }, USER)).rejects.toMatchObject({ code: 'WF_IDEMPOTENCY_CONFLICT' })
    expect(h.modelInfoFor).not.toHaveBeenCalled()
  })

  it('checks the frozen current-stage model on retry and replays a committed retry without metadata', async () => {
    const h = boot({ modelInfo: info, failScope: true }), workflow = await h.createWorkflow({ definition: configured(native) })
    const created = await h.core.createTask(h.taskRequest(workflow), USER)
    await h.runner.start(); await h.runner.whenIdle(); await h.runner.dispose()
    const before = h.store.getTask(created.id), request = { requestId: randomUUID(), taskId: created.id, expectedRevision: before.revision }
    h.modelInfoFor.mockClear().mockRejectedValueOnce(new Error('unavailable'))
    await expect(h.core.retryTask(request, USER)).rejects.toMatchObject({ code: 'WF_MODEL_UNAVAILABLE' })
    expect(h.modelInfoFor).toHaveBeenCalledExactlyOnceWith(native, undefined)
    expect(h.store.getTask(created.id)).toEqual(before)
    h.modelInfoFor.mockResolvedValue(info)
    const retried = await h.core.retryTask(request, USER)
    h.modelInfoFor.mockClear().mockRejectedValue(new Error('offline'))
    expect(await h.core.retryTask(request, USER)).toEqual(retried)
    expect(h.modelInfoFor).not.toHaveBeenCalled()
  })
})

describe('Core native interrupted execution recovery', () => {
  async function interrupted() {
    const reconcileNative = vi.fn(async (attempt, commit) => commit({ kind: 'dsh-native-stop', attemptId: attempt.id,
      sessionId: attempt.sessionId, requestId: attempt.requestId, messageId: attempt.messageId, turnNumber: attempt.turnNumber,
      ownership: 'live-idle', logLastSeq: 12, quiescent: true, ownedJobCount: 0 }))
    const h = boot({ reconcileNative }), flow = await h.createWorkflow(), created = await h.core.createTask(h.taskRequest(flow), USER)
    const attempt = h.store.prepareAttempt({ taskId: created.id, expectedRevision: created.revision, prompt: 'Original input',
      executorSnapshot: { policy: 'dsh-native/v1' }, ownerInstanceId: 'previous-host' })
    h.store.observeAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, messageId: 'original-message', turnNumber: 1 })
    await h.runner.start(); await h.runner.whenIdle()
    const task = h.store.getTask(created.id)
    return { h, reconcileNative, task, request: { taskId: task.id, expectedRevision: task.revision, requestId: randomUUID() } }
  }

  it('terminates a restarted native task, frees its slot, and replays without repeating recovery or execution', async () => {
    const { h, reconcileNative, task, request } = await interrupted()
    expect(await h.core.getTask(task.id)).toMatchObject({ canReconcile: true })
    const result = await h.core.terminateTask(request, USER)
    expect(result).toMatchObject({ state: 'terminated', attempts: [{ state: 'cancelled', quiescedAt: expect.any(Number) }] })
    expect(await h.core.terminateTask(request, USER)).toEqual(result)
    expect(reconcileNative).toHaveBeenCalledOnce()
    expect(h.executor.calls).toEqual([])
    const flow = h.store.getWorkflow(task.workflowId)
    const next = await h.core.createTask(h.taskRequest(flow), USER)
    await h.runner.whenIdle()
    expect(h.store.getTask(next.id).state).toBe('waiting_review')
  })

  it('keeps failed recovery retryable through the same terminate command', async () => {
    const { h, reconcileNative, task, request } = await interrupted()
    reconcileNative.mockRejectedValueOnce(Object.assign(new Error('Still running'), { code: 'WF_RECOVERY_RUNNING' }))
    await expect(h.core.terminateTask(request, USER)).rejects.toMatchObject({ code: 'WF_RECOVERY_RUNNING' })
    expect(await h.core.getTask(task.id)).toMatchObject({ state: 'terminating', canReconcile: true })
    expect(h.store.getTask(task.id).attempts[0].quiescedAt).toBeNull()
    expect(await h.core.terminateTask(request, USER)).toMatchObject({ state: 'terminated' })
    expect(h.executor.calls).toEqual([])
  })

  it('does not automatically rerun an interrupted native stage when only reconciling it', async () => {
    const { h, task, request } = await interrupted()
    expect(await h.core.reconcileTask(request, USER)).toMatchObject({ state: 'needs_attention', canRetry: true, canReconcile: false })
    expect(h.store.getTask(task.id).attempts[0].state).toBe('failed')
    expect(h.executor.calls).toEqual([])
  })
})

describe('Core recovery with injected process-stop evidence', () => {
  const runtimeSnapshot = { stopPolicy: 'single-process-journal/v1', hostProcess: { pid: 45001, startedAt: 'Thu Nov 12 14:00:00 2026' } }
  const child = { pid: 45002, startedAt: 'Thu Nov 12 14:00:01 2026' }
  async function interrupted() {
    const h = boot({ runtimeSnapshot }), workflow = await h.publish()
    const old = await h.core.createTask(h.taskRequest(workflow), USER), next = await h.core.createTask(h.taskRequest(workflow), USER)
    const attempt = h.store.prepareAttempt({ taskId: old.id, expectedRevision: old.revision, prompt: 'Legacy work', executorSnapshot: runtimeSnapshot, ownerInstanceId: 'old-host' })
    h.store.recordProcess({ attemptId: attempt.id, ownerToken: attempt.ownerToken, ...child })
    await h.runner.start(); await h.runner.whenIdle()
    const task = h.store.getTask(old.id)
    expect(task.state).toBe('needs_attention')
    expect(task.attempts[0]).toMatchObject({ state: 'unknown', quiescedAt: null, executorSnapshot: runtimeSnapshot })
    expect(h.store.getTask(next.id).state).toBe('queued')
    expect(h.executor.calls).toEqual([])
    return { h, task, next, request: { requestId: randomUUID(), taskId: old.id, expectedRevision: task.revision } }
  }

  it('releases only the recovered slot, wakes another queued Task and replays without rechecking OS proof', async () => {
    const { h, task, next, request } = await interrupted()
    const recovered = await h.core.reconcileTask(request, USER)
    await h.runner.whenIdle()
    expect(recovered).toMatchObject({ state: 'needs_attention', canRetry: true })
    expect(h.store.getTask(task.id)).toMatchObject({ state: 'needs_attention', attempts: [{ state: 'failed' }], reviews: [] })
    expect(h.store.getTask(next.id).state).toBe('waiting_review')
    expect(h.executor.calls).toHaveLength(1)
    expect(h.confirmStopped).toHaveBeenCalledTimes(1)
    expect(h.confirmStopped.mock.calls[0][0]).toMatchObject({ attempt: { id: task.attempts[0].id }, processes: [child] })
    expect(h.confirmStopped.mock.calls[0][0].stop).toBeUndefined()
    h.confirmStopped.mockRejectedValue(new Error('Replay must not consult runtime proof'))
    expect(await h.core.reconcileTask(request, USER)).toEqual(recovered)
    await h.runner.whenIdle()
    expect(h.confirmStopped).toHaveBeenCalledTimes(1)
    expect(h.store.getTask(task.id).attempts).toHaveLength(1)
    expect(h.executor.calls).toHaveLength(1)
  })

  it('rejects agent reconciliation before invoking the trusted stop verifier', async () => {
    const { h, task, request } = await interrupted()
    await expect(h.core.reconcileTask(request, AGENT)).rejects.toMatchObject({ code: 'WF_HUMAN_REQUIRED' })
    expect(h.confirmStopped).not.toHaveBeenCalled()
    expect(h.store.getTask(task.id)).toEqual(task)
    expect(h.executor.calls).toEqual([])
  })

  it('terminates a stale unknown execution through stop:true and settles cancelled rather than retrying it', async () => {
    const { h, task, next, request } = await interrupted()
    const ended = await h.core.terminateTask(request, USER)
    await h.runner.whenIdle()
    expect(h.confirmStopped).toHaveBeenCalledTimes(1)
    expect(h.confirmStopped.mock.calls[0][0]).toMatchObject({ stop: true, processes: [child], attempt: { id: task.attempts[0].id } })
    expect(ended.state).toBe('terminated')
    expect(h.store.getTask(task.id)).toMatchObject({ state: 'terminated', canRetry: false,
      attempts: [{ state: 'cancelled' }], visits: [{ outcome: 'terminated' }], reviews: [] })
    expect(h.store.getTask(next.id).state).toBe('waiting_review')
    expect(h.executor.calls).toHaveLength(1)
  })

  it('retains the slot and terminating state when trusted stop confirmation fails', async () => {
    const { h, task, next, request } = await interrupted()
    h.confirmStopped.mockRejectedValue(Object.assign(new Error('Fixture child remains running'), { code: 'WF_RECOVERY_RUNNING' }))
    await expect(h.core.terminateTask(request, USER)).rejects.toMatchObject({ code: 'WF_RECOVERY_RUNNING' })
    expect(h.confirmStopped.mock.calls[0][0].stop).toBe(true)
    await h.runner.kick(); await h.runner.whenIdle()
    expect(h.store.getTask(task.id)).toMatchObject({ state: 'terminating', canRetry: false,
      attempts: [{ state: 'unknown', quiescedAt: null }], reviews: [] })
    expect(h.store.getTask(next.id)).toMatchObject({ state: 'queued', attempts: [] })
    expect(h.executor.calls).toEqual([])
  })
})
