import { useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { Plus } from "lucide-react"
import { SortableCard } from "./SortableCard"
import { Button } from "@/components/ui/button"
import { useT } from "@/lib/i18n"
import type { Card as CardType, Column as ColumnType, Label } from "@/lib/types"

interface ColumnProps {
  column: ColumnType
  cards: CardType[]
  labels: Label[]
  onAddCard: (column: ColumnType) => void
  onOpenCard: (card: CardType) => void
}

export function Column({ column, cards, labels, onAddCard, onOpenCard }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id, data: { type: "column" } })
  const t = useT()

  return (
    <div
      ref={setNodeRef}
      className={`kanban-column${isOver ? " is-over" : ""}`}
    >
      <div className="kanban-column-header">
        <h3 className="kanban-column-title">{column.title}</h3>
        <span className="kanban-column-count">
          {cards.length}
        </span>
      </div>

      <div className="kanban-column-cards kan-scroll">
        <SortableContext items={cards.map((c) => c.id)} strategy={verticalListSortingStrategy}>
          {cards.map((card) => (
            <SortableCard
              key={card.id}
              card={card}
              labels={labels}
              onOpen={onOpenCard}
            />
          ))}
        </SortableContext>
        {cards.length === 0 && (
          <p className="kanban-column-empty">{t("emptyColumn")}</p>
        )}
      </div>

      <div className="kanban-column-footer">
        <Button
          variant="ghost"
          size="sm"
          className="kanban-add-card"
          onClick={() => onAddCard(column)}
        >
          <Plus className="kanban-icon" />
          {t("addCard")}
        </Button>
      </div>
    </div>
  )
}
