import { describeActivity, formatTime } from "@/lib/activity"
import { useT } from "@/lib/i18n"
import type { Activity } from "@/lib/types"

interface CardActivityProps {
  activities: Activity[]
}

/** 卡片详情里的紧凑活动列表：最新记录在前，内容与时间保持在同一视觉行。 */
export function CardActivity({ activities }: CardActivityProps) {
  const t = useT()

  if (activities.length === 0) {
    return <p className="kanban-muted-small">{t("activityEmpty")}</p>
  }

  // 后端按时间正序追加，倒序后即“最新的在前”。
  const items = [...activities].reverse()

  return (
    <ol className="kanban-activity-list">
      {items.map((activity) => {
        const isAgent = activity.source === "agent"
        const actor = isAgent ? t("actorAgent") : t("actorHuman")
        return (
          <li key={activity.id} className="kanban-activity-item">
            <span
              className={`kanban-activity-dot ${isAgent ? "is-agent" : "is-human"}`}
              aria-hidden="true"
            />
            <p className="kanban-activity-description">
              <span className={`kanban-activity-actor ${isAgent ? "is-agent" : "is-human"}`}>
                {actor}
              </span>{" "}
              {describeActivity(activity, t)}
            </p>
            <time
              className="kanban-activity-time kanban-tabular"
              dateTime={activity.ts}
              title={formatTime(activity.ts)}
            >
              {formatTime(activity.ts)}
            </time>
          </li>
        )
      })}
    </ol>
  )
}
