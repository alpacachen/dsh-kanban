// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { projectStageTrace, stageEventWindow } from '../workflow/stage-trace.js'

const attempt = { id: 'attempt', visitId: 'visit', sessionId: 'session', requestId: 'request', messageId: 'user', turnNumber: 1, state: 'succeeded', createdAt: 0, settledAt: 1000 }
const task = { id: 'task', workflowId: 'flow', workflowVersionId: 'v1', versionNumber: 1, visits: [{ id: 'visit', stageId: 'work' }] }
const event = (seq, type, time, data) => ({ seq, type, time, data })
const events = [
  event(0, 'system/message', 0, { message: { content: [{ type: 'text', text: 'not returned' }] } }),
  event(1, 'turn/start', 10, { turn: 1 }),
  event(2, 'step/start', 20, { turn: 1, step: 1 }),
  event(3, 'user/message', 21, { id: 'user', content: [{ type: 'text', text: 'Input material' }], source: { rpcId: 'request' } }),
  event(4, 'request/header', 22, { header: { secret: 'connection data' } }),
  event(5, 'assistant/message', 100, { turn: 1, step: 1, message: { content: [{ type: 'reasoning', text: 'Recorded model reasoning' }, { type: 'text', text: 'Read files' }] }, stream: [{ time0: 40 }], usage: { inputTokens: 100, outputTokens: 30 } }),
  event(6, 'tool/call', 110, { turn: 1, step: 1, callId: 'a', name: 'read', arguments: '{"path":"a"}' }),
  event(7, 'tool/call', 120, { turn: 1, step: 1, callId: 'b', name: 'read', arguments: '{"path":"b"}' }),
  event(8, 'tool/result', 200, { turn: 1, step: 1, message: { toolCallId: 'a', content: [{ type: 'text', text: 'File A' }] } }),
  event(9, 'tool/result', 250, { turn: 1, step: 1, message: { toolCallId: 'b', isError: true, content: [{ type: 'text', text: 'Missing file' }] } }),
  event(10, 'llm/retry', 260, { delayMs: 100, transportUrl: 'not returned' }),
  event(11, 'turn/end', 300, { turn: 1, reason: { kind: 'completed' } }),
  event(12, 'turn/start', 500, { turn: 2 }),
  event(13, 'user/message', 510, { id: 'later', content: [{ type: 'text', text: 'Unrelated later chat' }], source: { rpcId: 'later' } }),
]
describe('stage trace for history optimization', () => {
  it('reads the stage turn only, preserving conversations, native timing and token data without transport headers', () => {
    const bounded = stageEventWindow(events, attempt)
    expect(bounded.at(-1).seq).toBe(11)
    const trace = projectStageTrace(task, attempt, bounded, { firstTokenTime: stream => stream[0]?.time0 })
    expect(trace.summary).toMatchObject({ stageElapsedMs: 1000, toolCallCount: 2, toolFailureCount: 1, observedToolWallMs: 140, retryCount: 1 })
    expect(trace.tools.map(tool => tool.elapsedMs)).toEqual([90, 130])
    expect(trace.modelResponses[0]).toMatchObject({ firstOutputWaitMs: 20, stepToResponseMs: 80, usage: { inputTokens: 100, outputTokens: 30 } })
    expect(trace.entries.find(entry => entry.type === 'assistant/message').content[0].text).toBe('Recorded model reasoning')
    expect(trace.entries.find(entry => entry.type === 'tool/call').arguments).toBe('{"path":"a"}')
    expect(JSON.stringify(trace)).not.toMatch(/connection data|transportUrl|Unrelated later chat|not returned/)
  })
  it('paginates transcript entries while summaries cover the entire attempt and missing timing stays unknown', () => {
    const bounded = stageEventWindow(events, attempt), first = projectStageTrace(task, attempt, bounded, { limit: 2 })
    expect(first.entries).toHaveLength(2)
    const next = projectStageTrace(task, attempt, bounded, { fromSeq: first.nextFromSeq, limit: 2 })
    expect(next.entries[0].seq).toBeGreaterThan(first.entries.at(-1).seq)
    expect(next.summary).toEqual(first.summary)
    expect(first.modelResponses[0].firstOutputWaitMs).toBeNull()
    expect(() => stageEventWindow(events, { ...attempt, requestId: 'wrong' })).toThrow(expect.objectContaining({ code: 'WF_TRACE_UNAVAILABLE' }))
  })
})
