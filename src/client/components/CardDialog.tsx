import { useEffect, useId, useRef, useState } from "react"
import { Check, MessageSquare, Pencil, Send, Trash2 } from "lucide-react"
import { MarkdownText } from "@deepseek-ai/dsh-client-ui-primitives"
import { Button } from "@/components/ui/button"
import {
  Dialog, DialogBody, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import { DrawerContent } from "@/components/ui/drawer"
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
import { localDate } from "@/lib/due-date"
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
  dueDate: string
}

/** Destination for Chat with agent: the current session or a new session. */
export type ChatTarget = "current" | "new"

interface CardDialogProps {
  open: boolean
  error?: string | null
  card: Card | null
  labels: LabelType[]
  comments: Comment[]
  activities: Activity[]
  onOpenChange: (open: boolean) => void
  onSave: (values: CardFormValues) => boolean | void | Promise<boolean | void>
  onAddComment: (cardId: string, content: string) => boolean | void | Promise<boolean | void>
  onDelete?: (card: Card) => boolean | void | Promise<boolean | void>
  onChatWithAgent: (values: CardFormValues, target: ChatTarget) => boolean | void | Promise<boolean | void>
}

export function CardDialog({ open, error, card, labels, comments, activities, onOpenChange, onSave, onAddComment, onDelete, onChatWithAgent }: CardDialogProps) {
  const t = useT()
  const formId = useId()
  const triggerRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLInputElement>(null)
  const dueDateRef = useRef<HTMLInputElement>(null)
  const noteRef = useRef<HTMLTextAreaElement>(null)
  const [editingNote, setEditingNote] = useState(!card)
  const [values, setValues] = useState<CardFormValues>({
    id: "", title: "", note: "", label: "", priority: "", dueDate: "",
  })
  const [comment, setComment] = useState("")
  const [pending, setPending] = useState(false)
  const pendingRef = useRef(false)
  const [failure, setFailure] = useState("")
  const [confirm, setConfirm] = useState<"discard" | "delete" | ChatTarget | null>(null)
  const cancelRef = useRef<HTMLButtonElement>(null)
  const initialValues = useRef(values)

  useEffect(() => {
    if (open) {
      const next: CardFormValues = {
        id: card?.id ?? "",
        title: card?.title ?? "",
        note: card?.note ?? "",
        label: card?.label ?? "",
        priority: card?.priority ?? "",
        dueDate: card?.dueDate ?? "",
      }
      initialValues.current = next
      setValues(next)
      setComment("")
      setFailure("")
      setConfirm(null)
      setEditingNote(!card)
    }
  }, [open, card])

  useEffect(() => { if (confirm) cancelRef.current?.focus() }, [confirm])

  const dirty = Boolean(comment.trim()) || (Object.keys(values) as (keyof CardFormValues)[])
    .some((key) => values[key] !== initialValues.current[key])
  const changeOpen = (next: boolean) => {
    if (pendingRef.current) return
    if (!next && confirm) { setConfirm(null); return }
    if (!next && dirty) { setConfirm("discard"); return }
    onOpenChange(next)
  }
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
  const chat = async (target: ChatTarget) => {
    if (!dueDateRef.current?.reportValidity()) return
    if (comment.trim()) { setConfirm(target); return }
    if (await run(() => onChatWithAgent(values, target))) onOpenChange(false)
  }
  const set = (patch: Partial<CardFormValues>) => setValues((v) => ({ ...v, ...patch }))
  const submitComment = async () => {
    const content = comment.trim()
    if (!card || !content || content.length > 2000) return
    if (await run(() => onAddComment(card.id, content))) setComment("")
  }

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DrawerContent
        aria-describedby={undefined}
        onOpenAutoFocus={(event) => {
          triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
          event.preventDefault()
          titleRef.current?.focus()
        }}
        onCloseAutoFocus={(e) => {
          if (triggerRef.current?.isConnected) {
            e.preventDefault()
            triggerRef.current.focus()
          }
        }}
      >
        <DialogHeader>
          <DialogTitle>{card ? t("taskDetails") : t("addCard")}</DialogTitle>
          {card && <span className="kanban-field-id">{t("fieldId")}: {card.id}</span>}
        </DialogHeader>
        <DialogBody className="kanban-form-stack">
          {(error || failure) && <p className="kanban-dialog-error" role="alert">{error || failure}</p>}
          <div className="kanban-form-field">
            <Label htmlFor={`${formId}-title`} className="kanban-field-label">
              {t("fieldTitle")}
            </Label>
            <Input
              ref={titleRef}
              id={`${formId}-title`}
              value={values.title}
              placeholder={t("titlePlaceholder")}
              maxLength={120}
              disabled={pending || Boolean(confirm)}
              onChange={(e) => set({ title: e.target.value })}
            />
          </div>
          <div className="kanban-form-row">
            <div className="kanban-form-field">
              <Label htmlFor={`${formId}-label`}>{t("fieldLabel")}</Label>
              <Select disabled={pending || Boolean(confirm)} value={values.label || "__none__"} onValueChange={(v) => set({ label: v === "__none__" ? "" : v })}>
                <SelectTrigger id={`${formId}-label`}>
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
              <Label htmlFor={`${formId}-priority`}>{t("fieldPriority")}</Label>
              <Select disabled={pending || Boolean(confirm)} value={values.priority || "__none__"} onValueChange={(v) => set({ priority: v === "__none__" ? "" : (v as Priority) })}>
                <SelectTrigger id={`${formId}-priority`}>
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
          </div>
          <div className="kanban-form-field">
            <Label htmlFor={`${formId}-due-date`}>{t("fieldDueDate")}</Label>
            <div className="kanban-due-date-controls">
              <Input ref={dueDateRef} id={`${formId}-due-date`} type="date" min="0001-01-01" max="9999-12-31"
                value={values.dueDate} disabled={pending || Boolean(confirm)}
                onChange={(e) => set({ dueDate: e.target.value })} />
              <div className="kanban-date-shortcuts">
                {([["today", 0], ["tomorrow", 1], ["nextWeek", 7]] as const).map(([key, offset]) => (
                  <Button key={key} type="button" variant="ghost" size="sm" disabled={pending || Boolean(confirm)}
                    onClick={() => set({ dueDate: localDate(new Date(), offset) })}>{t(key)}</Button>
                ))}
                <Button type="button" variant="ghost" size="sm" disabled={pending || Boolean(confirm) || !values.dueDate}
                  onClick={() => set({ dueDate: "" })}>{t("clearDate")}</Button>
              </div>
            </div>
          </div>
          <div className="kanban-form-field">
            <div className="kanban-field-label">
              <Label id={`${formId}-note-label`} htmlFor={editingNote ? `${formId}-note` : undefined}>{t("fieldNote")}</Label>
              <Button
                variant="ghost"
                size="sm"
                disabled={pending || Boolean(confirm)}
                aria-controls={`${formId}-description`}
                onClick={() => {
                  setEditingNote(!editingNote)
                  if (!editingNote) requestAnimationFrame(() => noteRef.current?.focus())
                }}
              >
                {editingNote ? <Check /> : <Pencil />}
                {t(editingNote ? "finishEditingNote" : "editNote")}
              </Button>
            </div>
            <div id={`${formId}-description`}>
              {editingNote ? <>
                <Textarea
                  ref={noteRef}
                  id={`${formId}-note`}
                  className="kanban-markdown-source"
                  value={values.note}
                  placeholder={t("notePlaceholder")}
                  rows={12}
                  maxLength={2000}
                  disabled={pending || Boolean(confirm)}
                  onChange={(e) => set({ note: e.target.value })}
                />
                <p className="kanban-note-hint">{t("markdownEditHint")} <span className="kanban-tabular">{values.note.length}/2000</span></p>
              </> : (
                <div className="kanban-markdown-preview" role="region" aria-labelledby={`${formId}-note-label`}>
                  {values.note.trim() ? <MarkdownText
                    text={values.note}
                    labels={{ code: { copyLabel: t("copyCode"), copiedLabel: t("copiedCode") }, footnotes: t("footnotes") }}
                  /> : <p className="kanban-muted-small">{t("emptyNote")}</p>}
                </div>
              )}
            </div>
          </div>
          {card && (
            <div className="kanban-comments-box">
              <Label htmlFor={`${formId}-comment`}>
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
                  id={`${formId}-comment`}
                  value={comment}
                  placeholder={t("commentPlaceholder")}
                  rows={3}
                  maxLength={2000}
                  disabled={pending || Boolean(confirm)}
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
                  disabled={pending || Boolean(confirm) || !comment.trim()}
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
        </DialogBody>
        <DialogFooter>
          {confirm ? (
            <div className="kanban-dialog-confirm">
              <p role="alert">{t(confirm === "discard" ? "discardChangesDesc" : confirm === "delete" ? "deleteCardDesc" : "discardCommentDesc")}</p>
              <div className="kanban-confirm-actions">
                <Button ref={cancelRef} variant="outline" disabled={pending} onClick={() => setConfirm(null)}>{t("cancel")}</Button>
                <Button variant="destructive" disabled={pending} onClick={async () => {
                  if (confirm === "discard") { onOpenChange(false); return }
                  if (confirm === "delete") {
                    if (card && onDelete && await run(() => onDelete(card))) onOpenChange(false)
                    return
                  }
                  if (await run(() => onChatWithAgent(values, confirm))) onOpenChange(false)
                }}>{t(confirm === "discard" ? "discardChanges" : confirm === "delete" ? "confirmDelete" : "discardAndContinue")}</Button>
              </div>
            </div>
          ) : <>
            {card && onDelete && (
              <Button
                variant="ghost"
                className="kanban-dialog-delete"
                disabled={pending}
                onClick={() => setConfirm("delete")}
              >
                <Trash2 className="kanban-icon" />
                {t("delete")}
              </Button>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  disabled={pending || (!values.title.trim() && !values.note.trim())}
                >
                  <MessageSquare className="kanban-icon" />
                  {t("chatWithAgent")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => void chat("current")}
                >
                  {t("chatCurrentSession")}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => void chat("new")}
                >
                  {t("chatNewSession")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              disabled={pending || !values.title.trim()}
              onClick={async () => {
                if (!dueDateRef.current?.reportValidity()) return
                if (await run(() => onSave(values))) {
                  initialValues.current = values
                  if (!comment.trim()) onOpenChange(false)
                }
              }}
            >
              {t("save")}
            </Button>
          </>}
        </DialogFooter>
      </DrawerContent>
    </Dialog>
  )
}
