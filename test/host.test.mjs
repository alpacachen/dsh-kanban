// @vitest-environment node
import { afterEach, describe, expect, it } from "vitest"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { apply, parseBoardText, SCHEMA_VERSION, NOTE_LIMIT, TITLE_LIMIT, LABEL_LIMIT, COLUMN_TITLE_LIMIT } from "../index.js"

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
    // Declare length limits in the schema so agent input is not silently truncated.
    expect(tool(registered, "kanban_add_card").parameters.properties.note.description).toContain(String(NOTE_LIMIT))
    expect(tool(registered, "kanban_add_card").parameters.properties.title.description).toContain(String(TITLE_LIMIT))
    expect(tool(registered, "kanban_add_card").parameters.properties.label.description).toContain(String(LABEL_LIMIT))
    expect(tool(registered, "kanban_update_card").parameters.properties.note.description).toContain(String(NOTE_LIMIT))
    expect(tool(registered, "kanban_update_card").parameters.properties.title.description).toContain(String(TITLE_LIMIT))
    expect(tool(registered, "kanban_update_card").parameters.properties.label.description).toContain(String(LABEL_LIMIT))
    expect(tool(registered, "kanban_add_label").parameters.properties.name.description).toContain(String(LABEL_LIMIT))
    expect(tool(registered, "kanban_update_label").parameters.properties.newName.description).toContain(String(LABEL_LIMIT))
    expect(tool(registered, "kanban_add_column").parameters.properties.title.description).toContain(String(COLUMN_TITLE_LIMIT))
    expect(tool(registered, "kanban_rename_column").parameters.properties.title.description).toContain(String(COLUMN_TITLE_LIMIT))
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

  it("truncates over-limit card fields and reports a warning instead of silently dropping data", async () => {
    const { registered, exec } = boot()
    const addCard = tool(registered, "kanban_add_card")
    const getCard = tool(registered, "kanban_get_card")
    const longNote = "x".repeat(NOTE_LIMIT + 250)
    const longTitle = "y".repeat(TITLE_LIMIT + 40)

    const added = await addCard.execute({ title: longTitle, note: longNote }, exec)
    expect(added).toMatchObject({ ok: true, message: expect.stringContaining("Card added") })
    const cardId = added.board.cards[0].id
    expect(added.board.cards[0].title).toHaveLength(TITLE_LIMIT)
    expect(added.warnings).toEqual([
      expect.stringContaining("Title truncated to " + TITLE_LIMIT),
      expect.stringContaining("Note truncated to " + NOTE_LIMIT),
    ])
    // Tool summaries omit note; kanban_get_card returns the complete note.
    const details = await getCard.execute({ id: cardId }, exec)
    expect(details.card.note).toHaveLength(NOTE_LIMIT)

    // updateCard also truncates oversized input and emits a warning.
    const update = tool(registered, "kanban_update_card")
    const updated = await update.execute({ id: cardId, note: "z".repeat(NOTE_LIMIT + 10) }, exec)
    expect(updated).toMatchObject({ ok: true, message: "Card updated" })
    expect(updated.warnings).toEqual([expect.stringContaining("Note truncated to " + NOTE_LIMIT)])
    const detailsAfter = await getCard.execute({ id: cardId }, exec)
    expect(detailsAfter.card.note).toHaveLength(NOTE_LIMIT)
  })

  it("truncates over-limit column and label fields with warnings", async () => {
    const { registered, exec } = boot()
    const added = await tool(registered, "kanban_add_column").execute({ title: "c".repeat(COLUMN_TITLE_LIMIT + 10) }, exec)
    expect(added.ok).toBe(true)
    expect(added.board.columns.some((col) => col.title.length === COLUMN_TITLE_LIMIT)).toBe(true)
    expect(added.warnings).toEqual([expect.stringContaining("List title truncated to " + COLUMN_TITLE_LIMIT)])

    const label = await tool(registered, "kanban_add_label").execute({ name: "l".repeat(LABEL_LIMIT + 5) }, exec)
    expect(label.ok).toBe(true)
    expect(label.board.labels.some((l) => l.name.length === LABEL_LIMIT)).toBe(true)
    expect(label.warnings).toEqual([expect.stringContaining("Label name truncated to " + LABEL_LIMIT)])
  })

  it("does not warn when input fits within the limits", async () => {
    const { registered, exec } = boot()
    const added = await tool(registered, "kanban_add_card").execute({ title: "Short title", note: "A brief note" }, exec)
    expect(added.ok).toBe(true)
    expect(added.warnings).toEqual([])
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
