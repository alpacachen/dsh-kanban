import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"
import { KanbanView } from "../src/client/KanbanView"
import { KanbanCard } from "../src/client/components/SortableCard"
import { LabelDialog } from "../src/client/components/LabelDialog"
import { PRIORITY_META } from "../src/client/lib/constants"
import { t } from "../src/client/lib/i18n"
import type { Card } from "../src/client/lib/types"

const card: Card = {
  id: "keyboard-card", columnId: "todo", title: "Keyboard card", note: "",
  label: "Dark label", priority: "high", createdAt: null, createdBy: null, comments: [],
}
const labels = [{ name: "Dark label", color: "#000000" }]

afterEach(() => vi.restoreAllMocks())

function renderBoard() {
  vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    json: async () => ({ board: { columns: [{ id: "todo", title: "Todo" }], cards: [card], labels, activities: [] } }),
  } as Response)
  return render(<KanbanView {...{ sessionId: "test" } as React.ComponentProps<typeof KanbanView>} />)
}

describe("card keyboard and focus", () => {
  it("opens with Enter, focuses the title and restores the card after Escape", async () => {
    const user = userEvent.setup()
    renderBoard()
    const trigger = await screen.findByRole("button", { name: card.title })
    trigger.focus()
    expect(document.getElementById(trigger.getAttribute("aria-describedby")!)?.textContent).toBe(t("cardKeyboardHelp"))
    await user.keyboard("{Enter}")
    expect(screen.getByRole("dialog", { name: t("editCard") })).toBeTruthy()
    const title = screen.getByRole("textbox", { name: new RegExp(t("fieldTitle")) })
    await waitFor(() => expect(document.activeElement).toBe(title))
    expect(screen.getByRole("combobox", { name: t("fieldLabel") })).toBeTruthy()
    expect(screen.getByRole("combobox", { name: t("fieldPriority") })).toBeTruthy()
    await user.keyboard("{Escape}")
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull())
    await waitFor(() => expect(document.activeElement).toBe(trigger))
  })

  it.each([" ", "{Escape}"])("keeps Space for dragging and finishes with %s without opening the editor", async (finishKey) => {
    const user = userEvent.setup()
    renderBoard()
    const trigger = await screen.findByRole("button", { name: card.title })
    trigger.focus()
    await user.keyboard(" ")
    await waitFor(() => expect(trigger.getAttribute("aria-pressed")).toBe("true"))
    expect(screen.queryByRole("dialog")).toBeNull()
    await user.keyboard(finishKey)
    await waitFor(() => expect(trigger.classList.contains("is-dragging")).toBe(false))
    expect(trigger.getAttribute("aria-pressed")).not.toBe("true")
    expect(screen.queryByRole("dialog")).toBeNull()
  })
})

describe("theme-safe card badges", () => {
  it("keeps arbitrary label colors on dots rather than behind text", () => {
    render(<KanbanCard card={card} labels={labels} />)
    const labelBadge = screen.getByText("Dark label")
    expect(labelBadge.style.background).toBe("")
    expect(labelBadge.style.color).toBe("")
    const dot = labelBadge.querySelector<HTMLElement>(".kanban-label-dot")!
    expect(dot.style.background).toBe("rgb(0, 0, 0)")
    expect(dot.getAttribute("aria-hidden")).toBe("true")
    const priorityBadge = screen.getByText("P0")
    expect(priorityBadge.style.background).toBe("")
    expect(priorityBadge.style.color).toBe("")
    expect(priorityBadge.querySelector(".kanban-label-dot")?.getAttribute("style")).toContain(PRIORITY_META.high.color)
  })

  it("uses semantic error, warning and business colors for priority", () => {
    expect(PRIORITY_META.high.color).toBe("var(--dsw-alias-state-error-primary)")
    expect(PRIORITY_META.medium.color).toBe("var(--dsw-alias-state-warn-primary)")
    expect(PRIORITY_META.low.color).toBe("var(--dsw-alias-state-business-primary)")
  })
})

describe("label control names", () => {
  it("names existing/new colors, names and per-label deletion", async () => {
    const user = userEvent.setup()
    const onDelete = vi.fn()
    render(<LabelDialog open labels={labels} onOpenChange={vi.fn()} onAdd={vi.fn()} onUpdate={vi.fn()} onDelete={onDelete} />)
    expect(screen.getByLabelText(`${t("labelColor")}: Dark label`)).toBeTruthy()
    expect(screen.getByRole("textbox", { name: `${t("labelName")}: Dark label` })).toBeTruthy()
    expect(screen.getByLabelText(t("newLabelColor"))).toBeTruthy()
    expect(screen.getByRole("textbox", { name: t("newLabelPlaceholder") })).toBeTruthy()
    await user.click(screen.getByRole("button", { name: `${t("deleteLabel")}: Dark label` }))
    expect(onDelete).toHaveBeenCalledExactlyOnceWith("Dark label")
  })
})
