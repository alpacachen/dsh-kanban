// Independent Workflow store; schema v1 is retained for existing data.
// Domain evidence must come from the authenticated gateway and runtime, not callers.
import { DatabaseSync } from 'node:sqlite'
import { createHash, randomUUID } from 'node:crypto'
import { closeSync, constants, existsSync, lstatSync, mkdirSync, openSync, readFileSync, realpathSync } from 'node:fs'
import { dirname, isAbsolute, resolve } from 'node:path'

const APPLICATION_ID = 0x44535746 // DSWF; never adopt another application's DB.
const SCHEMA_VERSION = 1
const SCHEMA = readFileSync(new URL('../docs/workflow-model.schema.sql', import.meta.url), 'utf8')
const SYSTEM = { kind: 'system', id: 'workflow-poc' }
const TERMINAL = new Set(['completed', 'terminated'])
const SETTLED = new Set(['succeeded', 'failed', 'cancelled'])
const NATIVE_POLICY = 'dsh-native/v1'
const PROCESS_STOP_POLICY = 'single-process-journal/v1'


function fail(code, message) {
  const error = new Error(message)
  error.code = `WF_${code}`
  error.workflowValidation = true
  throw error
}
function check(condition, code, message) { if (!condition) fail(code, message) }
function object(value, label) {
  check(value !== null && typeof value === 'object' && !Array.isArray(value)
    && [Object.prototype, null].includes(Object.getPrototypeOf(value)), 'INVALID_INPUT', `${label} must be a plain object`)
  return value
}
function text(value, label, max = 10000) {
  check(typeof value === 'string' && value.trim().length > 0 && value.length <= max, 'INVALID_INPUT', `${label} must be non-empty text (max ${max})`)
  return value
}
function integer(value, label) {
  check(Number.isSafeInteger(value) && value >= 0, 'INVALID_INPUT', `${label} must be a non-negative integer`)
  return value
}
function exactKeys(value, allowed, label) {
  object(value, label)
  check(Object.keys(value).every(key => allowed.includes(key)), 'INVALID_INPUT', `${label} contains an unsupported field`)
}
function json(value, depth = 0) {
  check(depth <= 24, 'INVALID_INPUT', 'JSON nesting exceeds the PoC limit')
  if (value === null || typeof value === 'string' || typeof value === 'boolean') return JSON.stringify(value)
  if (typeof value === 'number') { check(Number.isFinite(value), 'INVALID_INPUT', 'JSON numbers must be finite'); return JSON.stringify(value) }
  if (Array.isArray(value)) return `[${value.map(item => json(item, depth + 1)).join(',')}]`
  object(value, 'JSON value')
  return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${json(value[key], depth + 1)}`).join(',')}}`
}
function copy(value) { return JSON.parse(json(value)) }
function hash(value) { return createHash('sha256').update(json(value)).digest('hex') }
function freeze(value) {
  if (value && typeof value === 'object') { for (const child of Object.values(value)) freeze(child); Object.freeze(value) }
  return value
}
function actorValue(actor) { object(actor, 'actor'); text(actor.kind, 'actor.kind', 100); return copy(actor) }
function optionalText(value, label, max) {
  if (value === undefined) return ''
  check(typeof value === 'string' && value.length <= max, 'INVALID_INPUT', `${label} must be text (max ${max})`)
  return value
}
function processIdentity(value) {
  exactKeys(value, ['pid', 'startedAt'], 'process identity')
  check(Number.isSafeInteger(value.pid) && value.pid > 1, 'INVALID_INPUT', 'Process pid must be an integer greater than one')
  text(value.startedAt, 'process startedAt', 80)
  return { pid: value.pid, startedAt: value.startedAt }
}
function definitionView(input) {
  return { description: input.description ?? '', inputLabel: input.inputLabel ?? '', inputHint: input.inputHint ?? '',
    stages: input.stages }
}
function validateDefinition(input, { legacy = false } = {}) {
  exactKeys(input, legacy ? ['stages'] : ['stages', 'description', 'inputLabel', 'inputHint', 'permissions'], 'definition')
  const limit = legacy ? 32 : 16
  check(Array.isArray(input.stages) && input.stages.length >= 1 && input.stages.length <= limit,
    'INVALID_DEFINITION', `Use between 1 and ${limit} sequential stages`)
  optionalText(input.description, 'description', 4000)
  optionalText(input.inputLabel, 'inputLabel', 200)
  optionalText(input.inputHint, 'inputHint', 4000)
  const earlier = new Map()
  for (const stage of input.stages) {
    exactKeys(stage, ['id', 'kind', 'title', 'prompt', 'returnStageId', 'modelSelection'], 'stage')
    check(typeof stage.id === 'string' && /^[a-zA-Z0-9_.-]{1,64}$/.test(stage.id) && !earlier.has(stage.id), 'INVALID_DEFINITION', 'Stage ids must be unique, short identifiers')
    text(stage.title, 'stage.title', 200)
    check(['agent', 'review'].includes(stage.kind), 'INVALID_DEFINITION', 'Only agent and review stages are supported')
    if (!legacy && stage.kind === 'review') optionalText(stage.prompt, 'stage.prompt', Infinity)
    else if (!legacy || stage.prompt !== undefined) text(stage.prompt, 'stage.prompt', Infinity)
    if (stage.kind === 'review') {
      check(earlier.get(stage.returnStageId) === 'agent', 'INVALID_DEFINITION', 'Review must return to a fixed earlier agent stage')
    } else check(stage.returnStageId === undefined, 'INVALID_DEFINITION', 'Only review stages have returnStageId')
    if (stage.modelSelection !== undefined) {
      check(stage.kind === 'agent', 'INVALID_DEFINITION', 'Only agent stages configure a model')
      exactKeys(stage.modelSelection, ['provider', 'model', 'reasoningEffort'], 'stage.modelSelection')
      text(stage.modelSelection.provider, 'stage.modelSelection.provider', 200)
      text(stage.modelSelection.model, 'stage.modelSelection.model', 200)
      if (stage.modelSelection.reasoningEffort !== undefined) text(stage.modelSelection.reasoningEffort, 'stage.modelSelection.reasoningEffort', 80)
    }
    earlier.set(stage.id, stage.kind)
  }
  check(input.stages[0].kind === 'agent', 'INVALID_DEFINITION', 'The first stage must be an agent')
  return copy(legacy ? input : definitionView(input))
}
/** Validate complete stage structure before saving a reusable workflow. */
export function validateWorkflowDefinition(definition) { return validateDefinition(definition) }

// Model context is Host-owned and stays outside command fingerprints, so retries reuse the original receipt.
function inheritStageModels(definition, selection, previous = []) {
  if (!selection) return definition
  return validateWorkflowDefinition({ ...definition, stages: definition.stages.map(stage => {
    if (stage.kind !== 'agent') return stage
    const saved = previous.find(item => item.id === stage.id && item.kind === 'agent')
    const next = { ...stage }
    delete next.modelSelection
    if (saved) { if (saved.modelSelection) next.modelSelection = saved.modelSelection }
    else next.modelSelection = selection
    return next
  }) })
}

function schemaSignature(db) {
  return json(db.prepare("SELECT type,name,tbl_name,sql FROM sqlite_schema WHERE name NOT LIKE 'sqlite_%' ORDER BY type,name").all().map(row => ({ ...row })))
}
function expectedSignature() {
  const db = new DatabaseSync(':memory:')
  try { db.exec(SCHEMA); return schemaSignature(db) } finally { db.close() }
}
const EXPECTED_SCHEMA = expectedSignature()

/** Trusted Host path only. Never pass a model- or browser-selected database path. */
export function openWorkflowStore(path) {
  check(typeof path === 'string' && (path === ':memory:' || isAbsolute(path)), 'DB_PATH', 'Use :memory: or a trusted absolute database path')
  let fresh = path === ':memory:'
  if (!fresh) {
    const target = resolve(path)
    if (!existsSync(target)) {
      mkdirSync(dirname(target), { recursive: true, mode: 0o700 })
      let fd
      try { fd = openSync(target, constants.O_RDWR | constants.O_CREAT | constants.O_EXCL | (constants.O_NOFOLLOW || 0), 0o600); fresh = true }
      catch (error) { if (error.code === 'EEXIST') fail('DB_BUSY', 'Another opener created this database; retry explicitly'); throw error }
      finally { if (fd !== undefined) closeSync(fd) }
    }
    const stat = lstatSync(target)
    check(stat.isFile() && !stat.isSymbolicLink() && stat.nlink === 1, 'DB_PATH', 'Database must be a regular, non-symlink, non-hardlinked file')
    if (process.platform !== 'win32') check((stat.mode & 0o077) === 0 && stat.uid === process.getuid(), 'DB_PERMISSIONS', 'Database must be owned by this user with owner-only permissions')
    path = realpathSync(target)
  }
  let db
  try {
    db = new DatabaseSync(path)
    db.exec('PRAGMA busy_timeout=0; PRAGMA foreign_keys=ON; PRAGMA synchronous=FULL; PRAGMA locking_mode=EXCLUSIVE; BEGIN EXCLUSIVE;')
    if (fresh) {
      db.exec(SCHEMA)
      db.exec(`PRAGMA application_id=${APPLICATION_ID}; PRAGMA user_version=${SCHEMA_VERSION};`)
    } else {
      check(db.prepare('PRAGMA application_id').get().application_id === APPLICATION_ID
        && db.prepare('PRAGMA user_version').get().user_version === SCHEMA_VERSION
        && schemaSignature(db) === EXPECTED_SCHEMA, 'DB_SCHEMA', 'Unknown application or schema: no adoption, reset, or automatic migration')
    }
    check(db.prepare('PRAGMA quick_check').get().quick_check === 'ok'
      && db.prepare('PRAGMA foreign_key_check').all().length === 0, 'DB_CORRUPT', 'Database integrity or foreign-key check failed')
    db.exec('COMMIT')
    // ponytail: one lifecycle-exclusive writer per PoC DB, including between
    // commands. SQLite releases its OS lock on process death; no expiry/stealing.
  } catch (error) {
    try { db?.exec('ROLLBACK') } catch { /* BEGIN may have failed. */ }
    try { db?.close() } catch { /* Preserve the original failure. */ }
    if (/database is locked|SQLITE_BUSY/.test(error.message)) fail('DB_BUSY', 'Workflow database already has an exclusive owner')
    throw error
  }
  let closed = false
  function transaction(operation) {
    check(!closed, 'STORE_CLOSED', 'Workflow store is closed')
    db.exec('BEGIN IMMEDIATE')
    try {
      const result = operation()
      check(!result || typeof result.then !== 'function', 'ASYNC_TRANSACTION', 'Transactions must never await')
      db.exec('COMMIT')
      return result
    } catch (error) {
      try { db.exec('ROLLBACK') }
      catch {
        // An uncertain commit/rollback must never leave a usable writer behind.
        try { db.close() } catch { /* Preserve the uncertain outcome. */ }
        closed = true
        fail('STORE_UNCERTAIN', 'Transaction outcome is unknown; close and reconcile after reopening')
      }
      throw error
    }
  }
  const get = (sql, ...args) => db.prepare(sql).get(...args)
  const all = (sql, ...args) => db.prepare(sql).all(...args)
  const run = (sql, ...args) => db.prepare(sql).run(...args)
  // Table/column identifiers below are only literals generated in this module.
  function insert(table, values) {
    const keys = Object.keys(values)
    run(`INSERT INTO ${table} (${keys.join(',')}) VALUES (${keys.map(() => '?').join(',')})`, ...Object.values(values))
  }
  function update(table, id, values) {
    const keys = Object.keys(values)
    run(`UPDATE ${table} SET ${keys.map(key => `${key}=?`).join(',')} WHERE id=?`, ...Object.values(values), id)
  }
  function row(table, id) {
    text(id, 'id', 200)
    const found = get(`SELECT * FROM ${table} WHERE id=?`, id)
    check(found, 'NOT_FOUND', `${table.replace('wf_', '')} record does not exist`)
    return found
  }
  function versionOf(task) { return JSON.parse(row('wf_versions', task.workflow_version_id).definition_json) }
  function revision(record, expected, label = 'Task') {
    check(Number.isSafeInteger(expected) && expected === (record.revision ?? record.draft_revision), 'STALE_REVISION', `${label} changed; refresh before deciding`)
  }
  function workflowRoot(payload) {
    text(payload.workspaceId, 'workspaceId', 200); text(payload.executionScope, 'executionScope', 1000); text(payload.name, 'name', 200)
    check(typeof payload.rootPath === 'string' && isAbsolute(payload.rootPath), 'INVALID_INPUT', 'rootPath must be an absolute trusted workspace path')
    const root = realpathSync(payload.rootPath)
    check(lstatSync(root).isDirectory(), 'INVALID_INPUT', 'rootPath must identify a directory')
    const other = get('SELECT execution_scope FROM wf_workflows WHERE root_path_snapshot=? LIMIT 1', root)
    check(!other || other.execution_scope === payload.executionScope, 'SCOPE_MISMATCH', 'The same canonical directory must use the same execution scope')
    return root
  }
  // A durable deletion receipt hides the flow without destroying immutable execution evidence.
  function deletedWorkflow(id) {
    return Boolean(get("SELECT 1 FROM wf_command_receipts WHERE namespace='workflow-poc' AND operation='deleteWorkflow' AND json_extract(response_json,'$.workflowId')=? LIMIT 1", id))
  }
  function deletedTask(id) {
    return Boolean(get("SELECT 1 FROM wf_command_receipts WHERE namespace='workflow-poc' AND operation='deleteTask' AND json_extract(response_json,'$.taskId')=? LIMIT 1", id))
  }
  function activeWorkflow(id) {
    const workflow = row('wf_workflows', id)
    check(!deletedWorkflow(id), 'WORKFLOW_DELETED', '工作流已删除。')
    return workflow
  }
  // Keep the deployed schema: draft_json stores the current definition and
  // published_version_id points to an immutable execution snapshot, not a lifecycle state.
  function snapshotWorkflow(workflow, who) {
    const definition = definitionView(JSON.parse(workflow.draft_json))
    const current = workflow.published_version_id && row('wf_versions', workflow.published_version_id)
    if (current && json(definitionView(JSON.parse(current.definition_json))) === json(definition)) return current.id
    validateWorkflowDefinition(definition)
    const id = randomUUID(), now = Date.now()
    const number = get('SELECT COALESCE(MAX(version_number),0)+1 AS n FROM wf_versions WHERE workflow_id=?', workflow.id).n
    insert('wf_versions', { id, workflow_id: workflow.id, version_number: number,
      definition_json: json(definition), definition_hash: hash(definition), published_by_json: json(who), published_at: now })
    update('wf_workflows', workflow.id, { published_version_id: id, accepting_tasks: 1 })
    return id
  }
  function getWorkflow(id) {
    check(!closed, 'STORE_CLOSED', 'Workflow store is closed')
    const workflow = activeWorkflow(id), definition = definitionView(JSON.parse(workflow.draft_json))
    const snapshot = workflow.published_version_id && row('wf_versions', workflow.published_version_id)
    const current = snapshot && json(definitionView(JSON.parse(snapshot.definition_json))) === json(definition)
    return { id, workspaceId: workflow.workspace_id, name: workflow.name, description: definition.description,
      revision: workflow.draft_revision, definition, versionId: current ? snapshot.id : null,
      versionNumber: current ? snapshot.version_number : null,
      taskCount: all('SELECT id FROM wf_tasks WHERE workflow_id=?', id).filter(item => !deletedTask(item.id)).length,
      createdAt: workflow.created_at, updatedAt: workflow.updated_at,
      rootPath: workflow.root_path_snapshot, executionScope: workflow.execution_scope }
  }

  function retryBlock(task) {
    if (task.state !== 'needs_attention') return ['NOT_NEEDS_ATTENTION', 'Only a task needing attention can retry']
    if (get("SELECT id FROM wf_attempts WHERE task_id=? AND state='unknown'", task.id))
      return ['RETRY_UNKNOWN', 'Unknown execution must be reconciled; stopping alone does not authorize retry']
    if (get("SELECT id FROM wf_attempts WHERE task_id=? AND (quiesced_at IS NULL OR state IN ('prepared','running'))", task.id)
      || get('SELECT s.attempt_id FROM wf_execution_slots s JOIN wf_attempts a ON a.id=s.attempt_id WHERE a.task_id=?', task.id))
      return ['STOP_UNCONFIRMED', 'Retry requires all previous attempts to be stopped and their execution slots released']
    const visit = row('wf_stage_visits', task.current_visit_id)
    if (visit.outcome !== 'open' || visit.superseded_by_review_id
      || versionOf(task).stages.find(stage => stage.id === visit.stage_id)?.kind !== 'agent')
      return ['INVALID_STAGE', 'Retry requires the current open agent stage']
    return null
  }
  function record(taskId, kind, data, actor = SYSTEM, changes, requestId = null) {
    let task = row('wf_tasks', taskId)
    if (changes) {
      check(!TERMINAL.has(task.state), 'TASK_TERMINAL', 'Terminal task cannot change')
      update('wf_tasks', taskId, { ...changes, revision: task.revision + 1, updated_at: Date.now() })
      task = row('wf_tasks', taskId)
    }
    const sequence = get('SELECT COALESCE(MAX(sequence),0)+1 AS n FROM wf_task_events WHERE task_id=?', taskId).n
    insert('wf_task_events', { id: randomUUID(), task_id: taskId, sequence, task_revision: task.revision, kind,
      actor_json: json(actor), data_json: json(data), request_id: requestId, created_at: Date.now() })
  }
  function command(operation, payload, actor, apply) {
    text(payload.requestId, 'requestId', 200)
    actor = actorValue(actor)
    const fingerprint = hash({ operation, payload, actor })
    return transaction(() => {
      const old = get("SELECT * FROM wf_command_receipts WHERE namespace='workflow-poc' AND request_id=?", payload.requestId)
      if (old) {
        check(old.payload_hash === fingerprint && old.operation === operation, 'IDEMPOTENCY_CONFLICT', 'This request id was already used with different content or actor')
        return JSON.parse(old.response_json)
      }
      const result = apply(actor)
      insert('wf_command_receipts', { namespace: 'workflow-poc', request_id: payload.requestId, operation,
        payload_hash: fingerprint, actor_json: json(actor), response_json: json(result), committed_at: Date.now() })
      return result
    })
  }
  function creationReceipt(requestId, operation) {
    check(!closed, 'STORE_CLOSED', 'Workflow store is closed')
    text(requestId, 'requestId', 200)
    const receipt = get("SELECT operation,response_json FROM wf_command_receipts WHERE namespace='workflow-poc' AND request_id=?", requestId)
    if (!receipt) return null
    check(receipt.operation === operation, 'IDEMPOTENCY_CONFLICT', 'This request id was already used for a different operation')
    // Binding lookup is neither authorization nor replay. The full command must
    // still validate its payload and actor fingerprint before returning a receipt.
    return JSON.parse(receipt.response_json)
  }
  function makeVisit(taskId, stageId, cause = null, identity = randomUUID()) {
    const ordinal = get('SELECT COALESCE(MAX(ordinal),0)+1 AS n FROM wf_stage_visits WHERE task_id=?', taskId).n
    insert('wf_stage_visits', { id: identity, task_id: taskId, stage_id: stageId, ordinal,
      entered_by: cause ? 'rework' : ordinal === 1 ? 'start' : 'advance', caused_by_review_id: cause,
      outcome: 'open', opened_at: Date.now() })
    return identity
  }
  function currentArtifactIds(taskId) {
    return all(`SELECT a.result_json FROM wf_stage_visits v JOIN wf_attempts a ON a.id=v.accepted_attempt_id
      WHERE v.task_id=? AND v.superseded_by_review_id IS NULL AND v.outcome='succeeded' ORDER BY v.ordinal`, taskId)
      .flatMap(item => JSON.parse(item.result_json).artifactIds)
  }
  function feedbackFor(task) {
    const stages = versionOf(task).stages
    const current = row('wf_stage_visits', task.current_visit_id)
    const stageIndex = stages.findIndex(stage => stage.id === current.stage_id)
    return all(`SELECT v.stage_id,r.id,r.feedback FROM wf_stage_visits v JOIN wf_reviews r ON r.id=v.caused_by_review_id
      WHERE v.task_id=? AND v.superseded_by_review_id IS NULL ORDER BY v.ordinal`, task.id)
      .filter(item => stages.findIndex(stage => stage.id === item.stage_id) <= stageIndex)
      .map(item => ({ reviewId: item.id, feedback: item.feedback }))
  }
  function artifactView(item) {
    return { id: item.id, taskId: item.task_id, attemptId: item.attempt_id, outputKey: item.output_key,
      label: item.label, mediaType: item.media_type, contentHash: item.content_hash, byteLength: item.byte_length,
      snapshotRef: item.snapshot_ref, createdAt: item.created_at }
  }
  function attemptView(item) {
    const snapshot = JSON.parse(item.executor_snapshot_json)
    const { _workflowOwner: owner, ...executorSnapshot } = snapshot
    const payload = JSON.parse(item.prompt_payload_json)
    return { id: item.id, taskId: item.task_id, visitId: item.visit_id, attemptNumber: item.attempt_number,
      state: item.state, sessionId: item.session_id, requestId: item.prompt_request_id,
      prompt: payload.content[0].text, promptPayload: payload, promptHash: item.prompt_payload_hash,
      ownerToken: owner.ownerToken, ownerInstanceId: owner.ownerInstanceId,
      inputBundle: JSON.parse(item.input_bundle_json), executorSnapshot, messageId: item.message_id,
      turnNumber: item.turn_number, lastObservedSeq: item.last_observed_seq, acceptedAt: item.accepted_at,
      claimedAt: item.claimed_at, cancelRequestedAt: item.cancel_requested_at, cancelReason: item.cancel_reason,
      createdAt: item.created_at, settledAt: item.settled_at,
      hostEnd: item.host_end_json && JSON.parse(item.host_end_json),
      quiescedAt: item.quiesced_at, result: item.result_json && JSON.parse(item.result_json),
      error: item.error_json && JSON.parse(item.error_json), evidence: item.reconciliation_json && JSON.parse(item.reconciliation_json) }
  }
  function ownedAttempt(id, token) {
    const attempt = row('wf_attempts', id)
    const owner = JSON.parse(attempt.executor_snapshot_json)._workflowOwner
    check(typeof token === 'string' && token === owner.ownerToken, 'OWNER_MISMATCH', 'Attempt owner token does not match')
    return attempt
  }
  function getAttemptProcesses(attemptId) {
    check(!closed, 'STORE_CLOSED', 'Workflow store is closed')
    const attempt = row('wf_attempts', attemptId)
    return all("SELECT data_json FROM wf_task_events WHERE task_id=? AND kind='attempt.process_registered' AND json_extract(data_json,'$.attemptId')=? ORDER BY sequence",
      attempt.task_id, attempt.id).map(item => {
      const { pid, startedAt } = JSON.parse(item.data_json)
      return { pid, startedAt }
    })
  }
  function terminateStoppedTask(task, who, requestId, attemptId = null) {
    const visit = row('wf_stage_visits', task.current_visit_id)
    if (visit.outcome === 'open') update('wf_stage_visits', visit.id, { outcome: 'terminated', closed_at: Date.now() })
    const pending = get("SELECT id FROM wf_reviews WHERE task_id=? AND state='pending'", task.id)
    if (pending) update('wf_reviews', pending.id, { state: 'terminated', decided_by_json: json(who), decision_request_id: requestId, decided_at: Date.now() })
    record(task.id, 'task.terminated', { attemptId }, who,
      { state: 'terminated', finished_at: Date.now(), attention_json: null }, requestId)
    return getTask(task.id)
  }
  function getTask(id) {
    check(!closed, 'STORE_CLOSED', 'Workflow store is closed')
    const task = row('wf_tasks', id)
    check(!deletedTask(id), 'TASK_DELETED', '任务已删除。')
    const workflow = row('wf_workflows', task.workflow_id)
    const version = row('wf_versions', task.workflow_version_id)
    const definition = JSON.parse(version.definition_json)
    const visits = all('SELECT * FROM wf_stage_visits WHERE task_id=? ORDER BY ordinal', id).map(item => ({
      id: item.id, taskId: item.task_id, stageId: item.stage_id, ordinal: item.ordinal, enteredBy: item.entered_by,
      causedByReviewId: item.caused_by_review_id, outcome: item.outcome, acceptedAttemptId: item.accepted_attempt_id,
      supersededByReviewId: item.superseded_by_review_id, openedAt: item.opened_at, closedAt: item.closed_at }))
    const reviews = all('SELECT * FROM wf_reviews WHERE task_id=? ORDER BY requested_at,id', id).map(item => ({
      id: item.id, taskId: item.task_id, visitId: item.visit_id, state: item.state, subject: JSON.parse(item.subject_json),
      subjectHash: item.subject_hash, returnStageId: item.return_stage_id, feedback: item.feedback,
      decidedBy: item.decided_by_json && JSON.parse(item.decided_by_json), requestId: item.decision_request_id,
      requestedAt: item.requested_at, decidedAt: item.decided_at }))
    const currentVisit = visits.find(visit => visit.id === task.current_visit_id)
    return { id, workflowId: task.workflow_id, workflowVersionId: task.workflow_version_id,
      workflowName: workflow.name, versionNumber: version.version_number, canRetry: retryBlock(task) === null,
      workspaceId: workflow.workspace_id, rootPath: workflow.root_path_snapshot, executionScope: workflow.execution_scope,
      title: task.title, state: task.state, revision: task.revision, input: JSON.parse(task.input_json),
      executionConfig: JSON.parse(task.execution_config_json), definition, currentVisitId: task.current_visit_id,
      currentStage: definition.stages.find(stage => stage.id === currentVisit.stageId),
      visits, attempts: all('SELECT * FROM wf_attempts WHERE task_id=? ORDER BY created_at,rowid', id).map(attemptView),
      artifacts: all('SELECT * FROM wf_artifacts WHERE task_id=? ORDER BY created_at,rowid', id).map(artifactView),
      currentArtifactIds: currentArtifactIds(id), effectiveArtifacts: currentArtifactIds(id).map(artifactId => artifactView(row('wf_artifacts', artifactId))),
      feedback: feedbackFor(task).map(item => item.feedback), feedbackDetails: feedbackFor(task),
      review: reviews.find(review => review.state === 'pending' && review.visitId === task.current_visit_id) || null,
      reviews, attention: task.attention_json && JSON.parse(task.attention_json),
      events: all('SELECT * FROM wf_task_events WHERE task_id=? ORDER BY sequence', id).map(item => ({
        id: item.id, sequence: item.sequence, taskRevision: item.task_revision, kind: item.kind,
        actor: JSON.parse(item.actor_json), data: JSON.parse(item.data_json), requestId: item.request_id, createdAt: item.created_at })),
      createdAt: task.created_at, updatedAt: task.updated_at, finishedAt: task.finished_at }
  }
  function advance(task, visit) {
    const stages = versionOf(task).stages
    const next = stages[stages.findIndex(stage => stage.id === visit.stage_id) + 1]
    if (!next) return { state: 'completed', finished_at: Date.now(), attention_json: null }
    const visitId = makeVisit(task.id, next.id)
    if (next.kind === 'agent') return { state: 'queued', current_visit_id: visitId, queued_at: Date.now(), attention_json: null }
    const artifactIds = currentArtifactIds(task.id)
    check(artifactIds.length > 0, 'REVIEW_SUBJECT', 'Review requires at least one valid immutable artifact')
    const subject = { workflowVersionId: task.workflow_version_id, artifactIds,
      artifacts: artifactIds.map(id => artifactView(row('wf_artifacts', id))) }
    insert('wf_reviews', { id: randomUUID(), task_id: task.id, visit_id: visitId, subject_json: json(subject),
      subject_hash: hash(subject), return_stage_id: next.returnStageId, state: 'pending', requested_at: Date.now() })
    return { state: 'waiting_review', current_visit_id: visitId, attention_json: null }
  }
  function addArtifact(attempt, artifact) {
    exactKeys(artifact, ['snapshotRef', 'contentHash', 'byteLength', 'label', 'mediaType'], 'artifact')
    check(typeof artifact.contentHash === 'string' && /^[0-9a-f]{64}$/.test(artifact.contentHash), 'INVALID_ARTIFACT', 'Artifact needs a SHA-256 content hash')
    integer(artifact.byteLength, 'artifact.byteLength'); text(artifact.label, 'artifact.label', 200); text(artifact.mediaType, 'artifact.mediaType', 100)
    let ref
    try { ref = JSON.parse(artifact.snapshotRef) } catch { fail('INVALID_ARTIFACT', 'Artifact must reference stored DSH FileAttachmentRef JSON, never a workspace path') }
    exactKeys(ref, ['attachmentId', 'name', 'bytes'], 'artifact.snapshotRef')
    check(ref.attachmentId === `sha256:${artifact.contentHash}` && ref.bytes === artifact.byteLength && typeof ref.name === 'string',
      'INVALID_ARTIFACT', 'Stored attachment reference must match the artifact digest and size')
    const existing = get("SELECT * FROM wf_artifacts WHERE attempt_id=? AND output_key='result'", attempt.id)
    if (existing) {
      const view = artifactView(existing)
      check(Object.keys(artifact).every(key => artifact[key] === view[key]), 'ARTIFACT_CONFLICT', 'Previously recorded artifact differs')
      return existing.id
    }
    const id = randomUUID()
    insert('wf_artifacts', { id, task_id: attempt.task_id, attempt_id: attempt.id, output_key: 'result', label: artifact.label,
      media_type: artifact.mediaType, content_hash: artifact.contentHash, byte_length: artifact.byteLength,
      snapshot_ref: artifact.snapshotRef, created_at: Date.now() })
    return id
  }
  function validateSuccessTools(attempt, evidence) {
    const snapshot = JSON.parse(attempt.executor_snapshot_json)
    if (snapshot.policy === NATIVE_POLICY) {
      check(evidence.policy === NATIVE_POLICY
        && [evidence.userSeq, evidence.assistantSeq, evidence.endSeq].every(value => Number.isSafeInteger(value) && value >= 0)
        && evidence.userSeq < evidence.assistantSeq && evidence.assistantSeq < evidence.endSeq,
      'SUCCESS_UNCONFIRMED', 'Native DSH success requires a durable input, report and completed turn')
    } else {
      check(evidence.toolInvocationCount === 0, 'SUCCESS_UNCONFIRMED', 'Legacy text execution requires tool-free evidence')
    }
  }
  function validateEvidence(attempt, evidence, outcome) {
    if (evidence === undefined || evidence === null) return false
    object(evidence, 'evidence')
    check(['dsh-session-log', 'workflow-preflight'].includes(evidence.kind) && evidence.attemptId === attempt.id
      && evidence.sessionId === attempt.session_id && evidence.requestId === attempt.prompt_request_id,
    'EVIDENCE_MISMATCH', 'Runtime evidence must match this exact attempt, session, and request')
    if (evidence.kind === 'workflow-preflight') check(outcome !== 'succeeded' && attempt.state === 'prepared'
      && attempt.message_id === null && attempt.turn_number === null && evidence.messageId == null && evidence.turnNumber == null
      && evidence.completed === false && evidence.flushConfirmed === false && evidence.toolInvocationCount === 0,
    'INVALID_EVIDENCE', 'Preflight evidence applies only to an unstarted prepared attempt and cannot prove success')
    check(typeof evidence.quiescent === 'boolean', 'INVALID_EVIDENCE', 'Evidence must explicitly state quiescence')
    check(attempt.quiesced_at === null || evidence.quiescent, 'EVIDENCE_MISMATCH', 'Confirmed quiescence cannot be withdrawn')
    if (evidence.messageId != null) text(evidence.messageId, 'evidence.messageId', 200)
    if (evidence.turnNumber != null) integer(evidence.turnNumber, 'evidence.turnNumber')
    if (evidence.messageId != null && attempt.message_id != null) check(evidence.messageId === attempt.message_id, 'EVIDENCE_MISMATCH', 'Message correlation changed')
    if (evidence.turnNumber != null && attempt.turn_number != null) check(evidence.turnNumber === attempt.turn_number, 'EVIDENCE_MISMATCH', 'Turn correlation changed')
    if (evidence.quiescent) check(evidence.ownedJobCount === 0, 'STOP_UNCONFIRMED', 'Owned jobs must be confirmed absent')
    json(evidence)
    return evidence.quiescent
  }

  return {
    getWorkflow,
    listWorkflows(workspaceId) {
      check(!closed, 'STORE_CLOSED', 'Workflow store is closed')
      const rows = workspaceId === undefined
        ? all('SELECT id FROM wf_workflows ORDER BY created_at,rowid')
        : all('SELECT id FROM wf_workflows WHERE workspace_id=? ORDER BY created_at,rowid', text(workspaceId, 'workspaceId', 200))
      return rows.filter(item => !deletedWorkflow(item.id)).map(item => getWorkflow(item.id))
    },
    createWorkflow(payload, actor, selection) {
      exactKeys(payload, ['requestId', 'workspaceId', 'rootPath', 'executionScope', 'name', 'definition'], 'createWorkflow')
      return command('createWorkflow', payload, actor, who => {
        const root = workflowRoot(payload)
        const definition = inheritStageModels(validateWorkflowDefinition(payload.definition), selection)
        const id = randomUUID(), now = Date.now()
        insert('wf_workflows', { id, workspace_id: payload.workspaceId, root_path_snapshot: root, execution_scope: payload.executionScope,
          name: payload.name, draft_json: json(definition), draft_revision: 1, created_at: now, updated_at: now })
        snapshotWorkflow(row('wf_workflows', id), who)
        return getWorkflow(id)
      })
    },
    updateWorkflow(payload, actor, selection) {
      exactKeys(payload, ['requestId', 'workflowId', 'expectedRevision', 'name', 'definition'], 'updateWorkflow')
      return command('updateWorkflow', payload, actor, who => {
        const workflow = activeWorkflow(payload.workflowId)
        revision(workflow, payload.expectedRevision, 'Workflow')
        text(payload.name, 'name', 200)
        const definition = inheritStageModels(validateWorkflowDefinition(payload.definition), selection, JSON.parse(workflow.draft_json).stages)
        update('wf_workflows', workflow.id, { name: payload.name, draft_json: json(definition),
          draft_revision: workflow.draft_revision + 1, updated_at: Date.now() })
        snapshotWorkflow(row('wf_workflows', workflow.id), who)
        return getWorkflow(workflow.id)
      })
    },
    deleteWorkflow(payload, actor) {
      exactKeys(payload, ['requestId', 'workflowId', 'expectedRevision'], 'deleteWorkflow')
      return command('deleteWorkflow', payload, actor, who => {
        check(who.kind === 'user', 'HUMAN_REQUIRED', '请在工作流页面确认删除。')
        const workflow = activeWorkflow(payload.workflowId)
        revision(workflow, payload.expectedRevision, 'Workflow')
        check(!get("SELECT id FROM wf_tasks WHERE workflow_id=? AND state NOT IN ('completed','terminated') LIMIT 1", workflow.id),
          'WORKFLOW_HAS_ACTIVE_TASKS', '此工作流有未结束的任务，请先处理任务后再删除。')
        check(!get("SELECT a.id FROM wf_attempts a JOIN wf_tasks t ON t.id=a.task_id WHERE t.workflow_id=? AND a.quiesced_at IS NULL LIMIT 1", workflow.id),
          'STOP_UNCONFIRMED', '尚未确认所有执行已停止，请先核对任务状态。')
        update('wf_workflows', workflow.id, { accepting_tasks: 0, draft_revision: workflow.draft_revision + 1, updated_at: Date.now() })
        return { workflowId: workflow.id, deleted: true }
      })
    },
    getTask,
    listTaskSummaries(workspaceId) {
      check(!closed, 'STORE_CLOSED', 'Workflow store is closed')
      const rows = all(`SELECT t.id,t.workflow_id,t.workflow_version_id,t.current_visit_id,t.title,t.state,t.revision,
        t.created_at,t.updated_at,w.name AS workflow_name,w.workspace_id,v.version_number,
        json_extract(stage.value,'$.title') AS stage_title, json_extract(t.input_json,'$.text') AS input_text
        FROM wf_tasks t JOIN wf_workflows w ON w.id=t.workflow_id
        JOIN wf_versions v ON v.id=t.workflow_version_id JOIN wf_stage_visits visit ON visit.id=t.current_visit_id
        JOIN json_each(v.definition_json,'$.stages') stage ON json_extract(stage.value,'$.id')=visit.stage_id
        ${workspaceId === undefined ? '' : 'WHERE w.workspace_id=?'} ORDER BY t.created_at,t.rowid`,
      ...(workspaceId === undefined ? [] : [text(workspaceId, 'workspaceId', 200)]))
      return rows.filter(task => !deletedTask(task.id)).map(task => ({ id: task.id, workflowId: task.workflow_id, workflowName: task.workflow_name,
        workflowVersionId: task.workflow_version_id, versionNumber: task.version_number, workspaceId: task.workspace_id, title: task.title, inputText: task.input_text, state: task.state,
        revision: task.revision, stageTitle: task.stage_title, createdAt: task.created_at, updatedAt: task.updated_at,
        canRetry: retryBlock(task) === null }))
    },
    listTasks(workspaceId) {
      check(!closed, 'STORE_CLOSED', 'Workflow store is closed')
      const rows = workspaceId === undefined
        ? all('SELECT id FROM wf_tasks ORDER BY created_at,rowid')
        : all('SELECT t.id FROM wf_tasks t JOIN wf_workflows w ON w.id=t.workflow_id WHERE w.workspace_id=? ORDER BY t.created_at,t.rowid', text(workspaceId, 'workspaceId', 200))
      return rows.filter(item => !deletedTask(item.id)).map(item => getTask(item.id))
    },
    getCreateTaskBinding(requestId) {
      const task = creationReceipt(requestId, 'createTask')
      return task ? { workflowId: task.workflowId, workspaceId: task.workspaceId } : null
    },
    getCreateTaskSnapshot(requestId) {
      const task = creationReceipt(requestId, 'createTask')
      return task ? { workflowId: task.workflowId, workflowVersionId: task.workflowVersionId,
        workspaceId: task.workspaceId, executionConfig: task.executionConfig } : null
    },
    getCreateWorkflowBinding(requestId) {
      const workflow = creationReceipt(requestId, 'createWorkflow')
      return workflow ? { workspaceId: workflow.workspaceId, rootPath: workflow.rootPath, executionScope: workflow.executionScope } : null
    },
    publishDefinition(payload, actor) {
      exactKeys(payload, ['requestId', 'workspaceId', 'rootPath', 'executionScope', 'name', 'definition'], 'publishDefinition')
      return command('publishDefinition', payload, actor, who => {
        const root = workflowRoot(payload)
        // Preserve the deployed prototype's definition/receipt contract.
        const definition = validateDefinition(payload.definition, { legacy: true })
        const id = randomUUID(), versionId = randomUUID(), now = Date.now()
        insert('wf_workflows', { id, workspace_id: payload.workspaceId, root_path_snapshot: root, execution_scope: payload.executionScope,
          name: payload.name, draft_json: json(definition), draft_revision: 1, created_at: now, updated_at: now })
        insert('wf_versions', { id: versionId, workflow_id: id, version_number: 1, definition_json: json(definition),
          definition_hash: hash(definition), published_by_json: json(who), published_at: now })
        update('wf_workflows', id, { published_version_id: versionId, accepting_tasks: 1 })
        return { workflowId: id, versionId, workflow: { id, workspaceId: payload.workspaceId, rootPath: root,
          executionScope: payload.executionScope, name: payload.name, publishedVersionId: versionId },
        version: { id: versionId, workflowId: id, versionNumber: 1, definition, definitionHash: hash(definition) } }
      })
    },
    createTask(payload, actor) {
      exactKeys(payload, ['requestId', 'workflowId', 'expectedVersionId', 'title', 'input', 'executionConfig'], 'createTask')
      return command('createTask', payload, actor, who => {
        text(payload.title, 'title', 200); exactKeys(payload.input, ['text'], 'input'); text(payload.input.text, 'input.text', Infinity)
        object(payload.executionConfig, 'executionConfig')
        const workflow = activeWorkflow(payload.workflowId)
        const versionId = snapshotWorkflow(workflow, who)
        if (payload.expectedVersionId !== undefined) {
          text(payload.expectedVersionId, 'expectedVersionId', 200)
          check(payload.expectedVersionId === versionId, 'VERSION_CHANGED', 'The workflow changed; refresh before creating this task')
        }
        const definition = JSON.parse(row('wf_versions', versionId).definition_json)
        const id = randomUUID(), visitId = randomUUID(), now = Date.now()
        insert('wf_tasks', { id, workflow_id: workflow.id, workflow_version_id: versionId,
          title: payload.title, input_json: json(payload.input), execution_config_json: json(payload.executionConfig),
          state: 'queued', current_visit_id: visitId, revision: 1, queued_at: now, created_at: now, updated_at: now })
        makeVisit(id, definition.stages[0].id, null, visitId)
        record(id, 'task.created', {}, who, undefined, payload.requestId)
        return getTask(id)
      })
    },
    prepareAttempt(payload) {
      exactKeys(payload, ['taskId', 'expectedRevision', 'prompt', 'executorSnapshot', 'ownerInstanceId'], 'prepareAttempt')
      return transaction(() => {
        const task = row('wf_tasks', payload.taskId)
        revision(task, payload.expectedRevision)
        check(task.state === 'queued', 'TASK_NOT_QUEUED', 'Only a queued task can dispatch; uncertain work requires reconciliation')
        text(payload.prompt, 'prompt', Infinity); text(payload.ownerInstanceId, 'ownerInstanceId', 200); object(payload.executorSnapshot, 'executorSnapshot')
        check(!Object.hasOwn(payload.executorSnapshot, '_workflowOwner'), 'INVALID_INPUT', 'Reserved executor snapshot key')
        if (payload.executorSnapshot.stopPolicy !== undefined || payload.executorSnapshot.hostProcess !== undefined) {
          check(payload.executorSnapshot.stopPolicy === PROCESS_STOP_POLICY, 'INVALID_INPUT', 'Unsupported process stop policy')
          processIdentity(payload.executorSnapshot.hostProcess)
        }
        const definition = versionOf(task)
        const visit = row('wf_stage_visits', task.current_visit_id)
        const stage = definition.stages.find(stage => stage.id === visit.stage_id)
        check(stage.kind === 'agent' && visit.outcome === 'open' && !visit.superseded_by_review_id, 'INVALID_STAGE', 'Dispatch requires a current open agent stage')
        const scope = row('wf_workflows', task.workflow_id).execution_scope
        check(!get('SELECT attempt_id FROM wf_execution_slots WHERE execution_scope=?', scope), 'SLOT_BUSY', 'Another attempt still owns this execution directory')
        const id = randomUUID(), sessionId = randomUUID(), requestId = randomUUID(), ownerToken = randomUUID(), now = Date.now()
        const feedback = feedbackFor(task)
        const bundle = { input: JSON.parse(task.input_json), artifactIds: currentArtifactIds(task.id),
          feedbackReviewIds: feedback.map(item => item.reviewId), feedback }
        const promptPayload = { mode: 'queue', content: [{ type: 'text', text: payload.prompt }] }
        insert('wf_attempts', { id, task_id: task.id, visit_id: visit.id,
          attempt_number: get('SELECT COALESCE(MAX(attempt_number),0)+1 AS n FROM wf_attempts WHERE visit_id=?', visit.id).n,
          state: 'prepared', input_bundle_json: json(bundle), executor_snapshot_json: json({ ...payload.executorSnapshot,
            _workflowOwner: { ownerInstanceId: payload.ownerInstanceId, ownerToken } }),
          prompt_request_id: requestId, prompt_payload_json: json(promptPayload), prompt_payload_hash: hash(promptPayload), session_id: sessionId, created_at: now })
        insert('wf_execution_slots', { execution_scope: scope, attempt_id: id, owner_instance_id: payload.ownerInstanceId,
          owner_token: ownerToken, acquired_at: now, last_observed_at: now })
        record(task.id, 'attempt.prepared', { attemptId: id }, SYSTEM, { state: 'running', attention_json: null })
        return freeze(attemptView(row('wf_attempts', id)))
      })
    },
    getAttemptProcesses,
    recordProcess(payload) {
      exactKeys(payload, ['attemptId', 'ownerToken', 'pid', 'startedAt'], 'recordProcess')
      return transaction(() => {
        const attempt = ownedAttempt(payload.attemptId, payload.ownerToken)
        check(['prepared', 'running'].includes(attempt.state), 'ATTEMPT_NOT_ACTIVE', 'Only an active prepared or running attempt may register a process')
        check(get('SELECT attempt_id FROM wf_execution_slots WHERE attempt_id=? AND owner_token=?', attempt.id, payload.ownerToken),
          'OWNER_MISMATCH', 'Process registration requires the current owned execution slot')
        const process = processIdentity({ pid: payload.pid, startedAt: payload.startedAt })
        if (!getAttemptProcesses(attempt.id).some(item => item.pid === process.pid && item.startedAt === process.startedAt))
          record(attempt.task_id, 'attempt.process_registered', { attemptId: attempt.id, ...process })
        return process
      })
    },
    observeAttempt(payload) {
      exactKeys(payload, ['attemptId', 'ownerToken', 'sessionId', 'requestId', 'messageId', 'turnNumber', 'lastObservedSeq', 'acceptedAt', 'claimedAt', 'hostEnd'], 'observeAttempt')
      return transaction(() => {
        const attempt = ownedAttempt(payload.attemptId, payload.ownerToken)
        check(!SETTLED.has(attempt.state), 'ATTEMPT_TERMINAL', 'Settled attempt observations are immutable')
        if (payload.sessionId !== undefined) check(payload.sessionId === attempt.session_id, 'CORRELATION_MISMATCH', 'Session cannot change')
        if (payload.requestId !== undefined) check(payload.requestId === attempt.prompt_request_id, 'CORRELATION_MISMATCH', 'Request cannot change')
        const changes = {}
        const fields = { messageId: 'message_id', turnNumber: 'turn_number', lastObservedSeq: 'last_observed_seq', acceptedAt: 'accepted_at', claimedAt: 'claimed_at' }
        for (const [key, column] of Object.entries(fields)) {
          if (payload[key] === undefined) continue
          if (key === 'messageId') text(payload[key], key, 200); else integer(payload[key], key)
          if (key === 'lastObservedSeq') check(attempt[column] === null || payload[key] >= attempt[column], 'CORRELATION_MISMATCH', 'Observation sequence cannot go backwards')
          else check(attempt[column] === null || payload[key] === attempt[column], 'CORRELATION_MISMATCH', `${key} cannot be rebound`)
          changes[column] = payload[key]
        }
        if (payload.hostEnd !== undefined) changes.host_end_json = json(payload.hostEnd)
        if (attempt.state === 'prepared' && (payload.acceptedAt !== undefined || payload.claimedAt !== undefined || payload.turnNumber !== undefined)) changes.state = 'running'
        if (Object.keys(changes).length) update('wf_attempts', attempt.id, changes)
        run('UPDATE wf_execution_slots SET last_observed_at=? WHERE attempt_id=?', Date.now(), attempt.id)
        const { ownerToken: ignored, ...observation } = payload
        record(attempt.task_id, 'attempt.observed', observation)
        return getTask(attempt.task_id)
      })
    },
    finishAttempt(payload) {
      exactKeys(payload, ['attemptId', 'ownerToken', 'outcome', 'artifact', 'evidence', 'error'], 'finishAttempt')
      return transaction(() => {
        const attempt = ownedAttempt(payload.attemptId, payload.ownerToken)
        check(!SETTLED.has(attempt.state), 'ATTEMPT_TERMINAL', 'Known terminal attempt cannot change')
        check(['succeeded', 'failed', 'cancelled', 'unknown'].includes(payload.outcome), 'INVALID_OUTCOME', 'Unsupported attempt outcome')
        const task = row('wf_tasks', attempt.task_id)
        check(!TERMINAL.has(task.state), 'TASK_TERMINAL', 'Terminal task cannot change')
        const quiet = validateEvidence(attempt, payload.evidence, payload.outcome)
        check(payload.outcome === 'unknown' || quiet || attempt.quiesced_at !== null, 'STOP_UNCONFIRMED', 'Only confirmed quiescent work may settle')
        if (payload.outcome === 'succeeded') {
          check(payload.evidence?.completed === true && payload.evidence?.flushConfirmed === true
            && payload.evidence?.ownedJobCount === 0
            && typeof payload.evidence?.messageId === 'string' && Number.isSafeInteger(payload.evidence?.turnNumber),
          'SUCCESS_UNCONFIRMED', 'Success requires durable completed, correlated and physically stopped runtime evidence')
          validateSuccessTools(attempt, payload.evidence)
        }
        let artifactId
        if (payload.artifact !== undefined) artifactId = addArtifact(attempt, payload.artifact)
        else artifactId = get("SELECT id FROM wf_artifacts WHERE attempt_id=? AND output_key='result'", attempt.id)?.id
        if (payload.outcome === 'succeeded') {
          check(artifactId, 'ARTIFACT_REQUIRED', 'Success needs an immutable artifact')
          if (payload.evidence.outputSha256 !== undefined) check(payload.evidence.outputSha256 === row('wf_artifacts', artifactId).content_hash, 'EVIDENCE_MISMATCH', 'Output evidence does not match the immutable artifact')
        }
        const quiescedAt = attempt.quiesced_at ?? (quiet ? Date.now() : null)
        update('wf_attempts', attempt.id, { state: payload.outcome, quiesced_at: quiescedAt,
          message_id: attempt.message_id ?? payload.evidence?.messageId ?? null,
          turn_number: attempt.turn_number ?? payload.evidence?.turnNumber ?? null,
          settled_at: SETTLED.has(payload.outcome) ? Date.now() : null,
          result_json: artifactId ? json({ artifactIds: [artifactId] }) : null,
          error_json: payload.error === undefined ? null : json(payload.error),
          reconciliation_json: payload.evidence === undefined ? attempt.reconciliation_json : json(payload.evidence) })
        if (quiescedAt !== null) run('DELETE FROM wf_execution_slots WHERE attempt_id=?', attempt.id)
        const visit = row('wf_stage_visits', attempt.visit_id)
        let changes
        if (task.state === 'terminating') {
          if (quiescedAt !== null) {
            update('wf_stage_visits', visit.id, { outcome: 'terminated', closed_at: Date.now() })
            changes = { state: 'terminated', finished_at: Date.now(), attention_json: null }
          } else changes = { state: 'terminating' }
        } else if (payload.outcome === 'succeeded') {
          update('wf_stage_visits', visit.id, { outcome: 'succeeded', accepted_attempt_id: attempt.id, closed_at: Date.now() })
          changes = advance(task, visit)
        } else changes = { state: 'needs_attention', attention_json: json({ reason: payload.outcome, attemptId: attempt.id,
          ...(payload.error?.code ? { code: payload.error.code } : {}), ...(payload.error?.message ? { message: payload.error.message } : {}) }) }
        record(task.id, `attempt.${payload.outcome}`, { attemptId: attempt.id, quiescent: quiescedAt !== null,
          evidence: payload.evidence ?? null }, SYSTEM, changes)
        return getTask(task.id)
      })
    },
    // Trusted Host-only proof: the caller must verify OS process births/stops.
    // Evidence is intentionally outside the command fingerprint; replay never
    // rechecks an already committed recovery against new observations.
    reconcileTask(payload, actor, evidence) {
      exactKeys(payload, ['requestId', 'taskId', 'expectedRevision', 'confirmedStopped'], 'reconcileTask')
      return command('reconcileTask', payload, actor, who => {
        check(who.kind === 'user', 'HUMAN_REQUIRED', 'Only a real user may request execution reconciliation')
        const task = row('wf_tasks', payload.taskId)
        revision(task, payload.expectedRevision)
        check(['running', 'needs_attention', 'terminating'].includes(task.state), 'RECONCILIATION_UNAVAILABLE', 'Only unfinished executions can be reconciled')
        const attempts = all("SELECT * FROM wf_attempts WHERE task_id=? AND state IN ('prepared','running','unknown')", task.id)
        check(attempts.length === 1 && attempts[0].visit_id === task.current_visit_id,
          'RECONCILIATION_UNAVAILABLE', 'Recovery requires exactly one unfinished attempt in the current stage')
        const attempt = attempts[0], snapshot = JSON.parse(attempt.executor_snapshot_json)
        check(attempt.state === 'unknown' || snapshot.policy === NATIVE_POLICY && snapshot.stopPolicy === undefined,
          'RECONCILIATION_UNAVAILABLE', 'Live-owner recovery requires native Session ownership evidence')
        object(evidence, 'reconciliation evidence')
        check(evidence.attemptId === attempt.id
          && evidence.sessionId === attempt.session_id && evidence.requestId === attempt.prompt_request_id,
        'EVIDENCE_MISMATCH', 'Recovery evidence must match this exact attempt, session and request')
        if (snapshot.policy === NATIVE_POLICY && snapshot.stopPolicy === undefined) {
          check(evidence.kind === 'dsh-native-stop' && ['live-idle', 'exclusive-session', 'session-absent'].includes(evidence.ownership)
            && (attempt.message_id === null || evidence.messageId === attempt.message_id)
            && (attempt.turn_number === null || evidence.turnNumber === attempt.turn_number)
            && (evidence.ownership !== 'session-absent' || attempt.message_id === null && attempt.turn_number === null && evidence.logLastSeq === -1)
            && Number.isSafeInteger(evidence.logLastSeq) && evidence.logLastSeq >= -1,
          'EVIDENCE_MISMATCH', 'Native recovery requires correlated Session ownership evidence')
          check(evidence.quiescent === true && evidence.ownedJobCount === 0, 'STOP_UNCONFIRMED', 'Native execution must be idle with no running jobs')
          check(attempt.state !== 'unknown' || evidence.ownership !== 'exclusive-session' || evidence.operatorConfirmedStopped === true,
            'RECOVERY_CONFIRM_REQUIRED', 'A cold interrupted execution requires human confirmation that prior operations have stopped')
        } else {
          check(snapshot.stopPolicy === PROCESS_STOP_POLICY, 'RECOVERY_UNSUPPORTED', 'This attempt has no supported stop evidence')
          const host = processIdentity(snapshot.hostProcess), processes = getAttemptProcesses(attempt.id)
          check(evidence.kind === 'workflow-process-journal' && json(processIdentity(evidence.hostProcess)) === json(host) && Array.isArray(evidence.processes)
            && json(evidence.processes.map(processIdentity)) === json(processes),
          'EVIDENCE_MISMATCH', 'Recovery evidence must cover the exact Host birth and complete process journal')
          check(evidence.quiescent === true && evidence.ownedJobCount === 0
            && evidence.hostStopped === true && evidence.processesStopped === true,
          'STOP_UNCONFIRMED', 'The previous Host and all registered processes must be confirmed stopped')
        }
        const now = Date.now(), outcome = task.state === 'terminating' ? 'cancelled' : 'failed'
        update('wf_attempts', attempt.id, { state: outcome, quiesced_at: attempt.quiesced_at ?? now, settled_at: now,
          error_json: attempt.error_json ?? json({ code: 'WF_EXECUTION_INTERRUPTED', message: 'Execution stopped without a verified result' }),
          reconciliation_json: json(evidence) })
        run('DELETE FROM wf_execution_slots WHERE attempt_id=?', attempt.id)
        let changes
        if (task.state === 'terminating') {
          update('wf_stage_visits', task.current_visit_id, { outcome: 'terminated', closed_at: now })
          changes = { state: 'terminated', finished_at: now, attention_json: null }
        } else changes = { state: 'needs_attention', attention_json: json({ reason: 'execution_reconciled', attemptId: attempt.id,
          message: '旧执行已结束，未自动重新执行。请核对已发生的操作，再决定是否重试当前阶段；上游成果已保留。' }) }
        record(task.id, 'attempt.reconciled', { attemptId: attempt.id, outcome, evidence,
          previousEvidence: attempt.reconciliation_json && JSON.parse(attempt.reconciliation_json) }, who, changes, payload.requestId)
        return getTask(task.id)
      })
    },
    retryTask(payload, actor) {
      exactKeys(payload, ['requestId', 'taskId', 'expectedRevision'], 'retryTask')
      return command('retryTask', payload, actor, who => {
        const task = row('wf_tasks', payload.taskId)
        revision(task, payload.expectedRevision)
        const blocked = retryBlock(task)
        if (blocked) fail(...blocked)
        record(task.id, 'task.retry_requested', { visitId: task.current_visit_id }, who,
          { state: 'queued', queued_at: Date.now(), attention_json: null }, payload.requestId)
        return getTask(task.id)
      })
    },
    // Only the outer trusted review boundary may call this. actor is an audit
    // assertion supplied by that boundary, NOT evidence of a human click.
    decideReview(payload, actor) {
      exactKeys(payload, ['taskId', 'reviewId', 'subjectHash', 'expectedRevision', 'requestId', 'decision', 'feedback'], 'decideReview')
      return command('decideReview', payload, actor, who => {
        const task = row('wf_tasks', payload.taskId)
        revision(task, payload.expectedRevision)
        check(task.state === 'waiting_review', 'NOT_WAITING_REVIEW', 'Task is not awaiting this review')
        const review = row('wf_reviews', payload.reviewId)
        check(review.task_id === task.id && review.visit_id === task.current_visit_id && review.state === 'pending', 'REVIEW_STALE', 'Review is stale or belongs to another task')
        check(review.subject_hash === payload.subjectHash, 'SUBJECT_CHANGED', 'Review subject does not match')
        check(['approved', 'returned', 'terminated'].includes(payload.decision), 'INVALID_DECISION', 'Unsupported review decision')
        if (payload.feedback !== undefined) check(typeof payload.feedback === 'string' && payload.feedback.length <= 10000,
          'INVALID_INPUT', 'feedback must be text of at most 10000 characters')
        if (payload.decision === 'returned') text(payload.feedback, 'feedback', 10000)
        const subject = JSON.parse(review.subject_json)
        check(json(subject.artifactIds) === json(currentArtifactIds(task.id)), 'SUBJECT_CHANGED', 'Current valid outputs no longer match review')
        const visit = row('wf_stage_visits', review.visit_id)
        update('wf_reviews', review.id, { state: payload.decision, feedback: payload.feedback ?? null,
          decided_by_json: json(who), decision_request_id: payload.requestId, decided_at: Date.now() })
        update('wf_stage_visits', visit.id, { outcome: payload.decision === 'approved' ? 'succeeded' : payload.decision, closed_at: Date.now() })
        let changes
        if (payload.decision === 'returned') {
          const stages = versionOf(task).stages
          const index = stages.findIndex(stage => stage.id === review.return_stage_id)
          check(index >= 0 && stages[index].kind === 'agent', 'INVALID_DEFINITION', 'Fixed rework target is invalid')
          for (const stage of stages.slice(index)) run('UPDATE wf_stage_visits SET superseded_by_review_id=? WHERE task_id=? AND stage_id=? AND superseded_by_review_id IS NULL', review.id, task.id, stage.id)
          const newVisit = makeVisit(task.id, review.return_stage_id, review.id)
          changes = { state: 'queued', current_visit_id: newVisit, queued_at: Date.now(), attention_json: null }
        } else if (payload.decision === 'terminated') changes = { state: 'terminated', finished_at: Date.now(), attention_json: null }
        else changes = advance(task, visit)
        record(task.id, `review.${payload.decision}`, { reviewId: review.id }, who, changes, payload.requestId)
        return getTask(task.id)
      })
    },
    deleteTask(payload, actor) {
      exactKeys(payload, ['taskId', 'expectedRevision', 'requestId'], 'deleteTask')
      return command('deleteTask', payload, actor, who => {
        check(who.kind === 'user', 'HUMAN_REQUIRED', '请在任务列表中确认删除。')
        const task = row('wf_tasks', payload.taskId)
        check(!deletedTask(task.id), 'TASK_DELETED', '任务已删除。')
        revision(task, payload.expectedRevision)
        check(!get("SELECT id FROM wf_attempts WHERE task_id=? AND (quiesced_at IS NULL OR state IN ('prepared','running')) LIMIT 1", task.id)
          && !get('SELECT s.attempt_id FROM wf_execution_slots s JOIN wf_attempts a ON a.id=s.attempt_id WHERE a.task_id=? LIMIT 1', task.id),
          'STOP_UNCONFIRMED', '任务仍在执行或尚未确认停止，请先终止任务后再删除。')
        if (!TERMINAL.has(task.state)) terminateStoppedTask(task, who, payload.requestId)
        return { taskId: task.id, workflowId: task.workflow_id, deleted: true }
      })
    },
    listPendingTaskDeletions() {
      return all(`SELECT t.id,w.root_path_snapshot AS rootPath FROM wf_tasks t
        JOIN wf_workflows w ON w.id=t.workflow_id
        WHERE EXISTS (SELECT 1 FROM wf_command_receipts r WHERE r.operation='deleteTask'
          AND r.namespace='workflow-poc' AND json_extract(r.response_json,'$.taskId')=t.id)
        AND NOT EXISTS (SELECT 1 FROM wf_task_events e WHERE e.task_id=t.id AND e.kind='task.files_deleted')`)
    },
    finishTaskDeletion(taskId) {
      return transaction(() => {
        check(deletedTask(taskId), 'TASK_NOT_DELETED', 'Commit Task deletion before cleaning its directory')
        if (!get("SELECT 1 FROM wf_task_events WHERE task_id=? AND kind='task.files_deleted'", taskId)) {
          record(taskId, 'task.files_deleted', {})
        }
      })
    },
    terminateTask(payload, actor) {
      exactKeys(payload, ['taskId', 'expectedRevision', 'requestId', 'confirmedStopped'], 'terminateTask')
      return command('terminateTask', payload, actor, who => {
        const task = row('wf_tasks', payload.taskId)
        revision(task, payload.expectedRevision)
        check(!TERMINAL.has(task.state), 'TASK_TERMINAL', 'Task is already terminal')
        if (task.state === 'terminating') return getTask(task.id)
        const attempt = get("SELECT * FROM wf_attempts WHERE task_id=? AND state IN ('prepared','running','unknown')", task.id)
        if (!attempt || attempt.quiesced_at !== null) return terminateStoppedTask(task, who, payload.requestId, attempt?.id)
        update('wf_attempts', attempt.id, { cancel_requested_at: Date.now(), cancel_reason: 'task.terminate' })
        record(task.id, 'task.cancel_requested', { attemptId: attempt.id }, who, { state: 'terminating', attention_json: null }, payload.requestId)
        return getTask(task.id)
      })
    },
    flagTaskAttention(taskId, code, message) {
      text(code, 'attention code', 200); text(message, 'attention message', 10000)
      return transaction(() => {
        const task = row('wf_tasks', taskId)
        check(task.state === 'queued'
          && !get("SELECT id FROM wf_attempts WHERE task_id=? AND state IN ('prepared','running','unknown')", taskId)
          && !get('SELECT s.attempt_id FROM wf_execution_slots s JOIN wf_attempts a ON a.id=s.attempt_id WHERE a.task_id=?', taskId),
        'TASK_NOT_QUEUED', 'Only a queued task without an unsettled attempt or owned slot may be flagged')
        record(taskId, 'task.needs_attention', { code, message }, SYSTEM,
          { state: 'needs_attention', attention_json: json({ code, message }) })
        return getTask(taskId)
      })
    },
    recoverInterrupted(ownerInstanceId) {
      text(ownerInstanceId, 'ownerInstanceId', 200)
      return transaction(() => {
        const recovered = []
        for (const attempt of all("SELECT * FROM wf_attempts WHERE state IN ('prepared','running')")) {
          if (JSON.parse(attempt.executor_snapshot_json)._workflowOwner.ownerInstanceId === ownerInstanceId) continue
          const task = row('wf_tasks', attempt.task_id)
          if (TERMINAL.has(task.state) || ['queued', 'waiting_review'].includes(task.state)) continue
          update('wf_attempts', attempt.id, { state: 'unknown', reconciliation_json: json({ reason: 'owner_interrupted', observedBy: ownerInstanceId }) })
          record(task.id, 'attempt.interrupted', { attemptId: attempt.id }, SYSTEM, task.state === 'terminating'
            ? { state: 'terminating' }
            : { state: 'needs_attention', attention_json: json({ reason: 'owner_interrupted', attemptId: attempt.id }) })
          recovered.push(getTask(task.id))
        }
        return recovered
      })
    },
    close() { if (!closed) { db.close(); closed = true } },
  }
}
