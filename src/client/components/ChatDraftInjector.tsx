import { useEffect, useState, useSyncExternalStore } from "react"
import type { PropsRuntime } from "@deepseek-ai/dsh-client-ui-slots"
import type {} from "@deepseek-ai/dsh-client-ui-conversation/client"
import type {} from "@deepseek-ai/dsh-client-ui-session/client"
import { consumeDraft, fillChatDraft, getDraftVersion, subscribeDraft, type AttachmentDrafts, type ChatDraft } from "@/lib/chat-bridge"
import { useT } from "@/lib/i18n"
import { Button } from "./ui/button"

type ChatDraftInjectorProps = PropsRuntime<"conversation.input.dock"> & { attachmentDrafts?: AttachmentDrafts }

/** Survives board navigation and fills the target composer without submitting it. */
export function ChatDraftInjector({ sessionId, inputActions, attachmentDrafts }: ChatDraftInjectorProps) {
  const version = useSyncExternalStore(subscribeDraft, getDraftVersion)
  const [failure, setFailure] = useState<{ sessionId: string; draft: ChatDraft; message: string } | null>(null)
  const t = useT()
  const apply = (draft: ChatDraft) => {
    try {
      fillChatDraft(sessionId, inputActions, draft, attachmentDrafts)
      setFailure(null)
    } catch (error) {
      setFailure({ sessionId, draft, message: String(error instanceof Error ? error.message : error) })
    }
  }
  useEffect(() => {
    if (!sessionId || !inputActions?.setDraft) return
    const draft = consumeDraft(sessionId)
    if (draft) apply(draft)
  }, [version, sessionId, inputActions, attachmentDrafts])

  if (!failure || failure.sessionId !== sessionId) return null
  return <div role="alert" className="kanban-dialog-error">
    {t("actionFailed")}{failure.message}
    <Button variant="ghost" size="sm" onClick={() => apply(failure.draft)}>{t("retry")}</Button>
  </div>
}
