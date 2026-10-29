/**
 * Real built client + installed DSH theme; isolated API fixtures exercise UI failure states.
 * Build first and point DSH_TEST_URL at an already running test Host. No live API writes.
 * PLAYWRIGHT_MODULE / CHROME_PATH select existing tooling; no dependencies are installed.
 */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright')
const base = process.env.DSH_TEST_URL ?? 'http://127.0.0.1:3181'
const output = resolve(process.env.UI_SCREENSHOT_DIR ?? '/tmp/kanban-search-images-test/screenshots')
const bundle = fileURLToPath(new URL('../lib/client.js', import.meta.url))
const bundleSource = await readFile(bundle, 'utf8')
const bundleSha256 = createHash('sha256').update(bundleSource).digest('hex')
await mkdir(output, { recursive: true })
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) })
const errors = []
const checked = []
const screenshots = []
const writes = []
const images = new Map()
let failUpload = false
let uploadGate
let failImageRead = false
const limits = { maxImageBytes: 10 * 1024 * 1024, maxImagesPerCard: 10, mediaTypes: ['image/png', 'image/jpeg', 'image/webp'] }
const card = (id, columnId, title, note, extra = {}) => ({ id, columnId, title, note, label: null, priority: null, dueDate: null, completedAt: null, createdAt: '2026-10-28T02:00:00.000Z', createdBy: 'human', comments: [], images: [], ...extra })
const board = {
  schemaVersion: 6,
  completedColumnId: 'done',
  columns: [{ id: 'todo', title: '待办' }, { id: 'doing', title: '进行中' }, { id: 'review', title: '待验收' }, { id: 'done', title: '已完成' }],
  labels: [{ name: '体验优化', color: '#487de0' }, { name: 'Bug', color: '#e26a64' }, { name: '基础能力', color: '#7a9c6e' }],
  cards: [
    card('login-error', 'todo', '完善验证码失效提示', '验证码失效时展示明确原因，保留手机号输入。', { label: 'Bug', priority: 'high', dueDate: '2026-10-30', comments: [{ id: 'c-login', source: 'agent', createdAt: '2026-10-28T03:30:00.000Z', content: '已复现登录失败，错误提示需要保持在输入框下方。' }] }),
    card('image-paste', 'doing', '支持粘贴截图到任务', '从剪贴板直接添加图片，并在任务详情中查看。', { label: '体验优化', priority: 'medium' }),
    card('search', 'doing', '搜索任务描述与评论', '搜索结果与优先级、标签筛选共同生效。', { label: '基础能力', priority: 'medium', comments: [{ id: 'c-search', source: 'human', createdAt: '2026-10-28T03:40:00.000Z', content: '英文搜索应忽略大小写，例如 Upload。' }] }),
    card('preview', 'review', '检查图片放大预览', '核对原生主题、键盘关闭和窄屏展示。', { label: '体验优化', priority: 'low' }),
    card('empty', 'todo', '整理新用户引导文案', '精简首次打开看板的提示。', { label: '体验优化' }),
    card('done-theme', 'done', '统一卡片与抽屉字体', '正文和控件沿用 DSH 字体与主题。', { label: '体验优化', completedAt: '2026-10-27T08:00:00.000Z' }),
  ],
  activities: [],
}
const response = (extra = {}) => ({ board, persisted: true, imageLimits: limits, ...extra })
const imageRef = (buffer) => ({ attachmentId: `sha256:${createHash('sha256').update(buffer).digest('hex')}`, mediaType: 'image/png', bytes: buffer.length, width: 1200, height: 750 })

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 940 }, colorScheme: 'light', timezoneId: 'Asia/Shanghai', reducedMotion: 'reduce', serviceWorkers: 'block' })
  if (process.env.DSH_TEST_COOKIE) {
    const [name, ...value] = process.env.DSH_TEST_COOKIE.split('=')
    await context.addCookies([{ name, value: value.join('='), url: base }])
  }
  if (process.env.DSH_TEST_LOG) {
    const log = await readFile(process.env.DSH_TEST_LOG, 'utf8')
    const authUrl = [...log.matchAll(/https?:\/\/[^\s\u001b]+/g)].map(match => match[0]).reverse().find(value => new URL(value).origin === new URL(base).origin)
    assert.ok(authUrl, 'Test Host log must contain its official authentication URL')
    try { await context.request.get(authUrl) } catch { throw new Error('Could not authenticate with the test Host; check that it is running.') }
  }
  await context.route('**/*', async route => {
    const request = route.request()
    const url = new URL(request.url())
    if (url.pathname === '/api/kanban/image' || url.pathname === '/api/kanban/image/upload') {
      const target = board.cards.find(row => row.id === url.searchParams.get('cardId'))
      if (!target) return route.fulfill({ status: 404, json: { error: '任务不存在' } })
      if (request.method() === 'GET') {
        assert.equal(url.pathname, '/api/kanban/image')
        const id = url.searchParams.get('attachmentId')
        const buffer = images.get(id)
        if (failImageRead || !buffer || !target.images.some(ref => ref.attachmentId === id)) return route.fulfill({ status: 404, json: { error: '图片暂时不可用' } })
        return route.fulfill({ contentType: 'image/png', headers: { 'Cache-Control': 'private, no-store' }, body: buffer })
      }
      if (request.method() === 'POST') {
        assert.equal(url.pathname, '/api/kanban/image/upload')
        writes.push({ method: 'uploadImage', id: target.id })
        if (uploadGate) await uploadGate
        if (failUpload) { failUpload = false; return route.fulfill({ status: 503, json: { error: '网络连接中断，请重试。' } }) }
        const buffer = request.postDataBuffer()
        assert.ok(buffer?.length > 0)
        const ref = imageRef(buffer)
        images.set(ref.attachmentId, buffer)
        if (!target.images.some(image => image.attachmentId === ref.attachmentId)) target.images.push(ref)
        return route.fulfill({ json: response() })
      }
    }
    if (url.pathname === '/api/kanban' && request.method() === 'POST') {
      const { method, args } = request.postDataJSON()
      if (method === 'get') return route.fulfill({ json: response() })
      writes.push({ method, args })
      const target = board.cards.find(row => row.id === args.id)
      if (method === 'addCard') {
        const id = `new-${board.cards.length}`
        board.cards.push(card(id, args.columnId, args.title, args.note ?? '', args))
        return route.fulfill({ json: response({ cardId: id }) })
      }
      if (method === 'updateCard' && target) {
        for (const field of ['title', 'note', 'label', 'priority', 'dueDate']) if (field in args) target[field] = args[field]
        return route.fulfill({ json: response() })
      }
      if (method === 'removeImage' && target) {
        target.images = target.images.filter(image => image.attachmentId !== args.attachmentId)
        return route.fulfill({ json: response() })
      }
      return route.fulfill({ status: 400, json: { error: `Unimplemented fixture method: ${method}` } })
    }
    if (url.pathname.startsWith('/api/') || !['GET', 'HEAD'].includes(request.method())) return route.fulfill({ status: 503, json: { error: 'Real APIs and writes are disabled in this fixture.' } })
    return route.continue()
  })
  const page = await context.newPage()
  page.setDefaultTimeout(15000)
  page.on('pageerror', error => errors.push(error.message))
  const fixturePng = async variant => Buffer.from(await page.evaluate(variant => {
    const canvas = document.createElement('canvas')
    canvas.width = 1200; canvas.height = 750
    const c = canvas.getContext('2d')
    c.fillStyle = '#f5f6f8'; c.fillRect(0, 0, 1200, 750)
    c.fillStyle = '#ffffff'; c.fillRect(0, 0, 1200, 70)
    c.fillStyle = '#24272d'; c.font = '600 25px system-ui'; c.fillText('项目工作台', 38, 45)
    c.fillStyle = '#68717e'; c.font = '18px system-ui'; c.fillText('产品验收 · 测试截图', 890, 45)
    c.fillStyle = '#ffffff'; c.fillRect(355, 130, 490, 510)
    c.fillStyle = '#24272d'; c.font = '600 32px system-ui'; c.fillText(variant ? '欢迎回来' : '手机验证码登录', 410, 200)
    c.fillStyle = '#727984'; c.font = '20px system-ui'; c.fillText('使用手机号继续访问你的工作区', 410, 245)
    c.fillStyle = '#f2f4f7'; c.fillRect(410, 285, 380, 64); c.fillRect(410, 370, 380, 64)
    c.fillStyle = '#596273'; c.font = '22px system-ui'; c.fillText('138 0000 0000', 430, 326); c.fillText('482916', 430, 411)
    c.fillStyle = variant ? '#4f8061' : '#c95750'; c.font = '19px system-ui'
    c.fillText(variant ? '验证成功，即将进入工作区' : '验证码已过期，请重新获取', 410, 474)
    c.fillStyle = '#477ade'; c.fillRect(410, 515, 380, 60)
    c.fillStyle = '#ffffff'; c.font = '22px system-ui'; c.fillText(variant ? '进入工作区' : '重新获取验证码', variant ? 540 : 520, 554)
    c.fillStyle = '#8b929c'; c.font = '17px system-ui'; c.fillText(`验收截图 · ${variant === false ? '验证码失效' : variant === true ? '验证成功' : variant}`, 410, 690)
    return canvas.toDataURL('image/png').split(',')[1]
  }, variant), 'base64')
  const screenshotPng = await fixturePng(false)
  const successPng = await fixturePng(true)
  const retryPng = await fixturePng('重试')
  const pastePng = await fixturePng('粘贴')
  const dropPng = await fixturePng('拖拽')
  const initialRef = imageRef(screenshotPng)
  images.set(initialRef.attachmentId, screenshotPng)
  board.cards[0].images.push(initialRef)
  await writeFile(`${output}/fixture-login-error.png`, screenshotPng)
  await writeFile(`${output}/fixture-login-success.png`, successPng)
  await page.addInitScript(() => {
    let loader
    Object.defineProperty(window, '__ModuleLoader__', {
      configurable: true, get: () => loader,
      set(value) {
        loader = value
        const create = value.create
        value.create = function (options) {
          window.__kanbanTestModules = create.call(this, options)
          window.__kanbanTestSeeds = options.staticModules
          throw new Error('KANBAN_TEST_BOOT_STOP')
        }
      },
    })
  })
  const navigation = await page.goto(base)
  assert.ok(![401, 403].includes(navigation?.status()), 'Supply the current test Host cookie via DSH_TEST_COOKIE when authentication is required.')
  await page.waitForFunction(() => window.__kanbanTestModules)
  await page.evaluate(async () => {
    for (const id of ['@deepseek-ai/dsh-client-locale', '@deepseek-ai/dsh-client-ui-layout', '@deepseek-ai/dsh-client-ui-sidebar']) await window.__kanbanTestModules.import(id)
  })
  const themePath = await page.evaluate(() => window.__kanbanTestModules.manifest.modules.find(row => row.id === '@deepseek-ai/dsh-client-ui-theme').initialUrl)
  const themeUrl = new URL(themePath, base)
  assert.equal(themeUrl.origin, new URL(base).origin)
  const themeResponse = await page.request.get(themeUrl.href)
  assert.equal(themeResponse.ok(), true)
  const themeSource = await themeResponse.text()
  const sheets = [...themeSource.matchAll(/var (\w+_css_default) = ("(?:[^"\\]|\\.)*");/g)].map(match => JSON.parse(match[2]))
  assert.ok(sheets.length >= 6, 'Use actual installed Host theme sheets')
  await page.addStyleTag({ content: sheets.join('\n') })
  await page.evaluate(async () => {
    const modules = window.__kanbanTestModules
    if (modules.manifest.modules.some(row => row.id === '@alpacachen/dsh-kanban')) await modules.prefetch('@alpacachen/dsh-kanban')
    modules.invalidate('@alpacachen/dsh-kanban')
    document.body.removeAttribute('data-ds-dark-theme')
  })
  await page.addScriptTag({ content: bundleSource })
  await page.evaluate(async () => {
    const mod = await window.__kanbanTestModules.import('@alpacachen/dsh-kanban')
    const React = window.__kanbanTestSeeds.react
    const ReactDOM = window.__kanbanTestSeeds['react-dom/client']
    const components = {}, dictionaries = {}, snapshot = { active: 'zh' }
    const services = {
      locale: { register(_namespace, language, values) { dictionaries[language] = values }, bind() { return key => dictionaries.zh[key] ?? key }, subscribe() { return () => {} }, getSnapshot() { return snapshot } },
      slots: { inject(_name, install) { return install() }, register(meta, Component) { components[meta.id] = Component; return () => {} } },
      uiWorkspace: { async openWorkspace() { throw new Error('Workspace navigation is not part of this fixture') } },
    }
    mod.apply({ get: name => services[name], effect: setup => setup() })
    document.body.replaceChildren()
    document.body.style.margin = '0'
    document.body.style.background = 'var(--dsw-alias-bg-base)'
    const root = document.createElement('div')
    root.style.height = '100dvh'
    document.body.append(root)
    ReactDOM.createRoot(root).render(React.createElement(components.kanban, {
      sessionId: 'fixture-session',
      useWorkspaces: select => select({ items: [{ workspaceId: 'fixture-workspace', sessionIds: ['fixture-session'] }] }),
      inputActions: { setDraft() {} },
    }))
  })
  await page.getByRole('button', { name: '完善验证码失效提示', exact: true }).waitFor()
  assert.equal(await page.locator('style[data-dsh-kanban-style]').count(), 1)
  const shot = async name => {
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))))
    await page.screenshot({ animations: 'disabled', path: `${output}/${name}.png` })
    screenshots.push(`${name}.png`)
  }
  const styles = (locator, properties) => locator.evaluate((el, properties) => {
    const css = getComputedStyle(el)
    return Object.fromEntries(properties.map(property => [property, css[property]]))
  }, properties)
  const assertFits = async () => {
    const overflow = await page.evaluate(() => ({ viewport: innerWidth, width: document.documentElement.scrollWidth }))
    if (overflow.width > overflow.viewport) {
      await shot('unexpected-overflow')
      const boxes = await page.evaluate(() => [...document.querySelectorAll('body *')].map(element => ({ class: element.className, tag: element.tagName, left: element.getBoundingClientRect().left, right: element.getBoundingClientRect().right, width: element.scrollWidth, clientWidth: element.clientWidth, position: getComputedStyle(element).position, overflow: getComputedStyle(element).overflow, text: element.textContent?.slice(0, 80) })).filter(row => row.right > innerWidth + 1 || row.left < -1 || /kanban-(?:root|layout|board|drawer|image)/.test(row.class)).sort((a, b) => b.right - a.right))
      await writeFile(`${output}/overflow.json`, JSON.stringify(boxes, null, 2) + '\n')
    }
    assert.ok(overflow.width <= overflow.viewport, `Page does not overflow: ${JSON.stringify(overflow)}`)
    const dialogs = page.getByRole('dialog')
    for (const dialog of await dialogs.all()) {
      const rect = await dialog.boundingBox()
      assert.ok(rect.x >= -1 && rect.y >= -1 && rect.x + rect.width <= page.viewportSize().width + 1 && rect.y + rect.height <= page.viewportSize().height + 1, 'Dialog stays inside the viewport')
    }
  }

  await shot('01-board-light')
  await assertFits()
  const search = page.getByRole('searchbox', { name: '搜索任务', exact: true })
  const visibleCards = () => page.locator('.kanban-sortable-card').count()
  assert.equal(await visibleCards(), 6)
  await search.fill(' 登录失败 ')
  await page.getByText('找到 1 张卡片', { exact: true }).waitFor()
  assert.equal(await visibleCards(), 1)
  assert.match(await page.locator('.kanban-sortable-card').innerText(), /评论匹配.*登录失败/s)
  await shot('02-search-comment-match')
  await page.getByRole('button', { name: '按优先级筛选', exact: true }).click()
  await page.getByRole('menuitemradio', { name: 'P2', exact: true }).click()
  await page.getByText('找到 0 张卡片', { exact: true }).waitFor()
  assert.equal(await visibleCards(), 0, 'Search combines with the existing priority filter')
  await page.getByRole('button', { name: '清除筛选: P2', exact: true }).click()
  await page.getByText('找到 1 张卡片', { exact: true }).waitFor()
  await search.fill('uPLOAD')
  await page.getByRole('button', { name: '搜索任务描述与评论', exact: true }).waitFor()
  assert.equal(await visibleCards(), 1, 'English search ignores case')
  await search.fill('不可能存在的任务')
  await page.getByText('找到 0 张卡片', { exact: true }).waitFor()
  assert.equal(await page.getByText('无匹配卡片', { exact: true }).count(), 4)
  await shot('03-search-no-results')
  await page.getByRole('button', { name: '清空搜索', exact: true }).click()
  assert.equal(await visibleCards(), 6, 'Clearing search restores every card in its original order')
  assert.deepEqual(await page.locator('.kanban-sortable-card').evaluateAll(cards => cards.map(card => card.getAttribute('aria-label'))), ['完善验证码失效提示', '整理新用户引导文案', '支持粘贴截图到任务', '搜索任务描述与评论', '检查图片放大预览', '统一卡片与抽屉字体'])
  checked.push('Chinese comment match and context snippet; case-insensitive English; search AND priority; empty result; clearing preserves order')

  const openCard = async title => {
    await page.getByRole('button', { name: title, exact: true }).click()
    await page.getByRole('dialog', { name: '任务详情', exact: true }).waitFor()
  }
  const closeCard = async () => {
    await page.getByRole('dialog', { name: '任务详情', exact: true }).getByRole('button', { name: '关闭', exact: true }).click()
    await page.locator('.kanban-drawer-content').waitFor({ state: 'detached' })
  }
  const readyImage = async number => {
    const button = page.getByRole('button', { name: `查看图片 ${number}`, exact: true })
    await button.waitFor()
    await page.waitForFunction(number => {
      const button = document.querySelector(`button[aria-label="查看图片 ${number}"]`)
      const image = button?.querySelector('img')
      return button && !button.disabled && image?.complete && image.naturalWidth > 0
    }, number)
    return button
  }
  const uploadFile = buffer => page.locator('.kanban-images input[type=file]').setInputFiles({ name: '验收截图.png', mimeType: 'image/png', buffer })
  const imageRegion = page.locator('.kanban-images')
  await openCard('完善验证码失效提示')
  await readyImage(1)
  await imageRegion.scrollIntoViewIfNeeded()
  await assertFits()
  const families = await Promise.all([page.getByRole('textbox', { name: '标题', exact: true }), page.getByRole('button', { name: '添加图片', exact: true }), page.getByRole('button', { name: '保存', exact: true })].map(locator => styles(locator, ['fontFamily'])))
  assert.equal(new Set(families.map(value => value.fontFamily)).size, 1, 'Image controls inherit the same computed Host font as existing task controls')
  checked.push(`Computed control font: ${families[0].fontFamily}`)
  await shot('04-task-image-detail')
  await (await readyImage(1)).click()
  await page.getByRole('dialog', { name: '图片', exact: true }).getByRole('img').waitFor()
  await assertFits()
  await shot('05-image-preview')
  await page.keyboard.press('Escape')
  await page.getByRole('dialog', { name: '图片', exact: true }).waitFor({ state: 'hidden' })
  assert.equal(await page.getByRole('dialog', { name: '任务详情', exact: true }).count(), 1, 'Escape closes preview before the task drawer')

  let releaseUpload
  uploadGate = new Promise(resolve => { releaseUpload = resolve })
  await uploadFile(successPng)
  await imageRegion.getByText('正在上传…', { exact: true }).waitFor()
  await shot('06-image-uploading')
  releaseUpload(); uploadGate = undefined
  await readyImage(2)
  assert.equal(board.cards[0].images.length, 2)
  failUpload = true
  await uploadFile(retryPng)
  await imageRegion.getByText(/上传失败:.*网络连接中断/).waitFor()
  await shot('07-image-upload-failed')
  const uploadsBeforeRetry = writes.filter(write => write.method === 'uploadImage').length
  await imageRegion.getByRole('button', { name: '重试', exact: true }).click()
  await readyImage(3)
  assert.equal(writes.filter(write => write.method === 'uploadImage').length, uploadsBeforeRetry + 1)
  assert.equal(board.cards[0].images.length, 3)
  await shot('08-image-retry-succeeded')
  checked.push('Saved-image display; full preview; Escape preserves drawer; in-flight upload; failed upload retained; retry uploads only failed image')

  const sendFileEvent = async (event, buffer, name) => {
    await (event === 'paste' ? page.locator('.kanban-drawer-content') : imageRegion).evaluate((element, { event, bytes, name }) => {
      const transfer = new DataTransfer()
      transfer.items.add(new File([new Uint8Array(bytes)], name, { type: 'image/png' }))
      if (event === 'paste') element.dispatchEvent(new ClipboardEvent('paste', { clipboardData: transfer, bubbles: true, cancelable: true }))
      else {
        element.dispatchEvent(new DragEvent('dragover', { dataTransfer: transfer, bubbles: true, cancelable: true }))
        element.dispatchEvent(new DragEvent('drop', { dataTransfer: transfer, bubbles: true, cancelable: true }))
      }
    }, { event, bytes: Array.from(buffer), name })
  }
  await sendFileEvent('paste', pastePng, '粘贴截图.png')
  await readyImage(4)
  await sendFileEvent('drop', dropPng, '拖入截图.png')
  await readyImage(5)
  assert.equal(await page.locator('.kanban-sortable-card.is-dragging').count(), 0, 'Image drops never start dragging a task')
  const beforeInvalid = writes.length
  await page.locator('.kanban-images input[type=file]').setInputFiles({ name: 'not-an-image.svg', mimeType: 'image/svg+xml', buffer: Buffer.from('<svg/>') })
  await imageRegion.getByText('请选择 PNG、JPEG 或 WebP 图片。', { exact: true }).waitFor()
  assert.equal(writes.length, beforeInvalid, 'Unsupported input is rejected before upload')
  await imageRegion.getByRole('button', { name: '移除图片 5', exact: true }).click()
  await page.getByRole('button', { name: '查看图片 5', exact: true }).waitFor({ state: 'detached' })
  assert.equal(board.cards[0].images.length, 4)
  checked.push('File picker, clipboard and drop events; task drag unaffected; unsupported type rejected without request; saved image removal')

  await page.evaluate(() => { document.body.setAttribute('data-ds-dark-theme', ''); document.body.style.colorScheme = 'dark' })
  await imageRegion.scrollIntoViewIfNeeded()
  await shot('09-task-images-dark')
  await assertFits()
  await page.setViewportSize({ width: 390, height: 844 })
  await imageRegion.scrollIntoViewIfNeeded()
  await assertFits()
  assert.equal(Math.round((await page.getByRole('dialog', { name: '任务详情', exact: true }).boundingBox()).width), 390)
  await shot('10-task-images-narrow-dark')
  await page.setViewportSize({ width: 1440, height: 940 })
  await page.evaluate(() => { document.body.removeAttribute('data-ds-dark-theme'); document.body.style.colorScheme = 'light' })
  await closeCard()
  checked.push('Light and dark themes; 390 px full-width task drawer; no page or dialog overflow')

  failImageRead = true
  // A fresh URL forces a read; previously decoded images may remain in the browser image cache.
  const recoveredPng = await fixturePng('恢复加载')
  const recoveredRef = imageRef(recoveredPng)
  images.set(recoveredRef.attachmentId, recoveredPng)
  board.cards[0].images.push(recoveredRef)
  const refreshed = page.waitForResponse(response => new URL(response.url()).pathname === '/api/kanban')
  await page.getByRole('button', { name: '设置', exact: true }).click()
  await page.getByRole('menuitem', { name: '刷新看板', exact: true }).click()
  await refreshed
  await openCard('完善验证码失效提示')
  await imageRegion.getByText('图片加载失败', { exact: true }).first().waitFor()
  await imageRegion.scrollIntoViewIfNeeded()
  await shot('11-image-load-failed')
  failImageRead = false
  await imageRegion.getByRole('button', { name: '重试', exact: true }).first().click()
  await readyImage(5)
  await closeCard()
  checked.push('Image-read failure stays local to the image and supports retry')

  await page.getByRole('button', { name: '添加卡片', exact: true }).first().click()
  await page.getByRole('textbox', { name: '标题', exact: true }).fill('补充移动端验收截图')
  const beforeDraft = writes.length
  await uploadFile(successPng)
  await imageRegion.getByText('等待创建任务', { exact: true }).waitFor()
  assert.equal(writes.length, beforeDraft, 'New-card image remains browser-local before creating the card')
  await imageRegion.scrollIntoViewIfNeeded()
  await shot('12-new-task-pending-image')
  failUpload = true
  await page.getByRole('button', { name: '保存', exact: true }).click()
  await page.getByText('任务已保存，部分图片上传失败，请重试。', { exact: true }).waitFor()
  assert.equal(writes.filter(write => write.method === 'addCard').length, 1)
  assert.equal(board.cards.filter(row => row.title === '补充移动端验收截图').length, 1)
  await imageRegion.scrollIntoViewIfNeeded()
  await shot('13-new-task-partial-success')
  await imageRegion.getByRole('button', { name: '重试', exact: true }).click()
  await readyImage(1)
  await page.getByText('任务已保存，部分图片上传失败，请重试。', { exact: true }).waitFor({ state: 'hidden' })
  assert.equal(writes.filter(write => write.method === 'addCard').length, 1, 'Retry never creates a duplicate task')
  await page.getByRole('button', { name: '保存', exact: true }).click()
  await page.getByRole('dialog').waitFor({ state: 'hidden' })
  await page.locator('.kanban-drawer-content').waitFor({ state: 'detached' })
  assert.equal(board.cards.find(row => row.title === '补充移动端验收截图').images.length, 1)
  checked.push('New task keeps images local before save; card creation succeeds independently; failed image retries without duplicate task')

  await page.getByRole('button', { name: '添加卡片', exact: true }).first().click()
  await uploadFile(successPng)
  await imageRegion.getByText('等待创建任务', { exact: true }).waitFor()
  const beforeCancel = writes.length
  await page.keyboard.press('Escape')
  await page.getByRole('button', { name: '放弃修改', exact: true }).click()
  await page.getByRole('dialog').waitFor({ state: 'hidden' })
  assert.equal(writes.length, beforeCancel, 'Canceling a new-card draft performs no API write')
  checked.push('Canceling pending new-card images performs no upload or card write')
  assert.deepEqual(errors.filter(message => !message.includes('KANBAN_TEST_BOOT_STOP')), [])
  const report = { passed: true, fixtureOnly: true, bundleSha256, checked, writes, screenshots, output }
  await writeFile(`${output}/verification.json`, JSON.stringify(report, null, 2) + '\n')
  console.log(JSON.stringify(report, null, 2))
} finally {
  await browser.close()
}
