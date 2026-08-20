import { useEffect, useState } from "react"
import { Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useT } from "@/lib/i18n"
import type { Label } from "@/lib/types"

interface LabelDialogProps {
  open: boolean
  labels: Label[]
  onOpenChange: (open: boolean) => void
  onAdd: (name: string, color: string) => void
  onUpdate: (name: string, newName: string, color: string) => void
  onDelete: (name: string) => void
}

export function LabelDialog({ open, labels, onOpenChange, onAdd, onUpdate, onDelete }: LabelDialogProps) {
  const t = useT()
  const [drafts, setDrafts] = useState<Record<string, { name: string; color: string }>>({})
  const [newName, setNewName] = useState("")
  const [newColor, setNewColor] = useState("#38bdf8")

  useEffect(() => {
    if (open) {
      setDrafts(Object.fromEntries(labels.map((l) => [l.name, { name: l.name, color: l.color }])))
    }
  }, [open, labels])

  const commit = (name: string) => {
    const d = drafts[name]
    if (!d) return
    const label = labels.find((l) => l.name === name)
    const newNameTrim = d.name.trim()
    if (label && newNameTrim && (newNameTrim !== name || d.color !== label.color)) {
      onUpdate(name, newNameTrim, d.color)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("labelEdit")}</DialogTitle>
          <DialogDescription>{t("labelEditDesc")}</DialogDescription>
        </DialogHeader>
        <div className="flex max-h-[60vh] flex-col gap-2 overflow-y-auto py-2">
          {labels.map((label) => {
            const d = drafts[label.name] ?? { name: label.name, color: label.color }
            return (
              <div key={label.name} className="flex items-center gap-1.5">
                <input
                  type="color"
                  value={d.color}
                  className="h-8 w-8 shrink-0 cursor-pointer rounded-md border border-input bg-transparent p-0.5"
                  onChange={(e) => setDrafts((m) => ({ ...m, [label.name]: { ...d, color: e.target.value } }))}
                  onBlur={() => commit(label.name)}
                />
                <Input
                  value={d.name}
                  onChange={(e) => setDrafts((m) => ({ ...m, [label.name]: { ...d, name: e.target.value } }))}
                  onBlur={() => commit(label.name)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") (e.target as HTMLInputElement).blur()
                  }}
                />
                <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 text-destructive" onClick={() => onDelete(label.name)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )
          })}
        </div>
        <DialogFooter className="flex-col gap-2 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-1.5">
            <input
              type="color"
              value={newColor}
              className="h-8 w-8 shrink-0 cursor-pointer rounded-md border border-input bg-transparent p-0.5"
              onChange={(e) => setNewColor(e.target.value)}
            />
            <Input
              value={newName}
              placeholder={t("newLabelPlaceholder")}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (newName.trim()) { onAdd(newName.trim(), newColor); setNewName("") }
                }
              }}
            />
            <Button size="sm" onClick={() => { if (newName.trim()) { onAdd(newName.trim(), newColor); setNewName("") } }}>
              <Plus className="h-4 w-4" />
              {t("add")}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
