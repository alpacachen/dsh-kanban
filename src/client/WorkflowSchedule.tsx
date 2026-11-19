import { useEffect, useState, type FormEvent } from "react"
import { Modal } from "@deepseek-ai/dsh-client-ui-primitives"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { useT } from "./lib/i18n"
import { workflowErrorText } from "./lib/workflow-errors"
import { workflowScheduleTime } from "./lib/workflow-presentation"
import type { Workflow, WorkflowCommand, WorkflowSchedule as Schedule, WorkflowScheduleConfig } from "./lib/workflow-types"

export function WorkflowSchedule({ flow, command, busy, disconnected, onClose, onSaved, onDirtyChange }: {
  flow: Workflow; command: WorkflowCommand; busy: boolean; disconnected: boolean
  onClose: () => void; onSaved: (flow: Workflow) => void; onDirtyChange: (dirty: boolean) => void
}) {
  const t = useT()
  const [revision] = useState(flow.scheduleRevision ?? 0)
  const [config, setConfig] = useState<WorkflowScheduleConfig>(() => {
    const { repeat = "daily", time = "09:00", timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "UTC",
      date = "", weekdays = [1, 2, 3, 4, 5] } = flow.schedule ?? {}
    return { repeat, time, timeZone, date, weekdays }
  })
  const [dirty, setDirty] = useState(false)
  const [error, setError] = useState<unknown>(null)
  const disabled = busy || disconnected
  useEffect(() => { onDirtyChange(dirty); return () => onDirtyChange(false) }, [dirty, onDirtyChange])

  function close() {
    if (!busy && (!dirty || window.confirm(t("wfLeaveConfirm")))) onClose()
  }

  function change(patch: Partial<WorkflowScheduleConfig>) {
    setConfig(previous => ({ ...previous, ...patch }))
    setDirty(true)
    setError(null)
  }

  async function save(schedule: WorkflowScheduleConfig | null) {
    if (disabled) return
    try {
      const result = await command<Workflow>("saveWorkflowSchedule", { workflowId: flow.id, expectedRevision: revision, schedule })
      onSaved(result)
      onClose()
    } catch (cause) { setError(cause) }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { date, weekdays, ...settings } = config
    void save({ ...settings, ...(settings.repeat === "once" ? { date } : {}), ...(settings.repeat === "weekly" ? { weekdays } : {}) })
  }

  return <Modal open title={t("wfSchedule")} closeLabel={t("close")} onClose={close}
    className="kanban-root workflow-shell workflow-schedule-modal" contentClassName="workflow-modal-content">
    <form className="workflow-root workflow-schedule-form" onSubmit={submit}>
      <div className="workflow-schedule-timing">
        <label><span>{t("wfScheduleRepeat")}</span><select className="workflow-select" data-modal-autofocus value={config.repeat} disabled={disabled}
          onChange={event => change({ repeat: event.target.value as WorkflowScheduleConfig["repeat"] })}>
          <option value="once">{t("wfScheduleOnce")}</option><option value="daily">{t("wfScheduleDaily")}</option><option value="weekly">{t("wfScheduleWeekly")}</option>
        </select></label>
        {config.repeat === "once" && <label><span>{t("wfScheduleDate")}</span><Input type="date" value={config.date} required disabled={disabled}
          onChange={event => change({ date: event.target.value })} /></label>}
        <label><span>{t("wfScheduleTime")}</span><Input type="time" value={config.time} required disabled={disabled}
          onChange={event => change({ time: event.target.value })} /></label>
      </div>
      {config.repeat === "weekly" && <fieldset className="workflow-schedule-days" disabled={disabled}>
        <legend>{t("wfScheduleWeekdays")}</legend>
        {t("wfScheduleDayNames").split("|").map((day, index) => {
          const weekday = index + 1
          const selected = config.weekdays ?? []
          return <label key={weekday}><input type="checkbox" checked={selected.includes(weekday)} onChange={event =>
            change({ weekdays: event.target.checked ? [...selected, weekday] : selected.filter(value => value !== weekday) })} />{day}</label>
        })}
      </fieldset>}
      <p className="workflow-muted">{t("wfScheduleHost").replace("{zone}", config.timeZone)}</p>
      {error != null && <p className="workflow-error" role="alert">{workflowErrorText(error)}</p>}
      <div className="workflow-schedule-footer">
        {flow.schedule && <Button type="button" variant="ghost" className="kanban-danger-button" size="sm" disabled={disabled} onClick={() => void save(null)}>{t("wfScheduleRemove")}</Button>}
        <div className="workflow-actions"><Button type="button" variant="ghost" size="sm" disabled={busy} onClick={close}>{t("cancel")}</Button>
          <Button type="submit" size="sm" disabled={disabled || config.repeat === "weekly" && !config.weekdays?.length}>{t("save")}</Button></div>
      </div>
    </form>
  </Modal>
}

export function WorkflowScheduleStatus({ schedule }: { schedule: Schedule }) {
  const t = useT()
  const timeText = (at: number, timeZone: string) => workflowScheduleTime(at, timeZone, t("dateLocale"))
  const { last } = schedule
  return <div className="workflow-muted workflow-schedule-status">
    <p>{schedule.nextAt === null ? t("wfScheduleEnded")
      : t("wfScheduleNext").replace("{time}", timeText(schedule.nextAt, schedule.timeZone))} · {schedule.timeZone}</p>
    {last && last.outcome !== "created" && <p>
      {t(last.outcome === "missed" ? "wfScheduleMissed" : "wfScheduleFailed").replace("{time}", timeText(last.scheduledAt, last.timeZone))}
      {last.errorCode && <> {workflowErrorText({ code: last.errorCode })}</>}
    </p>}
  </div>
}
