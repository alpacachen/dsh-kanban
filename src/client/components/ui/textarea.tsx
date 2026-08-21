import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea className={cn("kanban-textarea", className)} ref={ref} {...props} />
  )
)
Textarea.displayName = "Textarea"

export { Textarea }
