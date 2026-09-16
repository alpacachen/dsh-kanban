import type { Label, Priority } from "./types"

export interface PriorityMeta {
  label: string
  color: string
}

// Priority: P0 is highest and P2 is lowest.
export const PRIORITY_META: Record<Priority, PriorityMeta> = {
  high: { label: "P0", color: "#f87171" },
  medium: { label: "P1", color: "#fbbf24" },
  low: { label: "P2", color: "#38bdf8" },
}

export const PRIORITY_OPTIONS: Priority[] = ["high", "medium", "low"]

// Fallback color when no defined label matches.
export const FALLBACK_LABEL_COLOR = "#94a3b8"

/** Find the color bound to a label name. */
export function labelColor(labels: Label[], name: string | null): string {
  if (!name) return FALLBACK_LABEL_COLOR
  return labels.find((l) => l.name === name)?.color ?? FALLBACK_LABEL_COLOR
}
