/**
 * dsh-kanban: DSH bundle host plugin (standard Cordis function plugin).
 *
 * package.json points dsh.bundle.patch to cordis.patch.yml, which inserts this
 * plugin into the profile composition. The loader resolves its package entry.
 *
 * Responsibilities:
 * - Workspace isolation: boards are keyed by workspaceId, one board per workspace.
 * - Persistence: ctx.fs writes <workspace.path>/.dsh-kanban.json.
 * - Agent tools: ctx.tools.register exposes 15 kanban_* tools.
 * - Browser API: ctx.get('webServer') registers routes under /api/kanban.
 *
 * Per-workspace data model (disk files include schemaVersion):
 *   schemaVersion: 3
 *   columns: [{ id, title }]
 *   labels: [{ name, color }] // name is the unique key and binds the color
 *   cards:   [{ id, columnId, title, note, label, priority, createdAt, createdBy,
 *               comments: [{ id, content, source, createdAt }] }]
 *   activities: [{ id, ts, cardId, type, source, field?, from?, to?, meta? }] // append-only log
 *
 * Data safety:
 * - Files without schemaVersion are v0 and migrate on first access (see MIGRATIONS).
 * - Back up originals before migration or recovery: .bak-vN / .corrupt-<ts> / .unsupported-vN.
 * - Check all workspace boards at startup; back up corrupt files and keep boards usable.
 */
export const name = 'dsh-kanban'

export const inject = ['tools']

// ---------------------------------------------------------------------------
// Persistence format version and migrations.
//
// On-disk structure:
//   { schemaVersion, columns, labels, cards }
//
// Version conventions:
// v1: first versioned format, matching the unversioned columns/labels/cards arrays
// used in 1.0.x through 1.2.x, with normalized note/label/priority card fields.
// LEGACY_VERSION (0): files without schemaVersion.
//
// Adding or removing fields:
// 1) Increment SCHEMA_VERSION.
// 2) Register a v(n) -> v(n+1) function in MIGRATIONS, keyed by the old version.
// 3) Return schemaVersion: n+1 from the pure migration (checked by migrateBoard).
// Back up old files before following the migration chain on first access.
// ---------------------------------------------------------------------------

export const SCHEMA_VERSION = 3
export const LEGACY_VERSION = 0

// Append-only activity log persisted with the board; drop oldest events above the limit.
const ACTIVITY_LIMIT = 5000

// Input limits must match tool schemas and the CardDialog editor.
// clampText truncates oversized input before writing and emits a one-time board warning
// so both agents and users know when content was shortened.
export const TITLE_LIMIT = 120
export const NOTE_LIMIT = 2000
export const LABEL_LIMIT = 20
export const COLUMN_TITLE_LIMIT = 40
export const COMMENT_LIMIT = 2000

const isObj = (v) => typeof v === 'object' && v !== null && !Array.isArray(v)
const strField = (v, fb) => (typeof v === 'string' && v ? v : fb)
const normColor = (v) => (typeof v === 'string' && /^#[0-9a-fA-F]{6}$/.test(v) ? v.toLowerCase() : '#94a3b8')

// Canonical v1 entity shapes: fill missing defaults without changing valid data.
const normColumn = (c) =>
  isObj(c) ? { id: strField(c.id, ''), title: strField(c.title, 'Untitled') } : null
const normLabel = (l) =>
  isObj(l) ? { name: strField(l.name, ''), color: normColor(l.color) } : null
const normCard = (c) =>
  isObj(c)
    ? {
        id: strField(c.id, ''),
        columnId: strField(c.columnId, ''),
        title: strField(c.title, 'Untitled'),
        note: typeof c.note === 'string' ? c.note : '',
        label: typeof c.label === 'string' && c.label ? c.label : null,
        priority: typeof c.priority === 'string' ? c.priority : null,
      }
    : null

/**
 * Migration registry: key = old version, value = (old data) => new data.
 * Each result must set schemaVersion = key + 1; migrateBoard validates every step.
 */
export const MIGRATIONS = {
  0: (data) => {
    // v0 -> v1: declare the version and normalize legacy entity fields.
    const src = isObj(data) ? data : {}
    const pick = (arr) => (Array.isArray(arr) ? arr : [])
    return {
      schemaVersion: 1,
      columns: pick(src.columns).map(normColumn).filter(Boolean),
      labels: pick(src.labels).map(normLabel).filter(Boolean),
      cards: pick(src.cards).map(normCard).filter(Boolean),
    }
  },
  1: (data) => {
    // v1 -> v2: add activities and card createdAt/createdBy (null for legacy cards).
    const src = isObj(data) ? data : {}
    const pick = (arr) => (Array.isArray(arr) ? arr : [])
    return {
      schemaVersion: 2,
      columns: pick(src.columns).map(normColumn).filter(Boolean),
      labels: pick(src.labels).map(normLabel).filter(Boolean),
      cards: pick(src.cards)
        .map((c) => {
          const card = normCard(c)
          return card ? { ...card, createdAt: null, createdBy: null } : null
        })
        .filter(Boolean),
      activities: [],
    }
  },
  2: (data) => {
    // v2 -> v3: add comments; legacy cards start with an empty array.
    const src = isObj(data) ? data : {}
    const pick = (arr) => (Array.isArray(arr) ? arr : [])
    return {
      schemaVersion: 3,
      columns: pick(src.columns),
      labels: pick(src.labels),
      cards: pick(src.cards)
        .map((c) => (isObj(c) ? { ...c, comments: [] } : null))
        .filter(Boolean),
      activities: pick(src.activities),
    }
  },
}

/**
 * Migrate from fromVersion to SCHEMA_VERSION one step at a time.
 * Throw for missing steps or invalid output; the caller handles backup and fallback.
 */
export function migrateBoard(data, fromVersion) {
  let out = data
  let v = fromVersion
  while (v < SCHEMA_VERSION) {
    const step = MIGRATIONS[v]
    if (typeof step !== 'function') {
      throw new Error('missing migration v' + v + ' -> v' + (v + 1))
    }
    out = step(out)
    v += 1
    if (!isObj(out) || out.schemaVersion !== v) {
      throw new Error('migration v' + (v - 1) + ' -> v' + v + ' produced invalid data')
    }
  }
  return out
}

/**
 * Validate the final migrated structure.
 * Return { ok, errors }; nonempty errors mark the file as invalid.
 */
export function validateBoard(data) {
  const errors = []
  if (!isObj(data)) {
    errors.push('board is not an object')
    return { ok: false, errors }
  }
  if (data.schemaVersion !== SCHEMA_VERSION) {
    errors.push('expected schemaVersion ' + SCHEMA_VERSION + ', got ' + String(data.schemaVersion))
  }
  if (!Array.isArray(data.columns)) errors.push('columns must be an array')
  if (!Array.isArray(data.labels)) errors.push('labels must be an array')
  if (!Array.isArray(data.cards)) errors.push('cards must be an array')
  if (!Array.isArray(data.activities)) errors.push('activities must be an array')

  const columnIds = new Set()
  if (Array.isArray(data.columns)) {
    for (const c of data.columns) {
      if (!isObj(c) || typeof c.id !== 'string' || !c.id || typeof c.title !== 'string' || !c.title) {
        errors.push('columns contain an invalid entry')
        break
      }
      if (columnIds.has(c.id)) {
        errors.push('duplicate column id: ' + c.id)
        break
      }
      columnIds.add(c.id)
    }
  }

  const labelNames = new Set()
  if (Array.isArray(data.labels)) {
    for (const l of data.labels) {
      if (!isObj(l) || typeof l.name !== 'string' || !l.name || typeof l.color !== 'string' || !/^#[0-9a-fA-F]{6}$/.test(l.color)) {
        errors.push('labels contain an invalid entry')
        break
      }
      if (labelNames.has(l.name)) {
        errors.push('duplicate label name: ' + l.name)
        break
      }
      labelNames.add(l.name)
    }
  }

  if (Array.isArray(data.cards)) {
    const seen = new Set()
    const commentIds = new Set()
    for (const c of data.cards) {
      if (!isObj(c) || typeof c.id !== 'string' || !c.id || typeof c.columnId !== 'string' || typeof c.title !== 'string' || !Array.isArray(c.comments)) {
        errors.push('cards contain an invalid entry')
        break
      }
      if (seen.has(c.id)) {
        errors.push('duplicate card id: ' + c.id)
        break
      }
      if (!columnIds.has(c.columnId)) errors.push('card references missing column: ' + c.id)
      if (c.label != null && !labelNames.has(c.label)) errors.push('card references missing label: ' + c.id)
      if (c.priority != null && !['high', 'medium', 'low'].includes(c.priority)) errors.push('card has invalid priority: ' + c.id)
      for (const comment of c.comments) {
        if (!isObj(comment) || typeof comment.id !== 'string' || !comment.id || typeof comment.content !== 'string' || !comment.content.trim() || comment.content.length > 2000 || !['human', 'agent'].includes(comment.source) || typeof comment.createdAt !== 'string' || !comment.createdAt) {
          errors.push('card comments contain an invalid entry: ' + c.id)
          break
        }
        if (commentIds.has(comment.id)) {
          errors.push('duplicate comment id: ' + comment.id)
          break
        }
        commentIds.add(comment.id)
      }
      seen.add(c.id)
    }
  }

  if (Array.isArray(data.activities)) {
    for (const a of data.activities) {
      if (!isObj(a) || typeof a.id !== 'string' || !a.id || typeof a.ts !== 'string' || typeof a.type !== 'string' || !['human', 'agent'].includes(a.source)) {
        errors.push('activities contain an invalid entry')
        break
      }
    }
  }
  return { ok: errors.length === 0, errors }
}

/**
 * Parse and migrate board JSON without accessing disk.
 *
 * Results:
 *   { ok: true, kind: 'ok', data, migrated, fromVersion, warnings }: usable current data
 *   { ok: false, kind: 'corrupt'|'invalid'|'unsupported', warnings }: back up the original
 *
 * Failure kinds:
 *   corrupt: JSON parsing failed
 *   invalid: validation or migration failed
 *   unsupported: schemaVersion exceeds this plugin version
 */
export function parseBoardText(text) {
  const warnings = []
  let data
  try {
    data = JSON.parse(text)
  } catch {
    return {
      ok: false,
      kind: 'corrupt',
      warnings: [
        'Board data file could not be parsed as JSON; the original file has been backed up and the board opened empty.',
      ],
    }
  }

  const version =
    isObj(data) && typeof data.schemaVersion === 'number' ? data.schemaVersion : LEGACY_VERSION

  if (version > SCHEMA_VERSION) {
    return {
      ok: false,
      kind: 'unsupported',
      version,
      warnings: [
        'Board data file was written by a newer plugin version (schemaVersion ' +
          version +
          '); this plugin supports up to ' +
          SCHEMA_VERSION +
          '. The original file has been backed up and the board opened empty — please upgrade the plugin to read the original data.',
      ],
    }
  }

  let migrated = false
  if (version < SCHEMA_VERSION) {
    try {
      data = migrateBoard(data, version)
      migrated = true
      warnings.push(
        'Board data was automatically upgraded from schemaVersion ' +
          version +
          ' to ' +
          SCHEMA_VERSION +
          '; the pre-upgrade file has been backed up.',
      )
    } catch (err) {
      return {
        ok: false,
        kind: 'invalid',
        version,
        warnings: [
          'Board data upgrade failed (' +
            ((err && err.message) || err) +
            '); the original file has been backed up and the board opened empty.',
        ],
      }
    }
  }

  const check = validateBoard(data)
  if (!check.ok) {
    return {
      ok: false,
      kind: 'invalid',
      version: isObj(data) ? data.schemaVersion : undefined,
      warnings: [
        'Board data file structure is invalid (' +
          check.errors.join('; ') +
          '); the original file has been backed up and the board opened empty.',
      ],
    }
  }

  return { ok: true, kind: 'ok', data, migrated, fromVersion: version, warnings }
}

export function apply(ctx) {
  const getFs = () => ctx.get('fs')
  const getPolicy = () => ctx.get('sandboxPolicy')
  const getWorkspaceRegistry = () => ctx.get('workspaceRegistry')

  const boards = new Map() // workspaceId -> { columns, labels, cards }
  const boardLoads = new Map() // workspaceId -> Promise<board>; publish only fully initialized boards
  const workspaceQueues = new Map() // workspaceId -> Promise; serialize the entire mutation
  const fileTargets = new Map() // workspaceId -> FsTarget; retry failed resolution instead of caching it
  let seq = 0 // Global sequence for unique cN (column) and kN (card) ids.

  // ---- ID generation ----
  const nextId = (prefix) => prefix + (++seq)
  const bumpSeq = (id) => {
    if (typeof id !== 'string') return
    const n = Number(id.slice(1))
    if (Number.isFinite(n) && n > seq) seq = n
  }

  // ---- Default board ----
  const DEFAULT_COLUMNS = ['Todo', 'In Progress', 'Review', 'Done']
  const DEFAULT_LABELS = [
    { name: 'New Feature', color: '#38bdf8' },
    { name: 'bug', color: '#f87171' },
    { name: 'Feedback', color: '#34d399' },
  ]

  // ---- Persistence target resolution ----
  const BOARD_FILE = '.dsh-kanban.json'
  const workspaceKey = (workspace) => String(workspace.id || workspace.path)
  const writePolicyFor = (workspace, session) => {
    const policy = getPolicy()
    const resolved =
      policy && typeof policy.resolve === 'function'
        ? policy.resolve(session ? { session } : {})
        : { mode: (policy && policy.defaultMode) || 'workspace-write' }
    return { ...resolved, workspaceRoot: workspace.path }
  }
  const resolveFile = async (workspace) => {
    const fs = getFs()
    if (!fs) return null
    try {
      return await fs.resolve(BOARD_FILE, { cwd: workspace.path })
    } catch (err) {
      console.log(
        'dsh-kanban: Failed to resolve workspace board file ' + workspaceKey(workspace) + ': ' + ((err && err.message) || err),
      )
      return null
    }
  }
  const targetOf = async (workspace) => {
    const key = workspaceKey(workspace)
    if (fileTargets.has(key)) return fileTargets.get(key)
    const target = await resolveFile(workspace)
    if (target) fileTargets.set(key, target)
    return target
  }
  const persistedFlag = (workspace) => fileTargets.has(workspaceKey(workspace))

  // ---- Board reads and writes ----

  // Copy to .dsh-kanban.json.<suffix>, keeping the original until the replacement is written.
  const backupFile = async (workspace, suffix, session) => {
    const fs = getFs()
    const target = await targetOf(workspace)
    if (!fs || !target) return null
    const key = workspaceKey(workspace)
    try {
      const text = await fs.readText(target)
      const backupTarget = await fs.resolve(BOARD_FILE + '.' + suffix, { cwd: workspace.path })
      await fs.writeText(backupTarget, text, undefined, undefined, writePolicyFor(workspace, session))
      return backupTarget
    } catch (err) {
      console.log('dsh-kanban: Backup failed ' + key + ' (' + suffix + '): ' + ((err && err.message) || err))
      return null
    }
  }

  // Queue a one-time board warning and write it to the host log.
  const warn = (board, message) => {
    if (Array.isArray(board.warnings)) board.warnings.push(message)
    console.log('dsh-kanban: ' + message)
  }
  const takeWarnings = (board) => {
    const w = Array.isArray(board.warnings) ? board.warnings : []
    board.warnings = []
    return w
  }
  const timestamp = () => new Date().toISOString().replace(/[:.]/g, '-')

  const isNotFound = (err) => err && (err.code === 'ENOENT' || err.code === 'FS_NOT_FOUND' || err.message === 'ENOENT')

  // Cache initialization promises; publish only after reads, migrations and defaults finish.
  const boardOf = async (workspace, session) => {
    const key = workspaceKey(workspace)
    const existing = boards.get(key)
    if (existing) return existing
    if (boardLoads.has(key)) return boardLoads.get(key)

    const load = (async () => {
      const board = {
        schemaVersion: SCHEMA_VERSION,
        columns: [],
        labels: [],
        cards: [],
        activities: [],
        warnings: [],
        readOnlyReason: null,
      }
      const fs = getFs()
      const target = await targetOf(workspace)
      let migrated = false
      if (fs && target) {
        try {
          const text = await fs.readText(target)
          const parsed = parseBoardText(text)
          for (const w of parsed.warnings) warn(board, w)
          if (parsed.ok) {
            board.columns = parsed.data.columns
            board.labels = parsed.data.labels
            board.cards = parsed.data.cards
            board.activities = parsed.data.activities
            migrated = parsed.migrated
            if (parsed.migrated) {
              const backup = await backupFile(workspace, 'bak-v' + parsed.fromVersion, session)
              if (!backup) {
                migrated = false
                board.readOnlyReason = 'Board migration backup failed; changes are disabled to protect the original file.'
                warn(board, board.readOnlyReason)
              }
            }
          } else {
            const suffix = parsed.kind === 'unsupported'
              ? 'unsupported-v' + parsed.version
              : 'corrupt-' + timestamp()
            const backup = await backupFile(workspace, suffix, session)
            if (parsed.kind === 'unsupported' || !backup) {
              board.readOnlyReason = parsed.kind === 'unsupported'
                ? 'Board was created by a newer plugin version; changes are disabled until the plugin is upgraded.'
                : 'Board backup failed; changes are disabled to protect the original file.'
              warn(board, board.readOnlyReason)
            }
          }
        } catch (err) {
          console.log('dsh-kanban: Failed to read board ' + key + ': ' + ((err && err.message) || err))
          if (!isNotFound(err)) {
            board.readOnlyReason = 'Board could not be read; changes are disabled to protect the existing file.'
            warn(board, board.readOnlyReason)
          }
        }
      }
      for (const col of board.columns) bumpSeq(col.id)
      for (const card of board.cards) {
        bumpSeq(card.id)
        for (const comment of card.comments) bumpSeq(comment.id)
      }
      for (const act of board.activities) bumpSeq(act.id)
      if (board.columns.length === 0) {
        for (const title of DEFAULT_COLUMNS) board.columns.push({ id: nextId('c'), title })
      }
      if (board.labels.length === 0) board.labels = DEFAULT_LABELS.map((l) => ({ ...l }))
      boards.set(key, board)
      if (migrated && fs && target) {
        try {
          await save(workspace, session)
        } catch (err) {
          board.readOnlyReason = 'Migrated board could not be saved; changes are disabled to protect the original file.'
          warn(board, board.readOnlyReason)
        }
      }
      return board
    })()
    boardLoads.set(key, load)
    try {
      return await load
    } finally {
      boardLoads.delete(key)
    }
  }
  const save = async (workspace, session) => {
    const fs = getFs()
    const target = await targetOf(workspace)
    const key = workspaceKey(workspace)
    const board = boards.get(key)
    if (!fs || !target || !board) return
    try {
      await fs.writeText(
        target,
        JSON.stringify({
          schemaVersion: SCHEMA_VERSION,
          columns: board.columns,
          labels: board.labels,
          cards: board.cards,
          activities: Array.isArray(board.activities) ? board.activities : [],
        }),
        undefined,
        undefined,
        writePolicyFor(workspace, session),
      )
    } catch (err) {
      console.log('dsh-kanban: Save failed ' + key + ': ' + ((err && err.message) || err))
      throw err
    }
  }

  // ---- Validation, lookup and serialization ----
  const str = (v, fb) => (typeof v === 'string' ? v : fb)

  // Clamp input to its limit and warn through the board warnings queue and host log
  // whenever truncation occurs, so content is never silently discarded.
  const clampText = (value, limit, field, board) => {
    const s = str(value, '')
    if (s.length <= limit) return s
    warn(board, field + ' truncated to ' + limit + ' characters')
    return s.slice(0, limit)
  }

  const PRIORITIES = ['high', 'medium', 'low']
  const normPriority = (v) => (typeof v === 'string' && PRIORITIES.includes(v) ? v : undefined)
  const normColor = (v) => (typeof v === 'string' && /^#[0-9a-fA-F]{6}$/.test(v) ? v.toLowerCase() : undefined)
  const findCard = (b, id) => b.cards.find((c) => c.id === id)
  const findColumn = (b, id) => b.columns.find((c) => c.id === id)
  const findLabel = (b, name) => b.labels.find((l) => l.name === name)

  const cloneBoard = (b) => ({
    columns: b.columns.map((c) => ({ id: c.id, title: c.title })),
    labels: b.labels.map((l) => ({ name: l.name, color: l.color })),
    cards: b.cards.map((c) => ({
      id: c.id,
      columnId: c.columnId,
      title: c.title,
      note: c.note ?? '',
      label: c.label ?? null,
      priority: c.priority ?? null,
      createdAt: typeof c.createdAt === 'string' ? c.createdAt : null,
      createdBy: typeof c.createdBy === 'string' ? c.createdBy : null,
      comments: Array.isArray(c.comments)
        ? c.comments.map((comment) => ({
            id: comment.id,
            content: comment.content,
            source: comment.source,
            createdAt: comment.createdAt,
          }))
        : [],
    })),
    activities: Array.isArray(b.activities) ? b.activities.map((a) => ({ ...a })) : [],
  })
  const summaryOfClone = (clone) => ({
    columns: clone.columns.map((c) => ({
      id: c.id,
      title: c.title,
      count: clone.cards.filter((k) => k.columnId === c.id).length,
    })),
    labels: clone.labels.map((l) => ({ name: l.name, color: l.color })),
    cards: clone.cards.map((c) => ({
      id: c.id,
      columnId: c.columnId,
      title: c.title,
      label: c.label ?? null,
      priority: c.priority ?? null,
      commentCount: c.comments.length,
    })),
  })

  // Append a read-only activity event, persisted with the board.
  const record = (board, ev) => {
    if (!Array.isArray(board.activities)) board.activities = []
    board.activities.push({
      id: nextId('e'),
      ts: new Date().toISOString(),
      ...ev,
    })
    if (board.activities.length > ACTIVITY_LIMIT) {
      board.activities.splice(0, board.activities.length - ACTIVITY_LIMIT)
    }
  }

  // ---- Core operations shared by agent tools and browser HTTP ----
  const READ_METHODS = new Set(['get', 'getCard'])
  const dispatchUnlocked = async (workspace, method, args, source, session) => {
    const board = await boardOf(workspace, session)
    const a = args || {}
    const actor = source === 'agent' ? 'agent' : 'human'
    const persisted = () => persistedFlag(workspace)
    const result = (extra) => ({ board: cloneBoard(board), persisted: persisted(), warnings: takeWarnings(board), ...extra })
    if (!READ_METHODS.has(method) && board.readOnlyReason) {
      return result({ error: board.readOnlyReason })
    }

    switch (method) {
      case 'get':
        return { board: cloneBoard(board), persisted: persisted(), warnings: takeWarnings(board), message: 'Board loaded' }

      case 'getCard': {
        const card = cloneBoard(board).cards.find((c) => c.id === str(a.id, ''))
        if (!card) return { warnings: takeWarnings(board), error: 'Card not found: ' + str(a.id, '') }
        return { card, warnings: takeWarnings(board) }
      }

      case 'addCard': {
        const col = findColumn(board, str(a.columnId, '')) || board.columns[0]
        if (!col) return result({ error: 'No list available' })
        const label = typeof a.label === 'string' ? clampText(a.label, LABEL_LIMIT, 'Label', board) : undefined
        if (label && !findLabel(board, label)) return result({ error: 'Label not found: ' + label })
        const card = {
          id: nextId('k'),
          columnId: col.id,
          title: clampText(a.title, TITLE_LIMIT, 'Title', board) || 'Untitled card',
          note: clampText(a.note, NOTE_LIMIT, 'Note', board),
          label,
          priority: normPriority(a.priority),
          createdAt: new Date().toISOString(),
          createdBy: actor,
          comments: [],
        }
        board.cards.push(card)
        record(board, {
          cardId: card.id,
          type: 'card_created',
          source: actor,
          meta: {
            title: card.title,
            column: col.title,
            label: card.label ?? null,
            priority: card.priority ?? null,
          },
        })
        await save(workspace, session)
        return result({ message: 'Card added to "' + col.title + '"' })
      }

      case 'updateCard': {
        const card = findCard(board, str(a.id, ''))
        if (card) {
          const nextLabel = typeof a.label === 'string' ? clampText(a.label, LABEL_LIMIT, 'Label', board) : undefined
          if (nextLabel && !findLabel(board, nextLabel)) return result({ error: 'Label not found: ' + nextLabel })
          const before = {
            title: card.title,
            note: card.note,
            label: card.label ?? null,
            priority: card.priority ?? null,
          }
          if (typeof a.title === 'string') card.title = clampText(a.title, TITLE_LIMIT, 'Title', board) || card.title
          if (typeof a.note === 'string') card.note = clampText(a.note, NOTE_LIMIT, 'Note', board)
          if (typeof a.label === 'string') card.label = nextLabel || undefined
          if (typeof a.priority === 'string') card.priority = normPriority(a.priority)
          const after = {
            title: card.title,
            note: card.note,
            label: card.label ?? null,
            priority: card.priority ?? null,
          }
          if (after.title !== before.title) {
            record(board, { cardId: card.id, type: 'card_title_changed', source: actor, field: 'title', from: before.title, to: after.title })
          }
          if (after.note !== before.note) {
            record(board, { cardId: card.id, type: 'card_note_changed', source: actor, field: 'note' })
          }
          if (after.label !== before.label) {
            record(board, { cardId: card.id, type: 'card_label_changed', source: actor, field: 'label', from: before.label, to: after.label })
          }
          if (after.priority !== before.priority) {
            record(board, { cardId: card.id, type: 'card_priority_changed', source: actor, field: 'priority', from: before.priority, to: after.priority })
          }
          await save(workspace, session)
        }
        return card
          ? result({ message: 'Card updated' })
          : result({ error: 'Card not found: ' + str(a.id, '') })
      }

      case 'addComment': {
        const card = findCard(board, str(a.id, ''))
        if (!card) return result({ error: 'Card not found: ' + str(a.id, '') })
        const content = str(a.content, '').trim()
        if (!content) return result({ error: 'Comment content required' })
        if (content.length > COMMENT_LIMIT) return result({ error: 'Comment exceeds ' + COMMENT_LIMIT + ' characters' })
        const comment = {
          id: nextId('m'),
          content,
          source: actor,
          createdAt: new Date().toISOString(),
        }
        card.comments.push(comment)
        record(board, { cardId: card.id, type: 'card_comment_added', source: actor, meta: { title: card.title } })
        await save(workspace, session)
        return result({ message: 'Comment added' })
      }

      case 'deleteCard': {
        const id = str(a.id, '')
        const card = findCard(board, id)
        if (!card) return result({ error: 'Card not found: ' + id })
        board.cards = board.cards.filter((c) => c.id !== id)
        record(board, { cardId: id, type: 'card_deleted', source: actor, meta: { title: card.title } })
        await save(workspace, session)
        return result({ message: 'Card deleted' })
      }

      case 'moveCard': {
        const card = findCard(board, str(a.id, ''))
        const target = findColumn(board, str(a.columnId, ''))
        if (!card || !target) return result({ error: 'Card or list not found' })
        const fromCol = findColumn(board, card.columnId)
        const fromTitle = fromCol ? fromCol.title : String(card.columnId)
        board.cards = board.cards.filter((c) => c.id !== card.id)
        card.columnId = target.id
        const inCol = board.cards.filter((c) => c.columnId === target.id)
        const toIndex = typeof a.toIndex === 'number' && Number.isFinite(a.toIndex)
          ? Math.max(0, Math.min(Math.floor(a.toIndex), inCol.length))
          : inCol.length
        const anchor = inCol[toIndex]
        if (anchor) board.cards.splice(board.cards.indexOf(anchor), 0, card)
        else board.cards.push(card)
        if (fromTitle !== target.title) {
          record(board, { cardId: card.id, type: 'card_moved', source: actor, field: 'columnId', from: fromTitle, to: target.title, meta: { title: card.title } })
        }
        await save(workspace, session)
        return result({ message: 'Moved to "' + target.title + '"' })
      }

      case 'addColumn': {
        const title = clampText(a.title, COLUMN_TITLE_LIMIT, 'List title', board) || 'New list'
        board.columns.push({ id: nextId('c'), title })
        record(board, { cardId: null, type: 'column_added', source: actor, meta: { column: title } })
        await save(workspace, session)
        return result({ message: 'List added: "' + title + '"' })
      }

      case 'renameColumn': {
        const col = findColumn(board, str(a.id, ''))
        if (col && typeof a.title === 'string') {
          const before = col.title
          col.title = clampText(a.title, COLUMN_TITLE_LIMIT, 'List title', board) || col.title
          if (col.title !== before) {
            record(board, { cardId: null, type: 'column_renamed', source: actor, field: 'title', from: before, to: col.title, meta: { column: col.title } })
          }
          await save(workspace, session)
        }
        return col ? result({ message: 'List renamed' }) : result({ error: 'List not found' })
      }

      case 'deleteColumn': {
        const id = str(a.id, '')
        if (board.columns.length <= 1) return result({ error: 'At least one list must remain' })
        const idx = board.columns.findIndex((c) => c.id === id)
        if (idx < 0) return result({ error: 'List not found' })
        const deleted = board.columns[idx]
        board.columns.splice(idx, 1)
        const fallback = board.columns[0].id
        for (const card of board.cards) {
          if (card.columnId === id) {
            card.columnId = fallback
            record(board, { cardId: card.id, type: 'card_moved', source: actor, field: 'columnId', from: deleted.title, to: board.columns[0].title, meta: { title: card.title } })
          }
        }
        record(board, { cardId: null, type: 'column_deleted', source: actor, meta: { column: deleted.title } })
        await save(workspace, session)
        return result({ message: 'List deleted, cards moved to "' + board.columns[0].title + '"' })
      }

      case 'moveColumn': {
        const id = str(a.id, '')
        const idx = board.columns.findIndex((c) => c.id === id)
        if (idx < 0) return result({ error: 'List not found' })
        const [col] = board.columns.splice(idx, 1)
        const toIndex = typeof a.toIndex === 'number' && Number.isFinite(a.toIndex)
          ? Math.max(0, Math.min(Math.floor(a.toIndex), board.columns.length))
          : board.columns.length
        board.columns.splice(toIndex, 0, col)
        await save(workspace, session)
        return result({ message: 'List order updated' })
      }

      case 'addLabel': {
        const name = clampText(a.name, LABEL_LIMIT, 'Label name', board)
        if (!name) return result({ error: 'Label name required' })
        if (findLabel(board, name)) return result({ error: 'Label already exists' })
        board.labels.push({ name, color: normColor(a.color) || '#94a3b8' })
        record(board, { cardId: null, type: 'label_added', source: actor, meta: { label: name } })
        await save(workspace, session)
        return result({ message: 'Label added: "' + name + '"' })
      }

      case 'updateLabel': {
        const name = str(a.name, '')
        const label = findLabel(board, name)
        if (!label) return result({ error: 'Label not found' })
        const newName = clampText(a.newName, LABEL_LIMIT, 'Label name', board)
        if (newName && newName !== name) {
          if (findLabel(board, newName)) return result({ error: 'Label name already exists' })
          label.name = newName
          for (const card of board.cards) {
            if (card.label === name) {
              card.label = newName
              record(board, { cardId: card.id, type: 'card_label_changed', source: actor, field: 'label', from: name, to: newName, meta: { title: card.title } })
            }
          }
          record(board, { cardId: null, type: 'label_renamed', source: actor, field: 'name', from: name, to: newName, meta: { label: newName } })
        }
        if (typeof a.color === 'string') {
          const beforeColor = label.color
          label.color = normColor(a.color) || label.color
          if (label.color !== beforeColor) {
            record(board, { cardId: null, type: 'label_color_changed', source: actor, field: 'color', from: beforeColor, to: label.color, meta: { label: label.name } })
          }
        }
        await save(workspace, session)
        return result({ message: 'Label updated' })
      }

      case 'deleteLabel': {
        const name = str(a.name, '')
        const idx = board.labels.findIndex((l) => l.name === name)
        if (idx < 0) return result({ error: 'Label not found' })
        board.labels.splice(idx, 1)
        for (const card of board.cards) {
          if (card.label === name) {
            card.label = undefined
            record(board, { cardId: card.id, type: 'card_label_changed', source: actor, field: 'label', from: name, to: null, meta: { title: card.title } })
          }
        }
        record(board, { cardId: null, type: 'label_deleted', source: actor, meta: { label: name } })
        await save(workspace, session)
        return result({ message: 'Label deleted' })
      }

      default:
        return result({ error: 'Unknown kanban method: ' + method })
    }
  }

  const dispatch = (workspace, method, args, source, session) => {
    const key = workspaceKey(workspace)
    const previous = workspaceQueues.get(key) || Promise.resolve()
    const run = previous.catch(() => {}).then(async () => {
      const board = await boardOf(workspace, session)
      const snapshot = READ_METHODS.has(method) ? null : JSON.parse(JSON.stringify(board))
      try {
        return await dispatchUnlocked(workspace, method, args, source, session)
      } catch (err) {
        if (snapshot) boards.set(key, snapshot)
        throw err
      }
    })
    const settled = run.then(() => undefined, () => undefined)
    workspaceQueues.set(key, settled)
    settled.finally(() => {
      if (workspaceQueues.get(key) === settled) workspaceQueues.delete(key)
    })
    return run
  }

  // ---- Tool execution context and browser workspaceId resolution ----
  const workspaceOfExec = async (exec) => {
    const agent = exec && exec.agent
    const session = agent && agent.session
    const cwd = session && session.header && session.header.cwd
    if (typeof cwd !== 'string' || !cwd) return null
    const registry = getWorkspaceRegistry()
    if (registry) {
      try {
        const workspace = await registry.resolveByPath(cwd)
        if (workspace) return workspace
      } catch (err) {
        console.log('dsh-kanban: Failed to resolve workspace: ' + ((err && err.message) || err))
      }
    }
    // Unregistered sessions use their own cwd as the workspace root.
    return { id: 'cwd:' + cwd, path: cwd, title: cwd }
  }
  const workspaceOfId = (id) => {
    const registry = getWorkspaceRegistry()
    return registry && typeof registry.get === 'function' ? registry.get(id) : undefined
  }
  const emptyBoardSummary = { columns: [], labels: [], cards: [] }

  const runTool = async (method, args, exec) => {
    const workspace = await workspaceOfExec(exec)
    if (!workspace) {
      return {
        ok: false,
        message: 'Cannot determine the current workspace from the tool execution context',
        board: emptyBoardSummary,
        warnings: [],
      }
    }
    const session = exec && exec.agent && exec.agent.session
    try {
      const r = await dispatch(workspace, method, args, 'agent', session)
      return {
        ok: !r.error,
        message: r.error || r.message || 'Done',
        board: summaryOfClone(r.board),
        warnings: Array.isArray(r.warnings) ? r.warnings : [],
      }
    } catch (err) {
      return {
        ok: false,
        message: 'Board change could not be persisted: ' + ((err && err.message) || err),
        board: summaryOfClone(cloneBoard(await boardOf(workspace, session))),
        warnings: [],
      }
    }
  }

  // ---- Browser API through the official webServer extension ----
  const MAX_HTTP_BODY = 1024 * 1024
  const sendJson = (res, status, value) => {
    res.writeHead(status, { 'content-type': 'application/json; charset=utf-8' })
    res.end(JSON.stringify(value))
  }
  const httpHandler = async (req, res) => {
    try {
      if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed' })
      const contentType = String(req.headers && req.headers['content-type'] || '').toLowerCase()
      if (!contentType.startsWith('application/json')) return sendJson(res, 415, { error: 'Expected application/json' })
      const origin = req.headers && req.headers.origin
      const host = req.headers && req.headers.host
      if (origin && host) {
        let originHost = ''
        try { originHost = new URL(origin).host } catch {}
        if (originHost !== host) return sendJson(res, 403, { error: 'Cross-origin request denied' })
      }

      const chunks = []
      let size = 0
      for await (const chunk of req) {
        size += chunk.length
        if (size > MAX_HTTP_BODY) return sendJson(res, 413, { error: 'Request body too large' })
        chunks.push(chunk)
      }
      const raw = Buffer.concat(chunks).toString('utf8')
      const body = raw ? JSON.parse(raw) : {}
      const method = typeof body.method === 'string' ? body.method : 'get'
      const args = isObj(body.args) ? body.args : {}
      const workspaceId = typeof args.workspaceId === 'string' ? args.workspaceId : ''
      const workspace = workspaceId ? workspaceOfId(workspaceId) : undefined
      if (!workspace) return sendJson(res, 400, { error: 'Unknown workspace: ' + (workspaceId || '(missing)') })
      const result = await dispatch(workspace, method, args, 'human')
      return sendJson(res, result.error ? 400 : 200, result)
    } catch (err) {
      const status = err instanceof SyntaxError ? 400 : 500
      return sendJson(res, status, { error: String((err && err.message) || err) })
    }
  }

  const routeState = { registered: false, timer: null, dispose: null, disposed: false, attempts: 0 }
  const registerRoute = () => {
    if (routeState.registered || routeState.disposed) return
    const webServer = ctx.get('webServer')
    if (webServer === undefined) return
    try {
      const dispose = webServer.register({ kind: 'prefix', path: '/api/kanban', handler: httpHandler })
      routeState.dispose = typeof dispose === 'function' ? dispose : null
      routeState.registered = true
      console.log('dsh-kanban: /api/kanban route registered')
    } catch (err) {
      console.log('dsh-kanban: Route registration failed: ' + ((err && err.message) || err))
    }
  }
  registerRoute()
  if (!routeState.registered) {
    const timer = ctx.get('timer')
    if (timer) {
      routeState.timer = timer.interval(() => {
        routeState.attempts++
        registerRoute()
        maybeStartupCheck()
        if (routeState.registered || routeState.attempts >= 40) {
          if (routeState.timer) routeState.timer()
          routeState.timer = null
        }
      }, 500)
    }
  }

  // ---- Startup checks: read each workspace board and back up corrupt files ----
  const startupState = { done: false }
  const maybeStartupCheck = () => {
    if (startupState.done) return
    const registry = getWorkspaceRegistry()
    if (!getFs() || !registry || typeof registry.list !== 'function') return
    startupState.done = true
    runStartupCheck()
  }
  const runStartupCheck = async () => {
    const fs = getFs()
    const registry = getWorkspaceRegistry()
    if (!fs || !registry || typeof registry.list !== 'function') return
    try {
      const workspaces = registry.list()
      let found = 0
      let corrupt = 0
      let pendingUpgrade = 0
      let unsupported = 0
      let ok = 0
      for (const workspace of workspaces) {
        const key = workspaceKey(workspace)
        try {
          const target = await fs.resolve(BOARD_FILE, { cwd: workspace.path })
          const text = await fs.readText(target)
          found++
          const parsed = parseBoardText(text)
          if (parsed.ok) {
            if (parsed.migrated) {
              pendingUpgrade++
              console.log('dsh-kanban: Startup check ' + key + ': schemaVersion ' + parsed.fromVersion + '; will migrate on first access')
            } else {
              ok++
            }
          } else if (parsed.kind === 'unsupported') {
            unsupported++
            console.log('dsh-kanban: Startup check ' + key + ': file written by a newer plugin (schemaVersion ' + parsed.version + ')')
          } else {
            corrupt++
            const suffix = 'corrupt-' + timestamp()
            const backupTarget = await fs.resolve(BOARD_FILE + '.' + suffix, { cwd: workspace.path })
            await fs.writeText(backupTarget, text, undefined, undefined, writePolicyFor(workspace))
            console.log('dsh-kanban: Startup check ' + key + ': corrupt data file (' + parsed.kind + '); backed up to ' + BOARD_FILE + '.' + suffix)
          }
        } catch (err) {
          if (!err || (err.code !== 'ENOENT' && err.message !== 'ENOENT')) {
            console.log('dsh-kanban: Startup check ' + key + ': check failed ' + ((err && err.message) || err))
          }
        }
      }
      if (found === 0) {
        console.log('dsh-kanban: Startup check complete: no board data files found')
        return
      }
      console.log(
        'dsh-kanban: Startup check complete: total ' +
          found +
          ' board files, valid ' +
          ok +
          ', corrupt and backed up ' +
          corrupt +
          ', pending migration ' +
          pendingUpgrade +
          ', unsupported version ' +
          unsupported,
      )
    } catch (err) {
      console.log('dsh-kanban: Startup check failed: ' + ((err && err.message) || err))
    }
  }
  maybeStartupCheck()

  // ---- Tool registration ----
  const resultSchema = {
    type: 'object',
    properties: {
      ok: { type: 'boolean' },
      message: { type: 'string' },
      board: { type: 'object' },
      warnings: { type: 'array', items: { type: 'string' } },
    },
    required: ['ok', 'message'],
    additionalProperties: false,
  }
  const renderBoard = (value) => {
    const b = value && value.board
    const lines = []
    if (Array.isArray(value && value.warnings)) {
      for (const w of value.warnings) lines.push('⚠ ' + w)
    }
    lines.push(String((value && value.message) || ''))
    if (b && Array.isArray(b.columns)) {
      lines.push('Board state:')
      for (const col of b.columns) {
        lines.push('· ' + col.title + ' (' + col.count + ')')
      }
      if (Array.isArray(b.labels) && b.labels.length > 0) {
        lines.push('Labels: ' + b.labels.map((l) => l.name).join(' / '))
      }
      if (Array.isArray(b.cards)) {
        for (const card of b.cards) {
          lines.push(
            '  - [' + card.id + '] ' +
            (card.priority ? '[' + card.priority + '] ' : '') +
            (card.label ? '[' + card.label + '] ' : '') +
            card.title +
            (card.commentCount ? ' (' + card.commentCount + ' comments)' : ''),
          )
        }
      }
    }
    return [{ type: 'text', text: lines.join('\n') }]
  }
  const output = (render) => ({ schema: resultSchema, render: (args, value) => render(value) })

  const tools = [
    {
      name: 'kanban_get',
      description: 'Read the current state of the current project (workspace) kanban board (all lists, labels and cards). Call it before planning to understand existing content and avoid duplicate cards.',
      parameters: { type: 'object', properties: {} },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('get', args, exec)
      },
    },
    {
      name: 'kanban_get_card',
      description: "Read one card's full details (title, note, label, priority and comments) by id from the current project (workspace) board. Use kanban_get first to discover card ids, then this tool to read the complete card and comment history.",
      parameters: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'Card id (see kanban_get output)' },
        },
        required: ['id'],
      },
      output: {
        schema: {
          type: 'object',
          properties: {
            ok: { type: 'boolean' },
            message: { type: 'string' },
            card: { type: 'object' },
            warnings: { type: 'array', items: { type: 'string' } },
          },
          required: ['ok', 'message'],
          additionalProperties: false,
        },
        render: (args, value) => {
          const c = value && value.card
          const lines = []
          if (Array.isArray(value && value.warnings)) {
            for (const w of value.warnings) lines.push('⚠ ' + w)
          }
          lines.push(String((value && value.message) || ''))
          if (c) {
            lines.push('[' + c.id + '] ' + c.title)
            if (c.priority) lines.push('Priority: ' + c.priority)
            if (c.label) lines.push('Label: ' + c.label)
            if (c.note) lines.push('Note: ' + c.note)
            if (Array.isArray(c.comments) && c.comments.length > 0) {
              lines.push('Comments:')
              for (const comment of c.comments) {
                lines.push('  - [' + comment.createdAt + '] ' + comment.source + ': ' + comment.content)
              }
            }
          }
          return [{ type: 'text', text: lines.join('\n') }]
        },
      },
      async execute(args, exec) {
        const workspace = await workspaceOfExec(exec)
        if (!workspace) return { ok: false, message: 'Cannot determine the current workspace from the tool execution context', warnings: [] }
        const session = exec && exec.agent && exec.agent.session
        const r = await dispatch(workspace, 'getCard', args, 'agent', session)
        if (r.error) return { ok: false, message: r.error, warnings: Array.isArray(r.warnings) ? r.warnings : [] }
        return { ok: true, message: 'Card ' + String(args.id || '') + ' details', card: r.card, warnings: Array.isArray(r.warnings) ? r.warnings : [] }
      },
    },
    {
      name: 'kanban_add_comment',
      description: 'Add a comment to a card in the current project (workspace). Use it to leave progress updates, decisions, questions, or review feedback.',
      parameters: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'Card id' },
          content: { type: 'string', description: 'Comment text (1-2000 characters)' },
        },
        required: ['id', 'content'],
      },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('addComment', args, exec)
      },
    },
    {
      name: 'kanban_add_card',
      description: 'Add a card to the current project (workspace) kanban board. Write feature breakdowns and plans to the board: one card per task step.',
      parameters: {
        type: 'object',
        properties: {
          title: { type: 'string', description: `Card title (task name, concise and actionable; max ${TITLE_LIMIT} chars)` },
          columnId: { type: 'string', description: 'Target list id; defaults to the first list (Todo)' },
          note: { type: 'string', description: `Note: background, acceptance criteria or breakdown details (optional; max ${NOTE_LIMIT} chars)` },
          label: { type: 'string', description: `Label name (optional; max ${LABEL_LIMIT} chars): e.g. New Feature, bug, Feedback` },
          priority: { type: 'string', enum: ['high', 'medium', 'low'], description: 'Priority (optional): high=P0 / medium=P1 / low=P2' },
        },
        required: ['title'],
      },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('addCard', args, exec)
      },
    },
    {
      name: 'kanban_update_card',
      description: "Update a card's title, note, label or priority on the board.",
      parameters: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'Card id' },
          title: { type: 'string', description: `New title (optional; max ${TITLE_LIMIT} chars)` },
          note: { type: 'string', description: `New note (optional; max ${NOTE_LIMIT} chars)` },
          label: { type: 'string', description: `New label name (optional; max ${LABEL_LIMIT} chars); pass empty string to clear` },
          priority: { type: 'string', enum: ['high', 'medium', 'low', ''], description: 'New priority (optional): high=P0 / medium=P1 / low=P2; pass empty string to clear' },
        },
        required: ['id'],
      },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('updateCard', args, exec)
      },
    },
    {
      name: 'kanban_delete_card',
      description: 'Delete a card from the board (permanent, not recoverable).',
      parameters: {
        type: 'object',
        properties: { id: { type: 'string', description: 'Card id' } },
        required: ['id'],
      },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('deleteCard', args, exec)
      },
    },
    {
      name: 'kanban_move_card',
      description: 'Move a card to the specified list (e.g. from Todo to In Progress). Use when a task status changes.',
      parameters: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'Card id' },
          columnId: { type: 'string', description: 'Target list id' },
          toIndex: { type: 'integer', description: 'Position within the target list (optional); takes effect when reordering within the same list, 0 = top' },
        },
        required: ['id', 'columnId'],
      },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('moveCard', args, exec)
      },
    },
    {
      name: 'kanban_add_column',
      description: 'Add a list (column) to the board. Use when a new workflow stage (e.g. Review, Blocked) is needed.',
      parameters: {
        type: 'object',
        properties: { title: { type: 'string', description: `List name (max ${COLUMN_TITLE_LIMIT} chars)` } },
        required: ['title'],
      },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('addColumn', args, exec)
      },
    },
    {
      name: 'kanban_rename_column',
      description: 'Rename a list on the board.',
      parameters: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'List id' },
          title: { type: 'string', description: `New name (max ${COLUMN_TITLE_LIMIT} chars)` },
        },
        required: ['id', 'title'],
      },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('renameColumn', args, exec)
      },
    },
    {
      name: 'kanban_delete_column',
      description: 'Delete a list from the board; its cards are moved into the first list. At least one list must remain.',
      parameters: {
        type: 'object',
        properties: { id: { type: 'string', description: 'List id' } },
        required: ['id'],
      },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('deleteColumn', args, exec)
      },
    },
    {
      name: 'kanban_move_column',
      description: 'Reorder a list (column) on the board, moving it to the specified position.',
      parameters: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'List id to move' },
          toIndex: { type: 'integer', description: 'Target position (0 = first list)' },
        },
        required: ['id', 'toIndex'],
      },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('moveColumn', args, exec)
      },
    },
    {
      name: 'kanban_add_label',
      description: 'Create a new label on the board (name bound to a color). Use to categorize cards.',
      parameters: {
        type: 'object',
        properties: {
          name: { type: 'string', description: `Label name (unique, max ${LABEL_LIMIT} chars; e.g. Urgent, Refactor)` },
          color: { type: 'string', description: 'Label color (optional): #rrggbb hex; defaults to gray' },
        },
        required: ['name'],
      },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('addLabel', args, exec)
      },
    },
    {
      name: 'kanban_update_label',
      description: 'Modify a label on the board (rename or recolor). Renaming automatically updates cards referencing it.',
      parameters: {
        type: 'object',
        properties: {
          name: { type: 'string', description: 'Current label name' },
          newName: { type: 'string', description: `New name (optional; max ${LABEL_LIMIT} chars)` },
          color: { type: 'string', description: 'New color (optional): #rrggbb hex' },
        },
        required: ['name'],
      },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('updateLabel', args, exec)
      },
    },
    {
      name: 'kanban_delete_label',
      description: 'Delete a label from the board. Cards referencing it will have their label cleared.',
      parameters: {
        type: 'object',
        properties: { name: { type: 'string', description: 'Label name' } },
        required: ['name'],
      },
      output: output(renderBoard),
      async execute(args, exec) {
        return runTool('deleteLabel', args, exec)
      },
    },
    {
      name: 'kanban_get_label',
      description: 'Read the label list (names and colors) of the current project (workspace) board. Check available labels before tagging cards.',
      parameters: { type: 'object', properties: {} },
      output: {
        schema: {
          type: 'object',
          properties: {
            ok: { type: 'boolean' },
            message: { type: 'string' },
            labels: { type: 'array', items: { type: 'object' } },
            warnings: { type: 'array', items: { type: 'string' } },
          },
          required: ['ok', 'message'],
          additionalProperties: false,
        },
        render: (args, value) => {
          const labels = value && value.labels
          const lines = []
          if (Array.isArray(value && value.warnings)) {
            for (const w of value.warnings) lines.push('⚠ ' + w)
          }
          lines.push(String((value && value.message) || ''))
          if (Array.isArray(labels)) {
            for (const l of labels) lines.push('- ' + l.name + ' (' + l.color + ')')
          }
          return [{ type: 'text', text: lines.join('\n') }]
        },
      },
      async execute(args, exec) {
        const workspace = await workspaceOfExec(exec)
        if (!workspace) return { ok: false, message: 'Cannot determine the current workspace from the tool execution context', labels: [], warnings: [] }
        const session = exec && exec.agent && exec.agent.session
        const r = await dispatch(workspace, 'get', args, 'agent', session)
        const labels = (r.board && r.board.labels) || []
        return {
          ok: true,
          message: 'Labels (workspace ' + workspaceKey(workspace) + ')',
          labels,
          warnings: Array.isArray(r.warnings) ? r.warnings : [],
        }
      },
    },
  ]

  for (const tool of tools) ctx.tools.register(tool)

  return () => {
    routeState.disposed = true
    if (routeState.timer) routeState.timer()
    routeState.timer = null
    if (routeState.dispose) routeState.dispose()
    routeState.dispose = null
    boards.clear()
    boardLoads.clear()
    workspaceQueues.clear()
    fileTargets.clear()
  }
}
