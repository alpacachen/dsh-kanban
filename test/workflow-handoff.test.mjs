// @vitest-environment node
import { afterEach, describe, expect, it } from 'vitest'
import { createHash, randomUUID } from 'node:crypto'
import { mkdtemp, readFile, realpath, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { openWorkflowStore } from '../workflow/store.js'
import { createWorkflowRunner, readStageHandoff } from '../workflow/runner.js'
import { publicTask } from '../workflow/index.js'

const actor = { kind: 'user', id: 'handoff-test' }
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const block = summary => `<workflow-handoff>${JSON.stringify(summary)}</workflow-handoff>`
const summary = n => ({ conclusions: [{ text: `Finding ${n}: 42 CNY as of 2026-11-13`, evidence: [`evidence-${n}.md#data`] }], openIssues: [`Uncertainty ${n}`], nextActions: [`Verify source ${n}`] })
const hosts = []
afterEach(async () => {
  for (const { root, runner, store } of hosts.splice(0)) {
    await runner.dispose(); store.close(); await rm(root, { recursive: true, force: true })
  }
})

describe('compact stage handoff', () => {
  it('reads the presentation-only native Markdown fence without changing the summary contract', () => {
    const expected = summary(1)
    expect(readStageHandoff('Report\n\n```workflow-handoff\n' + block(expected) + '\n```')).toEqual(expected)
  })
  it('extracts explicit evidence-linked summaries and never guesses or truncates missing/invalid summaries', () => {
    expect(readStageHandoff(`Full report\n${block(summary(1))}`)).toEqual(summary(1))
    for (const text of ['Long plain report', '<workflow-handoff>{broken}</workflow-handoff>', block({ ...summary(1), conclusions: [{ text: 'missing evidence' }] }),
      block({ ...summary(1), openIssues: ['x'.repeat(2401)] }), block({ conclusions: [], openIssues: [], nextActions: [] }),
      `${block(summary(1))}\nAnother full report`]) expect(readStageHandoff(text)).toBeNull()
    expect(readStageHandoff(block({ conclusions: [], openIssues: ['No trustworthy source'], nextActions: ['Read the full report'] }))).not.toBeNull()
  })

  async function boot({ failSecond = false } = {}) {
    const root = await realpath(await mkdtemp(join(tmpdir(), 'dsh-handoff-')))
    const store = openWorkflowStore(join(root, 'workflow.sqlite')), objects = new Map(), calls = [], reports = []
    const flow = store.createWorkflow({ requestId: randomUUID(), workspaceId: 'workspace', rootPath: root, executionScope: root, name: 'Handoff', definition: {
      stages: ['first', 'second', 'third'].map(id => ({ id, kind: 'agent', title: id, prompt: `Complete ${id}` })).concat({ id: 'review', kind: 'review', title: 'Review', returnStageId: 'first' }),
    } }, actor)
    const attachments = { async saveFile({ data, name }) {
      const attachmentId = `sha256:${hash(data)}`; objects.set(attachmentId, Buffer.from(data)); return { attachmentId, name, bytes: data.length }
    }, async *readFileStream(ref) { yield objects.get(ref.attachmentId) } }
    const executor = { async run(request) {
      const n = calls.length + 1
      const context = JSON.parse(request.prompt.split('\n\n').find(part => part.startsWith('{"input":')))
      calls.push({ ...request, context })
      expect(request.prompt).not.toContain('FULL-DETAIL-')
      for (const upstream of context.previousStages) {
        const text = await readFile(join(request.cwd, upstream.report.path), 'utf8')
        expect(hash(text)).toBe(upstream.report.contentHash)
        expect(upstream.summary).toEqual(readStageHandoff(text))
        for (const finding of upstream.summary.conclusions) {
          expect(await readFile(join(request.cwd, finding.evidence[0].split('#')[0]), 'utf8')).toBe('Exact source data: 42 CNY as of 2026-11-13')
        }
      }
      const messageId = randomUUID()
      await request.onBound({ sessionId: request.sessionId, requestId: request.requestId, messageId })
      await request.onObserved({ sessionId: request.sessionId, requestId: request.requestId, messageId, turnNumber: 1 })
      const text = `FULL-DETAIL-${n}: ${'Complete detailed evidence. '.repeat(1200)}\n${block(summary(n))}`
      const evidence = { kind: 'dsh-session-log', policy: 'dsh-native/v1', attemptId: request.attemptId, sessionId: request.sessionId,
        requestId: request.requestId, messageId, turnNumber: 1, completed: true, flushConfirmed: true, quiescent: true, ownedJobCount: 0,
        toolInvocationCount: 0, userSeq: 1, assistantSeq: 2, endSeq: 3, endReason: 'completed', outputSha256: hash(text) }
      if (failSecond && n === 2) throw Object.assign(new Error('Fixture failure'), { evidence: { ...evidence, completed: false } })
      await writeFile(join(request.cwd, `evidence-${n}.md`), 'Exact source data: 42 CNY as of 2026-11-13')
      reports.push(text)
      return { text, evidence }
    }, cancel() { return { requested: true } }, async dispose() {} }
    const runner = createWorkflowRunner({ store, executor, attachments, workspaceRegistry: { get: () => ({ path: root }) } })
    const task = store.createTask({ requestId: randomUUID(), workflowId: flow.id, title: 'Fixture', input: { text: 'Original goal' },
      executionConfig: { policy: 'dsh-native/v1', modelSelection: { provider: 'fixture', model: 'fixture' } } }, actor)
    const host = { root, store, runner, task, calls, reports, attachments }; hosts.push(host)
    await runner.start(); await runner.whenIdle()
    return host
  }

  it('retains every valid earlier conclusion/source, reads full reports on demand, and excludes superseded summaries after rework', async () => {
    const h = await boot()
    expect(h.calls.map(call => call.context.previousStages.length)).toEqual([0, 1, 2])
    const third = h.calls[2].context
    expect(third.input.text).toBe('Original goal')
    expect(third.previousStages.map(stage => stage.summary)).toEqual([summary(1), summary(2)])
    expect(third.previousStages.every(stage => !stage.needsRead)).toBe(true)
    expect(third.artifacts.some(file => file.path === 'evidence-1.md')).toBe(true)
    expect(JSON.stringify(third).length).toBeLessThan((h.reports[0].length + h.reports[1].length) / 8)
    const waiting = h.store.getTask(h.task.id)
    expect(waiting.state).toBe('waiting_review')
    h.store.decideReview({ requestId: randomUUID(), taskId: waiting.id, expectedRevision: waiting.revision, reviewId: waiting.review.id,
      subjectHash: waiting.review.subjectHash, decision: 'returned', feedback: 'Correct the source dates' }, actor)
    await h.runner.kick(); await h.runner.whenIdle()
    expect(h.calls).toHaveLength(6)
    expect(h.calls[3].context.previousStages).toEqual([])
    expect(h.calls[5].context.previousStages.map(stage => stage.summary)).toEqual([summary(4), summary(5)])
    expect(h.calls[5].context.feedback).toContain('Correct the source dates')
    expect(h.calls[5].context.artifacts.some(file => file.path.endsWith(`${h.calls[0].attemptId}.md`) && file.effective === false)).toBe(true)
  })

  it('reuses effective upstream summaries on retry and does not pass a failed attempt as evidence', async () => {
    const h = await boot({ failSecond: true }), failed = h.store.getTask(h.task.id)
    expect(failed.state).toBe('needs_attention')
    const view = await publicTask(failed, h.attachments)
    expect(view).toStrictEqual(JSON.parse(JSON.stringify(view)))
    h.store.retryTask({ requestId: randomUUID(), taskId: failed.id, expectedRevision: failed.revision }, actor)
    await h.runner.kick(); await h.runner.whenIdle()
    expect(h.store.getTask(h.task.id).state).toBe('waiting_review')
    expect(h.calls[2].context.previousStages.map(stage => stage.summary)).toEqual([summary(1)])
    expect(h.calls[3].context.previousStages.map(stage => stage.summary)).toEqual([summary(1), summary(3)])
    expect(h.calls).toHaveLength(4)
  })
})
