import { useEffect, useId, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { PropsRuntime } from "@deepseek-ai/dsh-client-ui-slots"
import type {} from "@deepseek-ai/dsh-client-ui-layout/client"
import type {} from "@deepseek-ai/dsh-client-ui-workspace/client"
import type {} from "@deepseek-ai/dsh-client-ui-session/client"
import { KanbanView, type KanbanViewProps } from "./KanbanView"
import { Button } from "./components/ui/button"
import { useT } from "./lib/i18n"

const WORKSPACE_KEY = "dsh-kanban:workspace"

type KanbanPanelProps = Pick<PropsRuntime<"main">, "useWorkspaces" | "useSessions"> & Pick<KanbanViewProps, "onCreateConversation">

export function KanbanPanel({ useWorkspaces, useSessions, onCreateConversation }: KanbanPanelProps) {
  const t = useT()
  const [collapsed, setCollapsed] = useState(true)
  const workspaceListId = useId()
  const { items, phase, state, error } = useWorkspaces((state) => state)
  const currentSession = useSessions((state) => Object.values(state.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id)
  const [selected, setSelected] = useState(() => {
    try { return localStorage.getItem(WORKSPACE_KEY) ?? "" } catch { return "" }
  })
  const workspace = items.find((item) => item.workspaceId === selected)
    ?? items.find((item) => currentSession && item.sessionIds.includes(currentSession))
    ?? (items.length === 1 ? items[0] : undefined)
  const workspaceId = workspace?.workspaceId ?? ""

  useEffect(() => {
    if (phase !== "ready") return
    setSelected(workspaceId)
    try {
      if (workspaceId) localStorage.setItem(WORKSPACE_KEY, workspaceId)
      else localStorage.removeItem(WORKSPACE_KEY)
    } catch { /* Workspace selection still works when storage is unavailable. */ }
  }, [workspaceId, phase])

  return <section className="kanban-root kanban-panel" aria-label={t("boardTab")}>
    <nav className="kanban-workspaces" data-collapsed={collapsed} aria-label={t("workspace")}>
      <div className="kanban-workspaces-header">
        <p className="kanban-workspaces-heading">{t("workspace")}</p>
        <Button variant="ghost" size="icon" className="kanban-workspaces-toggle"
          aria-label={t(collapsed ? "expandWorkspaces" : "collapseWorkspaces")}
          title={t(collapsed ? "expandWorkspaces" : "collapseWorkspaces")}
          aria-expanded={!collapsed} aria-controls={workspaceListId}
          onClick={() => setCollapsed((value) => !value)}>
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      <div id={workspaceListId} className="kanban-workspaces-list">
        {items.map((item) => <Button key={item.workspaceId} variant="ghost"
          className="kanban-workspace-button" aria-label={item.title} title={item.title}
          aria-current={workspaceId === item.workspaceId ? "page" : undefined}
          onClick={() => setSelected(item.workspaceId)}>
          <span className="kanban-workspace-icon" aria-hidden="true">{Array.from(item.title.trim())[0]?.toLocaleUpperCase() || "?"}</span>
          <span className="kanban-workspace-name">{item.title}</span>
        </Button>)}
      </div>
    </nav>
    <div className="kanban-panel-body">
      <header className="kanban-panel-header">
        <h1 title={workspace?.title}>{workspace?.title ?? t("boardTab")}</h1>
      </header>
      {workspace ? <KanbanView key={workspaceId} workspaceId={workspace.workspaceId} onCreateConversation={onCreateConversation} />
        : <div className="kanban-panel-empty" role={state === "error" ? "alert" : "status"}>
          {state === "error" ? `${t("loadFailed")}${error?.message ?? ""}` : t(phase !== "ready" ? "loadingWorkspaces" : items.length ? "selectWorkspaceHint" : "noWorkspaces")}
        </div>}
    </div>
  </section>
}
