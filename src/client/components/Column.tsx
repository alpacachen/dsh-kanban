import { useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { Plus } from "lucide-react"
import { SortableCard } from "./SortableCard"
import { Button } from "@/components/ui/button"
import { useT } from "@/lib/i18n"
import type { Card as CardType, Column as ColumnType, Label } from "@/lib/types"
import { cn } from "@/lib/utils"

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
      className={cn(
        "flex w-72 shrink-0 flex-col rounded-2xl border border-[var(--dsw-alias-border-l2)] bg-card shadow-column transition-colors",
        isOver && "border-primary",
      )}
    >
      <div className="flex items-center gap-1.5 px-3 py-3">
        <h3 className="flex-1 truncate text-[13.5px] font-semibold tracking-tight">{column.title}</h3>
        <span className="rounded-full bg-secondary/70 px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground">
          {cards.length}
        </span>
      </div>

      <div className="kan-scroll flex min-h-[4rem] flex-1 flex-col gap-2 overflow-y-auto px-2.5 pb-2.5">
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
          <p className="py-5 text-center text-xs text-muted-foreground/70">{t("emptyColumn")}</p>
        )}
      </div>

      <div className="p-2.5 pt-1">
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start rounded-xl text-muted-foreground hover:text-foreground"
          onClick={() => onAddCard(column)}
        >
          <Plus className="h-4 w-4" />
          {t("addCard")}
        </Button>
      </div>
    </div>
  )
}
