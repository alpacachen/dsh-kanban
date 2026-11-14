// Presentation only: persisted replies, evidence and hashes must remain untouched.
export function workflowReportBody(text: string): string {
  const match = /(?:^|\n)(?:```workflow-handoff[^\n]*\n|[ \t]*<workflow-handoff(?:>|$))/.exec(text)
  return match ? text.slice(0, match.index).trimEnd() : text
}

export function workflowPromptInput(text: string): string {
  if (!text.startsWith("Execute this Workflow stage using the normal DSH tools and authorization.")) return text
  try {
    const context = JSON.parse(text.split("\n\n").find(part => part.startsWith('{"input":')) ?? "")
    if (typeof context.input?.text !== "string") return text
    return [context.input.text, ...(Array.isArray(context.feedback) ? context.feedback.filter((value: unknown) => typeof value === "string") : [])].join("\n\n")
  } catch { return text }
}
