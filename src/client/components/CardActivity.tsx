import { Clock } from "lucide-react"
import { describeActivity, formatTime } from "@/lib/activity"
import { useT } from "@/lib/i18n"
import type { Activity } from "@/lib/types"

interface CardActivityProps {
  activities: Activity[]
}

/** 卡片详情里的活动时间线：按时间倒序展示每一条操作记录。 */
export function CardActivity({ activities }: CardActivityProps) {
  const t = useT()

  if (activities.length === 0) {
    return <p className="kanban-muted-small">{t("activityEmpty")}</p>
  }

  // 后端按时间正序追加，倒序后即"最新的在前"
  const items = [...activities].reverse()

  return (
    <ol className="kanban-activity-list">
      {items.map((a) => {
        const isAgent = a.source === "agent"
        return (
          <li key={a.id} className="kanban-activity-item">
            <span
              className={`kanban-activity-dot ${isAgent ? "is-agent" : "is-human"}`}
            />
            <div className="kanban-activity-meta">
              <Clock className="kanban-tiny-icon" />
              <time className="kanban-tabular">{formatTime(a.ts)}</time>
              <span>·</span>
              <span className={`kanban-activity-actor ${isAgent ? "is-agent" : "is-human"}`}>
                {isAgent ? t("actorAgent") : t("actorHuman")}
              </span>
            </div>
            <p className="kanban-activity-description">{describeActivity(a, t)}</p>
          </li>
        )
      })}
    </ol>
  )
}
