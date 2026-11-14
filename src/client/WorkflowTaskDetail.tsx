import { workflowErrorText } from "./lib/workflow-errors"
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react"
import { ArrowLeft, Copy, Download, RotateCcw, Check, OctagonX, Trash2, ArrowUpRight } from "lucide-react"
import { Modal, MarkdownText } from "@deepseek-ai/dsh-client-ui-primitives"
import { Button } from "./components/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./components/ui/tooltip"
import { Textarea } from "./components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./components/ui/dialog"
import { WorkflowTaskFiles } from "./WorkflowTaskFiles"
import { WorkflowDiagram } from "./WorkflowDiagram"
import { useT } from "./lib/i18n"
import { workflowReportBody } from "./lib/workflow-presentation"
import type { TaskArtifact, TaskOutput, WorkflowApi, WorkflowCommand, WorkflowTask } from "./lib/workflow-types"

export function WorkflowTaskDetail({ task, api, busy, disconnected, command, onUpdated, onBack, onCopyTask, onDirtyChange, onOpenSession, onDelete, renderExecution, embedded = false }: {
  renderExecution?: (sessionId: string, content?: ReactNode) => ReactNode
  onDelete?: () => void; onOpenSession?: (sessionId: string) => void; embedded?: boolean; task: WorkflowTask; api?: WorkflowApi; busy: boolean; disconnected: boolean; command: WorkflowCommand; onUpdated: (task: WorkflowTask) => void
  onBack: () => void; onCopyTask: () => void; onDirtyChange: (dirty: boolean) => void
}) {
  const heading = useRef<HTMLHeadingElement>(null), entering = useRef(false)
  useEffect(() => { if (embedded) { entering.current = true; heading.current?.focus(); entering.current = false } }, [embedded, task.id])
  const t = useT()
  const markdownLabels = useMemo(() => ({ code: { copyLabel: t("copyCode"), copiedLabel: t("copiedCode") }, footnotes: t("footnotes") }), [t])
  const id = useId()
  const [selectedStageId, setSelectedStageId] = useState(task.currentStageId)
  const [stageOpen, setStageOpen] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [returning, setReturning] = useState(false)
  const [error, setError] = useState<string | Error>("")
  const [notice, setNotice] = useState("")
  const [confirmingStop, setConfirmingStop] = useState(false)
  const [confirmingRecovery, setConfirmingRecovery] = useState(false)
  const [confirmedStopped, setConfirmedStopped] = useState(false)
  const [copied, setCopied] = useState("")
  const [stale, setStale] = useState(false)
  const [savedFeedback, setSavedFeedback] = useState<{ id: string; text: string }[]>([])
  const feedbackField = useRef<HTMLTextAreaElement>(null)
  const returnButton = useRef<HTMLButtonElement>(null)
  const restoreReturnFocus = useRef(false)
  useEffect(() => {
    if (returning && selectedStageId === task.currentStageId) feedbackField.current?.focus()
    else if (restoreReturnFocus.current) { returnButton.current?.focus(); restoreReturnFocus.current = false }
  }, [returning, selectedStageId, task.currentStageId])
  useEffect(() => { if (!stageOpen) setSelectedStageId(task.currentStageId) }, [task.currentStageId, stageOpen])
  function openStage(stageId: string) { setSelectedStageId(stageId); setStageOpen(true) }
  const previousReview = useRef(task.review?.id)
  const alive = useRef(true)
  const artifactRequests = useRef(new Map<string, AbortController>())
  const [history, setHistory] = useState<Record<string, TaskOutput>>({})
  const [historyLoading, setHistoryLoading] = useState<Record<string, boolean>>({})
  const [historyErrors, setHistoryErrors] = useState<Record<string, string | Error>>({})
  useEffect(() => { alive.current = true; return () => { alive.current = false; for (const controller of artifactRequests.current.values()) controller.abort() } }, [])
  useEffect(() => { onDirtyChange(Boolean(feedback.trim() || savedFeedback.length)) }, [feedback, savedFeedback, onDirtyChange])
  useEffect(() => {
    if (previousReview.current !== task.review?.id) {
      if (feedback.trim()) {
        const saved = { id: previousReview.current ?? crypto.randomUUID(), text: feedback }
        setSavedFeedback(previous => [...previous.filter(item => item.id !== saved.id), saved])
        setFeedback(""); setStale(true)
      }
      if (task.review && !stageOpen) setSelectedStageId(task.currentStageId)
      setReturning(false)
      previousReview.current = task.review?.id
    }
  }, [task.review?.id, feedback])
  const disabled = busy || disconnected || stale || Boolean(feedback.trim() && previousReview.current !== task.review?.id)
  const reviewUnavailable = task.state !== "waiting_review" || !task.review || task.canReview !== true || !task.outputs.length || task.outputs.some(output => output.unavailable || history[output.id]?.unavailable || Boolean(historyErrors[output.id]))
  const reviewDisabled = disabled || reviewUnavailable
  const reviewing = task.state === "waiting_review" || Boolean(task.review)
  const terminal = task.state === "completed" || task.state === "terminated"
  const currentStage = task.stages.find(stage => stage.id === task.currentStageId)
  const returnStage = task.stages.find((stage, index) => stage.id === task.review?.returnStageId && stage.kind === "agent" && index < task.stages.findIndex(item => item.id === task.currentStageId))
  const returnTarget = returnStage?.title ?? t("wfReviewReturnUnavailable")
  const selectedStage = task.stages.find(stage => stage.id === selectedStageId) ?? currentStage ?? task.stages[0]
  const selectedAttempts = (task.attempts ?? []).filter(attempt => attempt.stageId === selectedStage?.id)
  const execution = selectedAttempts[selectedAttempts.length - 1]
  const reviewSelected = reviewing && selectedStage?.id === task.currentStageId
  const stageArtifacts = (task.artifactHistory ?? []).filter(item => reviewSelected || item.stageId === selectedStage?.id)
  const stageReviews = (task.reviews ?? []).filter(item => item.stageId === selectedStage?.id || !item.stageId && selectedStage?.kind === "review" && task.stages.filter(stage => stage.kind === "review").length === 1)
  const lastReview = stageReviews[stageReviews.length - 1]
  const visibleOutputs: TaskOutput[] = reviewSelected ? task.outputs : selectedStage?.kind === "review"
    ? (task.artifactHistory ?? []).filter(output => lastReview?.artifactIds?.includes(output.id))
    : task.outputs.filter(output => output.stageId === selectedStage?.id || !output.stageId && selectedStage?.kind === "agent" && task.stages.filter(stage => stage.kind === "agent").length === 1)
  const legacyProtocol = visibleOutputs.some(output => {
    const text = (history[output.id] ?? output).text ?? ""
    return text.includes("<workflow-handoff>") && !text.includes("```workflow-handoff")
  })
  const stageModel = selectedStage?.modelSelection ?? task.executionModel
  const stageStates = Object.fromEntries(task.stages.map(stage => {
    const visits = (task.visits ?? []).filter(visit => visit.stageId === stage.id)
    const latest = visits[visits.length - 1]
    const artifacts = (task.artifactHistory ?? []).filter(output => output.stageId === stage.id)
    const state = task.currentStageId === stage.id && !terminal ? task.state
      : latest?.state === "returned" || stage.kind === "agent" && artifacts.length > 0 && !artifacts.some(output => output.effective) ? "invalidated"
      : latest?.state === "terminated" ? "cancelled"
      : latest?.state === "open" ? "pending"
      : latest?.state ?? (artifacts.some(output => output.effective) ? "succeeded" : "pending")
    return [stage.id, state]
  }))
  async function loadArtifact(artifact: TaskArtifact | TaskOutput) {
    if (!api || artifactRequests.current.has(artifact.id)) return
    const controller = new AbortController()
    artifactRequests.current.set(artifact.id, controller)
    setHistoryLoading(previous => ({ ...previous, [artifact.id]: true }))
    setHistoryErrors(previous => ({ ...previous, [artifact.id]: "" }))
    try {
      const output = await api.call<TaskOutput>("getArtifact", { taskId: task.id, artifactId: artifact.id }, controller.signal)
      if (alive.current && !controller.signal.aborted) setHistory(previous => ({ ...previous, [artifact.id]: output }))
    } catch (cause) {
      if (alive.current && !controller.signal.aborted) setHistoryErrors(previous => ({ ...previous, [artifact.id]: cause instanceof Error ? cause : t("wfActionFailed") }))
    } finally {
      artifactRequests.current.delete(artifact.id)
      if (alive.current) setHistoryLoading(previous => ({ ...previous, [artifact.id]: false }))
    }
  }
  const visibleOutputIds = visibleOutputs.map(output => output.id).join(",")
  useEffect(() => {
    if (!stageOpen) return
    for (const output of visibleOutputs) {
      if (output.text === undefined && !history[output.id]) void loadArtifact(output)
    }
  }, [stageOpen, selectedStage?.id, visibleOutputIds, api])
  async function act(method: string, payload: Record<string, unknown>) {
    if (disabled) return
    if (method === "retryTask" && task.retryBlockedReason) { setError(task.retryBlockedReason); return }
    setError(""); setNotice("")
    try {
      const result = await command<WorkflowTask>(method, payload)
      if (!alive.current) return
      if (method === "reconcileTask") setNotice(t("wfReconciled"))
      setFeedback(""); setReturning(false); setStale(false); previousReview.current = result.review?.id; onDirtyChange(Boolean(savedFeedback.length)); onUpdated(result)
    } catch (cause) { if (alive.current) setError(cause instanceof Error ? cause : t("wfActionFailed")) }
  }
  const review = (decision: "approved" | "returned" | "terminated") => {
    if (disabled || !task.review || (decision !== "terminated" && reviewDisabled) || decision === "returned" && (!returnStage || !feedback.trim())) return
    void act("decideReview", { taskId: task.id, expectedRevision: task.revision, reviewId: task.review.id, subjectHash: task.review.subjectHash, decision, feedback: decision === "returned" ? feedback.trim() : "" })
  }
  function terminate() {
    if (disabled || terminal || task.state === "terminating" && task.canReconcile !== true) return
    setConfirmingStop(false)
    if (task.review) review("terminated")
    else void act("terminateTask", { taskId: task.id, expectedRevision: task.revision, ...(task.canReconcile ? { confirmedStopped } : {}) })
  }
  async function copy(output: TaskOutput) {
    try { await navigator.clipboard.writeText(workflowReportBody(output.text ?? "")); if (alive.current) setCopied(output.id) }
    catch { if (alive.current) setError(t("wfCopyFailed")) }
  }
  function download(output: TaskOutput) {
    const url = URL.createObjectURL(new Blob([workflowReportBody(output.text ?? "")], { type: "text/plain;charset=utf-8" }))
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = `${output.label.replace(/[^\p{L}\p{N} _-]/gu, "_").slice(0, 80) || "result"}.txt`; anchor.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  const renderOutput = (output: TaskOutput, historical = false) => {
    const loaded = output.text === undefined ? history[output.id] : output
    return <section className="workflow-output" key={output.id}>
      <header><h4>{output.label}</h4><span className="workflow-muted">{t(selectedStage?.kind === "review" && !reviewSelected ? "wfReviewedReport" : historical ? "wfSuperseded" : "wfEffective")}</span>{loaded && !loaded.unavailable && <div className="workflow-actions"><Button size="sm" variant="ghost" onClick={() => void copy(loaded)}><Copy />{t(copied === output.id ? "wfCopied" : "wfCopy")}</Button><Button size="sm" variant="ghost" onClick={() => download(loaded)}><Download />{t("wfDownload")}</Button></div>}</header>
      {loaded?.unavailable || output.unavailable ? <p className="workflow-error" role="alert">{t("wfArtifactUnavailable")}</p> : loaded ? <div className="workflow-result-document"><MarkdownText text={workflowReportBody(loaded.text ?? "")} labels={markdownLabels} variant="compact" /></div> : historyErrors[output.id] ? <p className="workflow-error" role="alert">{workflowErrorText(historyErrors[output.id])} <Button size="sm" variant="ghost" onClick={() => void loadArtifact(output)}>{t("retry")}</Button></p> : <p role="status" className="workflow-note">{t("wfLoadingArtifact")}</p>}
    </section>
  }
  const stopButton = !terminal && <Button className="workflow-terminate" size={reviewing ? "default" : "icon"} aria-label={t("wfStop")} title={t("wfStop")} variant="ghost" disabled={disabled || task.state === "terminating" && task.canReconcile !== true} onClick={() => setConfirmingStop(true)}><OctagonX aria-hidden="true" />{reviewing && t("wfStop")}</Button>
  const reports = <>          <section className="workflow-results" aria-label={t("wfResults")}><h3 className="kanban-sr-only">{t("wfResults")}</h3>{reviewSelected && <p className="workflow-note">{t("wfReviewScope")}</p>}
            {visibleOutputs.length ? visibleOutputs.map((output, index) => visibleOutputs.length === 1 ? renderOutput(output) : <details key={output.id} className="workflow-report-disclosure" open={index === visibleOutputs.length - 1}><summary>{output.label}</summary>{renderOutput(output)}</details>) : <p className="workflow-empty-inline">{t("wfNoResults")}</p>}
            <details className="workflow-disclosure"><summary>{t("wfOriginal")}</summary><pre className="workflow-result-text">{task.input.text}</pre></details>
            {!!stageArtifacts.filter(artifact => !artifact.effective).length && <details className="workflow-disclosure"><summary>{t("wfArtifactHistory")}</summary>{stageArtifacts.filter(artifact => !artifact.effective).map(artifact => <section className="workflow-history-artifact" key={artifact.id}>
              <header><strong>{artifact.label}</strong><span className="workflow-muted">{t(artifact.effective ? "wfEffective" : "wfSuperseded")}</span><time dateTime={new Date(artifact.createdAt).toISOString()}>{new Date(artifact.createdAt).toLocaleString(t("dateLocale"))}</time></header>
              {history[artifact.id] ? renderOutput(history[artifact.id]!, !artifact.effective) : <Button variant="outline" size="sm" disabled={disconnected || historyLoading[artifact.id]} onClick={() => void loadArtifact(artifact)}>{t(historyLoading[artifact.id] ? "wfLoadingArtifact" : "wfLoadArtifact")}</Button>}
              {historyErrors[artifact.id] && <p role="alert" className="workflow-error">{workflowErrorText(historyErrors[artifact.id])}</p>}
            </section>)}</details>}
            {!!stageReviews.filter(item => item.state !== "pending").length && <details className="workflow-disclosure"><summary>{t("wfHistory")}</summary><ul>{stageReviews.filter(item => item.state !== "pending").map(item => <li key={item.id}><strong>{t(`wfReview_${item.state}`)}</strong>{item.feedback && <p className="workflow-preserve">{item.feedback}</p>}</li>)}</ul></details>}
          </section></>
  const stageContext = <div className="workflow-stage-context">
    {!reviewSelected && <details className="workflow-disclosure"><summary>{t(selectedStage?.kind === "agent" ? "wfPrompt" : "wfReviewInstructions")}</summary><p className="workflow-preserve">{selectedStage?.prompt || t("wfNoStagePrompt")}</p></details>}
    {selectedAttempts.length > 1 && <details className="workflow-disclosure"><summary>{t("wfExecutionHistory")} · {selectedAttempts.length}</summary><ol className="workflow-task-attempts">{selectedAttempts.map(attempt => <li key={attempt.id}><span className="workflow-state" data-state={attempt.state}>{t(`wfState_${attempt.state}`)}</span>{attempt.startedAt && <time dateTime={new Date(attempt.startedAt).toISOString()}>{new Date(attempt.startedAt).toLocaleString(t("dateLocale"))}</time>}{attempt.sessionId && onOpenSession && <Button size="sm" variant="ghost" onClick={() => onOpenSession(attempt.sessionId!)}>{t("wfOpenExecution")}</Button>}{attempt.error && <p className="workflow-error">{workflowErrorText(attempt.error)}</p>}</li>)}</ol></details>}
    {selectedStage?.kind === "agent" && !legacyProtocol && (visibleOutputs.length > 0 || stageArtifacts.length > 0) && <details className="workflow-disclosure"><summary>{t("wfResults")}</summary>{reports}</details>}
  </div>
  const taskNotices = <>    {error && <p role="alert" className="workflow-error">{workflowErrorText(error)}</p>}
    {notice && <p role="status" className="workflow-notice">{notice}</p>}
    {stale && <div role="alert" className="workflow-notice"><p>{t("wfReviewChanged")}</p><Button variant="outline" onClick={() => { setStale(false); setReturning(false); openStage(task.currentStageId) }}>{t("wfViewCurrentReview")}</Button></div>}
    {savedFeedback.map(item => <section className="workflow-notice" key={item.id} aria-label={t("wfSavedFeedback")}><label>{t("wfSavedFeedback")}<Textarea readOnly rows={3} value={item.text} /></label><div className="workflow-actions"><Button variant="outline" onClick={() => void copy({ id: `feedback-${item.id}`, label: "", contentHash: "", text: item.text })}>{t(copied === `feedback-${item.id}` ? "wfCopied" : "wfCopy")}</Button><Button variant="ghost" onClick={() => { if (window.confirm(t("wfDiscardFeedbackConfirm"))) setSavedFeedback(previous => previous.filter(saved => saved.id !== item.id)) }}>{t("wfDiscardFeedback")}</Button></div></section>)}
    {task.state === "queued" && <p className="workflow-notice" role="status">{t("wfQueueHint")}</p>}
    {task.state === "running" && task.attention?.code === "WF_SETTLEMENT_PENDING" && <p className="workflow-notice" role="status">{workflowErrorText(task.attention)}</p>}
    {task.state === "terminating" && <p className="workflow-notice" role="status">{t("wfStopping")}</p>}
    {task.state === "needs_attention" && !(task.canReconcile && !task.canRetry) && <section className="workflow-notice workflow-attention" role="alert"><p>{task.attention?.code ? workflowErrorText(task.attention) : t(task.canRetry ? "wfRetryHint" : "wfUnknownHint")}</p>{(!task.attention?.message || task.retryBlockedReason) && <p>{task.retryBlockedReason || t(task.canRetry ? "wfRetryHint" : "wfUnknownHint")}</p>}{task.canRetry && <Button disabled={disabled || Boolean(task.retryBlockedReason)} onClick={() => void act("retryTask", { taskId: task.id, expectedRevision: task.revision })}><RotateCcw />{t("wfRetryStage")}</Button>}{task.attention?.code && <details><summary>{t("wfExecutionHistory")}</summary><code>{task.attention.code}</code></details>}</section>}
    {["running", "needs_attention", "terminating"].includes(task.state) && !task.canRetry && task.canReconcile === true && <section className="workflow-notice" aria-label={t("wfReconcile")}><p>{t("wfReconcileHint")}</p><Button disabled={disabled} onClick={() => { setConfirmedStopped(false); setConfirmingRecovery(true) }}>{t(busy ? "wfWorking" : "wfReconcile")}</Button></section>}
</>
  const live = selectedStage?.kind === "agent" && Boolean(execution?.sessionId && renderExecution)
  return <section className="workflow-page workflow-task-workbench" aria-label={t("wfDetails")}>
    <header className="workflow-page-header">
      <div className="workflow-heading">{!embedded && <Button variant="ghost" size="icon" onClick={onBack} aria-label={t("wfBack")}><ArrowLeft /></Button>}<div className="workflow-task-title"><TooltipProvider><Tooltip><TooltipTrigger asChild onFocus={event => { if (entering.current) event.preventDefault() }}><h2 ref={heading} tabIndex={0} data-workflow-heading data-modal-autofocus>{task.input.text}</h2></TooltipTrigger><TooltipContent className="workflow-input-tooltip">{task.input.text}</TooltipContent></Tooltip></TooltipProvider><p className="workflow-task-meta">{task.workflowName} · {t("wfVersion")} {task.versionNumber}</p></div><span className="workflow-state" data-state={task.state}>{t(`wfState_${task.state}`)}</span></div>
      <div className="workflow-actions">{!reviewing && stopButton}<Button size="icon" variant="ghost" onClick={onCopyTask} aria-label={t("wfCopyTask")}><Copy /></Button>{onDelete && <Button size="icon" variant="ghost" disabled={disabled} aria-label={t("wfDeleteTask")} onClick={onDelete}><Trash2 /></Button>}</div>
    </header>
    <WorkflowDiagram compact horizontal stages={task.stages} selectedStageId={stageOpen ? selectedStage?.id : undefined} currentStageId={task.currentStageId} states={stageStates} onSelect={openStage} />
    {api && <WorkflowTaskFiles key={task.id} taskId={task.id} api={api} active={["queued", "running", "terminating"].includes(task.state)} revision={task.revision} />}
    {!stageOpen && taskNotices}
    {stageOpen && selectedStage && <Modal open title={selectedStage.title} closeLabel={t("close")} className={`kanban-root workflow-shell workflow-stage-modal workflow-execution-modal${live ? " workflow-live-modal" : ""}`} contentClassName="workflow-modal-content" onClose={() => setStageOpen(false)}><div className="workflow-root" data-live={live || undefined}>
      {selectedStage.id === task.currentStageId && taskNotices}
    <section className="workflow-stage-inspector" aria-label={t("wfStageReadOnly")}>
      <header className="workflow-stage-header"><span className="workflow-state" data-state={stageStates[selectedStage?.id ?? ""]}>{t(`wfState_${stageStates[selectedStage?.id ?? ""]}`)}</span>
        {selectedStage?.kind === "agent" && stageModel && <span className="workflow-stage-model" aria-label={t("wfExecutionModel")} title={`${stageModel.provider} · ${stageModel.reasoningEffort || t("wfExecutionEffortUnspecified")}`}><strong>{stageModel.model}</strong>{stageModel.reasoningEffort && <span>{stageModel.reasoningEffort}</span>}</span>}
        <div className="workflow-actions">{selectedStage?.id !== task.currentStageId && <Button size="sm" variant="ghost" onClick={() => setSelectedStageId(task.currentStageId)}>{t("wfFollowCurrent")}</Button>}{execution?.sessionId && onOpenSession && <Button size="sm" variant="ghost" onClick={() => onOpenSession(execution.sessionId!)}><ArrowUpRight />{t("wfOpenExecution")}</Button>}{selectedStage.id === task.currentStageId && !reviewSelected && stopButton}</div>
      </header>
      {live && !legacyProtocol ? <div className="workflow-live-session" key={execution?.sessionId}>{renderExecution!(execution!.sessionId!, stageContext)}</div> : <div className="workflow-stage-content">
        {!reviewSelected && stageContext}
        {live && legacyProtocol && <>{reports}<details className="workflow-disclosure"><summary>{t("wfRawConversation")}</summary><div className="workflow-live-session">{renderExecution!(execution!.sessionId!)}</div></details></>}
        {reviewSelected ? <div className="workflow-review-layout" data-reviewing="true">          {reviewSelected && <aside className="workflow-review-decision" aria-label={t("wfReviewDecision")}>
            <h3>{t("wfReviewDecision")}</h3>
            <div className="workflow-review-context">
              <p className="workflow-note">{t("wfReviewWaitingHint")}</p>
              <details className="workflow-review-criteria" open={(currentStage?.prompt?.length ?? 0) < 400}><summary>{t("wfReviewCriteria")}</summary><p>{currentStage?.prompt || t("wfReviewNoCriteria")}</p></details>
              <dl className="workflow-review-destination"><dt>{t("wfReviewReturnTarget")}</dt><dd>{returnTarget}</dd></dl>
              <p className="workflow-review-binding">{t("wfReviewBoundReport")}</p>
              {reviewUnavailable && <p className="workflow-error" id={`${id}-review-unavailable`} role="status"><strong>{t("wfArtifactUnavailable")}</strong><br />{t("wfReviewMissingReport")}</p>}
              {disconnected && <p className="workflow-error" role="status">{t("wfConnectionLost")}</p>}
            </div>
            <div className="workflow-review-controls">
              {returning ? <div className="workflow-review-feedback">
                <p className="workflow-note">{t("wfReturnHint").replace("{stage}", returnTarget)}</p>
                <label htmlFor={`${id}-feedback`}>{t("wfFeedback")}</label><Textarea ref={feedbackField} id={`${id}-feedback`} rows={3} maxLength={10000} value={feedback} disabled={disabled} onChange={event => setFeedback(event.target.value)} />
                <div className="workflow-actions"><Button disabled={reviewDisabled || !returnStage || !feedback.trim()} onClick={() => review("returned")}>{t("wfSubmitReturn")}</Button><Button variant="ghost" disabled={busy} onClick={() => { if (!feedback.trim() || window.confirm(t("wfLeaveConfirm"))) { restoreReturnFocus.current = true; setFeedback(""); setReturning(false) } }}>{t("cancel")}</Button></div>
              </div> : <div className="workflow-review-primary-actions">
                <Button disabled={reviewDisabled} aria-describedby={reviewUnavailable ? `${id}-review-unavailable` : undefined} onClick={() => review("approved")}><Check aria-hidden="true" />{t("wfApproveContinue")}</Button>
                <Button ref={returnButton} variant="outline" disabled={reviewDisabled || !returnStage} aria-describedby={reviewUnavailable ? `${id}-review-unavailable` : undefined} onClick={() => setReturning(true)}><RotateCcw aria-hidden="true" />{t("wfReturn")}</Button>
              </div>}
              {stopButton}
            </div>
          </aside>}
          {reports}
        </div> : selectedStage?.kind === "review" ? <>{stageReviews.length > 0 ? <><ul className="workflow-review-history">{stageReviews.map(item => <li key={item.id}><span>{t(`wfReview_${item.state}`)}</span>{item.decidedAt && <time dateTime={new Date(item.decidedAt).toISOString()}>{new Date(item.decidedAt).toLocaleString(t("dateLocale"))}</time>}{item.feedback && <p className="workflow-preserve">{item.feedback}</p>}</li>)}</ul>{visibleOutputs.length > 0 && reports}</> : <p className="workflow-empty-inline">{t("wfStagePending")}</p>}</> : !visibleOutputs.length && <p className="workflow-empty-inline" role="status">{t(execution?.sessionId ? "wfSessionUnavailable" : "wfStagePending")}</p>}
      </div>}
    </section>
    </div></Modal>}
    <Dialog open={confirmingStop && !terminal} onOpenChange={open => { setConfirmingStop(open); if (!open) setConfirmedStopped(false) }}><DialogContent className="kanban-root workflow-shell workflow-confirm"><DialogHeader><DialogTitle>{t("wfStop")}</DialogTitle><DialogDescription>{t("wfStopConfirm")}</DialogDescription></DialogHeader>{task.canReconcile && <label className="workflow-recovery-confirm"><input type="checkbox" checked={confirmedStopped} onChange={event => setConfirmedStopped(event.target.checked)} />{t("wfConfirmStopped")}</label>}<DialogFooter><Button variant="ghost" onClick={() => setConfirmingStop(false)}>{t("cancel")}</Button><Button variant="destructive" disabled={disabled || task.canReconcile && !confirmedStopped} onClick={terminate}>{t("wfStop")}</Button></DialogFooter></DialogContent></Dialog>
    <Dialog open={confirmingRecovery && !terminal} onOpenChange={setConfirmingRecovery}><DialogContent className="kanban-root workflow-shell workflow-confirm"><DialogHeader><DialogTitle>{t("wfReconcile")}</DialogTitle><DialogDescription>{t("wfRecoveryConfirmHint")}</DialogDescription></DialogHeader><label className="workflow-recovery-confirm"><input type="checkbox" checked={confirmedStopped} onChange={event => setConfirmedStopped(event.target.checked)} />{t("wfConfirmStopped")}</label><DialogFooter><Button variant="ghost" onClick={() => setConfirmingRecovery(false)}>{t("cancel")}</Button><Button disabled={disabled || !confirmedStopped} onClick={() => { setConfirmingRecovery(false); void act("reconcileTask", { taskId: task.id, expectedRevision: task.revision, confirmedStopped: true }) }}>{t("wfReconcile")}</Button></DialogFooter></DialogContent></Dialog>
  </section>
}
