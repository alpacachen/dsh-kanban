import React from "react"
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"
import { WorkflowTaskFiles } from "../src/client/WorkflowTaskFiles"
import { WorkflowFilePreview } from "../src/client/WorkflowFilePreview"
import { t } from "../src/client/lib/i18n"
import type { WorkflowApi } from "../src/client/lib/workflow-types"

afterEach(() => { vi.unstubAllGlobals(); vi.useRealTimers() })
describe("Task files and local preview", () => {
  it("does not poll completed tasks and keeps stage reports out of the deliverables list", async () => {
    vi.useFakeTimers()
    const call = vi.fn(async () => ({ directory: "/owned/task", files: [
      { name: "report.md", path: "report.md", byteLength: 5, kind: "file" },
      { name: "attempt.md", path: ".workflow-results/attempt.md", byteLength: 5000, kind: "stage-result" },
    ] }))
    const api = { call } as WorkflowApi
    let view: ReturnType<typeof render>
    await act(async () => { view = render(<WorkflowTaskFiles taskId="one" api={api} active={false} revision={1} />) })
    expect(screen.queryByText(/attempt.md/)).toBeNull()
    await act(async () => { await vi.advanceTimersByTimeAsync(30000) })
    expect(call).toHaveBeenCalledTimes(1)
    await act(async () => { view!.rerender(<WorkflowTaskFiles taskId="one" api={api} active revision={2} />) })
    await act(async () => { await vi.advanceTimersByTimeAsync(10000) })
    expect(call).toHaveBeenCalledTimes(3)
  })
  it("opens a task-owned Markdown file in a modal and opens only the requested directory natively", async () => {
    const directory = "/fixture/.dsh/workflow-artifacts/task-one", openDirectory = vi.fn(async () => {})
    const call = vi.fn(async (method: string, args: any) => method === "getTaskFiles" ? { directory, files: [{ name: "report.md", path: "notes/report.md", byteLength: 1200, updatedAt: 1, kind: "file" }] } : { directory, path: `${directory}/${args.path}` })
    const fetcher = vi.fn(async () => new Response("# Task result\n\nSaved file content")); vi.stubGlobal("fetch", fetcher)
    render(<WorkflowTaskFiles taskId="task-one" api={{ call, openDirectory } as WorkflowApi} />)
    fireEvent.click(await screen.findByRole("button", { name: "notes/report.md" }))
    await screen.findByRole("dialog", { name: "report.md" })
    await screen.findByText(/Saved file content/)
    expect(call.mock.calls.find(([method]) => method === "getTaskFile")).toEqual(["getTaskFile", { taskId: "task-one", path: "notes/report.md" }, expect.any(AbortSignal)])
    expect(fetcher.mock.calls[0][0]).toContain("/api/file?path=")
    expect(openDirectory).not.toHaveBeenCalled()
    fireEvent.click(screen.getByRole("button", { name: t("close") }))
    fireEvent.click(screen.getByRole("button", { name: t("wfFilesOpenDirectory") }))
    await waitFor(() => expect(openDirectory).toHaveBeenCalledWith(directory, expect.any(AbortSignal)))
    expect(call.mock.calls.some(([method]) => ["createTask", "retryTask"].includes(method))).toBe(false)
  })
  it("keeps raw HTML as code and removes file-opening and download actions", async () => {
    const api = { call: vi.fn() } as WorkflowApi, file = { name: "output.html", path: "output.html", byteLength: 20, updatedAt: 1, kind: "file" as const }
    vi.stubGlobal("fetch", vi.fn(async () => new Response("<script>window.bad=true</script>")))
    const view = render(<WorkflowFilePreview file={file} target={{ path: "/owned/output.html", directory: "/owned" }} onClose={vi.fn()} />)
    expect((await screen.findByText("<script>window.bad=true</script>")).tagName).toBe("PRE")
    expect(document.querySelector("iframe,script")).toBeNull()
    view.unmount()
    render(<WorkflowFilePreview file={{ ...file, name: "slides.pptx" }} target={{ path: "/owned/slides.pptx", directory: "/owned" }} onClose={vi.fn()} />)
    expect(screen.getByText(t("wfFileUnsupported"))).toBeTruthy()
    expect(screen.queryByRole("link")).toBeNull()
    expect(screen.queryByRole("button", { name: t("wfFileOpenSystem") })).toBeNull()
  })
  it("reports a malformed or unavailable file listing without crashing the task page", async () => {
    render(<WorkflowTaskFiles taskId="one" api={{ call: vi.fn(async () => ({ invalid: true })) } as WorkflowApi} />)
    expect((await screen.findByRole("alert")).textContent).toBe(t("wfFilesUnavailable"))
  })
  it("requires confirmation before deleting the selected file and refreshes after success", async () => {
    let files = [{ name: "report.md", path: "report.md", version: "v1", byteLength: 5, updatedAt: 1, kind: "file" }]
    const call = vi.fn(async (method: string) => {
      if (method === "deleteTaskFile") { files = []; return { deleted: true } }
      return { directory: "/owned/task", files }
    })
    render(<WorkflowTaskFiles taskId="one" api={{ call } as WorkflowApi} />)
    fireEvent.click(await screen.findByRole("button", { name: `${t("delete")} · report.md` }))
    expect(call.mock.calls.some(([method]) => method === "deleteTaskFile")).toBe(false)
    fireEvent.click(screen.getByRole("button", { name: t("confirmDelete") }))
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull())
    expect(call.mock.calls.find(([method]) => method === "deleteTaskFile")).toEqual(["deleteTaskFile", { request: { requestId: expect.any(String), taskId: "one", path: "report.md", expectedVersion: "v1" } }, expect.any(AbortSignal)])
    await screen.findByText(t("wfFilesEmpty"))
  })

})
