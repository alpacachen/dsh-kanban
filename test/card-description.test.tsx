import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { CardDialog } from "../src/client/components/CardDialog"
import { t } from "../src/client/lib/i18n"
import type { Card } from "../src/client/lib/types"

const note = "# Release\n\n- [ ] Verify **both themes**\n\n```ts\nconst ok = true\n```\n"
const card: Card = {
  id: "k1", columnId: "todo", title: "Release", note, label: null,
  priority: null, comments: [], createdAt: null, createdBy: null,
}
const props = () => ({
  open: true, card, labels: [], comments: [], activities: [],
  onOpenChange: vi.fn(), onSave: vi.fn().mockResolvedValue(true),
  onAddComment: vi.fn(), onChatWithAgent: vi.fn(),
})

describe("Markdown description editing", () => {
  it("starts in preview and switches between the original source and preview without saving or losing whitespace", async () => {
    const user = userEvent.setup()
    const callbacks = props()
    render(<CardDialog {...callbacks} />)
    expect(screen.getByRole("region", { name: t("fieldNote") }).textContent).toBe(note)
    expect(screen.queryByRole("textbox", { name: t("fieldNote") })).toBeNull()
    await user.click(screen.getByRole("button", { name: t("editNote"), exact: true }))
    const source = screen.getByRole("textbox", { name: t("fieldNote") }) as HTMLTextAreaElement
    expect(source.value).toBe(note)
    const next = note + "\nA new paragraph.  \nNext line.\n"
    fireEvent.change(source, { target: { value: next } })
    await user.click(screen.getByRole("button", { name: t("finishEditingNote") }))
    expect(screen.getByRole("region", { name: t("fieldNote") }).textContent).toBe(next)
    expect(callbacks.onSave).not.toHaveBeenCalled()
    await user.click(screen.getByRole("button", { name: t("editNote"), exact: true }))
    expect((screen.getByRole("textbox", { name: t("fieldNote") }) as HTMLTextAreaElement).value).toBe(next)
    await user.click(screen.getByRole("button", { name: t("save"), exact: true }))
    expect(callbacks.onSave).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({ note: next }))
  })

  it("keeps a previewed draft through a failed save and asks before closing", async () => {
    const user = userEvent.setup()
    const callbacks = props()
    callbacks.onSave.mockResolvedValue(false)
    render(<CardDialog {...callbacks} />)
    await user.click(screen.getByRole("button", { name: t("editNote"), exact: true }))
    fireEvent.change(screen.getByRole("textbox", { name: t("fieldNote") }), { target: { value: "**Keep me**" } })
    await user.click(screen.getByRole("button", { name: t("finishEditingNote") }))
    await user.click(screen.getByRole("button", { name: t("save"), exact: true }))
    expect(screen.getByRole("region", { name: t("fieldNote") }).textContent).toBe("**Keep me**")
    await user.keyboard("{Escape}")
    expect(callbacks.onOpenChange).not.toHaveBeenCalled()
    await user.click(screen.getByRole("button", { name: t("cancel"), exact: true }))
    expect(screen.getByRole("region", { name: t("fieldNote") }).textContent).toBe("**Keep me**")
  })

  it("opens new cards in source mode and resets to the next card's preview", async () => {
    const user = userEvent.setup()
    const callbacks = props()
    const { rerender } = render(<CardDialog {...callbacks} card={null} />)
    expect(screen.getByRole("textbox", { name: t("fieldNote") })).toBeTruthy()
    await user.type(screen.getByRole("textbox", { name: t("fieldNote") }), "Draft")
    rerender(<CardDialog {...callbacks} />)
    expect(screen.queryByRole("textbox", { name: t("fieldNote") })).toBeNull()
    expect(screen.getByRole("region", { name: t("fieldNote") }).textContent).toBe(note)
  })
})
