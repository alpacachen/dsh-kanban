// @vitest-environment node
import { afterEach, describe, expect, it } from 'vitest'
import { createHash, randomUUID } from 'node:crypto'
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import { mkdtempSync, realpathSync, rmSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { tmpdir } from 'node:os'
import { Context } from '@deepseek-ai/cordis'
import { openWorkflowStore } from '../workflow/store.js'
import { createWorkflowRunner, EXECUTOR_POLICY } from '../workflow/runner.js'
import { mountWorkflowReviewApi, WORKFLOW_REVIEW_NAMESPACE as namespace } from '../workflow/review-api.js'
import { publicTask } from '../workflow/index.js'

// Real SQLite, runner, Cordis and public Typert decorator/Service implementation.
// Executor, attachment bytes and Gateway Peer/Invocation are isolated fixtures:
// this does not contact a model, read credentials, or claim live Host verification.
const require = createRequire(import.meta.url)
const toolsRequire = createRequire(require.resolve('@deepseek-ai/dsh-tools'))
const protocol = await import(pathToFileURL(toolsRequire.resolve('@deepseek-ai/dsh-typert-protocol')).href)
const MODEL = { provider: 'test-provider', model: 'test-model' }
const ACTOR = { kind: 'user', id: 'test-owner' }
const DEFINITION = { stages: [
  { id: 'draft', kind: 'agent', title: 'Draft', prompt: 'Summarize the input and follow human feedback.' },
  { id: 'review', kind: 'review', title: 'Review', returnStageId: 'draft' },
] }
const hosts = [], directories = []
const digest = bytes => createHash('sha256').update(bytes).digest('hex')
const deferred = () => {
  let resolve
  const promise = new Promise(done => { resolve = done })
  return { promise, resolve }
}
function temp() {
  const root = realpathSync(mkdtempSync(join(tmpdir(), 'dsh-workflow-integration-')))
  directories.push(root)
  return root
}
function publication(store, root) {
  return store.publishDefinition({ requestId: randomUUID(), workspaceId: 'workspace-test', rootPath: root,
    executionScope: `test:${root}`, name: 'Text validation', definition: DEFINITION }, ACTOR)
}
function attachmentsFixture() {
  const objects = new Map()
  return {
    objects,
    async saveFile({ data, name }) {
      const bytes = Buffer.from(data), attachmentId = `sha256:${digest(bytes)}`
      objects.set(attachmentId, Buffer.from(bytes))
      return { attachmentId, name, bytes: bytes.length }
    },
    async *readFileStream(ref) {
      const bytes = objects.get(ref.attachmentId)
      if (!bytes || bytes.length !== ref.bytes || `sha256:${digest(bytes)}` !== ref.attachmentId) throw new Error('Test attachment missing or corrupted')
      // Exercise the actual bounded stream collector, not just a single string.
      const middle = Math.ceil(bytes.length / 2)
      yield bytes.subarray(0, middle)
      yield bytes.subarray(middle)
    },
  }
}
function executorFixture(manual) {
  const calls = [], cancelCalls = [], gates = new Map(), starts = []
  const start = index => (starts[index] ??= deferred())
  return {
    calls, cancelCalls,
    waitForRun: index => start(index).promise,
    release(attemptId) { gates.get(attemptId)?.resolve() },
    releaseAll() { for (const gate of gates.values()) gate.resolve() },
    async run(request) {
      const index = calls.push(request) - 1
      const gate = deferred()
      gates.set(request.attemptId, gate)
      const messageId = `message-${request.attemptId}`, turnNumber = 1
      await request.onBound({ sessionId: request.sessionId, requestId: request.requestId, messageId })
      await request.onObserved({ sessionId: request.sessionId, requestId: request.requestId, messageId, turnNumber })
      start(index).resolve(request)
      if (manual) await gate.promise
      gates.delete(request.attemptId)
      const text = `Report ${index + 1}: trusted fixture text.`
      return { text, evidence: {
        kind: 'dsh-session-log', policy: 'dsh-native/v1', attemptId: request.attemptId, sessionId: request.sessionId, requestId: request.requestId,
        messageId, turnNumber, completed: true, quiescent: true, flushConfirmed: true,
        toolInvocationCount: 0, ownedJobCount: 0, userSeq: 1, assistantSeq: 2, endSeq: 3,
        endReason: 'completed', outputSha256: digest(Buffer.from(text)),
      } }
    },
    cancel(attemptId) { cancelCalls.push(attemptId); return { requested: true } },
    async dispose() { this.releaseAll() },
  }
}
async function boot({ root = temp(), path = ':memory:', workflow, manual = false, failSettlement = false } = {}) {
  const store = openWorkflowStore(path)
  workflow ??= publication(store, root)
  const attachments = attachmentsFixture(), executor = executorFixture(manual), errors = []
  const runnerStore = failSettlement ? { ...store, finishAttempt() { throw Object.assign(new Error('Injected SQLite settlement failure'), { code: 'WF_TEST_DB' }) } } : store
  const runner = createWorkflowRunner({ store: runnerStore, executor, attachments,
    workspaceRegistry: { get: id => id === 'workspace-test' ? { id, path: root } : undefined },
    ownerInstanceId: 'integration-owner', onError: error => errors.push(error) })
  const context = new Context(), peerAbort = new AbortController()
  const connection = { browserPeer: { id: 'test-browser', principal: { kind: 'owner' }, signal: peerAbort.signal } }
  const core = {
    listTasks: () => store.listTasks().map(task => ({ id: task.id, state: task.state })),
    getTask: id => publicTask(store.getTask(id), attachments),
    async createTask(request, actor) {
      const task = store.createTask({ requestId: request.requestId, workflowId: workflow.workflowId,
        title: request.title, input: { text: request.text }, executionConfig: { policy: EXECUTOR_POLICY, modelSelection: request.modelSelection } }, actor)
      void runner.kick()
      return publicTask(task, attachments)
    },
    async decideReview(request, actor) {
      const task = store.decideReview(request, actor)
      void runner.kick()
      return publicTask(task, attachments)
    },
    async terminateTask(request, actor) {
      const task = store.terminateTask(request, actor)
      if (task.state === 'terminating') await runner.cancelTask(task.id)
      void runner.kick()
      return publicTask(store.getTask(task.id), attachments)
    },
  }
  const host = { store, runner, executor, attachments, context, connection, peerAbort, workflow, root, errors }
  hosts.push(host)
  await context.plugin({ apply(ctx) { ctx.provide('connection', connection); ctx.provide('typertGateway', {}) } })
  host.fiber = mountWorkflowReviewApi(context, core, protocol)
  await host.fiber
  host.api = (method, overrides = {}) => context.extend({ invocation: {
    service: namespace, request: { namespace, method, args: {} }, peer: connection.browserPeer,
    signal: new AbortController().signal, ...overrides,
  } }).get(namespace)
  host.create = (overrides = {}) => host.api('createTask').createTask({ requestId: randomUUID(), workspaceId: 'workspace-test',
    title: 'Integration report', text: 'Original input text.', modelSelection: MODEL, ...overrides })
  host.decision = (task, decision, overrides = {}) => ({ taskId: task.id, reviewId: task.review.id,
    subjectHash: task.review.subjectHash, expectedRevision: task.revision, requestId: randomUUID(), decision, ...overrides })
  return host
}
afterEach(async () => {
  for (const host of hosts.splice(0)) {
    host.executor.releaseAll()
    try { await host.runner.dispose() } finally { await host.context.fiber.dispose(); host.store.close() }
  }
  for (const directory of directories.splice(0)) {
    expect(dirname(directory)).toBe(realpathSync(tmpdir()))
    expect(basename(directory).startsWith('dsh-workflow-integration-')).toBe(true)
    rmSync(directory, { recursive: true, force: true })
  }
})

describe('real Workflow store + runner + browser-only API integration', () => {
  it('stores a safe model-configuration failure without exposing native exception text or producing reviewable output', async () => {
    const host = await boot()
    const original = host.executor.run
    host.executor.run = async request => {
      const proof = await original(request)
      throw Object.assign(new Error('Bearer fixture-secret https://provider.invalid/?api_key=fixture-secret'), { code: 'WORKFLOW_MODEL_UNSUPPORTED', evidence: { ...proof.evidence, completed: false } })
    }
    const created = await host.create()
    await host.runner.start(); await host.runner.whenIdle()
    const saved = host.store.getTask(created.id)
    expect(saved.state).toBe('needs_attention')
    expect(saved.canRetry).toBe(true)
    expect(saved.effectiveArtifacts).toHaveLength(0)
    expect(saved.review).toBeNull()
    const rendered = await publicTask(saved, host.attachments)
    expect(rendered.attempts[0].error).toContain('WORKFLOW_MODEL_UNSUPPORTED')
    expect(rendered.attempts[0].error).toContain('打开执行会话')
    expect(JSON.stringify(rendered)).not.toContain('fixture-secret')
    expect(JSON.stringify(rendered)).not.toContain('provider.invalid')
    expect(rendered.canReview).toBe(false)
  })

  it('creates, runs, returns, creates a fresh attempt, approves with empty feedback, and completes', async () => {
    const host = await boot()
    const created = await host.create()
    await host.runner.start()
    await host.runner.whenIdle()
    let task = await host.api('getTask').getTask(created.id)
    expect(task.state).toBe('waiting_review')
    expect(task.outputs[0].text).toBe('Report 1: trusted fixture text.')
    expect(host.executor.calls).toHaveLength(1)
    const firstInternal = host.store.getTask(task.id), firstSubject = structuredClone(firstInternal.review.subject)
    await host.api('decideReview').decideReview(host.decision(task, 'returned', { feedback: 'Add one concrete citation.' }))
    await host.runner.whenIdle()
    task = await host.api('getTask').getTask(created.id)
    expect(task.state).toBe('waiting_review')
    expect(host.executor.calls).toHaveLength(2)
    expect(host.executor.calls[1].prompt).toContain('Add one concrete citation.')
    expect(host.executor.calls[1].sessionId).not.toBe(host.executor.calls[0].sessionId)
    expect(host.executor.calls[1].requestId).not.toBe(host.executor.calls[0].requestId)
    const afterReturn = host.store.getTask(created.id)
    expect(afterReturn.reviews[0].subject).toEqual(firstSubject)
    expect(afterReturn.visits[0].outcome).toBe('succeeded')
    expect(afterReturn.visits[0].supersededByReviewId).not.toBeNull()
    const approval = host.decision(task, 'approved', { feedback: '' })
    const completed = await host.api('decideReview').decideReview(approval)
    expect(completed.state).toBe('completed')
    expect(completed.review).toBeNull()
    expect(completed.outputs[0].text).toBe('Report 2: trusted fixture text.')
    // A duplicate uses its receipt even after the old expectedRevision is stale.
    expect(await host.api('decideReview').decideReview(approval)).toEqual(completed)
    await host.runner.whenIdle()
    expect(host.executor.calls).toHaveLength(2)
    expect(host.errors).toEqual([])
  })

  it('rejects direct service callers, other owner Peers, and actor spoofing without changing real SQL facts', async () => {
    const host = await boot(), created = await host.create()
    await host.runner.start(); await host.runner.whenIdle()
    const before = host.store.getTask(created.id), request = host.decision(before, 'approved')
    await expect(host.context.get(namespace).decideReview(request)).rejects.toMatchObject({ code: 'workflow/browser-required' })
    await expect(host.api('decideReview', { peer: { ...host.connection.browserPeer } }).decideReview(request))
      .rejects.toMatchObject({ code: 'workflow/browser-required' })
    await expect(host.api('decideReview', { peer: { ...host.connection.browserPeer, principal: { kind: 'agent' } } }).decideReview(request))
      .rejects.toMatchObject({ code: 'workflow/browser-required' })
    await expect(host.api('decideReview').decideReview({ ...request, actor: ACTOR })).rejects.toMatchObject({ code: 'workflow/invalid-input' })
    expect(host.store.getTask(created.id)).toEqual(before)
    // Omitting feedback goes through parseReview's default '', not a mock core.
    expect((await host.api('decideReview').decideReview(request)).state).toBe('completed')
  })

  it('publicTask exposes definition instructions but no internal tokens, references, or execution prompts', async () => {
    const host = await boot(), created = await host.create()
    await host.runner.start(); await host.runner.whenIdle()
    const internal = host.store.getTask(created.id)
    const view = await publicTask(internal, host.attachments)
    const forbidden = new Set(['ownerToken', 'snapshotRef', 'promptPayload', 'executorSnapshot', 'rootPath', 'executionScope'])
    expect(view.stages[0].prompt).toBe(internal.definition.stages[0].prompt)
    expect(view.attempts.every(attempt => !Object.hasOwn(attempt, 'prompt'))).toBe(true)
    function checkKeys(value) {
      if (!value || typeof value !== 'object') return
      for (const [key, child] of Object.entries(value)) { expect(forbidden.has(key), key).toBe(false); checkKeys(child) }
    }
    checkKeys(view)
    const serialized = JSON.stringify(view)
    expect(serialized).not.toContain(internal.attempts[0].ownerToken)
    expect(serialized).not.toContain(internal.attempts[0].prompt)
    expect(serialized).not.toContain(internal.artifacts[0].snapshotRef)
    expect(view.outputs[0].contentHash).toBe(internal.effectiveArtifacts[0].contentHash)
    expect(view.outputs[0].text).toContain('Report 1')
  })

  it('waits for real stop evidence after cancel; late success never creates a review for the terminated task', async () => {
    const host = await boot({ manual: true }), created = await host.create()
    await host.runner.start()
    const first = await host.executor.waitForRun(0)
    const next = await host.create({ title: 'Queued next task' })
    const running = host.store.getTask(created.id)
    const response = await host.api('terminateTask').terminateTask({ taskId: created.id, expectedRevision: running.revision, requestId: randomUUID() })
    expect(response.state).toBe('terminating')
    expect(host.executor.cancelCalls).toEqual([first.attemptId])
    expect(host.store.getTask(created.id).attempts[0].quiescedAt).toBeNull()
    expect(host.executor.calls).toHaveLength(1)
    expect(() => host.store.prepareAttempt({ taskId: next.id, expectedRevision: host.store.getTask(next.id).revision,
      prompt: 'Do not start', executorSnapshot: {}, ownerInstanceId: 'other' })).toThrow(expect.objectContaining({ code: 'WF_SLOT_BUSY' }))
    host.executor.release(first.attemptId) // Simulate late successful output, now proven stopped.
    const second = await host.executor.waitForRun(1)
    const ended = host.store.getTask(created.id)
    expect(ended.state).toBe('terminated')
    expect(ended.review).toBeNull()
    expect(ended.reviews).toEqual([])
    expect(ended.attempts[0].state).toBe('succeeded')
    expect(ended.effectiveArtifacts).toEqual([])
    expect(ended.artifacts).toHaveLength(1)
    host.executor.release(second.attemptId)
    await host.runner.whenIdle()
    expect(host.store.getTask(next.id).state).toBe('waiting_review')
  })

  it('cold reopening recovers unknown without a second dispatch and retains its directory slot', async () => {
    const root = temp(), path = join(root, 'workflow.sqlite'), initial = openWorkflowStore(path)
    let workflow, task, attempt
    try {
      workflow = publication(initial, root)
      task = initial.createTask({ requestId: randomUUID(), workflowId: workflow.workflowId, title: 'Interrupted',
        input: { text: 'x' }, executionConfig: { policy: EXECUTOR_POLICY, modelSelection: MODEL } }, ACTOR)
      attempt = initial.prepareAttempt({ taskId: task.id, expectedRevision: task.revision, prompt: 'Prior dispatch intent',
        executorSnapshot: { policy: EXECUTOR_POLICY }, ownerInstanceId: 'old-process' })
    } finally { initial.close() }
    const host = await boot({ root, path, workflow })
    await host.runner.start(); await host.runner.whenIdle()
    const recovered = host.store.getTask(task.id)
    expect(recovered.state).toBe('needs_attention')
    expect(recovered.attempts).toHaveLength(1)
    expect(recovered.attempts[0]).toMatchObject({ id: attempt.id, sessionId: attempt.sessionId, requestId: attempt.requestId, state: 'unknown', quiescedAt: null })
    expect(host.executor.calls).toEqual([])
    const next = await host.create()
    await host.runner.whenIdle(); await host.runner.kick(); await host.runner.whenIdle()
    expect(host.store.getTask(next.id).state).toBe('queued')
    expect(host.executor.calls).toEqual([])
    expect(host.store.getTask(task.id).attempts).toHaveLength(1)
  })

  it('a pre-start API kick cannot dispatch before startup reconciliation', async () => {
    const host = await boot(), created = await host.create()
    await host.runner.kick(); await host.runner.whenIdle()
    expect(host.executor.calls).toEqual([])
    expect(host.store.getTask(created.id).attempts).toEqual([])
    expect(host.store.getTask(created.id).state).toBe('queued')
    await host.runner.start(); await host.runner.whenIdle()
    expect(host.executor.calls).toHaveLength(1)
    expect(host.store.getTask(created.id).state).toBe('waiting_review')
  })

  it('a database settlement failure never redispatches or frees the real stored slot', async () => {
    const host = await boot({ failSettlement: true }), created = await host.create()
    await host.runner.start(); await host.runner.whenIdle()
    expect(host.executor.calls).toHaveLength(1)
    expect(host.store.getTask(created.id).state).toBe('running')
    expect(host.store.getTask(created.id).attempts).toHaveLength(1)
    expect(host.store.getTask(created.id).attempts[0].quiescedAt).toBeNull()
    expect(host.errors.some(error => error.code === 'WF_TEST_DB')).toBe(true)
    expect(host.attachments.objects.size).toBe(1) // Allowed orphan, not a false committed Artifact.
    expect(host.store.getTask(created.id).artifacts).toEqual([])
    const next = await host.create()
    await host.runner.whenIdle(); await host.runner.kick(); await host.runner.whenIdle()
    expect(host.executor.calls).toHaveLength(1)
    expect(host.store.getTask(next.id).state).toBe('queued')
  })
})
