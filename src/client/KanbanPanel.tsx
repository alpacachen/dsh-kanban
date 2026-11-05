import { useEffect, useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import type { PropsRuntime } from "@deepseek-ai/dsh-client-ui-slots"
import type {} from "@deepseek-ai/dsh-client-ui-layout/client"
import type {} from "@deepseek-ai/dsh-client-ui-workspace/client"
import type {} from "@deepseek-ai/dsh-client-ui-session/client"
import { KanbanView, type KanbanViewProps } from "./KanbanView"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./components/ui/dropdown-menu"
import { useT } from "./lib/i18n"

const WORKSPACE_KEY = "dsh-kanban:workspace"

type KanbanPanelProps = Pick<PropsRuntime<"main">, "useWorkspaces" | "useSessions"> & Pick<KanbanViewProps, "onCreateConversation">

export function KanbanPanel({ useWorkspaces, useSessions, onCreateConversation }: KanbanPanelProps) {
  const t = useT()
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
    <div className="kanban-panel-body">
      <header className="kanban-panel-header">
        <h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button" className="kanban-workspace-trigger" disabled={!items.length}
                aria-label={`${t("selectWorkspace")}: ${workspace?.title ?? t("boardTab")}`} title={workspace?.title}>
                <span>{workspace?.title ?? t("selectWorkspace")}</span>
                <ChevronDown aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="kanban-workspace-menu">
              {items.map((item) => <DropdownMenuItem key={item.workspaceId}
                aria-current={workspaceId === item.workspaceId ? "page" : undefined}
                title={item.title} onSelect={() => setSelected(item.workspaceId)}>
                <span className="kanban-workspace-name">{item.title}</span>
                {workspaceId === item.workspaceId && <Check aria-hidden="true" className="kanban-icon" />}
              </DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>
        </h1>
      </header>
      {workspace ? <KanbanView key={workspaceId} workspaceId={workspace.workspaceId} onCreateConversation={onCreateConversation} />
        : <div className="kanban-panel-empty" role={state === "error" ? "alert" : "status"}>
          {state === "error" ? `${t("loadFailed")}${error?.message ?? ""}` : t(phase !== "ready" ? "loadingWorkspaces" : items.length ? "selectWorkspaceHint" : "noWorkspaces")}
        </div>}
    </div>
  </section>
}
