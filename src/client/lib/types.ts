export type Priority = "high" | "medium" | "low"

export type ActivitySource = "human" | "agent"

export type ActivityType =
  | "card_created"
  | "card_moved"
  | "card_label_changed"
  | "card_priority_changed"
  | "card_title_changed"
  | "card_note_changed"
  | "card_deleted"
  | "column_added"
  | "column_renamed"
  | "column_deleted"
  | "label_added"
  | "label_renamed"
  | "label_deleted"
  | "label_color_changed"

export interface Activity {
  id: string
  ts: string
  cardId: string | null
  type: ActivityType
  source: ActivitySource
  field?: string
  from?: string | null
  to?: string | null
  meta?: {
    title?: string
    column?: string
    label?: string
    priority?: string
  }
}

export interface Column {
  id: string
  title: string
}

export interface Label {
  name: string
  color: string
}

export interface Card {
  id: string
  columnId: string
  title: string
  note: string
  label: string | null
  priority: Priority | null
  createdAt: string | null
  createdBy: ActivitySource | null
}

export interface Board {
  schemaVersion?: number
  columns: Column[]
  labels: Label[]
  cards: Card[]
  activities: Activity[]
}

export interface WorkspaceItem {
  workspaceId: string
  title: string
  sessionIds: string[]
}

export interface KanbanResponse {
  board?: Board
  persisted?: boolean
  error?: string
  message?: string
  warnings?: string[]
  undone?: boolean
}
