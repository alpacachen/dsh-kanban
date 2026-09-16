import { createElement as h } from "react"
import type { Context } from "@deepseek-ai/cordis"
import type { PropsRuntime } from "@deepseek-ai/dsh-client-ui-slots"
import type {} from "@deepseek-ai/dsh-client-ui-conversation/client"
import type {} from "@deepseek-ai/dsh-client-ui-renderer/client"
import { KanbanView } from "./KanbanView"
import { ChatDraftInjector } from "./components/ChatDraftInjector"
import { installLocale, t } from "./lib/i18n"

export const KanbanPlugin = {
  name: "dsh-kanban",
  inject: ["slots", "locale", "uiWorkspace"],
  apply(ctx: Context) {
    installLocale(ctx)
    const slots = ctx.get("slots")
    if (slots === undefined) return
    // 跨会话导航由 DSH 的 UI 工作区服务统一处理。
    const uiWorkspace = ctx.get("uiWorkspace")
    slots.inject("conversation.view", () =>
      slots.register(
        // label 用 thunk：每次投影重新读取，跟随 DSH 当前语言
        { name: "conversation.view", id: "kanban", order: 20, label: () => t("boardTab") },
        (props: PropsRuntime<"conversation.view">) => h(KanbanView, { ...props, uiWorkspace }),
      ),
    )
    // 常驻会话的隐形注入器：把「新建对话」排队好的卡片内容写入新会话输入框。
    slots.inject("conversation.input.dock", () =>
      slots.register(
        { name: "conversation.input.dock", id: "kanban-chat-draft", order: 100 },
        (props: PropsRuntime<"conversation.input.dock">) => h(ChatDraftInjector, props),
      ),
    )
  },
}
