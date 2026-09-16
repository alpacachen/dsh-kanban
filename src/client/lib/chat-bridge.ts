import { t } from "@/lib/i18n"

/**
 * Cross-session draft handoff for card content targeting a new conversation.
 *
 * The current-session action can call inputActions.setDraft directly. A new session
 * first needs its id from the uiWorkspace.openWorkspace callback so the draft can be queued.
 * After navigation, inputActions resolves to the new session, but conversation.view
 * defaults to chat for empty sessions and unmounts the board before it can fill the draft.
 *
 * Keep a module-level queue of { sessionId -> text } populated by KanbanView.
 * ChatDraftInjector stays mounted in conversation.input.dock. When the target session
 * becomes active, it consumes the entry, calls setDraft, and removes the pending draft.
 * The handoff therefore works even after the board view unmounts.
 */
type Listener = () => void

const pending = new Map<string, string>()
let version = 0
const listeners = new Set<Listener>()

/** Queue a draft for the specified session. */
export function queueDraft(sessionId: string, text: string): void {
  pending.set(sessionId, text)
  version++
  for (const l of listeners) l()
}

/** Consume and remove the draft for a session, or return null when absent. */
export function consumeDraft(sessionId: string): string | null {
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
export function cardToChatText(values: { id?: string; title: string; note: string; label?: string }): string {
  const id = (values.id ?? "").trim()
  const title = (values.title ?? "").trim()
  const note = (values.note ?? "").trim()
  const label = (values.label ?? "").trim()
  const parts: string[] = []
  if (id) parts.push(t("fieldId") + ": " + id)
  if (title) parts.push(title)
  if (label) parts.push(t("fieldLabel") + ": " + label)
  if (note) parts.push(note)
  return parts.join("\n\n")
}
