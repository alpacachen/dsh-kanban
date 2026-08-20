import { PRIORITY_META } from "./constants"
import type { Activity, Priority } from "./types"

/** 把 i18n 模板里的 {key} 占位符替换为值。 */
const fill = (template: string, vars: Record<string, string>): string =>
  template.replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? "")

const priorityLabel = (p: string | null | undefined): string => {
  if (p === "high" || p === "medium" || p === "low") return PRIORITY_META[p as Priority].label
  return ""
}

/** 把一条活动事件渲染成一句人话（配合 i18n 词典）。 */
export function describeActivity(activity: Activity, t: (key: string) => string): string {
  const meta = activity.meta || {}
  const none = t("noValue")
  const from = activity.from ?? null
  const to = activity.to ?? null

  switch (activity.type) {
    case "card_created": {
      const label = meta.label ?? none
      const priority = meta.priority ? priorityLabel(meta.priority) || none : none
      return fill(t("actCreated"), { column: meta.column ?? "", label, priority })
    }
    case "card_moved":
      return fill(t("actMoved"), { from: from ?? none, to: to ?? none })
    case "card_label_changed": {
      if (from == null && to != null) return fill(t("actLabelSet"), { to })
      if (from != null && to == null) return fill(t("actLabelCleared"), { from })
      return fill(t("actLabel"), { from: from ?? none, to: to ?? none })
    }
    case "card_priority_changed": {
      const fromText = from ? priorityLabel(from) || from : none
      const toText = to ? priorityLabel(to) || to : none
      if (from == null && to != null) return fill(t("actPrioritySet"), { to: toText })
      if (from != null && to == null) return fill(t("actPriorityCleared"), { from: fromText })
      return fill(t("actPriority"), { from: fromText, to: toText })
    }
    case "card_title_changed":
      return fill(t("actTitle"), { from: from ?? none, to: to ?? none })
    case "card_note_changed":
      return t("actNote")
    case "card_deleted":
      return t("actDeleted")
    case "column_added":
      return fill(t("actColumnAdded"), { column: meta.column ?? "" })
    case "column_renamed":
      return fill(t("actColumnRenamed"), { from: from ?? none, to: to ?? none })
    case "column_deleted":
      return fill(t("actColumnDeleted"), { column: meta.column ?? "" })
    case "label_added":
      return fill(t("actLabelAdded"), { label: meta.label ?? "" })
    case "label_renamed":
      return fill(t("actLabelRenamed"), { from: from ?? none, to: to ?? none })
    case "label_deleted":
      return fill(t("actLabelDeleted"), { label: meta.label ?? "" })
    case "label_color_changed":
      return fill(t("actLabelColor"), { label: meta.label ?? "", from: from ?? none, to: to ?? none })
    default:
      return activity.type
  }
}

const pad = (n: number) => String(n).padStart(2, "0")

/** 绝对时间：YYYY-MM-DD HH:mm（本地时区）。 */
export function formatTime(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}
