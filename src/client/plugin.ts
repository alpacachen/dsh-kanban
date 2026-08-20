import { createElement as h } from "react"
import { KanbanView } from "./KanbanView"
import { installLocale, t } from "./lib/i18n"

export const KanbanPlugin = {
  name: "dsh-kanban",
  inject: ["slots", "locale"],
  apply(ctx: any) {
    installLocale(ctx)
    const slots = ctx.get("slots")
    if (slots === undefined) return
    slots.inject("conversation.view", () =>
      slots.register(
        // label 用 thunk：每次投影重新读取，跟随 DSH 当前语言
        { name: "conversation.view", id: "kanban", order: 20, label: () => t("boardTab") },
        (props: any) => h(KanbanView, props),
      ),
    )
  },
}
