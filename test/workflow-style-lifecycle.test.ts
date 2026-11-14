import { afterEach, expect, it, vi } from "vitest"

vi.mock("@xyflow/react/dist/base.css", () => ({ default: ".react-flow { position: relative; }" }))
vi.mock("../src/client/styles.css", () => ({ default: ".base { color: inherit; }" }))
vi.mock("../src/client/workflow.css", () => ({ default: ".workflow-root { display: flex; }" }))
vi.mock("../src/client/workflow-diagram.css", () => ({ default: ".workflow-diagram { display: flex; }" }))
vi.mock("../src/client/workflow-review.css", () => ({ default: ".workflow-review-workbench { display: grid; }" }))
vi.mock("../src/client/plugin", () => ({ KanbanPlugin: {} }))

afterEach(() => {
  document.querySelectorAll("style[data-dsh-kanban-style]").forEach(element => element.remove())
  vi.resetModules()
})

it("updates the existing stylesheet when the client plugin is replaced", async () => {
  const previous = document.createElement("style")
  previous.setAttribute("data-dsh-kanban-style", "")
  previous.textContent = ".old-workflow-style { color: red; }"
  document.head.appendChild(previous)
  await import("../src/client/entry")
  expect(document.querySelectorAll("style[data-dsh-kanban-style]")).toHaveLength(1)
  expect(previous.textContent).toContain("@scope (.kanban-root .wf-diagram) { .react-flow")
  expect(previous.textContent).toContain(".workflow-root")
  expect(previous.textContent).not.toContain(".workflow-editor")
  expect(previous.textContent).toContain(".workflow-diagram")
  expect(previous.textContent).toContain(".workflow-review-workbench")
  expect(previous.textContent).not.toContain("old-workflow-style")
})

it("creates one stylesheet and does not duplicate it on repeated loading", async () => {
  await import("../src/client/entry")
  vi.resetModules()
  await import("../src/client/entry")
  expect(document.querySelectorAll("style[data-dsh-kanban-style]")).toHaveLength(1)
})
