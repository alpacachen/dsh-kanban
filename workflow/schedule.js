import { createHash } from 'node:crypto'

const DAY = 86_400_000
const SCHEDULE_ACTOR = Object.freeze({ kind: 'system', id: 'workflow-schedule' })

export function nextScheduleTime({ repeat, date, time, weekdays, timeZone }, after) {
  const format = new Intl.DateTimeFormat('en', {
    timeZone, calendar: 'iso8601', numberingSystem: 'latn', hourCycle: 'h23',
    year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
  })
  const wallTime = instant => {
    const { year, month, day, hour, minute, second } = Object.fromEntries(format.formatToParts(instant).map(({ type, value }) => [type, Number(value)]))
    return Date.UTC(year, month - 1, day, hour, minute, second)
  }
  const firstDay = repeat === 'once' ? Date.parse(`${date}T00:00:00Z`) : Math.floor(wallTime(after) / DAY) * DAY
  const [hour, minute] = time.split(':').map(Number)
  // Search past a skipped local hour or day. During a clock overlap use the earlier instant.
  for (let offset = 0; offset < (repeat === 'once' ? 1 : 15); offset++) {
    const day = firstDay + offset * DAY
    if (repeat === 'weekly' && !weekdays.includes((new Date(day).getUTCDay() + 6) % 7 + 1)) continue
    const wall = day + (hour * 60 + minute) * 60_000
    const offsets = [wall - DAY, wall, wall + DAY].map(instant => wallTime(instant) - instant)
    const instant = Math.min(...offsets.map(zoneOffset => wall - zoneOffset).filter(candidate => wallTime(candidate) === wall))
    if (Number.isFinite(instant) && instant > after) return instant
  }
  return null
}

export function createWorkflowScheduler({ store, createTask, onError = () => {} }) {
  let startedAt, timer, running
  let stopped = false
  const abort = new AbortController()

  async function dispatchDue() {
    const now = Date.now()
    for (const schedule of store.listDueWorkflowSchedules(now)) {
      if (stopped) break
      const occurrence = { ...schedule, nextAt: nextScheduleTime(schedule, now) }
      if (schedule.scheduledAt <= startedAt || now - schedule.scheduledAt >= 60_000) {
        store.finishWorkflowSchedule(occurrence, 'missed')
        continue
      }
      const requestId = `schedule:${createHash('sha256').update(`${schedule.workflowId}:${schedule.scheduledAt}`).digest('hex')}`
      try {
        await createTask({ requestId, workflowId: schedule.workflowId, workspaceId: schedule.workspaceId, text: schedule.text ?? '' },
          SCHEDULE_ACTOR, occurrence, abort.signal)
      } catch (error) {
        if (stopped) break
        if (store.finishWorkflowSchedule(occurrence, 'failed', error?.workflowValidation || /^WF_(MODEL_|WORKSPACE_)/.test(error?.code ?? '') ? error.code : null)) onError(error)
      }
    }
  }

  function wake(minDelay = 0) {
    if (stopped || startedAt === undefined || running) return
    clearTimeout(timer)
    let delay
    try {
      const due = store.nextWorkflowScheduleTime()
      if (due == null) return
      delay = Math.max(minDelay, due - Date.now())
    } catch (error) {
      onError(error)
      delay = 1000
    }
    timer = setTimeout(() => {
      let retryDelay = 0
      running = dispatchDue().catch(error => { onError(error); retryDelay = 1000 }).finally(() => {
        running = null
        wake(retryDelay)
      })
    // Recheck wall time while armed so a system clock change cannot defer a task until the old deadline.
    }, Math.min(delay, 30_000))
    timer.unref?.()
  }

  return {
    start() { startedAt = Date.now(); wake() },
    wake,
    async dispose() { stopped = true; clearTimeout(timer); abort.abort(); await running },
  }
}
