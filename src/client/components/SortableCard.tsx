import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { PRIORITY_META, labelColor } from "@/lib/constants"
import type { Card as CardType, Label } from "@/lib/types"
import { cn } from "@/lib/utils"

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
      className={cn(
        "group cursor-grab touch-none select-none active:cursor-grabbing",
        isDragging && "opacity-40",
      )}
    >
      <Card className="pointer-events-none rounded-xl border-[var(--dsw-alias-border-l2)] shadow-card transition-shadow duration-200 group-hover:shadow-float">
        <CardContent className="p-3.5">
          {(card.label || priority) && (
            <div className="mb-1.5 flex items-center gap-1.5">
              {card.label && (
                <Badge
                  variant="secondary"
                  className="rounded-full px-2 py-0 text-[10.5px] font-medium leading-4"
                  style={{ background: color, color: "#0b1220" }}
                >
                  {card.label}
                </Badge>
              )}
              {priority && (
                <Badge
                  variant="secondary"
                  className="rounded-full px-2 py-0 text-[10.5px] font-medium leading-4"
                  style={{ background: priority.color, color: "#0b1220" }}
                >
                  {priority.label}
                </Badge>
              )}
            </div>
          )}
          <p className="text-[13.5px] font-medium leading-snug tracking-tight break-words">
            {card.title}
          </p>
          {card.note && (
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-3 whitespace-pre-wrap break-words">
              {card.note}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
