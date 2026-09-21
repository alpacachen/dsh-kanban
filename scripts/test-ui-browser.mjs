/**
 * Actual local client bundle + existing DSH shell/theme; every API is intercepted.
 * Build first. No server starts, live plugins, real API writes, or cookie files.
 * PLAYWRIGHT_MODULE / CHROME_PATH select existing browser tooling.
 * DSH_TEST_COOKIE optionally supplies the current GUI cookie as name=value in env.
 */
import assert from 'node:assert/strict'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright')
const base = process.env.DSH_TEST_URL ?? 'http://127.0.0.1:3080'
const output = resolve(process.env.UI_SCREENSHOT_DIR ?? '/tmp/kanban-ui-review')
await mkdir(output, { recursive: true })
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) })
const errors = []
const writes = []
const board = {
  columns: [{ id: 'todo', title: 'Todo' }, { id: 'done', title: 'Done' }],
  labels: [{ name: 'Dark label', color: '#000000' }],
  cards: [{ id: 'card-fixture', columnId: 'todo', title: 'Keyboard fixture', note: 'Read-only browser regression fixture.', label: 'Dark label', priority: 'high', createdAt: null, createdBy: null, comments: [] }],
  activities: [],
}

try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: 'light', reducedMotion: 'reduce', serviceWorkers: 'block' })
  if (process.env.DSH_TEST_COOKIE) {
    const [name, ...value] = process.env.DSH_TEST_COOKIE.split('=')
    await context.addCookies([{ name, value: value.join('='), url: base }])
  }
  // No request can fall through to a real API, including unimplemented fixtures.
  await context.route('**/*', async (route) => {
    const request = route.request()
    const url = new URL(request.url())
    if (url.pathname === '/api/kanban' && request.method() === 'POST') {
      const { method, args } = request.postDataJSON()
      if (method === 'get') return route.fulfill({ json: { board } })
      if (method === 'updateCard' && args.id === 'card-fixture') {
        writes.push({ method, args })
        for (const field of ['title', 'note', 'label', 'priority']) if (field in args) board.cards[0][field] = args[field]
        return route.fulfill({ json: { board } })
      }
      return route.fulfill({ status: 400, json: { error: `Unimplemented fixture method: ${method}` } })
    }
    if (url.pathname.startsWith('/api/') || !['GET', 'HEAD'].includes(request.method())) {
      return route.fulfill({ status: 503, json: { error: 'Real APIs and writes are disabled in this fixture.' } })
    }
    return route.continue()
  })
  const page = await context.newPage()
  page.setDefaultTimeout(15000)
  page.on('pageerror', (error) => errors.push(error.message))
  await page.addInitScript(() => {
    let loader
    Object.defineProperty(window, '__ModuleLoader__', {
      configurable: true,
      get: () => loader,
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
  const response = await page.goto(base)
  if ([401, 403].includes(response?.status()) || /authentication required/i.test(await page.locator('body').innerText())) {
    throw new Error('Authentication required. Supply the current GUI cookie via DSH_TEST_COOKIE; no bypass is attempted.')
  }
  await page.waitForFunction(() => window.__kanbanTestModules)
  await page.evaluate(async () => {
    for (const id of ['@deepseek-ai/dsh-client-locale', '@deepseek-ai/dsh-client-ui-layout', '@deepseek-ai/dsh-client-ui-sidebar']) await window.__kanbanTestModules.import(id)
  })
  const themePath = await page.evaluate(() => window.__kanbanTestModules.manifest.modules.find((row) => row.id === '@deepseek-ai/dsh-client-ui-theme').initialUrl)
  const themeUrl = new URL(themePath, base)
  assert.equal(themeUrl.origin, new URL(base).origin)
  assert.ok(!themeUrl.pathname.startsWith('/api/'), 'Theme must be a static resource, not a real API')
  const themeResponse = await page.request.get(themeUrl.href)
  assert.equal(themeResponse.ok(), true, 'Host theme resource must be available')
  const themeSource = await themeResponse.text()
  const sheets = [...themeSource.matchAll(/var (\w+_css_default) = ("(?:[^"\\]|\\.)*");/g)].map((match) => JSON.parse(match[2]))
  assert.ok(sheets.length >= 6, 'Expected the real installed Host theme sheets')
  await page.addStyleTag({ content: sheets.join('\n') })
  await page.evaluate(async () => {
    const modules = window.__kanbanTestModules
    const id = '@alpacachen/dsh-kanban'
    if (modules.manifest.modules.some((row) => row.id === id)) await modules.prefetch(id)
    modules.invalidate(id)
    document.body.removeAttribute('data-ds-dark-theme')
  })
  await page.addScriptTag({ path: fileURLToPath(new URL('../lib/client.js', import.meta.url)) })
  await page.evaluate(async () => {
    const mod = await window.__kanbanTestModules.import('@alpacachen/dsh-kanban')
    const React = window.__kanbanTestSeeds.react
    const ReactDOM = window.__kanbanTestSeeds['react-dom/client']
    const components = {}
    const dictionaries = {}
    const snapshot = { active: 'en' }
    const services = {
      locale: {
        register(_namespace, language, values) { dictionaries[language] = values },
        bind() { return (key) => dictionaries.en[key] ?? key },
        subscribe() { return () => {} }, getSnapshot() { return snapshot },
      },
      slots: {
        inject(_name, install) { return install() },
        register(meta, Component) { components[meta.id] = Component; return () => {} },
      },
      uiWorkspace: { async openWorkspace() { throw new Error('Workspace navigation is not part of this fixture') } },
    }
    mod.apply({ get: (name) => services[name] })
    document.body.replaceChildren()
    document.body.style.margin = '0'
    document.body.style.background = 'var(--dsw-alias-bg-base)'
    const root = document.createElement('div')
    root.style.height = '100dvh'
    document.body.append(root)
    ReactDOM.createRoot(root).render(React.createElement(components.kanban, {
      sessionId: 'fixture-session',
      useWorkspaces: (select) => select({ items: [{ workspaceId: 'fixture-workspace', sessionIds: ['fixture-session'] }] }),
      inputActions: { setDraft() {} },
    }))
  })
  await page.getByRole('button', { name: 'Keyboard fixture', exact: true }).waitFor()
  assert.equal(await page.locator('style[data-dsh-kanban-style]').count(), 1, 'Use the bundle-injected stylesheet')

  const styles = (locator, properties) => locator.evaluate((el, properties) => {
    const css = getComputedStyle(el)
    return Object.fromEntries(properties.map((property) => [property, css[property]]))
  }, properties)
  const tokenColor = (name, property = 'color') => page.evaluate(({ name, property }) => {
    const probe = document.createElement('span')
    probe.style[property] = `var(${name})`
    document.body.append(probe)
    const value = getComputedStyle(probe)[property]
    probe.remove()
    return value
  }, { name, property })
  const assertFocusRing = async (locator) => {
    await locator.focus()
    assert.equal(await locator.evaluate((el) => el.matches(':focus-visible')), true)
    assert.deepEqual(await styles(locator, ['outlineStyle', 'outlineWidth', 'outlineOffset', 'outlineColor', 'boxShadow']), {
      outlineStyle: 'solid', outlineWidth: '2px', outlineOffset: '-2px',
      outlineColor: await tokenColor('--dsw-alias-state-business-primary'), boxShadow: 'none',
    }, 'Keyboard controls use one inset theme ring without a shadow ring')
  }
  const assertFieldFocus = async (locator) => {
    await locator.focus()
    assert.deepEqual(await styles(locator, ['borderTopWidth', 'borderTopColor', 'outlineStyle', 'boxShadow']), {
      borderTopWidth: '1px', borderTopColor: await tokenColor('--dsw-alias-state-business-primary'),
      outlineStyle: 'none', boxShadow: 'none',
    }, 'Fields focus with a single crisp border, without an outline or shadow')
  }
  const closeDialog = async () => {
    await page.keyboard.press('Escape')
    await page.locator('.kanban-dialog-content').waitFor({ state: 'hidden' })
  }
  const openLists = async () => {
    await page.getByRole('button', { name: 'Settings', exact: true }).click()
    await page.getByRole('menuitem', { name: 'Edit lists', exact: true }).waitFor()
    assert.equal((await styles(page.locator('.kanban-dropdown-content'), ['borderRadius'])).borderRadius, '20px')
    await page.getByRole('menuitem', { name: 'Edit lists', exact: true }).click()
    await page.getByRole('dialog', { name: 'Edit lists', exact: true }).waitFor()
  }
  for (const scheme of ['light', 'dark']) {
    await page.evaluate((scheme) => {
      document.body.toggleAttribute('data-ds-dark-theme', scheme === 'dark')
      document.body.style.colorScheme = scheme
    }, scheme)
    await openLists()
    const add = page.getByRole('dialog').getByRole('button', { name: 'Add', exact: true })
    const button = await styles(add, ['color', 'backgroundColor', 'fontFamily'])
    assert.notEqual(button.color, button.backgroundColor, `${scheme}: primary button text remains visible`)
    assert.equal(button.color, await tokenColor('--dsw-alias-label-primary-foreground'))
    assert.equal(button.backgroundColor, await tokenColor('--dsw-alias-button-primary-fill', 'backgroundColor'))
    const dialog = await styles(page.locator('.kanban-dialog-content'), ['borderRadius', 'borderTopWidth', 'backgroundColor', 'fontFamily'])
    assert.equal(dialog.borderRadius, '24px')
    assert.equal(dialog.borderTopWidth, '0px')
    assert.equal(dialog.backgroundColor, await tokenColor('--dsw-alias-bg-layer-2', 'backgroundColor'))
    assert.equal(button.fontFamily, dialog.fontFamily)
    assert.deepEqual(await styles(add, ['fontSize', 'fontWeight', 'lineHeight']), { fontSize: '12px', fontWeight: '400', lineHeight: '18px' })
    assert.deepEqual(await styles(page.locator('.kanban-dialog-title'), ['fontSize', 'fontWeight', 'lineHeight']), { fontSize: '16px', fontWeight: '500', lineHeight: '24px' })
    await page.keyboard.press('Tab')
    await assertFocusRing(page.locator('.kanban-drag-handle').first())
    await page.screenshot({ path: `${output}/focus-handle-${scheme}.png` })
    await assertFocusRing(add)
    await assertFieldFocus(page.locator('.kanban-input').first())
    await page.screenshot({ path: `${output}/lists-${scheme}.png` })
    await closeDialog()
    assert.equal((await styles(page.locator('.kanban-sortable-card-content'), ['padding'])).padding, '14px')
    const badge = page.locator('.kanban-card-badge').first()
    assert.equal((await styles(badge, ['fontSize'])).fontSize, '12px')
    assert.equal((await styles(badge, ['color'])).color, await tokenColor('--dsw-alias-label-primary'))
    assert.equal((await styles(badge, ['backgroundColor'])).backgroundColor, await tokenColor('--dsw-alias-bg-layer-2', 'backgroundColor'))
    assert.equal(await badge.locator('.kanban-label-dot').count(), 1)
    assert.equal((await styles(badge.locator('.kanban-label-dot'), ['backgroundColor'])).backgroundColor, 'rgb(0, 0, 0)')
    await assertFocusRing(page.locator('.kanban-sortable-card'))
    assert.equal((await styles(page.locator('.kanban-sortable-card .kanban-card'), ['boxShadow'])).boxShadow, 'none', 'Focused card does not retain a second inner stroke')
    await page.screenshot({ path: `${output}/board-${scheme}.png` })
  }
  await page.evaluate(() => { document.body.removeAttribute('data-ds-dark-theme'); document.body.style.colorScheme = 'light' })
  const card = page.getByRole('button', { name: 'Keyboard fixture', exact: true })
  // Traverse with actual Tab events instead of substituting locator.focus().
  for (let count = 0; count < 20 && !(await card.evaluate((el) => el === document.activeElement)); count++) await page.keyboard.press('Tab')
  assert.equal(await card.evaluate((el) => el === document.activeElement && el.matches(':focus-visible')), true, 'Card is reachable and visibly focused by Tab')
  await page.keyboard.press('Enter')
  const title = page.getByRole('textbox', { name: /^Title/ })
  await title.waitFor()
  assert.deepEqual(await styles(page.getByRole('button', { name: 'Save', exact: true }), ['fontSize', 'fontWeight', 'lineHeight']), { fontSize: '14px', fontWeight: '400', lineHeight: '22px' })
  assert.equal(await title.evaluate((el) => el === document.activeElement), true, 'Opening the card focuses its first input')
  await assertFieldFocus(title)
  await assertFieldFocus(page.getByRole('combobox', { name: 'Priority', exact: true }))
  await assertFieldFocus(page.getByRole('textbox', { name: 'Note', exact: true }))
  await page.screenshot({ path: `${output}/focus-card-editor.png` })
  await closeDialog()
  assert.equal(await card.evaluate((el) => el === document.activeElement), true, 'Escape returns focus to the card')
  await page.keyboard.press('Space')
  await page.locator('.kanban-sortable-card.is-dragging').waitFor()
  const dropTarget = page.locator('.kanban-column.is-over')
  await dropTarget.waitFor()
  for (const scheme of ['light', 'dark']) {
    await page.evaluate((scheme) => document.body.toggleAttribute('data-ds-dark-theme', scheme === 'dark'), scheme)
    const focusColor = await tokenColor('--dsw-alias-state-business-primary')
    assert.equal((await styles(dropTarget, ['boxShadow'])).boxShadow, `${focusColor} 0px 0px 0px 1px inset`, 'Drop target uses one inset theme-blue stroke, not the black brand color')
    assert.ok(!(await styles(dropTarget.locator('.kanban-card'), ['boxShadow'])).boxShadow.includes(focusColor), 'Drop target stroke does not leak into its cards')
    await page.screenshot({ path: `${output}/drag-target-${scheme}.png` })
  }
  await page.evaluate(() => document.body.removeAttribute('data-ds-dark-theme'))
  assert.equal(await page.getByRole('dialog').count(), 0, 'Space starts dragging, not editing')
  // dnd-kit registers the active keyboard sensor on the next timer turn.
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 0)))
  await page.keyboard.press('Escape')
  await page.locator('.kanban-sortable-card.is-dragging').waitFor({ state: 'hidden' })
  assert.equal(await page.getByRole('dialog').count(), 0)
  await page.keyboard.press('Enter')
  await title.fill('Keyboard fixture saved')
  await page.getByRole('button', { name: 'Save', exact: true }).click()
  await page.getByRole('dialog').waitFor({ state: 'hidden' })
  await page.getByRole('button', { name: 'Keyboard fixture saved', exact: true }).waitFor()
  assert.equal(writes.length, 1)
  assert.equal(writes[0].args.title, 'Keyboard fixture saved')

  await page.setViewportSize({ width: 390, height: 844 })
  const assertNarrow = async () => {
    const violations = await page.locator('.kanban-dialog-content').evaluate((dialog) => {
      const box = dialog.getBoundingClientRect()
      const violations = []
      if (box.left < 0 || box.right > innerWidth || dialog.scrollWidth > dialog.clientWidth) violations.push('dialog overflows viewport')
      for (const el of dialog.querySelectorAll('input,textarea,button')) {
        const bounds = el.getBoundingClientRect()
        if (bounds.width && (bounds.left < box.left - 1 || bounds.right > box.right + 1)) violations.push(`${el.tagName}: ${el.getAttribute('aria-label') ?? el.textContent}`)
      }
      return violations
    })
    assert.deepEqual(violations, [], '390px dialog controls stay within the panel')
  }
  await openLists()
  await assertNarrow()
  await page.screenshot({ path: `${output}/lists-mobile.png` })
  await closeDialog()
  await page.getByRole('button', { name: 'Keyboard fixture saved', exact: true }).click()
  await page.getByRole('dialog').waitFor()
  await assertNarrow()
  await page.screenshot({ path: `${output}/card-mobile.png` })
  await closeDialog()
  assert.deepEqual(errors.filter((message) => !message.includes('KANBAN_TEST_BOOT_STOP')), [])
  console.log(`PASS: real local bundle with installed Host theme; light/dark tokens, dialog/menu geometry, card/badge density, Tab/Enter/Space/Escape, isolated save and 390px controls. All API writes intercepted (${writes.length}). Screenshots: ${output}`)
} finally {
  await browser.close()
}
