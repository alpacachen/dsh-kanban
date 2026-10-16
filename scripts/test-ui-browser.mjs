/**
 * Actual local client bundle + existing DSH shell/theme; every API is intercepted.
 * Build first. No server starts, live plugins, real API writes, or cookie files.
 * PLAYWRIGHT_MODULE / CHROME_PATH select existing browser tooling.
 * DSH_TEST_COOKIE optionally supplies the current GUI cookie as name=value in env.
 */
import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright')
const base = process.env.DSH_TEST_URL ?? 'http://127.0.0.1:3080'
const output = resolve(process.env.UI_SCREENSHOT_DIR ?? '/tmp/kanban-ui-review')
await mkdir(output, { recursive: true })
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) })
const errors = []
const writes = []
let failSave = false
const board = {
  columns: [{ id: 'todo', title: 'Todo' }, { id: 'doing', title: 'In progress' }, { id: 'review', title: 'Review' }, { id: 'done', title: 'Done' }],
  labels: [{ name: 'Dark label', color: '#000000' }, ...Array.from({ length: 9 }, (_, i) => ({ name: `Label ${i + 1}`, color: '#4176e6' }))],
  cards: [{ id: 'card-fixture', columnId: 'todo', title: 'Keyboard fixture', note: 'Read-only browser regression fixture.', label: 'Dark label', priority: 'high', createdAt: null, createdBy: null, comments: Array.from({ length: 12 }, (_, i) => ({ id: `comment-${i}`, source: 'human', createdAt: '2026-10-16T03:00:00Z', content: `Comment ${i + 1}: verify scrolling keeps the header, close control and footer visible.` })) }],
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
        if (failSave) { failSave = false; return route.fulfill({ status: 500, json: { error: 'Fixture save failed: ' + 'Long service error. '.repeat(200) } }) }
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
    return Object.fromEntries(properties.map(property => [property, css[property]]))
  }, properties)
  const tokenColor = (name, property = 'color') => page.evaluate(({ name, property }) => {
    const probe = document.createElement('span')
    probe.style[property] = `var(${name})`
    document.body.append(probe)
    const value = getComputedStyle(probe)[property]
    probe.remove()
    return value
  }, { name, property })
  const shot = name => page.screenshot({ animations: 'disabled', path: `${output}/${name}.png` })
  const closeDialog = async (keyboard = false) => {
    await page.locator('.kanban-dropdown-content, .kanban-select-content').waitFor({ state: 'detached' })
    if (keyboard) await page.keyboard.press('Escape')
    else await page.getByRole('button', { name: 'Close', exact: true }).click()
    try { await page.getByRole('dialog').waitFor({ state: 'hidden' }) } catch (error) {
      await shot('unexpected-open-dialog')
      console.error(await page.getByRole('dialog').innerText())
      throw error
    }
  }
  const assertSurface = async locator => {
    await locator.waitFor({ state: 'visible' })
    await locator.evaluate(el => Promise.all(el.getAnimations({ subtree: true }).map(animation => animation.finished.catch(() => {}))))
    const css = await styles(locator, ['backgroundColor', 'color', 'borderTopStyle', 'borderTopWidth'])
    assert.match(css.backgroundColor, /^rgb\(/, 'Popup surface is fully opaque')
    assert.equal(css.backgroundColor, await tokenColor('--dsw-alias-bg-layer-2', 'backgroundColor'))
    assert.notEqual(css.color, css.backgroundColor, 'Popup text contrasts with its surface')
    assert.ok(parseFloat(css.borderTopWidth) > 0 && css.borderTopStyle === 'solid', 'Surface has its own visible border')
    const bounds = await locator.boundingBox()
    const viewport = page.viewportSize()
    assert.ok(bounds.x >= 0 && bounds.y >= 0 && bounds.x + bounds.width <= viewport.width + 1 && bounds.y + bounds.height <= viewport.height + 1, 'Popup stays within the viewport')
  }
  const assertDialog = async () => {
    const dialog = page.getByRole('dialog')
    await assertSurface(dialog)
    const issues = await dialog.evaluate(el => {
      const box = el.getBoundingClientRect()
      const header = el.querySelector('.kanban-dialog-header').getBoundingClientRect()
      const body = el.querySelector('.kanban-dialog-body')
      const bodyBox = body.getBoundingClientRect()
      const footer = el.querySelector('.kanban-dialog-footer')
      const footBox = footer.getBoundingClientRect()
      const css = getComputedStyle(footer)
      const problems = []
      if (el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) problems.push('dialog itself overflows')
      if (header.bottom > bodyBox.top + 1 || bodyBox.bottom > footBox.top + 1 || footBox.bottom > box.bottom) problems.push('header/body/footer overlap')
      if (getComputedStyle(body).overflowY !== 'auto' || getComputedStyle(body).scrollbarWidth !== 'thin') problems.push('body does not use native thin auto scrolling')
      if (Number.parseFloat(css.paddingBottom) < 8 || Number.parseFloat(css.paddingLeft) < 12 || Number.parseFloat(css.paddingRight) < 12) problems.push('footer has insufficient breathing room')
      for (const control of el.querySelectorAll('input,textarea,button')) {
        const rect = control.getBoundingClientRect()
        if (rect.width && (rect.left < box.left || rect.right > box.right)) problems.push(`control outside panel: ${control.getAttribute('aria-label') ?? control.textContent}`)
      }
      return problems
    })
    assert.deepEqual(issues, [], 'Dialog scroll containment and control spacing')
    const footer = page.locator('.kanban-dialog-footer')
    const before = await footer.boundingBox()
    await page.locator('.kanban-dialog-body').evaluate(el => { el.scrollTop = el.scrollHeight })
    assert.deepEqual(await footer.boundingBox(), before, 'Scrolling the body does not move the actions')
    await page.locator('.kanban-dialog-body').evaluate(el => { el.scrollTop = 0 })
  }
  const openEditor = async name => {
    await page.getByRole('button', { name: 'Settings', exact: true }).click()
    await assertSurface(page.getByRole('menu'))
    await page.getByRole('menuitem', { name, exact: true }).click()
    await page.getByRole('dialog', { name, exact: true }).waitFor()
  }
  const assertFocus = async locator => {
    await locator.focus()
    assert.equal(await locator.evaluate(el => el.matches(':focus-visible')), true)
    const css = await styles(locator, ['outlineStyle', 'outlineWidth', 'outlineColor'])
    assert.ok(css.outlineStyle !== 'none' && parseFloat(css.outlineWidth) > 0, 'Keyboard target has a visible focus indicator')
    assert.equal(css.outlineColor, await tokenColor('--dsw-alias-state-business-primary'))
  }
  const viewports = { desktop: { width: 1280, height: 900 }, narrow: { width: 390, height: 844 }, short: { width: 800, height: 360 } }
  const checked = []
  for (const scheme of ['light', 'dark']) {
    await page.evaluate(scheme => {
      document.body.toggleAttribute('data-ds-dark-theme', scheme === 'dark')
      document.body.style.colorScheme = scheme
    }, scheme)
    for (const [size, viewport] of Object.entries(viewports)) {
      await page.setViewportSize(viewport)
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))))
      const boardGeometry = await page.locator('.kanban-root').evaluate(el => {
        const rect = el.getBoundingClientRect()
        return { bottom: rect.bottom, height: innerHeight, width: el.scrollWidth, clientWidth: el.clientWidth }
      })
      assert.ok(boardGeometry.bottom <= boardGeometry.height && boardGeometry.width <= boardGeometry.clientWidth, `Board fits the available area: ${JSON.stringify(boardGeometry)}`)
      for (const column of await page.locator('.kanban-column').all()) {
        const css = await styles(column, ['borderTopWidth', 'borderLeftWidth', 'borderRightWidth', 'borderBottomWidth'])
        assert.ok(Object.values(css).every(value => parseFloat(value) > 0), 'Columns retain all four real borders')
      }
      await shot(`board-${scheme}-${size}`)
      for (const editor of ['Edit lists', 'Edit labels']) {
        await openEditor(editor)
        await assertDialog()
        const add = page.getByRole('dialog').getByRole('button', { name: 'Add', exact: true })
        assert.equal((await styles(add, ['color'])).color, await tokenColor('--dsw-alias-label-primary-foreground'))
        assert.equal((await styles(add, ['backgroundColor'])).backgroundColor, await tokenColor('--dsw-alias-button-primary-fill', 'backgroundColor'))
        await shot(`${editor === 'Edit lists' ? 'lists' : 'labels'}-${scheme}-${size}`)
        await closeDialog()
      }
      await page.getByRole('button', { name: 'Keyboard fixture', exact: true }).click()
      await assertDialog()
      const save = page.getByRole('button', { name: 'Save', exact: true })
      assert.equal((await styles(save, ['backgroundColor'])).backgroundColor, await tokenColor('--dsw-alias-button-primary-fill', 'backgroundColor'), 'Save is the primary action')
      await shot(`card-${scheme}-${size}`)
      for (const name of ['Label', 'Priority']) {
        await page.getByRole('combobox', { name, exact: true }).click()
        await assertSurface(page.getByRole('listbox'))
        await shot(`${name.toLowerCase()}-select-${scheme}-${size}`)
        await page.keyboard.press('Escape')
      }
      await page.getByRole('button', { name: 'Chat with agent', exact: true }).click()
      await assertSurface(page.getByRole('menu'))
      await shot(`chat-menu-${scheme}-${size}`)
      await page.keyboard.press('Escape')
      await closeDialog()
      await page.getByRole('button', { name: 'Add card', exact: true }).first().click()
      await assertDialog()
      assert.equal(await page.getByRole('button', { name: 'Save', exact: true }).isDisabled(), true, 'Empty new card cannot be saved')
      await shot(`new-card-${scheme}-${size}`)
      await closeDialog()
      for (const name of ['Settings', 'Filter by priority', 'Filter by label']) {
        await page.getByRole('button', { name, exact: true }).click()
        await assertSurface(page.getByRole('menu'))
        await shot(`${name.replaceAll(' ', '-').toLowerCase()}-${scheme}-${size}`)
        await page.keyboard.press('Escape')
      }
      await page.locator('.kanban-dropdown-content').waitFor({ state: 'detached' })
      checked.push(`${scheme}/${size}: board, three dialogs (including new/edit card), six menus`)
    }
  }

  await page.setViewportSize(viewports.desktop)
  const card = page.getByRole('button', { name: 'Keyboard fixture', exact: true })
  // Traverse with real Tab events: Space must drag while Enter edits.
  for (let count = 0; count < 30 && !(await card.evaluate(el => el === document.activeElement)); count++) await page.keyboard.press('Tab')
  assert.equal(await card.evaluate(el => el === document.activeElement && el.matches(':focus-visible')), true)
  await assertFocus(card)
  await page.keyboard.press('Space')
  await page.locator('.kanban-sortable-card.is-dragging').waitFor()
  assert.equal(await page.getByRole('dialog').count(), 0, 'Space starts dragging without editing')
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 0)))
  await page.keyboard.press('Escape')
  await page.locator('.kanban-sortable-card.is-dragging').waitFor({ state: 'hidden' })
  await page.keyboard.press('Enter')
  const title = page.getByRole('textbox', { name: 'Title', exact: true })
  await title.waitFor()
  assert.equal(await title.evaluate(el => el === document.activeElement), true)
  await closeDialog(true)
  assert.equal(await card.evaluate(el => el === document.activeElement), true, 'Closing restores focus to the card')

  await openEditor('Edit lists')
  await assertFocus(page.locator('.kanban-drag-handle').first())
  await page.getByRole('button', { name: 'Delete: Todo', exact: true }).click()
  assert.match(await page.getByRole('alert').innerText(), /first remaining list/)
  assert.equal(await page.getByRole('button', { name: 'Cancel', exact: true }).evaluate(el => el === document.activeElement), true)
  await page.keyboard.press('Escape')
  assert.equal(await page.getByRole('dialog').count(), 1, 'Escape cancels deletion before closing the editor')
  await closeDialog()
  await openEditor('Edit labels')
  await page.getByRole('button', { name: 'Delete label: Dark label', exact: true }).click()
  assert.match(await page.getByRole('alert').innerText(), /removed from all cards/)
  await page.getByRole('button', { name: 'Cancel', exact: true }).click()
  await closeDialog()
  await card.click()
  await page.getByRole('button', { name: 'Delete', exact: true }).click()
  assert.match(await page.getByRole('alert').innerText(), /cannot be undone/)
  await page.getByRole('button', { name: 'Cancel', exact: true }).click()
  await title.fill('Unsaved fixture')
  await page.keyboard.press('Escape')
  await page.getByRole('button', { name: 'Discard changes', exact: true }).waitFor()
  await shot('discard-confirmation')
  await page.getByRole('button', { name: 'Cancel', exact: true }).click()
  assert.equal(await title.inputValue(), 'Unsaved fixture', 'Cancel keeps the unsaved draft')
  await page.setViewportSize(viewports.short)
  failSave = true
  await page.getByRole('button', { name: 'Save', exact: true }).click()
  await page.getByRole('dialog').getByRole('alert').waitFor()
  assert.equal(await title.inputValue(), 'Unsaved fixture', 'Failed save preserves the draft')
  await assertDialog()
  await shot('save-failure-short')
  await page.getByRole('button', { name: 'Save', exact: true }).click()
  await page.getByRole('dialog').waitFor({ state: 'hidden' })
  await page.getByRole('button', { name: 'Unsaved fixture', exact: true }).waitFor()
  assert.equal(writes.length, 2, 'Only the explicit save and retry reach the fixture API')
  assert.deepEqual(errors.filter(message => !message.includes('KANBAN_TEST_BOOT_STOP')), [])
  const report = { passed: true, checked, writes: writes.length, screenshots: output, fixtureOnly: true }
  await writeFile(`${output}/verification.json`, JSON.stringify(report, null, 2) + '\n')
  console.log(JSON.stringify(report, null, 2))
} finally {
  await browser.close()
}
