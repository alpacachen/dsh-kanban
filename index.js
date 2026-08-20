/**
 * dsh-kanban — DSH bundle 宿主插件（标准 Cordis 函数插件）
 *
 * 挂载方式：package.json 的 `dsh.bundle.patch` 指向 cordis.patch.yml，
 * 该补丁层把本插件行插入 profile 组合，Loader 按包名 dsh-kanban 解析本文件。
 *
 * 职责：
 *  - 按工作区（项目）隔离：boards 以 workspaceId 为键，每个工作区一块独立看板
 *  - 磁盘持久化：经 ctx.fs 写入 <workspaceRoot>/kanban-board-<workspaceId>.json
 *  - 模型工具：经 ctx.tools.register 注册 14 个 kanban_* 工具
 *  - 浏览器数据层：经 ctx.get('webServer') 注册 /api/kanban 前缀路由
 *
 * 数据模型（每工作区，磁盘文件带 schemaVersion）：
 *   schemaVersion: 1
 *   columns: [{ id, title }]
 *   labels:  [{ name, color }]          —— 标签与颜色绑定，name 为唯一键
 *   cards:   [{ id, columnId, title, note, label, priority }]
 *
 * 数据安全：
 *   - 无 schemaVersion 的历史文件按 v0 处理，首次打开自动升级（见 MIGRATIONS）
 *   - 升级/损坏/版本超前均先备份原文件（.bak-vN / .corrupt-<ts> / .unsupported-vN）
 *   - 启动时全量体检所有看板文件，损坏文件备份后不影响看板可用性
 */
export const name = 'dsh-kanban'

export const inject = ['tools']

// ---------------------------------------------------------------------------
// 持久化格式版本与迁移
//
// 磁盘文件结构：
//   { schemaVersion, columns, labels, cards }
//
// 版本约定：
//   v1 —— 首个带版本声明的格式，等价于 1.0.x ~ 1.2.x 时代无版本声明的三数组格式
//         （columns/labels/cards），并补齐了卡片的规范字段（note/label/priority）。
//   LEGACY_VERSION(0) —— 历史文件没有 schemaVersion 字段，一律归入 v0 处理。
//
// 新增/删除字段的流程：
//   1) SCHEMA_VERSION 自增
//   2) 在 MIGRATIONS 里以"旧版本号为键"注册 v(n)→v(n+1) 迁移函数
//   3) 迁移函数是纯函数，输出必须带 schemaVersion: n+1（migrateBoard 会校验）
// 旧文件在首次打开时自动沿迁移链升级，升级前原文件先备份。
// ---------------------------------------------------------------------------

export const SCHEMA_VERSION = 1
export const LEGACY_VERSION = 0

const isObj = (v) => typeof v === 'object' && v !== null && !Array.isArray(v)
const strField = (v, fb) => (typeof v === 'string' && v ? v : fb)
const normColor = (v) => (typeof v === 'string' && /^#[0-9a-fA-F]{6}$/.test(v) ? v.toLowerCase() : '#94a3b8')

// v1 的规范实体形状（仅补缺省值，不改动合法数据）
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
 * 逐版本迁移注册表：key = 旧版本号，value = (旧数据) => 新数据。
 * 输出必须设置 schemaVersion = key + 1，migrateBoard 会逐级校验。
 */
export const MIGRATIONS = {
  0: (data) => {
    // v0 → v1：历史无版本文件 —— 声明版本 + 规范化实体字段
    const src = isObj(data) ? data : {}
    const pick = (arr) => (Array.isArray(arr) ? arr : [])
    return {
      schemaVersion: 1,
      columns: pick(src.columns).map(normColumn).filter(Boolean),
      labels: pick(src.labels).map(normLabel).filter(Boolean),
      cards: pick(src.cards).map(normCard).filter(Boolean),
    }
  },
}

/**
 * 沿迁移链把数据从 fromVersion 逐级升级到 SCHEMA_VERSION。
 * 任一步缺失或产出无效都会抛错（由调用方备份并降级处理）。
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
 * 结构校验（迁移后的最终形态）。
 * 返回 { ok, errors }；errors 非空时文件应视为损坏处理。
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
  if (Array.isArray(data.cards)) {
    const seen = new Set()
    for (const c of data.cards) {
      if (!isObj(c) || typeof c.id !== 'string' || !c.id) {
        errors.push('cards contain an entry without a valid id')
        break
      }
      if (seen.has(c.id)) {
        errors.push('duplicate card id: ' + c.id)
        break
      }
      seen.add(c.id)
    }
  }
  return { ok: errors.length === 0, errors }
}

/**
 * 解析并升级一段看板文件文本（纯函数，不触磁盘）。
 *
 * 返回：
 *   { ok: true, kind: 'ok', data, migrated, fromVersion, warnings } —— data 为可用的最新版
 *   { ok: false, kind: 'corrupt'|'invalid'|'unsupported', warnings } —— 需要调用方备份原文件
 *
 * kind 语义：
 *   corrupt     —— JSON 无法解析
 *   invalid     —— 结构校验失败 / 迁移失败
 *   unsupported —— schemaVersion 高于当前插件支持（文件来自更新版本插件）
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
  const fileTargets = new Map() // workspaceId -> FsTarget | null
  let seq = 0 // 全局自增，用于生成 cN（列）/ kN（卡）唯一 id

  // ---- id 生成 ----
  const nextId = (prefix) => prefix + (++seq)
  const bumpSeq = (id) => {
    if (typeof id !== 'string') return
    const n = Number(id.slice(1))
    if (Number.isFinite(n) && n > seq) seq = n
  }

  // ---- 默认看板 ----
  const DEFAULT_COLUMNS = ['Todo', 'In Progress', 'Review', 'Done']
  const DEFAULT_LABELS = [
    { name: 'New Feature', color: '#38bdf8' },
    { name: 'bug', color: '#f87171' },
    { name: 'Feedback', color: '#34d399' },
  ]

  // ---- 持久化定位 ----
  const root = () => {
    const p = getPolicy()
    return p && typeof p.workspaceRoot === 'string' ? p.workspaceRoot : undefined
  }
  const fileName = (wsid) => 'kanban-board-' + wsid + '.json'
  const resolveFile = async (wsid) => {
    const fs = getFs()
    if (!fs) return null
    try {
      return await fs.resolve(fileName(wsid), root() ? { cwd: root() } : {})
    } catch (err) {
      console.log('dsh-kanban: 解析看板文件失败，退回内存模式：' + ((err && err.message) || err))
      return null
    }
  }
  const targetOf = async (wsid) => {
    if (!fileTargets.has(wsid)) fileTargets.set(wsid, await resolveFile(wsid))
    return fileTargets.get(wsid)
  }
  const persistedFlag = (wsid) => fileTargets.has(wsid) && fileTargets.get(wsid) !== null

  // ---- 看板读写 ----

  // 备份原文件为 <文件名>.<suffix>（复制而非移动，保证原文件在写回前始终存在）
  const backupFile = async (wsid, suffix) => {
    const fs = getFs()
    const target = await targetOf(wsid)
    if (!fs || !target) return null
    try {
      const text = await fs.readText(target)
      const backupTarget = await fs.resolve(fileName(wsid) + '.' + suffix, root() ? { cwd: root() } : {})
      await fs.writeText(backupTarget, text)
      return backupTarget
    } catch (err) {
      console.log('dsh-kanban: 备份失败 ' + wsid + ' (' + suffix + ')：' + ((err && err.message) || err))
      return null
    }
  }

  // 记录一次性警告：进入看板 warnings 队列 + 写宿主日志
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

  // 首次访问某工作区时从磁盘加载；异常数据一律不阻塞看板可用性
  const boardOf = async (wsid) => {
    let board = boards.get(wsid)
    if (board) return board
    board = { schemaVersion: SCHEMA_VERSION, columns: [], labels: [], cards: [], warnings: [] }
    boards.set(wsid, board)
    const fs = getFs()
    const target = await targetOf(wsid)
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
          migrated = parsed.migrated
          // 迁移场景：写回前先把迁移前的原文件备份下来，保证可回滚
          if (parsed.migrated) {
            await backupFile(wsid, 'bak-v' + parsed.fromVersion)
          }
        } else {
          // 损坏 / 结构无效 / 版本超前：原文件已无法安全读取，先备份再以空板继续
          const suffix =
            parsed.kind === 'unsupported' ? 'unsupported-v' + parsed.version : 'corrupt-' + timestamp()
          await backupFile(wsid, suffix)
        }
      } catch (err) {
        // 尚无看板文件（首次使用）或 fs 读取异常，保留默认空板
        console.log('dsh-kanban: 读取看板失败 ' + wsid + '：' + ((err && err.message) || err))
      }
    }
    for (const col of board.columns) bumpSeq(col.id)
    for (const card of board.cards) bumpSeq(card.id)
    if (board.columns.length === 0) {
      for (const title of DEFAULT_COLUMNS) board.columns.push({ id: nextId('c'), title })
    }
    if (board.labels.length === 0) {
      board.labels = DEFAULT_LABELS.map((l) => ({ ...l }))
    }
    // 升级写回：迁移成功即落盘新版本，保证每个文件只迁移一次
    if (migrated && fs && target) await save(wsid)
    return board
  }
  const save = async (wsid) => {
    const fs = getFs()
    const target = await targetOf(wsid)
    const board = boards.get(wsid)
    if (!fs || !target || !board) return
    try {
      await fs.writeText(
        target,
        JSON.stringify({
          schemaVersion: SCHEMA_VERSION,
          columns: board.columns,
          labels: board.labels,
          cards: board.cards,
        }),
      )
    } catch (err) {
      console.log('dsh-kanban: 保存失败 ' + wsid + '：' + ((err && err.message) || err))
    }
  }

  // ---- 校验 / 查找 / 序列化 ----
  const str = (v, fb) => (typeof v === 'string' ? v : fb)
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
    })),
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
    })),
  })

  // ---- 核心数据操作：工具与浏览器 HTTP 共用同一份逻辑 ----
  const dispatch = async (wsid, method, args) => {
    const board = await boardOf(wsid)
    const a = args || {}
    const persisted = () => persistedFlag(wsid)
    const result = (extra) => ({ board: cloneBoard(board), persisted: persisted(), warnings: takeWarnings(board), ...extra })

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
        board.cards.push({
          id: nextId('k'),
          columnId: col.id,
          title: str(a.title, '').slice(0, 120) || 'Untitled card',
          note: str(a.note, '').slice(0, 500),
          label: typeof a.label === 'string' ? a.label.slice(0, 20) : undefined,
          priority: normPriority(a.priority),
        })
        await save(wsid)
        return result({ message: 'Card added to "' + col.title + '"' })
      }

      case 'updateCard': {
        const card = findCard(board, str(a.id, ''))
        if (card) {
          if (typeof a.title === 'string') card.title = a.title.slice(0, 120) || card.title
          if (typeof a.note === 'string') card.note = a.note.slice(0, 500)
          if (typeof a.label === 'string') card.label = a.label.slice(0, 20) || undefined
          if (typeof a.priority === 'string') card.priority = normPriority(a.priority)
          await save(wsid)
        }
        return card
          ? result({ message: 'Card updated' })
          : result({ error: 'Card not found: ' + str(a.id, '') })
      }

      case 'deleteCard': {
        const id = str(a.id, '')
        board.cards = board.cards.filter((c) => c.id !== id)
        await save(wsid)
        return result({ message: 'Card deleted' })
      }

      case 'moveCard': {
        const card = findCard(board, str(a.id, ''))
        const target = findColumn(board, str(a.columnId, ''))
        if (!card || !target) return result({ error: 'Card or list not found' })
        board.cards = board.cards.filter((c) => c.id !== card.id)
        card.columnId = target.id
        const inCol = board.cards.filter((c) => c.columnId === target.id)
        const toIndex = typeof a.toIndex === 'number' && Number.isFinite(a.toIndex)
          ? Math.max(0, Math.min(Math.floor(a.toIndex), inCol.length))
          : inCol.length
        const anchor = inCol[toIndex]
        if (anchor) board.cards.splice(board.cards.indexOf(anchor), 0, card)
        else board.cards.push(card)
        await save(wsid)
        return result({ message: 'Moved to "' + target.title + '"' })
      }

      case 'addColumn': {
        const title = str(a.title, '').slice(0, 40) || 'New list'
        board.columns.push({ id: nextId('c'), title })
        await save(wsid)
        return result({ message: 'List added: "' + title + '"' })
      }

      case 'renameColumn': {
        const col = findColumn(board, str(a.id, ''))
        if (col && typeof a.title === 'string') {
          col.title = a.title.slice(0, 40) || col.title
          await save(wsid)
        }
        return col ? result({ message: 'List renamed' }) : result({ error: 'List not found' })
      }

      case 'deleteColumn': {
        const id = str(a.id, '')
        if (board.columns.length <= 1) return result({ error: 'At least one list must remain' })
        const idx = board.columns.findIndex((c) => c.id === id)
        if (idx < 0) return result({ error: 'List not found' })
        board.columns.splice(idx, 1)
        const fallback = board.columns[0].id
        for (const card of board.cards) {
          if (card.columnId === id) card.columnId = fallback
        }
        await save(wsid)
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
        await save(wsid)
        return result({ message: 'List order updated' })
      }

      case 'addLabel': {
        const name = str(a.name, '').slice(0, 20)
        if (!name) return result({ error: 'Label name required' })
        if (findLabel(board, name)) return result({ error: 'Label already exists' })
        board.labels.push({ name, color: normColor(a.color) || '#94a3b8' })
        await save(wsid)
        return result({ message: 'Label added: "' + name + '"' })
      }

      case 'updateLabel': {
        const name = str(a.name, '')
        const label = findLabel(board, name)
        if (!label) return result({ error: 'Label not found' })
        const newName = str(a.newName, '').slice(0, 20)
        if (newName && newName !== name) {
          if (findLabel(board, newName)) return result({ error: 'Label name already exists' })
          label.name = newName
          for (const card of board.cards) {
            if (card.label === name) card.label = newName
          }
        }
        if (typeof a.color === 'string') label.color = normColor(a.color) || label.color
        await save(wsid)
        return result({ message: 'Label updated' })
      }

      case 'deleteLabel': {
        const name = str(a.name, '')
        const idx = board.labels.findIndex((l) => l.name === name)
        if (idx < 0) return result({ error: 'Label not found' })
        board.labels.splice(idx, 1)
        for (const card of board.cards) {
          if (card.label === name) card.label = undefined
        }
        await save(wsid)
        return result({ message: 'Label deleted' })
      }

      default:
        return result({ error: 'Unknown kanban method: ' + method })
    }
  }

  // ---- 工具执行上下文 -> 工作区 id ----
  const wsidOfExec = async (exec) => {
    const agent = exec && exec.agent
    const cwd = agent && agent.session && agent.session.header && agent.session.header.cwd
    if (typeof cwd === 'string' && cwd) {
      const registry = getWorkspaceRegistry()
      if (registry) {
        try {
          const ws = await registry.resolveByPath(cwd)
          if (ws) return ws.id
        } catch (err) {
          console.log('dsh-kanban: 解析工作区失败：' + ((err && err.message) || err))
        }
      }
    }
    return 'default'
  }

  const runTool = async (method, args, exec) => {
    const wsid = await wsidOfExec(exec)
    const r = await dispatch(wsid, method, args)
    return {
      ok: !r.error,
      message: r.error || r.message || 'Done',
      board: summaryOfClone(r.board),
      warnings: Array.isArray(r.warnings) ? r.warnings : [],
    }
  }

  // ---- 浏览器数据层：经官方 webServer 扩展点注册 /api/kanban ----
  const httpHandler = async (req, res) => {
    try {
      const chunks = []
      for await (const chunk of req) chunks.push(chunk)
      const raw = Buffer.concat(chunks).toString('utf8')
      const body = raw ? JSON.parse(raw) : {}
      const method = typeof body.method === 'string' ? body.method : 'get'
      const args = body.args || {}
      const wsid = typeof args.workspaceId === 'string' && args.workspaceId ? args.workspaceId : 'default'
      const result = await dispatch(wsid, method, args)
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify(result))
    } catch (err) {
      res.writeHead(500, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ error: String((err && err.message) || err) }))
    }
  }

  const routeState = { registered: false, timer: null, attempts: 0 }
  const registerRoute = () => {
    if (routeState.registered) return
    const webServer = ctx.get('webServer')
    if (webServer === undefined) return
    try {
      webServer.register({ kind: 'prefix', path: '/api/kanban', handler: httpHandler })
      routeState.registered = true
      console.log('dsh-kanban: /api/kanban 路由已注册')
    } catch (err) {
      console.log('dsh-kanban: 路由注册失败：' + ((err && err.message) || err))
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
        }
      }, 500)
    }
  }

  // ---- 启动校验：全量体检看板文件（只读 + 备份损坏文件，不迁移、不加载内存）----
  const startupState = { done: false }
  const maybeStartupCheck = () => {
    if (startupState.done) return
    if (!getFs()) return
    startupState.done = true
    runStartupCheck()
  }
  const runStartupCheck = async () => {
    const fs = getFs()
    const wsRoot = root()
    if (!fs || !wsRoot) return
    try {
      const dir = await fs.resolve('.', { cwd: wsRoot })
      const entries = await fs.listDir(dir)
      const boardFiles = entries.filter(
        (e) => typeof e.name === 'string' && /^kanban-board-.+\.json$/.test(e.name),
      )
      if (boardFiles.length === 0) {
        console.log('dsh-kanban: 启动校验完成，未发现看板数据文件')
        return
      }
      let corrupt = 0
      let pendingUpgrade = 0
      let unsupported = 0
      let ok = 0
      for (const entry of boardFiles) {
        const wsid = entry.name.slice('kanban-board-'.length, -'.json'.length)
        try {
          const text = await fs.readText(entry.target)
          const parsed = parseBoardText(text)
          if (parsed.ok) {
            if (parsed.migrated) {
              pendingUpgrade++
              console.log('dsh-kanban: 启动校验 ' + wsid + '：schemaVersion ' + parsed.fromVersion + '，首次打开时将自动升级')
            } else {
              ok++
            }
          } else if (parsed.kind === 'unsupported') {
            unsupported++
            console.log('dsh-kanban: 启动校验 ' + wsid + '：文件由更新版本插件写入（schemaVersion ' + parsed.version + '）')
          } else {
            corrupt++
            const suffix = 'corrupt-' + timestamp()
            const backupTarget = await fs.resolve(entry.name + '.' + suffix, { cwd: wsRoot })
            await fs.writeText(backupTarget, text)
            console.log('dsh-kanban: 启动校验 ' + wsid + '：数据文件损坏（' + parsed.kind + '），已备份为 ' + entry.name + '.' + suffix)
          }
        } catch (err) {
          console.log('dsh-kanban: 启动校验 ' + wsid + '：检查失败 ' + ((err && err.message) || err))
        }
      }
      console.log(
        'dsh-kanban: 启动校验完成：共 ' +
          boardFiles.length +
          ' 个看板文件，正常 ' +
          ok +
          '，损坏并已备份 ' +
          corrupt +
          '，待自动升级 ' +
          pendingUpgrade +
          '，版本超前 ' +
          unsupported,
      )
    } catch (err) {
      console.log('dsh-kanban: 启动校验失败：' + ((err && err.message) || err))
    }
  }
  maybeStartupCheck()

  // ---- 工具注册 ----
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
            card.title,
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
      description: "Read one card's full details (title, note, label, priority) by id from the current project (workspace) board. Use kanban_get first to discover card ids, then this tool to read a card's complete note and fields.",
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
          }
          return [{ type: 'text', text: lines.join('\n') }]
        },
      },
      async execute(args, exec) {
        const wsid = await wsidOfExec(exec)
        const r = await dispatch(wsid, 'getCard', args)
        if (r.error) return { ok: false, message: r.error, warnings: Array.isArray(r.warnings) ? r.warnings : [] }
        return { ok: true, message: 'Card ' + String(args.id || '') + ' details', card: r.card, warnings: Array.isArray(r.warnings) ? r.warnings : [] }
      },
    },
    {
      name: 'kanban_add_card',
      description: 'Add a card to the current project (workspace) kanban board. Write feature breakdowns and plans to the board: one card per task step.',
      parameters: {
        type: 'object',
        properties: {
          title: { type: 'string', description: 'Card title (task name, concise and actionable)' },
          columnId: { type: 'string', description: 'Target list id; defaults to the first list (Todo)' },
          note: { type: 'string', description: 'Note: background, acceptance criteria or breakdown details (optional)' },
          label: { type: 'string', description: 'Label name (optional): e.g. New Feature, bug, Feedback' },
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
          title: { type: 'string', description: 'New title (optional)' },
          note: { type: 'string', description: 'New note (optional)' },
          label: { type: 'string', description: 'New label name (optional); pass empty string to clear' },
          priority: { type: 'string', enum: ['high', 'medium', 'low'], description: 'New priority (optional): high=P0 / medium=P1 / low=P2; pass empty string to clear' },
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
        properties: { title: { type: 'string', description: 'List name' } },
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
          title: { type: 'string', description: 'New name' },
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
          name: { type: 'string', description: 'Label name (unique, e.g. Urgent, Refactor)' },
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
          newName: { type: 'string', description: 'New name (optional)' },
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
        const wsid = await wsidOfExec(exec)
        const r = await dispatch(wsid, 'get', args)
        const labels = (r.board && r.board.labels) || []
        return {
          ok: true,
          message: 'Labels (workspace ' + wsid + ')',
          labels,
          warnings: Array.isArray(r.warnings) ? r.warnings : [],
        }
      },
    },
  ]

  for (const tool of tools) ctx.tools.register(tool)
}
