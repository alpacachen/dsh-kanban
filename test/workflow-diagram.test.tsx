import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest"
import { WorkflowDiagram, isSteppedWheel } from "../src/client/WorkflowDiagram"
import { t } from "../src/client/lib/i18n"
import type { WorkflowStage } from "../src/client/lib/workflow-types"

const stages: WorkflowStage[] = [
  { id: "research", kind: "agent", title: "Research sources", prompt: "Research." },
  { id: "review", kind: "review", title: "Review sources", returnStageId: "research" },
  { id: "write", kind: "agent", title: "Write the report", prompt: "Write." },
  { id: "final", kind: "review", title: "Final approval", returnStageId: "research" },
]

// React Flow measures handles in a browser; emulate geometry only for graph/keyboard assertions.
const offsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "offsetWidth")!
const offsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "offsetHeight")!
const clientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "clientWidth")!
const clientHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "clientHeight")!
beforeAll(() => {
  vi.stubGlobal("DOMMatrixReadOnly", class { m22 = 1 })
  vi.stubGlobal("ResizeObserver", class {
    callback: ResizeObserverCallback
    timers: ReturnType<typeof setTimeout>[] = []
    constructor(callback: ResizeObserverCallback) { this.callback = callback }
    observe(target: Element) { this.timers.push(setTimeout(() => this.callback([{ target } as ResizeObserverEntry], this as any), 0)) }
    unobserve() {}
    disconnect() { this.timers.forEach(clearTimeout) }
  })
  Object.defineProperties(HTMLElement.prototype, {
    offsetWidth: { configurable: true, get() { return parseFloat(this.style.width) || 800 } },
    offsetHeight: { configurable: true, get() { return parseFloat(this.style.height) || 360 } },
    clientWidth: { configurable: true, get() { return 800 } },
    clientHeight: { configurable: true, get() { return 360 } },
  })
})
afterAll(() => {
  Object.defineProperties(HTMLElement.prototype, { offsetWidth, offsetHeight })
  if (clientWidth) Object.defineProperty(HTMLElement.prototype, "clientWidth", clientWidth)
  else delete (HTMLElement.prototype as any).clientWidth
  if (clientHeight) Object.defineProperty(HTMLElement.prototype, "clientHeight", clientHeight)
  else delete (HTMLElement.prototype as any).clientHeight
  vi.unstubAllGlobals()
})

describe("React Flow workflow canvas", () => {
  it("opens a long workflow at 100% and makes stage buttons reachable by a pointer", async () => {
    const long = Array.from({ length: 16 }, (_, index) => ({ id: `step-${index}`, kind: "agent" as const, title: `Stage ${index + 1}`, prompt: "Execute" }))
    const onSelect = vi.fn(), view = render(<WorkflowDiagram horizontal stages={long} onSelect={onSelect} />)
    await waitFor(() => expect(screen.getByRole("button", { name: t("wfDiagramFit") }).hasAttribute("disabled")).toBe(false))
    expect(screen.getByLabelText(t("wfDiagramZoom"), { selector: "output" }).textContent).toBe("100%")
    expect(view.container.querySelector<HTMLElement>('.react-flow__node[data-id="step-0"]')?.style.pointerEvents).toBe("all")
    fireEvent.click(screen.getByRole("button", { name: `1. ${t("wfAgent")}: Stage 1` }))
    expect(onSelect).toHaveBeenCalledExactlyOnceWith("step-0")
    fireEvent.wheel(view.container.querySelector(".wf-diagram-viewport")!, { deltaY: -3, deltaMode: 1, clientX: 100, clientY: 100 })
    await waitFor(() => expect(parseInt(screen.getByLabelText(t("wfDiagramZoom"), { selector: "output" }).textContent!)).toBeGreaterThan(100))
  })

  it("distinguishes coarse mouse notches from trackpad motion without intercepting pinch events", () => {
    expect(isSteppedWheel({ deltaMode: 1, deltaX: 0, deltaY: 3 })).toBe(true)
    expect(isSteppedWheel({ deltaMode: 0, deltaX: 0, deltaY: 100, wheelDeltaY: -120 })).toBe(true)
    expect(isSteppedWheel({ deltaMode: 0, deltaX: 0, deltaY: 120, wheelDeltaY: -360 })).toBe(false)
    expect(isSteppedWheel({ deltaMode: 0, deltaX: 12, deltaY: 80, wheelDeltaY: -120 })).toBe(false)
    expect(isSteppedWheel({ deltaMode: 0, deltaX: 0, deltaY: 4 })).toBe(false)
  })

  it("keeps keyboard selection separate from the running stage", async () => {
    const onSelect = vi.fn(), user = userEvent.setup()
    const { container } = render(<WorkflowDiagram compact horizontal stages={stages} currentStageId="write" selectedStageId="research" onSelect={onSelect} />)
    expect(container.querySelector('[data-stage-id="write"]')?.getAttribute("aria-current")).toBe("step")
    expect(container.querySelector('[data-stage-id="research"]')?.getAttribute("aria-pressed")).toBe("true")
    expect(screen.queryByRole("tablist")).toBeNull()
    screen.getByRole("button", { name: `1. ${t("wfAgent")}: Research sources` }).focus()
    await user.keyboard("{ArrowRight}")
    expect(onSelect).toHaveBeenLastCalledWith("review")
    expect(document.activeElement).toBe(screen.getByRole("button", { name: `2. ${t("wfReview")}: Review sources` }))
    await user.keyboard("{End}")
    expect(onSelect).toHaveBeenLastCalledWith("final")
    await user.keyboard("{Home}")
    expect(onSelect).toHaveBeenLastCalledWith("research")
    expect(container.querySelector('[data-current="true"]')?.getAttribute("data-stage-id")).toBe("write")
  })

  it("draws exact execution, approval and review return edges with native React Flow", async () => {
    const { container } = render(<WorkflowDiagram horizontal stages={stages} />)
    await waitFor(() => {
      expect(container.querySelectorAll("[data-edge-kind]")).toHaveLength(7)
      expect(container.querySelector('[data-edge-kind="return"][data-from="final"][data-to="research"]')).toBeTruthy()
      expect(container.querySelector('[data-edge-kind="approve"][data-from="review"][data-to="write"]')).toBeTruthy()
      expect(container.querySelector('[data-edge-kind="approve"][data-from="final"][data-to$="-finish"]')).toBeTruthy()
      expect(container.querySelector('[data-from$="-start"][data-to="research"]')).toBeTruthy()
      expect(container.querySelector('[data-edge-kind="return"][data-from="final"][data-to="write"]')).toBeNull()
      expect(container.querySelectorAll('.react-flow__node-stage')).toHaveLength(4)
      expect(container.querySelectorAll('button[data-stage-id]')).toHaveLength(0)
      expect(container.querySelectorAll('.react-flow__node.draggable,.react-flow__handle.connectable')).toHaveLength(0)
    })
  })

  it.each(["missing", "write", "review"])("does not invent connections for invalid return target %s", async target => {
    const { container } = render(<WorkflowDiagram stages={[stages[0]!, { ...stages[1]!, returnStageId: target }, stages[2]!]} />)
    expect(screen.getByRole("alert").textContent).toContain(t("wfDiagramInvalidReturn"))
    await waitFor(() => expect(container.querySelector('.react-flow__edge')).toBeTruthy())
    expect(container.querySelector('[data-edge-kind="return"][data-from="review"]')).toBeNull()
    expect(container.querySelector('[data-edge-kind="approve"][data-from="review"]')).toBeNull()
    expect(container.querySelector('[data-stage-id="review"]')?.getAttribute("data-invalid")).toBe("true")
  })

  it("keeps pan/zoom controls available when stage selection is disabled", async () => {
    const onSelect = vi.fn()
    render(<WorkflowDiagram stages={stages} onSelect={onSelect} disabled />)
    fireEvent.click(screen.getByRole("button", { name: /Research sources/ }))
    expect(onSelect).not.toHaveBeenCalled()
    const fit = screen.getByRole("button", { name: t("wfDiagramFit") })
    await waitFor(() => expect(fit.hasAttribute("disabled")).toBe(false))
    fireEvent.click(fit)
    const zoom = screen.getByLabelText(t("wfDiagramZoom"), { selector: "output" })
    await waitFor(() => expect(parseInt(zoom.textContent!)).toBeLessThan(100))
    const before = parseInt(zoom.textContent!)
    fireEvent.click(screen.getByRole("button", { name: t("wfDiagramZoomOut") }))
    await waitFor(() => expect(parseInt(zoom.textContent!)).toBeLessThan(before))
  })

  it("uses independent marker ids and keeps full long titles accessible", async () => {
    const title = "非常长的步骤标题".repeat(20)
    const { container } = render(<><WorkflowDiagram stages={[{ ...stages[0]!, title }]} /><WorkflowDiagram stages={stages} /></>)
    await waitFor(() => expect(container.querySelectorAll("marker").length).toBeGreaterThan(0))
    const ids = Array.from(container.querySelectorAll("marker")).map(marker => marker.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(container.querySelector('[data-stage-id="research"]')?.getAttribute("title")).toBe(title)
  })

  it("updates execution status without moving a user's viewport or stealing focus", async () => {
    const view = render(<><input aria-label="Outside" /><WorkflowDiagram horizontal stages={stages} onSelect={vi.fn()} /></>)
    const fit = screen.getByRole("button", { name: t("wfDiagramFit") })
    await waitFor(() => expect(fit.hasAttribute("disabled")).toBe(false))
    fireEvent.click(screen.getByRole("button", { name: t("wfDiagramZoomIn") }))
    const canvas = view.container.querySelector<HTMLElement>(".react-flow__viewport")!
    await waitFor(() => expect(canvas.style.transform).toContain("scale"))
    const transform = canvas.style.transform, outside = screen.getByLabelText("Outside")
    outside.focus()
    view.rerender(<><input aria-label="Outside" /><WorkflowDiagram horizontal stages={[...stages]} currentStageId="final" states={{ final: "waiting_review" }} onSelect={vi.fn()} /></>)
    expect(document.activeElement).toBe(outside)
    expect(canvas.style.transform).toBe(transform)
    expect(screen.getByText(t("wfState_waiting_review"))).toBeTruthy()
  })

  it("keeps horizontal geometry on narrow panes instead of creating a scrolling column", () => {
    const { container } = render(<WorkflowDiagram horizontal stages={stages} onSelect={vi.fn()} />)
    const research = container.querySelector<HTMLElement>('.react-flow__node[data-id="research"]')!
    const review = container.querySelector<HTMLElement>('.react-flow__node[data-id="review"]')!
    expect(research.style.transform).toContain("0px,0px")
    expect(review.style.transform).toContain("264px,0px")
    expect(container.querySelector(".wf-diagram-plane,.wf-diagram-scaled")).toBeNull()
  })

  it("shows an honest empty canvas without a start-to-success edge", () => {
    const { container } = render(<WorkflowDiagram stages={[]} />)
    expect(screen.getByText(t("wfDiagramEmpty"))).toBeTruthy()
    expect(container.querySelectorAll(".react-flow__node,.react-flow__edge")).toHaveLength(0)
  })
})
