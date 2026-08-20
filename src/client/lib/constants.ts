import type { Label, Priority } from "./types"

export interface PriorityMeta {
  label: string
  color: string
}

// 优先级：P0 最高、P2 最低
export const PRIORITY_META: Record<Priority, PriorityMeta> = {
  high: { label: "P0", color: "#f87171" },
  medium: { label: "P1", color: "#fbbf24" },
  low: { label: "P2", color: "#38bdf8" },
}

export const PRIORITY_OPTIONS: Priority[] = ["high", "medium", "low"]

// 未匹配到已定义标签时的回退颜色
export const FALLBACK_LABEL_COLOR = "#94a3b8"

/** 按标签名查找颜色（标签与颜色绑定） */
export function labelColor(labels: Label[], name: string | null): string {
  if (!name) return FALLBACK_LABEL_COLOR
  return labels.find((l) => l.name === name)?.color ?? FALLBACK_LABEL_COLOR
}
