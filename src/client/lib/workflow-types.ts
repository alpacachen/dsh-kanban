export type WorkflowFileTarget = { path: string; directory: string }
export type WorkflowTaskFile = { path: string; name: string; byteLength: number; updatedAt: number; kind: "file" | "stage-result"; version?: string; stageTitle?: string; effective?: boolean }
export type WorkflowTaskFiles = { directory: string; files: WorkflowTaskFile[] }
export interface WorkflowApi {
  openDirectory?: (path: string, signal: AbortSignal) => Promise<void>
  call<T>(method: string, args: Record<string, unknown>, signal?: AbortSignal): Promise<T>
}
export type WorkflowTimestamp = string | number
export type ModelSelection = { provider: string; model: string; reasoningEffort?: string }
export type WorkflowStage = { id: string; kind: "agent" | "review"; title: string; prompt?: string; returnStageId?: string; modelSelection?: ModelSelection }
export type WorkflowDefinition = { description: string; inputLabel: string; inputHint: string; stages: WorkflowStage[] }
export type Workflow = {
  id: string; workspaceId: string; name: string; description: string; revision: number; definition: WorkflowDefinition
  versionId: string | null; versionNumber: number | null; taskCount: number; createdAt: WorkflowTimestamp; updatedAt: WorkflowTimestamp
}
export type TaskSummary = {
  id: string; workspaceId: string; workflowId: string; workflowName: string; versionNumber: number
  workflowVersionId?: string; title: string; inputText?: string; state: string; revision: number; stageTitle: string; canRetry?: boolean; updatedAt: WorkflowTimestamp; createdAt: WorkflowTimestamp
}
export type TaskOutput = { id: string; stageId?: string; label: string; contentHash: string; byteLength?: number; text?: string; unavailable?: boolean }
export type TaskArtifact = { id: string; stageId: string; label: string; contentHash: string; byteLength: number; createdAt: WorkflowTimestamp; effective: boolean }
export type WorkflowTask = TaskSummary & {
  input: { text: string }; currentStageId: string; stages: WorkflowStage[]; outputs: TaskOutput[]; canReview?: boolean; canReconcile?: boolean
  executionModel?: ModelSelection; retryBlockedReason?: string
  review: { id: string; subjectHash: string; returnStageId?: string; requestedAt?: WorkflowTimestamp } | null
  attention: { code?: string; message?: string } | null
  attempts: { id: string; sessionId?: string; stageId: string; state: string; startedAt?: WorkflowTimestamp; finishedAt?: WorkflowTimestamp | null; error?: string | null }[]
  reviews: { id: string; stageId?: string; state: string; feedback: string | null; artifactIds?: string[]; requestedAt?: WorkflowTimestamp; decidedAt?: WorkflowTimestamp | null }[]
  visits?: { id: string; stageId: string; state: "open" | "succeeded" | "returned" | "terminated"; startedAt?: WorkflowTimestamp; finishedAt?: WorkflowTimestamp | null }[]
  artifactHistory?: TaskArtifact[]
  events?: { id: string; kind: string; sequence: number; createdAt: WorkflowTimestamp }[]
}
export type TaskOverview = { tasks: TaskSummary[]; status: { policy?: string; lastError: string | null; cleanupPending?: number } }
export type WorkflowCommand = <T>(method: string, payload: Record<string, unknown>, signal?: AbortSignal) => Promise<T>
