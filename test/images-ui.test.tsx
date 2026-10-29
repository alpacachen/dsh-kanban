import React from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { act, fireEvent, render, screen, within, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { KanbanView } from "../src/client/KanbanView"
import { CardDialog } from "../src/client/components/CardDialog"
import { t } from "../src/client/lib/i18n"
import type { Board, Card, ImageRef } from "../src/client/lib/types"

const image: ImageRef = { attachmentId: `sha256:${"a".repeat(64)}`, mediaType: "image/png", bytes: 8, width: 640, height: 400 }
const limits = { maxImageBytes: 10485760, maxImagesPerCard: 10, mediaTypes: ["image/png", "image/jpeg", "image/webp"] }
const card = (id: string, fields: Partial<Card> = {}): Card => ({
  id, title: id, columnId: "todo", note: "", label: null, priority: null, dueDate: null, completedAt: null,
  createdAt: null, createdBy: null, comments: [], images: [], ...fields,
})
const board = (cards: Card[] = []): Board => ({ completedColumnId: "done", columns: [{ id: "todo", title: "Todo" }, { id: "done", title: "Done" }], labels: [], cards, activities: [] })
const props = { sessionId: "image-test" } as React.ComponentProps<typeof KanbanView>
const reply = (json: unknown, ok = true) => ({ ok, status: ok ? 200 : 500, json: async () => json } as Response)

beforeEach(() => {
  vi.spyOn(URL, "createObjectURL").mockReturnValue("blob:kanban-test-image")
  vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => {})
})
afterEach(() => vi.restoreAllMocks())

describe("board text search", () => {
  it("searches descriptions and comments, combines filters, and resets on workspace changes", async () => {
    const user = userEvent.setup()
    const value = board([
      card("first", { title: "First task", note: "登录异常", priority: "high" }),
      card("second", { title: "Second task", priority: "low", comments: [{ id: "m1", content: "登录异常 happens on Safari", source: "human", createdAt: "2026-10-28T00:00:00.000Z" }] }),
      card("third", { title: "Different task" }),
    ])
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(reply({ board: value, imageLimits: limits }))
    let workspaceId = "ws-a"
    const mappedProps = { ...props, useWorkspaces: (select: (s: unknown) => unknown) => select({ items: [{ workspaceId, sessionIds: [props.sessionId] }] }) } as React.ComponentProps<typeof KanbanView>
    const view = render(<KanbanView {...mappedProps} />)
    await screen.findByText("First task")
    const search = screen.getByRole("searchbox", { name: t("searchCards") })
    fireEvent.change(search, { target: { value: " 登录异常 " } })
    expect(screen.queryByText("Different task")).toBeNull()
    expect(screen.getByText(/Safari/)).toBeTruthy()
    expect(screen.getByText("2 / 3")).toBeTruthy()
    await user.click(screen.getByRole("button", { name: t("priorityFilter") }))
    await user.click(screen.getByRole("menuitemradio", { name: "P0" }))
    expect(screen.queryByText("Second task")).toBeNull()
    fireEvent.change(search, { target: { value: "missing" } })
    expect(screen.getAllByText(t("noMatchingCards"))).toHaveLength(2)
    await user.click(screen.getByRole("button", { name: t("clearSearch") }))
    expect(screen.getByText("First task")).toBeTruthy()
    workspaceId = "ws-b"
    view.rerender(<KanbanView {...mappedProps} />)
    await screen.findByText("Different task")
    expect((screen.getByRole("searchbox") as HTMLInputElement).value).toBe("")
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })
})

describe("card images", () => {
  it("resets queued files when the caller opens a different card", async () => {
    const user = userEvent.setup()
    const onUploadImage = vi.fn()
    const dialogProps = {
      open: true, completed: false, completedAt: null, labels: [], comments: [], activities: [],
      imageLimits: limits, onOpenChange: vi.fn(), onSave: vi.fn(), onAddComment: vi.fn(), onChatWithAgent: vi.fn(), onUploadImage,
    }
    const view = render(<CardDialog {...dialogProps} card={null} />)
    await user.type(screen.getByLabelText(t("fieldTitle")), "Unsaved task")
    await user.upload(screen.getByLabelText(t("addImages"), { selector: "input" }), new File(["draft"], "queued.png", { type: "image/png" }))
    expect(screen.getByText("queued.png")).toBeTruthy()
    view.rerender(<CardDialog {...dialogProps} card={card("other", { title: "Other task", note: "Other description" })} />)
    expect((screen.getByLabelText(t("fieldTitle")) as HTMLInputElement).value).toBe("Other task")
    expect(screen.getByRole("region", { name: t("fieldNote") }).textContent).toBe("Other description")
    expect(screen.queryByText("queued.png")).toBeNull()
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:kanban-test-image")
    expect(onUploadImage).not.toHaveBeenCalled()
  })

  it("does not recreate an edited card that disappeared from the board", async () => {
    const user = userEvent.setup()
    const value = board([card("deleted", { title: "Soon deleted" })])
    let finishRefresh!: (response: Response) => void
    const fetchMock = vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(reply({ board: value, imageLimits: limits }))
      .mockImplementationOnce(() => new Promise<Response>((resolve) => { finishRefresh = resolve }))
    render(<KanbanView {...props} />)
    await user.click(await screen.findByRole("button", { name: t("settings") }))
    await user.click(screen.getByRole("menuitem", { name: t("refresh") }))
    await user.click(screen.getByRole("button", { name: "Soon deleted", exact: true }))
    await user.type(screen.getByLabelText(t("fieldTitle")), " edited")
    value.cards = []
    await act(async () => finishRefresh(reply({ board: value, imageLimits: limits })))
    await waitFor(() => expect(document.querySelectorAll(".kanban-card-title")).toHaveLength(0))
    await user.click(screen.getByRole("button", { name: t("save"), exact: true }))
    await screen.findByText(new RegExp(t("cardNoLongerExists")))
    expect(fetchMock.mock.calls.map(([, init]) => JSON.parse(String(init?.body)).method)).toEqual(["get", "get"])
    expect(screen.getByRole("dialog")).toBeTruthy()
  })

  it("creates the card once, preserves successful images, and retries only the failed upload", async () => {
    const user = userEvent.setup()
    const value = board()
    const uploads: File[] = []
    let createCount = 0
    let fail = true
    vi.spyOn(globalThis, "fetch").mockImplementation(async (url, init) => {
      if (String(url).startsWith("/api/kanban/image")) {
        const file = init!.body as File
        uploads.push(file)
        if (file.name === "second.png" && fail) { fail = false; return reply({ error: "Temporary upload error" }, false) }
        value.cards[0].images.push({ ...image, attachmentId: file.name === "first.png" ? image.attachmentId : `sha256:${"b".repeat(64)}` })
        return reply({ board: value, persisted: true })
      }
      const { method, args } = JSON.parse(String(init?.body))
      if (method === "addCard") { createCount++; value.cards.push(card("created", { ...args })) }
      return reply({ board: value, imageLimits: limits, cardId: method === "addCard" ? "created" : undefined })
    })
    render(<KanbanView {...props} />)
    await user.click((await screen.findAllByRole("button", { name: new RegExp(t("addCard")) }))[0])
    await user.type(screen.getByLabelText(t("fieldTitle")), "Screenshot task")
    const files = [new File(["first"], "first.png", { type: "image/png" }), new File(["second"], "second.png", { type: "image/png" })]
    await user.upload(screen.getByLabelText(t("addImages"), { selector: "input" }), files)
    expect(uploads).toHaveLength(0)
    expect(screen.getAllByText(t("imagePending"))).toHaveLength(2)
    await user.click(screen.getByRole("button", { name: t("save"), exact: true }))
    await screen.findByText(t("imageUploadPartial"))
    expect(createCount).toBe(1)
    expect(value.cards[0].images).toHaveLength(1)
    expect(uploads.map((file) => file.name)).toEqual(["first.png", "second.png"])
    expect(screen.getByRole("dialog")).toBeTruthy()
    await user.click(screen.getByRole("button", { name: t("retry"), exact: true }))
    await waitFor(() => expect(value.cards[0].images).toHaveLength(2))
    expect(uploads.map((file) => file.name)).toEqual(["first.png", "second.png", "second.png"])
    expect(createCount).toBe(1)
    expect(screen.queryByText("second.png")).toBeNull()
  })

  it("preserves text drafts while adding/removing images and previews the saved image", async () => {
    const user = userEvent.setup()
    const value = board([card("existing", { title: "Existing task", images: [image] })])
    const writes: string[] = []
    vi.spyOn(globalThis, "fetch").mockImplementation(async (_url, init) => {
      const { method, args } = JSON.parse(String(init?.body))
      if (method === "removeImage") { writes.push(method); value.cards[0].images = value.cards[0].images.filter((item) => item.attachmentId !== args.attachmentId) }
      return reply({ board: value, imageLimits: limits })
    })
    render(<KanbanView {...props} />)
    expect(await screen.findByLabelText(`${t("images")}: 1`)).toBeTruthy()
    await user.click(screen.getByRole("button", { name: "Existing task", exact: true }))
    const title = screen.getByLabelText(t("fieldTitle")) as HTMLInputElement
    await user.type(title, " unsaved")
    const thumbnail = screen.getByAltText(t("imagePreview").replace("{number}", "1"))
    fireEvent.load(thumbnail)
    await user.click(screen.getByRole("button", { name: t("imagePreview").replace("{number}", "1") }))
    expect(screen.getByRole("dialog", { name: t("images"), exact: true })).toBeTruthy()
    await user.click(within(screen.getByRole("dialog", { name: t("images"), exact: true })).getByRole("button", { name: t("close") }))
    expect(screen.getByRole("dialog").className).toContain("kanban-drawer-content")
    expect(title.value).toBe("Existing task unsaved")
    await user.click(screen.getByRole("button", { name: t("imageRemove").replace("{number}", "1") }))
    await waitFor(() => expect(value.cards[0].images).toHaveLength(0))
    expect(title.value).toBe("Existing task unsaved")
    expect(writes).toEqual(["removeImage"])
  })

  it("keeps image loading failures recoverable and rejects oversized uploads before sending", async () => {
    const user = userEvent.setup()
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(reply({ board: board([card("existing", { images: [image] })]), imageLimits: { ...limits, maxImageBytes: 5 } }))
    render(<KanbanView {...props} />)
    await user.click(await screen.findByRole("button", { name: "existing", exact: true }))
    const img = screen.getByAltText(t("imagePreview").replace("{number}", "1"))
    fireEvent.error(img)
    expect(screen.getByText(t("imageLoadFailed"))).toBeTruthy()
    await user.click(screen.getByRole("button", { name: t("retry"), exact: true }))
    expect(screen.getByAltText(t("imagePreview").replace("{number}", "1")).getAttribute("src")).toContain("retry=1")
    await user.upload(screen.getByLabelText(t("addImages"), { selector: "input" }), new File(["too big"], "large.png", { type: "image/png" }))
    expect(screen.getByRole("alert").textContent).toContain("MiB")
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it("does not upload canceled new-card images and releases their preview URLs", async () => {
    const user = userEvent.setup()
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(reply({ board: board(), imageLimits: limits }))
    render(<KanbanView {...props} />)
    await user.click((await screen.findAllByRole("button", { name: new RegExp(t("addCard")) }))[0])
    fireEvent.paste(screen.getByLabelText(t("fieldTitle")), { clipboardData: { files: [new File(["png"], "paste.png", { type: "image/png" })] } })
    await screen.findByText("paste.png")
    await user.click(screen.getByRole("button", { name: t("close"), exact: true }))
    await user.click(screen.getByRole("button", { name: t("discardChanges"), exact: true }))
    expect(screen.queryByRole("dialog")).toBeNull()
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:kanban-test-image")
  })
})
