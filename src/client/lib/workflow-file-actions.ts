import { t } from "./i18n"

type PathRemote = { openWorkspacePath(request: { path: string }, signal: AbortSignal): Promise<{ ok: boolean }> }

/** Only OS opening uses the native opener; previews never navigate away from Workflow. */
export function createWorkflowFileActions(remote: PathRemote) {
  return { async openDirectory(path: string, signal: AbortSignal) {
    signal.throwIfAborted()
    const result = await remote.openWorkspacePath({ path }, signal)
    if (!result.ok) throw Error(t("wfFilesOpenFailed"))
  } }
}
