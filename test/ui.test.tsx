import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { CardDialog, type CardFormValues } from "../src/client/components/CardDialog"
import { ColumnDialog } from "../src/client/components/ColumnDialog"

const labels = [{ name: "bug", color: "#f87171" }]
const activities = []

function cardValues(overrides: Partial<CardFormValues> = {}): CardFormValues {
  return { id: "", title: "", note: "", label: "", priority: "", ...overrides }
}

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
        activities={activities}
        onOpenChange={onOpenChange}
        onSave={onSave}
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
        activities={activities}
        onOpenChange={onOpenChange}
        onSave={vi.fn()}
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

  it("deletes an existing card and closes the dialog", async () => {
    const user = userEvent.setup()
    const card = { id: "k1", columnId: "c1", title: "Remove me", note: "", label: null, priority: null, createdAt: null, createdBy: null }
    const onDelete = vi.fn()
    const onOpenChange = vi.fn()
    render(
      <CardDialog
        open
        card={card}
        labels={labels}
        activities={activities}
        onOpenChange={onOpenChange}
        onSave={vi.fn()}
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
