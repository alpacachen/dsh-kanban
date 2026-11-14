import React from "react"
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { KanbanPanel } from "../src/client/KanbanPanel"
import { KanbanPlugin } from "../src/client/plugin"
import { consumeDraft } from "../src/client/lib/chat-bridge"
import { t } from "../src/client/lib/i18n"

const workspaces = [
  { workspaceId: "a", title: "Alpha", path: "/projects/a", sessionIds: ["current"] },
  { workspaceId: "b", title: "Beta", path: "/projects/b", sessionIds: [] },
]
const props = (items = workspaces, current = "current") => ({
  useWorkspaces: (select: any) => select({ items, phase: "ready", state: "idle" }),
  useSessions: (select: any) => select({ byId: current ? { [current]: { id: current, retainedBy: { mainView: 1 } } } : {} }),
  onCreateConversation: vi.fn(),
}) as any

beforeEach(() => localStorage.clear())
afterEach(() => { vi.restoreAllMocks(); consumeDraft("fresh-session") })

describe("global board", () => {
  it("switches inside the same Kanban panel next to the workspace without changing projects", async () => {
    const user = userEvent.setup()
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: true, json: async () => ({ board: { columns: [], cards: [], labels: [], activities: [] } }) } as Response)
    const api = { call: vi.fn(async (method: string) => method === "listWorkflows" ? [] : { tasks: [], modelSelection: null, status: { lastError: null } }) } as any
    const view = render(<KanbanPanel {...props()} workflowApi={api} />)
    await screen.findByRole("searchbox")
    const panel = view.container.querySelector('.kanban-panel')!
    const workspace = screen.getByRole("button", { name: `${t("selectWorkspace")}: Alpha` })
    const toggle = screen.getByRole("navigation", { name: t("wfSwitch") })
    expect(workspace.closest('h1')?.nextElementSibling).toBe(toggle)
    await user.click(screen.getByRole("button", { name: "Workflow", exact: true }))
    await screen.findByRole("region", { name: t("wfTitle") })
    expect(view.container.querySelector('.kanban-panel')).toBe(panel)
    expect(panel.getAttribute('data-kanban-mode')).toBe('workflow')
    expect(screen.getByRole("button", { name: `${t("selectWorkspace")}: Alpha` })).toBe(workspace)
    expect(screen.getByRole("navigation", { name: t("wfSwitch") })).toBe(toggle)
    expect(screen.queryByText(t("wfLibraryDescription"))).toBeNull()
    await user.click(screen.getByRole("button", { name: "Kanban", exact: true }))
    await screen.findByRole("searchbox")
    expect(panel.getAttribute('data-kanban-mode')).toBe('kanban')
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it.each(["kanban", "workflow"] as const)("restores the last %s mode when the panel is reopened", async initial => {
    const user = userEvent.setup()
    vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: true, json: async () => ({ board: { columns: [], cards: [], labels: [], activities: [] } }) } as Response)
    const api = { call: vi.fn(async (method: string) => method === "listWorkflows" ? [] : { tasks: [], modelSelection: null, status: { lastError: null } }) } as any
    localStorage.setItem("dsh-kanban:mode", initial)
    const view = render(<KanbanPanel {...props()} workflowApi={api} />)
    expect(view.container.querySelector(".kanban-panel")?.getAttribute("data-kanban-mode")).toBe(initial)
    const next = initial === "kanban" ? "workflow" : "kanban"
    await user.click(screen.getByRole("button", { name: next === "workflow" ? "Workflow" : "Kanban", exact: true }))
    expect(localStorage.getItem("dsh-kanban:mode")).toBe(next)
    view.unmount()
    const reopened = render(<KanbanPanel {...props()} workflowApi={api} />)
    expect(reopened.container.querySelector(".kanban-panel")?.getAttribute("data-kanban-mode")).toBe(next)
    expect(screen.getByRole("button", { name: next === "workflow" ? "Workflow" : "Kanban", exact: true }).getAttribute("aria-pressed")).toBe("true")
  })

  it("falls back to Kanban for an unknown saved mode", () => {
    localStorage.setItem("dsh-kanban:mode", "obsolete-mode")
    const view = render(<KanbanPanel {...props([], "")} />)
    expect(view.container.querySelector(".kanban-panel")?.getAttribute("data-kanban-mode")).toBe("kanban")
  })

  it("keeps mode switching usable when browser storage is blocked", async () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("Blocked") })
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("Blocked") })
    const view = render(<KanbanPanel {...props([], "")} />)
    await userEvent.setup().click(screen.getByRole("button", { name: "Workflow", exact: true }))
    expect(view.container.querySelector(".kanban-panel")?.getAttribute("data-kanban-mode")).toBe("workflow")
  })

  it("opens Workflow authoring in a new chat scoped to the selected project, without sending", async () => {
    const onCreateConversation = vi.fn(async () => true)
    const api = { call: vi.fn(async (method: string) => method === "listWorkflows" ? [] : { tasks: [], modelSelection: null, status: { lastError: null } }) } as any
    render(<KanbanPanel {...props()} onCreateConversation={onCreateConversation} workflowApi={api} />)
    await userEvent.setup().click(screen.getByRole("button", { name: "Workflow", exact: true }))
    await screen.findByRole("table", { name: t("wfTree") })
    await userEvent.setup().click(screen.getByRole("button", { name: t("wfNew"), exact: true }))
    await waitFor(() => expect(onCreateConversation).toHaveBeenCalledTimes(1))
    expect(onCreateConversation.mock.calls[0]).toEqual(["a", { text: expect.stringContaining('"workspaceId": "a"'), files: [] }, expect.any(AbortSignal)])
    expect(api.call.mock.calls.every(([method]: [string]) => ["listWorkflows", "listTasks"].includes(method))).toBe(true)
  })

  it("opens the title menu with the keyboard and restores focus on Escape without changing workspaces", async () => {
    const user = userEvent.setup()
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: true, json: async () => ({ board: { columns: [], cards: [], labels: [], activities: [] } }) } as Response)
    render(<KanbanPanel {...props()} />)
    await screen.findByRole("searchbox")
    const trigger = screen.getByRole("button", { name: `${t("selectWorkspace")}: Alpha`, expanded: false })
    expect(screen.getByRole("navigation", { name: t("wfSwitch") })).toBeTruthy()
    expect(screen.queryByRole("combobox")).toBeNull()
    trigger.focus()
    await user.keyboard("{Enter}")
    expect(await screen.findByRole("menu")).toBeTruthy()
    expect(screen.getByRole("menuitem", { name: "Alpha", current: "page" })).toBeTruthy()
    expect(screen.queryByText("/projects/a")).toBeNull()
    await user.keyboard("{Escape}")
    await waitFor(() => expect(screen.queryByRole("menu")).toBeNull())
    await waitFor(() => expect(document.activeElement).toBe(trigger))
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it("defaults to the current workspace, switches to a workspace without sessions and remembers it", async () => {
    const user = userEvent.setup()
    const fetchMock = vi.spyOn(globalThis, "fetch").mockImplementation(async (_url, init) => {
      const id = JSON.parse(String(init?.body)).args.workspaceId
      return { ok: true, json: async () => ({ board: { columns: [{ id: "todo", title: `Board ${id}` }], cards: [], labels: [], activities: [] } }) } as Response
    })
    const view = render(<KanbanPanel {...props()} />)
    await screen.findByText("Board a")
    await user.click(screen.getByRole("button", { name: `${t("selectWorkspace")}: Alpha` }))
    expect(screen.queryByText("/projects/a")).toBeNull()
    expect(screen.queryByRole("combobox")).toBeNull()
    expect(screen.getByRole("menuitem", { name: "Alpha", current: "page" })).toBeTruthy()
    await user.click(screen.getByRole("menuitem", { name: "Beta" }))
    await screen.findByText("Board b")
    expect(screen.getByRole("button", { name: `${t("selectWorkspace")}: Beta`, expanded: false })).toBeTruthy()
    expect(screen.queryByRole("menu")).toBeNull()
    expect(screen.queryByText("Board a")).toBeNull()
    expect(localStorage.getItem("dsh-kanban:workspace")).toBe("b")
    view.unmount()
    render(<KanbanPanel {...props()} />)
    await screen.findByText("Board b")
    expect(JSON.parse(String(fetchMock.mock.calls.at(-1)?.[1]?.body)).args.workspaceId).toBe("b")
  })

  it("does not request a default board while workspaces are loading or unselected", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch")
    const view = render(<KanbanPanel {...props([], "")} />)
    expect(screen.getByRole("status").textContent).toBe(t("noWorkspaces"))
    view.rerender(<KanbanPanel {...props([], "")} useWorkspaces={((select: any) => select({ items: [], phase: "pending", state: "loading" })) as any} />)
    expect(screen.getByRole("status").textContent).toBe(t("loadingWorkspaces"))
    view.rerender(<KanbanPanel {...props(workspaces, "")} />)
    expect(screen.getByRole("status").textContent).toBe(t("selectWorkspaceHint"))
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it("ignores a late response from the previous workspace and resets the search", async () => {
    let finish: (value: Response) => void = () => {}
    const response = (title: string) => ({ ok: true, json: async () => ({ board: { columns: [{ id: "todo", title }], cards: [], labels: [], activities: [] } }) } as Response)
    vi.spyOn(globalThis, "fetch").mockImplementation(async (_url, init) => JSON.parse(String(init?.body)).args.workspaceId === "a"
      ? new Promise<Response>((resolve) => { finish = resolve }) : response("Board b"))
    const user = userEvent.setup()
    render(<KanbanPanel {...props()} />)
    await user.click(screen.getByRole("button", { name: `${t("selectWorkspace")}: Alpha` }))
    await user.click(screen.getByRole("menuitem", { name: "Beta" }))
    await screen.findByText("Board b")
    await act(async () => finish(response("Stale board a")))
    expect(screen.queryByText("Stale board a")).toBeNull()
    expect((screen.getByRole("searchbox") as HTMLInputElement).value).toBe("")
  })

  it("retries a failed board load without leaving the page", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(new Error("Offline")).mockResolvedValue({ ok: true, json: async () => ({ board: { columns: [], cards: [], labels: [], activities: [] } }) } as Response)
    render(<KanbanPanel {...props()} />)
    expect((await screen.findByRole("alert")).textContent).toContain("Offline")
    fireEvent.click(screen.getByRole("button", { name: t("retry") }))
    await screen.findByRole("searchbox")
  })
})

function plugin() {
  const registrations: any[] = [], disposers: (() => void)[] = []
  const layout = { beginNavigation: vi.fn(() => new AbortController().signal), panelInfo: { getSnapshot: () => ({ activePanelId: null }) }, selectPanel: vi.fn() }
  const sessions = { create: vi.fn(async () => "fresh-session"), retain: vi.fn(), list: { getSnapshot: () => ({ byId: { "stage-session": {}, "next-session": {}, missing: {} } }) }, refresh: vi.fn(async () => {}) }
  const uiWorkspace = { openSession: vi.fn() }
  const modelCatalog = vi.fn()
  const ctx = {
    layout, sessions, uiWorkspace,
    get: (name: string) => name === "slots" ? {
      inject: (_name: string, setup: () => void) => setup(),
      register: (meta: unknown, Component: any) => { registrations.push({ meta, Component }); return () => {} },
    } : name === "remote.session" ? { modelCatalog } : undefined,
    effect: (setup: () => (() => void)) => { disposers.push(setup()) },
  }
  KanbanPlugin.apply(ctx as any)
  const create = registrations.find(({ meta }) => meta.name === "main").Component({}).props.onCreateConversation
  return { registrations, create, sessions, uiWorkspace, layout, modelCatalog, dispose: () => disposers.reverse().forEach((off) => off()) }
}

describe("panel registration and new conversations", () => {
  it("hides the reserved Markdown fence only in Workflow and preserves ordinary code blocks", async () => {
    const installed = plugin()
    const Fence = installed.registrations.find(({ meta }) => meta.name === "conversation.chat.markdown.fence").Component
    const ordinary = render(<Fence lang="workflow-handoff"><pre>Internal protocol</pre></Fence>)
    expect(screen.getByText("Internal protocol")).toBeTruthy()
    ordinary.unmount()
    installed.sessions.retain.mockReturnValue({ sessionId: "stage-session", ready: Promise.resolve(), release: vi.fn() })
    const bridge = installed.registrations.find(({ meta }) => meta.name === "main").Component({ SessionProvider: ({ session, children, empty }: any) => session ? children : empty(), renderSlot: () => <><Fence lang="workflow-handoff"><pre>Internal protocol</pre></Fence><Fence lang="python"><pre>print(75)</pre></Fence></> }).props.renderExecution
    render(bridge("stage-session"))
    expect(await screen.findByText("print(75)")).toBeTruthy()
    expect(screen.queryByText("Internal protocol")).toBeNull()
  })
  it("reads the native DSH model catalog without creating or changing a chat", async () => {
    const installed = plugin()
    const catalog = { default: { provider: "native", model: "model" }, groups: [], failures: [], routableProviders: [] }
    installed.modelCatalog.mockResolvedValueOnce({ ok: true, value: catalog }).mockResolvedValueOnce({ ok: false, error: { message: "private details" } })
    const load = installed.registrations.find(({ meta }) => meta.name === "main").Component({}).props.loadModels
    expect(await load()).toBe(catalog)
    await expect(load()).rejects.toThrow(t("wfModelCatalogFailed"))
    expect(installed.sessions.create).not.toHaveBeenCalled()
    expect(installed.sessions.retain).not.toHaveBeenCalled()
    expect(installed.uiWorkspace.openSession).not.toHaveBeenCalled()
  })

  it("binds the native conversation factory to the stage session and releases it when switching or leaving", async () => {
    const installed = plugin(), releaseFirst = vi.fn(), releaseNext = vi.fn()
    const first = { sessionId: "stage-session", ready: Promise.resolve(), release: releaseFirst }
    const next = { sessionId: "next-session", ready: Promise.resolve(), release: releaseNext }
    installed.sessions.retain.mockReturnValueOnce(first).mockReturnValueOnce(next)
    const renderSlot = vi.fn(() => <span>Native stage chat</span>)
    const SessionProvider = ({ session, children, empty }: any) => session ? children : empty()
    const bridge = installed.registrations.find(({ meta }) => meta.name === "main").Component({ SessionProvider, renderSlot }).props.renderExecution
    const view = render(bridge("stage-session"))
    await screen.findByText("Native stage chat")
    expect(installed.sessions.retain).toHaveBeenCalledExactlyOnceWith("stage-session", { source: "workflowView" })
    view.rerender(bridge("stage-session"))
    expect(installed.sessions.retain).toHaveBeenCalledTimes(1)
    view.rerender(bridge("next-session"))
    expect(releaseFirst).toHaveBeenCalledTimes(1)
    expect(installed.sessions.retain).toHaveBeenLastCalledWith("next-session", { source: "workflowView" })
    const renderFactorySlot = vi.fn()
    installed.registrations.find(({ meta }) => meta.name === "kanban.execution").Component({ renderFactorySlot })
    expect(renderFactorySlot).toHaveBeenCalledWith("conversation.content", { variant: "embedded", phase: "active", hero: false }, { slots: { views: expect.any(Function) } })
    const NativeView = renderFactorySlot.mock.calls[0]![2].slots.views
    render(<NativeView renderSlot={renderSlot} />)
    expect(renderSlot).toHaveBeenLastCalledWith("conversation.session", { view: "chat" })
    view.unmount()
    expect(releaseNext).toHaveBeenCalledTimes(1)
    expect(installed.sessions.create).not.toHaveBeenCalled()
    expect(installed.uiWorkspace.openSession).not.toHaveBeenCalled()
    installed.dispose()
  })

  it("refreshes the native catalog for a newly bound stage and does not retain it after leaving", async () => {
    const installed = plugin()
    let finish = () => {}
    installed.sessions.refresh.mockImplementation(() => new Promise<void>(resolve => { finish = resolve }))
    const bridge = installed.registrations.find(({ meta }) => meta.name === "main").Component({ SessionProvider: () => null, renderSlot: () => null }).props.renderExecution
    const view = render(bridge("new-stage-session"))
    expect(installed.sessions.refresh).toHaveBeenCalledTimes(1)
    expect(installed.sessions.retain).not.toHaveBeenCalled()
    view.unmount()
    await act(async () => finish())
    expect(installed.sessions.retain).not.toHaveBeenCalled()
    installed.dispose()
  })

  it("keeps task controls available when the native session cannot be read", async () => {
    const installed = plugin(), release = vi.fn()
    installed.sessions.retain.mockReturnValue({ sessionId: "missing", ready: Promise.reject(Error("Unavailable")), release })
    const bridge = installed.registrations.find(({ meta }) => meta.name === "main").Component({ SessionProvider: () => null, renderSlot: () => null }).props.renderExecution
    const view = render(bridge("missing"))
    expect(await screen.findByRole("status")).toHaveProperty("textContent", t("wfSessionUnavailable"))
    view.unmount()
    expect(release).toHaveBeenCalledTimes(1)
    installed.dispose()
  })
  it("registers only the Kanban panel and sidebar entry while preserving the draft injector", async () => {
    const installed = plugin()
    expect(installed.registrations.map(({ meta }) => meta.name)).toEqual(["conversation.chat.markdown.fence", "main", "kanban.execution", "sidebar.panellist", "conversation.input.dock"])
    expect(installed.registrations.find(({ meta }) => meta.name === "main").meta.key).toBe(installed.registrations.find(({ meta }) => meta.name === "sidebar.panellist").meta.id)
    expect(installed.registrations.some(({ meta }) => meta.key === "workflow" || meta.id === "workflow")).toBe(false)
    await installed.create("b", { text: "Task draft", files: [] }, new AbortController().signal)
    expect(installed.sessions.create).toHaveBeenCalledExactlyOnceWith({ workspaceId: "b" })
    expect(installed.uiWorkspace.openSession).toHaveBeenCalledExactlyOnceWith("fresh-session")
    expect(consumeDraft("fresh-session")).toEqual({ text: "Task draft", files: [] })
    installed.dispose()
  })

  it.each(["navigation", "unmount", "dispose"])("does not navigate or queue a draft after %s cancellation", async (kind) => {
    const installed = plugin(), navigation = new AbortController(), unmount = new AbortController()
    let finish: (id: string) => void = () => {}
    installed.layout.beginNavigation.mockReturnValue(navigation.signal)
    installed.sessions.create.mockImplementation(() => new Promise((resolve) => { finish = resolve }))
    const pending = installed.create("b", { text: "Canceled draft", files: [] }, unmount.signal)
    if (kind === "navigation") navigation.abort()
    else if (kind === "unmount") unmount.abort()
    else installed.dispose()
    finish("fresh-session")
    expect(await pending).toBe(false)
    expect(installed.uiWorkspace.openSession).not.toHaveBeenCalled()
    expect(consumeDraft("fresh-session")).toBeNull()
  })

  it("preserves creation errors for retry without queuing a draft", async () => {
    const installed = plugin()
    installed.sessions.create.mockRejectedValue(new Error("Creation refused"))
    await expect(installed.create("b", { text: "Task draft", files: [] }, new AbortController().signal)).rejects.toThrow("Creation refused")
    expect(installed.uiWorkspace.openSession).not.toHaveBeenCalled()
    expect(consumeDraft("fresh-session")).toBeNull()
  })

  it("creates no session when image drafts are unavailable", async () => {
    const installed = plugin()
    await expect(installed.create("b", { text: "Image task", files: [new File(["png"], "task.png", { type: "image/png" })] }, new AbortController().signal)).rejects.toThrow(t("chatImagesUnavailable"))
    expect(installed.sessions.create).not.toHaveBeenCalled()
    expect(installed.uiWorkspace.openSession).not.toHaveBeenCalled()
  })
})
