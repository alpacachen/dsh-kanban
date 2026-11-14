# Workflow guide

[中文](workflow-guide.md) · [Back to README](../README.md)

Open **Kanban · Workflow** in the sidebar. Switch to **Workflow** beside the workspace name. The home table groups tasks under each workflow; collapse a workflow to hide its tasks and inline task composer.

## Create and edit a workflow

Choose **Create workflow in chat** and describe the goal, expected input, AI stages, deliverables and human review points. The Agent saves the definition with `workflow_create`, or reads its current revision with `workflow_list` before using `workflow_update`.

New AI stages inherit the model and reasoning effort used in the authoring conversation. The Agent tools do not accept model parameters. Later, click an AI stage in the workflow detail to edit its instructions and select a model using DSH's ModelSelect. Model selection saves immediately; text changes use Save or ⌘/Ctrl+Enter. Structural changes, including adding, deleting and reordering stages, remain in Agent chat. Human review stages have no model setting.

There is no draft, publish or enable step. Saving makes the workflow available to new tasks. Existing tasks retain their original definition and models. AI edits preserve model choices for unchanged stage IDs; new stages inherit the editing conversation's model.

## Run a task

On the home list, expand a workflow and choose **Create task**. Enter the task input and send, or use ⌘/Ctrl+Enter. The input also serves as the displayed task title; no separate name or task-level model choice is needed.

Each stage runs in the task's own output directory using the default DSH Agent preset, tools and authorization. The Agent also receives the original project's absolute path for reading materials or making requested project changes. Workflow adds no separate network, file or command permissions, model-turn or tool-call counts, stage-time budget, or output-token budget.

Stages in one task run sequentially. Tool concurrency, compaction and model-request retries follow DSH. A failed workflow stage does not automatically run again: inspect the cause, then retry the current stage when appropriate.

## Follow the work

Task detail shows the stage diagram and deliverable files. The current stage stays highlighted; click a node to inspect its instructions, native DSH conversation, available reasoning text, tool calls, replies and saved reports in a centered DSH modal. Inspecting a stage does not rerun it. The modal stays on the selected stage as execution advances; close it or press Escape to return to the diagram. Closing does not cancel the task.

The canvas starts at 100% and centers the current stage. Drag or use a trackpad to pan, scroll or pinch to zoom, and choose **View full workflow** to fit the whole diagram. It does not add scrollbars or reset your view on every task update.

Workflow hides its reserved handoff block and generated orchestration input in the reading view. Old unfenced replies default to the cleaned report, with the original conversation available separately. Raw saved records and integrity hashes are unchanged.

## Review and handle interruptions

A human stage pauses the task until you decide:

- **Approve and continue** accepts the reports bound to this review and advances the task.
- **Return for rework** requires feedback and returns to the configured earlier AI stage. Superseded reports remain in history.
- **Retry stage** reruns a stopped, failed current stage while retaining completed upstream stages.
- **Stop task** opens a small confirmation dialog and asks DSH to stop. It is also available in the running stage's header. “Terminating” means stop confirmation is still pending.

Completed review nodes retain the decision time and exactly the reports bound to that decision. Approval concerns saved stage reports, not an immutable version of the project directory. Returning or stopping does not undo file changes or external side effects. Static deliverables should describe their contents and generation time rather than carry a live “awaiting approval” label.

After DSH exits or the plugin reloads, interrupted execution remains in **Needs attention** and is not silently redispatched. Choose **Reconcile previous execution**, check that old commands and external operations have stopped, and confirm. Commands can survive a forced DSH exit on macOS; an empty job list in a new Host does not prove they stopped. Workflow also checks native session ownership, original input identity and associated jobs. A busy native session or job cannot be released by checking the confirmation box.

After reconciliation, a task already marked for termination becomes terminated; otherwise you decide whether to retry the current stage. Reconciliation sends no new message and does not cancel unrelated later chat. A disconnected page retains its last data, disables execution/review actions and reconnects automatically.

## Stage handoffs

Stages use separate DSH sessions. Each receives its instructions, original task input, valid upstream handoff summaries, a report/file index and human feedback. They do not inherit every previous chat or report in full.

The final reply includes a reserved `workflow-handoff` code fence containing `<workflow-handoff>` JSON with `conclusions` (text and evidence references), `openIssues` and `nextActions`. The summary is generated in the same model execution. Important numbers, dates, IDs, uncertainties and evidence locations should remain explicit; full detail belongs in reports and files.

The scheduler preserves each valid upstream stage's own summary instead of repeatedly rewriting a cumulative summary. The index includes report paths, SHA-256 and file sizes. If a summary is absent or invalid, the next stage is instructed to read the full report; missing summaries alone do not fail a task. Superseded results are excluded from valid upstream context. A file's presence alone does not mean its conclusions are current.

## Files and deletion

Each task owns `<project>/.dsh/workflow-artifacts/<taskId>/`. Its stages, retries and rework share the directory; different tasks use different directories. Files can be previewed in place without switching to a chat. Markdown and code use DSH rendering components; images, audio, video and PDFs use browser capabilities. Other formats can be inspected from the output directory. Preview file sizes follow DSH's file API limits.

Immutable stage replies are saved as DSH attachments and indexed in the Workflow database. Read-only `.workflow-results/<attemptId>.md` copies support on-demand report reading. They are execution history, excluded from the deletable deliverables list; missing or modified copies are repaired from verified attachments.

Deleting a deliverable requires confirmation and verifies that its version has not changed. It does not delete stage or review history. Deleting a stopped task also permanently removes its entire output directory, including stage reply copies; the dialog explains this. Removal is recorded in the database before files are cleaned up, and failed cleanup resumes after restart. Other task directories, project files and symlink targets are not deleted. Immutable DSH report attachments and audit records remain.

Workflow and task deletion are available in their detail views. Active or unconfirmed executions must be stopped first. Historic files outside task directories are not automatically moved or assigned to tasks.

## Improve from history

Choose **Optimize from history** in workflow detail. This opens a new conversation with an analysis prompt; it does not execute a task. The Agent can use:

- `workflow_list` for the latest definition and revision.
- `workflow_list_tasks` for task summaries grouped by immutable workflow version.
- `workflow_get_task` for results, failures and review feedback; `includeOutputText: true` explicitly reads complete reports.
- `workflow_get_stage_trace` for the recorded conversation, tool arguments/results, timing, model steps, token/cache data, retries, compaction and authorization events, with pagination.

Tool durations are wall-clock intervals and can include waiting or authorization. Overlapping calls must not be summed as pure execution time. Missing metrics remain unknown. The main stage trace does not reveal a provider's internal queue or every child Agent's internal conversation. Reading history does not restore or rerun an Agent.

Saving an improvement affects only future tasks. Existing tasks keep their original version, stage IDs, files and records.

## Data and backups

Back up the active Profile's `workflow-poc/workflow.sqlite`, the DSH attachment store, and each project's `.dsh/workflow-artifacts/` directories together. Stop the plugin or use a consistent SQLite backup; do not copy a live database while ignoring its WAL. The legacy `workflow-poc` storage name is retained to preserve existing records.

Kanban data is separate; see its [backup guide](guide.md#data-and-backups). Deleting a task's directory cannot be reversed through Workflow.

## Compatibility and validation

This release targets **DSH 0.2.2-rc.3**. Host changes require a plugin reload; refreshing the frontend alone does not replace loaded backend modules. Models, tools and authorization remain DSH-owned.

Chinese and English interface text and dates follow DSH's language. User-authored names, prompts, feedback and saved outputs remain in their original language. See the [acceptance record](workflow-validation.md) for the checks performed and the macOS crash-recovery boundary; Windows and Linux native acceptance are not claimed.
