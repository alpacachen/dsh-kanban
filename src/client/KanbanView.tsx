import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import {
  DndContext, DragOverlay, KeyboardSensor, PointerSensor, closestCorners,
  getFirstCollision, pointerWithin, rectIntersection,
  useSensor, useSensors, type CollisionDetection, type DragEndEvent, type DragOverEvent, type DragStartEvent,
} from "@dnd-kit/core"
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import { Check, Filter, List, RefreshCw, Settings2, Tag } from "lucide-react"
import { CardDialog, type CardFormValues, type ChatTarget } from "./components/CardDialog"
import { Column } from "./components/Column"
import { ColumnDialog } from "./components/ColumnDialog"
import { LabelDialog } from "./components/LabelDialog"
import { KanbanCard } from "./components/SortableCard"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { callKanban } from "@/lib/api"
import { cardToChatText, queueDraft } from "@/lib/chat-bridge"
import { PRIORITY_META, PRIORITY_OPTIONS } from "@/lib/constants"
import { useT } from "./lib/i18n"
import type { Board, Card as CardType, Priority } from "@/lib/types"
import type { PropsRuntime } from "@deepseek-ai/dsh-client-ui-slots"
import type { IWorkspaces, ISessions } from "@deepseek-ai/dsh-client-runtime/client"
import type {} from "@deepseek-ai/dsh-client-ui-conversation/client"

type KanbanViewProps = PropsRuntime<"conversation.view"> & {
  workspaces?: IWorkspaces
  sessions?: ISessions
}

export function placeCard(
  cards: CardType[],
  activeId: string,
  targetColumnId: string,
  overCardId: string | null,
  insertAfter: boolean,
): { cards: CardType[]; toIndex: number } {
  const activeCard = cards.find((card) => card.id === activeId)
  if (!activeCard) return { cards, toIndex: -1 }

  const currentIndex = cards.filter((card) => card.columnId === activeCard.columnId)
    .findIndex((card) => card.id === activeId)
  if (overCardId === activeId && activeCard.columnId === targetColumnId) {
    return { cards, toIndex: currentIndex }
  }

  const remaining = cards.filter((card) => card.id !== activeId)
  const targetCards = remaining.filter((card) => card.columnId === targetColumnId)
  const overIndex = overCardId
    ? targetCards.findIndex((card) => card.id === overCardId)
    : -1
  const toIndex = overIndex < 0 ? targetCards.length : overIndex + (insertAfter ? 1 : 0)
  const next = [...remaining]
  const anchor = targetCards[toIndex]
  const lastTarget = targetCards[targetCards.length - 1]
  const insertAt = anchor
    ? next.indexOf(anchor)
    : lastTarget
      ? next.indexOf(lastTarget) + 1
      : next.length
  next.splice(insertAt, 0, { ...activeCard, columnId: targetColumnId })

  const unchanged = next.every(
    (card, index) => card.id === cards[index]?.id && card.columnId === cards[index]?.columnId,
  )
  return { cards: unchanged ? cards : next, toIndex }
}

export function KanbanView(props: KanbanViewProps) {
  const { sessionId } = props
  const useWorkspaces = props.useWorkspaces
  const inputActions = props.inputActions
  const workspaces = props.workspaces
  const sessions = props.sessions
  const items = useWorkspaces ? useWorkspaces((s: any) => s.items) : []
  const recentId = useWorkspaces ? useWorkspaces((s: any) => s.recentWorkspaceId) : undefined
  const workspace = Array.isArray(items)
    ? items.find((w: any) => Array.isArray(w.sessionIds) && w.sessionIds.includes(sessionId))
    : undefined
  const workspaceId = workspace ? workspace.workspaceId : recentId || "default"
  const t = useT()

  const [board, setBoard] = useState<Board | null>(null)
  const [error, setError] = useState("")
  const [warnings, setWarnings] = useState<string[]>([])
  const [activeCard, setActiveCard] = useState<CardType | null>(null)
  const [dialog, setDialog] = useState<{ card: CardType | null; columnId: string } | null>(null)
  const [columnDialogOpen, setColumnDialogOpen] = useState(false)
  const [labelDialogOpen, setLabelDialogOpen] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [priorityFilter, setPriorityFilter] = useState<Priority | "">("")

  const rootRef = useRef<HTMLDivElement | null>(null)
  const boardRef = useRef<Board | null>(board)
  const dragCardsRef = useRef<CardType[] | null>(null)
  const workspaceIdRef = useRef(workspaceId)
  const issuedRequestRef = useRef(0)
  const appliedRequestRef = useRef(0)
  boardRef.current = board
  workspaceIdRef.current = workspaceId
  const [viewHeight, setViewHeight] = useState<number | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const applyBoard = useCallback((res: any, expectedWorkspace: string, requestId: number) => {
    if (workspaceIdRef.current !== expectedWorkspace || requestId < appliedRequestRef.current) return
    appliedRequestRef.current = requestId
    if (res && res.board) {
      // 旧版本主机插件可能不返回 comments/activities；兜底为空数组，避免下游渲染崩溃
      setBoard({
        ...res.board,
        cards: Array.isArray(res.board.cards)
          ? res.board.cards.map((card: CardType) => ({ ...card, comments: Array.isArray(card.comments) ? card.comments : [] }))
          : [],
        activities: Array.isArray(res.board.activities) ? res.board.activities : [],
      })
      setError("")
    }
    if (Array.isArray(res && res.warnings) && res.warnings.length > 0) {
      setWarnings((prev) => [...prev, ...res.warnings])
    }
  }, [])

  const act = useCallback(
    async (method: string, args: Record<string, unknown> = {}) => {
      const requestId = ++issuedRequestRef.current
      try {
        const res = await callKanban(method, args, workspaceId)
        applyBoard(res, workspaceId, requestId)
        return true
      } catch (e: any) {
        setError(t("actionFailed") + String((e && e.message) || e))
        return false
      }
    },
    [workspaceId, applyBoard, t],
  )

  const refreshBoard = useCallback(() => {
    const requestId = ++issuedRequestRef.current
    setRefreshing(true)
    callKanban("get", {}, workspaceId)
      .then((res) => applyBoard(res, workspaceId, requestId))
      .catch((e) => setError(t("loadFailed") + String((e && e.message) || e)))
      .finally(() => setRefreshing(false))
  }, [workspaceId, applyBoard, t])

  useEffect(() => {
    let alive = true
    const requestId = ++issuedRequestRef.current
    setBoard(null)
    setDialog(null)
    setActiveCard(null)
    setError("")
    setWarnings([])
    callKanban("get", {}, workspaceId)
      .then((res) => {
        if (alive) applyBoard(res, workspaceId, requestId)
      })
      .catch((e) => {
        if (alive) setError(t("loadFailed") + String((e && e.message) || e))
      })
    return () => {
      alive = false
    }
  }, [workspaceId, applyBoard, t])

  // 让看板固定在会话滚动容器的可视高度内。DSH 的 conversation.view 槽位在 active
  // 阶段会让父容器随内容增高（min-height:auto），根节点 h-full(100%) 因此拿不到
  // 有界高度，长列会把整页撑高。这里实测可用高度并显式设置，让列内滚动生效。
  useLayoutEffect(() => {
    const findScrollport = (node: HTMLElement | null): HTMLElement | null => {
      let cursor: HTMLElement | null = node
      while (cursor) {
        const overflowY = getComputedStyle(cursor).overflowY
        if (overflowY === "auto" || overflowY === "scroll") return cursor
        cursor = cursor.parentElement
      }
      return null
    }

    const measure = () => {
      const el = rootRef.current
      if (!el) return
      const top = el.getBoundingClientRect().top
      const scrollport = findScrollport(el.parentElement)
      let bottom = window.innerHeight
      if (scrollport) {
        // DSH 底部输入框（sticky 在滚动容器底部）占据一段高度，把看板限制在它上方。
        const composer = scrollport.querySelector<HTMLElement>("[data-composer-seat]")
        const composerTop = composer ? composer.getBoundingClientRect().top : 0
        if (composer && composer.offsetHeight > 0 && composerTop > top) {
          bottom = composerTop
        } else {
          bottom = scrollport.getBoundingClientRect().bottom
        }
      }
      setViewHeight(Math.max(0, Math.floor(bottom - top)))
    }

    measure()

    const scrollport = findScrollport(rootRef.current?.parentElement ?? null)
    const observer = new ResizeObserver(measure)
    observer.observe(document.documentElement)
    if (scrollport) observer.observe(scrollport)
    window.addEventListener("resize", measure)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [board !== null])

  // 碰撞检测：卡片可自由拖到任意列（含空列）。pointerWithin 优先识别空列，再回落 closestCorners 处理卡片排序。
  const collisionDetection: CollisionDetection = useCallback(
    (args) => {
      const pointerIntersections = pointerWithin(args)
      const intersections = pointerIntersections.length > 0 ? pointerIntersections : rectIntersection(args)
      let overId = getFirstCollision(intersections, "id")
      if (overId == null) return []

      const columnIds = new Set((board?.columns ?? []).map((c) => c.id))
      if (columnIds.has(String(overId))) {
        const containerItems = (board?.cards ?? [])
          .filter((c) => c.columnId === overId)
          .map((c) => c.id)
        if (containerItems.length > 0) {
          const closest = closestCorners({
            ...args,
            droppableContainers: args.droppableContainers.filter(
              (container) => container.id !== overId && containerItems.includes(String(container.id)),
            ),
          })
          if (closest.length > 0) overId = closest[0].id
        }
      }
      return [{ id: overId }]
    },
    [board],
  )

  const setLocalCards = (cards: CardType[]) => {
    const current = boardRef.current
    if (!current || current.cards === cards) return
    const next = { ...current, cards }
    boardRef.current = next
    setBoard(next)
  }

  const handleDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type !== "card") return
    const current = boardRef.current
    const card = current?.cards.find((item) => item.id === event.active.id)
    if (!card || !current) return
    dragCardsRef.current = current.cards
    setActiveCard(card)
  }

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    const current = boardRef.current
    if (!over || !current || active.data.current?.type !== "card") return

    const activeId = String(active.id)
    const activeCard = current.cards.find((card) => card.id === activeId)
    const overCard = current.cards.find((card) => card.id === over.id)
    const targetColumnId = overCard?.columnId
      ?? (over.data.current?.type === "column" ? String(over.id) : null)
    if (!activeCard || !targetColumnId || activeCard.columnId === targetColumnId) return

    const activeRect = active.rect.current.translated
    const insertAfter = Boolean(
      overCard && activeRect
      && activeRect.top + activeRect.height / 2 > over.rect.top + over.rect.height / 2,
    )
    setLocalCards(placeCard(current.cards, activeId, targetColumnId, overCard?.id ?? null, insertAfter).cards)
  }

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    const current = boardRef.current
    const snapshot = dragCardsRef.current
    dragCardsRef.current = null

    if (!over || !current || active.data.current?.type !== "card") {
      if (snapshot) setLocalCards(snapshot)
      setActiveCard(null)
      return
    }

    const activeId = String(active.id)
    const overCard = current.cards.find((card) => card.id === over.id)
    const targetColumnId = overCard?.columnId
      ?? (over.data.current?.type === "column" ? String(over.id) : null)
    if (!targetColumnId) {
      if (snapshot) setLocalCards(snapshot)
      setActiveCard(null)
      return
    }

    const activeRect = active.rect.current.translated
    const insertAfter = Boolean(
      overCard && activeRect
      && activeRect.top + activeRect.height / 2 > over.rect.top + over.rect.height / 2,
    )
    const placement = placeCard(
      current.cards,
      activeId,
      targetColumnId,
      overCard?.id ?? null,
      insertAfter,
    )
    setLocalCards(placement.cards)
    setActiveCard(null)

    const changed = !snapshot || placement.cards.some(
      (card, index) => card.id !== snapshot[index]?.id || card.columnId !== snapshot[index]?.columnId,
    )
    if (changed) {
      void act("moveCard", { id: activeId, columnId: targetColumnId, toIndex: placement.toIndex })
        .then((ok) => { if (!ok) refreshBoard() })
    }
  }

  const handleDragCancel = () => {
    if (dragCardsRef.current) setLocalCards(dragCardsRef.current)
    dragCardsRef.current = null
    setActiveCard(null)
  }

  const saveCard = (values: CardFormValues): Promise<boolean> => {
    if (!dialog) return Promise.resolve(false)
    if (dialog.card) {
      const payload: Record<string, unknown> = { id: dialog.card.id }
      if (values.title !== dialog.card.title) payload.title = values.title
      if (values.note !== dialog.card.note) payload.note = values.note
      if (values.label !== (dialog.card.label ?? "")) payload.label = values.label
      if (values.priority !== (dialog.card.priority ?? "")) payload.priority = values.priority
      return act("updateCard", payload)
    }
    return act("addCard", {
      columnId: dialog.columnId,
      title: values.title,
      note: values.note,
      label: values.label || undefined,
      priority: values.priority || undefined,
    })
  }

  // 把卡片内容填入对话输入框，但不自动发送。
  const handleChatWithAgent = useCallback(
    (values: CardFormValues, target: ChatTarget) => {
      const text = cardToChatText(values)
      if (!text) return
      if (target === "current") {
        inputActions?.setDraft(text)
        return
      }
      // 新建对话：先拿到新会话 id 再切换，并把草稿排队给 ChatDraftInjector 写入。
      if (!workspaces?.connectWorkspace || !sessions?.open) return
      workspaces
        .connectWorkspace(workspaceId)
        .then((nextId) => {
          if (!nextId) return
          queueDraft(nextId, text)
          sessions.open(nextId)
        })
        .catch((e) => setError(t("actionFailed") + String((e && e.message) || e)))
    },
    [inputActions, workspaces, sessions, workspaceId, t],
  )

  if (!board) {
    return (
      <div className="kanban-root kanban-loading">
        {error ? (
          <p className="kanban-error">{error}</p>
        ) : (
          <p className="kanban-muted-text">{t("loading")}</p>
        )}
      </div>
    )
  }

  return (
    <div
      ref={rootRef}
      className="kanban-root kanban-view"
      style={viewHeight != null ? { height: viewHeight } : undefined}
    >
      {error && <p className="kanban-error">{error}</p>}

      {warnings.length > 0 && (
        <div className="kanban-warning">
          <div className="kanban-warning-body">
            <p className="kanban-warning-title">{t("warnings")}</p>
            {warnings.map((w, i) => (
              <p key={i} className="kanban-warning-item">
                {w}
              </p>
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="kanban-warning-dismiss"
            onClick={() => setWarnings([])}
          >
            {t("dismiss")}
          </Button>
        </div>
      )}

      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetection}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <div className="kanban-content">
          {/* 操作面板：固定在最左侧 */}
          <div className="kanban-toolbar">
            <Button
              variant="ghost"
              size="icon"
              className="kanban-toolbar-button"
              title={t("refresh")}
              aria-label={t("refresh")}
              disabled={refreshing}
              onClick={refreshBoard}
            >
              <RefreshCw className={refreshing ? "kanban-animate-spin" : undefined} />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="kanban-toolbar-button"
                  title={t("settings")}
                >
                  <Settings2 className="kanban-icon" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setColumnDialogOpen(true)}>
                  <List className="kanban-icon" />
                  {t("columnEdit")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabelDialogOpen(true)}>
                  <Tag className="kanban-icon" />
                  {t("labelEdit")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={priorityFilter ? "secondary" : "ghost"}
                  size="icon"
                  className="kanban-toolbar-button"
                  title={t("priorityFilter")}
                >
                  <Filter className="kanban-icon" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setPriorityFilter("")}>
                  <span className="kanban-filter-check">{!priorityFilter && <Check className="kanban-icon" />}</span>
                  {t("all")}
                </DropdownMenuItem>
                {PRIORITY_OPTIONS.map((p) => (
                  <DropdownMenuItem key={p} onClick={() => setPriorityFilter(p)}>
                    <span className="kanban-filter-check">{priorityFilter === p && <Check className="kanban-icon" />}</span>
                    <span className="kanban-priority-dot" style={{ background: PRIORITY_META[p].color }} />
                    {PRIORITY_META[p].label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* 看板列（可横向滚动） */}
          <div className="kanban-board-scroll">
            {board.columns.map((col) => {
              const cards = board.cards.filter(
                (c) => c.columnId === col.id && (!priorityFilter || c.priority === priorityFilter),
              )
              return (
                <Column
                  key={col.id}
                  column={col}
                  cards={cards}
                  labels={board.labels}
                  onAddCard={(c) => setDialog({ card: null, columnId: c.id })}
                  onOpenCard={(c) => setDialog({ card: c, columnId: c.columnId })}
                />
              )
            })}
          </div>
        </div>

        <DragOverlay>
          {activeCard ? (
            <div className="kanban-drag-preview">
              <KanbanCard card={activeCard} labels={board.labels} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      <CardDialog
        open={dialog !== null}
        card={dialog?.card ?? null}
        labels={board.labels}
        comments={dialog?.card ? board.cards.find((card) => card.id === dialog.card!.id)?.comments ?? [] : []}
        activities={dialog?.card ? board.activities.filter((a) => a.cardId === dialog.card!.id) : []}
        onOpenChange={(open) => {
          if (!open) setDialog(null)
        }}
        onSave={saveCard}
        onAddComment={(id, content) => act("addComment", { id, content })}
        onDelete={(card) => act("deleteCard", { id: card.id })}
        onChatWithAgent={handleChatWithAgent}
      />

      <ColumnDialog
        open={columnDialogOpen}
        columns={board.columns}
        onOpenChange={setColumnDialogOpen}
        onReorder={(activeId, overId) => {
          const toIndex = board.columns.findIndex((c) => c.id === overId)
          if (toIndex >= 0) act("moveColumn", { id: activeId, toIndex })
        }}
        onRename={(id, title) => act("renameColumn", { id, title })}
        onDelete={(id) => act("deleteColumn", { id })}
        onAdd={(title) => act("addColumn", { title })}
      />

      <LabelDialog
        open={labelDialogOpen}
        labels={board.labels}
        onOpenChange={setLabelDialogOpen}
        onAdd={(name, color) => act("addLabel", { name, color })}
        onUpdate={(name, newName, color) => act("updateLabel", { name, newName, color })}
        onDelete={(name) => act("deleteLabel", { name })}
      />
    </div>
  )
}
