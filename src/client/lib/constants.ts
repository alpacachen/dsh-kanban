import type { Label, Priority } from "./types"

export interface PriorityMeta {
  label: string
  color: string
}

// Priority: P0 is highest and P2 is lowest.
export const PRIORITY_META: Record<Priority, PriorityMeta> = {
  high: { label: "P0", color: "var(--dsw-alias-state-error-primary)" },
  medium: { label: "P1", color: "var(--dsw-alias-state-warn-primary)" },
  low: { label: "P2", color: "var(--dsw-alias-state-business-primary)" },
}

export const PRIORITY_OPTIONS: Priority[] = ["high", "medium", "low"]

// Fallback color when no defined label matches.
export const FALLBACK_LABEL_COLOR = "var(--dsw-alias-label-tertiary)"

/** Find the color bound to a label name. */
export function labelColor(labels: Label[], name: string | null): string {
  if (!name) return FALLBACK_LABEL_COLOR
  return labels.find((l) => l.name === name)?.color ?? FALLBACK_LABEL_COLOR
}
