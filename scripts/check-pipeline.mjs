/**
 * dsh-kanban loading pipeline checks with mock fs and the real apply().
 *
 * Run: node scripts/check-pipeline.mjs
 *
 * Use temporary directories and a minimal fs service to call index.js apply(ctx).
 * Invoke the registered kanban_get tool to exercise the boardOf pipeline:
 * - v0: migrate, write schemaVersion 3, create .bak-v0, and return warnings
 * - v3: pass unchanged, without writing, backups or warnings
 * - v1/v2: migrate, write schemaVersion 3, and create a versioned backup
 * - Corrupt files: create .corrupt-* backups, return an empty board and warnings
 * - Future versions: create .unsupported-vN backups and return a read-only empty board
 * - After backing up corruption, future saves write the current schema
 * - Activity events record creation, updates, moves and deletion with correct sources
 * - Persist under <workspace.path> regardless of the DSH launch directory
 * - Use each workspace root for per-operation sandbox policies
 */
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { apply } from '../index.js'

let failed = 0
const check = (name, cond, detail) => {
  if (cond) {
    console.log('  ✓ ' + name)
  } else {
    failed++
    console.log('  ✗ ' + name + (detail ? ' —— ' + detail : ''))
  }
}

/** Collect tools registered by apply() by name. */
function bootPlugin(dir) {
  const tools = []
  const files = new Map() // Path -> content; paths stand in for FsTarget.
  const targetOf = (name) => join(dir, name)

  const fs = {
    async resolve(path, opts = {}) {
      const name = opts.cwd ? path : path
      return targetOf(name)
    },
    async readText(target) {
      if (!existsSync(target)) throw new Error('ENOENT')
      return readFileSync(target, 'utf8')
    },
    async writeText(target, content) {
      writeFileSync(target, content, 'utf8')
      return { version: 1 }
    },
    async listDir(target) {
      return readdirSync(target)
        .filter((n) => !n.startsWith('.'))
        .map((name) => ({ name, target: join(target, name) }))
    },
  }
  const workspace = { id: 'ws-test', path: dir, title: 'test' }
  const sandboxPolicy = {
    defaultMode: 'workspace-write',
    workspaceRoot: dir,
    resolve(request = {}) {
      return { mode: 'workspace-write', workspaceRoot: request.session?.header?.cwd || dir }
    },
  }
  const workspaceRegistry = {
    get(id) {
      return id === workspace.id ? workspace : undefined
    },
    list() {
      return [workspace]
    },
    async resolveByPath(path) {
      return path === workspace.path ? workspace : undefined
    },
  }
  const ctx = {
    get(key) {
      if (key === 'fs') return fs
      if (key === 'sandboxPolicy') return sandboxPolicy
      if (key === 'workspaceRegistry') return workspaceRegistry
      return undefined
    },
    tools: {
      register(tool) {
        tools.push(tool)
      },
    },
  }
  apply(ctx)
  tools.exec = { agent: { session: { header: { cwd: dir } } } }
  return { tools, dir }
}

async function runTool(tools, name, args = {}, exec) {
  const tool = tools.find((t) => t.name === name)
  if (!tool) throw new Error('tool not found: ' + name)
  return tool.execute(args, exec || tools.exec || {})
}

/** Exercise workspace resolution independently of the DSH launch directory. */
function bootWorkspacePlugin(launchRoot, workspace) {
  const tools = []
  const fs = {
    async resolve(path, opts = {}) {
      return join(opts.cwd || launchRoot, path)
    },
    async readText(target) {
      if (!existsSync(target)) throw new Error('ENOENT')
      return readFileSync(target, 'utf8')
    },
    async writeText(target, content, expected, signal, policy) {
      if (!policy || policy.workspaceRoot !== workspace.path) {
        throw new Error('FS_SANDBOX_DENIED: write policy does not match workspace root')
      }
      writeFileSync(target, content, 'utf8')
      return { version: 1 }
    },
    async listDir(target) {
      return readdirSync(target)
        .filter((n) => !n.startsWith('.'))
        .map((name) => ({ name, target: join(target, name) }))
    },
  }
  const sandboxPolicy = {
    defaultMode: 'workspace-write',
    workspaceRoot: launchRoot,
    resolve(request = {}) {
      return {
        mode: 'workspace-write',
        workspaceRoot: request.session?.header?.cwd || launchRoot,
      }
    },
  }
  const workspaceRegistry = {
    get(id) {
      return id === workspace.id ? workspace : undefined
    },
    list() {
      return [workspace]
    },
    async resolveByPath(path) {
      return path === workspace.path ? workspace : undefined
    },
  }
  const ctx = {
    get(key) {
      if (key === 'fs') return fs
      if (key === 'sandboxPolicy') return sandboxPolicy
      if (key === 'workspaceRegistry') return workspaceRegistry
      return undefined
    },
    tools: {
      register(tool) {
        tools.push(tool)
      },
    },
  }
  apply(ctx)
  return { tools }
}

const execAt = (cwd) => ({ agent: { session: { header: { cwd } } } })

const dir = mkdtempSync(join(tmpdir(), 'dsh-kanban-check-'))
try {
  // ---- A: Migrate legacy v0 files ----
  console.log('\n[A] Legacy v0 -> migrate, back up and write back')
  {
    const { tools } = bootPlugin(dir)
    writeFileSync(
      join(dir, '.dsh-kanban.json'),
      JSON.stringify({
        columns: [{ id: 'c1', title: 'Todo' }, { id: 'c2', title: 'Done' }],
        labels: [{ name: 'bug', color: '#F87171' }],
        cards: [{ id: 'k1', columnId: 'c1', title: 'Old card', note: 'n' }],
      }),
    )
    const r = await runTool(tools, 'kanban_get')
    check('Tool returns ok', r.ok === true, JSON.stringify(r))
    check('Returns migration warnings', Array.isArray(r.warnings) && r.warnings.length >= 1, JSON.stringify(r.warnings))
    check('Warning mentions automatic migration', r.warnings.some((w) => w.includes('upgraded')))
    check('Board data remains intact', r.board.cards.length === 1 && r.board.cards[0].title === 'Old card')

    const onDisk = JSON.parse(readFileSync(join(dir, '.dsh-kanban.json'), 'utf8'))
    check('Writes schemaVersion 3', onDisk.schemaVersion === 3)
    check('Write preserves data', onDisk.cards.length === 1 && onDisk.columns.length === 2)
    check('.bak-v0 backup exists', existsSync(join(dir, '.dsh-kanban.json.bak-v0')))
    const bak = JSON.parse(readFileSync(join(dir, '.dsh-kanban.json.bak-v0'), 'utf8'))
    check('Backup preserves the unversioned original', bak.schemaVersion === undefined && bak.cards[0].id === 'k1')

    // Reloading must not migrate again or repeat warnings.
    const r2 = await runTool(tools, 'kanban_get')
    check('Reload has no warnings', r2.warnings.length === 0)
  }

  // ---- B: Accept v3 files unchanged ----
  console.log('\n[B] v3 files pass unchanged')
  {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    const { tools } = bootPlugin(dir)
    writeFileSync(
      join(dir, '.dsh-kanban.json'),
      JSON.stringify({ schemaVersion: 3, columns: [{ id: 'c1', title: 'Todo' }], labels: [], cards: [], activities: [] }),
    )
    const r = await runTool(tools, 'kanban_get')
    check('Tool returns ok', r.ok === true)
    check('No warnings', r.warnings.length === 0)
    check('No .bak backup created', !existsSync(join(dir, '.dsh-kanban.json.bak-v0')) && !existsSync(join(dir, '.dsh-kanban.json.bak-v1')) && !existsSync(join(dir, '.dsh-kanban.json.bak-v2')))
  }

  // ---- B2: Migrate v1 to v3 ----
  console.log('\n[B2] v1 -> automatically migrate to v3')
  {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    const { tools } = bootPlugin(dir)
    writeFileSync(
      join(dir, '.dsh-kanban.json'),
      JSON.stringify({ schemaVersion: 1, columns: [{ id: 'c1', title: 'Todo' }], labels: [], cards: [{ id: 'k1', columnId: 'c1', title: 'Old', note: 'n' }] }),
    )
    const r = await runTool(tools, 'kanban_get')
    check('Tool returns ok', r.ok === true, JSON.stringify(r))
    check('Returns migration warnings', r.warnings.some((w) => w.includes('upgraded')))
    const onDisk = JSON.parse(readFileSync(join(dir, '.dsh-kanban.json'), 'utf8'))
    check('Writes schemaVersion 3', onDisk.schemaVersion === 3)
    check('activities initialized', Array.isArray(onDisk.activities) && onDisk.activities.length === 0)
    check('Card createdAt/createdBy default to null', onDisk.cards[0].createdAt === null && onDisk.cards[0].createdBy === null)
    check('Card comments initialized', Array.isArray(onDisk.cards[0].comments) && onDisk.cards[0].comments.length === 0)
    check('.bak-v1 backup exists', existsSync(join(dir, '.dsh-kanban.json.bak-v1')))
  }

  // ---- B3: Migrate v2 to v3 ----
  console.log('\n[B3] v2 -> automatically migrate to v3')
  {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    const { tools } = bootPlugin(dir)
    writeFileSync(
      join(dir, '.dsh-kanban.json'),
      JSON.stringify({
        schemaVersion: 2,
        columns: [{ id: 'c1', title: 'Todo' }],
        labels: [],
        cards: [{ id: 'k1', columnId: 'c1', title: 'Old', note: 'n', createdAt: '2026-01-01T00:00:00.000Z', createdBy: 'human' }],
        activities: [],
      }),
    )
    const r = await runTool(tools, 'kanban_get')
    check('Tool returns ok', r.ok === true, JSON.stringify(r))
    const onDisk = JSON.parse(readFileSync(join(dir, '.dsh-kanban.json'), 'utf8'))
    check('Writes schemaVersion 3', onDisk.schemaVersion === 3)
    check('Preserve card metadata and initialize comments', onDisk.cards[0].createdBy === 'human' && Array.isArray(onDisk.cards[0].comments))
    check('.bak-v2 backup exists', existsSync(join(dir, '.dsh-kanban.json.bak-v2')))
  }

  // ---- C: Back up corrupt files and return a usable empty board ----
  console.log('\n[C] Corrupt file -> backup and usable empty board')
  {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    const { tools } = bootPlugin(dir)
    writeFileSync(join(dir, '.dsh-kanban.json'), '{"columns": [broken!!', 'utf8')
    const r = await runTool(tools, 'kanban_get')
    check('Tool returns ok and the board remains usable', r.ok === true, JSON.stringify(r))
    check('Returns corruption warning', r.warnings.some((w) => w.includes('backed up')))
    check('Empty board with default columns', r.board.columns.length >= 1 && r.board.cards.length === 0)
    const backups = readdirSync(dir).filter((n) => n.includes('.corrupt-'))
    // Startup checks and the loading pipeline can each back up the original, so >= 1 suffices.
    check('Creates .corrupt-* backups', backups.length >= 1, JSON.stringify(backups))
    check('Backups preserve original corrupt content', backups.every((b) => readFileSync(join(dir, b), 'utf8') === '{"columns": [broken!!'))

    // Saving replaces the corrupt file with the current format; the backup remains.
    const add = await runTool(tools, 'kanban_add_card', { title: 'New after corrupt' })
    check('Cards remain writable after corruption', add.ok === true)
    const onDisk = JSON.parse(readFileSync(join(dir, '.dsh-kanban.json'), 'utf8'))
    check('Save writes schemaVersion', onDisk.schemaVersion === 3 && onDisk.cards.length === 1)
    check('New cards initialize comments', Array.isArray(onDisk.cards[0].comments) && onDisk.cards[0].comments.length === 0)
    check('New cards emit card_created events', Array.isArray(onDisk.activities) && onDisk.activities.length === 1 && onDisk.activities[0].type === 'card_created')
  }

  // ---- D: Back up unsupported future versions and return an empty board ----
  console.log('\n[D] Future version -> backup and usable empty board')
  {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    const { tools } = bootPlugin(dir)
    writeFileSync(
      join(dir, '.dsh-kanban.json'),
      JSON.stringify({ schemaVersion: 99, columns: [{ id: 'c1', title: 'Future' }], labels: [], cards: [] }),
    )
    const r = await runTool(tools, 'kanban_get')
    check('Tool returns ok', r.ok === true)
    check('Returns unsupported-version warning', r.warnings.some((w) => w.includes('newer plugin version')))
    check('Board is empty', r.board.cards.length === 0 && r.board.columns[0] && r.board.columns[0].title !== 'Future')
    check('Creates .unsupported-v99 backup', existsSync(join(dir, '.dsh-kanban.json.unsupported-v99')))
    check('Original file is not overwritten', JSON.parse(readFileSync(join(dir, '.dsh-kanban.json'), 'utf8')).schemaVersion === 99)
  }

  // ---- E: Startup validation scan ----
  console.log('\n[E] Startup validation scan triggered by apply')
  {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, '.dsh-kanban.json'), '{"columns": [broken', 'utf8')
    writeFileSync(join(dir, 'kanban-board-old.json'), JSON.stringify({ columns: [], labels: [], cards: [] }), 'utf8')
    writeFileSync(join(dir, 'unrelated.txt'), 'hello', 'utf8')
    bootPlugin(dir) // apply starts maybeStartupCheck asynchronously.

    // Poll for the asynchronous startup check for at most two seconds.
    const deadline = Date.now() + 2000
    let backups = []
    while (Date.now() < deadline) {
      backups = readdirSync(dir).filter((n) => n.includes('.corrupt-'))
      if (backups.length > 0) break
      await new Promise((r) => setTimeout(r, 25))
    }
    check('Startup check backs up corrupt files', backups.length === 1, JSON.stringify(backups))
    check('Ignores legacy launch-directory files', !existsSync(join(dir, 'kanban-board-old.json.bak-v0')))
    check('Ignores unrelated files', readdirSync(dir).filter((n) => n.includes('unrelated')).length === 1)
  }

  // ---- F: Comments and activity logs from agent tools ----
  console.log('\n[F] Comments and activity: create / comment / update / move / delete')
  {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    const { tools } = bootPlugin(dir)

    const add = await runTool(tools, 'kanban_add_card', { title: 'Task A', label: 'bug', priority: 'high' })
    check('addCard succeeds', add.ok === true, JSON.stringify(add))
    const disk1 = JSON.parse(readFileSync(join(dir, '.dsh-kanban.json'), 'utf8'))
    const cardId = disk1.cards[0].id
    check('Records card_created with agent source', disk1.activities.length === 1 && disk1.activities[0].type === 'card_created' && disk1.activities[0].source === 'agent')
    check('card_created includes initial label and priority', disk1.activities[0].meta && disk1.activities[0].meta.label === 'bug' && disk1.activities[0].meta.priority === 'high')
    check('Cards record createdAt/createdBy', disk1.cards[0].createdBy === 'agent' && typeof disk1.cards[0].createdAt === 'string')

    const commented = await runTool(tools, 'kanban_add_comment', { id: cardId, content: '  Ready for review  ' })
    check('Comment succeeds and summary returns its count', commented.ok === true && commented.board.cards[0].commentCount === 1, JSON.stringify(commented))
    const commentDisk = JSON.parse(readFileSync(join(dir, '.dsh-kanban.json'), 'utf8'))
    check('Comments persist with agent source', commentDisk.cards[0].comments.length === 1 && commentDisk.cards[0].comments[0].content === 'Ready for review' && commentDisk.cards[0].comments[0].source === 'agent')
    check('Comments are recorded in the activity log', commentDisk.activities.some((a) => a.type === 'card_comment_added' && a.source === 'agent'))
    const details = await runTool(tools, 'kanban_get_card', { id: cardId })
    check('getCard returns comments', details.ok === true && details.card.comments[0].content === 'Ready for review')

    await runTool(tools, 'kanban_update_card', { id: cardId, priority: 'low', label: 'Feedback' })
    const disk2 = JSON.parse(readFileSync(join(dir, '.dsh-kanban.json'), 'utf8'))
    const types2 = disk2.activities.map((a) => a.type)
    check('Records priority and label changes', types2.includes('card_priority_changed') && types2.includes('card_label_changed'))

    const board2 = JSON.parse(readFileSync(join(dir, '.dsh-kanban.json'), 'utf8'))
    const inProgress = board2.columns.find((c) => c.title === 'In Progress')
    await runTool(tools, 'kanban_move_card', { id: cardId, columnId: inProgress.id })
    const disk3 = JSON.parse(readFileSync(join(dir, '.dsh-kanban.json'), 'utf8'))
    const moved = disk3.activities.find((a) => a.type === 'card_moved')
    check('Records card_moved across columns', !!moved && moved.from === 'Todo' && moved.to === 'In Progress')

    await runTool(tools, 'kanban_delete_card', { id: cardId })
    const disk4 = JSON.parse(readFileSync(join(dir, '.dsh-kanban.json'), 'utf8'))
    check('Records card_deleted', disk4.activities.some((a) => a.type === 'card_deleted' && a.cardId === cardId))
  }

  // ---- G: Boards follow workspaces, independent of the DSH launch directory ----
  console.log('\n[G] Reads the same workspace board after changing the DSH launch directory')
  {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    const launchA = join(dir, 'launch-a')
    const launchB = join(dir, 'launch-b')
    const workspacePath = join(dir, 'project')
    mkdirSync(launchA)
    mkdirSync(launchB)
    mkdirSync(workspacePath)
    const workspace = { id: 'ws-project', path: workspacePath, title: 'project' }

    const first = bootWorkspacePlugin(launchA, workspace)
    const added = await runTool(first.tools, 'kanban_add_card', { title: 'Survives restart' }, execAt(workspacePath))
    check('Initial card write succeeds', added.ok === true, JSON.stringify(added))
    check('Data is written under the workspace root', existsSync(join(workspacePath, '.dsh-kanban.json')))
    check('No board files in the launch directory', readdirSync(launchA).every((name) => !name.includes('kanban')))

    const second = bootWorkspacePlugin(launchB, workspace)
    const loaded = await runTool(second.tools, 'kanban_get', {}, execAt(workspacePath))
    check('Task survives a launch-directory change', loaded.board.cards.some((card) => card.title === 'Survives restart'))
  }
} finally {
  rmSync(dir, { recursive: true, force: true })
}

console.log('\n' + (failed === 0 ? 'All checks passed ✓' : failed + ' checks failed ✗'))
process.exit(failed === 0 ? 0 : 1)
