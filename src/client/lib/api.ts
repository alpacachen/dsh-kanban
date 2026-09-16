import type { KanbanResponse } from "./types"

/** Fetch the same-origin /api/kanban route registered through the host webServer extension. */
export function callKanban(
  method: string,
  args: Record<string, unknown> = {},
  workspaceId = "default",
): Promise<KanbanResponse> {
  return fetch("/api/kanban", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ method, args: { ...args, workspaceId } }),
  }).then(async (response) => {
    let payload: KanbanResponse
    try {
      payload = await response.json() as KanbanResponse
    } catch {
      throw new Error(`Kanban request failed (${response.status})`)
    }
    if (!response.ok || payload.error) {
      throw new Error(payload.error || `Kanban request failed (${response.status})`)
    }
    return payload
  })
}
