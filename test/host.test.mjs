// @vitest-environment node
import { afterEach, describe, expect, it, vi } from "vitest"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { Context } from "@deepseek-ai/cordis"
import { assertSupportedJsonSchema } from "@deepseek-ai/dsh-tools"
import * as plugin from "../index.js"
const { apply, parseBoardText, SCHEMA_VERSION, NOTE_LIMIT, TITLE_LIMIT, LABEL_LIMIT, COLUMN_TITLE_LIMIT } = plugin

const workspaces = []

afterEach(() => {
  vi.useRealTimers()
  for (const dir of workspaces.splice(0)) rmSync(dir, { recursive: true, force: true })
})

function boot(dir = mkdtempSync(join(tmpdir(), "dsh-kanban-test-")), options = {}) {
  workspaces.push(dir)
  const workspace = { id: "ws-test", path: dir, title: "Test" }
  const registered = []
  const childDisposers = []
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
    inject(dependencies, callback) {
      if (!dependencies.every((name) => ctx.get(name))) return
      const child = Object.assign({}, ctx, Object.fromEntries(dependencies.map((name) => [name, ctx.get(name)])))
      const dispose = callback(child)
      if (typeof dispose === "function") childDisposers.push(dispose)
    },
    get(name) {
      if (name === "connection") return options.connection
      if (name === "webServer") throw new Error("Browser routes must use authenticated Connection")
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
  const cleanup = apply(ctx)
  const dispose = async () => {
    for (const disposeChild of childDisposers) await disposeChild()
    await cleanup()
  }
  const exec = { agent: { session: { header: { cwd: dir } } } }
  return { dir, workspace, registered, exec, dispose }
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
    expect(parsed.data.cards[0]).toMatchObject({ note: "", label: null, priority: null, createdAt: null, createdBy: null, dueDate: null, completedAt: null, comments: [] })
  })

  it("rejects malformed entities and dangling references", () => {
    const malformed = parseBoardText(JSON.stringify({
      schemaVersion: SCHEMA_VERSION,
      completedColumnId: null,
      columns: [null],
      labels: [],
      cards: [],
      activities: [],
    }))
    expect(malformed).toMatchObject({ ok: false, kind: "invalid" })

    const dangling = parseBoardText(JSON.stringify({
      schemaVersion: SCHEMA_VERSION,
      completedColumnId: null,
      columns: [{ id: "c1", title: "Todo" }],
      labels: [],
      cards: [{ id: "k1", columnId: "missing", title: "Broken", note: "", label: null, priority: null, dueDate: null, completedAt: null, comments: [] }],
      activities: [],
    }))
    expect(dangling).toMatchObject({ ok: false, kind: "invalid" })

    const invalidComments = parseBoardText(JSON.stringify({
      schemaVersion: SCHEMA_VERSION,
      completedColumnId: null,
      columns: [{ id: "c1", title: "Todo" }],
      labels: [],
      cards: [{
        id: "k1",
        columnId: "c1",
        title: "Broken comments",
        dueDate: null, completedAt: null, comments: [{ id: "m1", content: "  ", source: "human", createdAt: "now" }],
      }],
      activities: [],
    }))
    expect(invalidComments).toMatchObject({ ok: false, kind: "invalid" })

    const duplicateComments = parseBoardText(JSON.stringify({
      schemaVersion: SCHEMA_VERSION,
      completedColumnId: null,
      columns: [{ id: "c1", title: "Todo" }],
      labels: [],
      cards: [
        { id: "k1", columnId: "c1", title: "One", dueDate: null, completedAt: null, comments: [{ id: "m1", content: "A", source: "human", createdAt: "now" }] },
        { id: "k2", columnId: "c1", title: "Two", dueDate: null, completedAt: null, comments: [{ id: "m1", content: "B", source: "agent", createdAt: "now" }] },
      ],
      activities: [],
    }))
    expect(duplicateComments).toMatchObject({ ok: false, kind: "invalid" })
  })

  it("migrates v3 dates without guessing completion, backs up once and reloads the current schema", async () => {
    const dir = mkdtempSync(join(tmpdir(), "dsh-kanban-v3-"))
    workspaces.push(dir)
    const original = {
      schemaVersion: 3,
      columns: [{ id: "c1", title: "Done" }], labels: [{ name: "Release", color: "#94a3b8" }],
      cards: [{ id: "k1", columnId: "c1", title: "Keep me", note: "# Markdown", comments: [{ id: "m1", content: "Preserve", source: "human", createdAt: "2026-01-01" }] }],
      activities: [{ id: "e1", ts: "2026-01-01", type: "card_created", source: "human" }],
    }
    writeFileSync(join(dir, ".dsh-kanban.json"), JSON.stringify(original))
    const first = boot(dir)
    const loaded = await tool(first.registered, "kanban_get").execute({}, first.exec)
    expect(loaded.board).toMatchObject({ completedColumnId: null, cards: [{ dueDate: null }] })
    expect(JSON.parse(readFileSync(join(dir, ".dsh-kanban.json.bak-v3"), "utf8"))).toEqual(original)
    const saved = JSON.parse(readFileSync(join(dir, ".dsh-kanban.json"), "utf8"))
    expect(saved).toEqual({ ...original, schemaVersion: SCHEMA_VERSION, completedColumnId: null, cards: [{ ...original.cards[0], dueDate: null, completedAt: null }] })
    expect(parseBoardText(JSON.stringify(saved))).toMatchObject({ ok: true, migrated: false })
    const second = boot(dir)
    expect(await tool(second.registered, "kanban_get").execute({}, second.exec)).toMatchObject({ ok: true, warnings: [], board: loaded.board })
  })

  it("validates, exposes, updates and clears calendar dates without losing other fields", async () => {
    const { dir, registered, exec } = boot()
    const add = tool(registered, "kanban_add_card")
    const update = tool(registered, "kanban_update_card")
    const invalidDates = ["2026-02-29", "1900-02-29", "2026-04-31", "2026-13-01", "2026-01-00", "0000-01-01", "2026-2-01", "2026-10-21T00:00:00Z", "tomorrow", 1, false]
    for (const dueDate of invalidDates) {
      expect(await add.execute({ title: "Invalid", dueDate }, exec)).toMatchObject({ ok: false, board: { cards: [] } })
    }
    expect(existsSync(join(dir, ".dsh-kanban.json"))).toBe(false)
    const added = await add.execute({ title: "Leap release", note: "Keep this", dueDate: "2028-02-29" }, exec)
    const id = added.board.cards[0].id
    expect(added.board.cards[0].dueDate).toBe("2028-02-29")
    expect(tool(registered, "kanban_get").output.render({}, added)[0].text).toContain("due 2028-02-29")
    const getCard = tool(registered, "kanban_get_card")
    const detail = await getCard.execute({ id }, exec)
    expect(detail).toMatchObject({ completedColumnId: added.board.completedColumnId, card: { dueDate: "2028-02-29" } })
    expect(getCard.output.render({}, detail)[0].text).toContain("Due date: 2028-02-29")
    for (const dueDate of invalidDates) {
      expect(await update.execute({ id, title: "Must not change", dueDate }, exec)).toMatchObject({ ok: false, board: { cards: [{ title: "Leap release", dueDate: "2028-02-29" }] } })
    }
    expect((await update.execute({ id, priority: "high" }, exec)).board.cards[0].dueDate).toBe("2028-02-29")
    expect((await update.execute({ id, dueDate: "" }, exec)).board.cards[0].dueDate).toBeNull()
    expect((await update.execute({ id, dueDate: "2000-02-29" }, exec)).board.cards[0].dueDate).toBe("2000-02-29")
    expect((await update.execute({ id, dueDate: null }, exec)).board.cards[0].dueDate).toBeNull()
    expect((await getCard.execute({ id }, exec)).card.note).toBe("Keep this")
    const saved = JSON.parse(readFileSync(join(dir, ".dsh-kanban.json"), "utf8"))
    expect(saved.activities.filter(({ type }) => type === "card_due_date_changed")).toEqual([
      expect.objectContaining({ from: "2028-02-29", to: null, source: "agent", field: "dueDate" }),
      expect.objectContaining({ from: null, to: "2000-02-29" }),
      expect.objectContaining({ from: "2000-02-29", to: null }),
    ])
    expect(parseBoardText(JSON.stringify({ ...saved, cards: [{ ...saved.cards[0], dueDate: "2026-02-29" }] }))).toMatchObject({ ok: false, kind: "invalid" })
    expect(parseBoardText(JSON.stringify({ ...saved, completedColumnId: "missing" }))).toMatchObject({ ok: false, kind: "invalid" })
  })

  it("binds completion to a stable column id and clears it when that column is deleted", async () => {
    const { dir, registered, exec } = boot()
    const added = await tool(registered, "kanban_add_card").execute({ title: "Deadline", dueDate: "2026-01-01" }, exec)
    const done = added.board.columns.find(({ title }) => title === "Done")
    expect(added.board.completedColumnId).toBe(done.id)
    const set = tool(registered, "kanban_set_completed_column")
    for (const columnId of ["missing", "", 42, undefined]) {
      expect(await set.execute({ columnId }, exec)).toMatchObject({ ok: false, board: { completedColumnId: done.id } })
    }
    expect((await tool(registered, "kanban_rename_column").execute({ id: done.id, title: "Shipped" }, exec)).board.completedColumnId).toBe(done.id)
    expect((await tool(registered, "kanban_move_column").execute({ id: done.id, toIndex: 0 }, exec)).board.completedColumnId).toBe(done.id)
    const moved = await tool(registered, "kanban_move_card").execute({ id: added.board.cards[0].id, columnId: done.id }, exec)
    expect(tool(registered, "kanban_get").output.render({}, moved)[0].text).toContain("Deadline (due 2026-01-01) [completed; completedAt:")
    expect((await set.execute({ columnId: null }, exec)).board.completedColumnId).toBeNull()
    expect((await set.execute({ columnId: done.id }, exec)).board.completedColumnId).toBe(done.id)
    const reloaded = boot(dir)
    expect((await tool(reloaded.registered, "kanban_get").execute({}, reloaded.exec)).board.completedColumnId).toBe(done.id)
    const deleted = await tool(registered, "kanban_delete_column").execute({ id: done.id }, exec)
    expect(deleted.board.completedColumnId).toBeNull()
    expect(deleted.board.cards[0]).toMatchObject({ columnId: deleted.board.columns[0].id, dueDate: "2026-01-01" })
    const saved = JSON.parse(readFileSync(join(dir, ".dsh-kanban.json"), "utf8"))
    expect(saved.activities.filter(({ type }) => type === "board_completed_column_changed").at(-1)).toMatchObject({ from: done.id, to: null, meta: { fromColumn: "Shipped", toColumn: null } })
  })

  it("rolls back due dates and completion settings if persistence fails", async () => {
    const options = {}
    const { registered, exec } = boot(undefined, options)
    const added = await tool(registered, "kanban_add_card").execute({ title: "Keep", dueDate: "2026-10-21" }, exec)
    options.failWrites = true
    expect(await tool(registered, "kanban_update_card").execute({ id: added.board.cards[0].id, dueDate: null }, exec)).toMatchObject({ ok: false, board: { cards: [{ dueDate: "2026-10-21" }] } })
    expect(await tool(registered, "kanban_set_completed_column").execute({ columnId: null }, exec)).toMatchObject({ ok: false, board: { completedColumnId: added.board.completedColumnId } })
  })

  it("records only completion transitions, preserves timestamps across edits and reloads, and exposes them to agents", async () => {
    vi.useFakeTimers({ toFake: ["Date"] })
    vi.setSystemTime(new Date("2026-10-27T01:00:00.000Z"))
    const host = boot()
    const call = (name, args = {}) => tool(host.registered, "kanban_" + name).execute(args, host.exec)
    const added = await call("add_card", { title: "Ship", completedAt: "forged" })
    const card = added.board.cards[0]
    const done = added.board.completedColumnId
    expect(card.completedAt).toBeNull()
    const firstTime = "2026-10-27T02:00:00.000Z"
    vi.setSystemTime(new Date(firstTime))
    const completed = await call("move_card", { id: card.id, columnId: done })
    expect(completed.board.cards[0].completedAt).toBe(firstTime)
    expect(tool(host.registered, "kanban_get").output.render({}, completed)[0].text).toContain(firstTime)
    vi.setSystemTime(new Date("2026-10-27T03:00:00.000Z"))
    await call("move_card", { id: card.id, columnId: done, toIndex: 0 })
    await call("update_card", { id: card.id, title: "Shipped", note: "Edited", priority: "high", label: "bug", dueDate: "2026-10-28", completedAt: "forged" })
    await call("add_comment", { id: card.id, content: "Reviewed later" })
    await call("rename_column", { id: done, title: "Shipped" })
    await call("move_column", { id: done, toIndex: 0 })
    await call("set_completed_column", { columnId: done })
    const detail = await call("get_card", { id: card.id })
    expect(detail.card.completedAt).toBe(firstTime)
    expect(tool(host.registered, "kanban_get_card").output.render({}, detail)[0].text).toContain("Completed at: " + firstTime)
    const reloaded = boot(host.dir)
    expect((await tool(reloaded.registered, "kanban_get_card").execute({ id: card.id }, reloaded.exec)).card.completedAt).toBe(firstTime)
    expect((await call("move_card", { id: card.id, columnId: card.columnId })).board.cards[0].completedAt).toBeNull()
    expect((await call("move_card", { id: card.id, columnId: done })).board.cards[0].completedAt).toBe("2026-10-27T03:00:00.000Z")
    const createdDone = await call("add_card", { title: "Already shipped", columnId: done })
    const newCard = (await call("get_card", { id: createdDone.board.cards.at(-1).id })).card
    expect(newCard.completedAt).toBe(newCard.createdAt)
  })

  it("uses column ids for same-name moves and resets dates when completion settings change", async () => {
    const host = boot()
    const call = (name, args = {}) => tool(host.registered, "kanban_" + name).execute(args, host.exec)
    const added = await call("add_card", { title: "Ship" })
    const card = added.board.cards[0]
    const done = added.board.completedColumnId
    await call("rename_column", { id: card.columnId, title: "Done" })
    expect((await call("move_card", { id: card.id, columnId: done })).board.cards[0].completedAt).toEqual(expect.any(String))
    const saved = JSON.parse(readFileSync(join(host.dir, ".dsh-kanban.json"), "utf8"))
    expect(saved.activities.filter(a => a.type === "card_moved")).toHaveLength(1)
    await call("add_card", { title: "Existing", columnId: card.columnId })
    const switched = await call("set_completed_column", { columnId: card.columnId })
    expect(switched.board.cards.every(c => c.completedAt === null)).toBe(true)
    expect(tool(host.registered, "kanban_get").output.render({}, switched)[0].text).toContain("completedAt: unknown")
    await call("move_card", { id: card.id, columnId: card.columnId })
    expect((await call("set_completed_column", { columnId: null })).board.cards.every(c => c.completedAt === null)).toBe(true)
    expect((await call("set_completed_column", { columnId: done })).board.cards.every(c => c.completedAt === null)).toBe(true)
  })

  it("records automatic moves into completion and clears dates when the completed column is deleted", async () => {
    const host = boot()
    const call = (name, args = {}) => tool(host.registered, "kanban_" + name).execute(args, host.exec)
    const added = await call("add_card", { title: "Ship" })
    const source = added.board.cards[0].columnId
    const done = added.board.completedColumnId
    await call("move_column", { id: done, toIndex: 0 })
    const moved = await call("delete_column", { id: source })
    expect(moved.board.cards[0]).toMatchObject({ columnId: done, completedAt: expect.any(String) })
    const deleted = await call("delete_column", { id: done })
    expect(deleted.board.completedColumnId).toBeNull()
    expect(deleted.board.cards[0].completedAt).toBeNull()
  })

  it("migrates v4 with a backup and unknown dates, validates timestamps, and survives activity truncation", async () => {
    const host = boot()
    const original = {
      schemaVersion: 4, completedColumnId: "done", columns: [{ id: "done", title: "Done" }], labels: [{ name: "Release", color: "#94a3b8" }],
      cards: [{ id: "k1", columnId: "done", title: "Legacy", dueDate: null, comments: [] }],
      activities: [{ id: "e1", ts: "2026-10-01T00:00:00.000Z", cardId: "k1", type: "card_created", source: "human", meta: { column: "Done" } }],
    }
    writeFileSync(join(host.dir, ".dsh-kanban.json"), JSON.stringify(original))
    const loaded = await tool(host.registered, "kanban_get_card").execute({ id: "k1" }, host.exec)
    expect(loaded.card.completedAt).toBeNull()
    expect(tool(host.registered, "kanban_get_card").output.render({}, loaded)[0].text).toContain("Completed at: unknown")
    expect(JSON.parse(readFileSync(join(host.dir, ".dsh-kanban.json.bak-v4"), "utf8"))).toEqual(original)
    const saved = JSON.parse(readFileSync(join(host.dir, ".dsh-kanban.json"), "utf8"))
    expect(saved).toEqual({ ...original, schemaVersion: SCHEMA_VERSION, cards: [{ ...original.cards[0], completedAt: null }] })
    for (const completedAt of [undefined, "", "today", "2026-02-30T00:00:00.000Z", "2026-10-27", 42, false]) {
      expect(parseBoardText(JSON.stringify({ ...saved, cards: [{ ...saved.cards[0], completedAt }] })).ok).toBe(false)
    }
    saved.cards[0].completedAt = "2026-10-01T00:00:00.000Z"
    expect(parseBoardText(JSON.stringify({ ...saved, completedColumnId: null })).ok).toBe(false)
    saved.activities = Array.from({ length: 5000 }, (_, i) => ({ id: "e" + (i + 1), ts: "2026-10-02T00:00:00.000Z", type: "card_note_changed", cardId: "k1", source: "human" }))
    writeFileSync(join(host.dir, ".dsh-kanban.json"), JSON.stringify(saved))
    const reloaded = boot(host.dir)
    const result = await tool(reloaded.registered, "kanban_add_comment").execute({ id: "k1", content: "Later" }, reloaded.exec)
    expect(result.board.cards[0].completedAt).toBe(saved.cards[0].completedAt)
    const after = JSON.parse(readFileSync(join(host.dir, ".dsh-kanban.json"), "utf8"))
    expect(after.activities).toHaveLength(5000)
    expect(after.activities[0].id).toBe("e2")
    expect(after.cards[0].completedAt).toBe(saved.cards[0].completedAt)
  })

  it("rolls back completion timestamps with failed moves and completion setting writes", async () => {
    const options = {}
    const host = boot(undefined, options)
    const call = (name, args = {}) => tool(host.registered, "kanban_" + name).execute(args, host.exec)
    const added = await call("add_card", { title: "Ship" })
    const card = added.board.cards[0]
    options.failWrites = true
    const failed = await call("move_card", { id: card.id, columnId: added.board.completedColumnId })
    expect(failed).toMatchObject({ ok: false, board: { cards: [{ columnId: card.columnId, completedAt: null }] } })
    options.failWrites = false
    const completed = await call("move_card", { id: card.id, columnId: added.board.completedColumnId })
    options.failWrites = true
    expect(await call("set_completed_column", { columnId: null })).toMatchObject({ ok: false, board: { cards: [{ completedAt: completed.board.cards[0].completedAt }] } })
    expect(await call("move_card", { id: card.id, columnId: card.columnId })).toMatchObject({ ok: false, board: { cards: [{ completedAt: completed.board.cards[0].completedAt }] } })
  })

  it("registers every model tool with a usable schema", () => {
    const { registered } = boot()
    const names = registered.map(({ name }) => name)

    expect(names).toHaveLength(16)
    expect(new Set(names).size).toBe(16)
    for (const registeredTool of registered) {
      expect(registeredTool.name).toMatch(/^kanban_/)
      expect(registeredTool.parameters).toMatchObject({ type: "object" })
      // DSH supports oneOf for nullable values, but rejects JSON Schema type arrays.
      expect(() => assertSupportedJsonSchema(registeredTool.parameters)).not.toThrow()
      expect(() => assertSupportedJsonSchema(registeredTool.output.schema)).not.toThrow()
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


describe("authenticated Connection route", () => {
  const request = (body, headers = {}, method = "POST") => new Request("http://dsh.internal/api/kanban", {
    method,
    headers: { "content-type": "application/json", host: "localhost", ...headers },
    ...(method === "POST" ? { body } : {}),
  })

  it("persists browser changes through the shared route and disposes it", async () => {
    let route
    let removed = false
    const host = boot(undefined, { connection: { fetch: { register(value) {
      route = value
      return async () => { removed = true }
    } } } })
    expect(route).toMatchObject({ path: "/api/kanban", methods: ["POST"], requestBody: "streaming" })
    const response = await route.fetch(request(JSON.stringify({
      method: "addCard", args: { workspaceId: host.workspace.id, title: "Browser card", dueDate: "2026-10-21" },
    }), { origin: "http://localhost" }))
    expect(response.status).toBe(200)
    const created = await response.json()
    expect(created.board.cards[0]).toMatchObject({ title: "Browser card", dueDate: "2026-10-21", createdBy: "human" })
    const completed = await route.fetch(request(JSON.stringify({
      method: "setCompletedColumn", args: { workspaceId: host.workspace.id, columnId: null },
    })))
    expect(completed.status).toBe(200)
    expect((await completed.json()).board.completedColumnId).toBeNull()
    const saved = JSON.parse(readFileSync(join(host.dir, ".dsh-kanban.json"), "utf8"))
    expect(saved.cards[0]).toMatchObject({ dueDate: "2026-10-21", createdBy: "human" })
    expect(saved.activities.at(-1)).toMatchObject({ type: "board_completed_column_changed", source: "human", to: null })
    await host.dispose()
    expect(removed).toBe(true)
  })

  it("rejects malformed, cross-origin and oversized requests without writing", async () => {
    let route
    const host = boot(undefined, { connection: { fetch: { register(value) { route = value } } } })
    const cases = [
      [request("", {}, "GET"), 405],
      [request("{}", { "content-type": "text/plain" }), 415],
      [request("{}", { "origin": "https://untrusted.example" }), 403],
      [request("{broken"), 400],
      [request("null"), 400],
      [request(JSON.stringify({ args: { workspaceId: "unknown" } })), 400],
      [request(" ".repeat(1024 * 1024 + 1)), 413],
    ]
    for (const [input, status] of cases) expect((await route.fetch(input)).status).toBe(status)
    expect(existsSync(join(host.dir, ".dsh-kanban.json"))).toBe(false)
    await host.dispose()
  })
})


describe("Cordis service lifecycle", () => {
  it("mounts a late Connection without a timer, remounts replacements, and disposes routes", async () => {
    const root = new Context()
    const registered = []
    const routes = new Map()
    const errors = []
    root.on("internal/error", (error) => errors.push(error))
    try {
      await root.plugin({ apply(ctx) { ctx.provide("tools", { register(tool) { registered.push(tool) } }) } })
      const fiber = root.plugin(plugin)
      await fiber
      expect(root.get("timer")).toBeUndefined()
      expect(registered).toHaveLength(16)
      expect(routes.size).toBe(0)
      const provideConnection = () => root.plugin({ apply(ctx) {
        ctx.provide("connection", { fetch: { register(route) {
          if (routes.has(route.path)) throw new Error("Duplicate route")
          routes.set(route.path, route)
          return () => routes.delete(route.path)
        } } })
      } })
      let provider = provideConnection()
      await provider
      expect(routes.has("/api/kanban")).toBe(true)
      expect((await routes.get("/api/kanban").fetch(new Request("http://localhost/api/kanban", {
        method: "POST", headers: { "content-type": "application/json" }, body: "{}",
      }))).status).toBe(400)
      await provider.dispose()
      expect(routes.size).toBe(0)
      provider = provideConnection()
      await provider
      expect(routes.has("/api/kanban")).toBe(true)
      await fiber.dispose()
      expect(routes.size).toBe(0)
      expect(errors).toEqual([])
    } finally {
      await root.fiber.dispose()
    }
  })

  it("runs startup checks when fs and workspaceRegistry become available later", async () => {
    const root = new Context()
    const reads = []
    try {
      await root.plugin({ apply(ctx) { ctx.provide("tools", { register() {} }) } })
      await root.plugin(plugin)
      await root.plugin({ apply(ctx) {
        ctx.provide("fs", {
          async resolve(path) { return path },
          async readText(path) { reads.push(path); throw Object.assign(new Error("ENOENT"), { code: "ENOENT" }) },
        })
        ctx.provide("workspaceRegistry", { list: () => [{ id: "startup-only", path: "/unused" }] })
      } })
      expect(reads).toEqual([".dsh-kanban.json"])
    } finally {
      await root.fiber.dispose()
    }
  })
})
