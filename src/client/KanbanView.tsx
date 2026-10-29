import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import {
  DndContext, DragOverlay, KeyboardSensor, MouseSensor, TouchSensor, closestCorners,
  getFirstCollision, pointerWithin, rectIntersection,
  useSensor, useSensors, type CollisionDetection, type DragEndEvent, type DragOverEvent, type DragStartEvent,
} from "@dnd-kit/core"
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import { CalendarDays, Check, Filter, List, MessageSquare, RefreshCw, Search, Settings2, Tag, X } from "lucide-react"
import { CardDialog, type CardFormValues, type ChatTarget } from "./components/CardDialog"
import { Column } from "./components/Column"
import { ColumnDialog } from "./components/ColumnDialog"
import { LabelDialog } from "./components/LabelDialog"
import { KanbanCard } from "./components/SortableCard"
import { Input } from "@/components/ui/input"
import { matchCardSearch } from "../../search.js"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { matchesDueDate, useLocalDate, type DueDateFilter } from "@/lib/due-date"
import { callKanban, readChatImages, uploadImage } from "@/lib/api"
import { cardToChatText, fillChatDraft, queueDraft, type AttachmentDrafts } from "@/lib/chat-bridge"
import { PRIORITY_META, PRIORITY_OPTIONS } from "@/lib/constants"
import { useT } from "./lib/i18n"
import type { Board, Card as CardType, ImageLimits, Priority } from "@/lib/types"
import type { PropsRuntime } from "@deepseek-ai/dsh-client-ui-slots"
import type { UiWorkspace } from "@deepseek-ai/dsh-client-ui-workspace/client"
import type {} from "@deepseek-ai/dsh-client-ui-conversation/client"

type KanbanViewProps = PropsRuntime<"conversation.view"> & {
  uiWorkspace?: UiWorkspace
  attachmentDrafts?: AttachmentDrafts
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
  const uiWorkspace = props.uiWorkspace
  const attachmentDrafts = props.attachmentDrafts
  const items = useWorkspaces ? useWorkspaces((s) => s.items) : []
  const workspace = Array.isArray(items)
    ? items.find((w) => Array.isArray(w.sessionIds) && w.sessionIds.includes(sessionId))
    : undefined
  const workspaceId = workspace ? workspace.workspaceId : "default"
  const t = useT()

  const [board, setBoard] = useState<Board | null>(null)
  const [imageLimits, setImageLimits] = useState<ImageLimits | null>(null)
  const [query, setQuery] = useState("")
  const [error, setError] = useState("")
  const [warnings, setWarnings] = useState<string[]>([])
  const [activeCard, setActiveCard] = useState<CardType | null>(null)
  const [dialog, setDialog] = useState<{ card: CardType | null; columnId: string } | null>(null)
  const [columnDialogOpen, setColumnDialogOpen] = useState(false)
  const [labelDialogOpen, setLabelDialogOpen] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const today = useLocalDate()
  const [dueDateFilter, setDueDateFilter] = useState<DueDateFilter>("")
  const [priorityFilter, setPriorityFilter] = useState<Priority | "">("")
  // null means all labels; an empty string means unlabeled cards.
  const [labelFilter, setLabelFilter] = useState<string | null>(null)

  const rootRef = useRef<HTMLDivElement | null>(null)
  const boardRef = useRef<Board | null>(board)
  const dragCardsRef = useRef<CardType[] | null>(null)
  const workspaceIdRef = useRef(workspaceId)
  const chatAbort = useRef<AbortController | null>(null)
  useEffect(() => () => { chatAbort.current?.abort() }, [workspaceId, sessionId])
  const issuedRequestRef = useRef(0)
  const appliedRequestRef = useRef(0)
  boardRef.current = board
  workspaceIdRef.current = workspaceId
  const [viewHeight, setViewHeight] = useState<number | null>(null)

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const applyBoard = useCallback((res: any, expectedWorkspace: string, requestId: number) => {
    if (workspaceIdRef.current !== expectedWorkspace || requestId < appliedRequestRef.current) return
    appliedRequestRef.current = requestId
    if (res && res.board) {
      // Older host plugins may omit comments/activities; default to empty arrays for rendering.
      setBoard({
        ...res.board,
        completedColumnId: res.board.completedColumnId ?? null,
        cards: Array.isArray(res.board.cards)
          ? res.board.cards.map((card: CardType) => ({ ...card, dueDate: card.dueDate ?? null, completedAt: card.completedAt ?? null, comments: Array.isArray(card.comments) ? card.comments : [], images: Array.isArray(card.images) ? card.images : [] }))
          : [],
        activities: Array.isArray(res.board.activities) ? res.board.activities : [],
      })
      setError("")
    }
    if (res && "imageLimits" in res) setImageLimits(res.persisted === false ? null : res.imageLimits ?? null)
    if (Array.isArray(res && res.warnings) && res.warnings.length > 0) {
      setWarnings((prev) => [...prev, ...res.warnings])
    }
  }, [])

  const act = useCallback(
    async (method: string, args: Record<string, unknown> = {}) => {
      const requestId = ++issuedRequestRef.current
      setError("")
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
    setImageLimits(null)
    setQuery("")
    setLabelFilter(null)
    setPriorityFilter("")
    setDueDateFilter("")
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

  useEffect(() => {
    // A removed or renamed label must not leave an invisible, stale filter active.
    if (board) setLabelFilter((selected) =>
      selected && !board.labels.some((label) => label.name === selected) ? null : selected,
    )
  }, [board?.labels])

  // Keep the board within the visible session scroll container. An active conversation.view
  // grows its parent with min-height:auto, so h-full has no bounded height and long lists
  // stretch the page. Measure the available height explicitly to enable scrolling within lists.
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
      const scrollport = findScrollport(el.parentElement)
      // The Host restores the conversation's scroll offset on tab changes.
      // Measure the board's unscrolled origin; otherwise a negative viewport top
      // adds that old offset to the board height and stretches every column.
      const top = el.getBoundingClientRect().top + (scrollport?.scrollTop ?? 0)
      let bottom = window.innerHeight
      if (scrollport) {
        // Reserve space for the composer stuck to the bottom of the scroll container.
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
    if (scrollport) {
      observer.observe(scrollport)
      const composer = scrollport.querySelector<HTMLElement>("[data-composer-seat]")
      if (composer) observer.observe(composer)
    }
    window.addEventListener("resize", measure)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [board !== null])

  // Prefer pointerWithin for empty columns, then closestCorners for sorting cards.
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

  const saveCard = async (values: CardFormValues): Promise<boolean | { cardId: string }> => {
    if (!dialog) return false
    const saved = boardRef.current?.cards.find((card) => card.id === (values.id || dialog.card?.id))
    if ((values.id || dialog.card?.id) && !saved) throw new Error(t("cardNoLongerExists"))
    const payload: Record<string, unknown> = saved ? { id: saved.id } : {
      columnId: dialog.columnId, title: values.title, note: values.note,
      label: values.label || undefined, priority: values.priority || undefined, dueDate: values.dueDate || null,
    }
    if (saved) {
      if (values.title !== saved.title) payload.title = values.title
      if (values.note !== saved.note) payload.note = values.note
      if (values.label !== (saved.label ?? "")) payload.label = values.label
      if (values.priority !== (saved.priority ?? "")) payload.priority = values.priority
      if (values.dueDate !== (saved.dueDate ?? "")) payload.dueDate = values.dueDate || null
    }
    const requestId = ++issuedRequestRef.current
    setError("")
    const res = await callKanban(saved ? "updateCard" : "addCard", payload, workspaceId)
    applyBoard(res, workspaceId, requestId)
    if (workspaceIdRef.current !== workspaceId) return false
    const cardId = saved?.id ?? res.cardId
    if (!cardId) {
      // Older hosts can save text cards but cannot continue into image uploads.
      return true
    }
    if (!saved) {
      const created = res.board?.cards.find((card) => card.id === cardId)
      if (created) setDialog({ card: created, columnId: created.columnId })
    }
    return { cardId }
  }

  const addImage = async (cardId: string, file: File, signal: AbortSignal) => {
    const requestId = ++issuedRequestRef.current
    const res = await uploadImage(workspaceId, cardId, file, signal)
    if (res.persisted === false) throw new Error(t("actionRetry"))
    applyBoard(res, workspaceId, requestId)
  }

  // Fill the conversation draft without sending it.
  const handleChatWithAgent = useCallback(
    async (values: CardFormValues, target: ChatTarget): Promise<boolean> => {
      const current = boardRef.current
      const card = current?.cards.find((item) => item.id === values.id)
      const text = cardToChatText({ ...values, imageCount: card?.images?.length, completedAt: card?.completedAt,
        completed: card && current?.completedColumnId ? card.columnId === current.completedColumnId : undefined,
      })
      if (!text) return false
      setError("")
      try {
        chatAbort.current?.abort()
        const controller = new AbortController()
        chatAbort.current = controller
        const files = await readChatImages(workspaceId, card?.id ?? "", card?.images ?? [], AbortSignal.any([controller.signal, AbortSignal.timeout(30_000)]))
        if (controller.signal.aborted) return false
        if (files.length && (!attachmentDrafts?.createDrafts || !attachmentDrafts.releaseDraftAttachments)) throw new Error(t("chatImagesUnavailable"))
        if (target === "current") {
          if (!inputActions) return false
          fillChatDraft(sessionId, inputActions, { text, files }, attachmentDrafts)
          return true
        }
        // Queue before DSH switches sessions; canceled navigation must not leave a pending draft.
        if (!uiWorkspace?.openWorkspace) return false
        await uiWorkspace.openWorkspace(workspaceId, (nextId) => queueDraft(nextId, text, files))
        return true
      } catch (e: any) {
        setError(t("actionFailed") + String((e && e.message) || e))
        return false
      }
    },
    [inputActions, uiWorkspace, workspaceId, sessionId, attachmentDrafts, t],
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

  const dialogCard = board.cards.find((card) => card.id === dialog?.card?.id)

  return (
    <div
      ref={rootRef}
      className="kanban-root kanban-view"
      style={viewHeight != null ? { height: viewHeight } : undefined}
    >
      {error && !dialog && !columnDialogOpen && !labelDialogOpen && <p className="kanban-error" role="alert">{error}</p>}

      <div className="kanban-search-row">
        <div className="kanban-search-field">
          <Search aria-hidden="true" />
          <Input type="search" aria-label={t("searchCards")} placeholder={t("searchPlaceholder")} maxLength={200}
            value={query} onChange={(event) => setQuery(event.target.value)} />
          {query && <Button variant="ghost" size="icon" aria-label={t("clearSearch")} onClick={() => setQuery("")}><X /></Button>}
        </div>
        <div className="kanban-toolbar">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`kanban-toolbar-button${priorityFilter ? " is-active" : ""}`}
                title={t("priorityFilter")}
                aria-label={t("priorityFilter")}
                aria-pressed={Boolean(priorityFilter)}
              >
                <Filter className="kanban-icon" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem role="menuitemradio" aria-checked={!priorityFilter} onSelect={() => setPriorityFilter("")}>
                <span className="kanban-filter-check">{!priorityFilter && <Check className="kanban-icon" />}</span>
                {t("all")}
              </DropdownMenuItem>
              {PRIORITY_OPTIONS.map((p) => (
                <DropdownMenuItem key={p} role="menuitemradio" aria-checked={priorityFilter === p} onSelect={() => setPriorityFilter(p)}>
                  <span className="kanban-filter-check">{priorityFilter === p && <Check className="kanban-icon" />}</span>
                  <span className="kanban-priority-dot" style={{ background: PRIORITY_META[p].color }} />
                  {PRIORITY_META[p].label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`kanban-toolbar-button${labelFilter !== null ? " is-active" : ""}`}
                title={labelFilter === null ? t("labelFilter") : `${t("labelFilter")}: ${labelFilter || t("noLabel")}`}
                aria-label={t("labelFilter")}
                aria-pressed={labelFilter !== null}
              >
                <Tag className="kanban-icon" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem role="menuitemradio" aria-checked={labelFilter === null} onSelect={() => setLabelFilter(null)}>
                <span className="kanban-filter-check">{labelFilter === null && <Check className="kanban-icon" />}</span>
                {t("all")}
              </DropdownMenuItem>
              <DropdownMenuItem role="menuitemradio" aria-checked={labelFilter === ""} onSelect={() => setLabelFilter("")}>
                <span className="kanban-filter-check">{labelFilter === "" && <Check className="kanban-icon" />}</span>
                {t("noLabel")}
              </DropdownMenuItem>
              {board.labels.map((label) => (
                <DropdownMenuItem key={label.name} role="menuitemradio" aria-checked={labelFilter === label.name} onSelect={() => setLabelFilter(label.name)}>
                  <span className="kanban-filter-check">{labelFilter === label.name && <Check className="kanban-icon" />}</span>
                  <span className="kanban-label-dot" style={{ background: label.color }} />
                  {label.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className={`kanban-toolbar-button${dueDateFilter ? " is-active" : ""}`}
                title={t("dueDateFilter")} aria-label={t("dueDateFilter")} aria-pressed={Boolean(dueDateFilter)}>
                <CalendarDays className="kanban-icon" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {(["", "today", "overdue"] as const).map((value) => (
                <DropdownMenuItem key={value} role="menuitemradio" aria-checked={dueDateFilter === value} onSelect={() => setDueDateFilter(value)}>
                  <span className="kanban-filter-check">{dueDateFilter === value && <Check className="kanban-icon" />}</span>
                  {t(value === "today" ? "dueToday" : value === "overdue" ? "overdue" : "all")}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="kanban-toolbar-button kanban-toolbar-settings"
              title={t("settings")}
              aria-label={t("settings")}
            >
              <Settings2 className="kanban-icon" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem disabled={refreshing} onSelect={refreshBoard}>
              <RefreshCw className={refreshing ? "kanban-animate-spin" : undefined} />
              {t("refresh")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => { setError(""); setColumnDialogOpen(true) }}>
              <List className="kanban-icon" />
              {t("columnEdit")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => { setError(""); setLabelDialogOpen(true) }}>
              <Tag className="kanban-icon" />
              {t("labelEdit")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="https://github.com/alpacachen/dsh-kanban/issues/new/choose" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="kanban-icon" />
                {t("feedback")}
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {(query.trim() || priorityFilter || labelFilter !== null || dueDateFilter) && (
        <div className="kanban-filter-summary" aria-label={t("clearFilter")}>
          {query.trim() && <span className="kanban-muted-small" role="status">{t("searchResults").replace("{count}", String(board.cards.filter((card) => matchCardSearch(card, query)
            && (!priorityFilter || card.priority === priorityFilter)
            && (labelFilter === null || (card.label ?? "") === labelFilter)
            && matchesDueDate(card, dueDateFilter, board.completedColumnId, today)).length))}</span>}
          {dueDateFilter && (
            <Button variant="ghost" size="sm" className="kanban-filter-chip"
              aria-label={`${t("clearFilter")}: ${t(dueDateFilter === "today" ? "dueToday" : "overdue")}`}
              onClick={() => setDueDateFilter("")}>
              {t(dueDateFilter === "today" ? "dueToday" : "overdue")}<X className="kanban-tiny-icon" aria-hidden="true" />
            </Button>
          )}
          {priorityFilter && (
            <Button variant="ghost" size="sm" className="kanban-filter-chip"
              aria-label={`${t("clearFilter")}: ${PRIORITY_META[priorityFilter].label}`}
              onClick={() => setPriorityFilter("")}>
              {t("fieldPriority")}: {PRIORITY_META[priorityFilter].label}<X className="kanban-tiny-icon" aria-hidden="true" />
            </Button>
          )}
          {labelFilter !== null && (
            <Button variant="ghost" size="sm" className="kanban-filter-chip"
              aria-label={`${t("clearFilter")}: ${labelFilter || t("noLabel")}`}
              onClick={() => setLabelFilter(null)}>
              {t("fieldLabel")}: {labelFilter || t("noLabel")}<X className="kanban-tiny-icon" aria-hidden="true" />
            </Button>
          )}
        </div>
      )}

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
          {/* Horizontally scrollable board columns. */}
          <div className="kanban-board-scroll">
            {board.columns.map((col) => {
              const cards = board.cards.filter(
                (c) => c.columnId === col.id
                  && matchCardSearch(c, query)
                  && (!priorityFilter || c.priority === priorityFilter)
                  && (labelFilter === null || (c.label ?? "") === labelFilter)
                  // Keep the draggable mounted until drop, even when it enters the completed column.
                  && (c.id === activeCard?.id || matchesDueDate(c, dueDateFilter, board.completedColumnId, today)),
              )
              return (
                <Column
                  key={col.id}
                  column={col}
                  cards={cards}
                  totalCount={board.cards.filter((card) => card.columnId === col.id).length}
                  filtered={Boolean(priorityFilter || dueDateFilter || query.trim()) || labelFilter !== null}
                  completed={col.id === board.completedColumnId}
                  today={today}
                  labels={board.labels}
                  query={query}
                  onAddCard={(c) => { setError(""); setDialog({ card: null, columnId: c.id }) }}
                  onOpenCard={(c) => { setError(""); setDialog({ card: c, columnId: c.columnId }) }}
                />
              )
            })}
          </div>
        </div>

        <DragOverlay>
          {activeCard ? (
            <div className="kanban-drag-preview">
              <KanbanCard card={activeCard} labels={board.labels} completed={activeCard.columnId === board.completedColumnId} today={today} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      <CardDialog
        key={workspaceId}
        workspaceId={workspaceId}
        imageLimits={imageLimits}
        images={dialogCard?.images ?? []}
        onUploadImage={addImage}
        onRemoveImage={(id, attachmentId) => act("removeImage", { id, attachmentId })}
        error={error}
        open={dialog !== null}
        card={dialog?.card ?? null}
        labels={board.labels}
        completed={Boolean(dialogCard && dialogCard.columnId === board.completedColumnId)}
        completedAt={dialogCard?.completedAt ?? null}
        comments={dialogCard?.comments ?? []}
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
        error={error}
        open={columnDialogOpen}
        columns={board.columns}
        completedColumnId={board.completedColumnId}
        onSetCompletedColumn={(columnId) => act("setCompletedColumn", { columnId })}
        onOpenChange={setColumnDialogOpen}
        onReorder={(activeId, overId) => {
          const toIndex = board.columns.findIndex((c) => c.id === overId)
          return toIndex >= 0 ? act("moveColumn", { id: activeId, toIndex }) : Promise.resolve(false)
        }}
        onRename={(id, title) => act("renameColumn", { id, title })}
        onDelete={(id) => act("deleteColumn", { id })}
        onAdd={(title) => act("addColumn", { title })}
      />

      <LabelDialog
        error={error}
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
