import * as React from "react"
import { cn } from "@/lib/utils"

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline"
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant | null
}

export function badgeVariants({ variant, className }: { variant?: BadgeVariant | null; className?: string } = {}) {
  return cn("kanban-badge", `kanban-badge--${variant ?? "default"}`, className)
}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={badgeVariants({ variant, className })} {...props} />
}

export { Badge }
