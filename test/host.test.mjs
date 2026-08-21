// @vitest-environment node
import { afterEach, describe, expect, it } from "vitest"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { apply, parseBoardText, SCHEMA_VERSION } from "../index.js"

const workspaces = []

afterEach(() => {
  for (const dir of workspaces.splice(0)) rmSync(dir, { recursive: true, force: true })
})

function boot(dir = mkdtempSync(join(tmpdir(), "dsh-kanban-test-"))) {
  workspaces.push(dir)
  const workspace = { id: "ws-test", path: dir, title: "Test" }
  const registered = []
  const fs = {
    async resolve(path, options = {}) {
      return join(options.cwd || dir, path)
    },
    async readText(target) {
      if (!existsSync(target)) {
        const error = new Error("ENOENT")
        error.code = "ENOENT"
        throw error
      }
      return readFileSync(target, "utf8")
    },
    async writeText(target, content) {
      writeFileSync(target, content, "utf8")
      return { version: 1 }
    },
  }
  const ctx = {
    get(name) {
      if (name === "fs") return fs
      if (name === "sandboxPolicy") return { defaultMode: "workspace-write", resolve: () => ({ mode: "workspace-write" }) }
      if (name === "workspaceRegistry") return {
        get: (id) => id === workspace.id ? workspace : undefined,
        list: () => [workspace],
        resolveByPath: async (path) => path === workspace.path ? workspace : undefined,
      }
      return undefined
    },
    tools: {
      register(tool) { registered.push(tool) },
    },
  }
  apply(ctx)
  const exec = { agent: { session: { header: { cwd: dir } } } }
  return { dir, workspace, registered, exec }
}

const tool = (registered, name) => {
  const found = registered.find((candidate) => candidate.name === name)
  expect(found, `missing registered tool ${name}`).toBeTruthy()
  return found
}

describe("host board seam", () => {
  it("migrates legacy data through the public parser contract", () => {
    const parsed = parseBoardText(JSON.stringify({
      columns: [{ id: "c1", title: "Todo" }],
      cards: [{ id: "k1", columnId: "c1", title: "Migrate me" }],
    }))

    expect(parsed.ok).toBe(true)
    expect(parsed.data.schemaVersion).toBe(SCHEMA_VERSION)
    expect(parsed.data.activities).toEqual([])
    expect(parsed.data.cards[0]).toMatchObject({ note: "", label: null, priority: null, createdAt: null, createdBy: null })
  })

  it("registers every model tool with a usable schema", () => {
    const { registered } = boot()
    const names = registered.map(({ name }) => name)

    expect(names).toHaveLength(14)
    expect(new Set(names).size).toBe(14)
    for (const registeredTool of registered) {
      expect(registeredTool.name).toMatch(/^kanban_/)
      expect(registeredTool.parameters).toMatchObject({ type: "object" })
      expect(typeof registeredTool.execute).toBe("function")
      expect(registeredTool.output.schema).toMatchObject({ type: "object", required: ["ok", "message"] })
    }

    expect(tool(registered, "kanban_add_card").parameters.required).toEqual(["title"])
    expect(tool(registered, "kanban_update_card").parameters.required).toEqual(["id"])
    expect(tool(registered, "kanban_move_card").parameters.properties.toIndex).toMatchObject({ type: "integer" })
    expect(tool(registered, "kanban_add_card").parameters.properties.priority.enum).toEqual(["high", "medium", "low"])
  })

  it("executes CRUD through registered tools and persists activity history", async () => {
    const { dir, registered, exec } = boot()
    const add = await tool(registered, "kanban_add_card").execute({ title: "Ship tests", note: "Keep the gate green", priority: "high" }, exec)
    expect(add).toMatchObject({ ok: true, message: expect.stringContaining("Card added") })
    const card = add.board.cards[0]
    const target = add.board.columns.find((column) => column.title === "Done")

    const update = await tool(registered, "kanban_update_card").execute({ id: card.id, priority: "low" }, exec)
    expect(update).toMatchObject({ ok: true, message: "Card updated" })
    const move = await tool(registered, "kanban_move_card").execute({ id: card.id, columnId: target.id }, exec)
    expect(move).toMatchObject({ ok: true, message: 'Moved to "Done"' })
    const deleted = await tool(registered, "kanban_delete_card").execute({ id: card.id }, exec)
    expect(deleted).toMatchObject({ ok: true, message: "Card deleted" })

    const persisted = JSON.parse(readFileSync(join(dir, ".dsh-kanban.json"), "utf8"))
    expect(persisted.schemaVersion).toBe(SCHEMA_VERSION)
    expect(persisted.cards).toEqual([])
    expect(persisted.activities.map(({ type }) => type)).toEqual([
      "card_created",
      "card_priority_changed",
      "card_moved",
      "card_deleted",
    ])
  })

  it("backs up and writes back a migrated workspace file on first tool access", async () => {
    const dir = mkdtempSync(join(tmpdir(), "dsh-kanban-migration-"))
    workspaces.push(dir)
    writeFileSync(join(dir, ".dsh-kanban.json"), JSON.stringify({
      schemaVersion: 1,
      columns: [{ id: "c1", title: "Todo" }],
      labels: [],
      cards: [{ id: "k1", columnId: "c1", title: "Old" }],
    }))
    const { registered, exec } = boot(dir)
    const result = await tool(registered, "kanban_get").execute({}, exec)

    expect(result).toMatchObject({ ok: true, board: { cards: [{ id: "k1", title: "Old" }] } })
    expect(result.warnings.some((warning) => warning.includes("automatically upgraded"))).toBe(true)
    expect(existsSync(join(dir, ".dsh-kanban.json.bak-v1"))).toBe(true)
    expect(JSON.parse(readFileSync(join(dir, ".dsh-kanban.json"), "utf8"))).toMatchObject({ schemaVersion: SCHEMA_VERSION, activities: [] })
  })
})
