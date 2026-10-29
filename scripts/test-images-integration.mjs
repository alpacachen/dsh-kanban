/** Real HTTP + DSH attachment storage test. Only an explicitly supplied temporary Host is writable. */
import assert from 'node:assert/strict'
import { readFile, writeFile, realpath } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { createHash } from 'node:crypto'
import { pathToFileURL } from 'node:url'
import { createRequire } from 'node:module'

const home = await realpath(process.env.DSH_TEST_HOME || '')
const temporaryRoots = await Promise.all([tmpdir(), '/tmp'].map(path => realpath(path)))
const isTemporary = path => temporaryRoots.some(root => path.startsWith(root + '/'))
assert.ok(isTemporary(home), 'Only a temporary DSH_HOME may be tested')
const base = process.env.DSH_TEST_URL
assert.ok(base && new URL(base).hostname === '127.0.0.1', 'An explicit loopback test Host is required')
const workspaceId = process.env.DSH_TEST_WORKSPACE_ID
assert.ok(workspaceId, 'Explicit fixture workspace required')
const registry = JSON.parse(await readFile(join(home, 'storages/workspace.json'), 'utf8'))
const workspace = registry.tables.workspaces[workspaceId]
assert.ok(workspace && isTemporary(await realpath(workspace.path)), 'Fixture files must stay in temporary storage')
const output = resolve(home, '..', 'integration-result.json')
const { request } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const api = await request.newContext({ baseURL: base, extraHTTPHeaders: { Origin: base } })
const checks = []
const checked = (name) => checks.push(name)
const imagePath = (id, attachmentId, ws = workspaceId) => '/api/kanban/image?' + new URLSearchParams({ workspaceId: ws, cardId: id, ...(attachmentId ? { attachmentId } : {}) })
const call = async (method, args = {}) => {
  const response = await api.post('/api/kanban', { data: { method, args: { ...args, workspaceId } } })
  const value = await response.json()
  assert.equal(response.ok(), true, value.error)
  assert.equal(value.error, undefined)
  return value
}
try {
  const log = await readFile(process.env.DSH_TEST_LOG, 'utf8')
  const auth = [...log.matchAll(/https?:\/\/[^\s\u001b]+/g)].map(row => row[0]).reverse().find(value => new URL(value).origin === base)
  assert.ok(auth, 'Host startup authentication URL required')
  await api.get(auth)
  if (process.argv.includes('--verify-reload')) {
    const previous = JSON.parse(await readFile(output, 'utf8'))
    const { board } = await call('get')
    const card = board.cards.find(card => card.id === previous.cardId)
    assert.deepEqual(card.images, [previous.image])
    const image = await api.get(imagePath(card.id, previous.image.attachmentId))
    assert.equal(image.ok(), true)
    assert.equal(createHash('sha256').update(await image.body()).digest('hex'), previous.sha256)
    previous.restartVerified = true
    await writeFile(output, JSON.stringify(previous, null, 2))
    console.log('PASS: image metadata and actual bytes survived a complete Host restart')
  } else {
    const initial = await call('get')
    assert.ok(initial.imageLimits?.mediaTypes.includes('image/png'))
    checked('Native image service is available through the real Host')
    const created = await call('addCard', { title: '检查登录错误提示', note: '验证码失效后，应保留手机号并提示重新获取。', priority: 'high' })
    assert.ok(created.cardId)
    const id = created.cardId
    await call('addComment', { id, content: '已复现登录失败，请参考图片完成验收。' })
    const runtime = process.env.DSH_RUNTIME_ROOT
    assert.ok(runtime, 'Installed DSH runtime root required for its existing image library')
    const runtimeRequire = createRequire(join(runtime, '@deepseek-ai/dsh/package.json'))
    const { default: sharp } = await import(pathToFileURL(runtimeRequire.resolve('sharp')).href)
    const png = await sharp({ create: { width: 960, height: 600, channels: 3, background: '#edf2f8' } })
      .composite([{ input: Buffer.from('<svg width="960" height="600"><rect x="240" y="90" width="480" height="420" rx="14" fill="white"/><text x="300" y="170" font-family="sans-serif" font-size="30" fill="#222">Login verification</text><rect x="300" y="210" width="360" height="60" rx="6" fill="#eef0f4"/><text x="320" y="249" font-family="sans-serif" font-size="22">138 0000 0000</text><text x="300" y="325" font-family="sans-serif" font-size="22" fill="#b54337">Code expired. Try again.</text><rect x="300" y="370" width="360" height="56" rx="6" fill="#4576dd"/><text x="370" y="405" font-family="sans-serif" font-size="22" fill="white">Send a new code</text></svg>') }]).png().toBuffer()
    await writeFile(join(workspace.path, 'login-test.png'), png)
    const uploaded = await api.post(imagePath(id).replace('/api/kanban/image?', '/api/kanban/image/upload?'), { headers: { 'Content-Type': 'image/png' }, data: png })
    const saved = await uploaded.json()
    assert.equal(uploaded.ok(), true, saved.error)
    assert.equal(saved.persisted, true)
    const ref = saved.board.cards.find(card => card.id === id).images[0]
    assert.deepEqual(Object.keys(ref).sort(), ['attachmentId', 'bytes', 'height', 'mediaType', 'width'])
    checked('A real PNG is decoded, stored natively and attached using only five fields')
    const loaded = await api.get(imagePath(id, ref.attachmentId))
    assert.equal(loaded.ok(), true, `Image GET status ${loaded.status()}: ${loaded.ok() ? '' : await loaded.text()}`)
    const bytes = await loaded.body()
    assert.equal(bytes.length, ref.bytes)
    assert.equal(createHash('sha256').update(bytes).digest('hex'), ref.attachmentId.slice(7))
    const dimensions = await sharp(bytes).metadata()
    assert.equal(dimensions.width, ref.width)
    assert.equal(dimensions.height, ref.height)
    checked('Authenticated read returns real decodable bytes matching the stored reference')
    const repeated = await api.post(imagePath(id).replace('/api/kanban/image?', '/api/kanban/image/upload?'), { headers: { 'Content-Type': 'image/png' }, data: png })
    assert.equal((await repeated.json()).board.cards.find(card => card.id === id).images.length, 1)
    checked('Retrying the same upload does not create duplicate images')
    const bad = await api.post(imagePath(id).replace('/api/kanban/image?', '/api/kanban/image/upload?'), { headers: { 'Content-Type': 'image/png' }, data: Buffer.from('not an image') })
    assert.equal(bad.ok(), false)
    const svg = await api.post(imagePath(id).replace('/api/kanban/image?', '/api/kanban/image/upload?'), { headers: { 'Content-Type': 'image/svg+xml' }, data: Buffer.from('<svg/>') })
    assert.equal(svg.status(), 415)
    checked('Invalid bytes and unsupported content types are rejected')
    const oversized = await api.post(imagePath(id).replace('/api/kanban/image?', '/api/kanban/image/upload?'), { headers: { 'Content-Type': 'image/png' }, data: Buffer.alloc(initial.imageLimits.maxImageBytes + 1) })
    assert.equal(oversized.status(), 413)
    checked('Oversized request is refused by the real HTTP route')
    assert.equal((await api.get(imagePath('missing-card', ref.attachmentId))).status(), 404)
    assert.equal((await api.get(imagePath(id, ref.attachmentId, 'kanban-other'))).status(), 404)
    const unauthenticated = await request.newContext({ baseURL: base })
    try { assert.ok([401, 403].includes((await unauthenticated.get(imagePath(id, ref.attachmentId))).status())) }
    finally { await unauthenticated.dispose() }
    checked('Unknown card, other workspace and unauthenticated reads are rejected')
    const injected = await api.post('/api/kanban', { data: { method: '_addImage', args: { workspaceId, id, image: ref } } })
    assert.equal(injected.ok(), false)
    checked('Clients cannot attach an arbitrary storage reference through JSON mutations')
    assert.ok((await call('get', { query: '登录失败' })).board.cards.some(card => card.id === id))
    assert.equal((await call('get', { query: 'does-not-exist' })).board.cards.length, 0)
    checked('Host text search includes comment content and handles empty results')
    await call('removeImage', { id, attachmentId: ref.attachmentId })
    assert.equal((await api.get(imagePath(id, ref.attachmentId))).status(), 404)
    assert.equal((await api.post(imagePath(id).replace('/api/kanban/image?', '/api/kanban/image/upload?'), { headers: { 'Content-Type': 'image/png' }, data: png })).ok(), true)
    checked('Removing an association revokes card access and permits subsequent reattachment')
    const disk = JSON.parse(await readFile(join(workspace.path, '.dsh-kanban.json'), 'utf8'))
    assert.equal(disk.schemaVersion, 6)
    assert.deepEqual(disk.cards.find(card => card.id === id).images, [ref])
    checked('The workspace board persists schema 6 and the five-field image reference')
    await writeFile(output, JSON.stringify({ cardId: id, image: ref, sha256: createHash('sha256').update(bytes).digest('hex'), checks, restartVerified: false }, null, 2))
    console.log(JSON.stringify({ passed: checks.length, checks }, null, 2))
  }
} catch (error) {
  // Playwright's complete request log includes authentication headers.
  console.error(error instanceof assert.AssertionError ? error.message : String(error?.message || error).split('\n')[0])
  process.exitCode = 1
} finally {
  await api.dispose()
}
