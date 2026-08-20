import { createElement as h } from "react"
import { KanbanView } from "./KanbanView"
import { ChatDraftInjector } from "./components/ChatDraftInjector"
import { installLocale, t } from "./lib/i18n"

export const KanbanPlugin = {
  name: "dsh-kanban",
  inject: ["slots", "locale"],
  apply(ctx: any) {
    installLocale(ctx)
    const slots = ctx.get("slots")
    if (slots === undefined) return
    // 跨会话草稿交接需要这两个服务；核心服务缺席时降级为「当前对话」也可用。
    const workspaces = ctx.get("workspaces")
    const sessions = ctx.get("sessions")
    slots.inject("conversation.view", () =>
      slots.register(
        // label 用 thunk：每次投影重新读取，跟随 DSH 当前语言
        { name: "conversation.view", id: "kanban", order: 20, label: () => t("boardTab") },
        (props: any) => h(KanbanView, { ...props, workspaces, sessions }),
      ),
    )
    // 常驻会话的隐形注入器：把「新建对话」排队好的卡片内容写入新会话输入框。
    slots.inject("conversation.input.dock", () =>
      slots.register(
        { name: "conversation.input.dock", id: "kanban-chat-draft", order: 100 },
        (props: any) => h(ChatDraftInjector, props),
      ),
    )
  },
}
