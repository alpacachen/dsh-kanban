// @vitest-environment node
import { describe, it, expect, vi } from 'vitest'
import { randomUUID } from 'node:crypto'
import { createDshExecutor, NATIVE_POLICY } from '../workflow/dsh-adapter.js'
const input = () => ({ attemptId: randomUUID(), sessionId: randomUUID(), requestId: randomUUID(), prompt: 'Research this project', cwd: '/tmp/workflow-fixture' })
function harness({ hold = false, endReason = 'completed', endError, failDispose = false, failFlush = false, corrupt = false } = {}) {
  const stored = new Map(), live = new Map(), listeners = new Set()
  let release, ready
  const started = new Promise(resolve => { ready = resolve })
  const gate = new Promise(resolve => { release = resolve })
  const tools = { setExecutor: vi.fn(), restrict: vi.fn(), guard: vi.fn() }
  const services = {
    sessions: { get: id => live.get(id)?.session, flush: vi.fn(async session => { stored.set(session.id, structuredClone({ header: session.header, events: session.events })); return !failFlush }) },
    sessionPersistence: { stat: async id => stored.get(id), open: vi.fn(async id => ({ header: stored.get(id).header, read: async () => ({ events: stored.get(id).events }), close: vi.fn() })) },
    agentPresets: { resolve: vi.fn(async () => ({ id: 'host-default' })), mount: vi.fn(async ctx => { ctx.nativeTools = true }) },
    agentDefaultModel: { currentSelection: () => ({ provider: 'fixture', model: 'fixture', reasoningEffort: 'ultra' }) },
    jobs: { list: vi.fn(() => []) },
  }
  let agent, spec
  services.agents = { get: id => live.get(id), withoutInitiator: callback => callback(), create: vi.fn(async value => {
    spec = value
    let work = Promise.resolve(), stopped = false
    const session = { header: { id: value.sessionId, version: 4, ...value.meta }, events: [] }
    session.id = value.sessionId
    const append = (type, data) => { const event = { seq: session.events.length, type, data }; session.events.push(event); for (const listener of listeners) listener(session, event) }
    const ctx = { tools, on: (_name, listener) => { listeners.add(listener); return () => listeners.delete(listener) } }
    agent = { id: value.sessionId, ctx, session, cancel: vi.fn(() => { stopped = true; release() }), whenIdle: () => work,
      followup: message => { work = (async () => {
        append('turn/start', { turn: 1 }); append('user/message', corrupt ? { ...message, content: [{ type: 'text', text: 'changed' }] } : message)
        ready(); if (hold) await gate
        // Native PTC, compaction and retry events belong to DSH, not a Workflow allowlist.
        for (let i = 0; i < 140; i++) append('tool/call', { name: 'host_native_tool', callId: `call-${i}` })
        append('assistant/attempt', { retry: true }); append('compaction/end', {})
        append('assistant/message', { turn: 1, message: { role: 'assistant', content: [{ type: 'text', text: 'Native report' }] } })
        append('turn/end', { turn: 1, reason: { kind: stopped ? 'interrupted' : endReason, ...(endError ? { error: endError } : {}) } })
      })() },
    }
    await value.setup(ctx, agent)
    live.set(agent.id, agent)
    return { agent, dispose: vi.fn(async () => { await work; if (failDispose) throw Error('dispose failed'); live.delete(agent.id) }) }
  }) }
  return { services, tools, stored, live, started, release, get agent() { return agent }, get spec() { return spec }, ctx: { get: name => services[name] } }
}
describe('Workflow uses the native DSH Agent', () => {
  it('loads the configured default preset and cwd, preserves Ultra, and never installs its own tool/permission policy', async () => {
    const h = harness(), install = vi.fn(), executor = createDshExecutor(h.ctx, { installModelSelection: install }), request = input()
    const output = await executor.run(request)
    expect(h.services.agentPresets.resolve).toHaveBeenCalledExactlyOnceWith()
    expect(h.services.agentPresets.mount).toHaveBeenCalledWith(h.agent.ctx, 'host-default')
    expect(install).toHaveBeenCalledWith(h.agent.ctx)
    expect(h.spec.meta).toEqual({ cwd: request.cwd, agentPreset: 'host-default' })
    expect(h.spec.agentOptions).toEqual({ provider: 'fixture', model: 'fixture', reasoningEffort: 'ultra' })
    for (const method of Object.values(h.tools)) expect(method).not.toHaveBeenCalled()
    expect(output).toMatchObject({ text: 'Native report', evidence: { completed: true, quiescent: true, policy: NATIVE_POLICY, toolInvocationCount: 140 } })
    expect(await executor.inspectReadonly(request)).toMatchObject({ status: 'completed-evidence', text: 'Native report' })
    expect(h.live.size).toBe(0)
  })
  it('pins the requested task model without overriding provider output settings', async () => {
    const h = harness(), selection = { provider: 'other', model: 'other', reasoningEffort: 'ultra' }
    await createDshExecutor(h.ctx).run({ ...input(), modelSelection: selection })
    expect(h.spec.agentOptions).toEqual(selection)
    expect(h.spec.agentOptions).not.toHaveProperty('maxTokens')
  })
  it('does not drive the model before durable binding', async () => {
    const h = harness(), onBound = vi.fn(async () => { throw Error('database unavailable') })
    await expect(createDshExecutor(h.ctx).run({ ...input(), onBound })).rejects.toMatchObject({ evidence: { completed: false, quiescent: true } })
    expect(h.agent.session.events).toHaveLength(0)
  })
  it.each([['interrupted', 'WORKFLOW_MODEL_INTERRUPTED'], ['error', 'WORKFLOW_MODEL_FAILED'], ['max-tokens', 'WORKFLOW_MODEL_INCOMPLETE']])('does not advance a stage after native %s', async (endReason, code) => {
    const h = harness({ endReason })
    await expect(createDshExecutor(h.ctx).run(input())).rejects.toMatchObject({ code, evidence: { completed: false, quiescent: true } })
  })
  it('reports a correlated native transport failure without calling it corrupt or exposing provider text', async () => {
    const h = harness({ endReason: 'error', endError: { code: 'TRANSPORT', message: 'private provider URL and credential' } })
    await expect(createDshExecutor(h.ctx).run(input())).rejects.toMatchObject({ code: 'WORKFLOW_NETWORK_FAILED', message: 'Native model execution failed.', evidence: { completed: false, quiescent: true } })
  })
  it('rejects a result belonging to changed input', async () => {
    await expect(createDshExecutor(harness({ corrupt: true }).ctx).run(input())).rejects.toMatchObject({ code: 'WORKFLOW_LOG_UNKNOWN' })
  })
  it('keeps a stage waiting for native authorization until completion or user cancellation, without a deadline', async () => {
    vi.useFakeTimers()
    const h = harness({ hold: true }), executor = createDshExecutor(h.ctx), request = input()
    try {
      const result = executor.run(request), cancelled = expect(result).rejects.toMatchObject({ code: 'WORKFLOW_CANCELLED', evidence: { quiescent: true } })
      await h.started; await vi.advanceTimersByTimeAsync(600001)
      expect(h.agent.cancel).not.toHaveBeenCalled()
      expect(executor.cancel(request.attemptId)).toEqual({ requested: true })
      await cancelled
    } finally { await executor.dispose(); vi.useRealTimers() }
  })
  it('disposes native work when the caller aborts', async () => {
    const h = harness({ hold: true }), controller = new AbortController(), executor = createDshExecutor(h.ctx)
    const pending = executor.run({ ...input(), signal: controller.signal }), cancelled = expect(pending).rejects.toMatchObject({ code: 'WORKFLOW_CANCELLED' })
    await h.started; controller.abort(); await cancelled
    expect(h.live.size).toBe(0)
  })
  it('does not claim stopped work when native disposal fails', async () => {
    await expect(createDshExecutor(harness({ failDispose: true }).ctx).run(input())).rejects.toMatchObject({ evidence: { completed: false, quiescent: false } })
  })
  it('does not accept output without confirmed persistence', async () => {
    await expect(createDshExecutor(harness({ failFlush: true }).ctx).run(input())).rejects.toMatchObject({ code: 'WORKFLOW_FLUSH_UNAVAILABLE' })
  })
  it('does not redispatch an existing task/session', async () => {
    const h = harness(), executor = createDshExecutor(h.ctx), request = input()
    await executor.run(request)
    await expect(executor.run(request)).rejects.toMatchObject({ code: 'WORKFLOW_REUSE_FORBIDDEN' })
    expect(h.services.agents.create).toHaveBeenCalledTimes(1)
  })
})
