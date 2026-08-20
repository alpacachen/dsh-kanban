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
    return <p className="text-xs text-muted-foreground">{t("activityEmpty")}</p>
  }

  // 后端按时间正序追加，倒序后即"最新的在前"
  const items = [...activities].reverse()

  return (
    <ol className="relative space-y-3.5 border-l border-[var(--dsw-alias-border-l2)] pl-4">
      {items.map((a) => {
        const isAgent = a.source === "agent"
        return (
          <li key={a.id} className="relative">
            <span
              className={`absolute -left-[21px] top-1.5 h-2 w-2 rounded-full ${
                isAgent ? "bg-sky-500" : "bg-emerald-500"
              }`}
            />
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <Clock className="h-3 w-3" />
              <time className="tabular-nums">{formatTime(a.ts)}</time>
              <span>·</span>
              <span className={`font-medium ${isAgent ? "text-sky-500" : "text-emerald-500"}`}>
                {isAgent ? t("actorAgent") : t("actorHuman")}
              </span>
            </div>
            <p className="mt-1 text-[13px] leading-snug text-foreground">{describeActivity(a, t)}</p>
          </li>
        )
      })}
    </ol>
  )
}
