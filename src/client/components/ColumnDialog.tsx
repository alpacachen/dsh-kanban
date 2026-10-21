import { useEffect, useId, useRef, useState } from "react"
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
  Dialog, DialogBody, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useT } from "@/lib/i18n"
import type { Column } from "@/lib/types"

interface ColumnDialogProps {
  open: boolean
  error?: string | null
  columns: Column[]
  completedColumnId: string | null
  onSetCompletedColumn: (id: string | null) => boolean | void | Promise<boolean | void>
  onOpenChange: (open: boolean) => void
  onReorder: (activeId: string, overId: string) => boolean | void | Promise<boolean | void>
  onRename: (id: string, title: string) => boolean | void | Promise<boolean | void>
  onDelete: (id: string) => boolean | void | Promise<boolean | void>
  onAdd: (title: string) => boolean | void | Promise<boolean | void>
}

function SortableRow({ column, value, onValueChange, onCommit, onDelete, canDelete, disabled }: {
  column: Column
  value: string
  onValueChange: (v: string) => void
  onCommit: () => void
  onDelete: () => void
  canDelete: boolean
  disabled: boolean
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: column.id, disabled })
  const t = useT()
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className="kanban-editor-row"
      data-dragging={isDragging || undefined}
    >
      <button
        {...attributes}
        {...listeners}
        className="kanban-drag-handle"
        disabled={disabled}
        aria-label={`${t("dragSort")}: ${column.title}`}
      >
        <GripVertical className="kanban-icon" />
      </button>
      <Input
        className="kanban-editor-name"
        aria-label={`${t("columnName")}: ${column.title}`}
        value={value}
        disabled={disabled}
        maxLength={40}
        onChange={(e) => onValueChange(e.target.value)}
        onBlur={onCommit}
        onKeyDown={(e) => {
          if (e.key === "Enter") (e.target as HTMLInputElement).blur()
        }}
      />
      <Button
        variant="ghost"
        size="icon"
        className="kanban-icon-button kanban-editor-delete"
        aria-label={`${t("delete")}: ${column.title}`}
        disabled={disabled || !canDelete}
        onClick={onDelete}
      >
        <Trash2 className="kanban-icon" />
      </Button>
    </div>
  )
}

export function ColumnDialog({ open, error, columns, completedColumnId, onSetCompletedColumn, onOpenChange, onReorder, onRename, onDelete, onAdd }: ColumnDialogProps) {
  const t = useT()
  const completedId = useId()
  const newTitleId = useId()
  const [drafts, setDrafts] = useState<Record<string, string>>({})
  const [newTitle, setNewTitle] = useState("")
  const [pending, setPending] = useState(false)
  const pendingRef = useRef(false)
  const [failure, setFailure] = useState("")
  const [deleting, setDeleting] = useState<Column | null>(null)
  const cancelRef = useRef<HTMLButtonElement>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  useEffect(() => {
    if (open) {
      setDrafts(Object.fromEntries(columns.map((c) => [c.id, c.title])))
      setNewTitle("")
      setFailure("")
      setDeleting(null)
    }
  }, [open])

  useEffect(() => { if (deleting) cancelRef.current?.focus() }, [deleting])

  const run = async (action: () => boolean | void | Promise<boolean | void>) => {
    if (pendingRef.current) return false
    pendingRef.current = true
    setPending(true)
    setFailure("")
    try {
      const ok = await action()
      if (ok === false) setFailure(t("actionRetry"))
      return ok !== false
    } catch (cause) {
      setFailure(t("actionFailed") + String(cause instanceof Error ? cause.message : cause))
      return false
    } finally {
      pendingRef.current = false
      setPending(false)
    }
  }

  const add = async () => {
    const title = newTitle.trim()
    if (title && await run(() => onAdd(title))) setNewTitle("")
  }

  const commit = (id: string) => {
    const value = (drafts[id] ?? "").trim()
    const col = columns.find((c) => c.id === id)
    if (col && value && value !== col.title) void run(() => onRename(id, value))
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      void run(() => onReorder(String(active.id), String(over.id)))
    }
  }

  return (
    <Dialog open={open} onOpenChange={(next) => {
      if (pendingRef.current) return
      if (!next && deleting) { setDeleting(null); return }
      onOpenChange(next)
    }}>
      <DialogContent className="kanban-dialog-medium kanban-editor-dialog">
        <DialogHeader>
          <DialogTitle>{t("columnEdit")}</DialogTitle>
          <DialogDescription>{t("columnEditDesc")}</DialogDescription>
        </DialogHeader>
        <DialogBody className="kanban-editor-body">
          {(error || failure) && <p className="kanban-dialog-error" role="alert">{error || failure}</p>}
          <section className="kanban-editor-section" aria-label={t("boardLists")}>
            <h3 className="kanban-editor-caption">{t("boardLists")} <span>{columns.length}</span></h3>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={columns.map((c) => c.id)} strategy={verticalListSortingStrategy}>
                <div className="kanban-editor-list">
                  {columns.map((col) => (
                    <SortableRow
                      key={col.id}
                      column={col}
                      value={drafts[col.id] ?? col.title}
                      onValueChange={(v) => setDrafts((d) => ({ ...d, [col.id]: v }))}
                      onCommit={() => commit(col.id)}
                      onDelete={() => setDeleting(col)}
                      disabled={pending || Boolean(deleting)}
                      canDelete={columns.length > 1}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </section>
          <div className="kanban-editor-setting">
            <div className="kanban-editor-setting-copy">
              <Label htmlFor={completedId}>{t("completedColumn")}</Label>
              <p id={`${completedId}-hint`} className="kanban-muted-small">{t("completedColumnHint")}</p>
            </div>
            <Select value={completedColumnId || "__none__"} disabled={pending || Boolean(deleting)}
              onValueChange={(id) => void run(() => onSetCompletedColumn(id === "__none__" ? null : id))}>
              <SelectTrigger id={completedId} aria-describedby={`${completedId}-hint`}><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="__none__">{t("noCompletedColumn")}</SelectItem>
                {columns.map((column) => <SelectItem key={column.id} value={column.id}>{column.title}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </DialogBody>
        <DialogFooter>
          {deleting ? <div className="kanban-dialog-confirm">
            <p role="alert">{t("deleteColumnDesc").replace("{column}", deleting.title)}</p>
            <div className="kanban-confirm-actions">
              <Button ref={cancelRef} variant="outline" disabled={pending} onClick={() => setDeleting(null)}>{t("cancel")}</Button>
              <Button variant="destructive" disabled={pending} onClick={async () => {
                if (await run(() => onDelete(deleting.id))) setDeleting(null)
              }}>{t("confirmDelete")}</Button>
            </div>
          </div> : <div className="kanban-editor-add">
            <Label htmlFor={newTitleId}>{t("newColumnPlaceholder")}</Label>
            <div className="kanban-editor-add-row">
              <span className="kanban-editor-add-icon" aria-hidden="true"><Plus className="kanban-icon" /></span>
              <Input
                id={newTitleId}
                value={newTitle}
                disabled={pending}
                placeholder={t("newColumnPlaceholder")}
                aria-label={t("newColumnPlaceholder")}
                maxLength={40}
                onChange={(e) => setNewTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") { e.preventDefault(); void add() }
                }}
              />
              <Button size="sm" className="kanban-editor-add-button" disabled={pending || !newTitle.trim()} onClick={() => void add()}>
                {t("add")}
              </Button>
            </div>
          </div>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
