/**
 * dsh-kanban schema 迁移机制自检脚本（纯逻辑层，不触磁盘/不依赖 DSH 运行时）。
 *
 * 运行：node scripts/check-schema.mjs
 *
 * 覆盖：
 *   - 无 schemaVersion 的历史文件（v0）→ 自动升级为 v1，字段规范化
 *   - v1 文件原样通过
 *   - 损坏 JSON → corrupt 分诊
 *   - 结构无效 → invalid 分诊
 *   - 版本超前（来自更新版本插件）→ unsupported 分诊且不迁移
 *   - 迁移链缺步 / 迁移输出无效 → 抛错
 */
import { SCHEMA_VERSION, LEGACY_VERSION, MIGRATIONS, migrateBoard, validateBoard, parseBoardText } from '../index.js'

let failed = 0
const check = (name, cond, detail) => {
  if (cond) {
    console.log('  ✓ ' + name)
  } else {
    failed++
    console.log('  ✗ ' + name + (detail ? ' —— ' + detail : ''))
  }
}

console.log('schemaVersion = ' + SCHEMA_VERSION + ', legacy = ' + LEGACY_VERSION)

// ---- 1. v0（历史无版本文件）→ 自动升级 ----
console.log('\n[1] v0 历史文件自动升级')
{
  const legacy = JSON.stringify({
    columns: [{ id: 'c1', title: 'Todo' }],
    labels: [{ name: 'bug', color: '#F87171' }],
    cards: [{ id: 'k1', columnId: 'c1', title: 'Fix login', note: 'x', label: 'bug', priority: 'high' }],
  })
  const r = parseBoardText(legacy)
  check('v0 → ok', r.ok && r.kind === 'ok', JSON.stringify(r))
  check('标记已迁移', r.ok && r.migrated === true)
  check('fromVersion = 0', r.ok && r.fromVersion === LEGACY_VERSION)
  check('升级到最新版', r.ok && r.data.schemaVersion === SCHEMA_VERSION)
  check('产生升级警告', r.ok && r.warnings.length >= 1)
  check('卡片字段规范化', r.ok && r.data.cards[0].label === 'bug' && r.data.cards[0].note === 'x' && r.data.cards[0].priority === 'high')
  check('颜色规范化', r.ok && r.data.labels[0].color === '#f87171')
  check('列/卡保留', r.ok && r.data.columns[0].id === 'c1' && r.data.cards[0].id === 'k1')
  check('新增 activities 空数组', r.ok && Array.isArray(r.data.activities) && r.data.activities.length === 0)
  check('历史卡片补 createdAt/createdBy 为 null', r.ok && r.data.cards[0].createdAt === null && r.data.cards[0].createdBy === null)
}

// ---- 2. v0 文件缺可选字段 ----
console.log('\n[2] v0 文件缺 note/label/priority')
{
  const r = parseBoardText(JSON.stringify({ columns: [{ id: 'c1', title: 'Todo' }], cards: [{ id: 'k1', columnId: 'c1', title: 't' }] }))
  check('v0(缺字段) → ok', r.ok, JSON.stringify(r))
  check('note 补空串', r.ok && r.data.cards[0].note === '')
  check('label 补 null', r.ok && r.data.cards[0].label === null)
  check('priority 补 null', r.ok && r.data.cards[0].priority === null)
}

// ---- 3. v2 文件原样通过 ----
console.log('\n[3] v2 文件直接通过')
{
  const r = parseBoardText(JSON.stringify({ schemaVersion: 2, columns: [], labels: [], cards: [], activities: [] }))
  check('v2 → ok 且不迁移', r.ok && r.migrated === false, JSON.stringify(r))
  check('v2 无警告', r.ok && r.warnings.length === 0)
}

// ---- 3b. v1 文件 → 自动升级到 v2 ----
console.log('\n[3b] v1 文件自动升级到 v2')
{
  const r = parseBoardText(JSON.stringify({
    schemaVersion: 1,
    columns: [{ id: 'c1', title: 'Todo' }],
    labels: [{ name: 'bug', color: '#f87171' }],
    cards: [{ id: 'k1', columnId: 'c1', title: 'Fix', note: 'n', label: 'bug', priority: 'high' }],
  }))
  check('v1 → ok 且标记迁移', r.ok && r.migrated === true, JSON.stringify(r))
  check('fromVersion = 1', r.ok && r.fromVersion === 1)
  check('升级到 v2', r.ok && r.data.schemaVersion === 2)
  check('activities 空数组', r.ok && Array.isArray(r.data.activities) && r.data.activities.length === 0)
  check('卡片补 createdAt/createdBy null', r.ok && r.data.cards[0].createdAt === null && r.data.cards[0].createdBy === null)
  check('卡片数据保留', r.ok && r.data.cards[0].title === 'Fix' && r.data.cards[0].label === 'bug')
}

// ---- 4. 损坏 JSON ----
console.log('\n[4] 损坏 JSON')
{
  const r = parseBoardText('{"columns": [broken')
  check('corrupt 分诊', !r.ok && r.kind === 'corrupt', JSON.stringify(r))
  check('corrupt 有可读警告', !r.ok && r.warnings.length >= 1)
}

// ---- 5. 结构无效 ----
console.log('\n[5] 结构无效')
{
  const r = parseBoardText(JSON.stringify({ schemaVersion: 2, columns: [], labels: [], cards: 'oops', activities: [] }))
  check('invalid 分诊', !r.ok && r.kind === 'invalid', JSON.stringify(r))
  const dup = parseBoardText(JSON.stringify({ schemaVersion: 2, columns: [], labels: [], cards: [{ id: 'k1', columnId: 'c1', title: 'a' }, { id: 'k1', columnId: 'c1', title: 'b' }], activities: [] }))
  check('重复卡 id → invalid', !dup.ok && dup.kind === 'invalid', JSON.stringify(dup))
  const noAct = parseBoardText(JSON.stringify({ schemaVersion: 2, columns: [], labels: [], cards: [] }))
  check('缺 activities → invalid', !noAct.ok && noAct.kind === 'invalid', JSON.stringify(noAct))
}

// ---- 6. 版本超前 ----
console.log('\n[6] 版本超前（来自更新版本插件）')
{
  const r = parseBoardText(JSON.stringify({ schemaVersion: 99, columns: [], labels: [], cards: [] }))
  check('unsupported 分诊', !r.ok && r.kind === 'unsupported', JSON.stringify(r))
  check('保留 version 信息', !r.ok && r.version === 99)
  check('不尝试迁移', !r.ok && r.warnings.every((w) => !w.includes('upgraded')))
}

// ---- 7. 迁移链 ----
console.log('\n[7] 迁移链契约')
{
  const up = migrateBoard({ schemaVersion: 0, columns: [] }, 0)
  check('migrateBoard(v0) → 最新版', up.schemaVersion === SCHEMA_VERSION)
  check('注册表键覆盖 0..SCHEMA_VERSION-1', Object.keys(MIGRATIONS).map(Number).sort((a, b) => a - b).join(',') === Array.from({ length: SCHEMA_VERSION }, (_, i) => i).join(','))

  // 迁移输出缺 schemaVersion → 由 v0→v1 步骤宽松恢复为合法 v1（不抛错），这是预期行为
  const lenient = migrateBoard({ columns: [] }, 0)
  check('v0→v1 宽松恢复缺版本数据', lenient.schemaVersion === SCHEMA_VERSION)

  // 迁移输出版本号错误 → 抛错
  const saved = MIGRATIONS[0]
  MIGRATIONS[0] = () => ({ schemaVersion: 99, columns: [] })
  let threw = false
  try {
    migrateBoard({ schemaVersion: 0, columns: [] }, 0)
  } catch (e) {
    threw = true
  }
  MIGRATIONS[0] = saved
  check('迁移输出版本号错误会抛错', threw)

  // 缺迁移步 → 抛错
  const saved2 = MIGRATIONS[0]
  MIGRATIONS[0] = undefined
  let threw2 = false
  try {
    migrateBoard({ columns: [] }, 0)
  } catch (e) {
    threw2 = true
  }
  MIGRATIONS[0] = saved2
  check('缺迁移步会抛错', threw2)
}

// ---- 8. validateBoard ----
console.log('\n[8] validateBoard')
{
  check('合法 v2 通过', validateBoard({ schemaVersion: 2, columns: [], labels: [], cards: [], activities: [] }).ok)
  check('缺 labels 失败', !validateBoard({ schemaVersion: 2, columns: [], cards: [], activities: [] }).ok)
  check('缺 activities 失败', !validateBoard({ schemaVersion: 2, columns: [], labels: [], cards: [] }).ok)
  check('非对象失败', !validateBoard(null).ok && !validateBoard('x').ok)
}

console.log('\n' + (failed === 0 ? '全部通过 ✓' : failed + ' 项失败 ✗'))
process.exit(failed === 0 ? 0 : 1)
