import { useId } from "react"
import { MessageSquare } from "lucide-react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { PRIORITY_META, labelColor } from "@/lib/constants"
import { useT } from "@/lib/i18n"
import type { Card as CardType, Label } from "@/lib/types"

interface KanbanCardProps {
  card: CardType
  labels: Label[]
}

interface SortableCardProps extends KanbanCardProps {
  onOpen: (card: CardType) => void
}

export function KanbanCard({ card, labels }: KanbanCardProps) {
  const t = useT()
  const priority = card.priority ? PRIORITY_META[card.priority] : null
  const color = labelColor(labels, card.label)

  return (
    <Card className="kanban-card">
      <CardContent className="kanban-sortable-card-content">
        {(card.label || priority) && (
          <div className="kanban-card-meta">
            {card.label && (
              <Badge
                variant="secondary"
                className="kanban-card-badge"
              >
                <span className="kanban-label-dot" style={{ background: color }} aria-hidden="true" />
                {card.label}
              </Badge>
            )}
            {priority && (
              <Badge
                variant="secondary"
                className="kanban-card-badge"
              >
                <span className="kanban-label-dot" style={{ background: priority.color }} aria-hidden="true" />
                {priority.label}
              </Badge>
            )}
          </div>
        )}
        <p className="kanban-card-title">{card.title}</p>
        {card.note && <p className="kanban-card-note">{card.note}</p>}
        {card.comments.length > 0 && (
          <span
            className="kanban-card-comment-count"
            title={`${t("commentsTitle")}: ${card.comments.length}`}
            aria-label={`${t("commentsTitle")}: ${card.comments.length}`}
          >
            <MessageSquare aria-hidden="true" />
            <span className="kanban-tabular">{card.comments.length}</span>
          </span>
        )}
      </CardContent>
    </Card>
  )
}

export function SortableCard({ card, labels, onOpen }: SortableCardProps) {
  const t = useT()
  const helpId = useId()
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card.id,
    data: { type: "card", cardId: card.id, columnId: card.columnId },
  })

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
      {...listeners}
      aria-label={card.title}
      aria-describedby={helpId}
      onKeyDown={(event) => {
        if (event.key === "Enter" && !isDragging) {
          event.preventDefault()
          onOpen(card)
        } else {
          listeners?.onKeyDown?.(event)
        }
      }}
      onClick={(event) => {
        event.currentTarget.focus()
        onOpen(card)
      }}
      className={`kanban-sortable-card${isDragging ? " is-dragging" : ""}`}
    >
      <span id={helpId} className="kanban-sr-only">{t("cardKeyboardHelp")}</span>
      <KanbanCard card={card} labels={labels} />
    </div>
  )
}
