import { afterEach, describe, expect, it, vi } from "vitest"
import { callKanban, imageUrl, uploadImage } from "../src/client/lib/api"

afterEach(() => vi.unstubAllGlobals())

describe("kanban API client", () => {
  it("serializes a comment mutation with its workspace", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ board: { cards: [] } }),
    })
    vi.stubGlobal("fetch", fetchMock)

    await callKanban("addComment", { id: "k1", content: "Ready" }, "ws-1")

    expect(fetchMock).toHaveBeenCalledWith("/api/kanban", expect.objectContaining({
      method: "POST",
      body: JSON.stringify({ method: "addComment", args: { id: "k1", content: "Ready", workspaceId: "ws-1" } }),
    }))
  })

  it("uploads binary image bytes separately from board JSON and escapes image identities", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ persisted: true }) })
    vi.stubGlobal("fetch", fetchMock)
    const file = new File(["image bytes"], "screenshot.png", { type: "image/png" })
    const signal = new AbortController().signal
    await uploadImage("workspace & one", "card/1", file, signal)
    expect(fetchMock).toHaveBeenCalledWith("/api/kanban/image/upload?workspaceId=workspace+%26+one&cardId=card%2F1", expect.objectContaining({
      method: "POST", body: file, headers: { "content-type": "image/png" }, signal,
    }))
    expect(imageUrl("ws", "card", "sha256:abc")).toBe("/api/kanban/image?workspaceId=ws&cardId=card&attachmentId=sha256%3Aabc")
  })

  it("rejects HTTP and business errors", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: async () => ({ error: "Unknown workspace" }),
    }))
    await expect(callKanban("get", {}, "missing")).rejects.toThrow("Unknown workspace")

    vi.stubGlobal("fetch", vi.fn().mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ error: "Card not found" }),
    }))
    await expect(callKanban("deleteCard", { id: "missing" }, "ws")).rejects.toThrow("Card not found")
  })
})
