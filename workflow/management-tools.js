import { randomUUID } from 'node:crypto'
import { validateWorkflowCommand } from './review-api.js'

const ID = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/
const fail = (code, message) => { throw Object.assign(new Error(message), { code }) }
const invalid = () => fail('WF_INVALID_INPUT', 'Invalid workflow tool request.')
const id = value => { if (typeof value !== 'string' || !ID.test(value)) invalid(); return value }
const identifier = description => ({ type: 'string', description })
const requestId = identifier('Optional idempotency key. Reuse an explicit key when retrying; omission creates a new key.')

const definitionSchema = {
  type: 'object', additionalProperties: false,
  properties: {
    description: { type: 'string', description: 'Purpose of the reusable workflow.' },
    inputLabel: { type: 'string', description: 'Short label for task input.' },
    inputHint: { type: 'string', description: 'Describe the material the user should supply.' },
    stages: { type: 'array', minItems: 1, maxItems: 16, items: {
      type: 'object', additionalProperties: false, required: ['id', 'kind', 'title'],
      properties: {
        id: { type: 'string', description: 'Stable unique stage id. Preserve ids for unchanged stages.' },
        kind: { type: 'string', enum: ['agent', 'review'] },
        title: { type: 'string', description: 'Short stage name.' },
        prompt: { type: 'string', description: 'Required non-empty instructions and expected deliverable for agent stages; optional human checklist for review stages. Review status is shown by Workflow: keep changing approval labels out of deliverable filenames, titles and body; use generation time for provenance.' },
        returnStageId: { type: 'string', description: 'Required for review stages: a fixed earlier agent-stage id to return to. Omit on agent stages.' },
      },
    } },
  }, required: ['stages'],
}
const agentDefinition = definition => {
  if (!definition || typeof definition !== 'object' || Array.isArray(definition)
    || Object.keys(definition).some(key => !Object.hasOwn(definitionSchema.properties, key)) || !Array.isArray(definition.stages)) invalid()
  for (const stage of definition.stages) {
    if (!stage || typeof stage !== 'object' || Array.isArray(stage)
      || Object.keys(stage).some(key => !Object.hasOwn(definitionSchema.properties.stages.items.properties, key))) invalid()
  }
  return definition
}
const agentWorkflow = value => {
  if (!value.definition?.stages) return value
  return { ...value, definition: { ...value.definition, stages: value.definition.stages.map(({ modelSelection: _model, ...stage }) => stage) } }
}
const sessionSelection = exec => {
  const selection = exec.agent.model?.current()
  if (!selection?.provider || !selection?.model) fail('WF_MODEL_UNAVAILABLE', '当前聊天没有可用的模型配置，请先在聊天中选择模型。')
  return { provider: selection.provider, model: selection.model, ...(selection.reasoningEffort === undefined ? {} : { reasoningEffort: selection.reasoningEffort }) }
}

/** Register ordinary management actions, never publication, permissions, or review authority. */
export function mountWorkflowManagementTools(ctx, core) {
  const disposers = []
  const inWorkspace = (value, workspace) => {
    if (!value || value.workspaceId !== workspace.id) fail('WF_WORKSPACE_MISMATCH', 'This item does not belong to the current workspace.')
    return value
  }
  const register = (name, description, properties, required, run) => {
    const dispose = ctx.tools.register({
      name, description,
      parameters: { type: 'object', properties, required, additionalProperties: false },
      // DSH's enforced output subset accepts boolean additionalProperties and real JSON values.
      output: { schema: { type: 'object', additionalProperties: true },
        render: (_args, value) => [{ type: 'text', text: JSON.stringify(value) }] },
      async execute(args, exec) {
        try {
          if (!args || typeof args !== 'object' || Array.isArray(args)
            || ![Object.prototype, null].includes(Object.getPrototypeOf(args))
            || Reflect.ownKeys(args).some(key => !Object.prototype.hasOwnProperty.call(properties, key)
              || !Object.prototype.hasOwnProperty.call(Object.getOwnPropertyDescriptor(args, key), 'value'))) invalid()
          if (!exec?.agent?.session || typeof exec.agent.id !== 'string' || !exec.agent.id) {
            fail('WF_AGENT_REQUIRED', 'A Workflow tool requires an initiating agent.')
          }
          exec.signal?.throwIfAborted()
          const cwd = ctx.workingDirectory.get(exec.agent.session)
          const workspace = await ctx.workspaceRegistry.resolveByPath(cwd)
          if (!workspace) fail('WF_WORKSPACE_MISSING', 'The current project is not a registered workspace.')
          exec.signal?.throwIfAborted()
          const actor = Object.freeze({ kind: 'agent', id: exec.agent.id, source: 'workflow-management-tool' })
          return await run(args, workspace, actor, exec)
        } catch (error) {
          exec?.signal?.throwIfAborted()
          if (typeof error?.code === 'string' && /^WF_[A-Z_]+$/.test(error.code)
            && typeof error.message === 'string' && error.message.length <= 2000) {
            fail(error.code, error.message)
          }
          fail('WF_INTERNAL', 'The workflow operation could not be completed.')
        }
      },
    })
    disposers.push(dispose)
  }
  try {
    register('workflow_list', 'List workflows in the current project. Does not start tasks or approve anything.', {}, [],
      async (_args, workspace) => ({ workspaceId: workspace.id,
        workflows: (await core.listWorkflows(workspace.id)).map(value => agentWorkflow(inWorkspace(value, workspace))) }))
    register('workflow_list_tasks', 'Read task history for one Workflow in the current project. Compare workflowVersionId/versionNumber before attributing old failures to the current definition. Does not run, retry or modify tasks.', {
      workflowId: identifier('Workflow id in the current project.'),
    }, ['workflowId'], async (args, workspace) => {
      const workflow = inWorkspace(await core.getWorkflow(id(args.workflowId)), workspace)
      const overview = await core.listTasks(workspace.id)
      return { workflowId: workflow.id, currentVersionId: workflow.versionId, currentVersionNumber: workflow.versionNumber,
        tasks: overview.tasks.filter(task => task.workflowId === workflow.id).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) }
    })
    register('workflow_create', 'Create a reusable Workflow in the current project. It is immediately available for tasks; creating a workflow does not execute it.', {
      requestId, name: { type: 'string', description: 'Workflow name, at most 200 characters.' },
      definition: definitionSchema,
    }, ['name', 'definition'], async (args, workspace, actor, exec) => {
      const request = validateWorkflowCommand('createWorkflow', { ...args, definition: agentDefinition(args.definition), workspaceId: workspace.id,
        requestId: args.requestId === undefined ? randomUUID() : args.requestId })
      return agentWorkflow(inWorkspace(await core.createWorkflow(request, actor, sessionSelection(exec)), workspace))
    })
    register('workflow_update', 'Replace a Workflow definition in the current project. Read workflow_list first and use its exact revision. Preserve unchanged stage ids. Review stages require an earlier agent returnStageId. Changes apply only to new tasks. Does not start tasks.', {
      requestId, workflowId: identifier('Workflow id in the current project.'),
      expectedRevision: { type: 'integer', minimum: 1, description: 'Exact current revision from workflow_list. On conflict, read the latest definition and reapply only the requested edits; never blindly retry.' },
      name: { type: 'string', description: 'Workflow name, at most 200 characters.' },
      definition: definitionSchema,
    }, ['workflowId', 'expectedRevision', 'name', 'definition'], async (args, workspace, actor, exec) => {
      const request = validateWorkflowCommand('updateWorkflow', { ...args, definition: agentDefinition(args.definition),
        requestId: args.requestId === undefined ? randomUUID() : args.requestId })
      inWorkspace(await core.getWorkflow(id(args.workflowId)), workspace)
      return agentWorkflow(inWorkspace(await core.updateWorkflow(request, actor, sessionSelection(exec)), workspace))
    })
    register('workflow_create_task', 'Start an actual task from an Workflow in the current project. This calls the configured model, may incur costs, and uses the normal DSH Agent tools and authorization. It never approves reviews.', {
      requestId, workflowId: identifier('Workflow id in this project.'),
      expectedVersionId: identifier('Optional definition version to bind. Preserve this version and requestId when retrying. If omitted, the Host freezes the version on first creation and reuses its receipt on retry.'),
      text: { type: 'string', description: 'Task input text.' },
    }, ['workflowId', 'text'], async (args, workspace, actor, exec) => {
      inWorkspace(await core.getWorkflow(id(args.workflowId)), workspace)
      // Core resolves receipts before consulting the current definition and freezes
      // an omitted version on first creation. Explicit version pins pass unchanged.
      const request = validateWorkflowCommand('createTask', { ...args, workspaceId: workspace.id,
        requestId: args.requestId === undefined ? randomUUID() : args.requestId })
      exec.signal?.throwIfAborted()
      return inWorkspace(await core.createTask(request, actor), workspace)
    })
    register('workflow_get_task', 'Read task progress and report metadata in the current project. Request includeOutputText only when full reports are needed; stage conversations are available through workflow_get_stage_trace. Human review decisions remain user-only.', {
      taskId: identifier('Task id in the current project.'),
      includeOutputText: { type: 'boolean', description: 'Read full effective report bodies on demand. Default false.' },
    }, ['taskId'], async (args, workspace) => {
      if (args.includeOutputText !== undefined && typeof args.includeOutputText !== 'boolean') invalid()
      const task = inWorkspace(await core.getTask(id(args.taskId)), workspace)
      return args.includeOutputText === true ? core.getTask(task.id, { includeOutputText: true }) : task
    })
    register('workflow_get_stage_trace', 'Read the persisted conversation and measured timings of one Task stage, without resuming its Session. Use workflow_get_task to find stage/attempt ids. Timings include stage elapsed, model response boundaries/first-output waiting, and tool call-to-result intervals; tools may overlap and waiting may include authorization. Missing timings are null. Read the summary first, then page entries with nextFromSeq. Transport headers and connection configuration are omitted.', {
      taskId: identifier('Task id in this project.'), stageId: identifier('Stage id from this Task’s frozen stages, not the latest workflow.'),
      attemptId: identifier('Optional exact execution attempt. Omit for the latest attempt of this stage.'),
      fromSeq: { type: 'integer', minimum: 0, description: 'Optional event cursor; use nextFromSeq for the next page.' },
      limit: { type: 'integer', minimum: 1, maximum: 200, description: 'Conversation entries per page; default 50. Summary covers the whole persisted attempt.' },
    }, ['taskId', 'stageId'], async (args, workspace, _actor, exec) => {
      const taskId = id(args.taskId), stageId = args.stageId
      if (typeof stageId !== 'string' || !/^[a-zA-Z0-9_.-]{1,64}$/.test(stageId)) invalid()
      inWorkspace(await core.getTask(taskId), workspace)
      if (args.attemptId !== undefined) id(args.attemptId)
      return core.getStageTrace({ taskId, stageId, ...(args.attemptId === undefined ? {} : { attemptId: args.attemptId }),
        ...(args.fromSeq === undefined ? {} : { fromSeq: args.fromSeq }), ...(args.limit === undefined ? {} : { limit: args.limit }) }, exec.signal)
    })
  } catch (error) {
    for (const dispose of disposers.reverse()) dispose()
    throw error
  }
  return () => { for (const dispose of disposers.splice(0).reverse()) dispose() }
}
