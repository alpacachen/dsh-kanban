import { useSyncExternalStore } from "react"

/**
 * 国际化：跟随 DSH 的 locale 服务切换语言。
 *
 *  - installLocale(ctx)：在 apply 阶段注册 zh/en 词典，并绑定 t()（读当前语言）。
 *  - useT()：用 useSyncExternalStore + locale.subscribe 订阅 `locale/change`，
 *    语言切换时触发重渲染；返回的 t 每次调用都读当前语言。
 *  - 词典查找回退链由 DSH 负责：当前语言 → 本命名空间 zh → 公共命名空间 → key 本身。
 */
const NS = "dsh-kanban"

type Dict = Record<string, string>

const zh: Dict = {
  boardTab: "看板",
  loading: "看板加载中…",
  loadFailed: "看板加载失败：",
  actionFailed: "操作失败：",
  refresh: "刷新看板",
  settings: "设置",
  columnEdit: "列编辑",
  labelEdit: "标签编辑",
  emptyColumn: "暂无卡片",
  addCard: "添加卡片",
  dragSort: "拖拽排序",
  editCard: "编辑卡片",
  fieldTitle: "标题",
  fieldId: "任务 ID",
  titlePlaceholder: "卡片标题",
  fieldLabel: "标签",
  noLabel: "无标签",
  fieldPriority: "优先级",
  noPriority: "无优先级",
  fieldNote: "备注",
  notePlaceholder: "备注（可选）",
  cancel: "取消",
  save: "保存",
  chatWithAgent: "与 agent 聊一聊",
  chatCurrentSession: "当前对话",
  chatNewSession: "新建对话",
  delete: "删除",
  add: "添加",
  close: "关闭",
  columnEditDesc: "拖拽调整列的顺序，或重命名、删除、新增列表",
  newColumnPlaceholder: "新列表名称",
  labelEditDesc: "创建、删除或修改标签，颜色与标签绑定",
  newLabelPlaceholder: "新标签名称",
  priorityFilter: "按优先级筛选",
  all: "全部",
  warnings: "数据提示",
  dismiss: "知道了",
  activityTitle: "活动记录",
  activityEmpty: "暂无活动记录",
  actorHuman: "你",
  actorAgent: "Agent",
  actCreated: "创建于「{column}」，标签 {label}，优先级 {priority}",
  actMoved: "从「{from}」移到「{to}」",
  actLabel: "标签 {from} → {to}",
  actLabelSet: "设置标签 {to}",
  actLabelCleared: "清除标签 {from}",
  actPriority: "优先级 {from} → {to}",
  actPrioritySet: "设置优先级 {to}",
  actPriorityCleared: "清除优先级 {from}",
  actTitle: "标题 \"{from}\" → \"{to}\"",
  actNote: "更新了备注",
  actDeleted: "删除了卡片",
  actColumnAdded: "新增列表「{column}」",
  actColumnRenamed: "列表「{from}」→「{to}」",
  actColumnDeleted: "删除了列表「{column}」",
  actLabelAdded: "新增标签「{label}」",
  actLabelRenamed: "标签「{from}」→「{to}」",
  actLabelDeleted: "删除了标签「{label}」",
  actLabelColor: "标签「{label}」改色 {from} → {to}",
  noValue: "无",
}

const en: Dict = {
  boardTab: "Board",
  loading: "Loading board…",
  loadFailed: "Failed to load board: ",
  actionFailed: "Action failed: ",
  refresh: "Refresh board",
  settings: "Settings",
  columnEdit: "Edit lists",
  labelEdit: "Edit labels",
  emptyColumn: "No cards",
  addCard: "Add card",
  dragSort: "Drag to reorder",
  editCard: "Edit card",
  fieldTitle: "Title",
  fieldId: "Task ID",
  titlePlaceholder: "Card title",
  fieldLabel: "Label",
  noLabel: "No label",
  fieldPriority: "Priority",
  noPriority: "No priority",
  fieldNote: "Note",
  notePlaceholder: "Note (optional)",
  cancel: "Cancel",
  save: "Save",
  chatWithAgent: "Chat with agent",
  chatCurrentSession: "Current session",
  chatNewSession: "New session",
  delete: "Delete",
  add: "Add",
  close: "Close",
  columnEditDesc: "Drag to reorder lists, or rename, delete and add lists",
  newColumnPlaceholder: "New list name",
  labelEditDesc: "Create, delete or edit labels; color is bound to the label",
  newLabelPlaceholder: "New label name",
  priorityFilter: "Filter by priority",
  all: "All",
  warnings: "Data notice",
  dismiss: "Got it",
  activityTitle: "Activity",
  activityEmpty: "No activity yet",
  actorHuman: "You",
  actorAgent: "Agent",
  actCreated: "Created in \"{column}\" with label {label}, priority {priority}",
  actMoved: "Moved from \"{from}\" to \"{to}\"",
  actLabel: "Label {from} → {to}",
  actLabelSet: "Set label {to}",
  actLabelCleared: "Cleared label {from}",
  actPriority: "Priority {from} → {to}",
  actPrioritySet: "Set priority {to}",
  actPriorityCleared: "Cleared priority {from}",
  actTitle: "Title \"{from}\" → \"{to}\"",
  actNote: "Updated the note",
  actDeleted: "Deleted the card",
  actColumnAdded: "Added list \"{column}\"",
  actColumnRenamed: "List \"{from}\" → \"{to}\"",
  actColumnDeleted: "Deleted list \"{column}\"",
  actLabelAdded: "Added label \"{label}\"",
  actLabelRenamed: "Label \"{from}\" → \"{to}\"",
  actLabelDeleted: "Deleted label \"{label}\"",
  actLabelColor: "Label \"{label}\" color {from} → {to}",
  noValue: "None",
}

let localeService: any = null
let boundT: ((key: string) => string) | null = null

export function installLocale(ctx: any) {
  const locale = ctx.get("locale")
  if (locale === undefined) return
  localeService = locale
  try {
    locale.register(NS, "zh", zh)
    locale.register(NS, "en", en)
  } catch {
    // 已注册（热重载或重复 apply），忽略重复注册错误
  }
  boundT = locale.bind(NS)
}

/** 非 hook 版翻译（用于 slot 的 label thunk 等 React 之外的场景）。 */
export function t(key: string): string {
  if (boundT) return boundT(key)
  return zh[key] ?? key
}

const subscribe = (cb: () => void): (() => void) => {
  if (localeService && typeof localeService.subscribe === "function") {
    return localeService.subscribe(cb)
  }
  return () => {}
}
const getSnapshot = (): unknown => {
  if (localeService && typeof localeService.getSnapshot === "function") {
    return localeService.getSnapshot()
  }
  return null
}

/** React hook：订阅语言切换，返回读当前语言的 t()。 */
export function useT(): (key: string) => string {
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
  return t
}
