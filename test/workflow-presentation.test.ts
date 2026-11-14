import { describe, expect, it } from "vitest"
import { workflowPromptInput, workflowReportBody } from "../src/client/lib/workflow-presentation"

describe("Workflow display projections", () => {
  it("hides only the reserved trailing handoff, including streaming data, without changing evidence", () => {
    const body = "## Result\n75%; budget unknown."
    for (const tail of ['<workflow-handoff>{"conclusions":', '<workflow-handoff>{"conclusions":[]}</workflow-handoff>']) {
      expect(workflowReportBody(`${body}\n\n${tail}`)).toBe(body)
    }
    expect(workflowReportBody("Explain `<workflow-handoff>` inline.")).toBe("Explain `<workflow-handoff>` inline.")
    const raw = body + '\n\n```workflow-handoff\n<workflow-handoff>{"data":true}</workflow-handoff>\n```', before = raw
    expect(workflowReportBody(raw)).toBe(body)
    expect(raw).toBe(before)
  })

  it("shows the real task and feedback instead of the generated transport prompt", () => {
    const context = JSON.stringify({ input: { text: "Check 12 items; 9 complete." }, previousStages: [], feedback: ["Keep uncertainty."] })
    const generated = `Execute this Workflow stage using the normal DSH tools and authorization.\n\nStage instruction: Inspect facts.\n\n${context}\n\nEnd with internal protocol.`
    expect(workflowPromptInput(generated)).toBe("Check 12 items; 9 complete.\n\nKeep uncertainty.")
    for (const text of ["Ordinary chat", "Execute this Workflow stage using the normal DSH tools and authorization.\n\n{broken}"]) expect(workflowPromptInput(text)).toBe(text)
  })
})
