import { t } from "../src/client/lib/i18n"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"
import { CardDialog, type CardFormValues } from "../src/client/components/CardDialog"
import { ColumnDialog } from "../src/client/components/ColumnDialog"
import { KanbanView, placeCard } from "../src/client/KanbanView"
import { ChatDraftInjector } from "../src/client/components/ChatDraftInjector"
import { cardToChatText, consumeDraft } from "../src/client/lib/chat-bridge"

afterEach(() => vi.restoreAllMocks())

const labels = [{ name: "bug", color: "#f87171" }]
const activities = []

function cardValues(overrides: Partial<CardFormValues> = {}): CardFormValues {
  return { id: "", title: "", note: "", label: "", priority: "", ...overrides }
}

describe("DSH 0.1.5 workspace navigation", () => {
  it.each([false, true])("hands off a new-session draft, navigation failure: %s", async (fails) => {
    const user = userEvent.setup()
    const card = { id: "k1", columnId: "c1", title: "Upgrade DSH", note: "Check the new API", label: null, priority: null, createdAt: null, createdBy: null, comments: [] }
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ board: { columns: [{ id: "c1", title: "Todo" }], cards: [card], labels: [], activities: [] } }),
    } as Response)
    const openWorkspace = vi.fn(async (_id: string, beforeOpen: (id: string) => void) => {
      if (fails) throw new Error("Navigation failed")
      beforeOpen("next-session")
    })
    render(<KanbanView {...{
      sessionId: "current-session",
      useWorkspaces: (select: (state: unknown) => unknown) => select({ items: [{ workspaceId: "ws-1", sessionIds: ["current-session"] }] }),
      uiWorkspace: { openWorkspace },
    } as unknown as React.ComponentProps<typeof KanbanView>} />)

    await user.click(await screen.findByText(card.title))
    await user.click(screen.getByRole("button", { name: new RegExp(t("chatWithAgent")) }))
    await user.click(screen.getByRole("menuitem", { name: t("chatNewSession") }))
    expect(openWorkspace).toHaveBeenCalledWith("ws-1", expect.any(Function))
    expect(JSON.parse(String(fetchMock.mock.calls[0][1]?.body)).args.workspaceId).toBe("ws-1")

    if (fails) {
      expect(await screen.findByText(/Navigation failed/)).toBeTruthy()
      expect(consumeDraft("next-session")).toBeNull()
      return
    }
    const setDraft = vi.fn()
    const injectorProps = { sessionId: "current-session", inputActions: { setDraft } } as unknown as React.ComponentProps<typeof ChatDraftInjector>
    const injector = render(<ChatDraftInjector {...injectorProps} />)
    expect(setDraft).not.toHaveBeenCalled()
    injector.rerender(<ChatDraftInjector {...injectorProps} sessionId="next-session" />)
    await waitFor(() => expect(setDraft).toHaveBeenCalledExactlyOnceWith(cardToChatText({ ...card, label: "" })))
    expect(consumeDraft("next-session")).toBeNull()
  })
})

describe("board viewport height", () => {
  it("ignores a restored conversation scroll offset and reserves the composer", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ board: { columns: [{ id: "c1", title: "Todo" }], cards: [], labels: [], activities: [] } }),
    } as Response)
    const scrollport = document.createElement("div")
    scrollport.style.overflowY = "auto"
    scrollport.scrollTop = 3515
    const container = document.createElement("div")
    const composer = document.createElement("div")
    composer.setAttribute("data-composer-seat", "")
    Object.defineProperty(composer, "offsetHeight", { value: 100 })
    scrollport.append(container, composer)
    document.body.append(scrollport)
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function () {
      if (this.classList.contains("kanban-view")) return new DOMRect(0, 76 - scrollport.scrollTop, 1000, 624)
      if (this === composer) return new DOMRect(0, 700, 1000, 100)
      if (this === scrollport) return new DOMRect(0, 40, 1000, 760)
      return new DOMRect()
    })
    const observe = vi.spyOn(ResizeObserver.prototype, "observe")
    const view = render(<KanbanView {...{ sessionId: "height-fixture" } as React.ComponentProps<typeof KanbanView>} />, { container })
    try {
      await screen.findByText("Todo")
      const board = container.querySelector<HTMLElement>(".kanban-view")!
      expect(board.style.height).toBe("624px") // 700px composer top minus unscrolled 76px board top.
      expect(observe).toHaveBeenCalledWith(composer)
      scrollport.scrollTop = 0
      fireEvent(window, new Event("resize"))
      expect(board.style.height).toBe("624px")
    } finally {
      view.unmount()
      scrollport.remove()
    }
  })
})

describe("board label filter", () => {
  const makeBoard = () => ({
    columns: [{ id: "c1", title: "Todo" }, { id: "c2", title: "Done" }],
    labels: [...labels, { name: "feature", color: "#38bdf8" }, { name: "unused", color: "#888888" }],
    activities: [],
    cards: [
      { id: "a", columnId: "c1", title: "Urgent bug", label: "bug", priority: "high" },
      { id: "b", columnId: "c2", title: "Minor bug", label: "bug", priority: "low" },
      { id: "c", columnId: "c1", title: "Feature card", label: "feature", priority: "high" },
      { id: "d", columnId: "c1", title: "Unlabeled card", label: null, priority: null },
      { id: "e", columnId: "c2", title: "Legacy unlabeled card", priority: null },
    ].map((card) => ({ ...card, note: "", comments: [] })),
  })
  const props = { sessionId: "label-filter-fixture" } as React.ComponentProps<typeof KanbanView>
  const titles = () => Array.from(document.querySelectorAll(".kanban-card-title"), (node) => node.textContent)
  const selectLabel = async (user: ReturnType<typeof userEvent.setup>, name: string) => {
    await user.click(screen.getByRole("button", { name: t("labelFilter") }))
    await user.click(screen.getByRole("menuitemradio", { name, exact: true }))
  }

  it("filters across columns, combines priority, and clears each filter independently", async () => {
    const user = userEvent.setup()
    const board = makeBoard()
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true, json: async () => ({ board }),
    } as Response)
    render(<KanbanView {...props} />)
    await screen.findByText("Urgent bug")
    await selectLabel(user, "bug")
    expect(titles()).toEqual(["Urgent bug", "Minor bug"])
    const trigger = screen.getByRole("button", { name: t("labelFilter") })
    expect(trigger.className).toContain("kanban-button--secondary")
    await user.click(trigger)
    expect(screen.getByRole("menuitemradio", { name: "bug", checked: true })).toBeTruthy()
    await user.keyboard("{Escape}")
    expect(document.activeElement).toBe(trigger)

    await user.click(screen.getByRole("button", { name: t("priorityFilter") }))
    await user.click(screen.getByRole("menuitem", { name: "P0" }))
    expect(titles()).toEqual(["Urgent bug"])
    await selectLabel(user, t("all"))
    expect(titles()).toEqual(["Urgent bug", "Feature card"])
    await user.click(screen.getByRole("button", { name: t("priorityFilter") }))
    await user.click(screen.getByRole("menuitem", { name: t("all") }))
    expect(titles()).toHaveLength(5)

    await selectLabel(user, "unused")
    expect(titles()).toEqual([])
    expect(screen.getAllByText(t("emptyColumn"))).toHaveLength(2)
    await selectLabel(user, t("noLabel"))
    expect(titles()).toEqual(["Unlabeled card", "Legacy unlabeled card"])
    await selectLabel(user, t("all"))
    expect(titles()).toHaveLength(5)
    expect(fetchMock).toHaveBeenCalledTimes(1) // Filtering never writes to the board.
  })

  it("clears a stale label after refresh and works with an empty label list", async () => {
    const user = userEvent.setup()
    let board = makeBoard()
    vi.spyOn(globalThis, "fetch").mockImplementation(async () => ({
      ok: true, json: async () => ({ board }),
    } as Response))
    render(<KanbanView {...props} />)
    await screen.findByText("Urgent bug")
    await selectLabel(user, "bug")
    board = { ...board, labels: [] }
    await user.click(screen.getByRole("button", { name: t("refresh") }))
    await waitFor(() => expect(titles()).toHaveLength(5))
    await user.click(screen.getByRole("button", { name: t("labelFilter") }))
    expect(screen.getAllByRole("menuitemradio")).toHaveLength(2)
    expect(screen.getByRole("menuitemradio", { name: t("all"), checked: true })).toBeTruthy()
    await user.keyboard("{End}{Enter}")
    expect(titles()).toEqual(["Unlabeled card", "Legacy unlabeled card"])
  })

  it("resets label selection when switching workspaces", async () => {
    const user = userEvent.setup()
    const board = makeBoard()
    vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: true, json: async () => ({ board }) } as Response)
    let workspaceId = "ws-a"
    const workspaceProps = { ...props, useWorkspaces: (select: (state: unknown) => unknown) =>
      select({ items: [{ workspaceId, sessionIds: [props.sessionId] }] }),
    } as React.ComponentProps<typeof KanbanView>
    const view = render(<KanbanView {...workspaceProps} />)
    await screen.findByText("Urgent bug")
    await selectLabel(user, "bug")
    workspaceId = "ws-b"
    view.rerender(<KanbanView {...workspaceProps} />)
    await waitFor(() => expect(titles()).toHaveLength(5))
    expect(screen.getByRole("button", { name: t("labelFilter") }).className).toContain("kanban-button--ghost")
  })
})

describe("card drag placement", () => {
  const cards = [
    { id: "a", columnId: "c1", title: "A", note: "", label: null, priority: null, createdAt: null, createdBy: null, comments: [] },
    { id: "b", columnId: "c1", title: "B", note: "", label: null, priority: null, createdAt: null, createdBy: null, comments: [] },
    { id: "c", columnId: "c2", title: "C", note: "", label: null, priority: null, createdAt: null, createdBy: null, comments: [] },
    { id: "d", columnId: "c2", title: "D", note: "", label: null, priority: null, createdAt: null, createdBy: null, comments: [] },
  ]

  it("places a cross-column card before or after the hovered card", () => {
    const before = placeCard(cards, "a", "c2", "c", false)
    expect(before.cards.filter((card) => card.columnId === "c2").map((card) => card.id)).toEqual(["a", "c", "d"])
    expect(before.toIndex).toBe(0)

    const after = placeCard(before.cards, "a", "c2", "c", true)
    expect(after.cards.filter((card) => card.columnId === "c2").map((card) => card.id)).toEqual(["c", "a", "d"])
    expect(after.toIndex).toBe(1)
  })
})

describe("CardDialog user flows", () => {
  it("submits the edited fields and closes after save", async () => {
    const user = userEvent.setup()
    const onSave = vi.fn()
    const onOpenChange = vi.fn()
    render(
      <CardDialog
        open
        card={null}
        labels={labels}
        comments={[]}
        activities={activities}
        onOpenChange={onOpenChange}
        onSave={onSave}
        onAddComment={vi.fn()}
        onChatWithAgent={vi.fn()}
      />,
    )

    await user.type(screen.getByLabelText(t("fieldTitle")), "Release gate")
    await user.type(screen.getByLabelText(t("fieldNote")), "Build, typecheck, pack")
    await user.click(screen.getByRole("button", { name: t("save") }))

    expect(onSave).toHaveBeenCalledWith(cardValues({ title: "Release gate", note: "Build, typecheck, pack" }))
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it("sends the current-card action to the selected chat target", async () => {
    const user = userEvent.setup()
    const onChatWithAgent = vi.fn()
    const onOpenChange = vi.fn()
    render(
      <CardDialog
        open
        card={null}
        labels={labels}
        comments={[]}
        activities={activities}
        onOpenChange={onOpenChange}
        onSave={vi.fn()}
        onAddComment={vi.fn()}
        onChatWithAgent={onChatWithAgent}
      />,
    )

    await user.type(screen.getByLabelText(t("fieldNote")), "Investigate the failing build")
    await user.click(screen.getByRole("button", { name: new RegExp(t("chatWithAgent")) }))
    await user.click(screen.getByRole("menuitem", { name: t("chatCurrentSession") }))

    expect(onChatWithAgent).toHaveBeenCalledWith(
      cardValues({ note: "Investigate the failing build" }),
      "current",
    )
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it("renders and submits comments without closing the dialog", async () => {
    const user = userEvent.setup()
    const card = { id: "k1", columnId: "c1", title: "Discuss me", note: "", label: null, priority: null, createdAt: null, createdBy: null, comments: [] }
    const onAddComment = vi.fn().mockResolvedValue(true)
    const onOpenChange = vi.fn()
    render(
      <CardDialog
        open
        card={card}
        labels={labels}
        comments={[{ id: "m1", content: "Existing feedback", source: "agent", createdAt: "2026-08-30T12:00:00.000Z" }]}
        activities={activities}
        onOpenChange={onOpenChange}
        onSave={vi.fn()}
        onAddComment={onAddComment}
        onChatWithAgent={vi.fn()}
      />,
    )

    expect(screen.getByText("Existing feedback")).toBeTruthy()
    const send = screen.getByRole("button", { name: t("sendComment") }) as HTMLButtonElement
    expect(send.disabled).toBe(true)
    const input = screen.getByLabelText(new RegExp(t("commentsTitle"))) as HTMLTextAreaElement
    await user.type(input, "  Ready to merge  ")
    await user.click(send)

    expect(onAddComment).toHaveBeenCalledWith("k1", "Ready to merge")
    expect(input.value).toBe("")
    expect(onOpenChange).not.toHaveBeenCalled()
  })

  it("keeps a failed comment draft", async () => {
    const user = userEvent.setup()
    const card = { id: "k1", columnId: "c1", title: "Discuss me", note: "", label: null, priority: null, createdAt: null, createdBy: null, comments: [] }
    render(
      <CardDialog
        open
        card={card}
        labels={labels}
        comments={[]}
        activities={activities}
        onOpenChange={vi.fn()}
        onSave={vi.fn()}
        onAddComment={vi.fn().mockResolvedValue(false)}
        onChatWithAgent={vi.fn()}
      />,
    )

    const input = screen.getByLabelText(new RegExp(t("commentsTitle"))) as HTMLTextAreaElement
    await user.type(input, "Keep this draft")
    await user.click(screen.getByRole("button", { name: t("sendComment") }))
    expect(input.value).toBe("Keep this draft")
  })

  it("deletes an existing card and closes the dialog", async () => {
    const user = userEvent.setup()
    const card = { id: "k1", columnId: "c1", title: "Remove me", note: "", label: null, priority: null, createdAt: null, createdBy: null, comments: [] }
    const onDelete = vi.fn()
    const onOpenChange = vi.fn()
    render(
      <CardDialog
        open
        card={card}
        labels={labels}
        comments={[]}
        activities={activities}
        onOpenChange={onOpenChange}
        onSave={vi.fn()}
        onAddComment={vi.fn()}
        onDelete={onDelete}
        onChatWithAgent={vi.fn()}
      />,
    )

    await user.click(screen.getByRole("button", { name: t("delete") }))

    expect(onDelete).toHaveBeenCalledWith(card)
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })
})

describe("ColumnDialog user flows", () => {
  const columns = [
    { id: "c1", title: "Todo" },
    { id: "c2", title: "Done" },
  ]

  it("commits a rename, adds a list, and deletes a list", async () => {
    const user = userEvent.setup()
    const onRename = vi.fn()
    const onAdd = vi.fn()
    const onDelete = vi.fn()
    render(
      <ColumnDialog
        open
        columns={columns}
        onOpenChange={vi.fn()}
        onReorder={vi.fn()}
        onRename={onRename}
        onDelete={onDelete}
        onAdd={onAdd}
      />,
    )

    const firstColumn = screen.getByRole("textbox", { name: `${t("columnName")}: Todo` })
    await user.clear(firstColumn)
    await user.type(firstColumn, "Backlog")
    fireEvent.blur(firstColumn)
    await user.type(screen.getByPlaceholderText(t("newColumnPlaceholder")), "Blocked")
    await user.click(screen.getByRole("button", { name: new RegExp(t("add")) }))
    await user.click(screen.getByRole("button", { name: `${t("delete")}: Todo` }))

    expect(onRename).toHaveBeenCalledWith("c1", "Backlog")
    expect(onAdd).toHaveBeenCalledWith("Blocked")
    expect(onDelete).toHaveBeenCalledWith("c1")
  })
})
