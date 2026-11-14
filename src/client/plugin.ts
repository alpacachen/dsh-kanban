import { createElement as h, createContext, useContext, Fragment, useEffect, useState, type ReactNode } from "react"
import type { Context } from "@deepseek-ai/cordis"
import type { PropsRuntime, PropsRenderSlots, PropsRenderFactories } from "@deepseek-ai/dsh-client-ui-slots"
import type { ModelCatalog } from "@deepseek-ai/dsh-api-session-controller/types"
import type { ISessions, SessionReference } from "@deepseek-ai/dsh-api-session-controller/client"
import { PanelsTopLeft } from "lucide-react"
import type {} from "@deepseek-ai/dsh-client-ui-sidebar/client"
import type {} from "@deepseek-ai/dsh-client-ui-layout/client"
import type { ConversationViewsProps } from "@deepseek-ai/dsh-client-ui-conversation/client"
import type {} from "@deepseek-ai/dsh-client-ui-chat/client"
import type {} from "@deepseek-ai/dsh-client-ui-renderer/client"
import { KanbanPanel } from "./KanbanPanel"
import { createWorkflowFileActions } from "./lib/workflow-file-actions"
import { createWorkflowApi } from "./lib/workflow-api"
import type { KanbanViewProps } from "./KanbanView"
import { ChatDraftInjector } from "./components/ChatDraftInjector"
import { queueDraft, type AttachmentDrafts } from "./lib/chat-bridge"
import { installLocale, t } from "./lib/i18n"
import { workflowPromptInput } from "./lib/workflow-presentation"

declare module "@deepseek-ai/dsh-api-session-controller/client" {
  interface SessionReferenceSourceMap { workflowView: unknown }
}

const ExecutionContent = createContext<{ content?: ReactNode } | null>(null)

function ExecutionChat({ sessionId, sessions, SessionProvider, renderSlot }: PropsRenderSlots<"kanban.execution"> & { sessionId: string; sessions: ISessions }) {
  const content = useContext(ExecutionContent)?.content
  const target = sessionId as SessionReference["sessionId"]
  const [reference, setReference] = useState<SessionReference>()
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    let retained: SessionReference | undefined
    let alive = true
    void (async () => {
      try {
        if (!sessions.list.getSnapshot().byId[target]) await sessions.refresh()
        if (!alive) return
        retained = sessions.retain(target, { source: "workflowView" })
        setReference(retained)
        await retained.ready
      } catch { if (alive) setFailed(true) }
    })()
    return () => { alive = false; retained?.release() }
  }, [target, sessions])
  const empty = () => h("div", { className: "workflow-execution-fallback" }, content, h("p", { className: "workflow-note", role: "status" }, t(failed ? "wfSessionUnavailable" : "wfLoading")))
  return failed ? empty() : h(SessionProvider, { session: reference, empty, children: renderSlot("kanban.execution", {}) })
}

declare module "@deepseek-ai/dsh-client-ui-slots" {
  interface SlotMap { "kanban.execution": { kind: "single"; scope: "session" } }
}

function ExecutionView({ renderSlot }: ConversationViewsProps) {
  return h(Fragment, null, useContext(ExecutionContent)?.content, renderSlot("conversation.session", { view: "chat" }))
}

export const KanbanPlugin = {
  name: "dsh-kanban",
  inject: ["slots", "locale", "layout", "sessions", "uiWorkspace", "conversation", "uiConversation", "remote.session"],
  apply(ctx: Context) {
    installLocale(ctx)
    const slots = ctx.get("slots")
    if (slots === undefined) return
    slots.inject("conversation.chat.markdown.fence", () => slots.register(
      { name: "conversation.chat.markdown.fence", id: "kanban-workflow-handoff" },
      ({ lang, children }: PropsRuntime<"conversation.chat.markdown.fence"> & { children: ReactNode }) => {
        const execution = useContext(ExecutionContent)
        return lang === "workflow-handoff" && execution ? null : h(Fragment, null, children)
      },
    ))
    ctx.get("uiConversation")?.userText.register({
      id: "kanban-workflow-input", order: -100,
      match: (text, from) => {
        if (from !== 0) return
        const display = workflowPromptInput(text)
        if (display === text) return
        return { id: "text", start: 0, end: text.length, data: { text, display } }
      },
    })
    // DSH UI workspace services handle navigation between sessions.
    const uiWorkspace = ctx.uiWorkspace
    const sessions = ctx.sessions
    const layout = ctx.layout
    const workflowApi = Object.assign(createWorkflowApi(), createWorkflowFileActions(
      ctx.get("remote.session") as Parameters<typeof createWorkflowFileActions>[0],
    ))
    const lifetime = new AbortController()
    // These draft lifecycle methods are available in the installed DSH; guard them at use time.
    const attachmentDrafts = ctx.get("conversation") as AttachmentDrafts | undefined
    const onCreateConversation: KanbanViewProps["onCreateConversation"] = async (workspaceId, draft, signal) => {
      if (draft.files.length && (!attachmentDrafts?.createDrafts || !attachmentDrafts.releaseDraftAttachments)) throw new Error(t("chatImagesUnavailable"))
      const navigation = AbortSignal.any([signal, lifetime.signal, layout.beginNavigation()])
      if (navigation.aborted) return false
      // Do not reuse a blank session: it may already contain the user's draft.
      const sessionId = await sessions.create({ workspaceId })
      if (navigation.aborted) return false
      queueDraft(sessionId, draft.text, draft.files)
      uiWorkspace.openSession(sessionId)
      return true
    }
    slots.inject("main", () =>
      slots.register(
        { name: "main", key: "kanban", children: { "kanban.execution": { kind: "single", scope: "session" } } },
        (props: PropsRuntime<"main"> & PropsRenderSlots<"kanban.execution">) => h(KanbanPanel, {
          ...props, onCreateConversation, workflowApi,
          loadModels: async () => {
            // The installed Host exposes the same catalog used by its session model selector.
            const remote = ctx.get("remote.session") as { modelCatalog(): Promise<{ ok: true; value: ModelCatalog } | { ok: false }> }
            const response = await remote.modelCatalog()
            if (!response.ok) throw new Error(t("wfModelCatalogFailed"))
            return response.value
          },
          onOpenSession: (sessionId: string) => uiWorkspace.openSession(sessionId as Parameters<typeof uiWorkspace.openSession>[0]),
          renderExecution: (sessionId: string, content?: ReactNode) => h(ExecutionContent.Provider, { key: sessionId, value: { content } }, h(ExecutionChat, { sessionId, sessions, SessionProvider: props.SessionProvider, renderSlot: props.renderSlot })),
        }),
      ),
    )
    slots.inject("kanban.execution", () => slots.register(
      { name: "kanban.execution" },
      (props: PropsRuntime<"kanban.execution"> & PropsRenderFactories) => props.renderFactorySlot("conversation.content", { variant: "embedded", phase: "active", hero: false }, { slots: { views: ExecutionView } }),
    ))
    slots.inject("sidebar.panellist", () => slots.register(
      { name: "sidebar.panellist", id: "kanban", order: 30, label: () => t("boardTab") },
      ({ size }: PropsRuntime<"sidebar.panellist">) => h(PanelsTopLeft, { size, strokeWidth: 1.5 }),
    ))
    // Keep a session-scoped injector mounted to fill queued drafts in new sessions.
    slots.inject("conversation.input.dock", () =>
      slots.register(
        { name: "conversation.input.dock", id: "kanban-chat-draft", order: 100 },
        (props: PropsRuntime<"conversation.input.dock">) => h(ChatDraftInjector, { ...props, attachmentDrafts }),
      ),
    )
    ctx.effect(() => () => {
      lifetime.abort()
      if (layout.panelInfo.getSnapshot().activePanelId === "kanban") layout.selectPanel(null)
    })
  },
}
