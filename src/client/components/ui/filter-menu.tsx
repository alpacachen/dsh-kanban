import type { ReactNode } from "react"
import { Check, Filter } from "lucide-react"
import { Button } from "./button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu"

export function FilterMenu<T extends string>({ label, value, onValueChange, options }: {
  label: string; value: T; onValueChange: (value: T) => void
  options: { value: T; label: string; leading?: ReactNode; count?: number }[]
}) {
  const active = value !== options[0]?.value
  return <DropdownMenu>
    <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className={`kanban-toolbar-button${active ? " is-active" : ""}`} title={label} aria-label={label} aria-pressed={active}><Filter className="kanban-icon" /></Button></DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      {options.map(option => <DropdownMenuItem key={option.value} role="menuitemradio" aria-checked={value === option.value} onSelect={() => onValueChange(option.value)}>
        <span className="kanban-filter-check">{value === option.value && <Check className="kanban-icon" />}</span>
        {option.leading}{option.label}{option.count !== undefined && <span className="kanban-filter-count">{option.count}</span>}
      </DropdownMenuItem>)}
    </DropdownMenuContent>
  </DropdownMenu>
}
