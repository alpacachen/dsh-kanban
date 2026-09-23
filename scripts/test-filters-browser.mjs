// Real built client + Host theme, isolated fixture data. No live board writes.
// Build first; PLAYWRIGHT_MODULE may point to an existing Playwright installation.
import assert from 'node:assert/strict'
import { mkdir } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { isAbsolute, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const modulePath = process.env.PLAYWRIGHT_MODULE ?? 'playwright'
const { chromium } = await import(isAbsolute(modulePath) ? pathToFileURL(modulePath).href : modulePath)
const base = process.env.DSH_TEST_URL ?? 'http://127.0.0.1:3080'
const output = resolve(process.env.UI_SCREENSHOT_DIR ?? resolve(tmpdir(), 'kanban-label-filter'))
await mkdir(output, { recursive: true })
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) })
const errors = []
const requests = []
const board = {
  columns: [{ id: 'c1', title: 'Todo' }, { id: 'c2', title: 'Done' }],
  labels: [{ name: 'bug', color: '#f87171' }, { name: 'New Feature', color: '#38bdf8' }],
  activities: [],
  cards: [
    { id: 'a', columnId: 'c1', title: 'Urgent bug', label: 'bug', priority: 'high' },
    { id: 'b', columnId: 'c2', title: 'Minor bug', label: 'bug', priority: 'low' },
    { id: 'c', columnId: 'c1', title: 'Feature card', label: 'New Feature', priority: 'high' },
    { id: 'd', columnId: 'c2', title: 'Unlabeled card', label: null, priority: null },
  ].map(card => ({ ...card, note: '', comments: [] })),
}
try {
  const page = await browser.newPage({ viewport: { width: 1100, height: 720 } })
  page.on('pageerror', error => { if (!error.message.includes('KANBAN_TEST_BOOT_STOP')) errors.push(error.message) })
  if (process.env.DSH_TEST_COOKIE) {
    const [name, ...value] = process.env.DSH_TEST_COOKIE.split('=')
    await page.context().addCookies([{ name, value: value.join('='), url: base }])
  }
  await page.route('**/api/**', route => {
    if (new URL(route.request().url()).pathname !== '/api/kanban') return route.fulfill({ status: 503, json: { error: 'Non-fixture API disabled' } })
    const request = route.request().postDataJSON()
    requests.push(request.method)
    return route.fulfill({ json: { board } })
  })
  await page.addInitScript(() => {
    let loader
    Object.defineProperty(window, '__ModuleLoader__', {
      configurable: true, get: () => loader,
      set(value) {
        loader = value
        const create = value.create
        value.create = function (options) {
          window.__testModules = create.call(this, options)
          window.__testSeeds = options.staticModules
          throw new Error('KANBAN_TEST_BOOT_STOP')
        }
      },
    })
  })
  const response = await page.goto(base)
  assert.notEqual(response.status(), 401, 'Supply the current GUI cookie via DSH_TEST_COOKIE; authentication is not bypassed')
  await page.waitForFunction(() => window.__testModules)
  const themeUrl = await page.evaluate(() => window.__testModules.manifest.modules.find(row => row.id === '@deepseek-ai/dsh-client-ui-theme').initialUrl)
  const theme = await (await page.request.get(new URL(themeUrl, base).href)).text()
  const sheets = [...theme.matchAll(/var (\w+_css_default) = ("(?:[^"\\]|\\.)*");/g)].map(match => JSON.parse(match[2]))
  assert.ok(sheets.length >= 6, 'Host theme sheets must be available')
  await page.addStyleTag({ content: sheets.join('\n') })
  await page.evaluate(async () => {
    await window.__testModules.prefetch('@alpacachen/dsh-kanban')
    window.__testModules.invalidate('@alpacachen/dsh-kanban')
  })
  await page.addScriptTag({ path: fileURLToPath(new URL('../lib/client.js', import.meta.url)) })
  await page.evaluate(async () => {
    const plugin = await window.__testModules.import('@alpacachen/dsh-kanban')
    const dictionaries = {}
    const components = {}
    const services = {
      locale: {
        register(_namespace, language, values) { dictionaries[language] = values },
        bind() { return key => dictionaries.zh[key] ?? key },
        subscribe() { return () => {} }, getSnapshot() { return 'zh' },
      },
      slots: { inject(_name, install) { install() }, register(meta, component) { components[meta.id] = component } },
      uiWorkspace: {},
    }
    plugin.apply({ get: name => services[name] })
    document.body.replaceChildren()
    document.body.removeAttribute('data-ds-dark-theme')
    const root = document.createElement('div')
    document.body.append(root)
    window.__testSeeds['react-dom/client'].createRoot(root).render(components.kanban({ sessionId: 'fixture' }))
  })
  const titles = () => page.locator('.kanban-card-title').allTextContents()
  const chooseLabel = async name => {
    await page.getByRole('button', { name: '按标签筛选', exact: true }).click()
    await page.getByRole('menuitemradio', { name, exact: true }).click()
  }
  await page.getByText('Urgent bug', { exact: true }).waitFor()
  await chooseLabel('bug')
  assert.deepEqual(await titles(), ['Urgent bug', 'Minor bug'])
  await page.getByRole('button', { name: '按优先级筛选', exact: true }).click()
  await page.getByRole('menuitem', { name: 'P0', exact: true }).click()
  assert.deepEqual(await titles(), ['Urgent bug'])
  await chooseLabel('全部')
  assert.deepEqual(await titles(), ['Urgent bug', 'Feature card'])
  await page.getByRole('button', { name: '按优先级筛选', exact: true }).click()
  await page.getByRole('menuitem', { name: '全部', exact: true }).click()
  await chooseLabel('无标签')
  assert.deepEqual(await titles(), ['Unlabeled card'])
  await chooseLabel('全部')
  for (const dark of [false, true]) {
    await page.evaluate(dark => document.body.toggleAttribute('data-ds-dark-theme', dark), dark)
    await page.getByRole('button', { name: '按标签筛选', exact: true }).click()
    await page.screenshot({ animations: 'disabled', path: resolve(output, dark ? 'dark.png' : 'light.png') })
    await page.keyboard.press('Escape')
  }
  await page.setViewportSize({ width: 390, height: 720 })
  const trigger = page.getByRole('button', { name: '按标签筛选', exact: true })
  await trigger.focus()
  await page.keyboard.press('Enter')
  await page.waitForFunction(() => document.activeElement?.getAttribute('role') === 'menuitemradio')
  await page.keyboard.press('End')
  await page.waitForFunction(() => document.activeElement?.textContent === 'New Feature')
  await page.keyboard.press('Enter')
  await page.waitForFunction(() => document.querySelectorAll('.kanban-card-title').length === 1)
  assert.deepEqual(await titles(), ['Feature card'])
  await trigger.click()
  const menu = await page.getByRole('menu').boundingBox()
  assert.ok(menu.x >= 0 && menu.x + menu.width <= 390 && menu.y + menu.height <= 720)
  await page.screenshot({ animations: 'disabled', path: resolve(output, 'narrow.png') })
  const styles = await page.locator('.kanban-toolbar button').evaluateAll(buttons => buttons.map(button => ({ title: button.title, font: getComputedStyle(button).font, width: button.getBoundingClientRect().width })))
  assert.equal(new Set(styles.map(style => style.font)).size, 1)
  assert.deepEqual(requests, ['get'])
  assert.deepEqual(errors, [])
  console.log(JSON.stringify({ passed: true, styles, screenshots: output }, null, 2))
} finally {
  await browser.close()
}
