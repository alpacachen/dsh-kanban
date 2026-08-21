import { useEffect, useState } from "react"
import {
  DndContext, KeyboardSensor, PointerSensor, closestCenter,
  useSensor, useSensors, type DragEndEvent,
} from "@dnd-kit/core"
import {
  SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useT } from "@/lib/i18n"
import type { Column } from "@/lib/types"

interface ColumnDialogProps {
  open: boolean
  columns: Column[]
  onOpenChange: (open: boolean) => void
  onReorder: (activeId: string, overId: string) => void
  onRename: (id: string, title: string) => void
  onDelete: (id: string) => void
  onAdd: (title: string) => void
}

function SortableRow({ column, value, onValueChange, onCommit, onDelete, canDelete }: {
  column: Column
  value: string
  onValueChange: (v: string) => void
  onCommit: () => void
  onDelete: () => void
  canDelete: boolean
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: column.id })
  const t = useT()
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className="kanban-sortable-row"
    >
      <button
        {...attributes}
        {...listeners}
        className="kanban-drag-handle"
        aria-label={t("dragSort")}
      >
        <GripVertical className="kanban-icon" />
      </button>
      <Input
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        onBlur={onCommit}
        onKeyDown={(e) => {
          if (e.key === "Enter") (e.target as HTMLInputElement).blur()
        }}
      />
      <Button
        variant="ghost"
        size="icon"
        className="kanban-icon-button kanban-danger-button"
        aria-label={t("delete")}
        disabled={!canDelete}
        onClick={onDelete}
      >
        <Trash2 className="kanban-icon" />
      </Button>
    </div>
  )
}

export function ColumnDialog({ open, columns, onOpenChange, onReorder, onRename, onDelete, onAdd }: ColumnDialogProps) {
  const t = useT()
  const [drafts, setDrafts] = useState<Record<string, string>>({})
  const [newTitle, setNewTitle] = useState("")

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  useEffect(() => {
    if (open) {
      setDrafts(Object.fromEntries(columns.map((c) => [c.id, c.title])))
    }
  }, [open, columns])

  const commit = (id: string) => {
    const value = (drafts[id] ?? "").trim()
    const col = columns.find((c) => c.id === id)
    if (col && value && value !== col.title) onRename(id, value)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      onReorder(String(active.id), String(over.id))
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="kanban-dialog-medium">
        <DialogHeader>
          <DialogTitle>{t("columnEdit")}</DialogTitle>
          <DialogDescription>{t("columnEditDesc")}</DialogDescription>
        </DialogHeader>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={columns.map((c) => c.id)} strategy={verticalListSortingStrategy}>
            <div className="kanban-sortable-list">
              {columns.map((col) => (
                <SortableRow
                  key={col.id}
                  column={col}
                  value={drafts[col.id] ?? col.title}
                  onValueChange={(v) => setDrafts((d) => ({ ...d, [col.id]: v }))}
                  onCommit={() => commit(col.id)}
                  onDelete={() => onDelete(col.id)}
                  canDelete={columns.length > 1}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
        <div className="kanban-sortable-row">
          <Input
            value={newTitle}
            placeholder={t("newColumnPlaceholder")}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (newTitle.trim()) { onAdd(newTitle.trim()); setNewTitle("") }
              }
            }}
          />
          <Button size="sm" onClick={() => { if (newTitle.trim()) { onAdd(newTitle.trim()); setNewTitle("") } }}>
            <Plus className="kanban-icon" />
            {t("add")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
