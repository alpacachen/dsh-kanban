// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createRequire } from 'node:module'
import { pathToFileURL, fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import { Context } from '@deepseek-ai/cordis'
import { mountWorkflowReviewApi, validateWorkflowCommand, WORKFLOW_REVIEW_NAMESPACE as namespace } from '../workflow/review-api.js'
import { mountWorkflowManagementTools } from '../workflow/management-tools.js'

const require = createRequire(import.meta.url)
const toolsRequire = createRequire(require.resolve('@deepseek-ai/dsh-tools'))
const protocol = await import(pathToFileURL(toolsRequire.resolve('@deepseek-ai/dsh-typert-protocol')).href)
const roots = []
afterEach(async () => { for (const root of roots.splice(0)) await root.fiber.dispose() })

const selection = { provider: 'provider-1', model: 'model-1', reasoningEffort: 'medium' }
const definition = { description: 'A workflow', inputLabel: 'Input', inputHint: 'Enter text',
  stages: [{ id: 'draft', kind: 'agent', title: 'Draft', prompt: 'Summarize input.' },
    { id: 'review', kind: 'review', title: 'Review', returnStageId: 'draft' }] }
const commands = {
  createTask: { requestId: 'request-1', workspaceId: 'workspace-1', workflowId: 'workflow-1', title: 'Task', text: 'Input text', modelSelection: selection },
  deleteTaskFile: { requestId: 'request-1', taskId: 'task-1', path: 'reports/report.md', expectedVersion: 'file-version-1' },
  deleteTask: { requestId: 'request-1', taskId: 'task-1', expectedRevision: 1 },
  terminateTask: { requestId: 'request-1', taskId: 'task-1', expectedRevision: 1 },
  retryTask: { requestId: 'request-1', taskId: 'task-1', expectedRevision: 1 },
  reconcileTask: { requestId: 'request-1', taskId: 'task-1', expectedRevision: 1 },
  createWorkflow: { requestId: 'request-1', workspaceId: 'workspace-1', name: 'Workflow', definition },
  updateWorkflow: { requestId: 'request-1', workflowId: 'workflow-1', expectedRevision: 1, name: 'Workflow', definition },
  deleteWorkflow: { requestId: 'request-1', workflowId: 'workflow-1', expectedRevision: 1 },
}
const reads = { listWorkflows: ['workspace-1'], getWorkflow: ['workflow-1'], getArtifact: ['task-1', 'artifact-1'],
  listTasks: ['workspace-1'], getTask: ['task-1'], getTaskFiles: ['task-1'], getTaskFile: ['task-1', 'notes/report.md'] }
const calls = Object.fromEntries([...Object.entries(commands).map(([name, value]) => [name, [value]]), ...Object.entries(reads)])
const actor = { kind: 'user', id: 'owner', source: 'workflow-review-ui' }

async function boot(omitted = []) {
  const root = new Context()
  roots.push(root)
  const peerAbort = new AbortController()
  const connection = { browserPeer: { id: 'browser-1', principal: { kind: 'owner' }, signal: peerAbort.signal } }
  const core = Object.fromEntries(['decideReview', ...Object.keys(calls)].filter(name => !omitted.includes(name))
    .map(name => [name, vi.fn(async () => ({ method: name }))]))
  await root.plugin({ apply(ctx) { ctx.provide('connection', connection); ctx.provide('typertGateway', {}) } })
  const fiber = mountWorkflowReviewApi(root, core, protocol)
  await fiber
  const view = (method, overrides = {}) => root.extend({ invocation: {
    service: namespace, request: { namespace, method, args: {} }, peer: connection.browserPeer,
    signal: new AbortController().signal, ...overrides,
  } }).get(namespace)
  return { root, core, connection, peerAbort, fiber, view }
}

describe('Workflow product browser API', () => {
  it('registers only supported Remote methods, retaining legacy three/five-method hosts', async () => {
    const full = await boot()
    expect(protocol.remoteMethods(full.root.get(namespace)).map(entry => entry.method).sort())
      .toEqual(['decideReview', ...Object.keys(calls)].sort())
    expect(full.root.get('tools')).toBeUndefined()
    const optional = Object.keys(calls).filter(name => !['getTask', 'listTasks'].includes(name))
    const old = await boot(optional)
    expect(protocol.remoteMethods(old.root.get(namespace)).map(entry => entry.method)).toEqual(['decideReview', 'getTask', 'listTasks'])
    const five = await boot(optional.filter(name => !['createTask', 'terminateTask'].includes(name)))
    expect(protocol.remoteMethods(five.root.get(namespace)).map(entry => entry.method))
      .toEqual(['decideReview', 'getTask', 'listTasks', 'createTask', 'terminateTask'])
  })

  it.each(Object.entries(commands))('passes validated %s with a fixed server-owned actor', async (name, request) => {
    const { core, view } = await boot()
    const signal = new AbortController().signal
    await expect(view(name, { signal })[name](structuredClone(request))).resolves.toEqual({ method: name })
    expect(core[name]).toHaveBeenCalledExactlyOnceWith(request, actor, ...name === 'generateWorkflow' ? [signal] : [])
    expect(Object.isFrozen(core[name].mock.calls[0][1])).toBe(true)
  })

  it.each(Object.entries(reads))('passes exact identifiers to %s', async (name, args) => {
    const { core, view } = await boot()
    await expect(view(name)[name](...args)).resolves.toEqual({ method: name })
    expect(core[name]).toHaveBeenCalledExactlyOnceWith(...args)
  })

  it('preserves no-argument listTasks and optional legacy createTask.workflowId', async () => {
    const { core, view } = await boot()
    await view('listTasks').listTasks()
    expect(core.listTasks).toHaveBeenCalledExactlyOnceWith()
    const { workflowId, ...legacy } = commands.createTask
    await view('createTask').createTask(legacy)
    expect(core.createTask).toHaveBeenCalledExactlyOnceWith(legacy, actor)
  })

  it('forwards an optional strictly validated task version without accepting execution authority', async () => {
    const { core, view } = await boot()
    const pinned = { ...commands.createTask, expectedVersionId: 'version-1' }
    await view('createTask').createTask(pinned)
    expect(core.createTask).toHaveBeenCalledExactlyOnceWith(pinned, actor)
    core.createTask.mockClear()
    for (const expectedVersionId of ['', '../version', '/private/version', 'x'.repeat(129), null, {}, false]) {
      await expect(view('createTask').createTask({ ...commands.createTask, expectedVersionId }))
        .rejects.toMatchObject({ code: 'workflow/invalid-input' })
    }
    for (const field of ['permissions', 'executionConfig', 'sandbox', 'actor']) {
      await expect(view('createTask').createTask({ ...pinned, [field]: { read: true, write: true, command: true } }))
        .rejects.toMatchObject({ code: 'workflow/invalid-input' })
    }
    expect(core.createTask).not.toHaveBeenCalled()
  })

  it.each(Object.entries(calls))('rejects direct Host and independent owner Peer calls to %s', async (name, args) => {
    const { root, core, view, connection } = await boot()
    await expect(root.get(namespace)[name](...args)).rejects.toMatchObject({ code: 'workflow/browser-required' })
    await expect(view(name, { peer: { ...connection.browserPeer } })[name](...args))
      .rejects.toMatchObject({ code: 'workflow/browser-required' })
    expect(core[name]).not.toHaveBeenCalled()
  })

  it.each(Object.entries(calls))('checks invocation scope, owner, and cancellation for %s', async (name, args) => {
    const { core, view, connection, peerAbort } = await boot()
    for (const override of [
      { service: 'anotherService' }, { request: { namespace: 'other', method: name } },
      { request: { namespace, method: 'anotherMethod' } }, { request: undefined }, { peer: undefined },
    ]) await expect(view(name, override)[name](...args)).rejects.toMatchObject({ code: 'workflow/browser-required' })
    await expect(view(name, { signal: AbortSignal.abort() })[name](...args)).rejects.toMatchObject({ code: 'workflow/cancelled' })
    await expect(view(name, { signal: undefined })[name](...args)).rejects.toMatchObject({ code: 'workflow/cancelled' })
    connection.browserPeer.principal = { kind: 'agent' }
    await expect(view(name)[name](...args)).rejects.toMatchObject({ code: 'workflow/browser-required' })
    connection.browserPeer.principal = { kind: 'owner' }
    peerAbort.abort()
    await expect(view(name)[name](...args)).rejects.toMatchObject({ code: 'workflow/browser-required' })
    expect(core[name]).not.toHaveBeenCalled()
  })

  it.each(Object.entries(commands))('rejects forged authority and paths for %s before business code', async (name, request) => {
    const { core, view } = await boot()
    for (const field of ['actor', 'peer', 'invocation', 'rootPath', 'path', 'sql', 'SQL', '__proto__']) {
      const forged = { ...request, [field]: { kind: 'user', id: 'owner' } }
      await expect(view(name)[name](forged)).rejects.toMatchObject({ code: 'workflow/invalid-input' })
    }
    expect(core[name]).not.toHaveBeenCalled()
  })

  it.each(Object.entries(commands))('rejects non-record or missing required fields for %s', async (name, request) => {
    const { core, view } = await boot()
    for (const value of [null, undefined, [], 'request', new Date(), Object.create({ ...request })]) {
      await expect(view(name)[name](value)).rejects.toMatchObject({ code: 'workflow/invalid-input' })
    }
    for (const key of Object.keys(request)) {
      if ((name === 'createTask' && ['workflowId', 'title', 'modelSelection'].includes(key)) || key === 'requestId' && name === 'generateWorkflow') continue
      const missing = { ...request }; delete missing[key]
      await expect(view(name)[name](missing)).rejects.toMatchObject({ code: 'workflow/invalid-input' })
    }
    expect(core[name]).not.toHaveBeenCalled()
  })

  it.each(['terminateTask', 'retryTask', 'reconcileTask', 'updateWorkflow'])(
    'rejects invalid revisions for %s', async name => {
      const { core, view } = await boot()
      for (const expectedRevision of [0, -1, 1.5, '1', null, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
        await expect(view(name)[name]({ ...commands[name], expectedRevision })).rejects.toMatchObject({ code: 'workflow/invalid-input' })
      }
      expect(core[name]).not.toHaveBeenCalled()
    },
  )

  it.each(Object.entries(reads))('rejects invalid/path-bearing identifiers for %s', async (name, args) => {
    const { core, view } = await boot()
    for (let index = 0; index < (name === 'getTaskFile' ? 1 : args.length); index++) for (const invalid of ['', '../secret', '/private/file', 'x'.repeat(129), null, {}]) {
      const invalidArgs = [...args]; invalidArgs[index] = invalid
      await expect(view(name)[name](...invalidArgs)).rejects.toMatchObject({ code: 'workflow/invalid-input' })
    }
    expect(core[name]).not.toHaveBeenCalled()
  })

  it.each(['createWorkflow', 'updateWorkflow'])('bounds %s names and definition envelopes', async name => {
    const { core, view } = await boot()
    const invalidDefinitions = [null, [], {}, new Date(), { stages: new Array(17).fill({}) },
      { stages: [], actor: actor }, { stages: [], rootPath: '/private/profile' }, { stages: [], sql: 'DELETE FROM tasks' },
      { stages: [], description: 'x'.repeat(4001) }, { stages: [], inputLabel: 'x'.repeat(201) },
      { stages: [], inputHint: 'x'.repeat(4001) },
      { stages: [{ prompt: 'x'.repeat(2 * 1024 * 1024) }] }]
    const cycle = { stages: [] }; cycle.stages.push(cycle); invalidDefinitions.push(cycle)
    for (const definition of invalidDefinitions) {
      await expect(view(name)[name]({ ...commands[name], definition })).rejects.toMatchObject({ code: 'workflow/invalid-input' })
    }
    for (const invalid of ['', '  ', 'x'.repeat(201), null]) {
      await expect(view(name)[name]({ ...commands[name], name: invalid })).rejects.toMatchObject({ code: 'workflow/invalid-input' })
    }
    expect(core[name]).not.toHaveBeenCalled()
    await view(name)[name]({ ...commands[name], definition: { stages: [] } })
    expect(core[name]).toHaveBeenCalledTimes(1)
  })

  it.each(['createTask'])('bounds %s text and model selection', async name => {
    const { core, view } = await boot()
    const invalidSelections = [null, [], {}, { ...selection, provider: '' }, { ...selection, provider: 'x'.repeat(201) },
      { ...selection, model: 'x'.repeat(201) }, { ...selection, reasoningEffort: 'x'.repeat(81) },
      { ...selection, reasoningEffort: false }, { ...selection, apiKey: 'secret' }, { ...selection, actor }]
    for (const modelSelection of invalidSelections) {
      await expect(view(name)[name]({ ...commands[name], modelSelection })).rejects.toMatchObject({ code: 'workflow/invalid-input' })
    }
    const field = name === 'createTask' ? 'text' : 'brief'
    for (const text of ['', '  ', null, ...(name === 'createTask' ? [] : ['x'.repeat(10001)])]) {
      await expect(view(name)[name]({ ...commands[name], [field]: text })).rejects.toMatchObject({ code: 'workflow/invalid-input' })
    }
    expect(core[name]).not.toHaveBeenCalled()
    if (name === 'createTask') await expect(view(name)[name]({ ...commands[name], text: 'x'.repeat(120000) })).resolves.toBeDefined()
  })

  it('defers deep definition semantics to core/store and exposes only safe domain failures', async () => {
    const { core, view } = await boot()
    core.createWorkflow.mockRejectedValue(Object.assign(new Error('Stage fields are invalid.'), { code: 'WF_INVALID_DEFINITION' }))
    await expect(view('createWorkflow').createWorkflow({ ...commands.createWorkflow, definition: { stages: [{ rootPath: '/private' }] } }))
      .rejects.toMatchObject({ code: 'workflow/invalid-definition', message: 'Stage fields are invalid.' })
    core.createWorkflow.mockRejectedValue(new Error('secret API credential /private/profile'))
    await expect(view('createWorkflow').createWorkflow(commands.createWorkflow))
      .rejects.toMatchObject({ code: 'workflow/internal', message: 'The workflow operation could not be completed.' })
  })

  it.skipIf(!process.env.DSH_INSTALL_DIR || !process.env.DSH_NODE_EXECUTABLE)(
    'dispatches all product signatures through the installed shared Gateway without a server', () => {
      const script = `
        const { createRequire } = require('node:module');
        const { pathToFileURL } = require('node:url');
        const assert = require('node:assert/strict');
        const r = createRequire(process.env.DSH_INSTALL_DIR + '/package.json');
        const load = name => import(pathToFileURL(r.resolve(name)).href);
        (async () => {
          const { Context } = await load('@deepseek-ai/cordis');
          const { HostConnectionService } = await load('@deepseek-ai/dsh-client-connection');
          const { TypertRegistry } = await load('@deepseek-ai/dsh-typert-registry');
          const { TypertGatewayService } = await load('@deepseek-ai/dsh-api-gateway');
          const { RemoteAccessService } = await load('@deepseek-ai/dsh-api-remote-access');
          const protocol = await load('@deepseek-ai/dsh-typert-protocol');
          const { mountWorkflowReviewApi } = await import(pathToFileURL(process.argv[1]).href);
          const fixtures = JSON.parse(process.argv[2]);
          const root = new Context();
          try {
            await root.plugin({ apply(ctx) { new HostConnectionService(ctx, [], {
              isAuthenticated: () => true, authenticateApi: () => undefined,
            }); } });
            await root.plugin(TypertRegistry);
            await root.plugin(RemoteAccessService);
            await root.plugin(TypertGatewayService, {});
            const core = { decideReview() {} };
            for (const name of Object.keys(fixtures)) core[name] = async (...args) => {
              if (name === 'generateWorkflow') assert.equal(args[2].aborted, false);
              return { name, argumentCount: args.length };
            };
            await mountWorkflowReviewApi(root, core, protocol);
            const connection = root.get('connection');
            const admitted = connection.admit({ headers: { host: '127.0.0.1:60234', origin: 'http://127.0.0.1:60234' } });
            assert.equal(admitted.peer, connection.browserPeer);
            const handler = connection.createSharedFetchHandler('/api');
            async function call(name, args) {
              const method = 'workflowReview/' + name;
              const response = await handler.fetch(new Request('http://127.0.0.1:60234/api/' + method, {
                method: 'POST', headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ type: 'client-request', rpcId: name, method, payload: { args } }),
              }), admitted.peer);
              const envelope = await response.json();
              assert.equal(envelope.result.ok, true, JSON.stringify(envelope));
              assert.equal(envelope.rpcId, name);
              return envelope.result.value;
            }
            for (const [name, args] of Object.entries(fixtures)) await call(name, args);
            assert.equal((await call('listTasks', {})).argumentCount, 0);
            console.log('installed-product-gateway-ok');
          } finally { await root.fiber.dispose(); }
        })().catch(error => { console.error(error); process.exitCode = 1; });
      `
      const wire = { ...Object.fromEntries(Object.entries(commands).map(([name, request]) => [name, { request }])),
        listWorkflows: { workspaceId: 'workspace-1' }, getWorkflow: { workflowId: 'workflow-1' },
        getArtifact: { taskId: 'task-1', artifactId: 'artifact-1' },
        listTasks: { workspaceId: 'workspace-1' }, getTask: { taskId: 'task-1' } }
      const child = spawnSync(process.env.DSH_NODE_EXECUTABLE, ['-e', script,
        fileURLToPath(new URL('../workflow/review-api.js', import.meta.url)), JSON.stringify(wire)], {
        env: { ...process.env, ELECTRON_RUN_AS_NODE: '1' }, encoding: 'utf8', timeout: 15000,
      })
      expect(child.error).toBeUndefined()
      expect(child.status, child.stderr || child.stdout).toBe(0)
      expect(child.stdout).toContain('installed-product-gateway-ok')
    }, 20000,
  )

  it('reconciliation accepts only identifiers/revision, never caller-provided proof or actor', async () => {
    const { core, view } = await boot()
    const request = commands.reconcileTask
    expect(validateWorkflowCommand('reconcileTask', request)).toEqual(request)
    for (const field of ['evidence', 'proof', 'hostPid', 'pid', 'processes', 'processIds', 'actor', 'quiescent', 'ownerToken', 'unlock', 'force']) {
      const forged = { ...request, [field]: { exited: true, quiescent: true, kind: 'user', id: 'owner' } }
      expect(() => validateWorkflowCommand('reconcileTask', forged)).toThrow(expect.objectContaining({ code: 'WF_INVALID_INPUT' }))
      await expect(view('reconcileTask').reconcileTask(forged)).rejects.toMatchObject({ code: 'workflow/invalid-input' })
    }
    expect(core.reconcileTask).not.toHaveBeenCalled()
    await view('reconcileTask', { actor: { kind: 'agent', id: 'forged' } }).reconcileTask(request)
    expect(core.reconcileTask).toHaveBeenCalledExactlyOnceWith(request, actor)
    expect(Object.isFrozen(core.reconcileTask.mock.calls[0][1])).toBe(true)
  })

  it('never exposes reconciliation through management tools even when core supports it', async () => {
    const { core } = await boot()
    const registered = new Map()
    const dispose = mountWorkflowManagementTools({ tools: { register(definition) {
      registered.set(definition.name, definition)
      return () => registered.delete(definition.name)
    } } }, core)
    expect([...registered.keys()]).toEqual(['workflow_list', 'workflow_list_tasks', 'workflow_create', 'workflow_update', 'workflow_create_task', 'workflow_get_task', 'workflow_get_stage_trace'])
    expect([...registered.keys()].some(name => /reconcile|unlock|recover/.test(name))).toBe(false)
    expect(core.reconcileTask).not.toHaveBeenCalled()
    dispose()
    expect(registered.size).toBe(0)
  })

  it('exports shared command validation without authority or review approval', () => {
    expect(validateWorkflowCommand('createWorkflow', commands.createWorkflow)).toEqual(commands.createWorkflow)
    for (const method of ['decideReview', 'approve', 'constructor', '__proto__', 'getTask']) {
      expect(() => validateWorkflowCommand(method, {})).toThrow(expect.objectContaining({ code: 'WF_INVALID_INPUT' }))
    }
    expect(() => validateWorkflowCommand('createWorkflow', { ...commands.createWorkflow, actor }))
      .toThrow(expect.objectContaining({ code: 'WF_INVALID_INPUT', message: 'Invalid workflow request.' }))
    const accessor = { ...commands.createWorkflow }
    Object.defineProperty(accessor, 'name', { get() { throw new Error('must not execute getter') } })
    expect(() => validateWorkflowCommand('createWorkflow', accessor)).toThrow(expect.objectContaining({ code: 'WF_INVALID_INPUT' }))
  })
})
