export class WorkflowApiError extends Error {
  constructor(
    readonly kind: "transport" | "domain",
    readonly code: string,
    message: string,
    readonly status?: number,
  ) {
    super(message)
    this.name = "WorkflowApiError"
  }
}

const record = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === "object" && !Array.isArray(value)

const invalidResponse = () => new WorkflowApiError(
  "transport", "workflow/invalid-response", "The Workflow service returned an invalid response.",
)

/**
 * DSH 0.2.2-rc.3: client-connection/src/client/rpc.ts owns this unary envelope;
 * rpc-host.ts admits browser cookies as the exact shared browserPeer. Do not
 * substitute an API owner, credentials, or the legacy /api/kanban custom route.
 * This text-only API deliberately rejects binary/non-JSON responses.
 */
export function createWorkflowApi() {
  return {
    async call<T>(method: string, args: Record<string, unknown>, signal?: AbortSignal): Promise<T> {
      signal?.throwIfAborted()
      if (!/^[A-Za-z][A-Za-z0-9_]{0,79}$/.test(method)) {
        throw new WorkflowApiError("transport", "workflow/invalid-method", "Invalid Workflow method.")
      }
      const endpoint = `workflowReview/${method}`
      const rpcId = globalThis.crypto.randomUUID()
      const body = JSON.stringify({ type: "client-request", rpcId, method: endpoint, payload: { args } })
      let response: Response
      try {
        response = await fetch(`/api/${endpoint}`, {
          method: "POST",
          mode: "same-origin",
          credentials: "same-origin",
          redirect: "error",
          headers: { "content-type": "application/json" },
          body,
          signal,
        })
      } catch {
        signal?.throwIfAborted()
        throw new WorkflowApiError("transport", "workflow/network", "Could not reach the Workflow service.")
      }
      signal?.throwIfAborted()
      if (!response.ok) {
        throw new WorkflowApiError("transport", `workflow/http-${response.status}`,
          response.status === 401 || response.status === 403
            ? "Reconnect the authenticated Harness page to use Workflow."
            : "The Workflow service is unavailable.", response.status)
      }
      let envelope: unknown
      try {
        envelope = await response.json()
      } catch {
        signal?.throwIfAborted()
        throw invalidResponse()
      }
      signal?.throwIfAborted()
      if (!record(envelope) || envelope.type !== "server-response" || envelope.rpcId !== rpcId
        || !record(envelope.result)) throw invalidResponse()
      const result = envelope.result
      // Like the public carrier, absent value is a valid void result.
      if (result.ok === true) return result.value as T
      if (result.ok !== false || !record(result.error)) throw invalidResponse()
      const error = result.error
      if (typeof error.code !== "string" || typeof error.message !== "string" || !record(error.details)) {
        throw invalidResponse()
      }
      // Only the Workflow boundary's explicitly safe business messages reach UI.
      // Never display unknown Gateway failures, HTTP bodies, details, or stack traces.
      const boundaryMessages: Record<string, string> = {
        "workflow/browser-required": "This operation requires the authenticated Workflow UI.",
        "workflow/cancelled": "The workflow request was cancelled.",
        "workflow/invalid-input": "Invalid workflow review request.",
        "workflow/internal": "The workflow operation could not be completed.",
      }
      if (Object.prototype.hasOwnProperty.call(boundaryMessages, error.code)) {
        throw new WorkflowApiError("domain", error.code, boundaryMessages[error.code])
      }
      const coreCode = error.details.code
      if (typeof coreCode === "string" && /^WF_[A-Z][A-Z0-9_]{0,79}$/.test(coreCode)
        && error.code === `workflow/${coreCode.slice(3).toLowerCase().replace(/_/g, "-")}`
        && error.message.length > 0 && error.message.length <= 2000) {
        throw new WorkflowApiError("domain", error.code, error.message)
      }
      throw new WorkflowApiError("transport", "workflow/remote-failure", "The Workflow request could not be completed.")
    },
  }
}
