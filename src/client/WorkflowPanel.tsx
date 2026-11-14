import { workflowErrorText } from "./lib/workflow-errors"
import { type ReactNode, Fragment, useCallback, useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronRight, FileText, MessageSquare, Plus, Trash2, Workflow as WorkflowIcon, Sparkles, X, ArrowUp } from "lucide-react"
import { Button } from "./components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter } from "./components/ui/dialog"
import { Textarea } from "./components/ui/textarea"
import type { ModelCatalog } from "@deepseek-ai/dsh-api-session-controller/types"
import { Modal, Tooltip } from "@deepseek-ai/dsh-client-ui-primitives"
import { WorkflowStageEditor } from "./WorkflowStageEditor"
import { WorkflowStageModel } from "./WorkflowStageModel"
import { WorkflowTaskDetail } from "./WorkflowTaskDetail"
import { WorkflowDiagram } from "./WorkflowDiagram"
import { useT } from "./lib/i18n"
import type { TaskOverview, TaskSummary, Workflow, WorkflowApi, WorkflowCommand, WorkflowTask, WorkflowStage } from "./lib/workflow-types"
export type { WorkflowApi } from "./lib/workflow-types"

type View = { kind: "library" } | { kind: "flow"; id: string } | { kind: "task"; id: string; flowId: string }
export function WorkflowPanel({ workspaceId, workspaceTitle, api, onDirtyChange, onOpenChat, onOpenSession, renderExecution, loadModels }: {
  workspaceId: string; workspaceTitle?: string; api?: WorkflowApi; onDirtyChange?: (dirty: boolean) => void
  loadModels?: () => Promise<ModelCatalog>
  renderExecution?: (sessionId: string, content?: ReactNode) => ReactNode
  onOpenChat?: (text: string, signal: AbortSignal) => Promise<boolean>; onOpenSession?: (sessionId: string) => void
}) {
  const t = useT()
  const [view, setView] = useState<View>({ kind: "library" })
  const [flows, setFlows] = useState<Workflow[]>([]), [items, setItems] = useState<TaskSummary[]>([])
  const [task, setTask] = useState<WorkflowTask | null>(null)
  const [loading, setLoading] = useState(true), [loadError, setLoadError] = useState<string | Error>("")
  const [error, setError] = useState<string | Error>(""), [busy, setBusy] = useState(false), [dirty, setDirty] = useState(false)
  const [reload, setReload] = useState(0)
  const [cleanupPending, setCleanupPending] = useState(false)
  const [collapsed, setCollapsed] = useState(new Set<string>())
  const [selectedStageId, setSelectedStageId] = useState("")
  const [creating, setCreating] = useState<string | null>(null), [text, setText] = useState("")
  const [deleting, setDeleting] = useState<{ kind: "flow"; item: Workflow } | { kind: "task"; item: WorkflowTask } | null>(null)
  const [stageDirty, setStageDirty] = useState(false)
  const creationDirty = Boolean(creating && text.trim())
  const unsaved = dirty || creationDirty || stageDirty
  const [deleteError, setDeleteError] = useState<string | Error>(""), [chatBusy, setChatBusy] = useState(false)
  const alive = useRef(true), busyRef = useRef(false), root = useRef<HTMLDivElement>(null), chatAbort = useRef<AbortController | null>(null)
  const requests = useRef(new Map<string, string>()), focusRow = useRef<string | null>(null)
  const inputField = useRef<HTMLTextAreaElement>(null)
  useEffect(() => { if (creating) inputField.current?.focus() }, [creating])
  const taskId = view.kind === "task" ? view.id : ""
  const flowId = view.kind === "flow" ? view.id : view.kind === "task" ? view.flowId : undefined
  const flow = flows.find(item => item.id === flowId), createFlow = flows.find(item => item.id === creating)
  useEffect(() => { alive.current = true; return () => { alive.current = false; chatAbort.current?.abort() } }, [])
  useEffect(() => { onDirtyChange?.(unsaved); return () => onDirtyChange?.(false) }, [unsaved, onDirtyChange])
  useEffect(() => {
    if (!unsaved) return
    const prevent = (event: BeforeUnloadEvent) => { event.preventDefault(); event.returnValue = "" }
    window.addEventListener("beforeunload", prevent); return () => window.removeEventListener("beforeunload", prevent)
  }, [unsaved])
  useEffect(() => {
    let cancelled = false, timer: ReturnType<typeof setTimeout>
    const controller = new AbortController()
    async function refresh() {
      if (!api) { setLoadError(t("wfUnavailable")); setLoading(false); return }
      let delay = 4000
      try {
        const [workflows, overview, detail] = await Promise.all([
          api.call<Workflow[]>("listWorkflows", { workspaceId }, controller.signal),
          api.call<TaskOverview>("listTasks", { workspaceId }, controller.signal),
          taskId ? api.call<WorkflowTask>("getTask", { taskId }, controller.signal) : Promise.resolve(null),
        ])
        if (cancelled) return
        if (!busyRef.current) {
          setFlows(previous => workflows.map(next => previous.find(old => old.id === next.id && old.revision > next.revision) ?? next)); setItems(overview.tasks.filter(item => item.workspaceId === workspaceId))
          if (detail) setTask(previous => previous?.id === detail.id && previous.revision > detail.revision ? previous : detail)
        }
        setLoadError(""); setLoading(false)
        delay = overview.tasks.some(item => ["queued", "running", "terminating"].includes(item.state)) ? 4000 : 15000
        setCleanupPending(Boolean(overview.status.cleanupPending))
      } catch (cause) { if (!cancelled) { setLoadError(cause instanceof Error ? cause : t("wfUnavailable")); setLoading(false) } }
      finally { if (!cancelled) timer = setTimeout(refresh, delay) }
    }
    void refresh()
    return () => { cancelled = true; controller.abort(); clearTimeout(timer) }
  }, [api, workspaceId, taskId, reload, t])
  useEffect(() => {
    const target = focusRow.current && Array.from(root.current?.querySelectorAll<HTMLElement>("[data-workflow-row]") ?? []).find(el => el.dataset.workflowRow === focusRow.current)
    if (target) { target.focus(); focusRow.current = null }
    else if (view.kind !== "library") root.current?.querySelector<HTMLElement>("[data-workflow-heading]")?.focus()
  }, [view.kind, view.kind === "library" ? "" : view.id, task?.id])
  const command: WorkflowCommand = useCallback(async <T,>(method: string, payload: Record<string, unknown>, signal?: AbortSignal): Promise<T> => {
    if (!api) throw new Error(t("wfUnavailable"))
    if (busyRef.current) throw new Error(t("wfWorking"))
    const key = JSON.stringify({ method, payload }), requestId = requests.current.get(key) ?? crypto.randomUUID()
    requests.current.set(key, requestId); busyRef.current = true; setBusy(true)
    try { const result = await api.call<T>(method, { request: { ...payload, requestId } }, signal); requests.current.delete(key); return result }
    finally { busyRef.current = false; if (alive.current) setBusy(false) }
  }, [api, t])
  function navigate(next: View, restore?: string) {
    if (busyRef.current || unsaved && !window.confirm(t("wfLeaveConfirm"))) return
    focusRow.current = restore ?? null; setDirty(false); setError(""); setSelectedStageId("")
    if (next.kind === "task" && next.id !== task?.id) setTask(null)
    setCreating(null); setText(""); setView(next)
    root.current?.closest(".kanban-panel")?.scrollTo({ top: 0 })
  }
  async function updateStage(patch: Partial<Pick<WorkflowStage, "prompt" | "modelSelection">>, originalPrompt?: string) {
    if (!flow || !selectedStageId) return
    try {
      const selected = flow.definition.stages.find(stage => stage.id === selectedStageId)
      if (originalPrompt !== undefined && (selected?.prompt ?? "") !== originalPrompt) throw new Error(t("wfStageTextChanged"))
      const definition = { ...flow.definition, stages: flow.definition.stages.map(stage => {
        if (stage.id !== selectedStageId) return stage
        const next = { ...stage, ...patch }
        if (next.modelSelection === undefined) delete next.modelSelection
        return next
      }) }
      setError("")
      const result = await command<Workflow>("updateWorkflow", { workflowId: flow.id, expectedRevision: flow.revision, name: flow.name, definition })
      if (alive.current) { setFlows(previous => previous.map(item => item.id === result.id ? result : item)); setReload(value => value + 1) }
    } catch (cause) { if (alive.current) setError(cause instanceof Error ? cause : t("wfActionFailed")); throw cause }
  }
  function updateTask(result: WorkflowTask) { setTask(result); setItems(previous => [result, ...previous.filter(item => item.id !== result.id)]); setReload(value => value + 1) }
  function startTask(id: string, source?: WorkflowTask) {
    if (creating === id && !source) { inputField.current?.focus(); return }
    if (busyRef.current || unsaved && !window.confirm(t("wfLeaveConfirm"))) return
    setDirty(false); setCollapsed(previous => { const next = new Set(previous); next.delete(id); return next }); setView({ kind: "library" }); setCreating(id); setText(source?.input.text ?? ""); setError("")
  }
  function closeCreate() { if (!busyRef.current && (!creationDirty || window.confirm(t("wfLeaveConfirm")))) { setCreating(null); setError("") } }
  async function createTask() {
    if (!createFlow || !text.trim()) return
    if (dirty && !window.confirm(t("wfLeaveConfirm"))) return
    try {
      const result = await command<WorkflowTask>("createTask", { workspaceId, workflowId: createFlow.id,
        ...(createFlow.versionId ? { expectedVersionId: createFlow.versionId } : {}), text })
      if (!alive.current) return
      setCreating(null); setDirty(false); setView({ kind: "task", id: result.id, flowId: createFlow.id }); updateTask(result)
    } catch (cause) { if (alive.current) setError(cause instanceof Error ? cause : t("wfActionFailed")) }
  }
  async function talkToAgent(target?: Workflow, stageId?: string, goal?: string) {
    if (!onOpenChat || chatAbort.current || busyRef.current || unsaved && !window.confirm(t("wfLeaveConfirm"))) return
    const controller = new AbortController(); chatAbort.current = controller; setChatBusy(true); setError("")
    const context = { workspaceId, workspaceName: workspaceTitle || workspaceId,
      ...(target ? { workflowId: target.id, workflowName: target.name, revision: target.revision, workflowVersionId: target.versionId, versionNumber: target.versionNumber } : {}), ...(stageId ? { stageId } : {}) }
    const prompt = [t(target ? "wfChatEditPrompt" : "wfChatCreatePrompt"), JSON.stringify(context, null, 2), goal, t("wfDocumentStatusHint"), t("wfChatSaveOnly")].filter(Boolean).join("\n\n")
    try { if (!await onOpenChat(prompt, controller.signal) && alive.current && !controller.signal.aborted) setError(t("wfChatOpenFailed")) }
    catch (cause) { if (alive.current && !controller.signal.aborted) setError(cause instanceof Error ? cause : t("wfChatOpenFailed")) }
    finally { chatAbort.current = null; if (alive.current) setChatBusy(false) }
  }
  async function confirmDelete() {
    if (!deleting) return
    try {
      const result = await command<{ cleanupPending?: boolean }>(deleting.kind === "flow" ? "deleteWorkflow" : "deleteTask", { [deleting.kind === "flow" ? "workflowId" : "taskId"]: deleting.item.id, expectedRevision: deleting.item.revision })
      if (!alive.current) return
      if (deleting.kind === "flow") { setFlows(previous => previous.filter(item => item.id !== deleting.item.id)); setView({ kind: "library" }) }
      else { setItems(previous => previous.filter(item => item.id !== deleting.item.id)); setView({ kind: "library" }); focusRow.current = `flow:${deleting.item.workflowId}` }
      setDeleting(null); setReload(value => value + 1)
      if (result.cleanupPending) setCleanupPending(true)
    } catch (cause) { if (alive.current) setDeleteError(cause instanceof Error ? cause : t("wfActionFailed")) }
  }
  const taskRows = (parent: Workflow) => items.filter(item => item.workflowId === parent.id)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
  function flowActivity(parent: Workflow) {
    const tasks = items.filter(item => item.workflowId === parent.id)
    const running = tasks.filter(item => ["running", "queued", "terminating"].includes(item.state)).length
    const attention = tasks.filter(item => ["waiting_review", "needs_attention"].includes(item.state)).length
    return <span className="workflow-tree-activity">{running > 0 && <span data-kind="running">{t("wfFlowRunning").replace("{count}", String(running))}</span>}{attention > 0 && <span data-kind="attention">{t("wfFlowAttention").replace("{count}", String(attention))}</span>}</span>
  }
  const renderTask = (item: TaskSummary, parent: Workflow) => <tr key={item.id} className="workflow-tree-task" data-nested="true">
    <td><Tooltip label={() => { const text = item.inputText ?? item.title; return text.length > 200 ? `${text.slice(0, 200)}…` : text }} onlyWhenClipped portal side="top" delayMs={400} maxWidth={420}><button className="workflow-tree-name" data-workflow-row={`task:${item.id}`} onClick={() => navigate({ kind: "task", id: item.id, flowId: item.workflowId })}><FileText aria-hidden="true" /><span>{item.inputText ?? item.title}</span>{Boolean(parent.versionNumber && item.versionNumber !== parent.versionNumber) && <span className="workflow-tree-version">v{item.versionNumber}</span>}</button></Tooltip></td>
    <td><span className="workflow-state" data-state={item.state}>{t(`wfState_${item.state}`)}</span></td><Tooltip label={item.stageTitle} onlyWhenClipped portal side="top" delayMs={400} maxWidth={420}><td className="workflow-tree-stage">{item.stageTitle}</td></Tooltip>
    <td className="workflow-tree-time"><time dateTime={new Date(item.updatedAt).toISOString()}>{new Date(item.updatedAt).toLocaleString(t("dateLocale"))}</time></td>
  </tr>
  const table = <table className="workflow-tree" aria-label={t("wfTree")}>
    <thead><tr><th>{t("wfTreeName")}</th><th>{t("wfStatus")}</th><th className="workflow-tree-stage">{t("wfCurrentStage")}</th><th className="workflow-tree-time">{t("wfUpdated")}</th></tr></thead>
    {flows.map(parent => <Fragment key={parent.id}>
      <tbody><tr className="workflow-tree-flow"><td colSpan={4}><div className="workflow-tree-parent">
        <button className="workflow-tree-toggle" aria-expanded={!collapsed.has(parent.id)} aria-controls={`workflow-children-${parent.id}`} aria-label={t(collapsed.has(parent.id) ? "wfExpandFlow" : "wfCollapseFlow").replace("{name}", parent.name)} onClick={() => setCollapsed(previous => { const next = new Set(previous); if (next.has(parent.id)) next.delete(parent.id); else next.add(parent.id); return next })}>{collapsed.has(parent.id) ? <ChevronRight /> : <ChevronDown />}</button>
        <Tooltip label={parent.name} onlyWhenClipped portal side="top" delayMs={400} maxWidth={420}><button className="workflow-tree-name" data-workflow-row={`flow:${parent.id}`} onClick={() => navigate({ kind: "flow", id: parent.id })}><WorkflowIcon aria-hidden="true" /><span>{parent.name}</span></button></Tooltip><span className="workflow-tree-count">{items.filter(item => item.workflowId === parent.id).length}</span>
      {flowActivity(parent)}</div></td></tr></tbody>
      <tbody id={`workflow-children-${parent.id}`} hidden={collapsed.has(parent.id)}>{taskRows(parent).map(item => renderTask(item, parent))}
      <tr className="workflow-tree-task workflow-tree-create-row" data-nested="true"><td colSpan={4}><Button className="workflow-tree-create" size="sm" variant="ghost" disabled={busy || Boolean(loadError)} aria-label={`${t("wfNewTask")} · ${parent.name}`} aria-expanded={creating === parent.id} aria-controls={`workflow-compose-${parent.id}`} onClick={() => startTask(parent.id)}><Plus /><span>{t("wfNewTask")}</span></Button></td></tr>
      {creating === parent.id && <tr className="workflow-compose-row"><td colSpan={4}><form id={`workflow-compose-${parent.id}`} className="workflow-composer" aria-label={`${t("wfNewTask")} · ${parent.name}`} onSubmit={event => { event.preventDefault(); void createTask() }}>
        <div className="workflow-compose-input"><Textarea ref={inputField} required rows={3} value={text} disabled={busy} aria-label={parent.definition.inputLabel || t("wfInput")} placeholder={parent.definition.inputHint || t("wfComposePlaceholder")} onChange={event => setText(event.target.value)} onKeyDown={event => { if ((event.metaKey || event.ctrlKey) && event.key === "Enter" && !event.nativeEvent.isComposing) { event.preventDefault(); event.currentTarget.form?.requestSubmit() } }} /><Button type="button" size="icon" variant="ghost" disabled={busy} onClick={closeCreate} aria-label={t("cancel")}><X /></Button></div>
        <div className="workflow-compose-footer"><Button type="submit" size="icon" className="workflow-compose-send" aria-label={t(busy ? "wfSubmitting" : "wfCreate")} disabled={busy || Boolean(loadError) || !text.trim()}><ArrowUp /></Button></div>
        {error && <p className="workflow-error" role="alert">{workflowErrorText(error)}</p>}
      </form></td></tr>}
      </tbody>
    </Fragment>)}
    <tfoot><tr className="workflow-create-flow-row"><td colSpan={4}><Button variant="ghost" disabled={!onOpenChat || chatBusy} onClick={() => void talkToAgent()}><Plus />{t("wfNew")}</Button></td></tr></tfoot>
  </table>
  const selectedStage = flow?.definition?.stages.find(stage => stage.id === selectedStageId)
  return <div ref={root} className="workflow-root" data-view={view.kind} role="region" aria-label={t("wfTitle")} tabIndex={-1}>
    {loadError && <div className="workflow-connection" role="alert"><span>{flows.length ? t("wfConnectionLost") : workflowErrorText(loadError)}</span><Button size="sm" variant="outline" onClick={() => { setLoading(true); setReload(value => value + 1) }}>{t("wfReconnect")}</Button></div>}
    {cleanupPending && <p className="workflow-notice" role="status">{t("wfCleanupPending")}</p>}
    {view.kind !== "library" && <nav className="workflow-breadcrumb" aria-label={t("wfBreadcrumb")}><button onClick={() => navigate({ kind: "library" }, `flow:${flowId}`)}>Workflow</button><ChevronRight />{view.kind === "task" ? <><button onClick={() => navigate({ kind: "flow", id: view.flowId }, `task:${view.id}`)}>{flow?.name || task?.workflowName}</button><ChevronRight /><span aria-current="page" title={task?.input.text}>{task?.input.text || t("wfLoading")}</span></> : <span aria-current="page">{flow?.name}</span>}</nav>}
    {error && !creating && !selectedStageId && <p className="workflow-error" role="alert">{workflowErrorText(error)}</p>}
    {view.kind === "task" ? task?.id === view.id ? <>
      <WorkflowTaskDetail renderExecution={renderExecution} onDelete={() => { setDeleteError(""); setDeleting({ kind: "task", item: task }) }} embedded task={task} api={api} busy={busy} disconnected={Boolean(loadError)} command={command} onUpdated={updateTask} onDirtyChange={setDirty} onBack={() => navigate({ kind: "library" }, `task:${task.id}`)} onCopyTask={() => startTask(task.workflowId, task)} onOpenSession={onOpenSession} />
    </> : <p role="status">{t("wfLoading")}</p> : view.kind === "flow" && flow ? <>
      <header className="workflow-page-header"><div className="workflow-flow-heading"><h2 title={flow.name} tabIndex={-1} data-workflow-heading>{flow.name}{flow.versionNumber && <small>v{flow.versionNumber}</small>}</h2>{flow.description && <p className="workflow-flow-description" title={flow.description}>{flow.description}</p>}</div><div className="workflow-actions"><Button size="sm" variant="ghost" aria-label={t("wfDelete")} disabled={busy || Boolean(loadError)} onClick={() => { setDeleteError(""); setDeleting({ kind: "flow", item: flow }) }}><Trash2 /></Button><Button size="sm" variant="ghost" disabled={chatBusy || !onOpenChat || !flow.taskCount} onClick={() => void talkToAgent(flow, undefined, t("wfChatOptimizePrompt"))}><Sparkles />{t("wfOptimize")}</Button><Button size="sm" variant="outline" disabled={chatBusy || !onOpenChat} onClick={() => void talkToAgent(flow)}><MessageSquare />{t("wfEditWithAgent")}</Button></div></header>
      <section className="workflow-flow-overview"><WorkflowDiagram horizontal stages={flow.definition?.stages ?? []} selectedStageId={selectedStageId || undefined} onSelect={stageId => { if (!busyRef.current) setSelectedStageId(previous => previous === stageId ? "" : stageId) }} />
        {selectedStage && <Modal open title={selectedStage.title} closeLabel={t("close")} onClose={() => { if (!busyRef.current && (!stageDirty || window.confirm(t("wfLeaveConfirm")))) { setStageDirty(false); setSelectedStageId("") } }} className="kanban-root workflow-shell workflow-stage-modal workflow-config-modal" contentClassName="workflow-modal-content">
          <div className="workflow-root workflow-config-content">
            {error && <p className="workflow-error" role="alert">{workflowErrorText(error)}</p>}
            <WorkflowStageEditor key={`${flow.id}:${selectedStage.id}`} prompt={selectedStage.prompt ?? ""} required={selectedStage.kind === "agent"} disabled={busy || Boolean(loadError)} onSave={(prompt, original) => updateStage({ prompt }, original)} onDirtyChange={setStageDirty}>
              {selectedStage.kind === "agent" && <WorkflowStageModel selection={selectedStage.modelSelection} loadModels={loadModels} disabled={busy || Boolean(loadError)} onChange={selection => updateStage({ modelSelection: selection })} />}
              <Button type="button" size="icon" variant="ghost" disabled={chatBusy || !onOpenChat || busy} aria-label={t("wfEditStageWithAgent")} title={t("wfEditStageWithAgent")} onClick={() => void talkToAgent(flow, selectedStage.id)}><MessageSquare /></Button>
            </WorkflowStageEditor>
            {selectedStage.returnStageId && <p className="workflow-note">{t("wfReturnTarget")}: {flow.definition.stages.find(stage => stage.id === selectedStage.returnStageId)?.title}</p>}
          </div>
        </Modal>}
      </section>
    </> : <>{loading && !flows.length ? <p role="status">{t("wfLoading")}</p> : table}</>}
    {deleting && <Dialog open onOpenChange={open => { if (!open && !busyRef.current) setDeleting(null) }}><DialogContent className="kanban-root kanban-dialog-medium"><DialogHeader><DialogTitle>{t(deleting.kind === "flow" ? "wfDelete" : "wfDeleteTask")}</DialogTitle><DialogDescription>{t(deleting.kind === "flow" ? "wfDeleteConfirm" : "wfDeleteTaskConfirm").replace("{name}", deleting.kind === "flow" ? deleting.item.name : deleting.item.input.text.length > 100 ? `${deleting.item.input.text.slice(0, 100)}…` : deleting.item.input.text)}</DialogDescription></DialogHeader>{deleteError && <DialogBody><p className="kanban-error" role="alert">{workflowErrorText(deleteError)}</p></DialogBody>}<DialogFooter><Button variant="outline" disabled={busy} onClick={() => setDeleting(null)}>{t("cancel")}</Button><Button variant="destructive" disabled={busy} onClick={() => void confirmDelete()}>{t("confirmDelete")}</Button></DialogFooter></DialogContent></Dialog>}
  </div>
}
