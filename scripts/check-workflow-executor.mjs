// Real installed DSH AgentLoop, native tool executor and JSONL with a local fake
// model and preset seam. No real profile, network, model request or user task.
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import { mkdtemp, readFile, realpath, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { randomUUID } from 'node:crypto'
import { createDshExecutor, NATIVE_POLICY, readPersistedSession, withStoppedNativeExecution } from '../workflow/dsh-adapter.js'
import { openWorkflowStore } from '../workflow/store.js'
import { createWorkflowRunner, readStageHandoff } from '../workflow/runner.js'
import { mountWorkflowManagementTools } from '../workflow/management-tools.js'
import { createWorkflowCore } from '../workflow/index.js'
import { createHash } from 'node:crypto'
const installed = process.env.DSH_INSTALL_DIR
assert(installed, 'DSH_INSTALL_DIR must name the installed DSH runtime')
const require = createRequire(join(installed, 'package.json'))
const load = name => import(pathToFileURL(require.resolve(`@deepseek-ai/${name}`)).href)
const { Context } = await load('cordis')
const { LlmAdapter, assistantStreamFirstTokenTime } = await load('dsh-llm')
const { installModelSelection } = await load('dsh-agent')
const { ToolExecutionPipeline } = await load('dsh-tools/pipeline')
const temporary = await realpath(await mkdtemp(join(tmpdir(), 'dsh-workflow-native-')))
process.env.DSH_HOME = temporary
process.env.DSH_PROFILE_DIR = join(temporary, 'unused-profile')
globalThis.fetch = async () => { throw Error('Network forbidden in isolated integration') }
const root = new Context(), errors = []
root.on('internal/error', error => errors.push(error))
const requestedModels = []
let executor, owner, bodies = 0, denied = false, rounds = 32, calls = 0, mounted = 0, holding = false, toolStarted, nativeReportReads = 0
try {
  for (const name of ['dsh-session', 'dsh-session-projection', 'dsh-system-prompt', 'dsh-tools', 'dsh-llm', 'dsh-agent']) {
    const module = await load(name); await root.plugin(module.default ?? module)
  }
  for (const [name, config] of [
    ['dsh-session-persistence-jsonl', { root: join(temporary, 'sessions'), compression: 'none' }],
    ['dsh-jobs-local', undefined], ['dsh-tool-executor-native', undefined], ['dsh-agent-loop', { agents: [] }],
  ]) { const module = await load(name); await root.plugin(module.default ?? module, config) }
  await root.plugin({ apply(ctx) {
    ctx.provide('agentPresets', {
      resolve: async id => { assert.equal(id, undefined); return { id: 'host-default-fixture' } },
      mount: async (_scope, id) => { assert.equal(id, 'host-default-fixture'); mounted++ },
    })
  } })
  class LocalModel extends LlmAdapter {
    async *stream(options) {
      calls++
      requestedModels.push(options.model)
      assert.deepEqual(options.tools.map(tool => tool.name), ['host_probe'])
      const previous = options.messages.filter(message => message.role === 'tool')
      const next = previous.length < rounds
      let args = {}, reply = 'Native tools completed the stage.'
      if (['first-stage', 'second-stage'].includes(options.model)) {
        const userContent = options.messages.findLast(message => message.role === 'user').content
        const prompt = typeof userContent === 'string' ? userContent : userContent.filter(block => block.type === 'text').map(block => block.text).join('\n')
        assert(!prompt.includes('Complete evidence and source details.'))
        const context = JSON.parse(prompt.split('\n\n').find(part => part.startsWith('{"input":')))
        if (options.model === 'second-stage') {
          assert.equal(context.previousStages[0].summary.conclusions[0].text, 'Verified first-stage conclusion')
          args = { path: context.previousStages[0].report.path }
        }
        reply = `NATIVE-FULL-DETAIL: ${'Complete evidence and source details. '.repeat(600)}\n<workflow-handoff>${JSON.stringify({
          conclusions: [{ text: `Verified ${options.model} conclusion`, evidence: ['NATIVE-FULL-DETAIL section in this report'] }], openIssues: [], nextActions: [],
        })}</workflow-handoff>`
      }
      const block = next
        ? { type: 'tool-call', id: randomUUID(), name: 'host_probe', arguments: JSON.stringify(args) }
        : { type: 'text', text: denied ? 'Host authorization refused the operation.' : reply }
      yield { type: 'block-start', index: 0, blockType: block.type }
      if (next) yield { type: 'tool-call-delta', index: 0, id: block.id, name: block.name, argumentsDelta: block.arguments }
      else yield { type: 'text-delta', index: 0, text: block.text }
      yield { type: 'block-end', index: 0, block }
      yield { type: 'finish', reason: { kind: next ? 'tool-calls' : 'stop' } }
    }
  }
  await root.plugin({ inject: ['llm', 'tools'], apply(ctx) {
    ctx.llm.registerAdapter(['local-workflow'], new LocalModel())
    ctx.tools.register({ name: 'host_probe', description: 'Host-owned fixture tool', parameters: { type: 'object', properties: { path: { type: 'string' } }, additionalProperties: false },
      output: { schema: { type: 'object', additionalProperties: true }, render: (_args, value) => [{ type: 'text', text: JSON.stringify(value) }] },
      execute: async (_args, execution) => {
        bodies++
        if (holding) {
          toolStarted()
          await new Promise((resolve, reject) => {
            execution.signal.addEventListener('abort', () => reject(execution.signal.reason), { once: true })
            execution.signal.throwIfAborted()
          })
        }
        if (_args.path) {
          assert.match(_args.path, /^\.workflow-results\/[a-f0-9-]+\.md$/)
          const text = await readFile(join(execution.agent.session.header.cwd, _args.path), 'utf8')
          assert(text.includes('NATIVE-FULL-DETAIL')); nativeReportReads++
          return { ok: true, text }
        }
        return { ok: true }
      },
    })
    ctx.tools.guard(() => denied ? 'Host authorization refused' : undefined)
  } })
  await root.plugin({ inject: ['agents', 'sessions', 'sessionPersistence', 'agentPresets', 'jobs'], apply(ctx) {
    owner = ctx; executor = createDshExecutor(ctx, { installModelSelection, modelSelection: { provider: 'local-workflow', model: 'local' } })
  } })
  assert(executor, errors.map(String).join('; '))
  const request = () => ({ attemptId: randomUUID(), sessionId: randomUUID(), requestId: randomUUID(), cwd: temporary, prompt: 'Use host tools and return a report.' })
  const first = request(), result = await executor.run(first)
  assert.equal(bodies, 32); assert.equal(calls, 33); assert.equal(mounted, 1)
  assert.equal(result.evidence.policy, NATIVE_POLICY)
  assert.equal(result.evidence.completed, true); assert.equal(result.evidence.quiescent, true)
  const beforeRecovery = calls
  const recoveredAttempt = { ...first, id: first.attemptId, executorSnapshot: { policy: NATIVE_POLICY, cwd: temporary }, messageId: result.messageId, turnNumber: result.turnNumber }
  const coldProof = await withStoppedNativeExecution(root, recoveredAttempt, evidence => evidence)
  assert.equal(coldProof.ownership, 'exclusive-session')
  assert.equal(coldProof.endReason, 'completed')
  const viewer = await root.agents.withoutInitiator(() => root.agents.resume({ resumeSessionId: first.sessionId,
    setup: async scope => { installModelSelection(scope) } }))
  try {
    const liveProof = await withStoppedNativeExecution(root, recoveredAttempt, evidence => evidence)
    assert.equal(liveProof.ownership, 'live-idle')
    assert.equal(liveProof.turnNumber, result.turnNumber)
    assert.equal(viewer.agent.phase.kind, 'idle')
  } finally { await viewer.dispose() }
  assert.equal(calls, beforeRecovery, 'Recovery must not dispatch a model or continue the Session')
  console.log('PASS: native cold-session exclusive ownership and live idle maintenance both verify stop evidence without model calls or cancelling later chat.')
  assert.equal(result.text, 'Native tools completed the stage.')
  assert.equal(owner.agents.get(first.sessionId), undefined)
  assert.equal((await executor.inspectReadonly(first)).status, 'completed-evidence')
  denied = true; rounds = 1
  const refused = await executor.run(request())
  assert.equal(bodies, 32, 'Workflow must never bypass the host tool guard')
  assert.equal(refused.text, 'Host authorization refused the operation.')
  assert.equal(refused.evidence.completed, true)
  denied = false
  holding = true
  const started = new Promise(resolve => { toolStarted = resolve }), cancelledInput = request()
  const cancelled = assert.rejects(executor.run(cancelledInput), error => error.code === 'WORKFLOW_CANCELLED'
    && error.evidence.quiescent === true && error.evidence.completed === false)
  await started
  executor.cancel(cancelledInput.attemptId)
  await cancelled
  assert.equal(owner.agents.get(cancelledInput.sessionId), undefined)
  holding = false
  console.log('PASS: cancelling a running native tool propagates the DSH abort signal and drains the owned Agent before settlement.')
  const store = openWorkflowStore(join(temporary, 'workflow.sqlite')), objects = new Map()
  const attachments = {
    async saveFile({ data, name }) {
      const bytes = Buffer.from(data), attachmentId = `sha256:${createHash('sha256').update(bytes).digest('hex')}`
      objects.set(attachmentId, bytes)
      return { attachmentId, name, bytes: bytes.length }
    },
    async *readFileStream(ref) { yield objects.get(ref.attachmentId) },
  }
  const workspaceRegistry = { get: id => id === 'native-workspace' ? { id, path: temporary, status: async () => 'ok' } : undefined }
  const runner = createWorkflowRunner({ store, executor, attachments, workspaceRegistry })
  const core = createWorkflowCore({ store, runner, attachments, workspaceRegistry, profileDir: temporary,
    readSessionLog: (id, signal) => readPersistedSession(root.sessionPersistence, id, signal), firstTokenTime: assistantStreamFirstTokenTime,
    currentModel: () => ({ provider: 'local-workflow', model: 'local' }) })
  const actor = { kind: 'user', id: 'isolated-fixture' }
  try {
    const authoringSelection = { provider: 'local-workflow', model: 'authoring-chat', reasoningEffort: 'ultra' }
    const authoring = await root.agents.withoutInitiator(() => root.agents.create({ sessionId: randomUUID(), meta: { cwd: temporary }, agentOptions: authoringSelection, setup: async scope => { installModelSelection(scope) } }))
    const registered = new Map()
    const removeManagement = mountWorkflowManagementTools({ tools: { register: tool => { registered.set(tool.name, tool); return () => registered.delete(tool.name) } },
      workingDirectory: { get: session => session.header.cwd }, workspaceRegistry: { resolveByPath: async () => workspaceRegistry.get('native-workspace') } }, core)
    try {
      const execution = { agent: authoring.agent, signal: new AbortController().signal }
      const definition = { stages: [{ id: 'draft', kind: 'agent', title: 'Draft', prompt: 'Create a report' }] }
      const authored = await registered.get('workflow_create').execute({ requestId: randomUUID(), name: 'Chat inheritance fixture', definition }, execution)
      assert.deepEqual(store.getWorkflow(authored.id).definition.stages[0].modelSelection, authoringSelection)
      assert(!Object.hasOwn(authored.definition.stages[0], 'modelSelection'))
      assert(!registered.has('workflow_models'))
      const manual = { provider: 'local-workflow', model: 'user-choice', reasoningEffort: 'high' }
      const changed = core.updateWorkflow({ requestId: randomUUID(), workflowId: authored.id, expectedRevision: authored.revision, name: authored.name,
        definition: { ...definition, stages: [{ ...definition.stages[0], modelSelection: manual }] } }, actor)
      await registered.get('workflow_update').execute({ requestId: randomUUID(), workflowId: authored.id, expectedRevision: changed.revision, name: authored.name,
        definition: { stages: [{ ...definition.stages[0], prompt: 'Changed instructions' }, { id: 'next', kind: 'agent', title: 'Next', prompt: 'Follow up' }] } }, execution)
      assert.deepEqual(store.getWorkflow(authored.id).definition.stages.map(stage => stage.modelSelection), [manual, authoringSelection])
      console.log('PASS: actual DSH Agent.model.current drives authoring; user model choices survive Agent edits; new stages inherit chat settings; model tools/fields are absent.')
    } finally { removeManagement(); await authoring.dispose() }
    const modelStart = requestedModels.length; rounds = 2
    const draft = await core.createWorkflow({ requestId: randomUUID(), workspaceId: 'native-workspace', name: 'Native integration', definition: {
      stages: [{ id: 'work', kind: 'agent', title: 'Native work', prompt: 'Use host tools.', modelSelection: { provider: 'local-workflow', model: 'first-stage' } },
        { id: 'write', kind: 'agent', title: 'Native writing', prompt: 'Use the previous result.', modelSelection: { provider: 'local-workflow', model: 'second-stage' } },
        { id: 'review', kind: 'review', title: 'Human review', returnStageId: 'work' }],
    } }, actor)
    const published = await core.getWorkflow(draft.id)
    const created = await core.createTask({ requestId: randomUUID(), workspaceId: 'native-workspace', workflowId: published.id,
      title: 'Isolated native task', text: 'Fixture data only', modelSelection: { provider: 'local-workflow', model: 'local' } }, actor)
    await runner.start(); await runner.whenIdle()
    const task = await core.getTask(created.id)
    assert.equal(task.state, 'waiting_review', JSON.stringify({ attention: task.attention, attempts: task.attempts, errors: errors.map(String) }))
    assert.deepEqual(requestedModels.slice(modelStart), ['first-stage', 'first-stage', 'first-stage', 'second-stage', 'second-stage', 'second-stage'])
    assert.deepEqual(store.getTask(task.id).attempts.map(attempt => attempt.executorSnapshot.modelSelection.model), ['first-stage', 'second-stage'])
    assert.equal(task.outputs[0].text, undefined)
    const report = await core.getArtifact(task.id, task.outputs[0].id)
    assert.equal(readStageHandoff(report.text).conclusions[0].text, 'Verified first-stage conclusion')
    assert.equal(nativeReportReads, 2, 'The second stage reads the full upstream report through the native tool executor only on demand')
    console.log('PASS: native two-stage execution transfers only the structured handoff/index and reads the complete prior report through a DSH tool on demand, with no extra summarizer call.')
    assert.equal(store.getTask(task.id).attempts[0].executorSnapshot.policy, NATIVE_POLICY)
    assert(!Object.hasOwn(store.getTask(task.id).executionConfig, 'permissions'))
    await assert.rejects(core.decideReview({ requestId: randomUUID(), taskId: task.id, expectedRevision: task.revision,
      reviewId: task.review.id, subjectHash: task.review.subjectHash, decision: 'approved' }, { kind: 'agent', id: 'fixture' }), error => error.code === 'WF_HUMAN_REQUIRED')
    assert.equal(store.getTask(task.id).state, 'waiting_review')
    const callsBeforeTrace = requestedModels.length
    const trace = await core.getStageTrace({ taskId: task.id, stageId: 'work', limit: 200 })
    assert.equal(trace.summary.toolCallCount, 2)
    assert(trace.tools.every(tool => typeof tool.elapsedMs === 'number' && tool.elapsedMs >= 0))
    assert(trace.modelResponses.every(response => typeof response.firstOutputWaitMs === 'number'))
    assert(trace.entries.some(entry => entry.type === 'tool/call' && entry.name === 'host_probe'))
    assert(trace.entries.some(entry => entry.type === 'tool/result'))
    assert.equal(requestedModels.length, callsBeforeTrace, 'Trace reads must not dispatch model work')
    assert.doesNotThrow(() => JSON.stringify(trace))
    const reader = await root.agents.withoutInitiator(() => root.agents.create({ sessionId: randomUUID(), meta: { cwd: temporary }, setup: async scope => { installModelSelection(scope) } }))
    const removeTools = mountWorkflowManagementTools({ tools: root.tools,
      workingDirectory: { get: session => session.header.cwd }, workspaceRegistry: { resolveByPath: async () => workspaceRegistry.get('native-workspace') } }, core)
    try {
      const pipeline = new ToolExecutionPipeline(root)
      for (const [name, args] of [
        ['workflow_get_task', { taskId: task.id }],
        ['workflow_list', {}],
        ['workflow_list_tasks', { workflowId: published.id }],
        ['workflow_get_stage_trace', { taskId: task.id, stageId: 'work' }],
      ]) {
        const prepared = await pipeline.prepare({ callId: randomUUID(), name, arguments: args, agent: reader.agent, signal: new AbortController().signal })
        assert.equal(prepared.kind, 'dispatch')
        const result = await pipeline.complete(prepared.exec, await pipeline.dispatch(prepared.exec))
        assert.equal(result.isError, false, `${name}: ${JSON.stringify(result)}`)
        assert.deepEqual(JSON.parse(result.content[0].text), result.value)
        if (name === 'workflow_get_task') assert.equal(result.value.attempts.length, 2)
      }
      assert.equal(requestedModels.length, callsBeforeTrace, 'Management reads must not dispatch model work')
      console.log('PASS: task details, workflow/history lists and stage traces pass the installed DSH tool pipeline lossless-JSON output validation.')
    } finally { removeTools(); await reader.dispose() }
    console.log('PASS: real persisted stage transcript, native first-token timing and paired tool durations read without resuming or dispatching an Agent.')
    console.log('PASS: real Core + SQLite + runner + native tools + JSONL: two stage models, no permission fields, completed reports, waiting for human review; Agent approval refused.')
  } finally { await runner.dispose(); store.close() }
  assert.equal(errors.length, 0, errors.map(String).join('; '))
  console.log('PASS: real native executor inherited host tools and guard; 32 calls/33 steps; durable report and cold inspection; native disposal; host denial prevented tool body.')
} finally {
  await executor?.dispose(); await root.fiber.dispose(); await rm(temporary, { recursive: true, force: true })
}
