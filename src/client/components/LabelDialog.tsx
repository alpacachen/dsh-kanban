import { useEffect, useId, useRef, useState } from "react"
import { Tags, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog, DialogBody, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label as FieldLabel } from "@/components/ui/label"
import { useT } from "@/lib/i18n"
import type { Label } from "@/lib/types"

interface LabelDialogProps {
  open: boolean
  error?: string | null
  labels: Label[]
  onOpenChange: (open: boolean) => void
  onAdd: (name: string, color: string) => boolean | void | Promise<boolean | void>
  onUpdate: (name: string, newName: string, color: string) => boolean | void | Promise<boolean | void>
  onDelete: (name: string) => boolean | void | Promise<boolean | void>
}

export function LabelDialog({ open, error, labels, onOpenChange, onAdd, onUpdate, onDelete }: LabelDialogProps) {
  const t = useT()
  const newNameId = useId()
  const [drafts, setDrafts] = useState<Record<string, { name: string; color: string }>>({})
  const [newName, setNewName] = useState("")
  const [newColor, setNewColor] = useState("#38bdf8")
  const [pending, setPending] = useState(false)
  const pendingRef = useRef(false)
  const [failure, setFailure] = useState("")
  const [deleting, setDeleting] = useState<string | null>(null)
  const cancelRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (open) {
      setDrafts(Object.fromEntries(labels.map((l) => [l.name, { name: l.name, color: l.color }])))
      setNewName("")
      setNewColor("#38bdf8")
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
    const name = newName.trim()
    if (name && await run(() => onAdd(name, newColor))) setNewName("")
  }

  const commit = (name: string) => {
    const d = drafts[name]
    if (!d) return
    const label = labels.find((l) => l.name === name)
    const newNameTrim = d.name.trim()
    if (label && newNameTrim && (newNameTrim !== name || d.color !== label.color)) {
      void run(() => onUpdate(name, newNameTrim, d.color))
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
          <DialogTitle>{t("labelEdit")}</DialogTitle>
          <DialogDescription>{t("labelEditDesc")}</DialogDescription>
        </DialogHeader>
        <DialogBody className="kanban-editor-body">
          {(error || failure) && <p className="kanban-dialog-error" role="alert">{error || failure}</p>}
          <section className="kanban-editor-section" aria-label={t("boardLabels")}>
            <h3 className="kanban-editor-caption">{t("boardLabels")} <span>{labels.length}</span></h3>
            <div className="kanban-editor-list">
              {labels.length === 0 && <div className="kanban-editor-empty">
                <Tags className="kanban-icon" aria-hidden="true" />
                <p>{t("noLabelsHint")}</p>
              </div>}
              {labels.map((label) => {
                const d = drafts[label.name] ?? { name: label.name, color: label.color }
                return (
                  <div key={label.name} className="kanban-editor-row">
                    <input
                      type="color"
                      aria-label={`${t("labelColor")}: ${label.name}`}
                      title={`${t("labelColor")}: ${label.name}`}
                      value={d.color}
                      disabled={pending || Boolean(deleting)}
                      className="kanban-color-input"
                      onChange={(e) => setDrafts((m) => ({ ...m, [label.name]: { ...d, color: e.target.value } }))}
                      onBlur={() => commit(label.name)}
                    />
                    <Input
                      className="kanban-editor-name"
                      aria-label={`${t("labelName")}: ${label.name}`}
                      value={d.name}
                      disabled={pending || Boolean(deleting)}
                      maxLength={20}
                      onChange={(e) => setDrafts((m) => ({ ...m, [label.name]: { ...d, name: e.target.value } }))}
                      onBlur={() => commit(label.name)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") (e.target as HTMLInputElement).blur()
                      }}
                    />
                    <Button variant="ghost" size="icon" className="kanban-icon-button kanban-editor-delete" aria-label={`${t("deleteLabel")}: ${label.name}`} disabled={pending || Boolean(deleting)} onClick={() => setDeleting(label.name)}>
                      <Trash2 className="kanban-icon" />
                    </Button>
                  </div>
                )
              })}
            </div>
          </section>
        </DialogBody>
        <DialogFooter>
          {deleting ? <div className="kanban-dialog-confirm">
            <p role="alert">{t("deleteLabelDesc").replace("{label}", deleting)}</p>
            <div className="kanban-confirm-actions">
              <Button ref={cancelRef} variant="outline" disabled={pending} onClick={() => setDeleting(null)}>{t("cancel")}</Button>
              <Button variant="destructive" disabled={pending} onClick={async () => {
                if (await run(() => onDelete(deleting))) setDeleting(null)
              }}>{t("confirmDelete")}</Button>
            </div>
          </div> : <div className="kanban-editor-add">
            <FieldLabel htmlFor={newNameId}>{t("newLabelPlaceholder")}</FieldLabel>
            <div className="kanban-editor-add-row">
              <input
                type="color"
                aria-label={t("newLabelColor")}
                title={t("newLabelColor")}
                value={newColor}
                disabled={pending}
                className="kanban-color-input"
                onChange={(e) => setNewColor(e.target.value)}
              />
              <Input
                id={newNameId}
                value={newName}
                disabled={pending}
                placeholder={t("newLabelPlaceholder")}
                aria-label={t("newLabelPlaceholder")}
                maxLength={20}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") { e.preventDefault(); void add() }
                }}
              />
              <Button size="sm" className="kanban-editor-add-button" disabled={pending || !newName.trim()} onClick={() => void add()}>
                {t("add")}
              </Button>
            </div>
          </div>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
