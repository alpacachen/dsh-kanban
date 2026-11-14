import { describe, expect, it, vi } from "vitest"
import { createWorkflowFileActions } from "../src/client/lib/workflow-file-actions"

describe("native Task directory opening", () => {
  it("uses the native default opener request without a Session or invented action", async () => {
    const openWorkspacePath = vi.fn(async () => ({ ok: true })), signal = new AbortController().signal
    await createWorkflowFileActions({ openWorkspacePath }).openDirectory("/owned/task", signal)
    expect(openWorkspacePath).toHaveBeenCalledExactlyOnceWith({ path: "/owned/task" }, signal)
  })
  it("reports a rejected native open instead of claiming it succeeded", async () => {
    await expect(createWorkflowFileActions({ openWorkspacePath: async () => ({ ok: false }) }).openDirectory("/owned/task", new AbortController().signal)).rejects.toThrow()
  })
})
