import { act, fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"
import { KanbanView } from "../src/client/KanbanView"
import { CardDialog } from "../src/client/components/CardDialog"
import { ColumnDialog } from "../src/client/components/ColumnDialog"
import { KanbanCard } from "../src/client/components/SortableCard"
import { dateLabel, localDate, matchesDueDate, overdueDays, useLocalDate } from "../src/client/lib/due-date"
import { cardToChatText } from "../src/client/lib/chat-bridge"
import { describeActivity, formatTime } from "../src/client/lib/activity"
import { t } from "../src/client/lib/i18n"
import type { Board, Card } from "../src/client/lib/types"

const card: Card = { id: "k1", columnId: "todo", title: "Payment integration", note: "", priority: "high", label: "release", dueDate: "2026-10-21", comments: [], completedAt: null, createdAt: null, createdBy: null }
const props = { sessionId: "deadline-fixture" } as React.ComponentProps<typeof KanbanView>
const dialogProps = () => ({ open: true, card, labels: [], comments: [], activities: [], onOpenChange: vi.fn(), onSave: vi.fn().mockResolvedValue(true), onAddComment: vi.fn(), onChatWithAgent: vi.fn() })
const titles = () => Array.from(document.querySelectorAll(".kanban-card-title"), (node) => node.textContent)

afterEach(() => { vi.useRealTimers(); vi.restoreAllMocks() })

describe("calendar dates", () => {
  it("uses the local day and handles leap dates, year boundaries and daylight-saving transitions", () => {
    expect(localDate(new Date(2026, 9, 21, 0, 15))).toBe("2026-10-21")
    expect(localDate(new Date(2026, 11, 31), 1)).toBe("2027-01-01")
    expect(localDate(new Date(2028, 1, 28), 1)).toBe("2028-02-29")
    expect(overdueDays("2026-03-07", "2026-03-09")).toBe(2)
    expect(overdueDays("2026-10-31", "2026-11-02")).toBe(2)
    expect(overdueDays("2028-02-28", "2028-03-01")).toBe(2)
    expect(dateLabel("2027-01-02", "2026-12-30", t)).toContain("2027")
  })

  it("excludes completed and undated tasks from due filters, and restores reopened tasks", () => {
    expect(matchesDueDate(card, "today", "done", "2026-10-21")).toBe(true)
    expect(matchesDueDate(card, "overdue", "done", "2026-10-21")).toBe(false)
    expect(matchesDueDate(card, "overdue", "done", "2026-10-22")).toBe(true)
    expect(matchesDueDate({ ...card, columnId: "done" }, "overdue", "done", "2026-10-22")).toBe(false)
    expect(matchesDueDate({ ...card, dueDate: null }, "overdue", null, "2026-10-22")).toBe(false)
    expect(matchesDueDate({ ...card, columnId: "done" }, "", "done", "2026-10-22")).toBe(true)
  })

  it("refreshes at local midnight and after the window resumes", () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 9, 21, 23, 59, 59))
    const view = renderHook(() => useLocalDate())
    expect(view.result.current).toBe("2026-10-21")
    act(() => vi.advanceTimersByTime(1200))
    expect(view.result.current).toBe("2026-10-22")
    vi.setSystemTime(new Date(2026, 9, 24, 9))
    act(() => window.dispatchEvent(new Event("focus")))
    expect(view.result.current).toBe("2026-10-24")
    vi.setSystemTime(new Date(2026, 9, 25, 9))
    act(() => document.dispatchEvent(new Event("visibilitychange")))
    expect(view.result.current).toBe("2026-10-25")
    view.unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})

describe("deadline presentation and drafts", () => {
  it("shows today/overdue status, a full-date tooltip, and a muted date after completion", () => {
    const view = render(<KanbanCard card={card} labels={[]} today="2026-10-21" />)
    expect(screen.getByText(t("dueToday"))).toBeTruthy()
    expect(screen.getByTitle(`${t("fieldDueDate")}: 2026-10-21`).className).toContain("is-today")
    view.rerender(<KanbanCard card={card} labels={[]} today="2026-10-23" />)
    expect(screen.getByText(t("overdueDays").replace("{days}", "2"))).toBeTruthy()
    view.rerender(<KanbanCard card={card} labels={[]} today="2026-10-23" completed />)
    expect(document.querySelector(".kanban-card-due-date")?.className).toContain("is-completed")
    expect(screen.queryByText(t("overdueDays").replace("{days}", "2"))).toBeNull()
  })

  it("shows a read-only local completion time, unknown legacy completion, and a dash after reopening", async () => {
    const callbacks = dialogProps()
    const completedAt = "2026-10-27T06:30:00.000Z"
    const view = render(<CardDialog {...callbacks} completed={false} completedAt={null} />)
    const value = () => screen.getByLabelText(t("fieldCompletedDate"))
    expect(value().textContent).toBe("—")
    view.rerender(<CardDialog {...callbacks} completed completedAt={completedAt} />)
    expect(value().textContent).toBe(formatTime(completedAt))
    expect(screen.queryByRole("textbox", { name: t("fieldCompletedDate") })).toBeNull()
    await userEvent.setup().click(screen.getByRole("button", { name: t("save"), exact: true }))
    expect(callbacks.onSave.mock.calls[0][0]).not.toHaveProperty("completedAt")
    fireEvent.change(screen.getByLabelText(t("fieldTitle")), { target: { value: "Unsaved draft" } })
    view.rerender(<CardDialog {...callbacks} completed completedAt={null} />)
    expect((screen.getByLabelText(t("fieldTitle")) as HTMLInputElement).value).toBe("Unsaved draft")
    view.rerender(<CardDialog {...callbacks} completed completedAt={null} />)
    expect(value().textContent).toBe(t("completedDateUnknown"))
    expect(document.getElementById(value().getAttribute("aria-describedby")!)?.textContent).toBe(t("completedDateUnknownHint"))
    view.rerender(<CardDialog {...callbacks} completed={false} completedAt={null} />)
    expect(value().textContent).toBe("—")
    expect(screen.queryByText(t("completedDateUnknownHint"))).toBeNull()
    view.rerender(<CardDialog {...callbacks} completed={false} completedAt={null} card={null} />)
    expect(screen.queryByLabelText(t("fieldCompletedDate"))).toBeNull()
    expect(cardToChatText({ ...card, label: "release", completed: true, completedAt })).toContain(completedAt)
    expect(cardToChatText({ ...card, label: "release", completed: true })).toContain(t("completedDateUnknown"))
  })

  it("keeps failed date changes, protects them on close, and supports quick dates and clearing", async () => {
    const user = userEvent.setup()
    const callbacks = dialogProps()
    callbacks.onSave.mockResolvedValue(false)
    render(<CardDialog completed={false} completedAt={null} {...callbacks} />)
    const input = screen.getByLabelText(t("fieldDueDate")) as HTMLInputElement
    await user.click(screen.getByRole("button", { name: t("tomorrow"), exact: true }))
    expect(input.value).toBe(localDate(new Date(), 1))
    await user.click(screen.getByRole("button", { name: t("nextWeek"), exact: true }))
    expect(input.value).toBe(localDate(new Date(), 7))
    fireEvent.change(input, { target: { value: "2027-01-15" } })
    await user.click(screen.getByRole("button", { name: t("save"), exact: true }))
    expect(callbacks.onSave).toHaveBeenCalledWith(expect.objectContaining({ dueDate: "2027-01-15" }))
    expect(input.value).toBe("2027-01-15")
    await user.keyboard("{Escape}")
    expect(callbacks.onOpenChange).not.toHaveBeenCalled()
    await user.click(screen.getByRole("button", { name: t("cancel"), exact: true }))
    await user.click(screen.getByRole("button", { name: t("clearDate"), exact: true }))
    expect(input.value).toBe("")
    callbacks.onSave.mockResolvedValue(true)
    await user.click(screen.getByRole("button", { name: t("save"), exact: true }))
    expect(callbacks.onSave).toHaveBeenLastCalledWith(expect.objectContaining({ dueDate: "" }))
  })

  it("refuses to save a date outside the supported four-digit year range", async () => {
    const user = userEvent.setup()
    const callbacks = dialogProps()
    render(<CardDialog completed={false} completedAt={null} {...callbacks} />)
    const input = screen.getByLabelText(t("fieldDueDate")) as HTMLInputElement
    fireEvent.change(input, { target: { value: "10000-01-01" } })
    expect(input.validity.rangeOverflow).toBe(true)
    await user.click(screen.getByRole("button", { name: t("save"), exact: true }))
    expect(callbacks.onSave).not.toHaveBeenCalled()
    expect(callbacks.onOpenChange).not.toHaveBeenCalled()
  })

  it("includes due dates and completion in agent context and formats date activity", () => {
    expect(cardToChatText({ ...card, label: "release", completed: true })).toContain(`${t("fieldDueDate")}: 2026-10-21`)
    expect(cardToChatText({ ...card, label: "release", completed: true })).toContain(`${t("completionStatus")}: ${t("completed")}`)
    expect(describeActivity({ id: "a1", ts: "", cardId: card.id, source: "human", type: "card_due_date_changed", from: "2026-10-21", to: null }, t)).toContain(`2026-10-21 → ${t("noValue")}`)
  })
})

describe("board deadline controls", () => {
  it("combines date, label and priority filters; completed tasks stay excluded and clearing restores cards", async () => {
    const user = userEvent.setup()
    const today = localDate()
    const board: Board = {
      completedColumnId: "done", columns: [{ id: "todo", title: "Todo" }, { id: "done", title: "Shipped" }],
      labels: [{ name: "release", color: "#888888" }], activities: [],
      cards: [
        { ...card, dueDate: today },
        { ...card, id: "k2", title: "Minor", dueDate: today, priority: "low" },
        { ...card, id: "k3", title: "No label", dueDate: today, label: null },
        { ...card, id: "k4", title: "Finished", dueDate: today, columnId: "done" },
        { ...card, id: "k5", title: "Overdue task", dueDate: localDate(new Date(), -1) },
        { ...card, id: "k6", title: "Unscheduled", dueDate: null },
      ],
    }
    vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: true, json: async () => ({ board }) } as Response)
    render(<KanbanView {...props} />)
    const cardButton = await screen.findByRole("button", { name: card.title })
    expect(document.getElementById(cardButton.getAttribute("aria-describedby")!)?.textContent).toContain(`${t("fieldDueDate")}: ${today}`)
    const select = async (trigger: string, option: string) => {
      await user.click(screen.getByRole("button", { name: t(trigger) }))
      await user.click(screen.getByRole("menuitemradio", { name: option, exact: true }))
    }
    await select("dueDateFilter", t("dueToday"))
    expect(titles()).toEqual([card.title, "Minor", "No label"])
    await select("labelFilter", "release")
    await select("priorityFilter", "P0")
    expect(titles()).toEqual([card.title])
    await select("dueDateFilter", t("overdue"))
    expect(titles()).toEqual(["Overdue task"])
    await user.click(screen.getByRole("button", { name: `${t("clearFilter")}: ${t("overdue")}` }))
    expect(titles()).toEqual([card.title, "Overdue task", "Unscheduled", "Finished"])
    const feedback = screen.getByRole("link", { name: t("feedback") })
    expect(feedback.getAttribute("href")).toBe("https://github.com/alpacachen/dsh-kanban/issues/new/choose")
    expect(feedback.getAttribute("target")).toBe("_blank")
    expect(feedback.getAttribute("rel")).toContain("noopener")
    expect(feedback.closest(".kanban-toolbar")?.lastElementChild?.contains(feedback)).toBe(true)
  })

  it("sends an explicit null when clearing an existing deadline", async () => {
    const user = userEvent.setup()
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: true, json: async () => ({ board: { completedColumnId: null, columns: [{ id: "todo", title: "Todo" }], cards: [card], labels: [], activities: [] } }) } as Response)
    render(<KanbanView {...props} />)
    await user.click(await screen.findByRole("button", { name: card.title }))
    await user.click(screen.getByRole("button", { name: t("clearDate") }))
    await user.click(screen.getByRole("button", { name: t("save"), exact: true }))
    await waitFor(() => expect(JSON.parse(String(fetchMock.mock.lastCall?.[1]?.body))).toMatchObject({ method: "updateCard", args: { id: card.id, dueDate: null } }))
  })

  it("saves completion by column ID and preserves the current selection when a change fails", async () => {
    const user = userEvent.setup()
    const onSetCompletedColumn = vi.fn().mockResolvedValue(false)
    const callbacks = { open: true, columns: [{ id: "todo", title: "Todo" }, { id: "done", title: "Shipped" }], completedColumnId: "done", onSetCompletedColumn, onOpenChange: vi.fn(), onReorder: vi.fn(), onRename: vi.fn(), onDelete: vi.fn(), onAdd: vi.fn() }
    render(<ColumnDialog {...callbacks} />)
    const selector = screen.getByRole("combobox", { name: t("completedColumn") })
    expect(selector.textContent).toContain("Shipped")
    selector.focus()
    await user.keyboard("{Enter}")
    expect(screen.getByRole("option", { name: "Todo" })).toBeTruthy()
    await user.keyboard("{Home}{ArrowDown}{Enter}")
    await waitFor(() => expect(onSetCompletedColumn).toHaveBeenCalledWith("todo"))
    expect(selector.textContent).toContain("Shipped")
    expect(screen.getByRole("alert").textContent).toContain(t("actionRetry"))
    selector.focus()
    await user.keyboard("{Enter}{Home}{Enter}")
    expect(onSetCompletedColumn).toHaveBeenLastCalledWith(null)
  })
})
