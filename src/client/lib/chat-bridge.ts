import { t } from "@/lib/i18n"

/**
 * 跨会话草稿交接桥：把「新建对话」的卡片内容交给目标会话的输入机。
 *
 * 「当前对话」直接用 inputActions.setDraft 写入即可；但「新建对话」要先
 * 经 workspaces.connectWorkspace 拿到新会话 id、再 sessions.open 切换过去。
 * 切换后当前会话的 inputActions 会重新解析到新会话，但看板视图（conversation.view
 * 槽位）在空白会话上默认落到 chat 视图而卸载，无法靠看板自身补写草稿。
 *
 * 因此这里用一个模块级待办表：KanbanView 把 { sessionId -> text } 排入队列，
 * 常驻会话的 ChatDraftInjector（注册在 conversation.input.dock）在目标会话
 * 成为当前会话时消费它并写入 setDraft，再清除。这样跨会话交接不依赖看板视图
 * 是否还挂载。
 */
type Listener = () => void

const pending = new Map<string, string>()
let version = 0
const listeners = new Set<Listener>()

/** 为指定会话排队一段待写入的草稿文本。 */
export function queueDraft(sessionId: string, text: string): void {
  pending.set(sessionId, text)
  version++
  for (const l of listeners) l()
}

/** 消费并移除指定会话的待写草稿；无则返回 null。 */
export function consumeDraft(sessionId: string): string | null {
  const text = pending.get(sessionId)
  if (text == null) return null
  pending.delete(sessionId)
  version++
  for (const l of listeners) l()
  return text
}

/** 订阅待办表变化（供 useSyncExternalStore 使用）。 */
export function subscribeDraft(listener: Listener): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

/** 待办表版本号（作为 useSyncExternalStore 的 snapshot）。 */
export function getDraftVersion(): number {
  return version
}

/** 把卡片表单值序列化成一段用于对话的纯文本（含任务 ID 与标签，便于 agent 定位与理解卡片类型）。 */
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
