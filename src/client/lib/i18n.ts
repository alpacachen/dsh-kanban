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
  settings: "设置",
  columnEdit: "列编辑",
  labelEdit: "标签编辑",
  emptyColumn: "暂无卡片",
  addCard: "添加卡片",
  dragSort: "拖拽排序",
  editCard: "编辑卡片",
  editCardDesc: "修改卡片信息",
  newCardDesc: "新建一张任务卡片",
  fieldTitle: "标题",
  titlePlaceholder: "卡片标题",
  fieldLabel: "标签",
  noLabel: "无标签",
  fieldPriority: "优先级",
  noPriority: "无优先级",
  fieldNote: "备注",
  notePlaceholder: "备注（可选）",
  cancel: "取消",
  save: "保存",
  delete: "删除",
  add: "添加",
  close: "关闭",
  columnEditDesc: "拖拽调整列的顺序，或重命名、删除、新增列表",
  newColumnPlaceholder: "新列表名称",
  labelEditDesc: "创建、删除或修改标签，颜色与标签绑定",
  newLabelPlaceholder: "新标签名称",
  priorityFilter: "按优先级筛选",
  all: "全部",
}

const en: Dict = {
  boardTab: "Board",
  loading: "Loading board…",
  loadFailed: "Failed to load board: ",
  actionFailed: "Action failed: ",
  settings: "Settings",
  columnEdit: "Edit lists",
  labelEdit: "Edit labels",
  emptyColumn: "No cards",
  addCard: "Add card",
  dragSort: "Drag to reorder",
  editCard: "Edit card",
  editCardDesc: "Update card details",
  newCardDesc: "Create a new task card",
  fieldTitle: "Title",
  titlePlaceholder: "Card title",
  fieldLabel: "Label",
  noLabel: "No label",
  fieldPriority: "Priority",
  noPriority: "No priority",
  fieldNote: "Note",
  notePlaceholder: "Note (optional)",
  cancel: "Cancel",
  save: "Save",
  delete: "Delete",
  add: "Add",
  close: "Close",
  columnEditDesc: "Drag to reorder lists, or rename, delete and add lists",
  newColumnPlaceholder: "New list name",
  labelEditDesc: "Create, delete or edit labels; color is bound to the label",
  newLabelPlaceholder: "New label name",
  priorityFilter: "Filter by priority",
  all: "All",
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
