import * as React from "react"
import { useT } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { createPortal } from "react-dom"
import { useModalLayer } from "@deepseek-ai/dsh-client-ui-primitives"
import { X } from "lucide-react"

const WIDTH_KEY = "dsh-kanban:card-drawer-width"
const DEFAULT_WIDTH = 720
const MIN_WIDTH = 420

function readWidth() {
  try {
    const value = Number(window.localStorage.getItem(WIDTH_KEY))
    if (Number.isFinite(value) && value > 0) return value
  } catch { /* Storage can be unavailable in a restricted host. */ }
  return DEFAULT_WIDTH
}

function rememberWidth(width: number) {
  try { window.localStorage.setItem(WIDTH_KEY, String(width)) } catch { /* Resizing still works without storage. */ }
}

const DrawerContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { open: boolean; onClose: () => void; title: string }
>(({ open, onClose, title, className, children, id, style, ...props }, ref) => {
  const panel = React.useRef<HTMLDivElement>(null)
  React.useImperativeHandle(ref, () => panel.current!, [open])
  // Share Host modal ownership so its body-portaled image preview can receive focus.
  useModalLayer(panel, open, onClose)
  const t = useT()
  const generatedId = React.useId()
  const panelId = id ?? generatedId
  const hintId = `${generatedId}-resize-hint`
  const [preferredWidth, setPreferredWidth] = React.useState(readWidth)
  const [viewportWidth, setViewportWidth] = React.useState(() => window.innerWidth)
  const [resizing, setResizing] = React.useState(false)
  const drag = React.useRef<{ pointerId: number; x: number; width: number; preferredWidth: number; lastWidth: number } | null>(null)
  const mobile = viewportWidth <= 600
  const maxWidth = Math.min(1000, viewportWidth - 64)
  const clamp = (value: number) => Math.max(MIN_WIDTH, Math.min(maxWidth, value))
  const width = mobile ? viewportWidth : clamp(preferredWidth)

  React.useEffect(() => {
    const onResize = () => {
      if (drag.current) {
        setPreferredWidth(drag.current.preferredWidth)
        drag.current = null
        setResizing(false)
      }
      setViewportWidth(window.innerWidth)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  function finishResize(event: React.PointerEvent<HTMLDivElement>, cancelled: boolean) {
    const current = drag.current
    if (!current || current.pointerId !== event.pointerId) return
    drag.current = null
    setResizing(false)
    if (cancelled) setPreferredWidth(current.preferredWidth)
    else rememberWidth(current.lastWidth)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }

  if (!open) return null
  return createPortal(<>
    <div className="kanban-portal kanban-dialog-overlay" aria-hidden="true" onClick={onClose} />
    <div
      {...props}
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      tabIndex={-1}
      data-state="open"
      id={panelId}
      className={cn("kanban-portal kanban-dialog-content kanban-drawer-content", className)}
      style={{ ...style, width }}
      data-resizing={resizing || undefined}
    >
      {children}
      {!mobile && <>
        <div
          className="kanban-drawer-resize"
          role="separator"
          tabIndex={0}
          aria-label={t("resizeTaskDetails")}
          aria-describedby={hintId}
          aria-orientation="vertical"
          aria-valuemin={MIN_WIDTH}
          aria-valuemax={maxWidth}
          aria-valuenow={width}
          aria-controls={panelId}
          title={t("resizeTaskDetailsHint")}
          onPointerDown={(event) => {
            if (event.button !== 0 || drag.current) return
            event.preventDefault()
            event.currentTarget.focus()
            event.currentTarget.setPointerCapture(event.pointerId)
            drag.current = { pointerId: event.pointerId, x: event.clientX, width, preferredWidth, lastWidth: width }
            setResizing(true)
          }}
          onPointerMove={(event) => {
            const current = drag.current
            if (!current || current.pointerId !== event.pointerId) return
            const next = clamp(current.width + current.x - event.clientX)
            current.lastWidth = next
            setPreferredWidth(next)
          }}
          onPointerUp={(event) => finishResize(event, false)}
          onPointerCancel={(event) => finishResize(event, true)}
          onLostPointerCapture={(event) => finishResize(event, true)}
          onKeyDown={(event) => {
            let next: number
            if (event.key === "ArrowLeft") next = clamp(width + 32)
            else if (event.key === "ArrowRight") next = clamp(width - 32)
            else if (event.key === "Home") next = MIN_WIDTH
            else if (event.key === "End") next = maxWidth
            else return
            event.preventDefault()
            setPreferredWidth(next)
            rememberWidth(next)
          }}
        />
        <span id={hintId} className="kanban-sr-only">{t("resizeTaskDetailsHint")}</span>
      </>}
      <button type="button" className="kanban-dialog-close" aria-label={t("close")} onClick={onClose}><X className="kanban-dialog-close-icon" /></button>
    </div>
  </>, document.body)
})
DrawerContent.displayName = "DrawerContent"

export { DrawerContent }
