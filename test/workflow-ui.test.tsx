import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { WorkflowPanel } from '../src/client/WorkflowPanel'
import { t } from '../src/client/lib/i18n'
import type { Workflow, WorkflowApi, WorkflowTask } from '../src/client/lib/workflow-types'
const definition = { description: 'Research and review', inputLabel: 'Source material', inputHint: '', stages: [
  { id: 'research', kind: 'agent' as const, title: 'Research', prompt: 'Produce a report' },
  { id: 'review', kind: 'review' as const, title: 'Human review', prompt: 'Check the sources', returnStageId: 'research' },
] }
const flow = (id = 'flow-a', name = 'Research flow'): Workflow => ({ id, name, workspaceId: 'workspace', description: definition.description, revision: 1,
  definition, versionId: `version-${id}`, versionNumber: 1, taskCount: 1, createdAt: 1, updatedAt: 1 })
const task = (id = 'task-a', workflowId = 'flow-a', title = 'First research'): WorkflowTask => ({ id, title, workflowId, workspaceId: 'workspace', workflowName: workflowId === 'flow-a' ? 'Research flow' : 'Content flow',
  versionNumber: 1, state: 'running', revision: 2, stageTitle: 'Research', currentStageId: 'research', stages: definition.stages,
  input: { text: title }, outputs: [], review: null, attention: null, attempts: [], reviews: [], createdAt: 1, updatedAt: 2 })
function fixture(initialTasks = [task(), task('task-b', 'flow-b', 'Second report')], initialFlows = [flow(), flow('flow-b', 'Content flow')]) {
  let tasks = initialTasks, flows = initialFlows
  const call = vi.fn(async (method: string, args: any) => {
    if (method === 'listWorkflows') return flows
    if (method === 'listTasks') return { tasks, modelSelection: { provider: 'fixture', model: 'fixture', reasoningEffort: 'high' }, modelOptions: { reasoningEfforts: [{ id: 'high', name: 'High' }] }, status: { lastError: null } }
    if (method === 'getTask') return tasks.find(item => item.id === args.taskId)
    const request = args.request
    if (method === 'createTask') { const created = { ...task('created-task', request.workflowId, request.text), input: { text: request.text }, state: 'queued' }; tasks = [...tasks, created]; return created }
    if (method === 'deleteTask') { tasks = tasks.filter(item => item.id !== request.taskId); return { deleted: true, taskId: request.taskId } }
    if (method === 'deleteWorkflow') { flows = flows.filter(item => item.id !== request.workflowId); return { deleted: true, workflowId: request.workflowId } }
    throw Error(`Unexpected ${method}`)
  })
  return { call, api: { call } as WorkflowApi }
}
const mount = (f = fixture(), extra: Record<string, unknown> = {}) => ({ ...f, ...render(<WorkflowPanel workspaceId="workspace" workspaceTitle="Project" api={f.api} {...extra} />) })
const openFlow = async () => fireEvent.click(await screen.findByRole('button', { name: 'Research flow', exact: true }))
const openTask = async () => fireEvent.click(await screen.findByRole('button', { name: 'First research', exact: true }))
afterEach(() => { vi.restoreAllMocks(); vi.useRealTimers() })
describe('Workflow file hierarchy and separate detail pages', () => {
  it('automatically recovers polling after a transient request failure', async () => {
    vi.useFakeTimers()
    const f = fixture(), original = f.call.getMockImplementation()!
    let first = true
    f.call.mockImplementation(async (method, args) => { if (method === 'listWorkflows' && first) { first = false; throw Error('Temporary disconnect') }; return original(method, args) })
    await act(async () => { mount(f) })
    expect(screen.getByRole('alert').textContent).toContain('Temporary disconnect')
    await act(async () => { await vi.advanceTimersByTimeAsync(4000) })
    expect(screen.queryByRole('alert')).toBeNull()
    expect(screen.getByRole('button', { name: 'First research', exact: true })).toBeTruthy()
  })
  it('keeps task activity and attention visible when a Workflow is collapsed', async () => {
    mount(fixture([task(), { ...task('review-task'), state: 'waiting_review' }, { ...task('failed-task'), state: 'needs_attention' }], [flow()]))
    fireEvent.click(await screen.findByRole('button', { name: t('wfCollapseFlow').replace('{name}', 'Research flow') }))
    expect(screen.getByText(t('wfFlowRunning').replace('{count}', '1'))).toBeTruthy()
    expect(screen.getByText(t('wfFlowAttention').replace('{count}', '2'))).toBeTruthy()
    expect(screen.queryByRole('button', { name: 'First research', exact: true })).toBeNull()
  })
  it('opens history optimization with version-aware instructions without starting tasks', async () => {
    const onOpenChat = vi.fn(async () => true), f = fixture()
    mount(f, { onOpenChat }); await openFlow()
    fireEvent.click(screen.getByRole('button', { name: t('wfOptimize') }))
    await waitFor(() => expect(onOpenChat).toHaveBeenCalledOnce())
    const prompt = onOpenChat.mock.calls[0][0]
    expect(prompt).toContain('workflow_list_tasks')
    expect(prompt).toContain('workflow_get_stage_trace')
    expect(prompt).toContain('"workflowVersionId": "version-flow-a"')
    expect(prompt).toContain(t('wfChatSaveOnly'))
    expect(f.call.mock.calls.some(([method]) => ['createTask', 'retryTask', 'updateWorkflow'].includes(method))).toBe(false)
  })

  it('shows tasks beneath workflows by default and keeps parent rows free of state and delete actions', async () => {
    mount()
    const parent = (await screen.findByRole('button', { name: 'Research flow', exact: true })).closest('tr')!
    expect(screen.getByRole('button', { name: 'First research', exact: true })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Second report', exact: true })).toBeTruthy()
    expect(within(parent).getAllByRole('button')).toHaveLength(2)
    const children = document.getElementById(parent.querySelector('[aria-controls]')!.getAttribute('aria-controls')!)!
    expect(children.lastElementChild).toBe(screen.getByRole('button', { name: `${t('wfNewTask')} · Research flow` }).closest('tr'))
    expect(parent.querySelector('.workflow-state')).toBeNull()
    expect(screen.queryByRole('button', { name: t('wfDelete') })).toBeNull()
    expect(screen.queryByRole('button', { name: t('wfDeleteTask') })).toBeNull()
    expect(screen.queryByText(t('wfDraft'))).toBeNull()
    expect(screen.queryByText(t('wfDisabled'))).toBeNull()
    expect(screen.getByRole('table', { name: t('wfTree') })).toBeTruthy()
  })
  it('expands and collapses only the selected workflow while keeping navigation separate', async () => {
    mount()
    const collapse = await screen.findByRole('button', { name: t('wfCollapseFlow').replace('{name}', 'Research flow') })
    expect(collapse.getAttribute('aria-expanded')).toBe('true')
    fireEvent.click(collapse)
    expect(screen.queryByRole('button', { name: 'First research', exact: true })).toBeNull()
    expect(screen.queryByRole('button', { name: `${t('wfNewTask')} · Research flow` })).toBeNull()
    expect(screen.getByRole('button', { name: 'Second report', exact: true })).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: t('wfExpandFlow').replace('{name}', 'Research flow') }))
    expect(screen.getByRole('button', { name: 'First research', exact: true })).toBeTruthy()
  })
  it('collapses the creation child even with no tasks and retains its input when reopened', async () => {
    mount(fixture([], [flow()]))
    fireEvent.click(await screen.findByRole('button', { name: `${t('wfNewTask')} · Research flow` }))
    fireEvent.change(screen.getByLabelText('Source material'), { target: { value: 'Keep this input' } })
    fireEvent.click(screen.getByRole('button', { name: t('wfCollapseFlow').replace('{name}', 'Research flow') }))
    expect(screen.queryByRole('textbox')).toBeNull()
    expect(screen.queryByRole('button', { name: `${t('wfNewTask')} · Research flow` })).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: t('wfExpandFlow').replace('{name}', 'Research flow') }))
    expect((screen.getByLabelText('Source material') as HTMLTextAreaElement).value).toBe('Keep this input')
  })
  it('shows a plain table with the workflow creation action in its final row', async () => {
    const onOpenChat = vi.fn(async () => true)
    mount(fixture(), { onOpenChat }); const table = await screen.findByRole('table')
    expect(screen.queryByRole('searchbox')).toBeNull()
    expect(screen.queryByRole('button', { name: t('wfFilter') })).toBeNull()
    const create = screen.getByRole('button', { name: t('wfNew') })
    expect(create.closest('tfoot')).toBe(table.querySelector('tfoot'))
    fireEvent.click(create)
    expect(onOpenChat).toHaveBeenCalledTimes(1)
  })
  it('opens a flow page with its diagram only, without task controls', async () => {
    mount(); await openFlow()
    expect(screen.getByRole('heading', { name: /^Research flow/ })).toBeTruthy()
    expect(screen.getByRole('region', { name: t('wfDiagram') })).toBeTruthy()
    expect(screen.queryByRole('button', { name: t('wfNewTask') })).toBeNull()
    expect(screen.queryByRole('table')).toBeNull()
    expect(screen.queryByRole('searchbox')).toBeNull()
    expect(screen.queryByRole('button', { name: t('wfPublish') })).toBeNull()
    expect(screen.queryByRole('button', { name: t('wfDisable') })).toBeNull()
    expect(screen.queryByRole('dialog')).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: `1. ${t('wfAgent')}: Research`, exact: true }))
    expect(screen.getByRole('dialog', { name: 'Research' })).toBeTruthy()
  })
  it('opens a task as a full page and returns through its workflow breadcrumb', async () => {
    mount(); await openTask()
    expect(await screen.findByRole('heading', { name: 'First research' })).toBeTruthy()
    expect(screen.queryByRole('dialog')).toBeNull()
    const nav = screen.getByRole('navigation', { name: t('wfBreadcrumb') })
    fireEvent.click(within(nav).getByRole('button', { name: 'Research flow', exact: true }))
    expect(screen.getByRole('heading', { name: /^Research flow/ })).toBeTruthy()
    fireEvent.click(within(screen.getByRole('navigation', { name: t('wfBreadcrumb') })).getByRole('button', { name: 'Workflow' }))
    expect(screen.getByRole('table', { name: t('wfTree') })).toBeTruthy()
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Research flow', exact: true }))
  })
  it('creates a task directly from a saved workflow and opens the resulting task page', async () => {
    const { call } = mount(); await screen.findByRole('table')
    fireEvent.click(screen.getByRole('button', { name: `${t('wfNewTask')} · Research flow` }))
    fireEvent.change(screen.getByLabelText('Source material'), { target: { value: 'New input' } })
    fireEvent.click(screen.getByRole('button', { name: t('wfCreate') }))
    expect(await screen.findByRole('heading', { name: 'New input' })).toBeTruthy()
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(call.mock.calls.find(([method]) => method === 'createTask')![1].request).toMatchObject({ workflowId: 'flow-a', expectedVersionId: 'version-flow-a', text: 'New input' })
    expect(call.mock.calls.find(([method]) => method === 'createTask')![1].request).not.toHaveProperty('modelSelection')
    expect(call.mock.calls.find(([method]) => method === 'createTask')![1].request).not.toHaveProperty('title')
    expect(call.mock.calls.some(([method]) => /publish|Enabled|Draft/.test(method))).toBe(false)
  })
  it('keeps the same idempotency key for a failed create retry', async () => {
    const f = fixture(), original = f.call.getMockImplementation()!
    let failed = false
    f.call.mockImplementation(async (method, args) => { if (method === 'createTask' && !failed) { failed = true; throw Error('Response lost') }; return original(method, args) })
    mount(f); await screen.findByRole('table'); fireEvent.click(screen.getByRole('button', { name: `${t('wfNewTask')} · Research flow` }))
    fireEvent.change(screen.getByLabelText('Source material'), { target: { value: 'Input' } })
    fireEvent.click(screen.getByRole('button', { name: t('wfCreate') })); await screen.findByText('Response lost')
    fireEvent.click(screen.getByRole('button', { name: t('wfCreate') })); await screen.findByRole('heading', { name: 'Input' })
    const calls = f.call.mock.calls.filter(([method]) => method === 'createTask')
    expect(calls).toHaveLength(2); expect(calls[0]![1].request.requestId).toBe(calls[1]![1].request.requestId)
  })
  it('deletes a workflow only from its detail page with a small confirmation dialog', async () => {
    const { call } = mount(fixture([], [flow()])); await openFlow()
    fireEvent.click(screen.getByRole('button', { name: t('wfDelete'), exact: true }))
    expect(call.mock.calls.some(([method]) => method === 'deleteWorkflow')).toBe(false)
    fireEvent.click(screen.getByRole('button', { name: t('confirmDelete') }))
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull())
    expect(call.mock.calls.find(([method]) => method === 'deleteWorkflow')![1].request).toMatchObject({ workflowId: 'flow-a', expectedRevision: 1 })
  })
  it('deletes a task from its detail page and returns to the homepage', async () => {
    const { call } = mount(); await openTask(); await screen.findByRole('heading', { name: 'First research' })
    fireEvent.click(screen.getByRole('button', { name: t('wfDeleteTask'), exact: true }))
    expect(call.mock.calls.some(([method]) => method === 'deleteTask')).toBe(false)
    expect(screen.getByRole('dialog').textContent).toContain(t('wfDeleteTaskConfirm').replace('{name}', 'First research'))
    fireEvent.click(screen.getByRole('button', { name: t('confirmDelete') }))
    await screen.findByRole('table')
    expect(screen.queryByRole('button', { name: 'First research', exact: true })).toBeNull()
  })
  it('protects task review feedback when returning to the hierarchy', async () => {
    const review = { ...task(), state: 'waiting_review', currentStageId: 'review', stageTitle: 'Human review', canReview: true,
      outputs: [{ id: 'report', label: 'Report', contentHash: 'a'.repeat(64), text: 'Saved report' }],
      review: { id: 'review-a', subjectHash: 'b'.repeat(64), returnStageId: 'research' } }
    const confirm = vi.spyOn(window, 'confirm').mockReturnValue(false)
    mount(fixture([review])); await openTask(); await screen.findByRole('heading', { name: 'First research' })
    fireEvent.click(screen.getByRole('button', { name: `2. ${t('wfReview')}: Human review`, exact: true }))
    fireEvent.click(screen.getByRole('button', { name: t('wfReturn'), exact: true }))
    fireEvent.change(screen.getByRole('textbox', { name: t('wfFeedback') }), { target: { value: 'Keep these comments' } })
    fireEvent.click(screen.getByRole('button', { name: t('close'), exact: true }))
    fireEvent.click(within(screen.getByRole('navigation', { name: t('wfBreadcrumb') })).getByRole('button', { name: 'Workflow' }))
    expect(confirm).toHaveBeenCalledWith(t('wfLeaveConfirm'))
    fireEvent.click(screen.getByRole('button', { name: `2. ${t('wfReview')}: Human review`, exact: true }))
    expect((screen.getByRole('textbox', { name: t('wfFeedback') }) as HTMLTextAreaElement).value).toBe('Keep these comments')
  })
  it('keeps unsaved task input when closing the inline composer is declined', async () => {
    const confirm = vi.spyOn(window, 'confirm').mockReturnValue(false)
    mount(); await screen.findByRole('table'); fireEvent.click(screen.getByRole('button', { name: `${t('wfNewTask')} · Research flow` }))
    fireEvent.change(screen.getByLabelText('Source material'), { target: { value: 'Keep this input' } })
    fireEvent.click(screen.getByRole('button', { name: t('cancel'), exact: true }))
    expect(confirm).toHaveBeenCalledWith(t('wfLeaveConfirm'))
    expect((screen.getByLabelText('Source material') as HTMLTextAreaElement).value).toBe('Keep this input')
  })
  it('keeps inline task input when navigation to Agent chat is declined', async () => {
    const onOpenChat = vi.fn(async () => true), confirm = vi.spyOn(window, 'confirm').mockReturnValue(false)
    mount(fixture(), { onOpenChat }); await screen.findByRole('table')
    fireEvent.click(screen.getByRole('button', { name: `${t('wfNewTask')} · Research flow` }))
    fireEvent.change(screen.getByLabelText('Source material'), { target: { value: 'Keep my task input' } })
    fireEvent.click(screen.getByRole('button', { name: t('wfNew'), exact: true }))
    expect(confirm).toHaveBeenCalledWith(t('wfLeaveConfirm'))
    expect(onOpenChat).not.toHaveBeenCalled()
    expect((screen.getByLabelText('Source material') as HTMLTextAreaElement).value).toBe('Keep my task input')
  })
  it('guides creation to chat using direct save tools without starting a task', async () => {
    const onOpenChat = vi.fn(async () => true), { call } = mount(fixture([], []), { onOpenChat })
    await screen.findByRole('table')
    fireEvent.click(screen.getByRole('button', { name: t('wfNew') }))
    expect(onOpenChat.mock.calls[0]![0]).toContain('workflow_create')
    expect(onOpenChat.mock.calls[0]![0]).not.toContain('workflow_create_draft')
    expect(call.mock.calls.some(([method]) => method === 'createTask')).toBe(false)
  })
})
