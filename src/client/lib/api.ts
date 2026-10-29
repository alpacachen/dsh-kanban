import type { ImageRef, KanbanResponse } from "./types"

/** Fetch the same-origin /api/kanban route registered through the authenticated host Connection extension. */
export function callKanban(
  method: string,
  args: Record<string, unknown> = {},
  workspaceId = "default",
): Promise<KanbanResponse> {
  return fetch("/api/kanban", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ method, args: { ...args, workspaceId } }),
  }).then(readResponse)
}

async function readResponse(response: Response): Promise<KanbanResponse> {
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
}

export function imageUrl(workspaceId: string, cardId: string, attachmentId: string): string {
  return "/api/kanban/image?" + new URLSearchParams({ workspaceId, cardId, attachmentId })
}

export function uploadImage(workspaceId: string, cardId: string, file: File, signal?: AbortSignal): Promise<KanbanResponse> {
  return fetch("/api/kanban/image/upload?" + new URLSearchParams({ workspaceId, cardId }), {
    method: "POST",
    headers: { "content-type": file.type },
    body: file,
    signal,
  }).then(readResponse)
}

/** Fetch all saved images before navigation, so a failed read leaves the task dialog intact. */
export async function readChatImages(workspaceId: string, cardId: string, images: ImageRef[], signal: AbortSignal): Promise<File[]> {
  const files: File[] = []
  for (const [index, image] of images.entries()) {
    const response = await fetch(imageUrl(workspaceId, cardId, image.attachmentId), { signal })
    if (!response.ok) throw new Error(`Image ${index + 1}: HTTP ${response.status}`)
    const blob = await response.blob()
    if (!blob.size || !["image/png", "image/jpeg", "image/webp"].includes(blob.type)) throw new Error(`Image ${index + 1}: invalid image response`)
    const extension = blob.type === "image/jpeg" ? "jpg" : blob.type.slice(6)
    files.push(new File([blob], `${cardId}-${index + 1}.${extension}`, { type: blob.type }))
  }
  return files
}
