import { useEffect, useState } from "react"
import { MessageSquare, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PRIORITY_OPTIONS, PRIORITY_META } from "@/lib/constants"
import { useT } from "@/lib/i18n"
import type { Card, Label as LabelType, Priority } from "@/lib/types"

export interface CardFormValues {
  title: string
  note: string
  label: string
  priority: Priority | ""
}

/** 「与 agent 聊一聊」的目标：当前对话或新建对话。 */
export type ChatTarget = "current" | "new"

interface CardDialogProps {
  open: boolean
  card: Card | null
  labels: LabelType[]
  onOpenChange: (open: boolean) => void
  onSave: (values: CardFormValues) => void
  onDelete?: (card: Card) => void
  onChatWithAgent: (values: CardFormValues, target: ChatTarget) => void
}

export function CardDialog({ open, card, labels, onOpenChange, onSave, onDelete, onChatWithAgent }: CardDialogProps) {
  const t = useT()
  const [values, setValues] = useState<CardFormValues>({
    title: "", note: "", label: "", priority: "",
  })

  useEffect(() => {
    if (open) {
      setValues({
        title: card?.title ?? "",
        note: card?.note ?? "",
        label: card?.label ?? "",
        priority: card?.priority ?? "",
      })
    }
  }, [open, card])

  const set = (patch: Partial<CardFormValues>) => setValues((v) => ({ ...v, ...patch }))

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-xl"
        aria-describedby={undefined}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {/* 标题仅保留给屏幕阅读器；可见区域不显示「编辑卡片」等装饰性文案 */}
        <DialogHeader>
          <DialogTitle className="sr-only">{card ? t("editCard") : t("addCard")}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="card-title" className="flex items-center justify-between">
              <span>{t("fieldTitle")}</span>
              {card && (
                <span className="text-[11px] font-medium text-muted-foreground">
                  {t("fieldId")}: {card.id}
                </span>
              )}
            </Label>
            <Input
              id="card-title"
              value={values.title}
              placeholder={t("titlePlaceholder")}
              onChange={(e) => set({ title: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label>{t("fieldLabel")}</Label>
            <Select value={values.label || "__none__"} onValueChange={(v) => set({ label: v === "__none__" ? "" : v })}>
              <SelectTrigger>
                <SelectValue placeholder={t("noLabel")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__none__">{t("noLabel")}</SelectItem>
                {labels.map((l) => (
                  <SelectItem key={l.name} value={l.name}>{l.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>{t("fieldPriority")}</Label>
            <Select value={values.priority || "__none__"} onValueChange={(v) => set({ priority: v === "__none__" ? "" : (v as Priority) })}>
              <SelectTrigger>
                <SelectValue placeholder={t("noPriority")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__none__">{t("noPriority")}</SelectItem>
                {PRIORITY_OPTIONS.map((p) => {
                  const meta = PRIORITY_META[p]
                  return (
                    <SelectItem key={p} value={p}>
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full" style={{ background: meta.color }} />
                        {meta.label}
                      </span>
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="card-note">{t("fieldNote")}</Label>
            <Textarea
              id="card-note"
              value={values.note}
              placeholder={t("notePlaceholder")}
              rows={5}
              onChange={(e) => set({ note: e.target.value })}
            />
          </div>
        </div>
        <DialogFooter>
          {card && onDelete && (
            <Button
              variant="destructive"
              className="mr-auto"
              onClick={() => {
                onDelete(card)
                onOpenChange(false)
              }}
            >
              <Trash2 className="h-4 w-4" />
              {t("delete")}
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                disabled={!values.title.trim() && !values.note.trim()}
              >
                <MessageSquare className="h-4 w-4" />
                {t("chatWithAgent")}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => {
                  onChatWithAgent(values, "current")
                  onOpenChange(false)
                }}
              >
                {t("chatCurrentSession")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  onChatWithAgent(values, "new")
                  onOpenChange(false)
                }}
              >
                {t("chatNewSession")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            disabled={!values.title.trim()}
            onClick={() => {
              onSave(values)
              onOpenChange(false)
            }}
          >
            {t("save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
