import { createHash, randomUUID } from 'node:crypto'

export const NATIVE_POLICY = 'dsh-native/v1'
const failure = (code, message) => Object.assign(new Error(message), { code })
const textInput = value => typeof value === 'string' && value.trim().length > 0

export class DshExecutionError extends Error {
  constructor(code, message, evidence, cause) {
    super(message, { cause })
    this.name = 'DshExecutionError'
    this.code = code
    this.evidence = { ...evidence, completed: false }
  }
}

// DSH owns tools, retries, compaction and authorization. Verify the stage receipt
// and terminal report without imposing a second tool-dispatch policy.
function resultFromLog(header, events, request) {
  const refuse = () => { throw failure('WORKFLOW_LOG_UNKNOWN', 'The stage has no verified completed result.') }
  if (header.id !== request.sessionId || (request.cwd && header.cwd !== request.cwd)
    || !Array.isArray(events) || events.some((event, i) => event.seq !== i)) refuse()
  const inputs = events.filter(event => event.type === 'user/message' && event.data.source?.rpcId === request.requestId)
  if (inputs.length !== 1) refuse()
  const input = inputs[0]
  if ((request.messageId && input.data.id !== request.messageId)
    || input.data.content?.length !== 1 || input.data.content[0].type !== 'text'
    || (request.prompt !== undefined && input.data.content[0].text !== request.prompt)) refuse()
  const start = events.findLast(event => event.type === 'turn/start' && event.seq < input.seq)
  const end = events.find(event => event.type === 'turn/end' && event.data.turn === start?.data.turn && event.seq > input.seq)
  if (!start || !end) refuse()
  const reason = end.data.reason
  if (reason?.kind === 'error') throw failure(reason.error?.code === 'TRANSPORT' ? 'WORKFLOW_NETWORK_FAILED' : 'WORKFLOW_MODEL_FAILED', 'Native model execution failed.')
  if (reason?.kind === 'interrupted') throw failure('WORKFLOW_MODEL_INTERRUPTED', 'Native model execution was interrupted.')
  if (reason?.kind === 'max-tokens') throw failure('WORKFLOW_MODEL_INCOMPLETE', 'Native model output is incomplete.')
  if (reason?.kind !== 'completed') refuse()
  const reply = events.findLast(event => event.type === 'assistant/message' && event.data.turn === start.data.turn
    && event.seq > input.seq && event.seq < end.seq)
  if (!reply || reply.data.interrupted || reply.data.message?.content?.some(block => block.type === 'tool-call')) refuse()
  const text = reply.data.message.content.filter(block => block.type === 'text').map(block => block.text).join('\n')
  if (!textInput(text)) refuse()
  return { text, sessionId: header.id, messageId: input.data.id, turnNumber: start.data.turn,
    evidence: { policy: NATIVE_POLICY, userSeq: input.seq, assistantSeq: reply.seq, endSeq: end.seq,
      endReason: 'completed', toolInvocationCount: events.filter(event => event.type === 'tool/call' && event.seq > input.seq && event.seq < end.seq).length,
      outputSha256: createHash('sha256').update(text).digest('hex') } }
}

export async function readPersistedSession(persistence, sessionId, signal) {
  const handle = await persistence.open(sessionId, 'read', { signal })
  try { return { header: handle.header, events: (await handle.read(0, undefined, { signal })).events } }
  finally { await handle.close() }
}

/** Reconcile under native Session ownership, without dispatching or cancelling later chat turns. */
export async function withStoppedNativeExecution(ctx, attempt, commit, { confirmedStopped = false } = {}) {
  const agents = ctx.get('agents'), sessions = ctx.get('sessions'), persistence = ctx.get('sessionPersistence'), jobs = ctx.get('jobs')
  const busy = () => { throw failure('WF_RECOVERY_RUNNING', '执行会话或关联作业仍在工作，请先停止该会话，再重新核对任务。') }
  const assertNoJobs = () => {
    if (jobs.list(attempt.sessionId).some(job => job.owner === attempt.sessionId && ['running', 'stopping'].includes(job.status))) busy()
  }
  const settle = async (handle, ownership, signal) => {
    signal?.throwIfAborted(); assertNoJobs()
    const { events } = await handle.read(0, undefined, { signal })
    if (handle.header.id !== attempt.sessionId || attempt.executorSnapshot.cwd && handle.header.cwd !== attempt.executorSnapshot.cwd
      || !Array.isArray(events) || events.some((event, index) => event.seq !== index)) throw failure('WF_RECOVERY_UNCONFIRMED', '执行会话记录不完整或与任务不匹配，未释放执行位置。')
    const inputs = events.filter(event => event.type === 'user/message' && event.data.source?.rpcId === attempt.requestId)
    const input = inputs[0]
    const start = input && events.findLast(event => event.type === 'turn/start' && event.seq < input.seq)
    if (inputs.length > 1 || input && (!start || attempt.messageId && input.data.id !== attempt.messageId
      || attempt.turnNumber != null && start.data.turn !== attempt.turnNumber
      || input.data.content?.length !== 1 || input.data.content[0].type !== 'text' || input.data.content[0].text !== attempt.prompt)
      || !input && events.some(event => event.type === 'user/message')) throw failure('WF_RECOVERY_UNCONFIRMED', '无法关联这次阶段的原始输入，未释放执行位置。')
    const end = start && events.find(event => event.type === 'turn/end' && event.seq > input.seq && event.data.turn === start.data.turn)
    // A cold Session lock cannot prove that commands survived neither SIGKILL nor a crash.
    if (ownership === 'exclusive-session' && (attempt.state === 'unknown' || input && !end) && !confirmedStopped) {
      throw failure('WF_RECOVERY_CONFIRM_REQUIRED', '原 DSH 已退出，但旧命令可能仍在运行。请先核对并确认旧操作已停止，再恢复或结束任务。')
    }
    signal?.throwIfAborted(); assertNoJobs()
    return commit({ kind: 'dsh-native-stop', attemptId: attempt.id, sessionId: attempt.sessionId, requestId: attempt.requestId,
      messageId: input?.data.id ?? attempt.messageId ?? null, turnNumber: start?.data.turn ?? attempt.turnNumber ?? null, userSeq: input?.seq ?? null, endSeq: end?.seq ?? null,
      endReason: end?.data.reason?.kind ?? 'owner_released', ownership, operatorConfirmedStopped: confirmedStopped, logLastSeq: events.at(-1)?.seq ?? -1, quiescent: true, ownedJobCount: 0 })
  }
  const agent = agents.get(attempt.sessionId)
  if (agent) {
    if (agent.phase.kind !== 'idle') busy()
    return agent.runMaintenance(async signal => {
      assertNoJobs()
      if (!await sessions.flush(agent.session)) throw failure('WF_RECOVERY_UNCONFIRMED', '执行会话暂时无法保存，请稍后重新核对。')
      const handle = await persistence.open(attempt.sessionId, 'read', { signal })
      try { return await settle(handle, 'live-idle', signal) } finally { await handle.close() }
    })
  }
  let handle
  if (!await persistence.stat(attempt.sessionId) && attempt.messageId == null && attempt.turnNumber == null) {
    if (agents.get(attempt.sessionId)) busy()
    assertNoJobs()
    return commit({ kind: 'dsh-native-stop', attemptId: attempt.id, sessionId: attempt.sessionId, requestId: attempt.requestId,
      messageId: null, turnNumber: null, userSeq: null, endSeq: null, endReason: 'not_dispatched', ownership: 'session-absent',
      logLastSeq: -1, quiescent: true, ownedJobCount: 0 })
  }
  try { handle = await persistence.open(attempt.sessionId, 'write') }
  catch { throw failure('WF_RECOVERY_UNCONFIRMED', '暂时无法取得原执行会话的独占所有权，请稍后重新核对。') }
  try {
    if (agents.get(attempt.sessionId)) busy()
    return await settle(handle, 'exclusive-session')
  } finally { await handle.close() }
}

export function createDshExecutor(ownerCtx, { modelSelection, installModelSelection } = {}) {
  const required = (name, methods) => {
    const service = ownerCtx.get(name)
    if (!service || methods.some(method => typeof service[method] !== 'function')) {
      throw failure('WORKFLOW_CONTRACT_UNAVAILABLE', `Required DSH capability is unavailable: ${name}`)
    }
    return service
  }
  const agents = required('agents', ['create', 'get', 'withoutInitiator'])
  const sessions = required('sessions', ['get', 'flush'])
  const persistence = required('sessionPersistence', ['stat', 'open'])
  const presets = required('agentPresets', ['resolve', 'mount'])
  const jobs = required('jobs', ['list'])
  const active = new Map(), submitted = new Set()
  let closed = false
  const runningJobs = sessionId => jobs.list(sessionId).filter(job => job.owner === sessionId && ['running', 'stopping'].includes(job.status))
  const readRaw = (sessionId, signal) => readPersistedSession(persistence, sessionId, signal)
  const cancel = attemptId => {
    const record = active.get(attemptId)
    if (!record) return { requested: false }
    record.cancelled = true
    record.abort.abort()
    record.handle?.agent.cancel({ kind: 'user' }, { keepInbox: false })
    return { requested: true }
  }
  async function run({ attemptId, sessionId, requestId, prompt, cwd, modelSelection: taskModelSelection, onBound, onObserved, signal }) {
    if (![attemptId, sessionId, requestId, prompt, cwd].every(textInput)) throw new TypeError('Stage identities, prompt and working directory are required')
    const evidence = { kind: 'dsh-session-log', policy: NATIVE_POLICY, attemptId, sessionId, requestId,
      messageId: null, turnNumber: null, completed: false, flushConfirmed: false, quiescent: false, ownedJobCount: 0, toolInvocationCount: 0 }
    if (closed || submitted.has(attemptId) || submitted.has(sessionId)) throw new DshExecutionError('WORKFLOW_REUSE_FORBIDDEN', 'Stage execution already submitted or executor closed', evidence)
    submitted.add(attemptId); submitted.add(sessionId)
    const record = { abort: new AbortController(), cancelled: false, handle: null }
    record.done = new Promise(resolve => { record.finish = resolve })
    active.set(attemptId, record)
    const abort = () => cancel(attemptId)
    signal?.addEventListener('abort', abort, { once: true })
    if (signal?.aborted) abort()
    let issue, result, created = false
    const message = { id: randomUUID(), role: 'user', content: [{ type: 'text', text: prompt }], source: { kind: 'user', rpcId: requestId } }
    evidence.messageId = message.id
    try {
      record.abort.signal.throwIfAborted()
      if (agents.get(sessionId) || sessions.get(sessionId) || await persistence.stat(sessionId)) throw failure('WORKFLOW_REUSE_FORBIDDEN', 'Existing session cannot be dispatched again')
      const preset = await presets.resolve()
      const selection = structuredClone(taskModelSelection ?? modelSelection ?? required('agentDefaultModel', ['currentSelection']).currentSelection())
      record.handle = await agents.withoutInitiator(() => agents.create({ sessionId, meta: { cwd, agentPreset: preset.id },
        agentOptions: selection, signal: record.abort.signal,
        setup: async agentCtx => {
          installModelSelection?.(agentCtx)
          await presets.mount(agentCtx, preset.id)
        } }))
      created = true
      const agent = record.handle.agent
      if (!await sessions.flush(agent.session)) throw failure('WORKFLOW_FLUSH_UNAVAILABLE', 'Session persistence is unavailable')
      await onBound?.({ attemptId, sessionId, requestId, messageId: message.id })
      const remove = agent.ctx.on('session/event', (session, event) => {
        if (session !== agent.session || event.type !== 'turn/start') return
        evidence.turnNumber = event.data.turn
      })
      try {
        record.abort.signal.throwIfAborted()
        agent.followup(message)
        await agent.whenIdle()
      } finally { remove?.() }
      if (record.cancelled) throw failure('WORKFLOW_CANCELLED', 'Stage cancelled')
      await onObserved?.({ attemptId, sessionId, requestId, messageId: message.id, turnNumber: evidence.turnNumber })
      evidence.flushConfirmed = await sessions.flush(agent.session)
      if (!evidence.flushConfirmed) throw failure('WORKFLOW_FLUSH_UNAVAILABLE', 'Session persistence is unavailable')
      const raw = await readRaw(sessionId)
      result = resultFromLog(raw.header, raw.events, { sessionId, requestId, messageId: message.id, prompt, cwd })
      Object.assign(evidence, result.evidence)
    } catch (error) { issue = error }
    finally {
      try {
        if (record.handle) await record.handle.dispose()
        evidence.ownedJobCount = runningJobs(sessionId).length
        evidence.quiescent = !agents.get(sessionId) && evidence.ownedJobCount === 0
        if (!created && issue?.code === 'WORKFLOW_REUSE_FORBIDDEN') evidence.quiescent = false
      } catch (error) { issue ??= error; evidence.quiescent = false }
      signal?.removeEventListener('abort', abort)
      active.delete(attemptId)
      record.finish()
    }
    if (record.cancelled) issue = failure('WORKFLOW_CANCELLED', 'Stage cancelled')
    if (issue || !result || !evidence.quiescent) throw new DshExecutionError(issue?.code ?? 'WORKFLOW_EXECUTION_UNKNOWN', issue?.message ?? 'Stage execution is not complete', evidence, issue)
    evidence.completed = true
    return { ...result, evidence }
  }
  return { run, cancel,
    async inspectReadonly(request) {
      const evidence = { kind: 'dsh-session-log', ...request, completed: false, quiescent: false, flushConfirmed: false }
      if (!await persistence.stat(request.sessionId, { signal: request.signal })) return { status: 'missing', evidence }
      const raw = await readRaw(request.sessionId, request.signal)
      try { return { status: 'completed-evidence', ...resultFromLog(raw.header, raw.events, request) } }
      catch (error) { return { status: 'unknown', code: error.code, evidence } }
    },
    async dispose() { closed = true; const records = [...active.entries()]; for (const [id] of records) cancel(id); await Promise.all(records.map(([, record]) => record.done)) },
  }
}
