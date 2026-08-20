export type Priority = "high" | "medium" | "low"

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
}

export interface Board {
  columns: Column[]
  labels: Label[]
  cards: Card[]
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
  undone?: boolean
}
