import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import {
  DndContext, DragOverlay, KeyboardSensor, PointerSensor, closestCorners,
  getFirstCollision, pointerWithin, rectIntersection,
  useSensor, useSensors, type CollisionDetection, type DragEndEvent, type DragStartEvent,
} from "@dnd-kit/core"
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import { Check, Filter, List, RefreshCw, Settings2, Tag } from "lucide-react"
import { CardDialog, type CardFormValues, type ChatTarget } from "./components/CardDialog"
import { Column } from "./components/Column"
import { ColumnDialog } from "./components/ColumnDialog"
import { LabelDialog } from "./components/LabelDialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { callKanban } from "@/lib/api"
import { cardToChatText, queueDraft } from "@/lib/chat-bridge"
import { PRIORITY_META, PRIORITY_OPTIONS } from "@/lib/constants"
import { useT } from "./lib/i18n"
import type { Board, Card as CardType, Priority } from "@/lib/types"

type AnySelectorHook = (selector: (state: any) => any) => any

interface KanbanViewProps {
  sessionId?: string
  useWorkspaces?: AnySelectorHook
  inputActions?: { setDraft: (text: string) => void }
  workspaces?: { connectWorkspace: (workspaceId: string) => Promise<string> }
  sessions?: { open: (id: string) => void }
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
  const [activeCard, setActiveCard] = useState<CardType | null>(null)
  const [dialog, setDialog] = useState<{ card: CardType | null; columnId: string } | null>(null)
  const [columnDialogOpen, setColumnDialogOpen] = useState(false)
  const [labelDialogOpen, setLabelDialogOpen] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [priorityFilter, setPriorityFilter] = useState<Priority | "">("")

  const rootRef = useRef<HTMLDivElement | null>(null)
  const [viewHeight, setViewHeight] = useState<number | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const applyBoard = useCallback((res: any) => {
    if (res && res.board) {
      setBoard(res.board)
      setError("")
    }
  }, [])

  const act = useCallback(
    (method: string, args: Record<string, unknown> = {}) => {
      callKanban(method, args, workspaceId)
        .then(applyBoard)
        .catch((e) => setError(t("actionFailed") + String((e && e.message) || e)))
    },
    [workspaceId, applyBoard],
  )

  const refreshBoard = useCallback(() => {
    setRefreshing(true)
    callKanban("get", {}, workspaceId)
      .then(applyBoard)
      .catch((e) => setError(t("loadFailed") + String((e && e.message) || e)))
      .finally(() => setRefreshing(false))
  }, [workspaceId, applyBoard, t])

  useEffect(() => {
    let alive = true
    callKanban("get", {}, workspaceId)
      .then((res) => {
        if (alive) applyBoard(res)
      })
      .catch((e) => {
        if (alive) setError(t("loadFailed") + String((e && e.message) || e))
      })
    return () => {
      alive = false
    }
  }, [workspaceId, applyBoard])

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

  const handleDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "card") {
      const card = board?.cards.find((c) => c.id === event.active.id)
      if (card) setActiveCard(card)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveCard(null)
    if (!over || !board) return
    const aType = active.data.current?.type as string | undefined
    const oType = over.data.current?.type as string | undefined

    if (aType !== "card") return

    if (oType === "card") {
      const overCard = board.cards.find((c) => c.id === over.id)
      if (!overCard || overCard.id === active.id) return
      const inCol = board.cards.filter((c) => c.columnId === overCard.columnId)
      const toIndex = inCol.findIndex((c) => c.id === overCard.id)
      act("moveCard", {
        id: String(active.id),
        columnId: overCard.columnId,
        toIndex: toIndex >= 0 ? toIndex : undefined,
      })
    } else if (oType === "column") {
      act("moveCard", { id: String(active.id), columnId: String(over.id) })
    }
  }

  const saveCard = (values: CardFormValues) => {
    if (!dialog) return
    const payload = {
      title: values.title,
      note: values.note,
      label: values.label || undefined,
      priority: values.priority || undefined,
    }
    if (dialog.card) {
      act("updateCard", { id: dialog.card.id, ...payload })
    } else {
      act("addCard", { columnId: dialog.columnId, ...payload })
    }
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
      <div className="flex h-full min-h-[420px] items-center justify-center p-5">
        {error ? (
          <p className="text-sm text-destructive">{error}</p>
        ) : (
          <p className="text-sm text-muted-foreground">{t("loading")}</p>
        )}
      </div>
    )
  }

  return (
    <div
      ref={rootRef}
      className="flex h-full flex-col gap-3 p-5"
      style={viewHeight != null ? { height: viewHeight } : undefined}
    >
      {error && <p className="text-sm text-destructive">{error}</p>}

      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetection}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex min-h-0 flex-1 gap-3">
          {/* 操作面板：固定在最左侧 */}
          <div className="flex shrink-0 flex-col items-center gap-1.5 self-start rounded-2xl border border-[var(--dsw-alias-border-l2)] bg-card p-1.5 shadow-column">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground"
              title={t("refresh")}
              aria-label={t("refresh")}
              disabled={refreshing}
              onClick={refreshBoard}
            >
              <RefreshCw className={refreshing ? "animate-spin" : undefined} />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground"
                  title={t("settings")}
                >
                  <Settings2 className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setColumnDialogOpen(true)}>
                  <List className="h-4 w-4" />
                  {t("columnEdit")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLabelDialogOpen(true)}>
                  <Tag className="h-4 w-4" />
                  {t("labelEdit")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={priorityFilter ? "secondary" : "ghost"}
                  size="icon"
                  className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground"
                  title={t("priorityFilter")}
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setPriorityFilter("")}>
                  <span className="flex h-4 w-4 items-center">{!priorityFilter && <Check className="h-4 w-4" />}</span>
                  {t("all")}
                </DropdownMenuItem>
                {PRIORITY_OPTIONS.map((p) => (
                  <DropdownMenuItem key={p} onClick={() => setPriorityFilter(p)}>
                    <span className="flex h-4 w-4 items-center">{priorityFilter === p && <Check className="h-4 w-4" />}</span>
                    <span className="h-2 w-2 rounded-full" style={{ background: PRIORITY_META[p].color }} />
                    {PRIORITY_META[p].label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* 看板列（可横向滚动） */}
          <div className="kan-scroll flex min-h-0 flex-1 gap-3 overflow-x-auto overflow-y-hidden pb-2">
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
            <Card className="w-64 rotate-2 rounded-xl border-[var(--dsw-alias-border-l2)] bg-secondary shadow-float">
              <CardContent className="p-3.5">
                <p className="text-[13.5px] font-medium tracking-tight break-words">{activeCard.title}</p>
              </CardContent>
            </Card>
          ) : null}
        </DragOverlay>
      </DndContext>

      <CardDialog
        open={dialog !== null}
        card={dialog?.card ?? null}
        labels={board.labels}
        onOpenChange={(open) => {
          if (!open) setDialog(null)
        }}
        onSave={saveCard}
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
