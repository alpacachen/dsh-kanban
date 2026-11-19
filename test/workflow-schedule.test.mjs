// @vitest-environment node
import { afterEach, expect, it, vi } from 'vitest'
import { chmodSync, mkdtempSync, realpathSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { openWorkflowStore } from '../workflow/store.js'
import { createWorkflowCore } from '../workflow/index.js'
import { createWorkflowScheduler, nextScheduleTime } from '../workflow/schedule.js'

const USER = { kind: 'user', id: 'fixture-owner' }
const config = { repeat: 'weekly', weekdays: [1, 2, 3, 4, 5], timeZone: 'Asia/Shanghai', time: '09:00' }
const definition = { stages: [{ id: 'run', kind: 'agent', title: 'Summarize', prompt: 'Original' }] }
const cleanup = []
afterEach(async () => {
  try { for (const dispose of cleanup.splice(0).reverse()) await dispose() }
  finally { vi.useRealTimers() }
})

function fixture(instant, { modelInfoFor, path = ':memory:' } = {}) {
  vi.useFakeTimers()
  vi.setSystemTime(new Date(instant))
  const store = openWorkflowStore(path)
  cleanup.push(() => store.close())
  const kick = vi.fn()
  const workspace = { id: 'workspace', path: realpathSync(tmpdir()), status: async () => 'ok' }
  const core = createWorkflowCore({ store, runner: { kick, status: () => ({}) }, attachments: {}, workspaceRegistry: { get: () => workspace },
    currentModel: () => ({ provider: 'fixture', model: 'fixture' }), profileDir: tmpdir(), modelInfoFor,
    onScheduleChange: () => scheduler.wake() })
  const dispatch = []
  const scheduler = createWorkflowScheduler({ store, createTask(...args) {
    const result = core.createTask(...args)
    dispatch.push({ args, result })
    return result
  } })
  cleanup.push(() => scheduler.dispose())
  const createWorkflow = () => core.createWorkflow({ requestId: 'new-flow', workspaceId: workspace.id, name: 'Summary', definition }, USER)
  const save = (flow, schedule = config) => {
    const expectedRevision = flow.scheduleRevision ?? 0
    return core.saveWorkflowSchedule({ requestId: `save-${expectedRevision}`, workflowId: flow.id, expectedRevision, schedule }, USER)
  }
  return { store, core, kick, scheduler, dispatch, createWorkflow, save }
}

it('creates one normal task from the latest saved version and records the scheduled time', async () => {
  const { core, store, scheduler, createWorkflow, save, dispatch, kick } = fixture('2030-01-04T00:59:59Z')
  const flow = save(await createWorkflow())
  const updated = core.updateWorkflow({ requestId: 'workflow-edit', workflowId: flow.id, expectedRevision: flow.revision,
    name: flow.name, definition: { stages: [{ ...definition.stages[0], prompt: 'Updated' }] } }, USER)
  scheduler.start()
  await vi.advanceTimersByTimeAsync(1000)
  await dispatch[0].result
  const overview = await core.listTasks(flow.workspaceId)
  expect(overview.tasks).toHaveLength(1)
  const [task] = overview.tasks
  const at = Date.parse('2030-01-04T01:00:00Z')
  expect(task).toMatchObject({ workflowVersionId: updated.versionId, title: updated.name, inputText: '', state: 'queued', scheduled: { at, timeZone: config.timeZone } })
  expect(await core.getTask(task.id)).toMatchObject({ scheduled: task.scheduled, stages: [{ prompt: 'Updated' }] })
  expect(store.getTask(task.id).events[0].actor.kind).toBe('system')
  expect(core.getWorkflow(flow.id).schedule).toMatchObject({ nextAt: Date.parse('2030-01-07T01:00:00Z'), last: { outcome: 'created' } })
  expect(kick).toHaveBeenCalledOnce()
  await core.createTask(...dispatch[0].args)
  expect(store.listTaskSummaries()).toHaveLength(1)
})

it('skips a persisted occurrence missed while stopped and retains the next weekday after reopen', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'workflow-schedule-'))
  cleanup.push(() => rmSync(directory, { recursive: true, force: true }))
  const path = join(directory, 'workflow.sqlite')
  const host = fixture('2030-01-04T00:59:59Z', { path })
  const flow = host.save(await host.createWorkflow())
  await host.scheduler.dispose()
  host.store.close()
  const reopened = fixture('2030-01-04T01:00:01Z', { path })
  reopened.scheduler.start()
  await vi.advanceTimersByTimeAsync(0)
  expect(reopened.store.listTaskSummaries()).toEqual([])
  expect(reopened.core.getWorkflow(flow.id).schedule).toMatchObject({ nextAt: Date.parse('2030-01-07T01:00:00Z'),
    last: { outcome: 'missed', scheduledAt: Date.parse('2030-01-04T01:00:00Z') } })
})

it('removing and recreating a plan invalidates the old trigger even when the due time matches', async () => {
  let completePreflight
  const preflight = new Promise(resolve => { completePreflight = resolve })
  const host = fixture('2030-01-04T00:59:59Z', { modelInfoFor: () => preflight })
  const flow = host.save(await host.createWorkflow(), { ...config, text: 'Old plan input' })
  host.scheduler.start()
  await vi.advanceTimersByTimeAsync(1000)
  let recreated
  try {
    expect(host.dispatch).toHaveLength(1)
    expect(host.dispatch[0].args[0].text).toBe('Old plan input')
    const removed = host.save(flow, null)
    expect(removed.schedule).toBeUndefined()
    expect(host.store.nextWorkflowScheduleTime()).toBeUndefined()
    vi.setSystemTime(new Date('2030-01-04T00:59:59Z'))
    recreated = host.save(removed)
    expect(recreated.schedule.nextAt).toBe(flow.schedule.nextAt)
  } finally { completePreflight(null) }
  await expect(host.dispatch[0].result).rejects.toMatchObject({ code: 'WF_SCHEDULE_CHANGED' })
  expect(host.store.listTaskSummaries()).toEqual([])
  expect(host.core.getWorkflow(flow.id)).toEqual(recreated)
  expect(recreated.schedule).not.toHaveProperty('text')
})

it('ends a one-shot after a failed preflight and surfaces the cause', async () => {
  const host = fixture('2030-01-04T00:59:59Z', { modelInfoFor: () => { throw Error('Private provider failure') } })
  const { weekdays, ...settings } = config
  const flow = host.save(await host.createWorkflow(), { ...settings, repeat: 'once', date: '2030-01-04' })
  host.scheduler.start()
  await vi.advanceTimersByTimeAsync(1000)
  expect(host.store.listTaskSummaries()).toEqual([])
  expect(host.core.getWorkflow(flow.id).schedule).toMatchObject({ nextAt: null, last: { outcome: 'failed', errorCode: 'WF_MODEL_UNAVAILABLE' } })
})

it('opens the exact v1 schema and adds the schedule table without dropping existing data', () => {
  const directory = mkdtempSync(join(tmpdir(), 'workflow-schedule-v1-'))
  cleanup.push(() => rmSync(directory, { recursive: true, force: true }))
  const path = join(directory, 'workflow.sqlite')
  const legacy = new DatabaseSync(path)
  legacy.exec(readFileSync(new URL('../docs/workflow-model.schema.sql', import.meta.url), 'utf8'))
  legacy.exec('PRAGMA application_id=0x44535746; PRAGMA user_version=1;')
  legacy.prepare(`INSERT INTO wf_workflows (id,workspace_id,root_path_snapshot,execution_scope,name,draft_json,draft_revision,created_at,updated_at)
    VALUES ('legacy','workspace',?,'scope','Legacy',?,1,1,1)`).run(tmpdir(), JSON.stringify(definition))
  legacy.close()
  chmodSync(path, 0o600)
  const store = openWorkflowStore(path)
  cleanup.push(() => store.close())
  expect(store.getWorkflow('legacy')).toMatchObject({ name: 'Legacy', revision: 1, schedule: null })
})

it('skips nonexistent local hours and uses the earlier instance of a repeated hour', () => {
  const spring = { repeat: 'daily', time: '02:30', timeZone: 'America/New_York' }
  expect(nextScheduleTime(spring, Date.parse('2026-03-08T00:00:00Z'))).toBe(Date.parse('2026-03-09T06:30:00Z'))
  const fall = { ...spring, time: '01:30' }
  expect(nextScheduleTime(fall, Date.parse('2026-11-01T00:00:00Z'))).toBe(Date.parse('2026-11-01T05:30:00Z'))
  expect(nextScheduleTime(fall, Date.parse('2026-11-01T05:30:00Z'))).toBe(Date.parse('2026-11-02T06:30:00Z'))
})
