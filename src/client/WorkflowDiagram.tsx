import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react"
import { BaseEdge, Handle, MarkerType, Panel, Position, ReactFlow, getSmoothStepPath, getViewportForBounds, type Edge, type EdgeProps, type Node, type NodeProps, type ReactFlowInstance } from "@xyflow/react"
import { AlertTriangle, Bot, Flag, Maximize2, Minus, Play, Plus, RotateCcw, UserRound } from "lucide-react"
import { useT } from "./lib/i18n"
import type { WorkflowStage } from "./lib/workflow-types"

type StageData = {
  stage: WorkflowStage; index: number; current: boolean; selected: boolean; invalid: boolean; state?: string; targetTitle?: string
  disabled: boolean; across: boolean; onSelect?: (stageId: string) => void; navigate: (index: number) => void
}
type StageNode = Node<StageData, "stage"> | Node<{ finish: boolean; across: boolean }, "endpoint">
type WorkflowEdge = Edge<{ kind: string; lane: number; across: boolean }, "workflow">

function Stage({ data }: NodeProps<Node<StageData, "stage">>) {
  const t = useT(), { stage, index, current, selected, invalid, state, targetTitle, across, onSelect, navigate, disabled } = data
  const stateKey = state === "returned" ? "wfReview_returned" : `wfState_${state}`
  const label = state ? t(stateKey) === stateKey ? state : t(stateKey) : ""
  const content = <><span className="wf-diagram-node-kind">{stage.kind === "agent" ? <Bot aria-hidden="true" /> : <UserRound aria-hidden="true" />}<span>{t(stage.kind === "agent" ? "wfAgent" : "wfReview")}</span><span className="wf-diagram-node-number">{index + 1}</span></span>
    <strong className="wf-diagram-node-title">{stage.title || t("wfStageName")}</strong>{stage.kind === "agent" && !state && <span className="wf-diagram-node-excerpt">{stage.modelSelection ? `${stage.modelSelection.model}${stage.modelSelection.reasoningEffort ? ` · ${stage.modelSelection.reasoningEffort}` : ""}` : t("wfHostDefaultModel")}</span>}
    {(invalid || state || stage.kind === "review" || current) && <span className="wf-diagram-node-footer">{invalid ? <span className="wf-diagram-node-invalid"><AlertTriangle aria-hidden="true" />{t("wfDiagramInvalidReturn")}</span> : state ? <span className="wf-diagram-node-state" data-state={state}>{label}</span> : stage.kind === "review" ? <span className="wf-diagram-return-target" title={`${t("wfDiagramReturn")}: ${targetTitle}`}><RotateCcw aria-hidden="true" />{t("wfDiagramReturn")}: {targetTitle}</span> : null}{current && <span className="wf-diagram-current">{t("wfDiagramCurrent")}</span>}</span>}
  </>
  const shared = { className: "wf-diagram-node nodrag nopan", "data-stage-id": stage.id, "data-kind": stage.kind, "data-selected": selected, "data-current": current, "data-invalid": invalid, "aria-current": current ? "step" as const : undefined, "aria-label": `${index + 1}. ${t(stage.kind === "agent" ? "wfAgent" : "wfReview")}: ${stage.title || t("wfStageName")}`, "aria-description": [label, invalid ? t("wfDiagramInvalidReturn") : stage.kind === "review" ? `${t("wfDiagramReturn")}: ${targetTitle}` : ""].filter(Boolean).join("; "), title: stage.title || t("wfStageName") }
  return <>
    <Handle isConnectable={false} type="target" position={across ? Position.Left : Position.Top} id="in" />
    {onSelect ? <button {...shared} type="button" disabled={disabled} aria-pressed={selected} onClick={() => onSelect(stage.id)} onKeyDown={event => {
      const next = ["ArrowDown", "ArrowRight"].includes(event.key) ? index + 1 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? index - 1 : event.key === "Home" ? 0 : event.key === "End" ? Infinity : -2
      if (next === -2) return
      event.preventDefault(); event.stopPropagation(); navigate(next)
    }}>{content}</button> : <div {...shared} role="group">{content}</div>}
    <Handle isConnectable={false} type="source" position={across ? Position.Right : Position.Bottom} id="out" />
    <Handle isConnectable={false} type="source" position={across ? Position.Bottom : Position.Left} id="return-out" style={across ? { left: "70%" } : { top: "70%" }} />
    <Handle isConnectable={false} type="target" position={across ? Position.Bottom : Position.Left} id="return-in" style={across ? { left: "30%" } : { top: "30%" }} />
  </>
}
function Endpoint({ data }: NodeProps<Node<{ finish: boolean; across: boolean }, "endpoint">>) {
  const t = useT()
  return <div className="wf-diagram-endpoint">{data.finish ? <Flag aria-hidden="true" /> : <Play aria-hidden="true" />}{t(data.finish ? "wfEditorFinish" : "wfEditorStart")}<Handle isConnectable={false} id={data.finish ? "in" : "out"} type={data.finish ? "target" : "source"} position={data.across ? data.finish ? Position.Left : Position.Right : data.finish ? Position.Top : Position.Bottom} /></div>
}
function Connection(props: EdgeProps<WorkflowEdge>) {
  const t = useT(), returning = props.data?.kind === "return", across = props.data?.across
  const offset = 36 + (props.data?.lane ?? 0) * 24
  const [path, labelX, labelY] = getSmoothStepPath({ ...props, borderRadius: 10, ...(returning ? { offset, ...(across ? { centerY: Math.max(props.sourceY, props.targetY) + offset } : { centerX: Math.min(props.sourceX, props.targetX) - offset }) } : {}) })
  return <g data-edge-kind={props.data?.kind} data-from={props.source} data-to={props.target}>
    <BaseEdge id={props.id} path={path} markerEnd={props.markerEnd} className={returning ? "wf-diagram-return-edge" : "wf-diagram-edge"} interactionWidth={0} />
    {(returning || props.data?.kind === "approve") && <text className="wf-diagram-edge-label" x={labelX} y={labelY - 8} textAnchor="middle">{t(returning ? "wfDiagramReturn" : "wfDiagramApprove")}</text>}
  </g>
}
const nodeTypes = { stage: Stage, endpoint: Endpoint }
const edgeTypes = { workflow: Connection }

// shortcut: WheelEvent has no device type; revisit this notch heuristic if a device is misclassified.
export function isSteppedWheel(event: Pick<WheelEvent, "deltaMode" | "deltaX" | "deltaY"> & { wheelDeltaY?: number }) {
  return event.deltaMode !== 0 || event.deltaX === 0 && Math.abs(event.deltaY) >= 50
    && (event.wheelDeltaY === undefined || Math.abs(event.wheelDeltaY) === 120)
}

// The saved stage order owns the geometry; React Flow owns the pan/zoom viewport.
export function WorkflowDiagram({ stages, selectedStageId, currentStageId, states, onSelect, disabled = false, horizontal = false, compact = false }: {
  stages: WorkflowStage[]; selectedStageId?: string; currentStageId?: string; states?: Record<string, string>
  onSelect?: (stageId: string) => void; disabled?: boolean; horizontal?: boolean; compact?: boolean
}) {
  const t = useT(), id = useId().replace(/:/g, "")
  const viewport = useRef<HTMLDivElement>(null)
  const [instance, setInstance] = useState<ReactFlowInstance<StageNode, WorkflowEdge> | null>(null)
  const [zoom, setZoom] = useState(1)
  const initialStageIndex = useRef(Math.max(0, stages.findIndex(stage => stage.id === currentStageId)))
  const across = horizontal || compact, nodeWidth = compact ? 180 : 200, nodeHeight = compact ? 84 : 104
  const pitch = across ? nodeWidth + 64 : nodeHeight + 64
  const invalidReviews = useMemo(() => stages.filter((stage, index) => stage.kind === "review" && !stages.slice(0, index).some(previous => previous.kind === "agent" && previous.id === stage.returnStageId)), [stages])
  const invalidIds = useMemo(() => new Set(invalidReviews.map(stage => stage.id)), [invalidReviews])
  const reviewCount = stages.filter(stage => stage.kind === "review").length
  const bounds = useMemo(() => {
    const length = Math.max(1, stages.length), extra = reviewCount ? 44 + reviewCount * 24 : 0
    return across ? { x: compact ? 0 : -168, y: 0, width: (length - 1) * pitch + nodeWidth + (compact ? 0 : 336), height: nodeHeight + extra }
      : { x: -extra, y: compact ? 0 : -90, width: nodeWidth + extra, height: (length - 1) * pitch + nodeHeight + (compact ? 0 : 180) }
  }, [stages.length, reviewCount, across, pitch, nodeWidth, nodeHeight, compact])
  const fitAll = useCallback(() => {
    const element = viewport.current
    if (!instance || !element?.clientWidth || !element.clientHeight) return
    void instance.setViewport(getViewportForBounds(bounds, element.clientWidth, element.clientHeight, .001, 1, .15))
  }, [instance, bounds])
  useEffect(() => {
    const element = viewport.current
    if (!instance || !element) return
    const index = initialStageIndex.current
    void instance.setViewport({ x: across ? (compact ? Math.max(24, (element.clientWidth - nodeWidth) / 2) : 24) - index * pitch : (element.clientWidth - nodeWidth) / 2,
      y: across ? Math.max(24, (element.clientHeight - nodeHeight) / 2 - 20) : 24 - index * pitch, zoom: 1 })
  }, [instance, across, compact, pitch, nodeWidth, nodeHeight])
  useEffect(() => {
    const element = viewport.current
    if (!instance || !element) return
    const wheel = (event: WheelEvent & { wheelDeltaY?: number }) => {
      if (event.ctrlKey || event.metaKey || !isSteppedWheel(event) || (event.target as Element).closest(".react-flow__panel")) return
      event.preventDefault(); event.stopPropagation()
      const point = instance.screenToFlowPosition({ x: event.clientX, y: event.clientY }), rect = element.getBoundingClientRect()
      const zoom = Math.max(.001, Math.min(2, instance.getZoom() * Math.pow(2, -event.deltaY * (event.deltaMode === 1 ? .05 : .002))))
      void instance.setViewport({ x: event.clientX - rect.left - point.x * zoom, y: event.clientY - rect.top - point.y * zoom, zoom })
    }
    element.addEventListener("wheel", wheel, { capture: true, passive: false })
    return () => element.removeEventListener("wheel", wheel, true)
  }, [instance])
  const navigate = useCallback((index: number) => {
    const next = Math.max(0, Math.min(stages.length - 1, index)), stage = stages[next]
    if (!stage || disabled) return
    const button = Array.from(viewport.current?.querySelectorAll<HTMLButtonElement>("button[data-stage-id]") ?? []).find(element => element.dataset.stageId === stage.id)
    button?.focus({ preventScroll: true }); onSelect?.(stage.id)
    if (!instance || !viewport.current) return
    const zoom = instance.getZoom()
    const point = instance.flowToScreenPosition({ x: across ? next * pitch : 0, y: across ? 0 : next * pitch }), rect = viewport.current.getBoundingClientRect()
    if (point.x < rect.left || point.y < rect.top || point.x + nodeWidth * zoom > rect.right || point.y + nodeHeight * zoom > rect.bottom) void instance.setCenter(across ? next * pitch + nodeWidth / 2 : nodeWidth / 2, across ? nodeHeight / 2 : next * pitch + nodeHeight / 2, { zoom })
  }, [stages, disabled, onSelect, instance, across, pitch, nodeWidth, nodeHeight])
  const nodes = useMemo(() => {
    const nodes: StageNode[] = stages.map((stage, index) => ({ id: stage.id, type: "stage", position: { x: across ? index * pitch : 0, y: across ? 0 : index * pitch }, width: nodeWidth, height: nodeHeight, style: { pointerEvents: onSelect ? "all" : "none" }, data: { stage, index, current: currentStageId === stage.id, selected: selectedStageId === stage.id, invalid: invalidIds.has(stage.id), state: states?.[stage.id], targetTitle: stages.find(item => item.id === stage.returnStageId)?.title, disabled, across, onSelect, navigate } }))
    if (!compact && stages.length) {
      nodes.push({ id: `${id}-start`, type: "endpoint", position: across ? { x: -168, y: (nodeHeight - 34) / 2 } : { x: (nodeWidth - 124) / 2, y: -90 }, width: 124, height: 34, data: { finish: false, across } },
        { id: `${id}-finish`, type: "endpoint", position: across ? { x: (stages.length - 1) * pitch + nodeWidth + 44, y: (nodeHeight - 34) / 2 } : { x: (nodeWidth - 124) / 2, y: (stages.length - 1) * pitch + nodeHeight + 56 }, width: 124, height: 34, data: { finish: true, across } })
    }
    return nodes
  }, [stages, across, pitch, nodeWidth, nodeHeight, compact, id, selectedStageId, currentStageId, invalidIds, states, disabled, onSelect, navigate])
  const edges = useMemo(() => {
    const edges: WorkflowEdge[] = []
    function connect(source: string, target: string, kind: string, lane = 0) {
      const returning = kind === "return"
      edges.push({ id: `${id}-${kind}-${source}-${target}`, source, target, type: "workflow", sourceHandle: returning ? "return-out" : "out", targetHandle: returning ? "return-in" : "in", data: { kind, lane, across }, markerEnd: { type: MarkerType.ArrowClosed, width: 14, height: 14, color: returning ? "var(--dsw-alias-state-warn-primary)" : "var(--dsw-alias-label-secondary)" } })
    }
    if (!compact && stages.length) connect(`${id}-start`, stages[0]!.id, "next")
    stages.forEach((stage, index) => {
      if (invalidIds.has(stage.id)) return
      const next = stages[index + 1]?.id ?? (!compact ? `${id}-finish` : undefined)
      if (next) connect(stage.id, next, stage.kind === "review" ? "approve" : "next")
      if (stage.kind === "review") connect(stage.id, stage.returnStageId!, "return", stages.slice(0, index).filter(item => item.kind === "review").length)
    })
    return edges
  }, [stages, invalidIds, compact, id, across])
  return <section className="wf-diagram" data-horizontal={across} data-compact={compact || undefined} aria-label={t("wfDiagram")}>
    {invalidReviews.length > 0 && <ul className="wf-diagram-issues" role="alert">{invalidReviews.map(stage => <li key={stage.id}><AlertTriangle aria-hidden="true" /><span><strong>{stage.title || t("wfStageName")}</strong>: {t("wfDiagramInvalidReturn")}</span></li>)}</ul>}
    {stages.length > 0 && !stages.some(stage => stage.kind === "agent") && <p className="wf-diagram-issues" role="alert"><AlertTriangle aria-hidden="true" />{t("wfDiagramInvalidOrder")}</p>}
    <div className="wf-diagram-viewport" ref={viewport}>
      <ReactFlow<StageNode, WorkflowEdge> id={`workflow-${id}`} nodes={nodes} edges={edges} nodeTypes={nodeTypes} edgeTypes={edgeTypes} onInit={setInstance} onMove={(_event, view) => setZoom(view.zoom)} minZoom={.001} maxZoom={2} nodesDraggable={false} nodesConnectable={false} nodesFocusable={false} edgesFocusable={false} edgesReconnectable={false} elementsSelectable={false} deleteKeyCode={null} selectionKeyCode={null} multiSelectionKeyCode={null} panOnDrag panOnScroll panOnScrollSpeed={1} zoomOnScroll zoomOnPinch preventScrolling zoomOnDoubleClick={false} autoPanOnNodeFocus={false}>
        {!stages.length && <Panel position="top-center"><p className="wf-diagram-empty">{t("wfDiagramEmpty")}</p></Panel>}
        <Panel position="bottom-right"><div className="wf-diagram-zoom" role="group" aria-label={t("wfDiagramZoom")}>
          <button type="button" disabled={!instance || zoom <= .001} aria-label={t("wfDiagramZoomOut")} title={t("wfDiagramZoomOut")} onClick={() => void instance?.zoomOut()}><Minus aria-hidden="true" /></button>
          <output aria-label={t("wfDiagramZoom")}>{Math.round(zoom * 100)}%</output>
          <button type="button" disabled={!instance || zoom >= 2} aria-label={t("wfDiagramZoomIn")} title={t("wfDiagramZoomIn")} onClick={() => void instance?.zoomIn()}><Plus aria-hidden="true" /></button>
          <button type="button" className="wf-diagram-fit" disabled={!instance} aria-label={t("wfDiagramFit")} title={t("wfDiagramFit")} onClick={fitAll}><Maximize2 aria-hidden="true" /><span>{t("wfDiagramFit")}</span></button>
        </div></Panel>
      </ReactFlow>
    </div>
  </section>
}
