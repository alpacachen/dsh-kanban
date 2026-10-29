import { useDndContext, useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { Plus } from "lucide-react"
import { SortableCard } from "./SortableCard"
import { Button } from "@/components/ui/button"
import { useT } from "@/lib/i18n"
import type { Card as CardType, Column as ColumnType, Label } from "@/lib/types"

interface ColumnProps {
  column: ColumnType
  cards: CardType[]
  totalCount: number
  filtered: boolean
  labels: Label[]
  completed: boolean
  today: string
  query?: string
  onAddCard: (column: ColumnType) => void
  onOpenCard: (card: CardType) => void
}

export function Column({ column, cards, totalCount, filtered, labels, completed, today, query, onAddCard, onOpenCard }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id, data: { type: "column" } })
  const { active, over } = useDndContext()
  const t = useT()
  const isCardOver = active?.data.current?.type === "card"
    && (isOver || over?.data.current?.columnId === column.id)

  return (
    <div
      ref={setNodeRef}
      className={`kanban-column${isCardOver ? " is-over" : ""}`}
    >
      <div className="kanban-column-header">
        <h3 className="kanban-column-title">{column.title}</h3>
        <span className="kanban-column-count">
          {filtered ? `${cards.length} / ${totalCount}` : cards.length}
        </span>
      </div>

      <div className="kanban-column-cards">
        <SortableContext items={cards.map((c) => c.id)} strategy={verticalListSortingStrategy}>
          {cards.map((card) => (
            <SortableCard
              key={card.id}
              card={card}
              labels={labels}
              completed={completed}
              today={today}
              query={query}
              onOpen={onOpenCard}
            />
          ))}
        </SortableContext>
        {cards.length === 0 && (
          <p className="kanban-column-empty">{t(filtered ? "noMatchingCards" : "emptyColumn")}</p>
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
