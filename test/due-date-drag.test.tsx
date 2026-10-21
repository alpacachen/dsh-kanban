import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"
import { KanbanView } from "../src/client/KanbanView"
import { localDate } from "../src/client/lib/due-date"
import { t } from "../src/client/lib/i18n"
import type { Board, Card } from "../src/client/lib/types"

afterEach(() => vi.restoreAllMocks())

describe("dragging with a deadline filter", () => {
  it.each([
    ["today", false], ["overdue", false], ["today", true], ["overdue", true],
  ] as const)("moves a %s task into the completed list, cancel=%s", async (filter, cancel) => {
    const card: Card = {
      id: "k1", columnId: "todo", title: "Deadline task", note: "",
      dueDate: localDate(new Date(), filter === "overdue" ? -1 : 0),
      priority: null, label: null, comments: [], createdAt: null, createdBy: null,
    }
    let board: Board = {
      completedColumnId: "done", columns: [{ id: "todo", title: "Todo" }, { id: "done", title: "Done" }],
      labels: [], cards: [card], activities: [],
    }
    const moves: Record<string, unknown>[] = []
    vi.spyOn(globalThis, "fetch").mockImplementation(async (_url, options) => {
      const request = JSON.parse(String(options?.body))
      if (request.method === "moveCard") {
        moves.push(request.args)
        board = { ...board, cards: [{ ...card, columnId: request.args.columnId }] }
      }
      return { ok: true, json: async () => ({ board }) } as Response
    })

    // JSDOM has no layout; give the real dnd-kit sensors two adjacent drop targets.
    const rect = (x: number, y: number, width: number, height: number) =>
      ({ x, y, width, height, top: y, left: x, right: x + width, bottom: y + height, toJSON() {} })
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function () {
      const inDone = this.closest(".kanban-column")?.querySelector(".kanban-column-title")?.textContent === "Done"
      if (this.classList.contains("kanban-column")) return rect(inDone ? 220 : 0, 0, 200, 500)
      if (this.classList.contains("kanban-sortable-card")) return rect(inDone ? 230 : 10, 50, 180, 100)
      if (this.classList.contains("kanban-view") || this.classList.contains("kanban-columns")) return rect(0, 0, 600, 500)
      return rect(0, 0, 100, 50)
    })

    const user = userEvent.setup()
    render(<KanbanView {...{ sessionId: "deadline-drag" } as React.ComponentProps<typeof KanbanView>} />)
    const task = await screen.findByRole("button", { name: card.title })
    const todo = task.closest(".kanban-column")!
    await user.click(screen.getByRole("button", { name: t("dueDateFilter") }))
    await user.click(screen.getByRole("menuitemradio", { name: t(filter === "today" ? "dueToday" : "overdue"), exact: true }))
    fireEvent.mouseDown(task, { button: 0, clientX: 50, clientY: 100 })
    fireEvent.mouseMove(document, { clientX: 70, clientY: 100 })
    await waitFor(() => expect(task.getAttribute("aria-pressed")).toBe("true"))
    fireEvent.mouseMove(document, { clientX: 290, clientY: 100 })
    await waitFor(() => expect(todo.querySelector(".kanban-sortable-card")).toBeNull())
    fireEvent.mouseMove(document, { clientX: 295, clientY: 100 })

    if (cancel) {
      fireEvent.keyDown(document, { key: "Escape", code: "Escape" })
      await waitFor(() => expect(screen.getByRole("button", { name: card.title }).closest(".kanban-column")).toBe(todo))
      expect(moves).toEqual([])
    } else {
      fireEvent.mouseUp(document, { clientX: 295, clientY: 100 })
      await waitFor(() => expect(moves).toEqual([expect.objectContaining({ id: card.id, columnId: "done", toIndex: 0 })]))
      await waitFor(() => expect(screen.queryByRole("button", { name: card.title })).toBeNull())
      expect(board.cards[0].columnId).toBe("done")
    }
  })
})
