import { createHash, randomUUID } from 'node:crypto'
import { createRequire } from 'node:module'
import { realpath } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { projectStageTrace, stageEventWindow } from './stage-trace.js'
import { openWorkflowStore } from './store.js'
import { ensureTaskDirectory, listTaskFiles, taskFilePath, deleteTaskFile } from './task-files.js'
import { createDshExecutor, NATIVE_POLICY, readPersistedSession, withStoppedNativeExecution } from './dsh-adapter.js'
import { createWorkflowRunner, PROJECT_POLICY, readArtifactText } from './runner.js'
import { mountWorkflowReviewApi, validateWorkflowCommand } from './review-api.js'
import { mountWorkflowManagementTools } from './management-tools.js'
import { PROCESS_POLICY, readProcessIdentity, confirmStoppedExecution } from './recovery.js'

export const name = 'dsh-kanban-workflow'
export const inject = ['profileContext', 'agents', 'sessions', 'sessionPersistence',
  'agentPresets', 'agentDefaultModel', 'llm', 'jobs', 'attachments', 'workspaceRegistry', 'connection', 'typertGateway', 'tools', 'workingDirectory']

const MODEL_UNAVAILABLE = '暂时无法确认当前模型配置，请刷新后重试；不会自动切换模型或推理档位。'
const executionModel = selection => selection ? Object.fromEntries(['provider', 'model', 'reasoningEffort']
  .filter(key => typeof selection[key] === 'string').map(key => [key, selection[key]])) : null
const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex')
const fail = (code, message) => { throw Object.assign(new Error(message), { code }) }

export function taskSummary(task) {
  return { id: task.id, workspaceId: task.workspaceId, workflowId: task.workflowId, workflowName: task.workflowName,
    versionNumber: task.versionNumber, workflowVersionId: task.workflowVersionId, title: task.title, inputText: task.input.text, state: task.state, canRetry: task.canRetry === true,
    revision: task.revision, stageTitle: task.currentStage.title, createdAt: task.createdAt, updatedAt: task.updatedAt }
}

export function publicWorkflow(workflow) {
  const { id, workspaceId, name, description, revision, definition, versionId, versionNumber, taskCount, createdAt, updatedAt } = workflow
  return { id, workspaceId, name, description, revision, definition, versionId, versionNumber, taskCount, createdAt, updatedAt }
}

function artifactMetadata(task, artifact) {
  const attempt = task.attempts.find(item => item.id === artifact.attemptId)
  const stageId = task.visits.find(item => item.id === attempt?.visitId)?.stageId ?? ''
  return { id: artifact.id, label: artifact.label, contentHash: artifact.contentHash, byteLength: artifact.byteLength,
    stageId, createdAt: artifact.createdAt, effective: task.effectiveArtifacts.some(item => item.id === artifact.id) }
}

/** Explicit projections: never expose owner fencing tokens, native paths or snapshot references. */
export async function publicTask(task, attachments, { includeOutputText = true, executing = false } = {}) {
  const outputs = await Promise.all(task.effectiveArtifacts.map(async artifact => {
    const metadata = artifactMetadata(task, artifact)
    if (!includeOutputText) return metadata
    try { return { ...metadata, text: await readArtifactText(attachments, artifact), unavailable: false } }
    catch { return { ...metadata, text: '', unavailable: true } }
  }))
  const attention = task.attention ? { ...(task.attention.code === undefined ? {} : { code: task.attention.code }),
    message: task.attention.message ?? (task.canRetry
      ? '本阶段未能完成，原输入和上游成果已保留。修复原因后可重试此阶段。'
      : '上次执行尚未确认停止。为避免重复操作，不能直接重试；请先核对执行记录和项目中的实际改动。') } : null
  return { ...taskSummary(task), input: task.input, attention,
    executionModel: executionModel(task.currentStage?.modelSelection ?? task.executionConfig?.modelSelection),
    stages: task.definition.stages.map(({ id, title, kind, prompt, returnStageId, modelSelection }) => ({ id, title, kind,
      ...(prompt === undefined ? {} : { prompt }), ...(returnStageId === undefined ? {} : { returnStageId }),
      ...(modelSelection ? { modelSelection: executionModel(modelSelection) } : {}) })),
    currentStageId: task.currentStage.id, outputs, feedback: task.feedback,
    canReview: task.state === 'waiting_review' && outputs.length > 0 && outputs.every(item => !item.unavailable),
    canReconcile: !executing && ['running', 'needs_attention', 'terminating'].includes(task.state) && task.attempts.some(attempt =>
      attempt.quiescedAt == null && (attempt.state === 'unknown' && attempt.executorSnapshot.stopPolicy === PROCESS_POLICY
        || ['prepared', 'running', 'unknown'].includes(attempt.state) && attempt.executorSnapshot.policy === NATIVE_POLICY)),
    review: task.review ? { id: task.review.id, subjectHash: task.review.subjectHash,
      returnStageId: task.review.returnStageId, requestedAt: task.review.requestedAt } : null,
    visits: task.visits.map(({ id, stageId, outcome, openedAt, closedAt }) => ({ id, stageId, state: outcome, startedAt: openedAt, finishedAt: closedAt })),
    attempts: task.attempts.map(attempt => ({ id: attempt.id, sessionId: attempt.sessionId,
      stageId: task.visits.find(visit => visit.id === attempt.visitId)?.stageId ?? '', state: attempt.state,
      startedAt: attempt.createdAt, finishedAt: attempt.settledAt, quiescedAt: attempt.quiescedAt,
      error: attempt.error ? `${attempt.error.code ?? 'WF_EXECUTION_FAILED'}: ${attempt.error.message ?? '执行未完成'}` : null })),
    artifactHistory: task.artifacts.map(artifact => artifactMetadata(task, artifact)),
    reviews: task.reviews.map(({ id, visitId, state, feedback, subject, requestedAt, decidedAt }) => ({ id, stageId: task.visits.find(visit => visit.id === visitId)?.stageId ?? '', state, feedback, artifactIds: subject.artifactIds, requestedAt, decidedAt })),
    events: task.events.map(({ id, kind, sequence, createdAt }) => ({ id, kind, sequence, createdAt })),
  }
}

/** One business implementation shared by authenticated UI and narrowly scoped management tools. */
export function createWorkflowCore({ store, runner, attachments, workspaceRegistry, currentModel, profileDir,
  confirmStopped = confirmStoppedExecution,
  reconcileNative,
  readSessionLog, firstTokenTime, modelInfoFor = async () => null, assertOpen = () => {} }) {
  const validate = (method, request) => validateWorkflowCommand(method, request)
  const workspaceBinding = async workspaceId => {
    const workspace = workspaceRegistry.get(workspaceId)
    if (!workspace || await workspace.status() !== 'ok') fail('WF_WORKSPACE_MISSING', '所选工作区不可用，请检查目录或重新选择。')
    const rootPath = await realpath(workspace.path)
    return { workspaceId: workspace.id, rootPath, executionScope: hash([profileDir, rootPath]) }
  }
  const readModelInfo = async (selection, signal) => {
    signal?.throwIfAborted()
    try {
      const info = await modelInfoFor(selection, signal)
      signal?.throwIfAborted()
      return info
    } catch {
      signal?.throwIfAborted()
      fail('WF_MODEL_UNAVAILABLE', MODEL_UNAVAILABLE)
    }
  }
  const requireModel = async (selection, signal) => {
    const info = await readModelInfo(selection, signal)
    // Null preserves legacy embedders; the live Host always resolves exact-model metadata.
    if (!info) return
    if (selection?.reasoningEffort !== undefined && !info.reasoning?.efforts?.some(item => item.id === selection.reasoningEffort)) {
      fail('WF_MODEL_UNSUPPORTED', '此模型不支持所选推理档位，请刷新并明确选择可用档位；不会自动降级。')
    }
  }
  const viewTask = async (task, includeOutputText = false) => {
    const view = await publicTask(task, attachments, { includeOutputText, executing: runner.isExecutingTask?.(task.id) === true })
    if (runner.hasPendingSettlement?.(task.id)) view.attention = { code: 'WF_SETTLEMENT_PENDING', message: 'AI 已结束执行，结果保存暂未完成，正在自动重试保存。不会重新执行模型；也可以核对后终止。' }
    return view
  }
  const core = {
    async listTasks(workspaceId) {
      assertOpen()
      return { tasks: store.listTaskSummaries(workspaceId), status: runner.status() }
    },
    listWorkflows(workspaceId) { assertOpen(); return store.listWorkflows(workspaceId).map(publicWorkflow) },
    getWorkflow(workflowId) { assertOpen(); return publicWorkflow(store.getWorkflow(workflowId)) },
    async getTask(taskId, { includeOutputText = false } = {}) { assertOpen(); return viewTask(store.getTask(taskId), includeOutputText) },
    async getStageTrace({ taskId, stageId, attemptId, fromSeq = 0, limit = 50 }, signal) {
      assertOpen(); signal?.throwIfAborted()
      if (!Number.isSafeInteger(fromSeq) || fromSeq < 0 || !Number.isSafeInteger(limit) || limit < 1 || limit > 200) fail('WF_INVALID_INPUT', 'Invalid trace page.')
      const task = store.getTask(taskId), visits = task.visits.filter(visit => visit.stageId === stageId)
      const attempts = task.attempts.filter(attempt => visits.some(visit => visit.id === attempt.visitId))
      const attempt = attemptId ? attempts.find(attempt => attempt.id === attemptId) : attempts.at(-1)
      if (!attempt) fail('WF_TRACE_NOT_FOUND', '此阶段还没有对应的执行记录。')
      if (!readSessionLog) fail('WF_TRACE_UNAVAILABLE', '当前 DSH 暂时无法读取阶段会话日志。')
      let log
      try { log = await readSessionLog(attempt.sessionId, signal) } catch { signal?.throwIfAborted(); fail('WF_TRACE_UNAVAILABLE', '阶段会话日志暂不可用，可能尚未保存或已被清理。') }
      if (log.header?.id !== attempt.sessionId || !Array.isArray(log.events)) fail('WF_TRACE_UNAVAILABLE', '阶段会话日志与执行记录不匹配。')
      return projectStageTrace(task, attempt, stageEventWindow(log.events, attempt), { fromSeq, limit, firstTokenTime })
    },
    async getTaskFiles(taskId) { assertOpen(); return listTaskFiles(store.getTask(taskId)) },
    async deleteTaskFile(input, actor) {
      assertOpen()
      if (actor?.kind !== 'user') fail('WF_HUMAN_REQUIRED', '请在任务产物列表中确认删除文件。')
      const request = validate('deleteTaskFile', input)
      return deleteTaskFile(store.getTask(request.taskId), request.path, request.expectedVersion)
    },
    async getTaskFile(taskId, path) {
      assertOpen()
      const task = store.getTask(taskId), file = await taskFilePath(task, path)
      return file
    },
    async getArtifact(taskId, artifactId) {
      assertOpen()
      const task = store.getTask(taskId)
      const artifact = task.artifacts.find(item => item.id === artifactId)
      if (!artifact) fail('WF_ARTIFACT_NOT_FOUND', '此成果不属于该任务。')
      try { return { ...artifactMetadata(task, artifact), text: await readArtifactText(attachments, artifact) } }
      catch { fail('WF_ARTIFACT_UNAVAILABLE', '保存的成果暂时无法读取，请检查附件存储后重试。') }
    },
    async createWorkflow(input, actor, selection) {
      assertOpen()
      const request = validate('createWorkflow', input)
      const existing = store.getCreateWorkflowBinding(request.requestId)
      if (existing && existing.workspaceId !== request.workspaceId) fail('WF_IDEMPOTENCY_CONFLICT', '此请求已经用于另一个工作区。')
      const binding = existing ?? await workspaceBinding(request.workspaceId)
      assertOpen()
      return publicWorkflow(store.createWorkflow({ ...request, ...binding }, actor, selection))
    },
    updateWorkflow(input, actor, selection) {
      assertOpen()
      return publicWorkflow(store.updateWorkflow(validate('updateWorkflow', input), actor, selection))
    },
    deleteWorkflow(input, actor) {
      assertOpen()
      if (actor.kind !== 'user') fail('WF_HUMAN_REQUIRED', '请在工作流页面确认删除。')
      return store.deleteWorkflow(validate('deleteWorkflow', input), actor)
    },
    async deleteTask(input, actor) {
      assertOpen()
      if (actor?.kind !== 'user') fail('WF_HUMAN_REQUIRED', '请在任务列表中确认删除。')
      const result = store.deleteTask(validate('deleteTask', input), actor)
      const complete = await runner.cleanupDeletedTasks()
      return complete ? result : { ...result, cleanupPending: true }
    },
    async createTask(input, actor) {
      assertOpen()
      const request = validate('createTask', input)
      const committed = store.getCreateTaskSnapshot(request.requestId)
      const workflowId = request.workflowId ?? committed?.workflowId
      if (!workflowId) fail('WF_WORKFLOW_REQUIRED', '请先选择一个工作流，再创建任务。')
      if (committed && (committed.workspaceId !== request.workspaceId || committed.workflowId !== workflowId)) fail('WF_IDEMPOTENCY_CONFLICT', '此请求已经用于另一个工作流或工作区。')
      let executionConfig, expectedVersionId
      if (committed) {
        executionConfig = committed.executionConfig
        expectedVersionId = request.expectedVersionId ?? ([PROJECT_POLICY, NATIVE_POLICY].includes(executionConfig.policy) ? committed.workflowVersionId : undefined)
      } else {
        const workflow = store.getWorkflow(workflowId)
        if (workflow.workspaceId !== request.workspaceId) fail('WF_WORKSPACE_MISMATCH', '该工作流不属于当前工作区。')
        expectedVersionId = request.expectedVersionId ?? workflow.versionId ?? undefined
        if (expectedVersionId !== undefined && expectedVersionId !== workflow.versionId) fail('WF_VERSION_CHANGED', '流程已更新，请刷新后再创建任务。')
        const agentStages = workflow.definition.stages.filter(stage => stage.kind === 'agent')
        const fallback = agentStages.some(stage => !stage.modelSelection) ? currentModel() : agentStages[0]?.modelSelection
        const selections = agentStages.map(stage => stage.modelSelection ?? fallback)
        if (selections.some(selection => !selection?.provider || !selection?.model)) fail('WF_MODEL_UNAVAILABLE', '请通过 Agent 为工作流阶段配置模型，或在 DSH 设置默认模型。')
        for (const selection of new Map(selections.map(selection => [JSON.stringify(selection), selection])).values()) await requireModel(selection)
        await workspaceBinding(workflow.workspaceId)
        executionConfig = { policy: NATIVE_POLICY, modelSelection: fallback }
      }
      assertOpen()
      const task = store.createTask({ requestId: request.requestId, workflowId,
        title: request.title, input: { text: request.text }, executionConfig,
        ...(expectedVersionId ? { expectedVersionId } : {}) }, actor)
      if (!committed) await ensureTaskDirectory(task)
      void runner.kick()
      return viewTask(task)
    },
    async decideReview(request, actor) {
      assertOpen()
      if (actor?.kind !== 'user') fail('WF_HUMAN_REQUIRED', '审核决定必须由用户在工作流页面确认。')
      const before = store.getTask(request.taskId)
      if (request.decision === 'approved' && before.revision === request.expectedRevision && before.review?.id === request.reviewId) {
        try { await Promise.all(before.effectiveArtifacts.map(artifact => readArtifactText(attachments, artifact))) }
        catch { fail('WF_ARTIFACT_UNAVAILABLE', '审核成果无法读取，不能批准。请先检查附件存储。') }
      }
      assertOpen()
      const task = store.decideReview(request, actor)
      void runner.kick()
      return viewTask(task)
    },
    async retryTask(input, actor) {
      assertOpen()
      const request = validate('retryTask', input)
      const before = store.getTask(request.taskId)
      // A stale revision may be a committed receipt; let the Store replay it first.
      if (before.revision === request.expectedRevision) {
        await requireModel(before.currentStage?.modelSelection ?? before.executionConfig?.modelSelection)
      }
      assertOpen()
      const task = store.retryTask(request, actor)
      void runner.kick()
      return viewTask(task)
    },
    async reconcileTask(input, actor) {
      assertOpen()
      if (actor?.kind !== 'user') fail('WF_HUMAN_REQUIRED', '请在工作流页面核对旧执行。')
      const request = validate('reconcileTask', input)
      // Finish any in-flight report writes before releasing this Task's execution ownership.
      await runner.settleTask?.(request.taskId)
      assertOpen()
      const task = store.getTask(request.taskId)
      if (task.revision !== request.expectedRevision) {
        const restored = store.reconcileTask(request, actor)
        void runner.kick()
        return viewTask(restored)
      }
      const pending = task.attempts.filter(attempt => ['prepared', 'running', 'unknown'].includes(attempt.state) && attempt.quiescedAt == null)
      if (pending.length !== 1) fail('WF_RECOVERY_UNSUPPORTED', '此任务没有可核对的单一中断执行。')
      const attempt = pending[0]
      if (attempt.executorSnapshot.policy === NATIVE_POLICY && attempt.executorSnapshot.stopPolicy === undefined) {
        if (!reconcileNative) fail('WF_RECOVERY_UNSUPPORTED', '当前执行环境暂时无法核对原生会话。')
        const restored = await reconcileNative(attempt, evidence => {
          assertOpen()
          return store.reconcileTask(request, actor, evidence)
        }, { confirmedStopped: request.confirmedStopped === true })
        void runner.kick()
        return viewTask(restored)
      }
      const evidence = await confirmStopped({ attempt, processes: store.getAttemptProcesses(attempt.id) })
      assertOpen()
      const restored = store.reconcileTask(request, actor, evidence)
      void runner.kick()
      return viewTask(restored)
    },
    async terminateTask(input, actor) {
      assertOpen()
      const request = validate('terminateTask', input)
      const task = store.terminateTask(request, actor)
      if (task.state === 'terminating') {
        const canceled = await runner.cancelTask(task.id)
        const current = store.getTask(task.id)
        const pending = current.attempts.filter(attempt => ['prepared', 'running', 'unknown'].includes(attempt.state) && attempt.quiescedAt == null)
        if (!canceled?.requested && current.state === 'terminating' && pending.length === 1) {
          if (pending[0].executorSnapshot.policy === NATIVE_POLICY && pending[0].executorSnapshot.stopPolicy === undefined) {
            return core.reconcileTask({ taskId: task.id, expectedRevision: current.revision, requestId: `stop:${hash(request.requestId)}`, ...(request.confirmedStopped === undefined ? {} : { confirmedStopped: request.confirmedStopped }) }, actor)
          }
          if (pending[0].executorSnapshot.stopPolicy !== PROCESS_POLICY) fail('WF_RECOVERY_UNSUPPORTED', '此执行缺少可核对的停止记录。')
          if (actor?.kind !== 'user') fail('WF_HUMAN_REQUIRED', '停止旧执行必须由用户确认。')
          const attempt = pending[0]
          const evidence = await confirmStopped({ attempt, processes: store.getAttemptProcesses(attempt.id), stop: true })
          assertOpen()
          store.reconcileTask({ taskId: task.id, expectedRevision: current.revision,
            requestId: `stop:${hash(request.requestId)}` }, actor, evidence)
        }
      }
      void runner.kick()
      return viewTask(store.getTask(task.id))
    },
  }
  return core
}

export async function apply(ctx) {
  const runtimeRequire = createRequire(ctx.profileContext.installAnchor)
  const protocol = await import(pathToFileURL(runtimeRequire.resolve('@deepseek-ai/dsh-typert-protocol')).href)
  // Keep the deployed store path; this upgrade must not strand existing Tasks.
  const store = openWorkflowStore(join(ctx.profileContext.dir, 'workflow-poc', 'workflow.sqlite'))
  let executor, runner, apiFiber, removeTools
  let closing = false
  const assertOpen = () => { if (closing) fail('WF_STOPPING', '工作流正在停止，请准备就绪后重试。') }
  const cleanup = async () => {
    closing = true
    removeTools?.()
    await apiFiber?.dispose()
    if (runner) await runner.dispose()
    else await executor?.dispose()
    store.close()
  }
  try {
    const { assistantStreamFirstTokenTime } = await import(pathToFileURL(runtimeRequire.resolve('@deepseek-ai/dsh-llm')).href)
    const { installModelSelection } = await import(pathToFileURL(runtimeRequire.resolve('@deepseek-ai/dsh-agent')).href)
    executor = createDshExecutor(ctx, { installModelSelection })
    runner = createWorkflowRunner({ store, executor, attachments: ctx.attachments, workspaceRegistry: ctx.workspaceRegistry,
      onError: error => console.warn('Workflow:', error?.code ?? 'WF_INTERNAL') })
    const core = createWorkflowCore({ store, runner, attachments: ctx.attachments, workspaceRegistry: ctx.workspaceRegistry,
      readSessionLog: (id, signal) => readPersistedSession(ctx.sessionPersistence, id, signal), firstTokenTime: assistantStreamFirstTokenTime,
      reconcileNative: (attempt, commit, options) => withStoppedNativeExecution(ctx, attempt, commit, options),
      currentModel: () => { try { return ctx.agentDefaultModel.currentSelection() } catch { return null } },
      modelInfoFor: (selection, signal) => ctx.llm.resolveModelInfo(selection.provider, selection.model, signal),
      profileDir: ctx.profileContext.dir, assertOpen })
    await runner.start()
    apiFiber = mountWorkflowReviewApi(ctx, core, protocol)
    await apiFiber
    removeTools = mountWorkflowManagementTools(ctx, core)
    return cleanup
  } catch (error) {
    await cleanup()
    throw error
  }
}
