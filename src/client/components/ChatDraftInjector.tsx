import { useEffect, useSyncExternalStore } from "react"
import type { PropsRuntime } from "@deepseek-ai/dsh-client-ui-slots"
import type {} from "@deepseek-ai/dsh-client-ui-conversation/client"
import type {} from "@deepseek-ai/dsh-client-ui-session/client"
import { consumeDraft, getDraftVersion, subscribeDraft } from "@/lib/chat-bridge"

type ChatDraftInjectorProps = PropsRuntime<"conversation.input.dock">

/**
 * Invisible session-scoped component mounted in conversation.input.dock. It consumes
 * queued cross-session drafts and fills the current composer without rendering any UI.
 *
 * queueDraft() stores { sessionId -> text }. When the target session becomes active
 * or the queue version changes, write the text with setDraft and remove the entry.
 * This only fills a draft; it never submits or sends a message.
 */
export function ChatDraftInjector({ sessionId, inputActions }: ChatDraftInjectorProps) {
  const version = useSyncExternalStore(subscribeDraft, getDraftVersion)

  useEffect(() => {
    if (!sessionId || !inputActions?.setDraft) return
    const text = consumeDraft(sessionId)
    if (text != null) inputActions.setDraft(text)
  }, [version, sessionId, inputActions])

  return null
}
