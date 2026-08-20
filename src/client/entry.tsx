import css from "./styles.css"
import { KanbanPlugin } from "./plugin"

// 运行时注入编译后的 Tailwind CSS（带去重标记）。
const STYLE_TAG = "data-dsh-kanban-style"
if (typeof document !== "undefined" && !document.querySelector("style[" + STYLE_TAG + "]")) {
  const el = document.createElement("style")
  el.setAttribute(STYLE_TAG, "")
  el.textContent = css
  document.head.appendChild(el)
}

export default KanbanPlugin
