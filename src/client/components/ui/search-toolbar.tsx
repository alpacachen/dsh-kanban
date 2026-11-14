import type { ReactNode } from "react"
import { Search, X } from "lucide-react"
import { useT } from "../../lib/i18n"
import { Button } from "./button"
import { Input } from "./input"

export function SearchToolbar({ query, onQueryChange, label, placeholder, children, actions }: {
  query: string; onQueryChange: (query: string) => void; label: string; placeholder: string; children?: ReactNode; actions?: ReactNode
}) {
  const t = useT()
  return <div className="kanban-search-row">
    <div className="kanban-search-field">
      <Search aria-hidden="true" />
      <Input type="search" aria-label={label} placeholder={placeholder} maxLength={200} value={query} onChange={event => onQueryChange(event.target.value)} />
      {query && <Button variant="ghost" size="icon" aria-label={t("clearSearch")} onClick={() => onQueryChange("")}><X /></Button>}
    </div>
    <div className="kanban-toolbar">{children}</div>
    {actions && <div className="kanban-toolbar-settings">{actions}</div>}
  </div>
}
