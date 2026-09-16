import css from "./styles.css"
import { KanbanPlugin } from "./plugin"

// Inject namespaced plugin CSS at runtime with a deduplication marker.
const STYLE_TAG = "data-dsh-kanban-style"
if (typeof document !== "undefined" && !document.querySelector("style[" + STYLE_TAG + "]")) {
  const el = document.createElement("style")
  el.setAttribute(STYLE_TAG, "")
  el.textContent = css
  document.head.appendChild(el)
}

export default KanbanPlugin
