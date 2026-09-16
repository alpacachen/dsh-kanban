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
    // DSH UI workspace services handle navigation between sessions.
    const uiWorkspace = ctx.get("uiWorkspace")
    slots.inject("conversation.view", () =>
      slots.register(
        // Resolve the label on each projection to follow the active DSH locale.
        { name: "conversation.view", id: "kanban", order: 20, label: () => t("boardTab") },
        (props: PropsRuntime<"conversation.view">) => h(KanbanView, { ...props, uiWorkspace }),
      ),
    )
    // Keep a session-scoped injector mounted to fill queued drafts in new sessions.
    slots.inject("conversation.input.dock", () =>
      slots.register(
        { name: "conversation.input.dock", id: "kanban-chat-draft", order: 100 },
        (props: PropsRuntime<"conversation.input.dock">) => h(ChatDraftInjector, props),
      ),
    )
  },
}
