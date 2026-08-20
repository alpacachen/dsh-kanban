import { useEffect, useSyncExternalStore } from "react"
import { consumeDraft, getDraftVersion, subscribeDraft } from "@/lib/chat-bridge"

interface ChatDraftInjectorProps {
  sessionId?: string
  inputActions?: { setDraft: (text: string) => void }
}

/**
 * 常驻会话的隐形组件：注册在 conversation.input.dock（session 作用域，随当前
 * 会话挂载），从跨会话草稿队列中消费并写入当前会话的输入框。本身不渲染任何 UI。
 *
 * 它消费 queueDraft() 排入的 { sessionId -> text }：一旦目标会话成为当前会话
 * （sessionId 变化）或队列更新（version 变化），就把文本 setDraft 进输入框并
 * 清除条目——只填充草稿，不触发 submit，因此不会自动发送。
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
