import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { CardDialog } from "../src/client/components/CardDialog"
import { ColumnDialog } from "../src/client/components/ColumnDialog"
import { LabelDialog } from "../src/client/components/LabelDialog"
import { t } from "../src/client/lib/i18n"
import type { Card } from "../src/client/lib/types"

const card: Card = {
  id: "card-1", columnId: "todo", title: "Review this", note: "Existing note",
  label: null, priority: null, dueDate: null, comments: [], createdAt: null, createdBy: null,
}
const cardProps = () => ({
  open: true, card, labels: [], comments: [], activities: [],
  onOpenChange: vi.fn(), onSave: vi.fn().mockResolvedValue(true),
  onAddComment: vi.fn().mockResolvedValue(true), onDelete: vi.fn().mockResolvedValue(true),
  onChatWithAgent: vi.fn(),
})

function deferred() {
  let resolve!: (value: boolean) => void
  let reject!: (reason: Error) => void
  const promise = new Promise<boolean>((yes, no) => { resolve = yes; reject = no })
  return { promise, resolve, reject }
}

describe("dialog draft safety", () => {
  it("keeps a failed save, shows the error inside the dialog, and blocks duplicate saves or close while pending", async () => {
    const user = userEvent.setup()
    const pending = deferred()
    const props = cardProps()
    props.onSave.mockReturnValueOnce(pending.promise)
    render(<CardDialog {...props} />)
    const title = screen.getByLabelText(t("fieldTitle")) as HTMLInputElement
    await user.clear(title)
    await user.type(title, "Unsaved title")
    const save = screen.getByRole("button", { name: t("save") })
    await user.click(save)
    fireEvent.click(save)
    await user.keyboard("{Escape}")
    expect(props.onSave).toHaveBeenCalledTimes(1)
    expect(props.onOpenChange).not.toHaveBeenCalled()
    await act(async () => pending.reject(new Error("Offline")))
    const error = await screen.findByRole("alert")
    expect(error.textContent).toContain("Offline")
    expect(screen.getByRole("dialog").contains(error)).toBe(true)
    expect(title.value).toBe("Unsaved title")
    await user.click(save)
    await waitFor(() => expect(props.onOpenChange).toHaveBeenCalledWith(false))
  })

  it.each(["fieldTitle", "fieldNote", "commentsTitle"])("asks before closing a draft in %s, and Cancel preserves it", async (field) => {
    const user = userEvent.setup()
    const props = cardProps()
    render(<CardDialog {...props} />)
    if (field === "fieldNote") await user.click(screen.getByRole("button", { name: t("editNote"), exact: true }))
    const input = screen.getByLabelText(new RegExp(t(field))) as HTMLInputElement
    await user.type(input, " Keep me")
    const value = input.value
    await user.keyboard("{Escape}")
    expect(props.onOpenChange).not.toHaveBeenCalled()
    await user.click(screen.getByRole("button", { name: t("cancel") }))
    expect(input.value).toBe(value)
    await user.click(screen.getByRole("button", { name: t("close") }))
    await user.click(screen.getByRole("button", { name: t("discardChanges") }))
    expect(props.onOpenChange).toHaveBeenCalledExactlyOnceWith(false)
  })

  it("requires explicit card deletion confirmation, preserves a failed delete, and lets the user cancel", async () => {
    const user = userEvent.setup()
    const props = cardProps()
    props.onDelete.mockResolvedValue(false)
    render(<CardDialog {...props} />)
    await user.click(screen.getByRole("button", { name: t("delete") }))
    expect(props.onDelete).not.toHaveBeenCalled()
    await user.click(screen.getByRole("button", { name: t("cancel") }))
    expect(props.onDelete).not.toHaveBeenCalled()
    await user.click(screen.getByRole("button", { name: t("delete") }))
    await user.click(screen.getByRole("button", { name: t("confirmDelete") }))
    expect(props.onDelete).toHaveBeenCalledExactlyOnceWith(card)
    expect(props.onOpenChange).not.toHaveBeenCalled()
    expect(screen.getByText(t("actionRetry"))).toBeTruthy()
    await user.keyboard("{Escape}")
    expect(screen.queryByRole("button", { name: t("confirmDelete") })).toBeNull()
    expect(props.onOpenChange).not.toHaveBeenCalled()
  })

  it("asks before chat navigation would discard an unsent comment", async () => {
    const user = userEvent.setup()
    const props = cardProps()
    render(<CardDialog {...props} />)
    await user.type(screen.getByLabelText(new RegExp(t("commentsTitle"))), "Keep this comment")
    await user.click(screen.getByRole("button", { name: t("chatWithAgent") }))
    await user.click(screen.getByRole("menuitem", { name: t("chatNewSession") }))
    expect(props.onChatWithAgent).not.toHaveBeenCalled()
    expect(props.onOpenChange).not.toHaveBeenCalled()
    expect(screen.getByText(t("discardCommentDesc"))).toBeTruthy()
    await user.click(screen.getByRole("button", { name: t("discardAndContinue") }))
    expect(props.onChatWithAgent).toHaveBeenCalledWith(expect.objectContaining({ title: card.title }), "new")
    expect(props.onOpenChange).toHaveBeenCalledExactlyOnceWith(false)
  })

  it("saves fields without losing an unsent comment and prevents duplicate comment submission", async () => {
    const user = userEvent.setup()
    const pending = deferred()
    const props = cardProps()
    props.onAddComment.mockReturnValueOnce(pending.promise)
    render(<CardDialog {...props} />)
    const input = screen.getByLabelText(new RegExp(t("commentsTitle"))) as HTMLTextAreaElement
    await user.type(input, "Pending comment")
    await user.click(screen.getByRole("button", { name: t("save") }))
    expect(props.onSave).toHaveBeenCalledTimes(1)
    expect(props.onOpenChange).not.toHaveBeenCalled()
    expect(input.value).toBe("Pending comment")
    const send = screen.getByRole("button", { name: t("sendComment") })
    await user.click(send)
    fireEvent.click(send)
    expect(props.onAddComment).toHaveBeenCalledExactlyOnceWith(card.id, "Pending comment")
    await act(async () => pending.resolve(false))
    expect(input.value).toBe("Pending comment")
    await user.click(send)
    await waitFor(() => expect(input.value).toBe(""))
    await user.keyboard("{Escape}")
    expect(props.onOpenChange).toHaveBeenCalledExactlyOnceWith(false)
  })
})

describe.each(["columns", "labels"])("%s editor", (kind) => {
  const mount = (onAdd: ReturnType<typeof vi.fn>, onDelete = vi.fn().mockResolvedValue(true)) => {
    const onOpenChange = vi.fn()
    if (kind === "columns") {
      render(<ColumnDialog open completedColumnId={null} onSetCompletedColumn={vi.fn()} columns={[{ id: "todo", title: "Todo" }, { id: "done", title: "Done" }]} onOpenChange={onOpenChange} onReorder={vi.fn()} onRename={vi.fn()} onDelete={onDelete} onAdd={onAdd} />)
    } else {
      render(<LabelDialog open labels={[{ name: "Bug", color: "#ff0000" }]} onOpenChange={onOpenChange} onUpdate={vi.fn()} onDelete={onDelete} onAdd={onAdd} />)
    }
    return onOpenChange
  }

  it("keeps pending and failed add input, then clears only after success", async () => {
    const user = userEvent.setup()
    const pending = deferred()
    const onAdd = vi.fn().mockReturnValueOnce(pending.promise).mockResolvedValue(true)
    const onOpenChange = mount(onAdd)
    const input = screen.getByPlaceholderText(t(kind === "columns" ? "newColumnPlaceholder" : "newLabelPlaceholder")) as HTMLInputElement
    await user.type(input, "Follow up")
    const add = screen.getByRole("button", { name: t("add"), exact: true })
    await user.click(add)
    fireEvent.click(add)
    await user.keyboard("{Escape}")
    expect(onAdd).toHaveBeenCalledTimes(1)
    expect(onOpenChange).not.toHaveBeenCalled()
    expect(input.value).toBe("Follow up")
    await act(async () => pending.resolve(false))
    expect(input.value).toBe("Follow up")
    expect(screen.getByText(t("actionRetry"))).toBeTruthy()
    await user.click(add)
    await waitFor(() => expect(input.value).toBe(""))
    expect(screen.queryByText(t("actionRetry"))).toBeNull()
  })

  it("describes the deletion effect and allows cancel before a mutation", async () => {
    const user = userEvent.setup()
    const onDelete = vi.fn().mockResolvedValue(true)
    mount(vi.fn(), onDelete)
    await user.click(screen.getByRole("button", { name: kind === "columns" ? `${t("delete")}: Todo` : `${t("deleteLabel")}: Bug` }))
    expect(onDelete).not.toHaveBeenCalled()
    const description = t(kind === "columns" ? "deleteColumnDesc" : "deleteLabelDesc")
      .replace("{column}", "Todo").replace("{label}", "Bug")
    expect(screen.getByRole("alert").textContent).toBe(description)
    expect(document.activeElement).toBe(screen.getByRole("button", { name: t("cancel") }))
    await user.click(screen.getByRole("button", { name: t("cancel") }))
    expect(onDelete).not.toHaveBeenCalled()
  })
})
