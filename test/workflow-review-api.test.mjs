// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import { Context } from '@deepseek-ai/cordis'
import { mountWorkflowReviewApi, WORKFLOW_REVIEW_NAMESPACE as namespace } from '../workflow/review-api.js'

// Reuse the existing development dependency, without installation or profile access.
// Peer/Invocation fixtures below simulate Gateway admission; they are not real credentials.
const require = createRequire(import.meta.url)
const toolsRequire = createRequire(require.resolve('@deepseek-ai/dsh-tools'))
const protocol = await import(pathToFileURL(toolsRequire.resolve('@deepseek-ai/dsh-typert-protocol')).href)
const roots = []
afterEach(async () => {
  for (const root of roots.splice(0)) await root.fiber.dispose()
})

const command = (overrides = {}) => ({
  taskId: 'task-1', reviewId: 'review-1', subjectHash: 'a'.repeat(64),
  expectedRevision: 3, requestId: 'request-1', decision: 'approved', feedback: '',
  ...overrides,
})

async function boot() {
  const root = new Context()
  roots.push(root)
  const peerAbort = new AbortController()
  const connection = { browserPeer: { id: 'browser-1', principal: { kind: 'owner' }, signal: peerAbort.signal } }
  const core = {
    decideReview: vi.fn(async () => ({ id: 'task-1', state: 'completed' })),
    getTask: vi.fn(async (id) => ({ id, text: '<script>not executed</script>' })),
    listTasks: vi.fn(async () => []),
  }
  // Sibling providers exercise real Cordis injection instead of root object shortcuts.
  await root.plugin({ apply(ctx) {
    ctx.provide('connection', connection)
    ctx.provide('typertGateway', {})
  } })
  const fiber = mountWorkflowReviewApi(root, core, protocol)
  await fiber
  const call = (method = 'decideReview', overrides = {}) => {
    const invocation = {
      service: namespace, request: { namespace, method, args: {} },
      peer: connection.browserPeer, signal: new AbortController().signal, ...overrides,
    }
    return root.extend({ invocation }).get(namespace)
  }
  return { root, core, connection, peerAbort, fiber, call }
}

describe('Workflow browser-only review API', () => {
  it('registers only the three intended Remote methods and no Agent tools', async () => {
    const { root } = await boot()
    expect(protocol.remoteMethods(root.get(namespace)).map(entry => entry.method))
      .toEqual(['decideReview', 'getTask', 'listTasks'])
    expect(root.get('tools')).toBeUndefined()
  })

  it.each(['approved', 'returned', 'terminated'])('admits the exact browser Peer for %s', async (decision) => {
    const { core, call } = await boot()
    const request = command({ decision, feedback: decision === 'returned' ? 'Please revise the conclusion.' : '' })
    await expect(call().decideReview(request)).resolves.toEqual({ id: 'task-1', state: 'completed' })
    expect(core.decideReview).toHaveBeenCalledExactlyOnceWith(request,
      { kind: 'user', id: 'owner', source: 'workflow-review-ui' })
    expect(Object.isFrozen(core.decideReview.mock.calls[0][1])).toBe(true)
  })

  it('rejects direct Host/Agent service calls without invoking any core function', async () => {
    const { root, core } = await boot()
    const api = root.get(namespace)
    await expect(api.decideReview(command())).rejects.toMatchObject({ code: 'workflow/browser-required' })
    await expect(api.getTask('task-1')).rejects.toMatchObject({ code: 'workflow/browser-required' })
    await expect(api.listTasks()).rejects.toMatchObject({ code: 'workflow/browser-required' })
    for (const operation of Object.values(core)) expect(operation).not.toHaveBeenCalled()
  })

  it.each([
    ['absent Peer', () => ({ peer: undefined })],
    ['independent API owner Peer', ({ connection }) => ({ peer: { ...connection.browserPeer } })],
    ['non-owner Peer', ({ connection }) => ({ peer: { ...connection.browserPeer, principal: { kind: 'agent' } } })],
    ['unrelated service', () => ({ service: 'sessionController' })],
    ['unrelated namespace', () => ({ request: { namespace: 'session', method: 'decideReview' } })],
    ['borrowed read invocation', () => ({ request: { namespace, method: 'getTask' } })],
    ['absent request descriptor', () => ({ request: undefined })],
  ])('rejects %s before calling business code', async (_name, override) => {
    const host = await boot()
    await expect(host.call('decideReview', override(host)).decideReview(command()))
      .rejects.toMatchObject({ code: 'workflow/browser-required' })
    expect(host.core.decideReview).not.toHaveBeenCalled()
  })

  it('rejects even the browser Peer if its principal is not owner', async () => {
    const { connection, call, core } = await boot()
    connection.browserPeer.principal = { kind: 'agent' }
    await expect(call().decideReview(command())).rejects.toMatchObject({ code: 'workflow/browser-required' })
    expect(core.decideReview).not.toHaveBeenCalled()
  })

  it('refuses a disposed browser Peer before a decision', async () => {
    const { peerAbort, call, core } = await boot()
    peerAbort.abort()
    await expect(call().decideReview(command())).rejects.toMatchObject({ code: 'workflow/browser-required' })
    expect(core.decideReview).not.toHaveBeenCalled()
  })

  it('does not start the business operation for an already-cancelled request', async () => {
    const { call, core } = await boot()
    await expect(call('decideReview', { signal: AbortSignal.abort() }).decideReview(command()))
      .rejects.toMatchObject({ code: 'workflow/cancelled' })
    expect(core.decideReview).not.toHaveBeenCalled()
  })

  it.each([
    { actor: { kind: 'user', id: 'owner' } },
    { peer: { principal: { kind: 'owner' } } },
    { invocation: { service: namespace } },
    { path: '/private/database.sqlite' },
    { sql: 'DELETE FROM reviews' },
    { expectedTaskRevision: 3 },
    { taskId: '../task-1' }, { taskId: '' }, { reviewId: null },
    { requestId: 'request-1; DROP TABLE review' }, { requestId: 'r'.repeat(129) },
    { subjectHash: '' }, { subjectHash: 'not-a-hash' }, { subjectHash: null },
    { expectedRevision: -1 }, { expectedRevision: 1.5 }, { expectedRevision: '3' },
    { expectedRevision: Number.MAX_SAFE_INTEGER + 1 }, { expectedRevision: NaN },
    { decision: 'approve' }, { decision: '__proto__' },
    { feedback: null }, { feedback: 'x'.repeat(10001) },
    { decision: 'returned', feedback: '' }, { decision: 'returned', feedback: ' \n\t' },
  ])('refuses invalid or authority-bearing request fields: %j', async (fields) => {
    const { call, core } = await boot()
    await expect(call().decideReview(command(fields))).rejects.toMatchObject({ code: 'workflow/invalid-input' })
    expect(core.decideReview).not.toHaveBeenCalled()
  })

  it.each([null, undefined, [], 'approve', new Date(), Object.create({ taskId: 'task-1' })])(
    'refuses non-record requests', async (input) => {
      const { call, core } = await boot()
      await expect(call().decideReview(input)).rejects.toMatchObject({ code: 'workflow/invalid-input' })
      expect(core.decideReview).not.toHaveBeenCalled()
    },
  )

  it('authenticates before looking at even an invalid payload', async () => {
    const { root, core } = await boot()
    await expect(root.get(namespace).decideReview(null)).rejects.toMatchObject({ code: 'workflow/browser-required' })
    expect(core.decideReview).not.toHaveBeenCalled()
  })

  it('passes reads through the same browser-only boundary, preserving text as data', async () => {
    const { call, core } = await boot()
    await expect(call('getTask').getTask('task-1')).resolves.toEqual({ id: 'task-1', text: '<script>not executed</script>' })
    await expect(call('listTasks').listTasks()).resolves.toEqual([])
    expect(core.getTask).toHaveBeenCalledExactlyOnceWith('task-1')
    expect(core.listTasks).toHaveBeenCalledExactlyOnceWith()
    await expect(call('getTask').getTask('../../profile')).rejects.toMatchObject({ code: 'workflow/invalid-input' })
    expect(core.getTask).toHaveBeenCalledTimes(1)
  })

  it('keeps actor identity stable when the browser Peer is replaced', async () => {
    const { connection, call, core } = await boot()
    await call().decideReview(command())
    connection.browserPeer = { ...connection.browserPeer, id: 'replacement-browser' }
    await call().decideReview(command())
    expect(core.decideReview.mock.calls[0]).toEqual(core.decideReview.mock.calls[1])
    expect(core.decideReview.mock.calls[1][1]).not.toHaveProperty('peerId')
  })

  it('preserves safe WF business failures without reimplementing their decisions', async () => {
    const { call, core } = await boot()
    core.decideReview.mockRejectedValue(Object.assign(new Error('This review has already been decided.'), { code: 'WF_REVIEW_CONFLICT' }))
    await expect(call().decideReview(command())).rejects.toMatchObject({
      code: 'workflow/review-conflict', message: 'This review has already been decided.',
      details: { code: 'WF_REVIEW_CONFLICT' }, isDSHRemoteError: true,
    })
    expect(core.decideReview).toHaveBeenCalledTimes(1)
  })

  it('does not disclose unexpected SQL, paths or error details', async () => {
    const { call, core } = await boot()
    core.decideReview.mockRejectedValue(new Error('SQLITE_CORRUPT /private/profile/workflow.sqlite SELECT secret'))
    await expect(call().decideReview(command())).rejects.toMatchObject({
      code: 'workflow/internal', message: 'The workflow operation could not be completed.', details: {},
    })
  })

  it('maps malformed core failures to the same opaque internal error', async () => {
    const { call, core } = await boot()
    core.decideReview.mockRejectedValue({ code: Symbol('private'), message: 'private details' })
    await expect(call().decideReview(command())).rejects.toMatchObject({
      code: 'workflow/internal', message: 'The workflow operation could not be completed.', details: {},
    })
  })

  it('withdraws its service when the mounting fiber is disposed', async () => {
    const { root, fiber } = await boot()
    await fiber.dispose()
    expect(root.get(namespace)).toBeUndefined()
  })
})
