/** Native Cordis + filesystem + attachment integration. No Host, network or model calls.
 * The workspace registry, tool registry, write policy and current-session authorization are fixtures.
 * Usage: DSH_RUNTIME_ROOT=/path/to/dsh/node_modules DSH_AGENT_TEST_DIR=/tmp/fixture node scripts/test-agent-images-native.mjs
 */
import assert from 'node:assert/strict'
import { mkdir, mkdtemp, readFile, realpath, symlink, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import * as kanban from '../index.js'

assert.ok(process.env.DSH_RUNTIME_ROOT, 'Set DSH_RUNTIME_ROOT to the installed DSH node_modules directory')
const runtimeRequire = createRequire(join(resolve(process.env.DSH_RUNTIME_ROOT), '@deepseek-ai/dsh/package.json'))
const nativeImport = name => import(pathToFileURL(runtimeRequire.resolve(name)).href)
const [{ Context }, { LocalFileSystem }, { LocalAttachmentStore }, { default: sharp }, { contentHasImage }] = await Promise.all([
  nativeImport('@deepseek-ai/cordis'), nativeImport('@deepseek-ai/dsh-fs-local'),
  nativeImport('@deepseek-ai/dsh-attachment-local'), nativeImport('sharp'), nativeImport('@deepseek-ai/dsh-llm'),
])
const temporaryRoots = await Promise.all([tmpdir(), '/tmp'].map(path => realpath(path)))
const temporaryRoot = temporaryRoots[0]
const requestedRoot = resolve(process.env.DSH_AGENT_TEST_DIR || temporaryRoot)
assert.ok(requestedRoot.startsWith('/tmp/') || temporaryRoots.some(root => requestedRoot === root || requestedRoot.startsWith(root + '/')), 'Only a temporary test directory is writable')
await mkdir(requestedRoot, { recursive: true })
const rootPath = await realpath(requestedRoot)
assert.ok(temporaryRoots.some(root => rootPath === root || rootPath.startsWith(root + '/')), 'Test directory must resolve inside temporary storage')
const runPath = await mkdtemp(join(rootPath, 'run-'))
const dshHome = join(runPath, 'home')
const workspace = { id: 'native-agent-test', path: join(runPath, 'workspace'), title: 'Native Agent image fixture' }
await mkdir(workspace.path)
const sessionId = 'native-test-current-session'
const sessionImages = new Map()
const sessionCalls = []
const checks = []
const checked = name => checks.push(name)
const exec = { agent: { session: { id: sessionId, header: { cwd: workspace.path } } } }
const fiveFields = ['attachmentId', 'bytes', 'height', 'mediaType', 'width']

async function boot() {
  const ctx = new Context()
  const registered = new Map()
  const errors = []
  ctx.on('internal/error', error => errors.push(error))
  await ctx.plugin(LocalFileSystem, { cwd: workspace.path })
  await ctx.plugin(LocalAttachmentStore, { dshHome })
  await ctx.plugin({ apply(scope) {
    scope.provide('tools', { register(tool) { registered.set(tool.name, tool) } })
    scope.provide('workspaceRegistry', {
      get: id => id === workspace.id ? workspace : undefined,
      list: () => [workspace], resolveByPath: async path => path === workspace.path ? workspace : undefined,
    })
    scope.provide('sandboxPolicy', { defaultMode: 'workspace-write', resolve: () => ({ mode: 'workspace-write' }) })
    // Contract fixture only: the real controller authorizes against session events, then reads this same native store.
    scope.provide('sessionController', { async attachment(request) {
      sessionCalls.push(request)
      const ref = request.sessionId === sessionId ? sessionImages.get(request.attachmentId) : undefined
      if (!ref) throw new Error('ATTACHMENT_NOT_REFERENCED')
      const stored = await ctx.get('attachments').readImage(ref)
      return { attachment: stored.ref, data: Buffer.from(stored.data).toString('base64') }
    } })
  } })
  await ctx.plugin(kanban)
  assert.equal(registered.size, 19)
  const tool = name => { assert.ok(registered.has(name), 'Tool must be registered'); return registered.get(name) }
  const call = (name, args) => tool('kanban_' + name).execute(args, exec)
  return { ctx, tool, call, store: ctx.get('attachments'), async dispose() { await ctx.fiber.dispose(); assert.deepEqual(errors, []) } }
}

let host
try {
  host = await boot()
  const png = await sharp({ create: { width: 320, height: 200, channels: 3, background: '#4169e1' } }).png().toBuffer()
  await writeFile(join(workspace.path, 'fixture.png'), png)
  const created = await host.call('add_card', { title: 'Native Agent image' })
  assert.equal(created.ok, true, created.message)
  const id = created.cardId
  const added = await host.call('add_image', { id, source: { kind: 'workspace_file', path: 'fixture.png' } })
  assert.equal(added.ok, true, added.message)
  const board = JSON.parse(await readFile(join(workspace.path, '.dsh-kanban.json'), 'utf8'))
  const ref = board.cards.find(card => card.id === id).images[0]
  assert.equal(board.schemaVersion, 6)
  assert.deepEqual(Object.keys(ref).sort(), fiveFields)
  const stored = await host.store.readImage(ref)
  assert.equal(createHash('sha256').update(stored.data).digest('hex'), ref.attachmentId.slice(7))
  assert.equal(stored.data.byteLength, ref.bytes)
  assert.deepEqual([ref.width, ref.height], [320, 200])
  assert.equal((await sharp(stored.data).metadata()).width, 320)
  checked('Agent workspace_file uses real LocalFileSystem and native decoding, storage and five-field persistence')

  const read = await host.call('read_image', { id, attachmentId: ref.attachmentId })
  assert.equal(read.ok, true, read.message)
  const blocks = host.tool('kanban_read_image').output.render({}, read)
  assert.equal(contentHasImage(blocks), true)
  const image = blocks.find(block => block.type === 'image')
  assert.deepEqual(image.attachment, ref)
  assert.deepEqual((await host.store.readImage(image.attachment)).data, stored.data)
  checked('kanban_read_image renders an actual DSH image content block whose native bytes are readable')

  const sessionPng = await sharp({ create: { width: 240, height: 160, channels: 3, background: '#f4a460' } }).png().toBuffer()
  const sessionRef = await host.store.saveImage({ data: sessionPng, mediaType: 'image/png', name: 'fixture-session.png' })
  sessionImages.set(sessionRef.attachmentId, sessionRef)
  const linked = await host.call('add_image', { id, source: { kind: 'session_attachment', attachmentId: sessionRef.attachmentId, sessionId: 'cannot-override-current-session' } })
  assert.equal(linked.ok, true, linked.message)
  assert.deepEqual(sessionCalls, [{ sessionId, attachmentId: sessionRef.attachmentId }])
  assert.equal((await host.call('add_image', { id, source: { kind: 'session_attachment', attachmentId: 'sha256:' + '0'.repeat(64) } })).ok, false)
  checked('session_attachment uses native bytes and the current-session controller contract; the session controller is a fixture')

  await writeFile(join(runPath, 'outside.png'), png)
  await symlink(join(runPath, 'outside.png'), join(workspace.path, 'escape.png'))
  assert.equal((await host.call('add_image', { id, source: { kind: 'workspace_file', path: 'escape.png' } })).ok, false)
  const other = await host.call('add_card', { title: 'Other card' })
  assert.equal((await host.call('read_image', { id: other.cardId, attachmentId: ref.attachmentId })).ok, false)
  checked('Real filesystem symlink escape and cross-card reads are denied')

  await host.dispose()
  host = await boot()
  const reloaded = await host.call('get_card', { id })
  assert.equal(reloaded.card.images.length, 2)
  for (const image of reloaded.card.images) {
    assert.deepEqual(Object.keys(image).sort(), fiveFields)
    const stored = await host.store.readImage(image)
    assert.equal((await sharp(stored.data).metadata()).width, image.width)
    assert.equal((await host.call('read_image', { id, attachmentId: image.attachmentId })).ok, true)
  }
  checked('A fresh Cordis context, filesystem and attachment store reload both image references and bytes')
  await writeFile(join(runPath, 'result.json'), JSON.stringify({ checks, sessionController: 'contract fixture; native storage is real', workspace: workspace.path, dshHome }, null, 2))
  console.log(JSON.stringify({ passed: checks.length, checks, result: join(runPath, 'result.json') }, null, 2))
} finally {
  await host?.dispose()
}
