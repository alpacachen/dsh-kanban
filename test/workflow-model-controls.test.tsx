import React from "react"
import { fireEvent, render, screen, within, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type { ModelCatalog } from "@deepseek-ai/dsh-api-session-controller/types"
import { afterEach, describe, expect, it, vi } from "vitest"
import { WorkflowPanel } from "../src/client/WorkflowPanel"
import { WorkflowTaskDetail } from "../src/client/WorkflowTaskDetail"
import { t } from "../src/client/lib/i18n"
import type { Workflow, WorkflowApi, WorkflowTask } from "../src/client/lib/workflow-types"

const model = { provider: "provider", model: "Model One", reasoningEffort: "ultra" }
const catalog: ModelCatalog = { default: model, routableProviders: ["provider"], failures: [], groups: [{ id: "provider", name: "Provider", models: [
  { id: "Model One", name: "Model One", reasoning: { defaultEffort: "high", efforts: [{ id: "high", name: "High" }, { id: "ultra", name: "Ultra" }] } },
  { id: "Model Two", name: "Model Two" },
] }] }
const loadModels = async () => catalog
async function pick(option: string) {
  const trigger = document.querySelector<HTMLButtonElement>(".workflow-model-trigger button")!
  await waitFor(() => expect(trigger.disabled).toBe(false))
  await userEvent.setup().click(trigger)
  const pane = option === "High" || option === "Ultra" ? "effort" : "model"
  const rootItem = screen.queryByRole("menuitem", { name: new RegExp(`^${t(`wfNativeModel.menu.${pane}`)}`) })
  if (rootItem) await userEvent.setup().click(rootItem)
  await userEvent.setup().click(await screen.findByRole("menuitemradio", { name: option, exact: true }))
}
const definition = { description: "Test flow", inputLabel: "Material", inputHint: "Describe the task", stages: [{ id: "execute", kind: "agent" as const, title: "Prepare report", prompt: "Use the supplied material.", modelSelection: model }, { id: "review", kind: "review" as const, title: "Review report", returnStageId: "execute" }] }
const flow: Workflow = { id: "flow", workspaceId: "project", name: "Test flow", description: "Test flow", revision: 1, versionId: "version", versionNumber: 1, definition, taskCount: 0, createdAt: 1, updatedAt: 1 }
const makeTask = (patch: Partial<WorkflowTask> = {}): WorkflowTask => ({ id: "task", workspaceId: "project", workflowId: "flow", workflowName: "Test flow", versionNumber: 1, title: "Internal preview", state: "running", revision: 4, stageTitle: "Prepare report", currentStageId: "execute", input: { text: "Supplied material" }, stages: definition.stages, outputs: [], review: null, attention: null, attempts: [], reviews: [], createdAt: 1, updatedAt: 1, ...patch })
afterEach(() => vi.restoreAllMocks())

describe("Workflow owns stage model configuration", () => {
  it("creates a task from the homepage input alone, without a task title or model controls", async () => {
    const call = vi.fn(async (method: string, args: any) => method === "listWorkflows" ? [flow] : method === "createTask" ? makeTask({ state: "queued", input: { text: args.request.text } }) : method === "getTask" ? makeTask() : { tasks: [], status: {} })
    render(<WorkflowPanel workspaceId="project" api={{ call } as WorkflowApi} />)
    fireEvent.click(await screen.findByRole("button", { name: `${t("wfNewTask")} · Test flow` }))
    expect(screen.queryByRole("combobox")).toBeNull()
    expect(screen.queryByLabelText(t("wfTaskName"))).toBeNull()
    expect(screen.queryByRole("dialog")).toBeNull()
    const input = screen.getByLabelText("Material")
    fireEvent.change(input, { target: { value: "Supplied material" } })
    fireEvent.keyDown(input, { key: "Enter", metaKey: true })
    await screen.findByRole("heading", { name: "Supplied material" })
    const request = call.mock.calls.find(([method]) => method === "createTask")![1].request
    expect(request).toMatchObject({ workflowId: "flow", expectedVersionId: "version", text: "Supplied material" })
    expect(request).not.toHaveProperty("title")
    expect(request).not.toHaveProperty("modelSelection")
  })

  it("offers text editing and one model menu while keeping structural edits in Agent chat", async () => {
    const call = vi.fn(async (method: string) => method === "listWorkflows" ? [flow] : { tasks: [], status: {} }), onOpenChat = vi.fn(async () => true)
    render(<WorkflowPanel workspaceId="project" api={{ call } as WorkflowApi} loadModels={loadModels} onOpenChat={onOpenChat} />)
    fireEvent.click(await screen.findByRole("button", { name: "Test flow", exact: true }))
    fireEvent.click(screen.getByRole("button", { name: `1. ${t("wfAgent")}: Prepare report` }))
    const inspector = screen.getByRole("dialog", { name: "Prepare report" })
    expect((within(inspector).getByRole("textbox", { name: t("wfPrompt") }) as HTMLTextAreaElement).value).toBe(definition.stages[0].prompt)
    await waitFor(() => expect(screen.getByTitle("Model One · Ultra").hasAttribute("disabled")).toBe(false))
    expect(screen.queryByRole("combobox")).toBeNull()
    expect(screen.queryByText(t("wfModelConfiguration"))).toBeNull()
    expect(screen.queryByText(t("wfModelReasoningEffort"))).toBeNull()
    expect(screen.queryByText(t("wfSaved"))).toBeNull()
    expect(screen.queryByText(t("wfModelLocalOnly"))).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: t("wfEditStageWithAgent") }))
    expect(onOpenChat.mock.calls[0]![0]).toContain('"stageId": "execute"')
    expect(onOpenChat.mock.calls[0]![0]).toContain("workflow_update")
    expect(onOpenChat.mock.calls[0]![0]).not.toContain("workflow_models")
    expect(onOpenChat.mock.calls[0]![0]).not.toContain("modelSelection")
    expect(call.mock.calls.some(([method]) => method === "createTask")).toBe(false)
  })

  it("saves only the selected stage model and native effort with optimistic revision", async () => {
    let current = flow
    const call = vi.fn(async (method: string, args: any) => {
      if (method === "listWorkflows") return [current]
      if (method === "updateWorkflow") {
        current = { ...current, revision: current.revision + 1, definition: args.request.definition }
        return current
      }
      return { tasks: [], status: {} }
    })
    render(<WorkflowPanel workspaceId="project" api={{ call } as WorkflowApi} loadModels={loadModels} />)
    fireEvent.click(await screen.findByRole("button", { name: "Test flow", exact: true }))
    fireEvent.click(screen.getByRole("button", { name: `1. ${t("wfAgent")}: Prepare report` }))
    await waitFor(() => expect(screen.getByTitle("Model One · Ultra").hasAttribute("disabled")).toBe(false))
    await pick("High")
    await screen.findByTitle("Model One · High")
    const first = call.mock.calls.find(([method]) => method === "updateWorkflow")![1].request
    expect(first).toMatchObject({ workflowId: "flow", expectedRevision: 1, name: "Test flow", requestId: expect.any(String) })
    expect(first.definition).toEqual({ ...definition, stages: [{ ...definition.stages[0], modelSelection: { ...model, reasoningEffort: "high" } }, definition.stages[1]] })
    await pick("Model Two")
    await waitFor(() => expect(current.definition.stages[0].modelSelection).toEqual({ provider: "provider", model: "Model Two" }))
    expect(screen.getByTitle("Model Two")).toBeTruthy()
    await pick("Model One")
    await waitFor(() => expect(current.definition.stages[0].modelSelection?.reasoningEffort).toBe("high"))
    await pick(t("wfHostDefaultModel"))
    await waitFor(() => expect(current.definition.stages[0]).not.toHaveProperty("modelSelection"))
    expect(current.definition.stages[1]).toEqual(definition.stages[1])
    fireEvent.click(screen.getByRole("button", { name: `2. ${t("wfReview")}: Review report` }))
    expect(document.querySelector(".workflow-model-trigger")).toBeNull()
    expect(call.mock.calls.filter(([method]) => method === "updateWorkflow").map(([, args]) => args.request.expectedRevision)).toEqual([1, 2, 3, 4])
    expect(call.mock.calls.some(([method]) => method === "createTask")).toBe(false)
  })

  it("keeps a text draft through model changes and saves both against the latest revision", async () => {
    let current = flow
    const call = vi.fn(async (method: string, args: any) => {
      if (method === "listWorkflows") return [current]
      if (method === "updateWorkflow") {
        current = { ...current, revision: current.revision + 1, definition: args.request.definition }
        return current
      }
      return { tasks: [], status: {} }
    })
    const confirm = vi.spyOn(window, "confirm").mockReturnValue(false)
    render(<WorkflowPanel workspaceId="project" api={{ call } as WorkflowApi} loadModels={loadModels} />)
    fireEvent.click(await screen.findByRole("button", { name: "Test flow", exact: true }))
    fireEvent.click(screen.getByRole("button", { name: `1. ${t("wfAgent")}: Prepare report` }))
    const input = screen.getByRole("textbox", { name: t("wfPrompt") }) as HTMLTextAreaElement
    fireEvent.change(input, { target: { value: "New execution instructions." } })
    fireEvent.click(within(screen.getByRole("dialog")).getByRole("button", { name: t("close") }))
    expect(confirm).toHaveBeenCalledWith(t("wfLeaveConfirm"))
    expect(input.value).toBe("New execution instructions.")
    await pick("Model Two")
    await waitFor(() => expect(screen.getByRole("button", { name: t("save") }).hasAttribute("disabled")).toBe(false))
    expect(input.value).toBe("New execution instructions.")
    fireEvent.click(screen.getByRole("button", { name: t("save") }))
    await waitFor(() => expect(current.definition.stages[0].prompt).toBe("New execution instructions."))
    expect(current.definition.stages[0]).toEqual({ ...definition.stages[0], prompt: "New execution instructions.", modelSelection: { provider: "provider", model: "Model Two" } })
    expect(current.definition.stages[1]).toEqual(definition.stages[1])
    expect(call.mock.calls.filter(([method]) => method === "updateWorkflow").map(([, args]) => args.request.expectedRevision)).toEqual([1, 2])
    await waitFor(() => expect(screen.queryByRole("button", { name: t("save") })).toBeNull())
    fireEvent.click(within(screen.getByRole("dialog")).getByRole("button", { name: t("close") }))
    expect(screen.queryByRole("dialog")).toBeNull()
    expect(confirm).toHaveBeenCalledTimes(1)
  })

  it("retains failed text edits, validates agent instructions and allows editing review text", async () => {
    const call = vi.fn(async (method: string) => {
      if (method === "listWorkflows") return [flow]
      if (method === "updateWorkflow") throw Error("Workflow changed. Refresh and retry.")
      return { tasks: [], status: {} }
    })
    render(<WorkflowPanel workspaceId="project" api={{ call } as WorkflowApi} loadModels={loadModels} />)
    fireEvent.click(await screen.findByRole("button", { name: "Test flow", exact: true }))
    fireEvent.click(screen.getByRole("button", { name: `1. ${t("wfAgent")}: Prepare report` }))
    const input = screen.getByRole("textbox", { name: t("wfPrompt") }) as HTMLTextAreaElement
    fireEvent.change(input, { target: { value: "   " } })
    expect(screen.getByRole("button", { name: t("save") }).hasAttribute("disabled")).toBe(true)
    fireEvent.change(input, { target: { value: "Keep this draft." } })
    fireEvent.click(screen.getByRole("button", { name: t("save") }))
    await screen.findByRole("alert")
    expect(input.value).toBe("Keep this draft.")
    fireEvent.click(screen.getByRole("button", { name: t("cancel") }))
    expect(input.value).toBe(definition.stages[0].prompt)
    fireEvent.click(within(screen.getByRole("dialog")).getByRole("button", { name: t("close") }))
    fireEvent.click(screen.getByRole("button", { name: `2. ${t("wfReview")}: Review report` }))
    fireEvent.change(screen.getByRole("textbox", { name: t("wfPrompt") }), { target: { value: "Check the sources." } })
    expect(document.querySelector(".workflow-model-trigger")).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: t("save") }))
    await waitFor(() => expect(call.mock.calls.filter(([method]) => method === "updateWorkflow")).toHaveLength(2))
    const request = call.mock.calls.filter(([method]) => method === "updateWorkflow")[1][1].request
    expect(request.definition.stages[0]).toEqual(definition.stages[0])
    expect(request.definition.stages[1]).toEqual({ ...definition.stages[1], prompt: "Check the sources." })
  })

  it("does not overwrite a prompt changed elsewhere while a local draft is open", async () => {
    let current = flow
    const call = vi.fn(async (method: string, args: any) => {
      if (method === "listWorkflows") return [current]
      if (method === "updateWorkflow") {
        current = { ...current, revision: 2, definition: { ...args.request.definition, stages: args.request.definition.stages.map((stage: any, index: number) => index ? stage : { ...stage, prompt: "Updated by Agent." }) } }
        return current
      }
      return { tasks: [], status: {} }
    })
    render(<WorkflowPanel workspaceId="project" api={{ call } as WorkflowApi} loadModels={loadModels} />)
    fireEvent.click(await screen.findByRole("button", { name: "Test flow", exact: true }))
    fireEvent.click(screen.getByRole("button", { name: `1. ${t("wfAgent")}: Prepare report` }))
    const input = screen.getByRole("textbox", { name: t("wfPrompt") }) as HTMLTextAreaElement
    fireEvent.change(input, { target: { value: "My local draft." } })
    await pick("Model Two")
    await waitFor(() => expect(screen.getByRole("button", { name: t("save") }).hasAttribute("disabled")).toBe(false))
    fireEvent.click(screen.getByRole("button", { name: t("save") }))
    expect((await screen.findByRole("alert")).textContent).toBe(t("wfStageTextChanged"))
    expect(input.value).toBe("My local draft.")
    expect(call.mock.calls.filter(([method]) => method === "updateWorkflow")).toHaveLength(1)
    fireEvent.click(screen.getByRole("button", { name: t("cancel") }))
    expect(input.value).toBe("Updated by Agent.")
  })

  it("retains the saved selection when a revision conflict rejects an edit", async () => {
    const call = vi.fn(async (method: string) => {
      if (method === "listWorkflows") return [flow]
      if (method === "updateWorkflow") throw Error("Workflow changed. Refresh and retry.")
      return { tasks: [], status: {} }
    })
    render(<WorkflowPanel workspaceId="project" api={{ call } as WorkflowApi} loadModels={loadModels} />)
    fireEvent.click(await screen.findByRole("button", { name: "Test flow", exact: true }))
    fireEvent.click(screen.getByRole("button", { name: `1. ${t("wfAgent")}: Prepare report` }))
    await waitFor(() => expect(screen.getByTitle("Model One · Ultra").hasAttribute("disabled")).toBe(false))
    await pick("Model Two")
    expect((await screen.findByRole("alert")).textContent).toBe("Workflow changed. Refresh and retry.")
    expect(screen.getByTitle("Model One · Ultra")).toBeTruthy()
    expect(screen.queryByText(t("wfSaved"))).toBeNull()
  })

  it("retries native catalog loading without losing an unavailable saved model", async () => {
    const load = vi.fn().mockRejectedValueOnce(Error("private provider diagnostics")).mockRejectedValueOnce(Error("private provider diagnostics")).mockResolvedValue(catalog)
    const call = vi.fn(async (method: string) => method === "listWorkflows" ? [flow] : { tasks: [], status: {} })
    render(<WorkflowPanel workspaceId="project" api={{ call } as WorkflowApi} loadModels={load} />)
    fireEvent.click(await screen.findByRole("button", { name: "Test flow", exact: true }))
    fireEvent.click(screen.getByRole("button", { name: `1. ${t("wfAgent")}: Prepare report` }))
    await waitFor(() => expect(screen.getByTitle(t("wfNativeModel.trigger.fallback")).hasAttribute("disabled")).toBe(false))
    await userEvent.setup().click(screen.getByTitle(t("wfNativeModel.trigger.fallback")))
    await screen.findByText(new RegExp(t("wfModelCatalogFailed")))
    expect(screen.queryByText("private provider diagnostics")).toBeNull()
    await userEvent.setup().click(screen.getByRole("button", { name: t("retry") }))
    await screen.findByTitle("Model One · Ultra")
    expect(call.mock.calls.some(([method]) => method === "updateWorkflow")).toBe(false)
  })

  it("opens the selected stage native session without creating a new task", () => {
    const onOpenSession = vi.fn(), command = vi.fn()
    const task = makeTask({ attempts: [{ id: "attempt", stageId: "execute", state: "running", sessionId: "native-session" }] })
    render(<WorkflowTaskDetail task={task} busy={false} disconnected={false} command={command} onUpdated={vi.fn()} onBack={vi.fn()} onCopyTask={vi.fn()} onDirtyChange={vi.fn()} onOpenSession={onOpenSession} />)
    fireEvent.click(screen.getByRole("button", { name: `1. ${t("wfAgent")}: Prepare report` }))
    expect(screen.getByRole("dialog", { name: "Prepare report" })).toBeTruthy()
    expect(screen.getByText("Model One")).toBeTruthy()
    expect(screen.queryByRole("combobox")).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: t("wfOpenExecution") }))
    expect(onOpenSession).toHaveBeenCalledExactlyOnceWith("native-session")
    expect(command).not.toHaveBeenCalled()
  })
})
