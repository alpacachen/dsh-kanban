import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { PRIORITY_META, labelColor } from "@/lib/constants"
import type { Card as CardType, Label } from "@/lib/types"

interface SortableCardProps {
  card: CardType
  labels: Label[]
  onOpen: (card: CardType) => void
}

export function SortableCard({ card, labels, onOpen }: SortableCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card.id,
    data: { type: "card", cardId: card.id, columnId: card.columnId },
  })

  const priority = card.priority ? PRIORITY_META[card.priority] : null
  const color = labelColor(labels, card.label)

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
      {...listeners}
      onClick={() => onOpen(card)}
      className={`kanban-sortable-card${isDragging ? " is-dragging" : ""}`}
    >
      <Card className="kanban-card">
        <CardContent className="kanban-sortable-card-content">
          {(card.label || priority) && (
            <div className="kanban-card-meta">
              {card.label && (
                <Badge
                  variant="secondary"
                  className="kanban-card-badge"
                  style={{ background: color, color: "#0b1220" }}
                >
                  {card.label}
                </Badge>
              )}
              {priority && (
                <Badge
                  variant="secondary"
                  className="kanban-card-badge"
                  style={{ background: priority.color, color: "#0b1220" }}
                >
                  {priority.label}
                </Badge>
              )}
            </div>
          )}
          <p className="kanban-card-title">
            {card.title}
          </p>
          {card.note && (
            <p className="kanban-card-note">
              {card.note}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
