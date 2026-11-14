export const WORKFLOW_REVIEW_NAMESPACE = 'workflowReview'

const USER_ACTOR = Object.freeze({ kind: 'user', id: 'owner', source: 'workflow-review-ui' })
const ID = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/
const HASH = /^(?:sha256:)?[a-f0-9]{64}$/
const DECISIONS = new Set(['approved', 'returned', 'terminated'])
const REVIEW_FIELDS = new Set([
  'taskId', 'reviewId', 'subjectHash', 'expectedRevision', 'requestId', 'decision', 'feedback',
])

const COMMAND_FIELDS = {
  createTask: ['requestId', 'workspaceId', 'workflowId', 'expectedVersionId', 'title', 'text', 'modelSelection'],
  terminateTask: ['requestId', 'taskId', 'expectedRevision', 'confirmedStopped'],
  deleteTask: ['requestId', 'taskId', 'expectedRevision'],
  deleteTaskFile: ['requestId', 'taskId', 'path', 'expectedVersion'],
  retryTask: ['requestId', 'taskId', 'expectedRevision'],
  reconcileTask: ['requestId', 'taskId', 'expectedRevision', 'confirmedStopped'],
  createWorkflow: ['requestId', 'workspaceId', 'name', 'definition'],
  updateWorkflow: ['requestId', 'workflowId', 'expectedRevision', 'name', 'definition'],
  deleteWorkflow: ['requestId', 'workflowId', 'expectedRevision'],
}
const commandInvalid = () => {
  throw Object.assign(new Error('Invalid workflow request.'), { code: 'WF_INVALID_INPUT' })
}
const commandObject = (value, allowed) => {
  if (!value || typeof value !== 'object' || Array.isArray(value)
    || ![Object.prototype, null].includes(Object.getPrototypeOf(value))
    || Reflect.ownKeys(value).some(key => !allowed.includes(key)
      || !Object.prototype.hasOwnProperty.call(Object.getOwnPropertyDescriptor(value, key), 'value'))) commandInvalid()
  return value
}
const commandId = (value) => {
  if (typeof value !== 'string' || !ID.test(value)) commandInvalid()
  return value
}
const commandText = (value, max, allowEmpty = false) => {
  if (typeof value !== 'string' || value.length > max || (!allowEmpty && !value.trim())) commandInvalid()
  return value
}
const commandSelection = (value) => {
  const selection = commandObject(value, ['provider', 'model', 'reasoningEffort'])
  commandText(selection.provider, 200)
  commandText(selection.model, 200)
  if (selection.reasoningEffort !== undefined) commandText(selection.reasoningEffort, 80, true)
  return { ...selection }
}
const commandDefinition = (value) => {
  const definition = commandObject(value, ['description', 'inputLabel', 'inputHint', 'stages', 'permissions'])
  for (const [field, max] of [['description', 4000], ['inputLabel', 200], ['inputHint', 4000]]) {
    if (definition[field] !== undefined) commandText(definition[field], max, true)
  }
  // The store validates complete stage definitions before saving.
  if (!Array.isArray(definition.stages) || definition.stages.length > 16) commandInvalid()
  // Accept the obsolete key from older clients, but it no longer grants or denies tools.
  try {
    if (JSON.stringify(definition).length > 2 * 1024 * 1024) commandInvalid()
  } catch { commandInvalid() }
  const { permissions: _obsoletePermissions, ...current } = definition
  return current
}

/** Input validation only: it neither grants authority nor makes user-only commands agent-callable. */
export function validateWorkflowCommand(method, value) {
  if (typeof method !== 'string' || !Object.prototype.hasOwnProperty.call(COMMAND_FIELDS, method)) commandInvalid()
  const request = commandObject(value, COMMAND_FIELDS[method])
  const parsed = {}
  // Generation is a read-only preview, so it may omit an idempotency key.
  parsed.requestId = commandId(request.requestId)
  if (COMMAND_FIELDS[method].includes('workspaceId')) parsed.workspaceId = commandId(request.workspaceId)
  if (COMMAND_FIELDS[method].includes('workflowId') && (method !== 'createTask' || request.workflowId !== undefined)) {
    parsed.workflowId = commandId(request.workflowId)
  }
  if (COMMAND_FIELDS[method].includes('taskId')) parsed.taskId = commandId(request.taskId)
  if (COMMAND_FIELDS[method].includes('expectedRevision')) {
    if (!Number.isSafeInteger(request.expectedRevision) || request.expectedRevision < 1) commandInvalid()
    parsed.expectedRevision = request.expectedRevision
  }
  if (request.confirmedStopped !== undefined) {
    if (typeof request.confirmedStopped !== 'boolean') commandInvalid()
    parsed.confirmedStopped = request.confirmedStopped
  }
  if (method === 'deleteTaskFile') { parsed.path = commandText(request.path, 10000); parsed.expectedVersion = commandText(request.expectedVersion, 300) }
  if (method === 'createTask') {
    if (request.expectedVersionId !== undefined) parsed.expectedVersionId = commandId(request.expectedVersionId)
    parsed.text = commandText(request.text, Infinity)
    parsed.title = request.title === undefined ? parsed.text.trim().slice(0, 200) : commandText(request.title, 200)
    // Accepted for old clients; new tasks resolve models from the workflow stages.
    if (request.modelSelection !== undefined) parsed.modelSelection = commandSelection(request.modelSelection)
  }
  if (method === 'createWorkflow' || method === 'updateWorkflow') {
    parsed.name = commandText(request.name, 200)
    parsed.definition = commandDefinition(request.definition)
  }
  return parsed
}

/**
 * Mount browser-only Remote methods over the shared DSH Gateway, not a new HTTP route.
 * `protocol` is the installed public @deepseek-ai/dsh-typert-protocol module supplied
 * by the Host entry. This file neither resolves packages nor registers Agent tools.
 *
 * Client calls: connection.rpc.call('/api', 'workflowReview/decideReview',
 *   { args: { request: { taskId, reviewId, subjectHash, expectedRevision,
 *                        requestId, decision, feedback } } })
 * Other methods: getTask with { args: { taskId } }, listTasks with { args: {} }.
 *
 * Core owns transactions, authorization of the review subject, state transitions,
 * idempotency and persistence. Its WF_* errors must contain user-safe messages.
 * Browser-peer admission is not proof of a physical click or a full-access sandbox.
 * Returns the Cordis plugin fiber; its owner disposes it with the surrounding plugin.
 */
export function mountWorkflowReviewApi(ctx, core, protocol) {
  const { Remote, RemoteError, TypertRemoteService } = protocol
  for (const method of ['decideReview', 'getTask', 'listTasks']) {
    if (typeof core?.[method] !== 'function') throw new TypeError(`Workflow core requires ${method}`)
  }
  if ([Remote, RemoteError, TypertRemoteService].some(value => typeof value !== 'function')) {
    throw new TypeError('Workflow review API requires the installed Typert protocol')
  }

  const invalid = (field) => {
    throw new RemoteError('workflow/invalid-input', 'Invalid workflow review request.', { field })
  }
  const id = (value, field) => {
    if (typeof value !== 'string' || !ID.test(value)) invalid(field)
    return value
  }
  const parseReview = (value) => {
    if (value === null || typeof value !== 'object' || Array.isArray(value)
      || ![Object.prototype, null].includes(Object.getPrototypeOf(value))) invalid('request')
    if (Reflect.ownKeys(value).some(key => !REVIEW_FIELDS.has(key))) invalid('request')
    const { taskId, reviewId, subjectHash, expectedRevision, requestId, decision, feedback = '' } = value
    if (typeof subjectHash !== 'string' || !HASH.test(subjectHash)) invalid('subjectHash')
    if (!Number.isSafeInteger(expectedRevision) || expectedRevision < 0) invalid('expectedRevision')
    if (!DECISIONS.has(decision)) invalid('decision')
    if (typeof feedback !== 'string' || feedback.length > 10000
      || (decision === 'returned' && !feedback.trim())) invalid('feedback')
    return {
      taskId: id(taskId, 'taskId'),
      reviewId: id(reviewId, 'reviewId'),
      subjectHash,
      expectedRevision,
      requestId: id(requestId, 'requestId'),
      decision,
      feedback,
    }
  }

  const admit = (callCtx, method) => {
    const invocation = callCtx.invocation
    const browserPeer = callCtx.connection.browserPeer
    if (!invocation || !browserPeer || invocation.peer !== browserPeer
      || browserPeer.principal?.kind !== 'owner'
      || browserPeer.signal?.aborted !== false
      || invocation.service !== WORKFLOW_REVIEW_NAMESPACE
      || invocation.request?.namespace !== WORKFLOW_REVIEW_NAMESPACE
      || invocation.request?.method !== method) {
      throw new RemoteError('workflow/browser-required', 'This operation requires the authenticated Workflow UI.', {})
    }
    if (invocation.signal?.aborted !== false) {
      throw new RemoteError('workflow/cancelled', 'The workflow request was cancelled.', {})
    }
    return USER_ACTOR
  }

  const invokeCore = async (operation, ...args) => {
    try {
      return await core[operation](...args)
    } catch (error) {
      // Only core's documented, user-safe business errors cross the boundary.
      if (typeof error?.code === 'string' && /^WF_[A-Z][A-Z0-9_]{0,79}$/.test(error.code)
        && typeof error.message === 'string' && error.message.length <= 2000) {
        throw new RemoteError(`workflow/${error.code.slice(3).toLowerCase().replaceAll('_', '-')}`,
          error.message, { code: error.code })
      }
      throw new RemoteError('workflow/internal', 'The workflow operation could not be completed.', {})
    }
  }

  const parseCommand = (method, request) => {
    try { return validateWorkflowCommand(method, request) } catch { invalid('request') }
  }

  const initializers = []
  class WorkflowReviewApi extends TypertRemoteService {
    static inject = ['connection', 'typertGateway']

    constructor(serviceCtx) {
      super(serviceCtx, WORKFLOW_REVIEW_NAMESPACE)
      for (const initialize of initializers) initialize.call(this)
    }

    async decideReview(request) {
      const actor = admit(this.ctx, 'decideReview')
      return invokeCore('decideReview', parseReview(request), actor)
    }

    async getTask(taskId) {
      admit(this.ctx, 'getTask')
      return invokeCore('getTask', id(taskId, 'taskId'))
    }

    async listTasks(workspaceId) {
      admit(this.ctx, 'listTasks')
      return workspaceId === undefined ? invokeCore('listTasks') : invokeCore('listTasks', id(workspaceId, 'workspaceId'))
    }

    async createTask(request) {
      const actor = admit(this.ctx, 'createTask')
      return invokeCore('createTask', parseCommand('createTask', request), actor)
    }

    async terminateTask(request) {
      const actor = admit(this.ctx, 'terminateTask')
      return invokeCore('terminateTask', parseCommand('terminateTask', request), actor)
    }

    async retryTask(request) {
      const actor = admit(this.ctx, 'retryTask')
      return invokeCore('retryTask', parseCommand('retryTask', request), actor)
    }

    async reconcileTask(request) {
      const actor = admit(this.ctx, 'reconcileTask')
      // Only Host core may collect OS evidence and decide whether recovery is safe.
      return invokeCore('reconcileTask', parseCommand('reconcileTask', request), actor)
    }

    async listWorkflows(workspaceId) {
      admit(this.ctx, 'listWorkflows')
      return invokeCore('listWorkflows', id(workspaceId, 'workspaceId'))
    }

    async getWorkflow(workflowId) {
      admit(this.ctx, 'getWorkflow')
      return invokeCore('getWorkflow', id(workflowId, 'workflowId'))
    }

    async getTaskFiles(taskId) {
      admit(this.ctx, 'getTaskFiles')
      return invokeCore('getTaskFiles', id(taskId, 'taskId'))
    }

    async getTaskFile(taskId, path) {
      admit(this.ctx, 'getTaskFile')
      if (typeof path !== 'string' || !path || path.length > 10000) invalid('path')
      return invokeCore('getTaskFile', id(taskId, 'taskId'), path)
    }

    async getArtifact(taskId, artifactId) {
      admit(this.ctx, 'getArtifact')
      return invokeCore('getArtifact', id(taskId, 'taskId'), id(artifactId, 'artifactId'))
    }


    async createWorkflow(request) {
      const actor = admit(this.ctx, 'createWorkflow')
      return invokeCore('createWorkflow', parseCommand('createWorkflow', request), actor)
    }

    async updateWorkflow(request) {
      const actor = admit(this.ctx, 'updateWorkflow')
      return invokeCore('updateWorkflow', parseCommand('updateWorkflow', request), actor)
    }


    async deleteTaskFile(request) {
      const actor = admit(this.ctx, 'deleteTaskFile')
      return invokeCore('deleteTaskFile', parseCommand('deleteTaskFile', request), actor)
    }

    async deleteTask(request) {
      const actor = admit(this.ctx, 'deleteTask')
      return invokeCore('deleteTask', parseCommand('deleteTask', request), actor)
    }

    async deleteWorkflow(request) {
      const actor = admit(this.ctx, 'deleteWorkflow')
      return invokeCore('deleteWorkflow', parseCommand('deleteWorkflow', request), actor)
    }

  }

  // Invoke the public standard decorator API from plain ESM; do not copy private markers.
  const methods = ['decideReview', 'getTask', 'listTasks']
  for (const name of [...Object.keys(COMMAND_FIELDS), 'listWorkflows', 'getWorkflow', 'getArtifact', 'getTaskFiles', 'getTaskFile']) {
    if (typeof core[name] === 'function') methods.push(name)
  }
  for (const name of methods) {
    Remote(WorkflowReviewApi.prototype[name], {
      kind: 'method', name, private: false, static: false,
      addInitializer(initialize) { initializers.push(initialize) },
    })
  }
  return ctx.plugin(WorkflowReviewApi)
}
