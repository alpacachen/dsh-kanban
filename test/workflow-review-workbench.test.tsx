import React from "react"
import { fireEvent, render, screen, within, waitFor } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"
import { WorkflowTaskDetail } from "../src/client/WorkflowTaskDetail"
import { t } from "../src/client/lib/i18n"
import type { WorkflowTask } from "../src/client/lib/workflow-types"

// Exercise the workbench/diagram contract without pretending this is visual verification.
vi.mock("../src/client/WorkflowDiagram", () => ({ WorkflowDiagram: ({ stages, onSelect, currentStageId, states }: any) => <section aria-label="Test diagram"><output data-testid="diagram-current">{currentStageId}</output><output data-testid="diagram-states">{JSON.stringify(states)}</output>{stages.map((stage: any) => <button key={stage.id} onClick={() => onSelect?.(stage.id)}>{stage.title}</button>)}</section> }))

function task(patch: Partial<WorkflowTask> = {}): WorkflowTask {
  return {
    id: "task-1", workspaceId: "workspace-1", workflowId: "flow-1", workflowName: "Report process", versionNumber: 2,
    title: "Review the report", state: "waiting_review", revision: 7, canReview: true,
    stageTitle: "Check the report", currentStageId: "review", input: { text: "Original input" },
    createdAt: 1794500000000, updatedAt: 1794500000000,
    stages: [{ id: "draft", kind: "agent", title: "Prepare report", prompt: "Read the project and summarize findings." }, { id: "review", kind: "review", title: "Check the report", prompt: "Verify sources and accuracy.", returnStageId: "draft" }],
    outputs: [{ id: "output-1", label: "Saved report", contentHash: "a".repeat(64), text: "A saved report.\n".repeat(500) }],
    review: { id: "review-1", subjectHash: "b".repeat(64), returnStageId: "draft" }, attention: null,
    attempts: [{ id: "attempt-1", stageId: "draft", state: "succeeded", startedAt: 1794500000000 }],
    visits: [{ id: "visit-1", stageId: "draft", state: "succeeded" }], reviews: [], artifactHistory: [], ...patch,
  }
}
const openReview = () => fireEvent.click(screen.getByRole("button", { name: "Check the report", exact: true }))
function props() {
  return { busy: false, disconnected: false, command: vi.fn(async () => task({ state: "completed", review: null, revision: 8 })) as any, onUpdated: vi.fn(), onBack: vi.fn(), onCopyTask: vi.fn(), onDirtyChange: vi.fn() }
}
afterEach(() => vi.restoreAllMocks())

describe("Workflow review workbench", () => {
  it("requires an explicit stopped-operation acknowledgement before reconciling an interrupted task", () => {
    const calls = props()
    render(<WorkflowTaskDetail {...calls} task={task({ state: "needs_attention", canRetry: false, canReconcile: true, review: null, currentStageId: "draft" })} />)
    fireEvent.click(screen.getByRole("button", { name: t("wfReconcile"), exact: true }))
    const confirmation = screen.getByRole("dialog", { name: t("wfReconcile") })
    const proceed = within(confirmation).getByRole("button", { name: t("wfReconcile") }) as HTMLButtonElement
    expect(proceed.disabled).toBe(true)
    expect(calls.command).not.toHaveBeenCalled()
    fireEvent.click(within(confirmation).getByRole("checkbox", { name: t("wfConfirmStopped") }))
    fireEvent.click(proceed)
    expect(calls.command).toHaveBeenCalledWith("reconcileTask", { taskId: "task-1", expectedRevision: 7, confirmedStopped: true })
  })
  it("opens the exact reports from a decided review and hides internal handoff data", async () => {
    const previous = { id: "reviewed", stageId: "draft", label: "Reviewed report", contentHash: "c".repeat(64), byteLength: 20, effective: false, createdAt: 1794500000000 }
    const current = task({ state: "completed", review: null, outputs: [{ id: "new-result", label: "Later result", contentHash: "d".repeat(64), text: "Do not substitute the later result." }],
      reviews: [{ id: "review-1", stageId: "review", state: "approved", feedback: "", artifactIds: [previous.id], decidedAt: 1794500001000 }], artifactHistory: [previous] })
    const call = vi.fn(async (method: string) => method === "getTaskFiles" ? { directory: "/task", files: [] } : { ...previous, text: 'The exact approved result.\n<workflow-handoff>{"internal":"protocol"}</workflow-handoff>' })
    render(<WorkflowTaskDetail {...props()} task={current} api={{ call } as any} />)
    openReview()
    expect(await screen.findByText("The exact approved result.")).toBeTruthy()
    expect(screen.queryByText("Do not substitute the later result.")).toBeNull()
    expect(screen.queryByText(/internal.*protocol/)).toBeNull()
    expect(screen.getByText(t("wfReviewedReport"))).toBeTruthy()
    expect(screen.getByRole("dialog").querySelector("time")?.getAttribute("datetime")).toBe(new Date(1794500001000).toISOString())
    expect(screen.queryByRole("button", { name: t("wfApproveContinue") })).toBeNull()
    expect(call).toHaveBeenCalledWith("getArtifact", { taskId: current.id, artifactId: "reviewed" }, expect.any(AbortSignal))
  })
  it("reads reports only when a stage opens, caches them and keeps failed reads from being approved", async () => {
    const { text, ...metadata } = task().outputs[0]
    const current = task({ outputs: [metadata] })
    const call = vi.fn(async (method: string) => {
      if (method === "getTaskFiles") return { directory: "/owned/task", files: [] }
      if (method === "getArtifact") return { ...metadata, text: "Loaded on demand" }
      throw Error(method)
    })
    const view = render(<WorkflowTaskDetail {...props()} task={current} api={{ call } as any} />)
    expect(call.mock.calls.some(([method]) => method === "getArtifact")).toBe(false)
    openReview()
    await screen.findByText("Loaded on demand")
    expect(call.mock.calls.filter(([method]) => method === "getArtifact")).toHaveLength(1)
    fireEvent.click(screen.getByRole("button", { name: t("close"), exact: true })); openReview()
    expect(call.mock.calls.filter(([method]) => method === "getArtifact")).toHaveLength(1)
    view.unmount()
    call.mockImplementation(async method => { if (method === "getTaskFiles") return { directory: "/owned/task", files: [] }; throw Error("Report unavailable") })
    render(<WorkflowTaskDetail {...props()} task={current} api={{ call } as any} />)
    openReview()
    await screen.findByText("Report unavailable", { exact: false })
    expect((screen.getByRole("button", { name: t("wfApproveContinue") }) as HTMLButtonElement).disabled).toBe(true)
  })
  it("keeps a long input accessible without covering the canvas when the page opens", async () => {
    const text = "Long task input ".repeat(200)
    render(<WorkflowTaskDetail {...props()} embedded task={task({ input: { text } })} />)
    const heading = screen.getByRole("heading", { name: text.trim() })
    await waitFor(() => expect(document.activeElement).toBe(heading))
    expect(screen.queryByRole("tooltip")).toBeNull()
    expect(heading.textContent).toBe(text)
  })

  it("opens a stage chat only on click, keeps it pinned as execution advances and releases it on close", () => {
    const calls = props(), renderExecution = vi.fn((sessionId: string) => <div data-testid="native-chat">{sessionId}</div>)
    const running = task({ state: "running", review: null, currentStageId: "draft", attempts: [{ id: "old", stageId: "draft", state: "failed", sessionId: "old-session" }, { id: "current", stageId: "draft", state: "running", sessionId: "live-session" }] })
    const view = render(<WorkflowTaskDetail {...calls} task={running} renderExecution={renderExecution} />)
    expect(screen.queryByRole("dialog")).toBeNull()
    expect(renderExecution).not.toHaveBeenCalled()
    fireEvent.click(screen.getByRole("button", { name: "Prepare report", exact: true }))
    expect(within(screen.getByRole("dialog", { name: "Prepare report" })).getByTestId("native-chat").textContent).toBe("live-session")
    const advanced = { ...running, currentStageId: "next", stages: [...running.stages, { id: "next", kind: "agent" as const, title: "Next step" }] }
    view.rerender(<WorkflowTaskDetail {...calls} task={advanced} renderExecution={renderExecution} />)
    expect(screen.getByRole("dialog", { name: "Prepare report" })).toBeTruthy()
    expect(screen.getByTestId("native-chat").textContent).toBe("live-session")
    expect(screen.getByTestId("diagram-current").textContent).toBe("next")
    fireEvent.keyDown(document, { key: "Escape" })
    expect(screen.queryByRole("dialog")).toBeNull()
    expect(screen.queryByTestId("native-chat")).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: "Next step", exact: true }))
    expect(within(screen.getByRole("dialog")).getByText(t("wfStagePending"))).toBeTruthy()
    expect(screen.queryByTestId("native-chat")).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: t("close"), exact: true }))
    view.rerender(<WorkflowTaskDetail {...calls} task={{ ...running, attempts: [...running.attempts, { id: "retry", stageId: "draft", state: "running", sessionId: "retry-session" }] }} renderExecution={renderExecution} />)
    fireEvent.click(screen.getByRole("button", { name: "Prepare report", exact: true }))
    expect(screen.getByTestId("native-chat").textContent).toBe("retry-session")
    expect(calls.command).not.toHaveBeenCalled()
  })

  it("puts explicit review decisions before even a very long report in DOM order", () => {
    const calls = props()
    render(<WorkflowTaskDetail {...calls} task={task()} />)
    expect(screen.queryByRole("region", { name: t("wfResults") })).toBeNull()
    openReview()
    expect(screen.getByRole("heading", { name: "Check the report" })).toBeTruthy()
    const decision = screen.getByRole("complementary", { name: t("wfReviewDecision") })
    const reports = screen.getByRole("region", { name: t("wfResults") })
    expect(decision.compareDocumentPosition(reports) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0)
    expect(within(decision).getByText("Verify sources and accuracy.")).toBeTruthy()
    expect(within(decision).getByText("Prepare report")).toBeTruthy()
    expect(within(decision).getByText(t("wfReviewBoundReport"))).toBeTruthy()
    expect(screen.getAllByRole("button", { name: t("wfApproveContinue") })).toHaveLength(1)
    expect(calls.command).not.toHaveBeenCalled()
  })

  it("approves exactly one immutable review with its subject hash and revision", () => {
    const calls = props()
    render(<WorkflowTaskDetail {...calls} task={task()} />)
    openReview()
    fireEvent.click(screen.getByRole("button", { name: t("wfApproveContinue") }))
    expect(calls.command).toHaveBeenCalledTimes(1)
    expect(calls.command).toHaveBeenCalledWith("decideReview", { taskId: "task-1", expectedRevision: 7, reviewId: "review-1", subjectHash: "b".repeat(64), decision: "approved", feedback: "" })
  })

  it.each([
    { patch: { review: null }, busy: false, disconnected: false },
    { patch: { canReview: false }, busy: false, disconnected: false },
    { patch: { canReview: undefined }, busy: false, disconnected: false },
    { patch: { outputs: [] }, busy: false, disconnected: false },
    { patch: { outputs: [{ ...task().outputs[0]!, unavailable: true }] }, busy: false, disconnected: false },
    { patch: {}, busy: true, disconnected: false },
    { patch: {}, busy: false, disconnected: true },
  ])("does not bypass missing reports, permission, busy or disconnection: %j", ({ patch, busy, disconnected }) => {
    const calls = props()
    render(<WorkflowTaskDetail {...calls} busy={busy} disconnected={disconnected} task={task(patch)} />)
    openReview()
    const approve = screen.getByRole("button", { name: t("wfApproveContinue") }) as HTMLButtonElement
    const sendBack = screen.getByRole("button", { name: t("wfReturn") }) as HTMLButtonElement
    expect(approve.disabled).toBe(true)
    expect(sendBack.disabled).toBe(true)
    fireEvent.click(approve); fireEvent.click(sendBack)
    if (!busy && !disconnected) expect(screen.getByText(t("wfReviewMissingReport"))).toBeTruthy()
    expect(calls.command).not.toHaveBeenCalled()
  })

  it("allows return only to the frozen earlier AI node", () => {
    const calls = props()
    render(<WorkflowTaskDetail {...calls} task={task({ stages: [...task().stages, { id: "later", kind: "agent", title: "Later execution" }], review: { id: "review-1", subjectHash: "b".repeat(64), returnStageId: "later" } })} />)
    openReview()
    expect((screen.getByRole("button", { name: t("wfReturn") }) as HTMLButtonElement).disabled).toBe(true)
    expect((screen.getByRole("button", { name: t("wfApproveContinue") }) as HTMLButtonElement).disabled).toBe(false)
    expect(screen.getByText(t("wfReviewReturnUnavailable"))).toBeTruthy()
    expect(calls.command).not.toHaveBeenCalled()
  })

  it("keeps feedback across read-only diagram inspection and restores focus on cancel", () => {
    vi.spyOn(window, "confirm").mockReturnValue(true)
    const calls = props()
    render(<WorkflowTaskDetail {...calls} task={task()} />)
    openReview()
    fireEvent.click(screen.getByRole("button", { name: t("wfReturn") }))
    expect(document.activeElement).toBe(screen.getByLabelText(t("wfFeedback")))
    fireEvent.change(screen.getByLabelText(t("wfFeedback")), { target: { value: "Check the sources again." } })
    expect(screen.getByTestId("diagram-current").textContent).toBe("review")
    expect(screen.getByTestId("diagram-states").textContent).toContain('"review":"waiting_review"')
    fireEvent.click(screen.getByRole("button", { name: t("close"), exact: true }))
    fireEvent.click(within(screen.getByRole("region", { name: "Test diagram" })).getByRole("button", { name: "Prepare report" }))
    fireEvent.click(screen.getByText(t("wfPrompt"), { selector: "summary" }))
    expect(within(screen.getByRole("region", { name: t("wfStageReadOnly") })).getByText("Read the project and summarize findings.")).toBeTruthy()
    expect(calls.command).not.toHaveBeenCalled()
    fireEvent.click(screen.getByRole("button", { name: t("close"), exact: true }))
    openReview()
    expect((screen.getByLabelText(t("wfFeedback")) as HTMLTextAreaElement).value).toBe("Check the sources again.")
    fireEvent.click(screen.getByRole("button", { name: t("cancel"), exact: true }))
    expect(document.activeElement).toBe(screen.getByRole("button", { name: t("wfReturn") }))
    expect(calls.command).not.toHaveBeenCalled()
  })

  it("preserves old-review feedback separately and blocks until the new review is acknowledged", () => {
    const calls = props()
    const view = render(<WorkflowTaskDetail {...calls} task={task()} />)
    openReview()
    fireEvent.click(screen.getByRole("button", { name: t("wfReturn") }))
    fireEvent.change(screen.getByLabelText(t("wfFeedback")), { target: { value: "Old round feedback." } })
    view.rerender(<WorkflowTaskDetail {...calls} task={task({ revision: 8, review: { id: "review-2", subjectHash: "c".repeat(64), returnStageId: "draft" } })} />)
    expect((screen.getByLabelText(t("wfSavedFeedback"), { selector: "textarea" }) as HTMLTextAreaElement).value).toBe("Old round feedback.")
    expect((screen.getByRole("button", { name: t("wfApproveContinue") }) as HTMLButtonElement).disabled).toBe(true)
    fireEvent.click(screen.getByRole("button", { name: t("wfViewCurrentReview") }))
    fireEvent.click(screen.getByRole("button", { name: t("wfReturn") }))
    expect((screen.getByLabelText(t("wfFeedback")) as HTMLTextAreaElement).value).toBe("")
    expect((screen.getByRole("button", { name: t("wfSubmitReturn") }) as HTMLButtonElement).disabled).toBe(true)
    expect(calls.command).not.toHaveBeenCalled()
  })

  it("requires an explicit destructive confirmation to terminate even when the report is unavailable", () => {
    const calls = props()
    render(<WorkflowTaskDetail {...calls} task={task({ outputs: [], canReview: false })} />)
    openReview()
    fireEvent.click(screen.getByRole("button", { name: t("wfStop") }))
    const confirmation = screen.getByRole("dialog", { name: t("wfStop") })
    expect(calls.command).not.toHaveBeenCalled()
    fireEvent.click(within(confirmation).getByRole("button", { name: t("cancel") }))
    expect(screen.queryByRole("dialog", { name: t("wfStop") })).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: t("wfStop") }))
    fireEvent.click(within(screen.getByRole("dialog", { name: t("wfStop") })).getByRole("button", { name: t("wfStop") }))
    expect(calls.command).toHaveBeenCalledWith("decideReview", { taskId: "task-1", expectedRevision: 7, reviewId: "review-1", subjectHash: "b".repeat(64), decision: "terminated", feedback: "" })
  })

  it("always shows the diagram and selected stage without a tab list", () => {
    const calls = props()
    render(<WorkflowTaskDetail {...calls} task={task({ state: "running", review: null, currentStageId: "draft" })} />)
    expect(screen.getByRole("region", { name: "Test diagram" })).toBeTruthy()
    expect(screen.getByTestId("diagram-current").textContent).toBe("draft")
    expect(screen.queryByRole("tablist")).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: "Check the report", exact: true }))
    expect(screen.queryByRole("button", { name: t("wfApproveContinue") })).toBeNull()
    expect(calls.command).not.toHaveBeenCalled()
  })
})
