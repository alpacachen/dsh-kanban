-- Workflow schema v1: canonical bootstrap used by workflow/store.js.
-- Independent of Kanban. Verified with in-memory and persistent SQLite tests.
-- This is not an upgrade migration; domain transitions require the store command protocol.
PRAGMA foreign_keys = ON;

CREATE TABLE wf_workflows (
  id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL,
  root_path_snapshot TEXT NOT NULL,
  execution_scope TEXT NOT NULL,
  name TEXT NOT NULL CHECK(length(trim(name)) > 0),
  accepting_tasks INTEGER NOT NULL DEFAULT 0 CHECK(accepting_tasks IN (0, 1)),
  draft_json TEXT NOT NULL CHECK(json_valid(draft_json) AND json_type(draft_json) = 'object'),
  draft_revision INTEGER NOT NULL CHECK(draft_revision >= 1),
  published_version_id TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  CHECK(accepting_tasks = 0 OR published_version_id IS NOT NULL),
  FOREIGN KEY(published_version_id, id) REFERENCES wf_versions(id, workflow_id)
    DEFERRABLE INITIALLY DEFERRED
) STRICT;

CREATE TABLE wf_versions (
  id TEXT PRIMARY KEY NOT NULL,
  workflow_id TEXT NOT NULL REFERENCES wf_workflows(id),
  version_number INTEGER NOT NULL CHECK(version_number >= 1),
  definition_json TEXT NOT NULL CHECK(json_valid(definition_json) AND json_type(definition_json) = 'object'),
  definition_hash TEXT NOT NULL CHECK(length(definition_hash) = 64 AND definition_hash NOT GLOB '*[^0-9a-f]*'),
  published_by_json TEXT NOT NULL CHECK(json_valid(published_by_json)),
  published_at INTEGER NOT NULL,
  UNIQUE(workflow_id, version_number),
  UNIQUE(id, workflow_id)
) STRICT;

CREATE TABLE wf_tasks (
  id TEXT PRIMARY KEY NOT NULL,
  workflow_id TEXT NOT NULL,
  workflow_version_id TEXT NOT NULL,
  title TEXT NOT NULL CHECK(length(trim(title)) > 0),
  input_json TEXT NOT NULL CHECK(json_valid(input_json) AND json_type(input_json) = 'object'),
  execution_config_json TEXT NOT NULL CHECK(json_valid(execution_config_json) AND json_type(execution_config_json) = 'object'),
  supplements_json TEXT NOT NULL DEFAULT '[]' CHECK(json_valid(supplements_json) AND json_type(supplements_json) = 'array'),
  state TEXT NOT NULL CHECK(state IN ('queued', 'running', 'waiting_review', 'needs_attention', 'pausing', 'paused', 'terminating', 'completed', 'terminated')),
  current_visit_id TEXT NOT NULL,
  revision INTEGER NOT NULL CHECK(revision >= 1),
  attention_json TEXT CHECK(attention_json IS NULL OR json_valid(attention_json)),
  source_task_id TEXT REFERENCES wf_tasks(id),
  queued_at INTEGER,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  finished_at INTEGER,
  CHECK((state IN ('completed', 'terminated')) = (finished_at IS NOT NULL)),
  CHECK(state <> 'queued' OR queued_at IS NOT NULL),
  CHECK(state <> 'needs_attention' OR attention_json IS NOT NULL),
  FOREIGN KEY(workflow_version_id, workflow_id) REFERENCES wf_versions(id, workflow_id),
  FOREIGN KEY(current_visit_id, id) REFERENCES wf_stage_visits(id, task_id)
    DEFERRABLE INITIALLY DEFERRED
) STRICT;
CREATE INDEX wf_tasks_queue ON wf_tasks(state, queued_at, id);
CREATE INDEX wf_tasks_by_workflow ON wf_tasks(workflow_id, created_at);

CREATE TABLE wf_stage_visits (
  id TEXT PRIMARY KEY NOT NULL,
  task_id TEXT NOT NULL REFERENCES wf_tasks(id),
  stage_id TEXT NOT NULL,
  ordinal INTEGER NOT NULL CHECK(ordinal >= 1),
  entered_by TEXT NOT NULL CHECK(entered_by IN ('start', 'advance', 'rework')),
  caused_by_review_id TEXT,
  outcome TEXT NOT NULL CHECK(outcome IN ('open', 'succeeded', 'returned', 'terminated')),
  accepted_attempt_id TEXT,
  superseded_by_review_id TEXT,
  opened_at INTEGER NOT NULL,
  closed_at INTEGER,
  CHECK((outcome <> 'open') = (closed_at IS NOT NULL)),
  CHECK(outcome = 'succeeded' OR accepted_attempt_id IS NULL),
  CHECK((entered_by = 'rework') = (caused_by_review_id IS NOT NULL)),
  UNIQUE(task_id, ordinal),
  UNIQUE(id, task_id),
  FOREIGN KEY(accepted_attempt_id, id) REFERENCES wf_attempts(id, visit_id)
    DEFERRABLE INITIALLY DEFERRED,
  FOREIGN KEY(caused_by_review_id, task_id) REFERENCES wf_reviews(id, task_id)
    DEFERRABLE INITIALLY DEFERRED,
  FOREIGN KEY(superseded_by_review_id, task_id) REFERENCES wf_reviews(id, task_id)
    DEFERRABLE INITIALLY DEFERRED
) STRICT;
CREATE UNIQUE INDEX wf_one_current_visit_per_stage ON wf_stage_visits(task_id, stage_id)
  WHERE superseded_by_review_id IS NULL;
CREATE UNIQUE INDEX wf_one_open_visit_per_task ON wf_stage_visits(task_id)
  WHERE outcome = 'open';

CREATE TABLE wf_attempts (
  id TEXT PRIMARY KEY NOT NULL,
  task_id TEXT NOT NULL,
  visit_id TEXT NOT NULL,
  attempt_number INTEGER NOT NULL CHECK(attempt_number >= 1),
  state TEXT NOT NULL CHECK(state IN ('prepared', 'running', 'unknown', 'succeeded', 'failed', 'cancelled')),
  input_bundle_json TEXT NOT NULL CHECK(json_valid(input_bundle_json) AND json_type(input_bundle_json) = 'object'),
  executor_snapshot_json TEXT NOT NULL CHECK(json_valid(executor_snapshot_json) AND json_type(executor_snapshot_json) = 'object'),
  prompt_request_id TEXT NOT NULL UNIQUE,
  prompt_payload_json TEXT NOT NULL CHECK(json_valid(prompt_payload_json) AND json_type(prompt_payload_json) = 'object'),
  prompt_payload_hash TEXT NOT NULL CHECK(length(prompt_payload_hash) = 64 AND prompt_payload_hash NOT GLOB '*[^0-9a-f]*'),
  session_id TEXT UNIQUE,
  message_id TEXT,
  turn_number INTEGER CHECK(turn_number IS NULL OR turn_number >= 0),
  last_observed_seq INTEGER CHECK(last_observed_seq IS NULL OR last_observed_seq >= 0),
  accepted_at INTEGER,
  claimed_at INTEGER,
  host_end_json TEXT CHECK(host_end_json IS NULL OR json_valid(host_end_json)),
  result_json TEXT CHECK(result_json IS NULL OR (json_valid(result_json) AND json_type(result_json) = 'object')),
  error_json TEXT CHECK(error_json IS NULL OR json_valid(error_json)),
  reconciliation_json TEXT CHECK(reconciliation_json IS NULL OR json_valid(reconciliation_json)),
  cancel_requested_at INTEGER,
  cancel_reason TEXT,
  quiesced_at INTEGER,
  created_at INTEGER NOT NULL,
  settled_at INTEGER,
  CHECK((state IN ('succeeded', 'failed', 'cancelled')) = (settled_at IS NOT NULL)),
  CHECK(state NOT IN ('succeeded', 'failed', 'cancelled') OR quiesced_at IS NOT NULL),
  CHECK(state <> 'succeeded' OR (result_json IS NOT NULL AND COALESCE(json_type(result_json, '$.artifactIds') = 'array', 0))),
  CHECK(quiesced_at IS NULL OR state NOT IN ('prepared', 'running')),
  CHECK(turn_number IS NULL OR session_id IS NOT NULL),
  UNIQUE(visit_id, attempt_number),
  UNIQUE(id, visit_id),
  UNIQUE(id, task_id),
  FOREIGN KEY(visit_id, task_id) REFERENCES wf_stage_visits(id, task_id)
) STRICT;
CREATE UNIQUE INDEX wf_one_unsettled_attempt_per_task ON wf_attempts(task_id)
  WHERE state IN ('prepared', 'running', 'unknown');

CREATE TABLE wf_artifacts (
  id TEXT PRIMARY KEY NOT NULL,
  task_id TEXT NOT NULL,
  attempt_id TEXT NOT NULL,
  output_key TEXT NOT NULL CHECK(length(trim(output_key)) > 0),
  label TEXT NOT NULL,
  media_type TEXT NOT NULL,
  content_hash TEXT NOT NULL CHECK(length(content_hash) = 64 AND content_hash NOT GLOB '*[^0-9a-f]*'),
  byte_length INTEGER NOT NULL CHECK(byte_length >= 0),
  snapshot_ref TEXT NOT NULL CHECK(length(snapshot_ref) > 0),
  created_at INTEGER NOT NULL,
  UNIQUE(attempt_id, output_key),
  FOREIGN KEY(attempt_id, task_id) REFERENCES wf_attempts(id, task_id)
) STRICT;

CREATE TABLE wf_reviews (
  id TEXT PRIMARY KEY NOT NULL,
  task_id TEXT NOT NULL,
  visit_id TEXT NOT NULL UNIQUE,
  subject_json TEXT NOT NULL CHECK(json_valid(subject_json) AND json_type(subject_json) = 'object'),
  subject_hash TEXT NOT NULL CHECK(length(subject_hash) = 64 AND subject_hash NOT GLOB '*[^0-9a-f]*'),
  return_stage_id TEXT NOT NULL,
  state TEXT NOT NULL CHECK(state IN ('pending', 'approved', 'returned', 'terminated')),
  feedback TEXT,
  decided_by_json TEXT CHECK(decided_by_json IS NULL OR json_valid(decided_by_json)),
  decision_request_id TEXT,
  requested_at INTEGER NOT NULL,
  decided_at INTEGER,
  CHECK((state = 'pending') = (decided_at IS NULL)),
  CHECK(state = 'pending' OR (decided_by_json IS NOT NULL AND decision_request_id IS NOT NULL)),
  CHECK(state <> 'returned' OR (feedback IS NOT NULL AND length(trim(feedback)) > 0)),
  UNIQUE(id, task_id),
  FOREIGN KEY(visit_id, task_id) REFERENCES wf_stage_visits(id, task_id)
) STRICT;

-- A prepared Attempt is the durable dispatch intent: no generic outbox is added.
-- This slot is NOT a time-expiring lease. Heartbeat absence is not stop evidence.
CREATE TABLE wf_execution_slots (
  execution_scope TEXT PRIMARY KEY NOT NULL,
  attempt_id TEXT NOT NULL UNIQUE REFERENCES wf_attempts(id),
  owner_instance_id TEXT NOT NULL,
  owner_token TEXT NOT NULL,
  acquired_at INTEGER NOT NULL,
  last_observed_at INTEGER NOT NULL
) STRICT;

CREATE TABLE wf_command_receipts (
  namespace TEXT NOT NULL,
  request_id TEXT NOT NULL,
  operation TEXT NOT NULL,
  payload_hash TEXT NOT NULL CHECK(length(payload_hash) = 64 AND payload_hash NOT GLOB '*[^0-9a-f]*'),
  actor_json TEXT NOT NULL CHECK(json_valid(actor_json)),
  response_json TEXT NOT NULL CHECK(json_valid(response_json)),
  committed_at INTEGER NOT NULL,
  PRIMARY KEY(namespace, request_id)
) STRICT;

CREATE TABLE wf_task_events (
  id TEXT PRIMARY KEY NOT NULL,
  task_id TEXT NOT NULL REFERENCES wf_tasks(id),
  sequence INTEGER NOT NULL CHECK(sequence >= 1),
  task_revision INTEGER NOT NULL CHECK(task_revision >= 1),
  kind TEXT NOT NULL,
  actor_json TEXT NOT NULL CHECK(json_valid(actor_json)),
  data_json TEXT NOT NULL CHECK(json_valid(data_json)),
  request_id TEXT,
  created_at INTEGER NOT NULL,
  UNIQUE(task_id, sequence)
) STRICT;

-- Minimum structural guards. See the document for command-level invariants.
CREATE TRIGGER wf_workflow_binding_immutable BEFORE UPDATE OF id, workspace_id, root_path_snapshot, execution_scope ON wf_workflows
BEGIN SELECT RAISE(ABORT, 'workflow identity and workspace binding are immutable'); END;
CREATE TRIGGER wf_version_no_update BEFORE UPDATE ON wf_versions
BEGIN SELECT RAISE(ABORT, 'published version is immutable'); END;
CREATE TRIGGER wf_version_no_delete BEFORE DELETE ON wf_versions
BEGIN SELECT RAISE(ABORT, 'published history is retained'); END;
CREATE TRIGGER wf_task_binding_immutable BEFORE UPDATE OF id, workflow_id, workflow_version_id, input_json, execution_config_json, source_task_id ON wf_tasks
BEGIN SELECT RAISE(ABORT, 'task execution snapshot is immutable'); END;
CREATE TRIGGER wf_task_terminal BEFORE UPDATE ON wf_tasks
WHEN OLD.state IN ('completed', 'terminated')
BEGIN SELECT RAISE(ABORT, 'terminal task cannot be reopened'); END;

CREATE TRIGGER wf_visit_valid_stage BEFORE INSERT ON wf_stage_visits
WHEN NOT EXISTS (
 SELECT 1 FROM wf_tasks t JOIN wf_versions v ON v.id = t.workflow_version_id,
 json_each(v.definition_json, '$.stages') s
 WHERE t.id = NEW.task_id AND json_extract(s.value, '$.id') = NEW.stage_id
)
BEGIN SELECT RAISE(ABORT, 'stage must belong to the task version'); END;
CREATE TRIGGER wf_visit_identity_immutable BEFORE UPDATE OF id, task_id, stage_id, ordinal, entered_by, caused_by_review_id, opened_at ON wf_stage_visits
BEGIN SELECT RAISE(ABORT, 'stage visit identity is immutable'); END;
CREATE TRIGGER wf_visit_superseded_once BEFORE UPDATE OF superseded_by_review_id ON wf_stage_visits
WHEN OLD.superseded_by_review_id IS NOT NULL
BEGIN SELECT RAISE(ABORT, 'do not rewrite the previous rework cause'); END;
CREATE TRIGGER wf_visit_close_once BEFORE UPDATE OF outcome, accepted_attempt_id, closed_at ON wf_stage_visits
WHEN OLD.outcome <> 'open'
BEGIN SELECT RAISE(ABORT, 'settled visit outcome is immutable'); END;
CREATE TRIGGER wf_visit_accept_success BEFORE UPDATE OF accepted_attempt_id ON wf_stage_visits
WHEN NEW.accepted_attempt_id IS NOT NULL AND NOT EXISTS (
 SELECT 1 FROM wf_attempts a WHERE a.id = NEW.accepted_attempt_id AND a.visit_id = NEW.id AND a.state = 'succeeded'
)
BEGIN SELECT RAISE(ABORT, 'only a successful attempt of this visit can be accepted'); END;

CREATE TRIGGER wf_attempt_agent_only BEFORE INSERT ON wf_attempts
WHEN NOT EXISTS (
 SELECT 1 FROM wf_stage_visits sv JOIN wf_tasks t ON t.id = sv.task_id JOIN wf_versions v ON v.id = t.workflow_version_id,
 json_each(v.definition_json, '$.stages') s
 WHERE sv.id = NEW.visit_id AND sv.task_id = NEW.task_id AND sv.outcome = 'open'
 AND sv.superseded_by_review_id IS NULL AND json_extract(s.value, '$.id') = sv.stage_id AND json_extract(s.value, '$.kind') = 'agent'
)
BEGIN SELECT RAISE(ABORT, 'attempt requires an open current agent visit'); END;
CREATE TRIGGER wf_attempt_identity_immutable BEFORE UPDATE OF id, task_id, visit_id, attempt_number, input_bundle_json, executor_snapshot_json, prompt_request_id, prompt_payload_json, prompt_payload_hash ON wf_attempts
BEGIN SELECT RAISE(ABORT, 'attempt identity and input are immutable'); END;
CREATE TRIGGER wf_attempt_session_once BEFORE UPDATE OF session_id ON wf_attempts
WHEN OLD.session_id IS NOT NULL AND NEW.session_id IS NOT OLD.session_id
BEGIN SELECT RAISE(ABORT, 'attempt cannot switch sessions after binding'); END;
CREATE TRIGGER wf_attempt_quiescence_monotonic BEFORE UPDATE OF quiesced_at ON wf_attempts
WHEN OLD.quiesced_at IS NOT NULL AND NEW.quiesced_at IS NOT OLD.quiesced_at
BEGIN SELECT RAISE(ABORT, 'quiescence evidence cannot be withdrawn'); END;
CREATE TRIGGER wf_attempt_settle_once BEFORE UPDATE ON wf_attempts
WHEN OLD.state IN ('succeeded', 'failed', 'cancelled')
BEGIN SELECT RAISE(ABORT, 'known terminal attempt is immutable; append late evidence to task events'); END;
CREATE TRIGGER wf_artifact_before_settlement BEFORE INSERT ON wf_artifacts
WHEN (SELECT state FROM wf_attempts WHERE id = NEW.attempt_id) IN ('succeeded', 'failed', 'cancelled')
BEGIN SELECT RAISE(ABORT, 'final output set is frozen after attempt settlement'); END;
CREATE TRIGGER wf_artifact_no_update BEFORE UPDATE ON wf_artifacts
BEGIN SELECT RAISE(ABORT, 'artifact snapshot is immutable'); END;
CREATE TRIGGER wf_artifact_no_delete BEFORE DELETE ON wf_artifacts
BEGIN SELECT RAISE(ABORT, 'artifact history is retained'); END;
CREATE TRIGGER wf_review_stage_only BEFORE INSERT ON wf_reviews
WHEN NOT EXISTS (
 SELECT 1 FROM wf_stage_visits sv JOIN wf_tasks t ON t.id = sv.task_id JOIN wf_versions v ON v.id = t.workflow_version_id,
 json_each(v.definition_json, '$.stages') s
 WHERE sv.id = NEW.visit_id AND sv.task_id = NEW.task_id AND sv.outcome = 'open'
 AND sv.superseded_by_review_id IS NULL AND json_extract(s.value, '$.id') = sv.stage_id AND json_extract(s.value, '$.kind') = 'review'
)
BEGIN SELECT RAISE(ABORT, 'review requires an open review visit'); END;
CREATE TRIGGER wf_review_subject_immutable BEFORE UPDATE OF id, task_id, visit_id, subject_json, subject_hash, return_stage_id, requested_at ON wf_reviews
BEGIN SELECT RAISE(ABORT, 'review target is immutable'); END;
CREATE TRIGGER wf_review_decide_once BEFORE UPDATE ON wf_reviews
WHEN OLD.state <> 'pending'
BEGIN SELECT RAISE(ABORT, 'review already decided'); END;

CREATE TRIGGER wf_slot_scope BEFORE INSERT ON wf_execution_slots
WHEN NOT EXISTS (
 SELECT 1 FROM wf_attempts a JOIN wf_tasks t ON t.id = a.task_id JOIN wf_workflows w ON w.id = t.workflow_id
 WHERE a.id = NEW.attempt_id AND w.execution_scope = NEW.execution_scope
 AND a.state IN ('prepared', 'running', 'unknown') AND a.quiesced_at IS NULL
)
BEGIN SELECT RAISE(ABORT, 'slot must match an unquiesced attempt in this execution scope'); END;
CREATE TRIGGER wf_slot_no_rebind BEFORE UPDATE OF execution_scope, attempt_id ON wf_execution_slots
BEGIN SELECT RAISE(ABORT, 'release the old slot before acquiring a different attempt'); END;
CREATE TRIGGER wf_slot_release_proof BEFORE DELETE ON wf_execution_slots
WHEN (SELECT quiesced_at FROM wf_attempts WHERE id = OLD.attempt_id) IS NULL
BEGIN SELECT RAISE(ABORT, 'cannot release slot without quiescence evidence'); END;
CREATE TRIGGER wf_receipt_no_update BEFORE UPDATE ON wf_command_receipts
BEGIN SELECT RAISE(ABORT, 'command receipt is immutable'); END;
CREATE TRIGGER wf_receipt_no_delete BEFORE DELETE ON wf_command_receipts
BEGIN SELECT RAISE(ABORT, 'idempotency receipt is retained'); END;
CREATE TRIGGER wf_event_no_update BEFORE UPDATE ON wf_task_events
BEGIN SELECT RAISE(ABORT, 'audit events are append only'); END;
CREATE TRIGGER wf_event_no_delete BEFORE DELETE ON wf_task_events
BEGIN SELECT RAISE(ABORT, 'audit events are append only'); END;
CREATE TRIGGER wf_workflow_no_delete BEFORE DELETE ON wf_workflows
BEGIN SELECT RAISE(ABORT, 'disable a workflow; do not delete its history'); END;
CREATE TRIGGER wf_task_no_delete BEFORE DELETE ON wf_tasks
BEGIN SELECT RAISE(ABORT, 'task history is retained'); END;
CREATE TRIGGER wf_visit_no_delete BEFORE DELETE ON wf_stage_visits
BEGIN SELECT RAISE(ABORT, 'visit history is retained'); END;
CREATE TRIGGER wf_attempt_no_delete BEFORE DELETE ON wf_attempts
BEGIN SELECT RAISE(ABORT, 'attempt history is retained'); END;
CREATE TRIGGER wf_review_no_delete BEFORE DELETE ON wf_reviews
BEGIN SELECT RAISE(ABORT, 'review history is retained'); END;
