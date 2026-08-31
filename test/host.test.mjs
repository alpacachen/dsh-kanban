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

function boot(dir = mkdtempSync(join(tmpdir(), "dsh-kanban-test-")), options = {}) {
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
      if (options.writeDelay) await new Promise((resolve) => setTimeout(resolve, options.writeDelay(content)))
      if (options.failWrites) throw new Error("ENOSPC")
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
    expect(parsed.data.cards[0]).toMatchObject({ note: "", label: null, priority: null, createdAt: null, createdBy: null, comments: [] })
  })

  it("rejects malformed entities and dangling references", () => {
    const malformed = parseBoardText(JSON.stringify({
      schemaVersion: SCHEMA_VERSION,
      columns: [null],
      labels: [],
      cards: [],
      activities: [],
    }))
    expect(malformed).toMatchObject({ ok: false, kind: "invalid" })

    const dangling = parseBoardText(JSON.stringify({
      schemaVersion: SCHEMA_VERSION,
      columns: [{ id: "c1", title: "Todo" }],
      labels: [],
      cards: [{ id: "k1", columnId: "missing", title: "Broken", note: "", label: null, priority: null, comments: [] }],
      activities: [],
    }))
    expect(dangling).toMatchObject({ ok: false, kind: "invalid" })

    const invalidComments = parseBoardText(JSON.stringify({
      schemaVersion: SCHEMA_VERSION,
      columns: [{ id: "c1", title: "Todo" }],
      labels: [],
      cards: [{
        id: "k1",
        columnId: "c1",
        title: "Broken comments",
        comments: [{ id: "m1", content: "  ", source: "human", createdAt: "now" }],
      }],
      activities: [],
    }))
    expect(invalidComments).toMatchObject({ ok: false, kind: "invalid" })

    const duplicateComments = parseBoardText(JSON.stringify({
      schemaVersion: SCHEMA_VERSION,
      columns: [{ id: "c1", title: "Todo" }],
      labels: [],
      cards: [
        { id: "k1", columnId: "c1", title: "One", comments: [{ id: "m1", content: "A", source: "human", createdAt: "now" }] },
        { id: "k2", columnId: "c1", title: "Two", comments: [{ id: "m1", content: "B", source: "agent", createdAt: "now" }] },
      ],
      activities: [],
    }))
    expect(duplicateComments).toMatchObject({ ok: false, kind: "invalid" })
  })

  it("registers every model tool with a usable schema", () => {
    const { registered } = boot()
    const names = registered.map(({ name }) => name)

    expect(names).toHaveLength(15)
    expect(new Set(names).size).toBe(15)
    for (const registeredTool of registered) {
      expect(registeredTool.name).toMatch(/^kanban_/)
      expect(registeredTool.parameters).toMatchObject({ type: "object" })
      expect(typeof registeredTool.execute).toBe("function")
      expect(registeredTool.output.schema).toMatchObject({ type: "object", required: ["ok", "message"] })
    }

    expect(tool(registered, "kanban_add_card").parameters.required).toEqual(["title"])
    expect(tool(registered, "kanban_update_card").parameters.required).toEqual(["id"])
    expect(tool(registered, "kanban_add_comment").parameters.required).toEqual(["id", "content"])
    expect(tool(registered, "kanban_move_card").parameters.properties.toIndex).toMatchObject({ type: "integer" })
    expect(tool(registered, "kanban_add_card").parameters.properties.priority.enum).toEqual(["high", "medium", "low"])
    expect(tool(registered, "kanban_update_card").parameters.properties.priority.enum).toEqual(["high", "medium", "low", ""])
  })

  it("executes CRUD through registered tools and persists activity history", async () => {
    const { dir, registered, exec } = boot()
    const add = await tool(registered, "kanban_add_card").execute({ title: "Ship tests", note: "Keep the gate green", priority: "high" }, exec)
    expect(add).toMatchObject({ ok: true, message: expect.stringContaining("Card added") })
    const card = add.board.cards[0]
    const target = add.board.columns.find((column) => column.title === "Done")

    const update = await tool(registered, "kanban_update_card").execute({ id: card.id, priority: "low" }, exec)
    expect(update).toMatchObject({ ok: true, message: "Card updated" })
    const commented = await tool(registered, "kanban_add_comment").execute({ id: card.id, content: "  Ready for review  " }, exec)
    expect(commented).toMatchObject({ ok: true, message: "Comment added", board: { cards: [{ id: card.id, commentCount: 1 }] } })
    const details = await tool(registered, "kanban_get_card").execute({ id: card.id }, exec)
    expect(details.card.comments).toEqual([
      expect.objectContaining({ content: "Ready for review", source: "agent", createdAt: expect.any(String) }),
    ])
    expect(tool(registered, "kanban_get_card").output.render({}, details)[0].text).toContain("Ready for review")
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
      "card_comment_added",
      "card_moved",
      "card_deleted",
    ])
  })

  it("rejects invalid comment mutations", async () => {
    const { registered, exec } = boot()
    const addCard = await tool(registered, "kanban_add_card").execute({ title: "Comment target" }, exec)
    const cardId = addCard.board.cards[0].id
    const addComment = tool(registered, "kanban_add_comment")

    expect(await addComment.execute({ id: "missing", content: "Hello" }, exec)).toMatchObject({ ok: false, message: expect.stringContaining("Card not found") })
    expect(await addComment.execute({ id: cardId, content: "   " }, exec)).toMatchObject({ ok: false, message: "Comment content required" })
    expect(await addComment.execute({ id: cardId, content: "x".repeat(2001) }, exec)).toMatchObject({ ok: false, message: "Comment exceeds 2000 characters" })
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
    expect(JSON.parse(readFileSync(join(dir, ".dsh-kanban.json"), "utf8"))).toMatchObject({ schemaVersion: SCHEMA_VERSION, activities: [], cards: [{ comments: [] }] })
  })

  it("serializes concurrent mutations before persisting", async () => {
    const { dir, registered, exec } = boot(undefined, {
      writeDelay: (content) => content.includes("First") && !content.includes("Second") ? 30 : 0,
    })
    const add = tool(registered, "kanban_add_card")
    const [first, second] = await Promise.all([
      add.execute({ title: "First" }, exec),
      add.execute({ title: "Second" }, exec),
    ])

    expect(first.ok).toBe(true)
    expect(second.ok).toBe(true)
    const persisted = JSON.parse(readFileSync(join(dir, ".dsh-kanban.json"), "utf8"))
    expect(persisted.cards.map(({ title }) => title)).toEqual(["First", "Second"])
  })

  it("rolls back memory and reports a failed write", async () => {
    const { registered, exec } = boot(undefined, { failWrites: true })
    const result = await tool(registered, "kanban_add_card").execute({ title: "Must persist" }, exec)

    expect(result.ok).toBe(false)
    expect(result.message).toContain("ENOSPC")
    expect(result.board.cards).toEqual([])
  })

  it("rolls back a comment when persistence fails", async () => {
    const options = {}
    const { registered, exec } = boot(undefined, options)
    const add = await tool(registered, "kanban_add_card").execute({ title: "Must stay clean" }, exec)
    const cardId = add.board.cards[0].id
    options.failWrites = true

    const result = await tool(registered, "kanban_add_comment").execute({ id: cardId, content: "Do not retain" }, exec)
    expect(result.ok).toBe(false)
    expect(result.message).toContain("ENOSPC")
    expect(result.board.cards[0].commentCount).toBe(0)
  })

  it("keeps newer-schema files read-only", async () => {
    const dir = mkdtempSync(join(tmpdir(), "dsh-kanban-future-"))
    workspaces.push(dir)
    const original = JSON.stringify({ schemaVersion: 99, columns: [], labels: [], cards: [], activities: [] })
    writeFileSync(join(dir, ".dsh-kanban.json"), original)
    const { registered, exec } = boot(dir)

    const result = await tool(registered, "kanban_add_card").execute({ title: "Do not overwrite" }, exec)
    expect(result.ok).toBe(false)
    expect(result.message).toContain("newer plugin version")
    expect(readFileSync(join(dir, ".dsh-kanban.json"), "utf8")).toBe(original)
  })
})
