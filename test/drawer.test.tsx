import { act, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { Dialog, DialogBody, DialogHeader, DialogTitle } from "../src/client/components/ui/dialog"
import { DrawerContent } from "../src/client/components/ui/drawer"

const WIDTH_KEY = "dsh-kanban:card-drawer-width"

function mount() {
  return render(
    <Dialog open>
      <DrawerContent open onClose={() => {}} title="Task details" aria-describedby={undefined}>
        <DialogHeader><DialogTitle>Task details</DialogTitle></DialogHeader>
        <DialogBody><input aria-label="Title" /></DialogBody>
      </DrawerContent>
    </Dialog>,
  )
}

function resizeViewport(width: number) {
  act(() => {
    Object.defineProperty(window, "innerWidth", { value: width, configurable: true })
    window.dispatchEvent(new Event("resize"))
  })
}

beforeEach(() => {
  window.localStorage.clear()
  resizeViewport(1280)
})

afterEach(() => vi.restoreAllMocks())

describe("task drawer width", () => {
  it("resizes with the keyboard within bounds and restores the saved width on reopen", () => {
    const view = mount()
    const handle = screen.getByRole("separator")
    expect(screen.getByRole("dialog").style.width).toBe("720px")
    expect(handle.getAttribute("aria-controls")).toBe(screen.getByRole("dialog").id)
    fireEvent.keyDown(handle, { key: "ArrowLeft" })
    expect(handle.getAttribute("aria-valuenow")).toBe("752")
    fireEvent.keyDown(handle, { key: "ArrowRight" })
    expect(handle.getAttribute("aria-valuenow")).toBe("720")
    fireEvent.keyDown(handle, { key: "Home" })
    fireEvent.keyDown(handle, { key: "ArrowRight" })
    expect(handle.getAttribute("aria-valuenow")).toBe("420")
    fireEvent.keyDown(handle, { key: "End" })
    fireEvent.keyDown(handle, { key: "ArrowLeft" })
    expect(handle.getAttribute("aria-valuenow")).toBe("1000")
    expect(window.localStorage.getItem(WIDTH_KEY)).toBe("1000")
    view.unmount()
    mount()
    expect(screen.getByRole("dialog").style.width).toBe("1000px")
  })

  it("clamps to the viewport, fills a phone screen, and preserves the desktop preference", () => {
    window.localStorage.setItem(WIDTH_KEY, "900")
    mount()
    resizeViewport(800)
    expect(screen.getByRole("dialog").style.width).toBe("736px")
    expect(screen.getByRole("separator").getAttribute("aria-valuemax")).toBe("736")
    resizeViewport(390)
    expect(screen.getByRole("dialog").style.width).toBe("390px")
    expect(screen.queryByRole("separator")).toBeNull()
    resizeViewport(1280)
    expect(screen.getByRole("dialog").style.width).toBe("900px")
    expect(window.localStorage.getItem(WIDTH_KEY)).toBe("900")
  })

  it.each(["nope", "Infinity", "-100", "0"])("ignores invalid stored width %s", (value) => {
    window.localStorage.setItem(WIDTH_KEY, value)
    mount()
    expect(screen.getByRole("dialog").style.width).toBe("720px")
  })

  it("keeps working when the host blocks local storage", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("Unavailable") })
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("Unavailable") })
    mount()
    fireEvent.keyDown(screen.getByRole("separator"), { key: "ArrowLeft" })
    expect(screen.getByRole("dialog").style.width).toBe("752px")
  })

  it("captures dragging, persists the completed width, and rolls back a cancelled drag", () => {
    mount()
    const handle = screen.getByRole("separator")
    const capture = vi.fn()
    const release = vi.fn()
    handle.setPointerCapture = capture
    handle.hasPointerCapture = () => true
    handle.releasePointerCapture = release
    const pointer = (type: string, clientX: number) => {
      const event = new MouseEvent(type, { bubbles: true, clientX, button: 0 })
      Object.defineProperty(event, "pointerId", { value: 1 })
      fireEvent(handle, event)
    }
    pointer("pointerdown", 560)
    pointer("pointermove", 480)
    expect(screen.getByRole("dialog").style.width).toBe("800px")
    pointer("pointerup", 480)
    expect(capture).toHaveBeenCalledWith(1)
    expect(release).toHaveBeenCalledWith(1)
    expect(window.localStorage.getItem(WIDTH_KEY)).toBe("800")
    pointer("pointerdown", 480)
    pointer("pointermove", 400)
    expect(screen.getByRole("dialog").style.width).toBe("880px")
    pointer("pointercancel", 400)
    expect(screen.getByRole("dialog").style.width).toBe("800px")
    expect(window.localStorage.getItem(WIDTH_KEY)).toBe("800")
    pointer("pointerdown", 480)
    pointer("pointermove", 400)
    resizeViewport(390)
    expect(screen.queryByRole("separator")).toBeNull()
    resizeViewport(1280)
    expect(screen.getByRole("dialog").style.width).toBe("800px")
    expect(screen.getByRole("dialog").hasAttribute("data-resizing")).toBe(false)
  })
})
