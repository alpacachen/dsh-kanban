import { useCallback, useEffect, useMemo } from "react"
import type {} from "@deepseek-ai/dsh-client-ui-model-selection/client"
import type { ModelCatalog } from "@deepseek-ai/dsh-api-session-controller/types"
import { createSnapshotStore } from "@deepseek-ai/dsh-client-store"
import { ModelSelect } from "@deepseek-ai/dsh-client-ui-model-selection/src/client/ModelSelect"
import type { ModelDirectoryState } from "@deepseek-ai/dsh-client-ui-model-selection/src/client/directory"
import type { ModelSelection } from "./lib/workflow-types"
import { resolveText, useT } from "./lib/i18n"

const hostDefault = { provider: "workflow-host-default", model: "default" }

export function WorkflowStageModel({ selection, loadModels, disabled, onChange }: {
  selection?: ModelSelection; loadModels?: () => Promise<ModelCatalog>; disabled: boolean
  onChange: (selection?: ModelSelection) => Promise<void>
}) {
  const t = useT()
  const directory = useMemo(() => createSnapshotStore<ModelDirectoryState>({ current: null, routable: null, groups: [], failures: [], status: "idle", pending: null, error: null }), [])
  useEffect(() => { directory.update(state => { state.current = selection ?? hostDefault }) }, [directory, selection])
  const load = useCallback(() => {
    let alive = true
    directory.update(state => { state.status = "loading"; state.error = null })
    void (loadModels ? loadModels() : Promise.reject()).then(catalog => {
      if (alive) directory.update(state => {
        state.groups = [{ id: hostDefault.provider, name: t("wfHostDefaultModel"), models: [{ id: hostDefault.model, name: t("wfHostDefaultModel") }] }, ...catalog.groups]
        state.failures = catalog.failures; state.status = "ready"
      })
    }, () => { if (alive) directory.update(state => { state.status = "error"; state.error = t("wfModelCatalogFailed") }) })
    return () => { alive = false }
  }, [directory, loadModels, t])
  useEffect(load, [load])
  return <div className="workflow-model-trigger"><ModelSelect locked={disabled} available directory={directory} load={load}
    select={async next => {
      directory.update(state => { state.pending = next; state.status = "selecting" })
      try {
        const model = directory.getSnapshot().groups.find(group => group.id === next.provider)?.models.find(model => model.id === next.model)
        if (next.reasoningEffort === undefined && model?.reasoning?.defaultEffort !== undefined) next = { ...next, reasoningEffort: model.reasoning.defaultEffort }
        await onChange(next.provider === hostDefault.provider ? undefined : next)
        return { ok: true, value: undefined }
      }
      catch { return undefined }
      finally { directory.update(state => { state.pending = null; state.status = "ready" }) }
    }}
    resolveText={resolveText}
    t={(key, values) => {
      const translated = t(`wfNativeModel.${key}`)
      const label = translated === `wfNativeModel.${key}` ? t(key) : translated
      return Object.entries(values ?? {}).reduce((text, [name, value]) => text.split(`{${name}}`).join(String(value)), label)
    }}
    renderSlot={(_name, _owner, options) => options?.fallback}
  /></div>
}
