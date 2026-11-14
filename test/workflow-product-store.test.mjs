// @vitest-environment node
import { afterEach, describe, expect, it } from 'vitest'
import { createHash, randomUUID } from 'node:crypto'
import { DatabaseSync } from 'node:sqlite'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { tmpdir } from 'node:os'
import { openWorkflowStore, validateWorkflowDefinition } from '../workflow/store.js'

const USER = { kind: 'user', id: 'isolated-product-test' }
const AGENT = { kind: 'agent', id: 'chat-agent' }
const OTHER = { kind: 'user', id: 'other-product-test' }
const PROJECT_POLICY = 'workflow-project/v1'
const NO_PERMISSIONS = { web: false, read: false, write: false, command: false }
const stores = [], directories = []
const agent = (id = 'write') => ({ id, kind: 'agent', title: `Stage ${id}`, prompt: `Write ${id}` })
const review = (id = 'review', returnStageId = 'write') => ({ id, kind: 'review', title: 'Review output', returnStageId })
const definition = () => ({ description: 'Reusable research', inputLabel: 'Research topic', inputHint: 'Describe your question', stages: [agent(), review()] })
function temp() {
  const path = realpathSync(mkdtempSync(join(tmpdir(), 'dsh-workflow-product-')))
  directories.push(path)
  return path
}
function open(path = ':memory:') {
  const store = openWorkflowStore(path)
  stores.push(store)
  return store
}
afterEach(() => {
  for (const store of stores.splice(0)) store.close()
  for (const path of directories.splice(0)) {
    expect(dirname(path)).toBe(realpathSync(tmpdir()))
    expect(basename(path).startsWith('dsh-workflow-product-')).toBe(true)
    rmSync(path, { recursive: true, force: true })
  }
})
function createPayload(extra = {}) {
  const root = temp()
  return { requestId: randomUUID(), workspaceId: 'workspace-product', rootPath: root, executionScope: `test:${root}`,
    name: 'Research workflow', definition: definition(), ...extra }
}
function command(workflow, extra = {}) {
  return { requestId: randomUUID(), workflowId: workflow.id, expectedRevision: workflow.revision, ...extra }
}
function publish(store, extra = {}) {
  return store.createWorkflow(createPayload(extra), USER)
}
function taskPayload(workflowId, extra = {}) {
  return { requestId: randomUUID(), workflowId, title: 'Research A', input: { text: 'Compare A and B' }, executionConfig: {}, ...extra }
}
function prepare(store, task) {
  return store.prepareAttempt({ taskId: task.id, expectedRevision: store.getTask(task.id).revision,
    prompt: 'Write a result', executorSnapshot: {}, ownerInstanceId: 'product-test' })
}
function evidence(attempt, extra = {}) {
  return { kind: 'dsh-session-log', attemptId: attempt.id, sessionId: attempt.sessionId, requestId: attempt.requestId,
    messageId: `message-${attempt.id}`, turnNumber: 1, completed: true, flushConfirmed: true,
    quiescent: true, ownedJobCount: 0, toolInvocationCount: 0, ...extra }
}
function finish(store, attempt, outcome = 'succeeded', extra = {}) {
  const bytes = Buffer.from(`Result ${attempt.id}`), contentHash = createHash('sha256').update(bytes).digest('hex')
  const artifact = { snapshotRef: JSON.stringify({ attachmentId: `sha256:${contentHash}`, name: 'result.txt', bytes: bytes.length }),
    contentHash, byteLength: bytes.length, label: 'Result', mediaType: 'text/plain' }
  return store.finishAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, outcome,
    ...(outcome === 'succeeded' ? { artifact } : { error: { code: 'TEST_FAILURE', message: 'Known stopped failure' } }),
    evidence: evidence(attempt, { completed: outcome === 'succeeded' }), ...extra })
}
function retryPayload(task) {
  return { requestId: randomUUID(), taskId: task.id, expectedRevision: task.revision }
}
function rejects(code, callback) {
  let error
  try { callback() } catch (caught) { error = caught }
  expect(error, `Expected ${code}`).toBeDefined()
  expect(error.code).toBe(code)
}

describe('workflows without draft, publication or enabled states', () => {
  it('creates a complete workflow ready for tasks immediately', () => {
    const store = open(), workflow = store.createWorkflow(createPayload(), USER)
    expect(workflow.definition.stages).toHaveLength(2)
    expect(workflow.versionNumber).toBe(1)
    for (const key of ['draft', 'acceptingTasks', 'publishedDefinition', 'publishedVersionId', 'hasUnpublishedChanges']) expect(workflow).not.toHaveProperty(key)
    expect(store.createTask(taskPayload(workflow.id), USER).state).toBe('queued')
    for (const key of ['publishWorkflow', 'setWorkflowEnabled', 'saveWorkflowDraft']) expect(store).not.toHaveProperty(key)
  })
  it('rejects incomplete definitions atomically instead of saving drafts', () => {
    const store = open()
    expect(() => store.createWorkflow(createPayload({ definition: { stages: [] } }), USER)).toThrow()
    expect(store.listWorkflows()).toEqual([])
    const workflow = publish(store)
    expect(() => store.updateWorkflow(command(workflow, { name: workflow.name, definition: { stages: [review()] } }), USER)).toThrow()
    expect(store.getWorkflow(workflow.id)).toEqual(workflow)
  })
  it('updates the current definition while existing tasks retain their immutable snapshots', () => {
    const store = open(), workflow = publish(store), first = store.createTask(taskPayload(workflow.id), USER)
    const changed = { ...definition(), stages: [{ ...agent(), title: 'Changed', prompt: 'New instruction' }, review()] }
    const updated = store.updateWorkflow(command(workflow, { name: 'New name', definition: changed }), { kind: 'agent', id: 'designer' })
    expect(updated.versionNumber).toBe(2)
    expect(updated.definition).toEqual(changed)
    const second = store.createTask(taskPayload(workflow.id), USER)
    expect(first.versionNumber).toBe(1); expect(second.versionNumber).toBe(2)
    expect(store.getTask(first.id).definition.stages[0].prompt).toBe(agent().prompt)
    expect(store.getTask(second.id).definition.stages[0].prompt).toBe('New instruction')
  })
  it('replays saves before checking current revision and rejects altered actors or content', () => {
    const store = open(), request = createPayload(), original = store.createWorkflow(request, USER)
    const edit = command(original, { name: 'Edited', definition: definition() }), saved = store.updateWorkflow(edit, USER)
    expect(store.createWorkflow(request, USER)).toEqual(original)
    expect(store.updateWorkflow(edit, USER)).toEqual(saved)
    rejects('WF_IDEMPOTENCY_CONFLICT', () => store.updateWorkflow(edit, OTHER))
    rejects('WF_STALE_REVISION', () => store.updateWorkflow(command(original, { name: 'Stale', definition: definition() }), USER))
  })
  it('pins new task creation to the viewed snapshot and replays existing receipts', () => {
    const store = open(), workflow = publish(store), request = taskPayload(workflow.id, { expectedVersionId: workflow.versionId })
    const original = store.createTask(request, USER)
    store.updateWorkflow(command(workflow, { name: workflow.name, definition: { ...definition(), stages: [agent('new')] } }), USER)
    expect(store.createTask(request, USER)).toEqual(original)
    rejects('WF_VERSION_CHANGED', () => store.createTask({ ...request, requestId: randomUUID() }, USER))
  })
  it('opens existing versioned workflows without changing historical records or requiring enablement', () => {
    const root = temp(), path = join(root, 'legacy.sqlite'), store = open(path)
    const legacy = store.publishDefinition({ ...createPayload(), definition: { stages: [agent(), review()] } }, USER)
    store.close()
    const sql = new DatabaseSync(path)
    sql.prepare('UPDATE wf_workflows SET accepting_tasks=0 WHERE id=?').run(legacy.workflowId); sql.close()
    const reopened = open(path)
    const task = reopened.createTask(taskPayload(legacy.workflowId), USER)
    expect(task.state).toBe('queued')
    expect(task.versionNumber).toBe(1)
    expect(reopened.getWorkflow(legacy.workflowId).definition.stages).toHaveLength(2)
  })
})

describe('native DSH execution receipts', () => {
  it('ignores obsolete definition permissions and accepts a native report while preserving human review', () => {
    const store = open(), workflow = publish(store, { definition: { ...definition(), permissions: NO_PERMISSIONS } })
    expect(workflow.definition).not.toHaveProperty('permissions')
    const task = store.createTask(taskPayload(workflow.id, { executionConfig: { policy: 'dsh-native/v1' } }), USER)
    const attempt = store.prepareAttempt({ taskId: task.id, expectedRevision: task.revision, prompt: 'Work', ownerInstanceId: 'native', executorSnapshot: { policy: 'dsh-native/v1' } })
    const result = finish(store, attempt, 'succeeded', { evidence: evidence(attempt, { policy: 'dsh-native/v1', userSeq: 1, assistantSeq: 500, endSeq: 501, toolInvocationCount: 140 }) })
    expect(result.state).toBe('waiting_review')
    expect(result.review.state).toBe('pending')
  })
  it.each([{ policy: 'foreign' }, { userSeq: 9 }, { assistantSeq: 10 }, { endSeq: 2 }, { completed: false }, { quiescent: false }, { flushConfirmed: false }, { ownedJobCount: 1 }])('rejects incomplete or foreign native success evidence %j atomically', changes => {
    const store = open(), workflow = publish(store), task = store.createTask(taskPayload(workflow.id), USER)
    const attempt = store.prepareAttempt({ taskId: task.id, expectedRevision: task.revision, prompt: 'Work', ownerInstanceId: 'native', executorSnapshot: { policy: 'dsh-native/v1' } })
    const before = store.getTask(task.id)
    expect(() => finish(store, attempt, 'succeeded', { evidence: evidence(attempt, { policy: 'dsh-native/v1', userSeq: 1, assistantSeq: 2, endSeq: 3, ...changes }) })).toThrow()
    expect(store.getTask(task.id)).toEqual(before)
  })
})

describe('lightweight product reads and strict generation validation', () => {
  it('exports strict validation with normalized metadata and detached data, never draft leniency', () => {
    const input = { stages: [agent()] }, result = validateWorkflowDefinition(input)
    expect(result).toEqual({ ...input, description: '', inputLabel: '', inputHint: '' })
    result.stages[0].prompt = 'Changed only in returned value'
    expect(input.stages[0].prompt).toBe('Write write')
    rejects('WF_INVALID_DEFINITION', () => validateWorkflowDefinition({ stages: [] }))
    rejects('WF_INVALID_INPUT', () => validateWorkflowDefinition({ stages: [{ id: 'a', kind: 'agent', title: 'A' }] }))
    rejects('WF_INVALID_INPUT', () => validateWorkflowDefinition({ ...definition(), toolPolicy: {} }))
    rejects('WF_INVALID_DEFINITION', () => validateWorkflowDefinition({ stages: [agent(), review('review', 'later'), agent('later')] }))
  })

  it('saves agent-stage models and rejects model fields on human review nodes', () => {
    const configured = definition(), selection = { provider: 'provider', model: 'model', reasoningEffort: 'ultra' }
    configured.stages[0].modelSelection = selection
    expect(validateWorkflowDefinition(configured).stages[0].modelSelection).toEqual(selection)
    for (const patch of [{ provider: 'provider' }, { ...selection, token: 'forged' }, { ...selection, reasoningEffort: '' }]) {
      rejects('WF_INVALID_INPUT', () => validateWorkflowDefinition({ ...configured, stages: [{ ...configured.stages[0], modelSelection: patch }] }))
    }
    rejects('WF_INVALID_DEFINITION', () => validateWorkflowDefinition({ ...configured, stages: [configured.stages[0], { ...review(), modelSelection: selection }] }))
  })

  it('returns exact path-free Task summaries with bound versions and current safe retry eligibility', () => {
    const store = open(), workflow = publish(store), other = publish(store, { workspaceId: 'other-workspace' })
    const failedTask = store.createTask(taskPayload(workflow.id), USER)
    finish(store, prepare(store, failedTask), 'failed')
    const reviewTask = store.createTask(taskPayload(other.id), USER)
    finish(store, prepare(store, reviewTask))
    const saved = store.updateWorkflow(command(workflow, { name: 'Current name', definition: { stages: [agent('updated')] } }), USER)
    const latest = store.getWorkflow(saved.id)
    const running = store.createTask(taskPayload(latest.id), USER)
    prepare(store, running)
    const expected = store.listTasks().map(task => ({ id: task.id, workflowId: task.workflowId, workflowName: task.workflowName,
      workflowVersionId: task.workflowVersionId, versionNumber: task.versionNumber, workspaceId: task.workspaceId, title: task.title, inputText: task.input.text, state: task.state,
      revision: task.revision, stageTitle: task.currentStage.title, createdAt: task.createdAt, updatedAt: task.updatedAt, canRetry: task.canRetry }))
    expect(store.listTaskSummaries()).toEqual(expected)
    expect(store.listTaskSummaries(workflow.workspaceId)).toEqual(expected.filter(task => task.workspaceId === workflow.workspaceId))
    expect(store.listTaskSummaries('missing')).toEqual([])
    expect(store.listTaskSummaries().find(task => task.id === failedTask.id)).toMatchObject({ versionNumber: 1, workflowName: 'Current name', canRetry: true })
    expect(store.listTaskSummaries().find(task => task.id === running.id)).toMatchObject({ versionNumber: 2, stageTitle: 'Stage updated', canRetry: false })
    const [unknown] = store.recoverInterrupted('new-owner')
    expect(store.listTaskSummaries().find(task => task.id === unknown.id).canRetry).toBe(false)
    rejects('WF_INVALID_INPUT', () => store.listTaskSummaries(''))
    store.close()
    rejects('WF_STORE_CLOSED', () => store.listTaskSummaries())
  })
})

describe('durable process journals and explicit human recovery', () => {
  const hostProcess = { pid: 43001, startedAt: 'Thu Nov 12 14:00:00 2026' }
  const child = { pid: 43002, startedAt: 'Thu Nov 12 14:00:01 2026' }
  function fixture({ policy = true, persistent = false } = {}) {
    const path = persistent ? join(temp(), 'journal.sqlite') : ':memory:'
    const store = open(path), workflow = publish(store), task = store.createTask(taskPayload(workflow.id), USER)
    const snapshot = policy ? { stopPolicy: 'single-process-journal/v1', hostProcess } : {}
    const request = { taskId: task.id, expectedRevision: task.revision, prompt: 'A journalled execution',
      executorSnapshot: snapshot, ownerInstanceId: 'original-host' }
    const attempt = store.prepareAttempt(request)
    const registration = { attemptId: attempt.id, ownerToken: attempt.ownerToken, ...child }
    store.recordProcess(registration)
    return { store, path, workflow, task, attempt, registration, request }
  }
  function recoveryEvidence(store, attempt, extra = {}) {
    return { kind: 'workflow-process-journal', attemptId: attempt.id, sessionId: attempt.sessionId, requestId: attempt.requestId,
      hostProcess, processes: store.getAttemptProcesses(attempt.id), quiescent: true, ownedJobCount: 0,
      hostStopped: true, processesStopped: true, ...extra }
  }
  function interrupt(store, task) {
    store.recoverInterrupted('replacement-host')
    return store.getTask(task.id)
  }

  it('journals fenced process births durably, deduplicates repeats, and cannot append after losing active ownership', () => {
    const { store, path, task, attempt, registration } = fixture({ persistent: true })
    const before = store.getTask(task.id)
    expect(store.recordProcess(registration)).toEqual(child)
    expect(store.getTask(task.id)).toEqual(before)
    rejects('WF_OWNER_MISMATCH', () => store.recordProcess({ ...registration, ownerToken: 'wrong' }))
    for (const pid of [0, 1, -1, 1.2]) rejects('WF_INVALID_INPUT', () => store.recordProcess({ ...registration, pid }))
    rejects('WF_INVALID_INPUT', () => store.recordProcess({ ...registration, startedAt: 'x'.repeat(81) }))
    store.observeAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, turnNumber: 1 })
    const second = { pid: child.pid, startedAt: 'Thu Nov 12 14:00:02 2026' }
    store.recordProcess({ ...registration, ...second })
    expect(store.getAttemptProcesses(attempt.id)).toEqual([child, second])
    expect(store.getTask(task.id).events.filter(event => event.kind === 'attempt.process_registered').map(event => event.data))
      .toEqual([{ attemptId: attempt.id, ...child }, { attemptId: attempt.id, ...second }])
    store.close()
    const reopened = open(path)
    expect(reopened.getAttemptProcesses(attempt.id)).toEqual([child, second])
    interrupt(reopened, task)
    rejects('WF_ATTEMPT_NOT_ACTIVE', () => reopened.recordProcess(registration))
  })

  it('recovers a verified unknown Attempt only to failed, releases its own slot and requires a separate retry', () => {
    const { store, task, attempt } = fixture()
    const unknown = interrupt(store, task), request = retryPayload(unknown)
    expect(unknown.canRetry).toBe(false)
    const recovered = store.reconcileTask(request, USER, recoveryEvidence(store, attempt))
    expect(recovered).toMatchObject({ state: 'needs_attention', canRetry: true, currentVisitId: unknown.currentVisitId,
      attempts: [{ state: 'failed', evidence: { kind: 'workflow-process-journal' } }], reviews: [], currentArtifactIds: [] })
    expect(recovered.revision).toBe(unknown.revision + 1)
    expect(recovered.attempts[0].quiescedAt).toEqual(expect.any(Number))
    expect(recovered.visits).toEqual(unknown.visits)
    expect(recovered.events.at(-1)).toMatchObject({ kind: 'attempt.reconciled', actor: USER,
      data: { outcome: 'failed', previousEvidence: unknown.attempts[0].evidence } })
    const queued = store.retryTask(retryPayload(recovered), USER), retried = prepare(store, queued)
    expect(retried).toMatchObject({ visitId: attempt.visitId, attemptNumber: 2 })
    expect(store.reconcileTask(request, USER, undefined)).toEqual(recovered)
    expect(store.getTask(task.id).attempts[1].state).toBe('prepared')
    rejects('WF_IDEMPOTENCY_CONFLICT', () => store.reconcileTask(request, OTHER, recoveryEvidence(store, attempt)))
    rejects('WF_IDEMPOTENCY_CONFLICT', () => store.reconcileTask({ ...request, expectedRevision: 999 }, USER, undefined))
  })

  it('reconciles a terminating unknown Attempt to cancelled/terminated without executing or creating review', () => {
    const { store, task, attempt } = fixture()
    const ending = store.terminateTask(retryPayload(store.getTask(task.id)), USER)
    expect(ending.state).toBe('terminating')
    const interrupted = interrupt(store, task)
    const ended = store.reconcileTask(retryPayload(interrupted), USER, recoveryEvidence(store, attempt))
    expect(ended).toMatchObject({ state: 'terminated', canRetry: false, reviews: [], currentArtifactIds: [],
      attempts: [{ state: 'cancelled' }], visits: [{ outcome: 'terminated' }] })
    expect(ended.finishedAt).toEqual(expect.any(Number))
    rejects('WF_NOT_NEEDS_ATTENTION', () => store.retryTask(retryPayload(ended), USER))
  })

  it('does not adopt a previously stored unverified artifact when recovering a stopped unknown result', () => {
    const { store, task, attempt } = fixture()
    const data = Buffer.from('Unverified output'), contentHash = createHash('sha256').update(data).digest('hex')
    const artifact = { snapshotRef: JSON.stringify({ attachmentId: `sha256:${contentHash}`, name: 'result.txt', bytes: data.length }),
      contentHash, byteLength: data.length, label: 'Unverified', mediaType: 'text/plain' }
    const unknown = finish(store, attempt, 'unknown', { artifact, evidence: evidence(attempt, { completed: false, quiescent: false }) })
    const recovered = store.reconcileTask(retryPayload(unknown), USER, recoveryEvidence(store, attempt))
    expect(recovered.artifacts).toEqual(unknown.artifacts)
    expect(recovered.attempts[0].result).toEqual(unknown.attempts[0].result)
    expect(recovered.currentArtifactIds).toEqual([])
    expect(recovered.effectiveArtifacts).toEqual([])
    expect(recovered.review).toBeNull()
    expect(recovered.id).toBe(task.id)
  })

  it.each([
    [{ kind: 'dsh-session-log' }, 'WF_EVIDENCE_MISMATCH'], [{ attemptId: 'forged' }, 'WF_EVIDENCE_MISMATCH'],
    [{ sessionId: 'forged' }, 'WF_EVIDENCE_MISMATCH'], [{ requestId: 'forged' }, 'WF_EVIDENCE_MISMATCH'],
    [{ hostProcess: { ...hostProcess, startedAt: 'A different Host birth' } }, 'WF_EVIDENCE_MISMATCH'],
    [{ processes: [] }, 'WF_EVIDENCE_MISMATCH'], [{ processes: [{ ...child, pid: 44000 }] }, 'WF_EVIDENCE_MISMATCH'],
    [{ processes: [child, child] }, 'WF_EVIDENCE_MISMATCH'], [{ quiescent: false }, 'WF_STOP_UNCONFIRMED'],
    [{ ownedJobCount: 1 }, 'WF_STOP_UNCONFIRMED'], [{ hostStopped: false }, 'WF_STOP_UNCONFIRMED'],
    [{ processesStopped: false }, 'WF_STOP_UNCONFIRMED'],
  ])('rejects forged, incomplete, mismatched or unconfirmed recovery evidence %# without releasing the slot', (changes, code) => {
    const { store, workflow, task, attempt } = fixture(), unknown = interrupt(store, task)
    rejects(code, () => store.reconcileTask(retryPayload(unknown), USER, recoveryEvidence(store, attempt, changes)))
    expect(store.getTask(task.id)).toEqual(unknown)
    const other = store.createTask(taskPayload(workflow.id), USER)
    rejects('WF_SLOT_BUSY', () => prepare(store, other))
  })

  it('requires a user, fresh revision and an unknown Attempt with a supported snapshot stop policy', () => {
    const { store, task, attempt } = fixture()
    rejects('WF_RECONCILIATION_UNAVAILABLE', () => store.reconcileTask(retryPayload(store.getTask(task.id)), USER, undefined))
    const unknown = interrupt(store, task)
    rejects('WF_HUMAN_REQUIRED', () => store.reconcileTask(retryPayload(unknown), { kind: 'agent', id: 'not-human' }, undefined))
    rejects('WF_STALE_REVISION', () => store.reconcileTask({ ...retryPayload(unknown), expectedRevision: 1 }, USER, undefined))
    expect(store.getTask(task.id)).toEqual(unknown)
    const legacy = fixture({ policy: false }), old = interrupt(legacy.store, legacy.task)
    rejects('WF_RECOVERY_UNSUPPORTED', () => legacy.store.reconcileTask(retryPayload(old), USER, recoveryEvidence(legacy.store, legacy.attempt)))
    expect(legacy.store.getTask(old.id)).toEqual(old)
    expect(store.getAttemptProcesses(attempt.id)).toEqual([child])
  })
})

describe('prepared Attempt preflight evidence', () => {
  function proof(attempt, extra = {}) {
    return { kind: 'workflow-preflight', attemptId: attempt.id, sessionId: attempt.sessionId, requestId: attempt.requestId,
      completed: false, flushConfirmed: false, toolInvocationCount: 0, quiescent: true, ownedJobCount: 0, ...extra }
  }
  function fixture() {
    const store = open(), workflow = publish(store), task = store.createTask(taskPayload(workflow.id), USER)
    const attempt = prepare(store, task)
    return { store, workflow, task, attempt }
  }
  it.each(['failed', 'cancelled'])('settles proven-stopped %s admission without claiming a Session existed, and retries the same Visit', outcome => {
    const { store, task, attempt } = fixture()
    const stopped = finish(store, attempt, outcome, { evidence: proof(attempt) })
    expect(stopped).toMatchObject({ state: 'needs_attention', canRetry: true })
    expect(stopped.attempts[0]).toMatchObject({ state: outcome, messageId: null, turnNumber: null, evidence: { kind: 'workflow-preflight' } })
    expect(stopped.artifacts).toEqual([])
    const queued = store.retryTask(retryPayload(stopped), USER), next = prepare(store, queued)
    expect(next).toMatchObject({ visitId: attempt.visitId, attemptNumber: 2 })
    expect(next.id).not.toBe(attempt.id)
    expect(store.getTask(task.id).attempts).toHaveLength(2)
  })
  it.each([false, true])('never retries unknown admission (confirmed quiescence=%s)', quiescent => {
    const { store, workflow, attempt } = fixture()
    const unknown = finish(store, attempt, 'unknown', { evidence: proof(attempt, { quiescent }) })
    expect(unknown).toMatchObject({ state: 'needs_attention', canRetry: false })
    rejects('WF_RETRY_UNKNOWN', () => store.retryTask(retryPayload(unknown), USER))
    const other = store.createTask(taskPayload(workflow.id), USER)
    if (quiescent) expect(prepare(store, other).state).toBe('prepared')
    else rejects('WF_SLOT_BUSY', () => prepare(store, other))
  })
  it.each([
    [{ completed: true }, 'WF_INVALID_EVIDENCE'], [{ flushConfirmed: true }, 'WF_INVALID_EVIDENCE'],
    [{ toolInvocationCount: 1 }, 'WF_INVALID_EVIDENCE'], [{ messageId: 'invented' }, 'WF_INVALID_EVIDENCE'],
    [{ turnNumber: 1 }, 'WF_INVALID_EVIDENCE'], [{ attemptId: 'other' }, 'WF_EVIDENCE_MISMATCH'],
    [{ sessionId: 'other' }, 'WF_EVIDENCE_MISMATCH'], [{ requestId: 'other' }, 'WF_EVIDENCE_MISMATCH'],
    [{ ownedJobCount: 1 }, 'WF_STOP_UNCONFIRMED'], [{ quiescent: false }, 'WF_STOP_UNCONFIRMED'],
  ])('rejects fabricated preflight claims and missing stop proof %# atomically', (changes, code) => {
    const { store, task, attempt } = fixture(), before = store.getTask(task.id)
    rejects(code, () => finish(store, attempt, 'failed', { evidence: proof(attempt, changes) }))
    expect(store.getTask(task.id)).toEqual(before)
  })
  it('cannot accept preflight as success or apply it after message binding/native execution starts', () => {
    const { store, task, attempt } = fixture()
    rejects('WF_INVALID_EVIDENCE', () => finish(store, attempt, 'succeeded', { evidence: proof(attempt) }))
    store.observeAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, messageId: 'actual-input' })
    rejects('WF_INVALID_EVIDENCE', () => finish(store, attempt, 'failed', { evidence: proof(attempt) }))
    store.observeAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, turnNumber: 1 })
    rejects('WF_INVALID_EVIDENCE', () => finish(store, attempt, 'failed', { evidence: proof(attempt) }))
    expect(store.getTask(task.id).attempts[0].state).toBe('running')
  })
})

describe('safe manual Task retries and evidence history', () => {
  it.each(['failed', 'cancelled'])('queues a stopped %s on the same Visit and creates the next Attempt only at dispatch', outcome => {
    const store = open(), workflow = publish(store), task = store.createTask(taskPayload(workflow.id), USER)
    const first = prepare(store, task), failed = finish(store, first, outcome)
    expect(failed.canRetry).toBe(true)
    const originalAttempt = failed.attempts[0], request = retryPayload(failed)
    const queued = store.retryTask(request, USER)
    expect(queued).toMatchObject({ state: 'queued', canRetry: false, currentVisitId: failed.currentVisitId, attention: null, revision: failed.revision + 1 })
    expect(queued.visits).toEqual(failed.visits)
    expect(queued.attempts).toEqual(failed.attempts)
    expect(queued.events.at(-1)).toMatchObject({ kind: 'task.retry_requested', actor: USER, requestId: request.requestId, data: { visitId: failed.currentVisitId } })
    const second = prepare(store, queued)
    expect(second.id).not.toBe(first.id)
    expect(second).toMatchObject({ visitId: first.visitId, attemptNumber: 2 })
    expect(store.retryTask(request, USER)).toEqual(queued)
    rejects('WF_IDEMPOTENCY_CONFLICT', () => store.retryTask(request, OTHER))
    rejects('WF_IDEMPOTENCY_CONFLICT', () => store.retryTask({ ...request, expectedRevision: 999 }, USER))
    const waiting = finish(store, second)
    expect(waiting.state).toBe('waiting_review')
    expect(waiting.canRetry).toBe(false)
    expect(waiting.attempts[0]).toEqual(originalAttempt)
    expect(waiting.attempts[1].evidence).toEqual(evidence(second))
    expect(waiting.currentArtifactIds).toEqual(waiting.attempts[1].result.artifactIds)
    expect(waiting.review.subject.artifactIds).toEqual(waiting.currentArtifactIds)
    rejects('WF_NOT_NEEDS_ATTENTION', () => store.retryTask(retryPayload(waiting), USER))
  })

  it.each([false, true])('explicitly rejects unknown results even when quiescence is %s', quiescent => {
    const store = open(), workflow = publish(store), task = store.createTask(taskPayload(workflow.id), USER)
    const attempt = prepare(store, task)
    const unknown = finish(store, attempt, 'unknown', { evidence: evidence(attempt, { quiescent, completed: false }) })
    expect(unknown.canRetry).toBe(false)
    rejects('WF_RETRY_UNKNOWN', () => store.retryTask(retryPayload(unknown), USER))
    expect(store.getTask(task.id)).toEqual(unknown)
    const other = store.createTask(taskPayload(workflow.id), USER)
    if (quiescent) expect(prepare(store, other).state).toBe('prepared')
    else rejects('WF_SLOT_BUSY', () => prepare(store, other))
  })

  it('retries pre-dispatch attention without replaying succeeded upstream stages or changing bound input', () => {
    const store = open(), workflow = publish(store, { definition: { stages: [agent('research'), agent('write')] } })
    const task = store.createTask(taskPayload(workflow.id), USER)
    const upstream = prepare(store, task), next = finish(store, upstream)
    const flagged = store.flagTaskAttention(task.id, 'WF_INPUT_UNAVAILABLE', 'Restore the required artifact')
    expect(flagged.canRetry).toBe(true)
    const queued = store.retryTask(retryPayload(flagged), USER)
    expect(queued.currentStage.id).toBe('write')
    expect(queued.input).toEqual(task.input)
    expect(queued.currentArtifactIds).toEqual(next.currentArtifactIds)
    expect(queued.visits).toEqual(flagged.visits)
    const writing = prepare(store, queued)
    expect(writing.attemptNumber).toBe(1)
    expect(writing.visitId).not.toBe(upstream.visitId)
    expect(writing.inputBundle.artifactIds).toEqual(next.currentArtifactIds)
    const completed = finish(store, writing)
    expect(completed.state).toBe('completed')
    expect(completed.canRetry).toBe(false)
    rejects('WF_NOT_NEEDS_ATTENTION', () => store.retryTask(retryPayload(completed), USER))
  })

  it('requires a fresh revision and cannot retry running/queued/terminal tasks or weaken physical-stop proof', () => {
    const store = open(), workflow = publish(store), task = store.createTask(taskPayload(workflow.id), USER)
    expect(task.canRetry).toBe(false)
    rejects('WF_NOT_NEEDS_ATTENTION', () => store.retryTask(retryPayload(task), USER))
    const attempt = prepare(store, task), running = store.getTask(task.id)
    expect(running.canRetry).toBe(false)
    rejects('WF_NOT_NEEDS_ATTENTION', () => store.retryTask(retryPayload(running), USER))
    rejects('WF_STOP_UNCONFIRMED', () => finish(store, attempt, 'failed', { evidence: evidence(attempt, { quiescent: false }) }))
    rejects('WF_STOP_UNCONFIRMED', () => finish(store, attempt, 'failed', { evidence: evidence(attempt, { ownedJobCount: 1 }) }))
    const failed = finish(store, attempt, 'failed')
    rejects('WF_STALE_REVISION', () => store.retryTask({ ...retryPayload(failed), expectedRevision: failed.revision - 1 }, USER))
    expect(store.getTask(task.id)).toEqual(failed)
    const ended = store.terminateTask(retryPayload(failed), USER)
    expect(ended.canRetry).toBe(false)
    rejects('WF_NOT_NEEDS_ATTENTION', () => store.retryTask(retryPayload(ended), USER))
  })

  it('retries a never-dispatched task but never a recovered, unresolved attempt', () => {
    const store = open(), workflow = publish(store), task = store.createTask(taskPayload(workflow.id), USER)
    const flagged = store.flagTaskAttention(task.id, 'WF_WORKSPACE_CHANGED', 'Original workspace temporarily missing')
    expect(flagged.canRetry).toBe(true)
    const queued = store.retryTask(retryPayload(flagged), USER)
    expect(queued.attempts).toEqual([])
    prepare(store, queued)
    const [recovered] = store.recoverInterrupted('new-owner')
    expect(recovered.canRetry).toBe(false)
    rejects('WF_RETRY_UNKNOWN', () => store.retryTask(retryPayload(recovered), USER))
  })
})

describe('Workflow deletion', () => {
  it('requires a human and current revision, persists deletion and replays a lost reply', () => {
    const path = join(temp(), 'delete.sqlite'), store = open(path)
    const flow = store.createWorkflow(createPayload(), USER), request = command(flow)
    rejects('WF_HUMAN_REQUIRED', () => store.deleteWorkflow(request, { kind: 'agent', id: 'agent' }))
    rejects('WF_STALE_REVISION', () => store.deleteWorkflow({ ...request, expectedRevision: 9 }, USER))
    const result = store.deleteWorkflow(request, USER)
    expect(result).toEqual({ workflowId: flow.id, deleted: true })
    expect(store.deleteWorkflow(request, USER)).toEqual(result)
    expect(store.listWorkflows()).toEqual([])
    rejects('WF_WORKFLOW_DELETED', () => store.getWorkflow(flow.id))
    rejects('WF_WORKFLOW_DELETED', () => store.updateWorkflow(command(flow, { name: 'Resurrect', definition: definition() }), USER))
    rejects('WF_WORKFLOW_DELETED', () => store.updateWorkflow(command(flow, { name: flow.name, definition: flow.definition }), USER))
    rejects('WF_WORKFLOW_DELETED', () => store.createTask(taskPayload(flow.id), USER))
    store.close()
    const reopened = open(path)
    expect(reopened.listWorkflows()).toEqual([])
    expect(reopened.deleteWorkflow(request, USER)).toEqual(result)
  })

  it('blocks active tasks and retains terminated task evidence after deletion', () => {
    const store = open(), flow = publish(store), task = store.createTask(taskPayload(flow.id), USER)
    rejects('WF_WORKFLOW_HAS_ACTIVE_TASKS', () => store.deleteWorkflow(command(flow), USER))
    expect(store.listWorkflows()).toHaveLength(1)
    const ended = store.terminateTask(retryPayload(task), USER)
    expect(ended.state).toBe('terminated')
    store.deleteWorkflow(command(flow), USER)
    expect(store.listWorkflows()).toEqual([])
    expect(store.getTask(task.id)).toEqual(ended)
  })
})

describe('Task deletion', () => {
  it('requires a human and current revision, hides queued work and replays deletion', () => {
    const store = open(), flow = publish(store), task = store.createTask(taskPayload(flow.id), USER)
    const directory = join(task.rootPath, '.dsh', 'workflow-artifacts', task.id)
    mkdirSync(directory, { recursive: true }); writeFileSync(join(directory, 'report.md'), 'own output')
    const request = retryPayload(task)
    rejects('WF_HUMAN_REQUIRED', () => store.deleteTask(request, { kind: 'agent', id: 'agent' }))
    rejects('WF_STALE_REVISION', () => store.deleteTask({ ...request, expectedRevision: 9 }, USER))
    expect(readFileSync(join(directory, 'report.md'), 'utf8')).toBe('own output')
    const result = store.deleteTask(request, USER)
    expect(existsSync(directory)).toBe(true) // Filesystem cleanup follows the committed receipt.
    expect(store.listPendingTaskDeletions()).toEqual([{ id: task.id, rootPath: task.rootPath }])
    expect(result).toEqual({ taskId: task.id, workflowId: flow.id, deleted: true })
    expect(store.deleteTask(request, USER)).toEqual(result)
    expect(store.listTaskSummaries()).toEqual([])
    expect(store.listTasks()).toEqual([])
    expect(store.getWorkflow(flow.id).taskCount).toBe(0)
    rejects('WF_TASK_DELETED', () => store.getTask(task.id))
    rejects('WF_IDEMPOTENCY_CONFLICT', () => store.deleteTask(request, OTHER))
  })

  it('blocks an active or unresolved attempt without changing its task or evidence', () => {
    const store = open(), flow = publish(store), task = store.createTask(taskPayload(flow.id), USER)
    const directory = join(task.rootPath, '.dsh', 'workflow-artifacts', task.id)
    mkdirSync(directory, { recursive: true }); writeFileSync(join(directory, 'report.md'), 'running output')
    const attempt = prepare(store, task), before = store.getTask(task.id)
    rejects('WF_STOP_UNCONFIRMED', () => store.deleteTask(retryPayload(before), USER))
    expect(readFileSync(join(directory, 'report.md'), 'utf8')).toBe('running output')
    expect(store.getTask(task.id)).toEqual(before)
    const failed = finish(store, attempt, 'failed')
    expect(store.deleteTask(retryPayload(failed), USER).deleted).toBe(true)
    expect(store.listTasks()).toEqual([])
  })

  it('retains a durable cleanup request independently of filesystem availability', () => {
    const store = open(), flow = publish(store), task = store.createTask(taskPayload(flow.id), USER)
    const parent = join(task.rootPath, '.dsh', 'workflow-artifacts'), outside = temp()
    mkdirSync(parent, { recursive: true }); writeFileSync(join(outside, 'keep.md'), 'keep')
    symlinkSync(outside, join(parent, task.id))
    const request = retryPayload(task)
    expect(store.deleteTask(request, USER).deleted).toBe(true)
    expect(store.listTaskSummaries()).toHaveLength(0)
    expect(store.listPendingTaskDeletions()).toEqual([{ id: task.id, rootPath: task.rootPath }])
    expect(readFileSync(join(outside, 'keep.md'), 'utf8')).toBe('keep')
    rmSync(join(parent, task.id)); mkdirSync(join(parent, task.id))
    expect(store.deleteTask(request, USER).deleted).toBe(true)
    expect(existsSync(join(parent, task.id))).toBe(true)
    expect(store.listPendingTaskDeletions()).toHaveLength(1)
  })

  it('closes pending review when deleting, keeps immutable evidence and survives reopening', () => {
    const path = join(temp(), 'task-delete.sqlite'), store = open(path), flow = publish(store)
    const task = store.createTask(taskPayload(flow.id), USER), waiting = finish(store, prepare(store, task))
    expect(waiting.state).toBe('waiting_review')
    const request = retryPayload(waiting), result = store.deleteTask(request, USER)
    store.close()
    const inspect = new DatabaseSync(path, { readOnly: true })
    try {
      expect(inspect.prepare('SELECT state FROM wf_tasks WHERE id=?').get(task.id).state).toBe('terminated')
      expect(inspect.prepare('SELECT state FROM wf_reviews WHERE task_id=?').get(task.id).state).toBe('terminated')
      expect(inspect.prepare('SELECT COUNT(*) AS n FROM wf_artifacts WHERE task_id=?').get(task.id).n).toBe(1)
      expect(inspect.prepare('PRAGMA foreign_key_check').all()).toEqual([])
    } finally { inspect.close() }
    const reopened = open(path)
    expect(reopened.listTaskSummaries()).toEqual([])
    expect(reopened.deleteTask(request, USER)).toEqual(result)
  })
})


describe('Host-owned chat model inheritance', () => {
  it('freezes the creating chat model, preserves manual choices on AI edits, and keeps retries idempotent', () => {
    const store = open(), payload = createPayload(), chat = { provider: 'chat', model: 'one', reasoningEffort: 'high' }
    const flow = store.createWorkflow(payload, AGENT, chat)
    expect(flow.definition.stages.find(stage => stage.kind === 'agent').modelSelection).toEqual(chat)
    expect(store.createWorkflow(payload, AGENT, { provider: 'other', model: 'different' })).toEqual(flow)
    const manual = { provider: 'manual', model: 'chosen', reasoningEffort: 'ultra' }
    const edited = store.updateWorkflow(command(flow, { name: flow.name, definition: { ...flow.definition, stages: flow.definition.stages.map(stage => stage.kind === 'agent' ? { ...stage, modelSelection: manual } : stage) } }), USER)
    const input = { ...edited.definition, stages: edited.definition.stages.map(({ modelSelection, ...stage }) => ({ ...stage, ...(stage.kind === 'agent' ? { prompt: 'Updated instructions' } : {}) })) }
    input.stages.push({ id: 'extra', kind: 'agent', title: 'New stage', prompt: 'New work' })
    const updated = store.updateWorkflow(command(edited, { name: edited.name, definition: input }), AGENT, chat)
    expect(updated.definition.stages[0].modelSelection).toEqual(manual)
    expect(updated.definition.stages.at(-1).modelSelection).toEqual(chat)
  })
})


describe('history remains tied to its workflow version', () => {
  it('keeps task stages, execution, reviews and artifacts unchanged after optimization changes the definition', () => {
    const store = open(), workflow = publish(store), original = store.createTask(taskPayload(workflow.id), USER)
    const waiting = finish(store, prepare(store, original))
    const saved = store.updateWorkflow(command(workflow, { name: workflow.name, definition: { stages: [agent('new-stage')] } }), USER)
    const after = store.getTask(original.id), next = store.createTask(taskPayload(workflow.id), USER)
    expect(after.workflowVersionId).toBe(waiting.workflowVersionId)
    expect(after.definition).toEqual(waiting.definition)
    expect(after.attempts).toEqual(waiting.attempts)
    expect(after.reviews).toEqual(waiting.reviews)
    expect(after.artifacts).toEqual(waiting.artifacts)
    expect(after.state).toBe('waiting_review')
    expect(next.workflowVersionId).toBe(saved.versionId)
    expect(next.definition.stages[0].id).toBe('new-stage')
    expect(next.versionNumber).toBeGreaterThan(after.versionNumber)
  })
})
