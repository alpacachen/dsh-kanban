import { useSyncExternalStore } from "react"
import type { Context } from "@deepseek-ai/cordis"
import type {} from "@deepseek-ai/dsh-client-locale/client"

/**
 * Follow the DSH locale service for language switching.
 *
 * - installLocale(ctx): register zh/en dictionaries during apply and bind t().
 * - useT(): subscribe to locale/change through useSyncExternalStore and locale.subscribe;
 *   rerender on language changes and read the current language on every t() call.
 * - DSH handles fallback: active locale -> namespace zh -> shared namespace -> key.
 */
const NS = "dsh-kanban"

type Dict = Record<string, string>

const zh: Dict = {
  boardTab: "看板",
  loading: "看板加载中…",
  loadFailed: "看板加载失败：",
  actionFailed: "操作失败：",
  actionRetry: "操作未完成，请重试。",
  confirmDelete: "确认删除",
  discardChanges: "放弃修改",
  discardCommentDesc: "未发送的评论不会带入对话，确定放弃评论并继续？",
  discardAndContinue: "放弃并继续",
  discardChangesDesc: "有未保存的修改或未发送的评论，确定放弃并关闭？",
  deleteCardDesc: "删除此卡片及其评论？此操作无法撤销。",
  deleteColumnDesc: "删除列表「{column}」？卡片将移到剩余的第一列。",
  deleteLabelDesc: "删除标签「{label}」？此标签将从所有卡片中移除。",
  clearFilter: "清除筛选",
  noMatchingCards: "无匹配卡片",
  refresh: "刷新看板",
  settings: "设置",
  columnEdit: "列编辑",
  labelEdit: "标签编辑",
  emptyColumn: "暂无卡片",
  addCard: "添加卡片",
  dragSort: "拖拽排序",
  cardKeyboardHelp: "按回车编辑卡片；按空格抓取卡片，用方向键移动，再按空格放下，或按 Esc 取消。",
  columnName: "列表名称",
  labelName: "标签名称",
  labelColor: "标签颜色",
  newLabelColor: "新标签颜色",
  deleteLabel: "删除标签",
  editCard: "编辑卡片",
  taskDetails: "任务详情",
  resizeTaskDetails: "调整任务详情宽度",
  resizeTaskDetailsHint: "拖动或使用左右方向键调整宽度，Home 最窄，End 最宽。",
  fieldTitle: "标题",
  fieldId: "任务 ID",
  titlePlaceholder: "卡片标题",
  fieldLabel: "标签",
  noLabel: "无标签",
  fieldPriority: "优先级",
  noPriority: "无优先级",
  fieldNote: "描述",
  notePlaceholder: "使用 Markdown 描述任务…",
  editNote: "编辑",
  finishEditingNote: "完成编辑",
  markdownEditHint: "Markdown 原文 · 点击保存后生效",
  emptyNote: "暂无描述，点击编辑添加。",
  copyCode: "复制代码",
  copiedCode: "已复制",
  footnotes: "脚注",
  commentsTitle: "评论",
  commentEmpty: "暂无评论",
  commentPlaceholder: "添加评论…",
  sendComment: "发送评论",
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
  labelFilter: "按标签筛选",
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
  actComment: "添加了评论",
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
  actionRetry: "The action did not complete. Please try again.",
  confirmDelete: "Confirm delete",
  discardChanges: "Discard changes",
  discardCommentDesc: "Unsent comments are not copied to chat. Discard the comment and continue?",
  discardAndContinue: "Discard and continue",
  discardChangesDesc: "Discard unsaved changes or unsent comments and close?",
  deleteCardDesc: "Delete this card and its comments? This cannot be undone.",
  deleteColumnDesc: "Delete list \"{column}\"? Its cards will move to the first remaining list.",
  deleteLabelDesc: "Delete label \"{label}\"? It will be removed from all cards.",
  clearFilter: "Clear filter",
  noMatchingCards: "No matching cards",
  refresh: "Refresh board",
  settings: "Settings",
  columnEdit: "Edit lists",
  labelEdit: "Edit labels",
  emptyColumn: "No cards",
  addCard: "Add card",
  dragSort: "Drag to reorder",
  cardKeyboardHelp: "Press Enter to edit. Press Space to pick up the card, use arrow keys to move, then Space to drop or Escape to cancel.",
  columnName: "List name",
  labelName: "Label name",
  labelColor: "Label color",
  newLabelColor: "New label color",
  deleteLabel: "Delete label",
  editCard: "Edit card",
  taskDetails: "Task details",
  resizeTaskDetails: "Resize task details",
  resizeTaskDetailsHint: "Drag or use Left/Right to resize; Home for minimum, End for maximum.",
  fieldTitle: "Title",
  fieldId: "Task ID",
  titlePlaceholder: "Card title",
  fieldLabel: "Label",
  noLabel: "No label",
  fieldPriority: "Priority",
  noPriority: "No priority",
  fieldNote: "Description",
  notePlaceholder: "Describe the task in Markdown…",
  editNote: "Edit",
  finishEditingNote: "Done editing",
  markdownEditHint: "Markdown source · Apply changes with Save",
  emptyNote: "No description yet. Select Edit to add one.",
  copyCode: "Copy code",
  copiedCode: "Copied",
  footnotes: "Footnotes",
  commentsTitle: "Comments",
  commentEmpty: "No comments yet",
  commentPlaceholder: "Add a comment…",
  sendComment: "Send comment",
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
  labelFilter: "Filter by label",
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
  actComment: "Added a comment",
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

export function installLocale(ctx: Context) {
  const locale = ctx.get("locale")
  if (locale === undefined) return
  localeService = locale
  ctx.effect(() => locale.register(NS, "zh", zh), "dsh-kanban: Chinese dictionary")
  ctx.effect(() => locale.register(NS, "en", en), "dsh-kanban: English dictionary")
  boundT = locale.bind(NS)
}

/** Translation outside React, for example in slot label thunks. */
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

/** Subscribe to locale changes and return the current translator. */
export function useT(): (key: string) => string {
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
  return t
}
