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
    await user.click(screen.getByRole("button", { name: /与 agent 聊一聊/ }))
    await user.click(screen.getByRole("menuitem", { name: "新建对话" }))
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

    await user.type(screen.getByLabelText("标题"), "Release gate")
    await user.type(screen.getByLabelText("备注"), "Build, typecheck, pack")
    await user.click(screen.getByRole("button", { name: "保存" }))

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

    await user.type(screen.getByLabelText("备注"), "Investigate the failing build")
    await user.click(screen.getByRole("button", { name: /与 agent 聊一聊/ }))
    await user.click(screen.getByRole("menuitem", { name: "当前对话" }))

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
    const send = screen.getByRole("button", { name: "发送评论" }) as HTMLButtonElement
    expect(send.disabled).toBe(true)
    const input = screen.getByLabelText(/评论/) as HTMLTextAreaElement
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

    const input = screen.getByLabelText(/评论/) as HTMLTextAreaElement
    await user.type(input, "Keep this draft")
    await user.click(screen.getByRole("button", { name: "发送评论" }))
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

    await user.click(screen.getByRole("button", { name: "删除" }))

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

    const [firstColumn] = screen.getAllByRole("textbox")
    await user.clear(firstColumn)
    await user.type(firstColumn, "Backlog")
    fireEvent.blur(firstColumn)
    await user.type(screen.getByPlaceholderText("新列表名称"), "Blocked")
    await user.click(screen.getByRole("button", { name: /添加/ }))
    await user.click(screen.getAllByRole("button", { name: "删除" })[0])

    expect(onRename).toHaveBeenCalledWith("c1", "Backlog")
    expect(onAdd).toHaveBeenCalledWith("Blocked")
    expect(onDelete).toHaveBeenCalledWith("c1")
  })
})
