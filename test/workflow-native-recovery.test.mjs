// @vitest-environment node
import { describe, expect, it, vi } from 'vitest'
import { withStoppedNativeExecution } from '../workflow/dsh-adapter.js'

function boot({ live = true, phase = 'idle', end = true, jobs = [], missing = false, bound = true } = {}) {
  const attempt = { id: 'attempt', sessionId: 'session', requestId: 'request', messageId: bound ? 'message' : null,
    turnNumber: bound ? 1 : null, prompt: 'Original stage input', executorSnapshot: { policy: 'dsh-native/v1', cwd: '/fixture' } }
  const events = missing ? [] : [
    { type: 'turn/start', data: { turn: 1 } },
    { type: 'user/message', data: { id: 'message', source: { rpcId: 'request' }, content: [{ type: 'text', text: attempt.prompt }] } },
    ...(end ? [{ type: 'turn/end', data: { turn: 1, reason: { kind: 'interrupted' } } }] : []),
  ].map((event, seq) => ({ seq, ...event }))
  let owned = false
  const handle = { header: { id: 'session', cwd: '/fixture' }, read: vi.fn(async () => ({ events })), close: vi.fn(async () => { owned = false }) }
  const agent = { phase: { kind: phase }, session: { id: 'session' }, cancel: vi.fn(),
    runMaintenance: vi.fn(async callback => { owned = true; try { return await callback(new AbortController().signal) } finally { owned = false } }) }
  const services = { agents: { get: vi.fn(() => live ? agent : undefined), resume: vi.fn(), create: vi.fn() },
    sessions: { flush: vi.fn(async () => true) }, jobs: { list: vi.fn(() => jobs) },
    sessionPersistence: { stat: vi.fn(async () => missing ? undefined : {}), open: vi.fn(async (_id, access) => { if (access === 'write') owned = true; return handle }) } }
  const commit = vi.fn(evidence => { expect(owned || evidence.ownership === 'session-absent').toBe(true); return { state: 'terminated', evidence } })
  return { attempt, agent, events, handle, services, commit, ctx: { get: name => services[name] } }
}

describe('native interrupted execution recovery', () => {
  it('settles inside native idle maintenance and correlates only the original turn after later chat has stopped', async () => {
    const h = boot()
    h.events.push({ seq: 3, type: 'turn/start', data: { turn: 2 } },
      { seq: 4, type: 'user/message', data: { id: 'later', source: { rpcId: 'later' }, content: [{ type: 'text', text: 'Continue' }] } },
      { seq: 5, type: 'turn/end', data: { turn: 2, reason: { kind: 'aborted' } } })
    const result = await withStoppedNativeExecution(h.ctx, h.attempt, h.commit)
    expect(result).toMatchObject({ state: 'terminated', evidence: { kind: 'dsh-native-stop', ownership: 'live-idle', turnNumber: 1, endSeq: 2, endReason: 'interrupted', logLastSeq: 5 } })
    expect(h.agent.runMaintenance).toHaveBeenCalledOnce()
    expect(h.agent.cancel).not.toHaveBeenCalled()
    expect(h.services.agents.resume).not.toHaveBeenCalled()
    expect(h.handle.close).toHaveBeenCalledOnce()
  })

  it('takes exclusive persistence ownership for a cold session, including a crash with no terminal log event', async () => {
    const h = boot({ live: false, end: false })
    await expect(withStoppedNativeExecution(h.ctx, h.attempt, h.commit)).rejects.toMatchObject({ code: 'WF_RECOVERY_CONFIRM_REQUIRED' })
    expect(h.commit).not.toHaveBeenCalled()
    expect(await withStoppedNativeExecution(h.ctx, h.attempt, h.commit, { confirmedStopped: true })).toMatchObject({ evidence: { ownership: 'exclusive-session', endReason: 'owner_released', endSeq: null, operatorConfirmedStopped: true } })
    expect(h.services.sessionPersistence.open).toHaveBeenCalledTimes(2)
    expect(h.services.sessionPersistence.open).toHaveBeenLastCalledWith('session', 'write')
    expect(h.services.agents.resume).not.toHaveBeenCalled()
    expect(h.handle.close).toHaveBeenCalledTimes(2)
  })
  it('does not equate a cold interrupted Host with stopped commands even when a turn-end record exists', async () => {
    const h = boot({ live: false })
    h.attempt.state = 'unknown'
    await expect(withStoppedNativeExecution(h.ctx, h.attempt, h.commit)).rejects.toMatchObject({ code: 'WF_RECOVERY_CONFIRM_REQUIRED' })
    expect(h.commit).not.toHaveBeenCalled()
  })

  it('can settle a prepared attempt that never created a persistent session or dispatched input', async () => {
    const h = boot({ live: false, missing: true, bound: false })
    expect(await withStoppedNativeExecution(h.ctx, h.attempt, h.commit)).toMatchObject({ evidence: { ownership: 'session-absent', endReason: 'not_dispatched' } })
    expect(h.services.sessionPersistence.open).not.toHaveBeenCalled()
  })

  it.each([{ phase: 'turn' }, { jobs: [{ owner: 'session', status: 'running' }] }, { jobs: [{ owner: 'session', status: 'stopping' }] }])(
    'does not cancel or release a busy native session/job: %j', async options => {
      const h = boot(options)
      await expect(withStoppedNativeExecution(h.ctx, h.attempt, h.commit)).rejects.toMatchObject({ code: 'WF_RECOVERY_RUNNING' })
      expect(h.commit).not.toHaveBeenCalled(); expect(h.agent.cancel).not.toHaveBeenCalled()
    })

  it('does not release when another process owns the session, or when a job appears during inspection', async () => {
    const locked = boot({ live: false })
    locked.services.sessionPersistence.open.mockRejectedValue(new Error('Owned elsewhere'))
    await expect(withStoppedNativeExecution(locked.ctx, locked.attempt, locked.commit)).rejects.toMatchObject({ code: 'WF_RECOVERY_UNCONFIRMED' })
    expect(locked.commit).not.toHaveBeenCalled()
    const changed = boot()
    changed.handle.read.mockImplementation(async () => { changed.services.jobs.list.mockReturnValue([{ owner: 'session', status: 'running' }]); return { events: changed.events } })
    await expect(withStoppedNativeExecution(changed.ctx, changed.attempt, changed.commit)).rejects.toMatchObject({ code: 'WF_RECOVERY_RUNNING' })
    expect(changed.commit).not.toHaveBeenCalled(); expect(changed.handle.close).toHaveBeenCalledOnce()
  })

  it.each(['session', 'message', 'prompt', 'turn', 'sequence'])('refuses mismatched %s evidence without changing state', async mismatch => {
    const h = boot()
    if (mismatch === 'session') h.handle.header.id = 'other'
    if (mismatch === 'message') h.events[1].data.id = 'other'
    if (mismatch === 'prompt') h.events[1].data.content[0].text = 'Changed input'
    if (mismatch === 'turn') h.events[0].data.turn = 8
    if (mismatch === 'sequence') h.events[1].seq = 9
    await expect(withStoppedNativeExecution(h.ctx, h.attempt, h.commit)).rejects.toMatchObject({ code: 'WF_RECOVERY_UNCONFIRMED' })
    expect(h.commit).not.toHaveBeenCalled(); expect(h.handle.close).toHaveBeenCalledOnce()
  })
})
