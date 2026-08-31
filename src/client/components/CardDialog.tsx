import { useEffect, useState } from "react"
import { MessageSquare, Send, Trash2 } from "lucide-react"
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
import { formatTime } from "@/lib/activity"
import { useT } from "@/lib/i18n"
import type { Activity, Card, Comment, Label as LabelType, Priority } from "@/lib/types"
import { CardActivity } from "./CardActivity"

export interface CardFormValues {
  id?: string
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
  comments: Comment[]
  activities: Activity[]
  onOpenChange: (open: boolean) => void
  onSave: (values: CardFormValues) => Promise<boolean>
  onAddComment: (cardId: string, content: string) => Promise<boolean>
  onDelete?: (card: Card) => Promise<boolean>
  onChatWithAgent: (values: CardFormValues, target: ChatTarget) => void
}

export function CardDialog({ open, card, labels, comments, activities, onOpenChange, onSave, onAddComment, onDelete, onChatWithAgent }: CardDialogProps) {
  const t = useT()
  const [values, setValues] = useState<CardFormValues>({
    id: "", title: "", note: "", label: "", priority: "",
  })
  const [comment, setComment] = useState("")
  const [saving, setSaving] = useState(false)
  const [commenting, setCommenting] = useState(false)

  useEffect(() => {
    if (open) {
      setValues({
        id: card?.id ?? "",
        title: card?.title ?? "",
        note: card?.note ?? "",
        label: card?.label ?? "",
        priority: card?.priority ?? "",
      })
      setComment("")
    }
  }, [open, card])

  const set = (patch: Partial<CardFormValues>) => setValues((v) => ({ ...v, ...patch }))
  const submitComment = async () => {
    const content = comment.trim()
    if (!card || !content || content.length > 2000 || commenting) return
    setCommenting(true)
    const ok = await onAddComment(card.id, content)
    setCommenting(false)
    if (ok !== false) setComment("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="kanban-dialog-wide"
        aria-describedby={undefined}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {/* 标题仅保留给屏幕阅读器；可见区域不显示「编辑卡片」等装饰性文案 */}
        <DialogHeader>
          <DialogTitle className="kanban-sr-only">{card ? t("editCard") : t("addCard")}</DialogTitle>
        </DialogHeader>
        <div className="kanban-form-stack">
          <div className="kanban-form-field">
            <Label htmlFor="card-title" className="kanban-field-label">
              <span>{t("fieldTitle")}</span>
              {card && (
                <span className="kanban-field-id">
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
          <div className="kanban-form-field">
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
          <div className="kanban-form-field">
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
                      <span className="kanban-inline-priority">
                        <span className="kanban-priority-dot" style={{ background: meta.color }} />
                        {meta.label}
                      </span>
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="kanban-form-field">
            <Label htmlFor="card-note">{t("fieldNote")}</Label>
            <Textarea
              id="card-note"
              value={values.note}
              placeholder={t("notePlaceholder")}
              rows={5}
              onChange={(e) => set({ note: e.target.value })}
            />
          </div>
          {card && (
            <div className="kanban-comments-box">
              <Label htmlFor="card-comment">
                {t("commentsTitle")} <span className="kanban-tabular">({comments.length})</span>
              </Label>
              <div className="kanban-comments-scroll" aria-live="polite">
                {comments.length === 0 ? (
                  <p className="kanban-muted-small">{t("commentEmpty")}</p>
                ) : (
                  <ol className="kanban-comment-list">
                    {comments.map((item) => {
                      const isAgent = item.source === "agent"
                      return (
                        <li key={item.id} className="kanban-comment-item">
                          <div className="kanban-comment-meta">
                            <span className={`kanban-activity-actor ${isAgent ? "is-agent" : "is-human"}`}>
                              {isAgent ? t("actorAgent") : t("actorHuman")}
                            </span>
                            <time className="kanban-activity-time kanban-tabular" dateTime={item.createdAt}>
                              {formatTime(item.createdAt)}
                            </time>
                          </div>
                          <p className="kanban-comment-content">{item.content}</p>
                        </li>
                      )
                    })}
                  </ol>
                )}
              </div>
              <div className="kanban-comment-composer">
                <Textarea
                  id="card-comment"
                  value={comment}
                  placeholder={t("commentPlaceholder")}
                  rows={3}
                  maxLength={2000}
                  disabled={commenting}
                  onChange={(e) => setComment(e.target.value)}
                  onKeyDown={(e) => {
                    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                      e.preventDefault()
                      void submitComment()
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="outline"
                  disabled={commenting || !comment.trim()}
                  onClick={() => void submitComment()}
                >
                  <Send className="kanban-icon" />
                  {t("sendComment")}
                </Button>
              </div>
            </div>
          )}
          {card && (
            <div className="kanban-activity-box">
              <Label className="kanban-muted-small">{t("activityTitle")}</Label>
              <div className="kanban-activity-scroll">
                <CardActivity activities={activities} />
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          {card && onDelete && (
            <Button
              variant="outline"
              className="kanban-dialog-delete"
              disabled={saving}
              onClick={async () => {
                setSaving(true)
                const ok = await onDelete(card)
                setSaving(false)
                if (ok !== false) onOpenChange(false)
              }}
            >
              <Trash2 className="kanban-icon" />
              {t("delete")}
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                disabled={!values.title.trim() && !values.note.trim()}
              >
                <MessageSquare className="kanban-icon" />
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
            variant="outline"
            disabled={saving || !values.title.trim()}
            onClick={async () => {
              setSaving(true)
              const ok = await onSave(values)
              setSaving(false)
              if (ok !== false) onOpenChange(false)
            }}
          >
            {t("save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
