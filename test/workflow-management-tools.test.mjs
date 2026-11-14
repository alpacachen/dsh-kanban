// @vitest-environment node
import { describe, expect, it, vi } from 'vitest'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { mountWorkflowManagementTools } from '../workflow/management-tools.js'

const names = ['workflow_list', 'workflow_list_tasks', 'workflow_create', 'workflow_update', 'workflow_create_task', 'workflow_get_task', 'workflow_get_stage_trace']
const definition = { stages: [] }
const drafts = { name: 'Proposed workflow', definition }
const task = { workflowId: 'workflow-1', text: 'Input' }
const actor = { kind: 'agent', id: 'agent-1', source: 'workflow-management-tool' }
function boot() {
  const tools = new Map()
  const workspace = { id: 'workspace-1' }
  const workflow = { id: 'workflow-1', workspaceId: workspace.id, publishedVersionId: 'version-1', acceptingTasks: true }
  const selection = { provider: 'provider-1', model: 'model-1', reasoningEffort: 'medium' }
  const core = {
    listTasks: vi.fn(async () => ({ tasks: [] })), getStageTrace: vi.fn(async () => ({ entries: [] })),
    listWorkflows: vi.fn(async () => [workflow]), getWorkflow: vi.fn(async () => workflow),
    createWorkflow: vi.fn(async () => ({ id: 'workflow-new', workspaceId: workspace.id, draft: definition, publishedVersionId: null })),
    updateWorkflow: vi.fn(async request => ({ id: request.workflowId, workspaceId: workspace.id, revision: request.expectedRevision + 1, draft: request.definition })),
    createTask: vi.fn(async () => ({ id: 'task-new', workspaceId: workspace.id, state: 'queued' })),
    getTask: vi.fn(async () => ({ id: 'task-1', workspaceId: workspace.id, state: 'waiting_review' })),
    decideReview: vi.fn(), publishWorkflow: vi.fn(), setWorkflowEnabled: vi.fn(), terminateTask: vi.fn(),
  }
  const ctx = {
    tools: { register: vi.fn(tool => { tools.set(tool.name, tool); return () => tools.delete(tool.name) }) },
    workingDirectory: { get: vi.fn(() => '/isolated/current-project') },
    workspaceRegistry: { resolveByPath: vi.fn(async () => workspace) },
    agentDefaultModel: { currentSelection: vi.fn(() => selection) },
    llm: { listProviders: vi.fn(() => [{ id: 'provider-1' }]), listModels: vi.fn(async () => [{ id: 'model-1', name: 'Model One' }]), resolveModelInfo: vi.fn(async () => ({ reasoning: { efforts: [{ id: 'ultra', name: 'Ultra' }], defaultEffort: 'ultra' } })) },
  }
  const exec = { agent: { id: 'agent-1', model: { current: vi.fn(() => selection) }, session: { header: { cwd: '/old/original-project' } } }, signal: new AbortController().signal }
  const dispose = mountWorkflowManagementTools(ctx, core)
  const run = (name, args, execution = exec) => tools.get(name).execute(args, execution)
  return { ctx, core, tools, workspace, workflow, selection, exec, dispose, run }
}

describe('Workflow agent management tools', () => {
  it('registers exactly seven ordinary operations with open JSON object output', () => {
    const { tools, ctx, dispose } = boot()
    expect([...tools.keys()]).toEqual(names)
    expect(ctx.tools.register).toHaveBeenCalledTimes(7)
    for (const tool of tools.values()) {
      expect(tool.parameters.additionalProperties).toBe(false)
      expect(tool.output.schema).toEqual({ type: 'object', additionalProperties: true })
      expect(tool.output.render({}, { text: '<script>plain text</script>', nested: [null, { ok: true }] }))
        .toEqual([{ type: 'text', text: '{"text":"<script>plain text</script>","nested":[null,{"ok":true}]}' }])
    }
    expect(tools.get('workflow_create_task').description).toMatch(/costs/)
    expect(tools.get('workflow_create').description).toMatch(/does not execute/)
    dispose(); dispose()
    expect(tools.size).toBe(0)
  })

  it('derives workspace from effective cwd, not the original session directory', async () => {
    const { run, ctx, core, exec } = boot()
    await expect(run('workflow_list', {})).resolves.toMatchObject({ workspaceId: 'workspace-1', workflows: [{ id: 'workflow-1' }] })
    expect(ctx.workingDirectory.get).toHaveBeenCalledExactlyOnceWith(exec.agent.session)
    expect(ctx.workspaceRegistry.resolveByPath).toHaveBeenCalledExactlyOnceWith('/isolated/current-project')
    expect(core.listWorkflows).toHaveBeenCalledExactlyOnceWith('workspace-1')
  })

  it('lists only this workflow’s history and scopes trace reads to the current workspace', async () => {
    const { run, core } = boot()
    core.listTasks.mockResolvedValue({ tasks: [{ id: 'older', workflowId: 'workflow-1', workflowVersionId: 'v1', versionNumber: 1, createdAt: 1 }, { id: 'other', workflowId: 'other-flow', createdAt: 2 }] })
    expect((await run('workflow_list_tasks', { workflowId: 'workflow-1' })).tasks).toHaveLength(1)
    await run('workflow_get_stage_trace', { taskId: 'task-1', stageId: '_old_stage', limit: 1 })
    expect(core.getStageTrace).toHaveBeenCalledWith({ taskId: 'task-1', stageId: '_old_stage', limit: 1 }, expect.any(AbortSignal))
    core.getTask.mockResolvedValue({ workspaceId: 'other-workspace' })
    await expect(run('workflow_get_stage_trace', { taskId: 'task-1', stageId: 'old' })).rejects.toMatchObject({ code: 'WF_WORKSPACE_MISMATCH' })
    expect(core.getStageTrace).toHaveBeenCalledTimes(1)
  })

  it('creates only an workflow without starting tasks and attributes the real invoking agent', async () => {
    const { run, core, selection } = boot()
    await expect(run('workflow_create', { ...drafts, requestId: 'stable-request' })).resolves.toMatchObject({ publishedVersionId: null })
    expect(core.createWorkflow).toHaveBeenCalledExactlyOnceWith({ ...drafts, requestId: 'stable-request', workspaceId: 'workspace-1' }, actor, selection)
    expect(Object.isFrozen(core.createWorkflow.mock.calls[0][1])).toBe(true)
    for (const name of ['decideReview', 'publishWorkflow', 'setWorkflowEnabled', 'terminateTask', 'createTask']) expect(core[name]).not.toHaveBeenCalled()
  })

  it('updates the current project workflow with an explicit revision, preserving existing task snapshots', async () => {
    const { run, core, selection } = boot()
    const request = { ...drafts, workflowId: 'workflow-1', expectedRevision: 3, requestId: 'edit-1' }
    await expect(run('workflow_update', request)).resolves.toMatchObject({ revision: 4 })
    expect(core.updateWorkflow).toHaveBeenCalledExactlyOnceWith(request, actor, selection)
    expect(core.publishWorkflow).not.toHaveBeenCalled()
    expect(core.setWorkflowEnabled).not.toHaveBeenCalled()
    expect(core.createTask).not.toHaveBeenCalled()
  })

  it('rejects cross-project edits and stale revisions without retrying or overwriting', async () => {
    const { run, core } = boot()
    const request = { ...drafts, workflowId: 'workflow-1', expectedRevision: 3 }
    core.getWorkflow.mockResolvedValueOnce({ workspaceId: 'other-project' })
    await expect(run('workflow_update', request)).rejects.toMatchObject({ code: 'WF_WORKSPACE_MISMATCH' })
    expect(core.updateWorkflow).not.toHaveBeenCalled()
    core.updateWorkflow.mockRejectedValueOnce(Object.assign(new Error('Stale revision.'), { code: 'WF_REVISION_CONFLICT' }))
    await expect(run('workflow_update', request)).rejects.toMatchObject({ code: 'WF_REVISION_CONFLICT' })
    expect(core.updateWorkflow).toHaveBeenCalledTimes(1)
  })

  it.each([0, -1, 1.5, null, '3'])('rejects invalid edit revision %j before entering core', async expectedRevision => {
    const { run, core } = boot()
    await expect(run('workflow_update', { ...drafts, workflowId: 'workflow-1', expectedRevision })).rejects.toMatchObject({ code: 'WF_INVALID_INPUT' })
    expect(core.updateWorkflow).not.toHaveBeenCalled()
  })

  it('starts published tasks using only the server default model and derived workspace', async () => {
    const { run, core, selection } = boot()
    await run('workflow_create_task', { ...task, requestId: 'stable-request' })
    expect(core.getWorkflow).toHaveBeenCalledExactlyOnceWith('workflow-1')
    expect(core.createTask).toHaveBeenCalledExactlyOnceWith({ ...task, title: 'Input', requestId: 'stable-request', workspaceId: 'workspace-1' }, actor)
    expect(core.publishWorkflow).not.toHaveBeenCalled()
  })

  it('inherits the invoking chat model without exposing model fields or a model catalog tool', async () => {
    const { run, core, selection, tools, ctx, exec } = boot()
    ctx.agentDefaultModel.currentSelection.mockReturnValue({ provider: 'other', model: 'global' })
    await run('workflow_create', drafts)
    expect(core.createWorkflow.mock.calls[0][2]).toEqual(selection)
    expect(exec.agent.model.current).toHaveBeenCalledOnce()
    expect(ctx.agentDefaultModel.currentSelection).not.toHaveBeenCalled()
    expect(tools.has('workflow_models')).toBe(false)
    const stage = tools.get('workflow_create').parameters.properties.definition.properties.stages.items
    expect(stage.properties.kind.enum).toEqual(['agent', 'review'])
    expect(stage.additionalProperties).toBe(false)
    expect(stage.properties).not.toHaveProperty('modelSelection')
    const forged = { stages: [{ id: 'run', kind: 'agent', title: 'Run', prompt: 'Work', modelSelection: selection }] }
    await expect(run('workflow_create', { ...drafts, definition: forged })).rejects.toMatchObject({ code: 'WF_INVALID_INPUT' })
  })

  it.each(['modelSelection', 'reasoningEffort', 'title'])('does not accept the removed task-level %s field', async field => {
    const { run, core } = boot()
    await expect(run('workflow_create_task', { ...task, [field]: 'not-a-task-setting' })).rejects.toMatchObject({ code: 'WF_INVALID_INPUT' })
    expect(core.createTask).not.toHaveBeenCalled()
  })

  it.each(['workflow_create', 'workflow_create_task'])('generates request ids only when omitted for %s', async name => {
    const { run, core } = boot()
    const args = name === 'workflow_create' ? drafts : task
    const method = name === 'workflow_create' ? 'createWorkflow' : 'createTask'
    await run(name, args); await run(name, args)
    const ids = core[method].mock.calls.map(([request]) => request.requestId)
    expect(ids[0]).toMatch(/^[a-f0-9-]{36}$/)
    expect(ids[1]).not.toBe(ids[0])
    await expect(run(name, { ...args, requestId: null })).rejects.toMatchObject({ code: 'WF_INVALID_INPUT' })
  })

  it('returns task progress without changing review state', async () => {
    const { run, core } = boot()
    await expect(run('workflow_get_task', { taskId: 'task-1' })).resolves.toMatchObject({ state: 'waiting_review' })
    expect(core.getTask).toHaveBeenCalledExactlyOnceWith('task-1')
    expect(core.decideReview).not.toHaveBeenCalled()
  })

  it.each(names)('rejects caller-supplied authority or workspace paths for %s', async name => {
    const { run, core } = boot()
    const args = name === 'workflow_create' ? drafts : name === 'workflow_create_task' ? task : name === 'workflow_get_task' ? { taskId: 'task-1' } : {}
    for (const field of ['actor', 'workspaceId', 'rootPath', 'path', 'cwd', 'peer', 'invocation', 'method', 'decision', 'enabled', 'modelSelection']) {
      await expect(run(name, { ...args, [field]: 'forged' })).rejects.toMatchObject({ code: 'WF_INVALID_INPUT' })
    }
    for (const method of Object.values(core)) expect(method).not.toHaveBeenCalled()
  })

  it.each(names)('requires a registered current workspace and initiating agent for %s', async name => {
    const { run, ctx, core, exec } = boot()
    const args = name === 'workflow_create' ? drafts : name === 'workflow_create_task' ? task : name === 'workflow_get_task' ? { taskId: 'task-1' } : {}
    await expect(run(name, args, {})).rejects.toMatchObject({ code: 'WF_AGENT_REQUIRED' })
    ctx.workspaceRegistry.resolveByPath.mockResolvedValue(undefined)
    await expect(run(name, args, exec)).rejects.toMatchObject({ code: 'WF_WORKSPACE_MISSING' })
    for (const method of Object.values(core)) expect(method).not.toHaveBeenCalled()
  })

  it('blocks cross-workspace workflow selection before starting a model', async () => {
    const { run, core } = boot()
    core.getWorkflow.mockResolvedValue({ workspaceId: 'other-workspace', publishedVersionId: 'version-1', acceptingTasks: true })
    await expect(run('workflow_create_task', task)).rejects.toMatchObject({ code: 'WF_WORKSPACE_MISMATCH' })
    expect(core.createTask).not.toHaveBeenCalled()
  })

  it('blocks cross-workspace task reads and list DTO leakage', async () => {
    const { run, core } = boot()
    core.getTask.mockResolvedValue({ workspaceId: 'other-workspace', private: 'secret' })
    await expect(run('workflow_get_task', { taskId: 'task-1' })).rejects.toMatchObject({ code: 'WF_WORKSPACE_MISMATCH' })
    core.listWorkflows.mockResolvedValue([{ workspaceId: 'other-workspace' }])
    await expect(run('workflow_list', {})).rejects.toMatchObject({ code: 'WF_WORKSPACE_MISMATCH' })
  })

  it('defers publication/enabled decisions to core without enabling anything', async () => {
    const { run, core, workflow } = boot()
    workflow.publishedVersionId = null
    core.createTask.mockRejectedValueOnce(Object.assign(new Error('Publish the workflow first.'), { code: 'WF_WORKFLOW_UNPUBLISHED' }))
    await expect(run('workflow_create_task', task)).rejects.toMatchObject({ code: 'WF_WORKFLOW_UNPUBLISHED' })
    expect(core.createTask.mock.calls[0][0]).not.toHaveProperty('expectedVersionId')
    workflow.publishedVersionId = 'version-1'; workflow.acceptingTasks = false
    core.createTask.mockRejectedValueOnce(Object.assign(new Error('Workflow is disabled.'), { code: 'WF_WORKFLOW_DISABLED' }))
    await expect(run('workflow_create_task', task)).rejects.toMatchObject({ code: 'WF_WORKFLOW_DISABLED' })
    expect(core.createTask).toHaveBeenCalledTimes(2)
    expect(core.setWorkflowEnabled).not.toHaveBeenCalled()
  })

  it('keeps an explicit original version on replay after republish and disabling', async () => {
    const { run, core, workflow } = boot()
    const request = { ...task, requestId: 'stable-request', expectedVersionId: 'version-1' }
    const receipt = { id: 'task-original', workspaceId: 'workspace-1', workflowVersionId: 'version-1' }
    core.createTask.mockResolvedValue(receipt)
    await expect(run('workflow_create_task', request)).resolves.toEqual(receipt)
    workflow.publishedVersionId = 'version-2'; workflow.acceptingTasks = false
    await expect(run('workflow_create_task', request)).resolves.toEqual(receipt)
    expect(core.createTask.mock.calls.map(([request]) => [request.requestId, request.expectedVersionId]))
      .toEqual([['stable-request', 'version-1'], ['stable-request', 'version-1']])
    expect(core.setWorkflowEnabled).not.toHaveBeenCalled()
  })

  it('lets core reuse a committed receipt when an unpinned retry sees a newer version', async () => {
    const { run, core, workflow } = boot()
    const receipt = { id: 'task-original', workspaceId: 'workspace-1', workflowVersionId: 'version-1' }
    core.createTask.mockResolvedValue(receipt)
    const request = { ...task, requestId: 'stable-request' }
    await run('workflow_create_task', request)
    workflow.publishedVersionId = 'version-2'; workflow.acceptingTasks = false
    await expect(run('workflow_create_task', request)).resolves.toEqual(receipt)
    for (const [forwarded] of core.createTask.mock.calls) expect(forwarded).not.toHaveProperty('expectedVersionId')
    // The core freezes an omitted version and reuses its receipt, never the latest workflow version.
  })

  it.each(['', '../version', '/private/version', 'x'.repeat(129), null, {}, false])('rejects invalid explicit expectedVersionId: %j', async expectedVersionId => {
    const { run, core } = boot()
    await expect(run('workflow_create_task', { ...task, expectedVersionId })).rejects.toMatchObject({ code: 'WF_INVALID_INPUT' })
    expect(core.createTask).not.toHaveBeenCalled()
  })

  it.each(['', '../secret', '/private/task', 'x'.repeat(129), null, {}])('rejects invalid task identifiers: %j', async taskId => {
    const { run, core } = boot()
    await expect(run('workflow_get_task', { taskId })).rejects.toMatchObject({ code: 'WF_INVALID_INPUT' })
    expect(core.getTask).not.toHaveBeenCalled()
  })

  it('uses shared strict validation for draft and task fields', async () => {
    const { run, core } = boot()
    await expect(run('workflow_create', { ...drafts, definition: { stages: [], rootPath: '/private' } })).rejects.toMatchObject({ code: 'WF_INVALID_INPUT' })
    await expect(run('workflow_create_task', { ...task, title: 'x'.repeat(201) })).rejects.toMatchObject({ code: 'WF_INVALID_INPUT' })
    expect(core.createWorkflow).not.toHaveBeenCalled()
    expect(core.createTask).not.toHaveBeenCalled()
  })

  it('honors cancellation before side effects and hides unknown internal failures', async () => {
    const { run, core, exec } = boot()
    await expect(run('workflow_create_task', task, { ...exec, signal: AbortSignal.abort() })).rejects.toMatchObject({ name: 'AbortError' })
    expect(core.createTask).not.toHaveBeenCalled()
    core.getTask.mockRejectedValue(new Error('secret credential /private/profile'))
    await expect(run('workflow_get_task', { taskId: 'task-1' })).rejects.toMatchObject({ code: 'WF_INTERNAL', message: 'The workflow operation could not be completed.' })
  })

  it.skipIf(!process.env.DSH_INSTALL_DIR || !process.env.DSH_NODE_EXECUTABLE)(
    'registers globally in the installed SDK with its enforced JSON output schema', () => {
      const script = `
        const { createRequire } = require('node:module'); const { pathToFileURL } = require('node:url');
        const assert = require('node:assert/strict'); const r = createRequire(process.env.DSH_INSTALL_DIR + '/package.json');
        const load = name => import(pathToFileURL(r.resolve(name)).href);
        (async () => {
          const { Context } = await load('@deepseek-ai/cordis');
          const { ToolsService } = await load('@deepseek-ai/dsh-tools');
          const { createScope } = await load('@deepseek-ai/dsh-scope');
          const { mountWorkflowManagementTools } = await import(pathToFileURL(process.argv[1]).href);
          const root = new Context();
          try {
            await root.plugin({ apply(ctx) { ctx.provide('systemPrompt', { tools: () => () => {} }); } });
            await root.plugin(ToolsService);
            const executorKey = {};
            let executor;
            await root.plugin({ inject: ['tools'], apply(ctx) {
              executor = createScope(ctx, executorKey);
              executor.ctx.tools.restrict({ allow: [] });
            } });
            const dispose = mountWorkflowManagementTools(root, {});
            const names = ['workflow_list', 'workflow_list_tasks', 'workflow_create', 'workflow_update', 'workflow_create_task', 'workflow_get_task', 'workflow_get_stage_trace'];
            for (const name of names) {
              assert.equal(root.tools.get(name).name, name);
              assert.equal(root.tools.get(name, executorKey), undefined);
              assert.equal(root.tools.executable(name, executorKey), undefined);
            }
            await executor.dispose();
            for (const name of ['workflow_approve', 'workflow_publish', 'workflow_rpc']) assert.equal(root.tools.get(name), undefined);
            dispose(); for (const name of names) assert.equal(root.tools.get(name), undefined);
            console.log('installed-management-registration-ok');
          } finally { await root.fiber.dispose(); }
        })().catch(error => { console.error(error); process.exitCode = 1; });
      `
      const child = spawnSync(process.env.DSH_NODE_EXECUTABLE, ['-e', script,
        fileURLToPath(new URL('../workflow/management-tools.js', import.meta.url))], {
        env: { ...process.env, ELECTRON_RUN_AS_NODE: '1' }, encoding: 'utf8', timeout: 15000,
      })
      expect(child.error).toBeUndefined()
      expect(child.status, child.stderr || child.stdout).toBe(0)
      expect(child.stdout).toContain('installed-management-registration-ok')
    }, 20000,
  )
})
