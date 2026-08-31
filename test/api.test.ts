import { afterEach, describe, expect, it, vi } from "vitest"
import { callKanban } from "../src/client/lib/api"

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
