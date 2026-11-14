// @vitest-environment node
import { afterEach, describe, expect, it } from 'vitest'
import { createHash, randomUUID } from 'node:crypto'
import { DatabaseSync } from 'node:sqlite'
import { chmodSync, lstatSync, mkdtempSync, realpathSync, rmSync, symlinkSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { tmpdir } from 'node:os'
import { spawn, spawnSync } from 'node:child_process'
import { once } from 'node:events'
import { fileURLToPath } from 'node:url'
import { openWorkflowStore } from '../workflow/store.js'

const USER = { kind: 'user', id: 'isolated-test-owner' }
const stores = []
const directories = []
function temp() {
  const directory = realpathSync(mkdtempSync(join(tmpdir(), 'dsh-workflow-store-')))
  directories.push(directory)
  return directory
}
function open(path = ':memory:') {
  const store = openWorkflowStore(path)
  stores.push(store)
  return store
}
afterEach(() => {
  for (const store of stores.splice(0)) store.close()
  for (const directory of directories.splice(0)) {
    // Check the exact absolute deletion target, never a computed unchecked root.
    expect(dirname(directory)).toBe(realpathSync(tmpdir()))
    expect(basename(directory).startsWith('dsh-workflow-store-')).toBe(true)
    rmSync(directory, { recursive: true, force: true })
  }
})
const agent = id => ({ id, kind: 'agent', title: id, prompt: `Write ${id}` })
const review = (id, returnStageId) => ({ id, kind: 'review', title: id, returnStageId })
function publish(store, root = temp(), stages = [agent('write'), review('review', 'write')], extra = {}) {
  return store.publishDefinition({ requestId: randomUUID(), workspaceId: 'workspace-test', rootPath: root,
    executionScope: `profile:${root}`, name: 'Independent workflow', definition: { stages }, ...extra }, USER)
}
function create(store, workflowId, extra = {}) {
  return store.createTask({ requestId: randomUUID(), workflowId, title: 'A report', input: { text: 'Input topic' }, executionConfig: { mode: 'tool-free' }, ...extra }, USER)
}
function prepare(store, task, extra = {}) {
  const current = store.getTask(task.id)
  return store.prepareAttempt({ taskId: task.id, expectedRevision: current.revision, prompt: 'Write the report', executorSnapshot: { preset: 'restricted-test' }, ownerInstanceId: 'owner-one', ...extra })
}
function artifact(value = 'Report') {
  const bytes = Buffer.from(value)
  const contentHash = createHash('sha256').update(bytes).digest('hex')
  return { snapshotRef: JSON.stringify({ attachmentId: `sha256:${contentHash}`, name: 'report.txt', bytes: bytes.length }),
    contentHash, byteLength: bytes.length, label: 'report.txt', mediaType: 'text/plain' }
}
function evidence(attempt, extra = {}) {
  return { kind: 'dsh-session-log', attemptId: attempt.id, sessionId: attempt.sessionId, requestId: attempt.requestId,
    messageId: attempt.messageId || `message-${attempt.id}`, turnNumber: attempt.turnNumber ?? 1,
    completed: true, quiescent: true, flushConfirmed: true, toolInvocationCount: 0, ownedJobCount: 0,
    userSeq: 2, assistantSeq: 5, endSeq: 6, endReason: 'completed', ...extra }
}
function finish(store, attempt, value = 'Report', extra = {}) {
  const saved = artifact(value)
  return store.finishAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, outcome: 'succeeded', artifact: saved,
    evidence: evidence(attempt, { outputSha256: saved.contentHash }), ...extra })
}
function decide(store, task, decision, extra = {}) {
  const current = store.getTask(task.id)
  return store.decideReview({ taskId: task.id, reviewId: current.review.id, subjectHash: current.review.subjectHash,
    expectedRevision: current.revision, requestId: randomUUID(), decision, ...extra }, USER)
}
function rejects(code, callback) {
  let error
  try { callback() } catch (caught) { error = caught }
  expect(error, `Expected ${code}`).toBeDefined()
  expect(error.code).toBe(code)
}
function fixture(stages) {
  const store = open()
  const definition = publish(store, temp(), stages)
  return { store, workflow: definition, task: create(store, definition.workflowId) }
}

describe('independent transactional Workflow PoC store', () => {
  it('runs the complete durable-result → review → completion loop', () => {
    const { store, task } = fixture()
    const attempt = prepare(store, task)
    expect(Object.isFrozen(attempt)).toBe(true)
    expect(Object.isFrozen(attempt.inputBundle)).toBe(true)
    expect(attempt.sessionId).not.toBe(attempt.requestId)
    expect(Number.isSafeInteger(attempt.createdAt)).toBe(true)
    const messageId = `message-${attempt.id}`
    store.observeAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, messageId, turnNumber: 1, acceptedAt: 1, claimedAt: 2, lastObservedSeq: 3 })
    const waiting = finish(store, attempt)
    expect(waiting.state).toBe('waiting_review')
    expect(waiting.review.subject.artifactIds).toEqual(waiting.currentArtifactIds)
    expect(waiting.review.subjectHash).toMatch(/^[0-9a-f]{64}$/)
    expect(waiting.effectiveArtifacts).toHaveLength(1)
    const completed = decide(store, waiting, 'approved')
    expect(completed.state).toBe('completed')
    expect(completed.review).toBeNull()
    expect(completed.visits.every(visit => visit.outcome === 'succeeded')).toBe(true)
    expect(completed.events.map(event => event.sequence)).toEqual(completed.events.map((_, index) => index + 1))
    expect(store.listTasks('workspace-test')).toHaveLength(1)
    expect(store.listTasks('other')).toEqual([])
  })

  it('recovers a create binding without bypassing payload or actor idempotency checks', () => {
    const store = open(), published = publish(store), requestId = randomUUID()
    const payload = { requestId, workflowId: published.workflowId, title: 'Recover my receipt', input: { text: 'Text' }, executionConfig: {} }
    const original = store.createTask(payload, USER)
    expect(store.getCreateTaskBinding(randomUUID())).toBeNull()
    expect(store.getCreateTaskBinding(requestId)).toEqual({ workflowId: published.workflowId, workspaceId: 'workspace-test' })
    store.terminateTask({ taskId: original.id, expectedRevision: original.revision, requestId: randomUUID() }, USER)
    expect(store.createTask(payload, USER)).toEqual(original)
    rejects('WF_IDEMPOTENCY_CONFLICT', () => store.createTask({ ...payload, title: 'Changed' }, USER))
    rejects('WF_IDEMPOTENCY_CONFLICT', () => store.createTask(payload, { kind: 'user', id: 'other' }))
    expect(store.listTasks()).toHaveLength(1)
  })

  it('rework preserves success and review history, invalidates only current lineage', () => {
    const { store, task } = fixture([agent('research'), agent('write'), review('review', 'write')])
    const first = prepare(store, task)
    const writing = finish(store, first, 'Sources')
    const second = prepare(store, writing)
    const waiting = finish(store, second, 'Draft one')
    const oldSubject = structuredClone(waiting.review.subject)
    const returned = decide(store, waiting, 'returned', { feedback: 'Add citations' })
    expect(returned.state).toBe('queued')
    expect(returned.currentStage.id).toBe('write')
    expect(returned.effectiveArtifacts.map(item => item.attemptId)).toEqual([first.id])
    expect(returned.visits.find(visit => visit.acceptedAttemptId === second.id).outcome).toBe('succeeded')
    expect(returned.visits.find(visit => visit.acceptedAttemptId === first.id).supersededByReviewId).toBeNull()
    expect(returned.reviews[0].subject).toEqual(oldSubject)
    const retryVisit = prepare(store, returned)
    expect(retryVisit.visitId).not.toBe(second.visitId)
    expect(retryVisit.inputBundle.feedback).toEqual([{ reviewId: waiting.review.id, feedback: 'Add citations' }])
    const waitingAgain = finish(store, retryVisit, 'Draft two')
    expect(waitingAgain.effectiveArtifacts.map(item => item.attemptId)).toEqual([first.id, retryVisit.id])
    expect(decide(store, waitingAgain, 'approved').state).toBe('completed')
  })

  it('keeps valid feedback through multiple stages and replaces superseded rework roots', () => {
    const { store, task } = fixture([agent('a'), review('r1', 'a'), agent('b'), review('r2', 'a'), agent('c')])
    let state = finish(store, prepare(store, task), 'A1')
    const firstReview = state.review.id
    state = decide(store, state, 'returned', { feedback: 'First correction' })
    let attempt = prepare(store, state)
    expect(attempt.inputBundle.feedbackReviewIds).toEqual([firstReview])
    state = finish(store, attempt, 'A2')
    state = decide(store, state, 'approved')
    attempt = prepare(store, state)
    expect(attempt.inputBundle.feedbackReviewIds).toEqual([firstReview])
    state = finish(store, attempt, 'B1')
    const secondReview = state.review.id
    state = decide(store, state, 'returned', { feedback: 'Rework the whole argument' })
    expect(state.feedback).toEqual(['Rework the whole argument'])
    expect(state.reviews.find(item => item.id === firstReview).state).toBe('returned')
    expect(state.visits.find(item => item.causedByReviewId === firstReview).supersededByReviewId).toBe(secondReview)
    attempt = prepare(store, state)
    expect(attempt.inputBundle.feedbackReviewIds).toEqual([secondReview])
    state = finish(store, attempt, 'A3')
    state = decide(store, state, 'approved')
    attempt = prepare(store, state)
    expect(attempt.inputBundle.feedbackReviewIds).toEqual([secondReview])
    state = finish(store, attempt, 'B2')
    state = decide(store, state, 'approved')
    attempt = prepare(store, state)
    expect(attempt.inputBundle.feedbackReviewIds).toEqual([secondReview])
    expect(finish(store, attempt, 'C1').state).toBe('completed')
  })

  it('checks receipts before revisions and rejects key reuse with changed payload or actor', () => {
    const { store, task } = fixture()
    const waiting = finish(store, prepare(store, task))
    const payload = { taskId: task.id, reviewId: waiting.review.id, subjectHash: waiting.review.subjectHash,
      expectedRevision: waiting.revision, requestId: randomUUID(), decision: 'approved' }
    const result = store.decideReview(payload, USER)
    expect(store.decideReview(payload, USER)).toEqual(result)
    expect(store.getTask(task.id).events).toEqual(result.events)
    rejects('WF_IDEMPOTENCY_CONFLICT', () => store.decideReview({ ...payload, decision: 'terminated' }, USER))
    rejects('WF_IDEMPOTENCY_CONFLICT', () => store.decideReview(payload, { kind: 'user', id: 'other' }))
  })

  it('idempotently publishes definitions and creates tasks without duplicates', () => {
    const store = open(), root = temp()
    const publication = { requestId: randomUUID(), workspaceId: 'w', rootPath: root, executionScope: root,
      name: 'Report', definition: { stages: [agent('a')] } }
    const first = store.publishDefinition(publication, USER)
    expect(store.publishDefinition(publication, USER)).toEqual(first)
    const command = { requestId: randomUUID(), workflowId: first.workflowId, title: 'One', input: { text: 'x' }, executionConfig: {} }
    const created = store.createTask(command, USER)
    expect(store.createTask(command, USER)).toEqual(created)
    expect(store.listTasks()).toHaveLength(1)
    rejects('WF_IDEMPOTENCY_CONFLICT', () => store.createTask({ ...command, title: 'Two' }, USER))
  })

  it('rejects stale revisions, incorrect review subjects, and blank return feedback atomically', () => {
    const { store, task } = fixture()
    const waiting = finish(store, prepare(store, task))
    rejects('WF_STALE_REVISION', () => decide(store, waiting, 'approved', { expectedRevision: waiting.revision - 1 }))
    rejects('WF_SUBJECT_CHANGED', () => decide(store, waiting, 'approved', { subjectHash: '0'.repeat(64) }))
    rejects('WF_INVALID_INPUT', () => decide(store, waiting, 'returned', { feedback: '  ' }))
    expect(store.getTask(task.id)).toEqual(waiting)
  })

  it('accepts explicitly empty feedback for approval and termination, never for rework', () => {
    const { store, task, workflow } = fixture()
    const waiting = finish(store, prepare(store, task))
    expect(decide(store, waiting, 'approved', { feedback: '' }).state).toBe('completed')
    const another = create(store, workflow.workflowId)
    const nextReview = finish(store, prepare(store, another))
    rejects('WF_INVALID_INPUT', () => decide(store, nextReview, 'returned', { feedback: '' }))
    expect(decide(store, nextReview, 'terminated', { feedback: '' }).state).toBe('terminated')
  })

  it('rolls back an already-inserted artifact when final result evidence mismatches', () => {
    const { store, task } = fixture()
    const attempt = prepare(store, task)
    const before = store.getTask(task.id)
    rejects('WF_EVIDENCE_MISMATCH', () => finish(store, attempt, 'A', { evidence: evidence(attempt, { outputSha256: '0'.repeat(64) }) }))
    expect(store.getTask(task.id)).toEqual(before)
    expect(store.getTask(task.id).artifacts).toHaveLength(0)
    expect(finish(store, attempt).state).toBe('waiting_review')
  })

  it('holds one slot for the same canonical directory across workflows and workspace ids', () => {
    const store = open(), root = temp()
    const w1 = publish(store, root)
    const w2 = publish(store, root, undefined, { workspaceId: 'other-workspace' })
    const t1 = create(store, w1.workflowId), t2 = create(store, w2.workflowId)
    const a1 = prepare(store, t1)
    rejects('WF_SLOT_BUSY', () => prepare(store, t2))
    expect(store.getTask(t2.id).attempts).toHaveLength(0)
    finish(store, a1)
    expect(prepare(store, t2).state).toBe('prepared')
    rejects('WF_SCOPE_MISMATCH', () => publish(store, root, undefined, { executionScope: 'different-scope' }))
  })

  it('does not release an unknown live attempt or automatically retry it', () => {
    const { store, workflow, task } = fixture()
    const attempt = prepare(store, task)
    const unknown = store.finishAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, outcome: 'unknown', error: { message: 'Transport lost' } })
    expect(unknown.state).toBe('needs_attention')
    expect(unknown.attempts[0].quiescedAt).toBeNull()
    rejects('WF_TASK_NOT_QUEUED', () => prepare(store, unknown))
    const another = create(store, workflow.workflowId)
    rejects('WF_SLOT_BUSY', () => prepare(store, another))
    rejects('WF_STOP_UNCONFIRMED', () => store.finishAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, outcome: 'failed' }))
  })

  it('can release confirmed-stopped unknown work without authorizing its retry', () => {
    const { store, workflow, task } = fixture()
    const attempt = prepare(store, task)
    const unknown = store.finishAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, outcome: 'unknown',
      evidence: evidence(attempt, { completed: false }) })
    expect(unknown.state).toBe('needs_attention')
    expect(unknown.attempts[0].state).toBe('unknown')
    expect(unknown.attempts[0].quiescedAt).not.toBeNull()
    rejects('WF_EVIDENCE_MISMATCH', () => store.finishAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, outcome: 'unknown',
      evidence: evidence(attempt, { completed: false, quiescent: false }) }))
    rejects('WF_TASK_NOT_QUEUED', () => prepare(store, unknown))
    expect(prepare(store, create(store, workflow.workflowId)).state).toBe('prepared')
    expect(finish(store, attempt).state).toBe('waiting_review')
  })

  it('termination requests cancellation and never accepts late success into review', () => {
    const { store, workflow, task } = fixture()
    const attempt = prepare(store, task)
    const running = store.getTask(task.id)
    const terminating = store.terminateTask({ taskId: task.id, expectedRevision: running.revision, requestId: randomUUID() }, USER)
    expect(terminating.state).toBe('terminating')
    expect(terminating.attempts[0].cancelRequestedAt).not.toBeNull()
    const other = create(store, workflow.workflowId)
    rejects('WF_SLOT_BUSY', () => prepare(store, other))
    const done = finish(store, attempt, 'Late successful result')
    expect(done.state).toBe('terminated')
    expect(done.review).toBeNull()
    expect(done.artifacts).toHaveLength(1)
    expect(done.attempts[0].state).toBe('succeeded')
    expect(done.visits[0].outcome).toBe('terminated')
    expect(done.visits[0].acceptedAttemptId).toBeNull()
    expect(done.effectiveArtifacts).toEqual([])
    expect(prepare(store, other).state).toBe('prepared')
  })

  it('terminates queued and waiting-review tasks and settles pending review records', () => {
    const { store, task, workflow } = fixture()
    const queued = store.terminateTask({ taskId: task.id, expectedRevision: task.revision, requestId: randomUUID() }, USER)
    expect(queued.state).toBe('terminated')
    const other = create(store, workflow.workflowId)
    const waiting = finish(store, prepare(store, other))
    const ended = store.terminateTask({ taskId: other.id, expectedRevision: waiting.revision, requestId: randomUUID() }, USER)
    expect(ended.state).toBe('terminated')
    expect(ended.review).toBeNull()
    expect(ended.reviews[0].state).toBe('terminated')
  })

  it('a terminated review does not approve or advance to downstream work', () => {
    const { store, task } = fixture([agent('a'), review('r', 'a'), agent('b')])
    const waiting = finish(store, prepare(store, task))
    const terminated = decide(store, waiting, 'terminated')
    expect(terminated.state).toBe('terminated')
    expect(terminated.visits.map(item => item.stageId)).toEqual(['a', 'r'])
    expect(terminated.reviews[0].state).toBe('terminated')
  })

  it('terminal facts cannot be changed by observations, results, dispatch, or terminate', () => {
    const { store, task } = fixture([agent('a')])
    const attempt = prepare(store, task)
    const completed = finish(store, attempt)
    rejects('WF_ATTEMPT_TERMINAL', () => finish(store, attempt, 'Replace history'))
    rejects('WF_ATTEMPT_TERMINAL', () => store.observeAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, lastObservedSeq: 999 }))
    rejects('WF_TASK_NOT_QUEUED', () => prepare(store, completed))
    rejects('WF_TASK_TERMINAL', () => store.terminateTask({ taskId: task.id, expectedRevision: completed.revision, requestId: randomUUID() }, USER))
    expect(store.getTask(task.id)).toEqual(completed)
  })

  it('observations allow only monotonic correlation fields and never revive unknown work', () => {
    const { store, task } = fixture()
    const attempt = prepare(store, task)
    rejects('WF_OWNER_MISMATCH', () => store.observeAttempt({ attemptId: attempt.id, ownerToken: 'wrong', acceptedAt: 1 }))
    rejects('WF_INVALID_INPUT', () => store.observeAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, state: 'succeeded' }))
    store.observeAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, messageId: 'one', turnNumber: 1, lastObservedSeq: 7 })
    expect(store.getTask(task.id).attempts[0].state).toBe('running')
    rejects('WF_CORRELATION_MISMATCH', () => store.observeAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, messageId: 'two' }))
    rejects('WF_CORRELATION_MISMATCH', () => store.observeAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, lastObservedSeq: 6 }))
    store.finishAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, outcome: 'unknown' })
    const state = store.observeAttempt({ attemptId: attempt.id, ownerToken: attempt.ownerToken, acceptedAt: 1 })
    expect(state.attempts[0].state).toBe('unknown')
  })

  it('requires matching runtime proof, no owned jobs, and actual durable completion', () => {
    const { store, task } = fixture()
    const attempt = prepare(store, task)
    rejects('WF_EVIDENCE_MISMATCH', () => finish(store, attempt, 'Report', { evidence: evidence(attempt, { sessionId: randomUUID() }) }))
    rejects('WF_STOP_UNCONFIRMED', () => finish(store, attempt, 'Report', { evidence: evidence(attempt, { quiescent: false }) }))
    rejects('WF_STOP_UNCONFIRMED', () => finish(store, attempt, 'Report', { evidence: evidence(attempt, { ownedJobCount: 1 }) }))
    rejects('WF_SUCCESS_UNCONFIRMED', () => finish(store, attempt, 'Report', { evidence: evidence(attempt, { completed: false }) }))
    rejects('WF_SUCCESS_UNCONFIRMED', () => finish(store, attempt, 'Report', { evidence: evidence(attempt, { flushConfirmed: false }) }))
    rejects('WF_SUCCESS_UNCONFIRMED', () => finish(store, attempt, 'Report', { evidence: evidence(attempt, { toolInvocationCount: 1 }) }))
    expect(store.getTask(task.id).attempts[0].state).toBe('prepared')
  })

  it('rejects mutable workspace paths and mismatching content-addressed references', () => {
    const { store, task } = fixture()
    const attempt = prepare(store, task)
    rejects('WF_INVALID_ARTIFACT', () => finish(store, attempt, 'x', { artifact: { ...artifact('x'), snapshotRef: '/tmp/output.txt' } }))
    rejects('WF_INVALID_ARTIFACT', () => finish(store, attempt, 'x', { artifact: { ...artifact('x'), byteLength: 100 } }))
    expect(store.getTask(task.id).artifacts).toEqual([])
  })

  it('fails queued work closed without touching active attempts or releasing another slot', () => {
    const { store, workflow, task } = fixture()
    const flagged = store.flagTaskAttention(task.id, 'WORKSPACE_MISSING', 'Workspace was removed')
    expect(flagged.state).toBe('needs_attention')
    expect(flagged.attempts).toEqual([])
    const other = create(store, workflow.workflowId)
    prepare(store, other)
    rejects('WF_TASK_NOT_QUEUED', () => store.flagTaskAttention(other.id, 'CONFIG_CHANGED', 'No unsafe fallback'))
    const third = create(store, workflow.workflowId)
    rejects('WF_SLOT_BUSY', () => prepare(store, third))
  })

  it('can flag queued downstream work after historical attempts have settled', () => {
    const { store, task } = fixture([agent('a'), agent('b')])
    const next = finish(store, prepare(store, task))
    expect(next.state).toBe('queued')
    expect(next.attempts).toHaveLength(1)
    const flagged = store.flagTaskAttention(task.id, 'INPUT_MISSING', 'Previous snapshot unavailable')
    expect(flagged.state).toBe('needs_attention')
    expect(flagged.attempts[0].state).toBe('succeeded')
    expect(flagged.visits[0].outcome).toBe('succeeded')
  })

  it('validates sequential definitions and fixed backwards rework targets', () => {
    const store = open(), root = temp()
    rejects('WF_INVALID_DEFINITION', () => publish(store, root, [review('r', 'a'), agent('a')]))
    rejects('WF_INVALID_DEFINITION', () => publish(store, root, [agent('a'), agent('a')]))
    rejects('WF_INVALID_DEFINITION', () => publish(store, root, [agent('a'), review('r', 'missing')]))
    rejects('WF_INVALID_INPUT', () => publish(store, root, [{ ...agent('a'), script: 'untrusted' }]))
    expect(store.listTasks()).toEqual([])
  })
})

describe('PoC database ownership and restart safety', () => {
  it('creates owner-only files and rejects a second owner until close', () => {
    const path = join(temp(), 'workflow.sqlite')
    const first = open(path)
    expect(lstatSync(path).mode & 0o077).toBe(0)
    rejects('WF_DB_BUSY', () => openWorkflowStore(path))
    const modulePath = fileURLToPath(new URL('../workflow/store.js', import.meta.url))
    const child = spawnSync(process.execPath, ['--input-type=module', '-e', `import {openWorkflowStore} from ${JSON.stringify(modulePath)}; try {const s=openWorkflowStore(${JSON.stringify(path)});s.close();process.exit(9)} catch(e) {if(e.code!=='WF_DB_BUSY')throw e;console.log(e.code)}`],
      { env: { ...process.env, ELECTRON_RUN_AS_NODE: '1' }, encoding: 'utf8', timeout: 10000 })
    expect(child.status, child.stderr).toBe(0)
    expect(child.stdout).toContain('WF_DB_BUSY')
    first.close()
    expect(open(path).listTasks()).toEqual([])
  })

  it('OS ownership locks survive while live and release on a real process crash', async () => {
    const root = temp(), path = join(root, 'crashed.sqlite')
    const modulePath = fileURLToPath(new URL('../workflow/store.js', import.meta.url))
    const code = `
      import {openWorkflowStore} from ${JSON.stringify(modulePath)};
      const s=openWorkflowStore(${JSON.stringify(path)});
      const actor={kind:'user',id:'test'};
      const w=s.publishDefinition({requestId:'publish',workspaceId:'w',rootPath:${JSON.stringify(root)},executionScope:'crash-test',name:'Crash test',definition:{stages:[{id:'a',kind:'agent',title:'A'}]}},actor);
      const t=s.createTask({requestId:'task',workflowId:w.workflowId,title:'Task',input:{text:'x'},executionConfig:{}},actor);
      const a=s.prepareAttempt({taskId:t.id,expectedRevision:t.revision,prompt:'x',executorSnapshot:{},ownerInstanceId:'crashed-owner'});
      console.log(JSON.stringify({taskId:t.id,attemptId:a.id}));
      process.stdin.resume();
    `
    const child = spawn(process.execPath, ['--input-type=module', '-e', code], { env: { ...process.env, ELECTRON_RUN_AS_NODE: '1' }, stdio: ['pipe', 'pipe', 'pipe'] })
    let exited = false
    child.once('exit', () => { exited = true })
    try {
      const ready = await new Promise((resolveReady, rejectReady) => {
        let output = '', errors = ''
        const timeout = setTimeout(() => rejectReady(new Error(`Child did not initialize: ${errors}`)), 5000)
        const stop = value => { clearTimeout(timeout); resolveReady(value) }
        child.once('error', error => { clearTimeout(timeout); rejectReady(error) })
        child.once('exit', code => { clearTimeout(timeout); rejectReady(new Error(`Premature child exit ${code}: ${errors}`)) })
        child.stderr.on('data', chunk => { errors += chunk })
        child.stdout.on('data', chunk => { output += chunk; if (output.includes('\n')) stop(JSON.parse(output.trim())) })
      })
      rejects('WF_DB_BUSY', () => openWorkflowStore(path))
      const ending = once(child, 'exit')
      child.kill('SIGKILL')
      await ending
      const reopened = open(path)
      const recovered = reopened.recoverInterrupted('new-owner')
      expect(recovered).toHaveLength(1)
      expect(recovered[0].id).toBe(ready.taskId)
      expect(recovered[0].attempts[0]).toMatchObject({ id: ready.attemptId, state: 'unknown', quiescedAt: null })
      expect(reopened.recoverInterrupted('new-owner')).toEqual([])
    } finally {
      if (!exited) { const ending = once(child, 'exit'); child.kill('SIGKILL'); await ending }
    }
  }, 10000)

  it('reopening marks old pending attempts unknown without dispatch or slot release', () => {
    const root = temp(), path = join(root, 'workflow.sqlite')
    const first = open(path), workflow = publish(first, root)
    const task = create(first, workflow.workflowId), attempt = prepare(first, task)
    const waitingTask = create(first, workflow.workflowId)
    first.close()
    const reopened = open(path)
    const recovered = reopened.recoverInterrupted('owner-two')
    expect(recovered).toHaveLength(1)
    expect(recovered[0].state).toBe('needs_attention')
    expect(recovered[0].attempts[0]).toMatchObject({ id: attempt.id, state: 'unknown', sessionId: attempt.sessionId, requestId: attempt.requestId, ownerToken: attempt.ownerToken })
    expect(reopened.getTask(waitingTask.id).state).toBe('queued')
    expect(reopened.recoverInterrupted('owner-two')).toEqual([])
    rejects('WF_SLOT_BUSY', () => prepare(reopened, waitingTask))
    expect(finish(reopened, attempt).state).toBe('waiting_review')
    expect(prepare(reopened, waitingTask).state).toBe('prepared')
  })

  it('recovery leaves awaiting-review and terminal facts unchanged and preserves terminating', () => {
    const root = temp(), path = join(root, 'workflow.sqlite')
    const first = open(path), workflow = publish(first, root)
    const reviewTask = create(first, workflow.workflowId)
    const waiting = finish(first, prepare(first, reviewTask))
    const completedTask = create(first, workflow.workflowId)
    const completed = decide(first, finish(first, prepare(first, completedTask)), 'approved')
    const runningTask = create(first, workflow.workflowId)
    prepare(first, runningTask)
    const running = first.getTask(runningTask.id)
    first.terminateTask({ taskId: running.id, expectedRevision: running.revision, requestId: randomUUID() }, USER)
    first.close()
    const reopened = open(path)
    const recovered = reopened.recoverInterrupted('owner-two')
    expect(recovered).toHaveLength(1)
    expect(recovered[0].state).toBe('terminating')
    expect(recovered[0].attempts[0].state).toBe('unknown')
    expect(reopened.getTask(waiting.id)).toEqual(waiting)
    expect(reopened.getTask(completed.id)).toEqual(completed)
  })

  it('refuses unrelated databases, wrong versions, and a modified schema without adopting them', () => {
    const root = temp(), unrelated = join(root, 'other.sqlite')
    let db = new DatabaseSync(unrelated)
    db.exec('CREATE TABLE precious (value TEXT); INSERT INTO precious VALUES (\'untouched\')')
    db.close(); chmodSync(unrelated, 0o600)
    rejects('WF_DB_SCHEMA', () => openWorkflowStore(unrelated))
    db = new DatabaseSync(unrelated)
    expect(db.prepare('SELECT value FROM precious').get().value).toBe('untouched')
    expect(db.prepare('PRAGMA application_id').get().application_id).toBe(0)
    db.close()
    const owned = join(root, 'owned.sqlite')
    open(owned).close()
    db = new DatabaseSync(owned); db.exec('PRAGMA user_version=999'); db.close()
    rejects('WF_DB_SCHEMA', () => openWorkflowStore(owned))
    db = new DatabaseSync(owned); db.exec('PRAGMA user_version=1; CREATE TABLE unexpected (x TEXT)'); db.close()
    rejects('WF_DB_SCHEMA', () => openWorkflowStore(owned))
  })

  it('refuses symlinked and broadly readable database files', () => {
    const root = temp(), path = join(root, 'owned.sqlite'), link = join(root, 'linked.sqlite')
    open(path).close()
    symlinkSync(path, link)
    rejects('WF_DB_PATH', () => openWorkflowStore(link))
    chmodSync(path, 0o644)
    rejects('WF_DB_PERMISSIONS', () => openWorkflowStore(path))
  })
})
