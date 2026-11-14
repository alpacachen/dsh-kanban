// @vitest-environment node
import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const tokens = new Set(["bg-base", "bg-layer-1", "bg-layer-2", "bg-overlay", "border-l1", "border-l2", "brand-primary", "label-primary", "label-secondary", "state-error-primary", "state-idle-primary", "state-success-primary", "state-warn-primary"].map(name => `--dsw-alias-${name}`))
for (const file of ["workflow.css", "workflow-diagram.css", "workflow-review.css"]) {
  const css = readFileSync(new URL(`../src/client/${file}`, import.meta.url), "utf8")
  describe(file, () => {
    it("uses public DSH color tokens instead of private primitive variables", () => {
      for (const [, token] of css.matchAll(/var\((--dsw-[\w-]+)/g)) expect(tokens.has(token), token).toBe(true)
    })
    it("keeps top-level component selectors inside the plugin", () => {
      for (const line of css.split("\n").map(value => value.trim()).filter(value => value.startsWith("."))) expect(line.startsWith(".kanban-root"), line).toBe(true)
    })
  })
}
