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
  it("opens the title menu with the keyboard and restores focus on Escape without changing workspaces", async () => {
    const user = userEvent.setup()
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: true, json: async () => ({ board: { columns: [], cards: [], labels: [], activities: [] } }) } as Response)
    render(<KanbanPanel {...props()} />)
    await screen.findByRole("searchbox")
    const trigger = screen.getByRole("button", { name: `${t("selectWorkspace")}: Alpha`, expanded: false })
    expect(screen.queryByRole("navigation")).toBeNull()
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
  const sessions = { create: vi.fn(async () => "fresh-session") }
  const uiWorkspace = { openSession: vi.fn() }
  const ctx = {
    layout, sessions, uiWorkspace,
    get: (name: string) => name === "slots" ? {
      inject: (_name: string, setup: () => void) => setup(),
      register: (meta: unknown, Component: any) => { registrations.push({ meta, Component }); return () => {} },
    } : undefined,
    effect: (setup: () => (() => void)) => { disposers.push(setup()) },
  }
  KanbanPlugin.apply(ctx as any)
  const create = registrations.find(({ meta }) => meta.name === "main").Component({}).props.onCreateConversation
  return { registrations, create, sessions, uiWorkspace, layout, dispose: () => disposers.reverse().forEach((off) => off()) }
}

describe("panel registration and new conversations", () => {
  it("registers one global board, preserves the draft injector and removes the session tab", async () => {
    const installed = plugin()
    expect(installed.registrations.map(({ meta }) => meta.name)).toEqual(["main", "sidebar.panellist", "conversation.input.dock"])
    expect(installed.registrations[0].meta.key).toBe(installed.registrations[1].meta.id)
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
