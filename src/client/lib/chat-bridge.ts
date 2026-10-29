import { t } from "@/lib/i18n"

import type { ConversationController, InputActions } from "@deepseek-ai/dsh-client-ui-conversation/client"

export type AttachmentDrafts = Pick<ConversationController, "createDrafts" | "releaseDraftAttachments">
export interface ChatDraft { text: string; files: File[] }

/** Register browser-owned attachments before changing the text; a locked composer keeps its draft. */
export function fillChatDraft(sessionId: string, input: InputActions, draft: ChatDraft, store?: AttachmentDrafts): void {
  if (draft.files.length) {
    if (!store?.createDrafts || !store.releaseDraftAttachments || !input.addAttachments) throw new Error(t("chatImagesUnavailable"))
    const attachments = store.createDrafts(sessionId as Parameters<AttachmentDrafts["createDrafts"]>[0], draft.files)
    try {
      if (!input.addAttachments(attachments.map((item) => item.id))) throw new Error(t("chatImagesBusy"))
    } catch (error) {
      store.releaseDraftAttachments(attachments)
      throw error
    }
  }
  input.setDraft(draft.text)
}

/** Files remain local until the target composer mounts; this queue never sends messages. */
type Listener = () => void

const pending = new Map<string, ChatDraft>()
let version = 0
const listeners = new Set<Listener>()

/** Queue a draft for the specified session. */
export function queueDraft(sessionId: string, text: string, files: File[] = []): void {
  pending.set(sessionId, { text, files })
  version++
  for (const l of listeners) l()
}

/** Consume and remove the draft for a session, or return null when absent. */
export function consumeDraft(sessionId: string): ChatDraft | null {
  const text = pending.get(sessionId)
  if (text == null) return null
  pending.delete(sessionId)
  version++
  for (const l of listeners) l()
  return text
}

/** Subscribe to queue updates for useSyncExternalStore. */
export function subscribeDraft(listener: Listener): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

/** Queue revision used as the useSyncExternalStore snapshot. */
export function getDraftVersion(): number {
  return version
}

/** Serialize card fields into chat text, including the task id and label for agent context. */
export function cardToChatText(values: { id?: string; title: string; note: string; label?: string; dueDate?: string | null; completed?: boolean; completedAt?: string | null; imageCount?: number }): string {
  const id = (values.id ?? "").trim()
  const title = (values.title ?? "").trim()
  const note = (values.note ?? "").trim()
  const label = (values.label ?? "").trim()
  const parts: string[] = []
  if (id) parts.push(t("fieldId") + ": " + id)
  if (title) parts.push(title)
  if (label) parts.push(t("fieldLabel") + ": " + label)
  if (values.dueDate) parts.push(t("fieldDueDate") + ": " + values.dueDate)
  if (values.completed !== undefined) parts.push(t("completionStatus") + ": " + t(values.completed ? "completed" : "incomplete"))
  if (values.completed) parts.push(t("fieldCompletedDate") + ": " + (values.completedAt || t("completedDateUnknown")))
  if (note) parts.push(note)
  if (values.imageCount) parts.push(t("imagesChatHint").replace("{count}", String(values.imageCount)))
  return parts.join("\n\n")
}
