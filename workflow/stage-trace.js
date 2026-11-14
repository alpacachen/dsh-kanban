const elapsed = (start, end) => Number.isFinite(start) && Number.isFinite(end) && end >= start ? end - start : null
const time = value => Number.isFinite(value) ? value : null
const stepKey = data => `${data.turn}:${data.step}`
const callKey = (data, id) => `${stepKey(data)}:${id}`

/** A stage Session may later be reopened for chat; only return this Attempt's own turn. */
export function stageEventWindow(events, attempt) {
  const fail = () => { throw Object.assign(new Error('本次阶段执行尚无可核对的完整会话起点。'), { code: 'WF_TRACE_UNAVAILABLE' }) }
  const input = events.find(event => event.type === 'user/message' && event.data?.source?.rpcId === attempt.requestId
    && (!attempt.messageId || event.data.id === attempt.messageId))
  if (!input) fail()
  const start = events.findLast(event => event.type === 'turn/start' && event.seq < input.seq)
  if (!start || attempt.turnNumber != null && start.data.turn !== attempt.turnNumber) fail()
  const end = events.find(event => event.type === 'turn/end' && event.seq > input.seq && event.data.turn === start.data.turn)
  const nextTurn = events.find(event => event.type === 'turn/start' && event.seq > start.seq)
  const last = end?.seq ?? (nextTurn ? nextTurn.seq - 1 : Infinity)
  return events.filter(event => event.seq >= start.seq && event.seq <= last)
}

/** Read-only, task-owned projections. Transport headers/configuration are never returned. */
export function projectStageTrace(task, attempt, events, { fromSeq = 0, limit = 50, firstTokenTime = () => undefined } = {}) {
  const starts = new Map(), calls = new Map(), tools = [], modelResponses = [], entries = []
  for (const event of events) {
    const data = event.data ?? {}, key = stepKey(data), at = time(event.time)
    if (event.type === 'step/start') starts.set(key, at)
    if (event.type === 'tool/call') {
      const tool = { callId: data.callId, name: data.name, turn: data.turn, step: data.step, startedAt: at, finishedAt: null, elapsedMs: null, isError: null }
      tools.push(tool); calls.set(callKey(data, data.callId), tool)
    }
    if (event.type === 'tool/result') {
      const tool = calls.get(callKey(data, data.message?.toolCallId))
      if (tool) { tool.finishedAt = at; tool.elapsedMs = elapsed(tool.startedAt, at); tool.isError = data.message?.isError === true }
    }
    if (event.type === 'assistant/message' || event.type === 'assistant/attempt') {
      let first = null
      try { first = time(firstTokenTime(data.stream ?? [])) } catch { /* Old logs may lack compatible stream timing. */ }
      const startedAt = starts.get(key) ?? null
      modelResponses.push({ seq: event.seq, turn: data.turn, step: data.step, stepStartedAt: startedAt, firstTokenAt: first, settledAt: at,
        stepToResponseMs: elapsed(startedAt, at), firstOutputWaitMs: elapsed(startedAt, first), usage: data.usage ?? null, interrupted: data.interrupted === true, hasMessage: event.type === 'assistant/message' })
    }
    let detail
    if (event.type === 'user/message') detail = { role: 'user', content: data.content, source: data.source?.kind ?? null }
    else if (event.type === 'developer/message') detail = { role: 'context', content: data.message?.content }
    else if (event.type === 'assistant/message') detail = { role: 'assistant', turn: data.turn, step: data.step, content: data.message?.content, usage: data.usage ?? null, interrupted: data.interrupted === true }
    else if (event.type === 'assistant/attempt') detail = { turn: data.turn, step: data.step, stream: (data.stream ?? []).filter(record => ['text-chunks', 'reasoning-chunks', 'tool-call-chunks'].includes(record.type)) }
    else if (event.type === 'tool/call') detail = { turn: data.turn, step: data.step, callId: data.callId, name: data.name, arguments: data.arguments }
    else if (event.type === 'tool/result') detail = { turn: data.turn, step: data.step, callId: data.message?.toolCallId, content: data.message?.content, isError: data.message?.isError === true, error: data.error ?? null }
    else if (['turn/start', 'turn/end', 'step/start', 'step/end'].includes(event.type)) detail = { turn: data.turn, step: data.step, reason: data.reason?.kind ?? null }
    else if (/^(approval\/|compaction\/|llm\/retry$)/.test(event.type)) detail = Object.fromEntries(Object.entries(data).filter(([name, value]) => ['id', 'requestId', 'callId', 'toolCallId', 'decision', 'status', 'turn', 'step', 'delayMs', 'attempt', 'code'].includes(name) && (value === null || ['string', 'number', 'boolean'].includes(typeof value))))
    if (detail) entries.push({ seq: event.seq, time: at, type: event.type, ...Object.fromEntries(Object.entries(detail).filter(([, value]) => value !== undefined)) })
  }
  const intervals = tools.filter(tool => tool.elapsedMs !== null).map(tool => [tool.startedAt, tool.finishedAt]).sort((a, b) => a[0] - b[0])
  let toolWallMs = 0, end = -Infinity
  for (const [start, finish] of intervals) { toolWallMs += Math.max(0, finish - Math.max(start, end)); end = Math.max(end, finish) }
  const selected = entries.filter(entry => entry.seq >= fromSeq), page = selected.slice(0, limit)
  const visit = task.visits.find(visit => visit.id === attempt.visitId)
  return { taskId: task.id, workflowId: task.workflowId, workflowVersionId: task.workflowVersionId, versionNumber: task.versionNumber,
    stageId: visit.stageId, attemptId: attempt.id, sessionId: attempt.sessionId, state: attempt.state, persistedOnly: true,
    summary: { stageElapsedMs: elapsed(attempt.createdAt, attempt.settledAt), modelResponseCount: modelResponses.length, toolCallCount: tools.length,
      toolFailureCount: tools.filter(tool => tool.isError).length, unfinishedToolCount: tools.filter(tool => tool.finishedAt === null).length,
      observedToolWallMs: tools.length && !intervals.length ? null : toolWallMs, retryCount: events.filter(event => event.type === 'llm/retry').length,
      compactionCount: events.filter(event => event.type === 'compaction/start').length, approvalRequestCount: events.filter(event => event.type === 'approval/requested').length },
    timingNotes: 'Times come from persisted DSH wall-clock events. Tool call-to-result includes any queue/authorization waiting; observedToolWallMs merges overlapping intervals. stepToResponseMs and firstOutputWaitMs begin at step/start, so they may include preparation and retry backoff. Missing measurements are null. Model-server internal queue time and tool-internal substeps are not measured here. Live persistence can lag.',
    tools, modelResponses, entries: page, nextFromSeq: selected.length > page.length ? page.at(-1).seq + 1 : null }
}
