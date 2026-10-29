import { useId } from "react"
import { CalendarDays, Image as ImageIcon, MessageSquare } from "lucide-react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { PRIORITY_META, labelColor } from "@/lib/constants"
import { dateLabel, localDate, overdueDays } from "@/lib/due-date"
import { useT } from "@/lib/i18n"
import type { Card as CardType, Label } from "@/lib/types"

interface KanbanCardProps {
  card: CardType
  labels: Label[]
  completed?: boolean
  today?: string
  query?: string
}

interface SortableCardProps extends KanbanCardProps {
  onOpen: (card: CardType) => void
}

export function KanbanCard({ card, labels, completed = false, today = localDate(), query = "" }: KanbanCardProps) {
  const t = useT()
  const needle = query.trim().toLowerCase()
  const commentMatch = needle && !card.title.toLowerCase().includes(needle) && !card.note.toLowerCase().includes(needle)
    ? card.comments.find((comment) => comment.content.toLowerCase().includes(needle))?.content : undefined
  const snippet = commentMatch ? commentMatch.slice(Math.max(0, commentMatch.toLowerCase().indexOf(needle) - 24), commentMatch.toLowerCase().indexOf(needle) + needle.length + 70) : ""
  const imageCount = card.images?.length ?? 0
  const priority = card.priority ? PRIORITY_META[card.priority] : null
  const color = labelColor(labels, card.label)
  const dueState = completed ? "completed" : card.dueDate === today ? "today" : card.dueDate && card.dueDate < today ? "overdue" : "future"
  const dueText = card.dueDate ? dueState === "today" ? t("dueToday")
    : dueState === "overdue" ? t("overdueDays").replace("{days}", String(overdueDays(card.dueDate, today)))
    : dateLabel(card.dueDate, today, t) : ""

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
        {commentMatch && <p className="kanban-search-match">{t("matchComment")}: {snippet}</p>}
        {(card.dueDate || card.comments.length > 0 || imageCount > 0) && <div className="kanban-card-status-row">
          {card.dueDate && <span className={`kanban-card-due-date is-${dueState}`}
            title={`${t("fieldDueDate")}: ${card.dueDate}${completed ? ` · ${t("completed")}` : ""}`}>
            <CalendarDays aria-hidden="true" /><span>{dueText}</span>
          </span>}
          {imageCount > 0 && <span className="kanban-card-comment-count" aria-label={`${t("images")}: ${imageCount}`} title={`${t("images")}: ${imageCount}`}>
            <ImageIcon aria-hidden="true" /><span className="kanban-tabular">{imageCount}</span>
          </span>}
          {card.comments.length > 0 && <span
            className="kanban-card-comment-count"
            title={`${t("commentsTitle")}: ${card.comments.length}`}
            aria-label={`${t("commentsTitle")}: ${card.comments.length}`}
          >
            <MessageSquare aria-hidden="true" />
            <span className="kanban-tabular">{card.comments.length}</span>
          </span>}
        </div>}
      </CardContent>
    </Card>
  )
}

export function SortableCard({ card, labels, completed, today = localDate(), query, onOpen }: SortableCardProps) {
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
      <span id={helpId} className="kanban-sr-only">
        {t("cardKeyboardHelp")}
        {card.dueDate && ` ${t("fieldDueDate")}: ${card.dueDate}. ${completed ? t("completed") : card.dueDate === today ? t("dueToday") : card.dueDate < today ? t("overdueDays").replace("{days}", String(overdueDays(card.dueDate, today))) : ""}`}
      </span>
      <KanbanCard card={card} labels={labels} completed={completed} today={today} query={query} />
    </div>
  )
}
