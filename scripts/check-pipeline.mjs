/**
 * dsh-kanban 加载管线端到端自检（mock fs，驱动真实 apply()）。
 *
 * 运行：node scripts/check-pipeline.mjs
 *
 * 用临时目录 + 最小 fs 服务实现，直接调用 index.js 的 apply(ctx)，
 * 然后通过注册的 kanban_get 工具触发 boardOf 加载管线，验证：
 *   - v0 历史文件：自动迁移 → 写回 schemaVersion 1 → 生成 .bak-v0 备份 → 返回警告
 *   - v1 文件：直接通过，不写回、不备份、无警告
 *   - 损坏文件：备份为 .corrupt-* → 看板以空板可用 → 返回警告
 *   - 版本超前：备份为 .unsupported-vN → 看板以空板可用 → 返回警告
 *   - 后续保存会写入带 schemaVersion 的新格式
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

/** 把 apply() 注册的工具按名字收集起来。 */
function bootPlugin(dir) {
  const tools = []
  const files = new Map() // 文件名 -> 内容（用路径模拟 FsTarget）
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
  const ctx = {
    get(key) {
      if (key === 'fs') return fs
      if (key === 'sandboxPolicy') return { workspaceRoot: dir }
      return undefined
    },
    tools: {
      register(tool) {
        tools.push(tool)
      },
    },
  }
  apply(ctx)
  return { tools, dir }
}

async function runTool(tools, name, args = {}) {
  const tool = tools.find((t) => t.name === name)
  if (!tool) throw new Error('tool not found: ' + name)
  return tool.execute(args, {})
}

const dir = mkdtempSync(join(tmpdir(), 'dsh-kanban-check-'))
try {
  // ---- 场景 A：v0 历史文件自动升级 ----
  console.log('\n[A] v0 历史文件 → 自动迁移 + 备份 + 写回')
  {
    const { tools } = bootPlugin(dir)
    writeFileSync(
      join(dir, 'kanban-board-default.json'),
      JSON.stringify({
        columns: [{ id: 'c1', title: 'Todo' }, { id: 'c2', title: 'Done' }],
        labels: [{ name: 'bug', color: '#F87171' }],
        cards: [{ id: 'k1', columnId: 'c1', title: 'Old card', note: 'n' }],
      }),
    )
    const r = await runTool(tools, 'kanban_get')
    check('工具返回 ok', r.ok === true, JSON.stringify(r))
    check('返回升级警告', Array.isArray(r.warnings) && r.warnings.length >= 1, JSON.stringify(r.warnings))
    check('警告提到自动升级', r.warnings.some((w) => w.includes('upgraded')))
    check('看板数据完整', r.board.cards.length === 1 && r.board.cards[0].title === 'Old card')

    const onDisk = JSON.parse(readFileSync(join(dir, 'kanban-board-default.json'), 'utf8'))
    check('写回 schemaVersion 1', onDisk.schemaVersion === 1)
    check('写回保留数据', onDisk.cards.length === 1 && onDisk.columns.length === 2)
    check('备份 .bak-v0 存在', existsSync(join(dir, 'kanban-board-default.json.bak-v0')))
    const bak = JSON.parse(readFileSync(join(dir, 'kanban-board-default.json.bak-v0'), 'utf8'))
    check('备份为迁移前原样（无版本字段）', bak.schemaVersion === undefined && bak.cards[0].id === 'k1')

    // 二次加载：不再迁移、不再警告
    const r2 = await runTool(tools, 'kanban_get')
    check('二次加载无警告', r2.warnings.length === 0)
  }

  // ---- 场景 B：v1 文件直接通过 ----
  console.log('\n[B] v1 文件 → 直接通过')
  {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    const { tools } = bootPlugin(dir)
    writeFileSync(
      join(dir, 'kanban-board-default.json'),
      JSON.stringify({ schemaVersion: 1, columns: [{ id: 'c1', title: 'Todo' }], labels: [], cards: [] }),
    )
    const r = await runTool(tools, 'kanban_get')
    check('工具返回 ok', r.ok === true)
    check('无警告', r.warnings.length === 0)
    check('无 .bak 备份生成', !existsSync(join(dir, 'kanban-board-default.json.bak-v0')))
  }

  // ---- 场景 C：损坏文件 → 备份 + 空板可用 ----
  console.log('\n[C] 损坏文件 → 备份 + 空板可用')
  {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    const { tools } = bootPlugin(dir)
    writeFileSync(join(dir, 'kanban-board-default.json'), '{"columns": [broken!!', 'utf8')
    const r = await runTool(tools, 'kanban_get')
    check('工具返回 ok（看板仍可用）', r.ok === true, JSON.stringify(r))
    check('返回损坏警告', r.warnings.some((w) => w.includes('backed up')))
    check('看板为空板 + 默认列', r.board.columns.length >= 1 && r.board.cards.length === 0)
    const backups = readdirSync(dir).filter((n) => n.includes('.corrupt-'))
    // 启动校验与加载管线都会各备份一次同一原文件，因此 ≥1 即可
    check('生成 .corrupt-* 备份', backups.length >= 1, JSON.stringify(backups))
    check('备份保留原始损坏内容', backups.every((b) => readFileSync(join(dir, b), 'utf8') === '{"columns": [broken!!'))

    // 保存会写回新格式，原损坏文件被替换但备份仍在
    const tool = tools.find((t) => t.name === 'kanban_add_card')
    const add = await tool.execute({ title: 'New after corrupt' }, {})
    check('损坏后仍可写卡', add.ok === true)
    const onDisk = JSON.parse(readFileSync(join(dir, 'kanban-board-default.json'), 'utf8'))
    check('保存写出 schemaVersion', onDisk.schemaVersion === 1 && onDisk.cards.length === 1)
  }

  // ---- 场景 D：版本超前 → 备份 + 空板可用 ----
  console.log('\n[D] 版本超前 → 备份 + 空板可用')
  {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    const { tools } = bootPlugin(dir)
    writeFileSync(
      join(dir, 'kanban-board-default.json'),
      JSON.stringify({ schemaVersion: 99, columns: [{ id: 'c1', title: 'Future' }], labels: [], cards: [] }),
    )
    const r = await runTool(tools, 'kanban_get')
    check('工具返回 ok', r.ok === true)
    check('返回版本超前警告', r.warnings.some((w) => w.includes('newer plugin version')))
    check('看板为空板', r.board.cards.length === 0 && r.board.columns[0] && r.board.columns[0].title !== 'Future')
    check('生成 .unsupported-v99 备份', existsSync(join(dir, 'kanban-board-default.json.unsupported-v99')))
    check('原文件未被覆盖', JSON.parse(readFileSync(join(dir, 'kanban-board-default.json'), 'utf8')).schemaVersion === 99)
  }

  // ---- 场景 E：启动校验扫描 ----
  console.log('\n[E] 启动校验扫描（apply 即触发）')
  {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'kanban-board-a.json'), '{"columns": [broken', 'utf8')
    writeFileSync(join(dir, 'kanban-board-b.json'), JSON.stringify({ columns: [{ id: 'c1', title: 'Todo' }], labels: [], cards: [] }), 'utf8')
    writeFileSync(join(dir, 'unrelated.txt'), 'hello', 'utf8')
    bootPlugin(dir) // apply 触发 maybeStartupCheck（异步 fire-and-forget）

    // 启动校验是异步的，轮询等待其完成（最多 2s）
    const deadline = Date.now() + 2000
    let backups = []
    while (Date.now() < deadline) {
      backups = readdirSync(dir).filter((n) => n.includes('.corrupt-'))
      if (backups.length > 0) break
      await new Promise((r) => setTimeout(r, 25))
    }
    check('启动校验备份损坏文件', backups.length === 1, JSON.stringify(backups))
    check('未备份合法文件', !existsSync(join(dir, 'kanban-board-b.json.bak-v0')))
    check('忽略无关文件', readdirSync(dir).filter((n) => n.includes('unrelated')).length === 1)
  }
} finally {
  rmSync(dir, { recursive: true, force: true })
}

console.log('\n' + (failed === 0 ? '全部通过 ✓' : failed + ' 项失败 ✗'))
process.exit(failed === 0 ? 0 : 1)
