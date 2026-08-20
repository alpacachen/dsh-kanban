import type { KanbanResponse } from "./types"

/** 同源 fetch 调宿主注册的 /api/kanban 路由（官方 webServer 扩展点）。 */
export function callKanban(
  method: string,
  args: Record<string, unknown> = {},
  workspaceId = "default",
): Promise<KanbanResponse> {
  return fetch("/api/kanban", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ method, args: { ...args, workspaceId } }),
  }).then((r) => r.json())
}
