// Offline contract check against the installed DSH, not the live GUI or profile.
// Desktop invocation:
// ELECTRON_RUN_AS_NODE=1 "$DSH_NODE_EXECUTABLE" scripts/check-workflow-gateway.mjs
// DSH_INSTALL_DIR must be the installed @deepseek-ai/dsh package directory.
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { isAbsolute, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { mountWorkflowReviewApi, WORKFLOW_REVIEW_NAMESPACE as namespace } from '../workflow/review-api.js'

const installDir = process.env.DSH_INSTALL_DIR
assert.ok(typeof installDir === 'string' && isAbsolute(installDir), 'Set DSH_INSTALL_DIR to the absolute installed DSH package directory.')
const anchor = join(installDir, 'package.json')
const runtimeRequire = createRequire(anchor)
const manifest = runtimeRequire(anchor)
assert.equal(manifest.name, '@deepseek-ai/dsh')
assert.equal(manifest.version, '0.2.2-rc.3', 'Review the installed contracts before widening this version check.')
const load = name => import(pathToFileURL(runtimeRequire.resolve(name)).href)
const protocolPath = runtimeRequire.resolve('@deepseek-ai/dsh-typert-protocol')
const gatewayRequire = createRequire(runtimeRequire.resolve('@deepseek-ai/dsh-api-gateway'))
assert.equal(gatewayRequire.resolve('@deepseek-ai/dsh-typert-protocol'), protocolPath, 'Gateway and plugin must use the same protocol entry.')
const { Context } = await load('@deepseek-ai/cordis')
const protocol = await load('@deepseek-ai/dsh-typert-protocol')
const { TypertGatewayService } = await load('@deepseek-ai/dsh-api-gateway')

const root = new Context()
const internalErrors = [], calls = []
root.on('internal/error', error => internalErrors.push(error))
const peerAbort = new AbortController()
const browserPeer = { id: 'fixture-browser', principal: { kind: 'owner' }, signal: peerAbort.signal }
const actor = { kind: 'user', id: 'owner', source: 'workflow-review-ui' }
let intercepted
const core = Object.fromEntries(['decideReview', 'createTask', 'terminateTask', 'getTask', 'listTasks'].map(method => [method, (...args) => {
  calls.push({ method, args })
  if (['decideReview', 'createTask', 'terminateTask'].includes(method)) assert.deepEqual(args[1], actor)
  return { fixture: true, method }
}]))
const review = {
  taskId: 'fixture-task', reviewId: 'fixture-review', subjectHash: 'a'.repeat(64),
  expectedRevision: 1, requestId: 'fixture-review-command', decision: 'approved', feedback: '',
}
const requests = {
  decideReview: review,
  createTask: { requestId: 'fixture-create-command', workspaceId: 'fixture-workspace', title: 'Fixture only',
    text: 'No real task is created.', modelSelection: { provider: 'fixture-provider', model: 'fixture-model' } },
  terminateTask: { requestId: 'fixture-terminate-command', taskId: 'fixture-task', expectedRevision: 1 },
}
const invoke = (method, args, peer = browserPeer, signal) => root.get('typertGateway').invoke({ namespace, method, args, peer, signal })
const assertRefused = async (operation, code) => {
  const count = calls.length
  await assert.rejects(operation, error => error.code === code)
  assert.equal(calls.length, count, 'Refused request must not enter core.')
}

try {
  // Only dependency fixtures are registered. No real Connection, webServer,
  // persistence, Agent, model provider, credentials or business database exists.
  await root.plugin({ apply(ctx) {
    ctx.provide('typert', {
      local: { get() {}, hasSeen() { return false } },
      lookups: { definitions() { return [] } }, resources: { entries() { return [] } },
    })
    ctx.provide('remoteAccess', { decide() { return { kind: 'deny', reason: 'no-allow' } } })
    ctx.provide('connection', {
      browserPeer,
      rpc: { intercept(channel, matches, handler) {
        assert.equal(intercepted, undefined, 'Exactly one Gateway interceptor is expected.')
        intercepted = { channel, matches, handler }
        return async () => {}
      } },
    })
  } })
  await root.plugin(TypertGatewayService, {})
  const fiber = mountWorkflowReviewApi(root, core, protocol)
  await fiber
  assert.equal(intercepted.channel, '/api')

  for (const [method, request] of Object.entries(requests)) {
    assert.equal(intercepted.matches(`${namespace}/${method}`), true, `SRC did not discover ${method}`)
    await assertRefused(() => invoke(method, { request }, { ...browserPeer }), 'workflow/browser-required')
    await assertRefused(() => invoke(method, { request }, { ...browserPeer, principal: { kind: 'agent' } }), 'remote-access/denied')
    await assertRefused(() => root.get(namespace)[method](request), 'workflow/browser-required')
    await assertRefused(() => invoke(method, { request: { ...request, actor } }), 'workflow/invalid-input')
    // The actual Gateway normalizes an already-aborted carrier to gateway/cancelled.
    await assertRefused(() => invoke(method, { request }, browserPeer, AbortSignal.abort()), 'gateway/cancelled')
    const before = calls.length
    const result = await intercepted.handler(`${namespace}/${method}`, { args: { request } }, new AbortController().signal, browserPeer)
    assert.deepEqual(result, { ok: true, value: { fixture: true, method } })
    assert.equal(calls.length, before + 1)
    assert.equal(calls.at(-1).method, method)
  }
  for (const decision of ['returned', 'terminated']) {
    const request = { ...review, requestId: `fixture-${decision}`, decision, feedback: decision === 'returned' ? 'Revise the fixture.' : '' }
    await invoke('decideReview', { request })
    assert.equal(calls.at(-1).args[0].decision, decision)
  }
  for (const [method, args, positional] of [['getTask', { taskId: 'fixture-task' }, ['fixture-task']], ['listTasks', {}, []]]) {
    assert.equal(intercepted.matches(`${namespace}/${method}`), true)
    await assertRefused(() => invoke(method, args, { ...browserPeer }), 'workflow/browser-required')
    await invoke(method, args)
    assert.deepEqual(calls.at(-1), { method, args: positional })
  }
  assert.equal(calls.length, 7, 'Only the seven admitted fixture operations may reach core.')
  peerAbort.abort()
  await assertRefused(() => invoke('decideReview', { request: review }), 'gateway/peer-disposed')
  await fiber.dispose()
  assert.equal(root.get(namespace), undefined)
  assert.deepEqual(internalErrors, [])
  console.log(`PASS: DSH ${manifest.version}; shared protocol module; five JS SRC endpoints; browser-only admission; seven fixture core calls; disposal.`)
  console.log('No server, real browser credential, Agent, model request, approval or business store was used. This is not a live GUI or persistence test.')
} finally {
  await root.fiber.dispose()
}
