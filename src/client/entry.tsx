import reactFlowCss from "@xyflow/react/dist/base.css"
import css from "./styles.css"
import workflowCss from "./workflow.css"
import workflowDiagramCss from "./workflow-diagram.css"
import workflowReviewCss from "./workflow-review.css"
import { KanbanPlugin } from "./plugin"

// Keep one namespaced stylesheet, but refresh its contents on module replacement.
const STYLE_TAG = "data-dsh-kanban-style"
if (typeof document !== "undefined") {
  let el = document.querySelector<HTMLStyleElement>("style[" + STYLE_TAG + "]")
  if (!el) {
    el = document.createElement("style")
    el.setAttribute(STYLE_TAG, "")
    document.head.appendChild(el)
  }
  el.textContent = `@scope (.kanban-root .wf-diagram) { ${reactFlowCss} }\n${css}\n${workflowCss}\n${workflowDiagramCss}\n${workflowReviewCss}`
}

export default KanbanPlugin
