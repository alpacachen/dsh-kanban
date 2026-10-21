import { useEffect, useState } from "react"
import type { Card } from "./types"

export type DueDateFilter = "" | "today" | "overdue"

/** Calendar dates stay local; converting them to ISO timestamps can shift the day. */
export function localDate(date = new Date(), offset = 0): string {
  const day = new Date(date)
  day.setDate(day.getDate() + offset)
  return `${String(day.getFullYear()).padStart(4, "0")}-${String(day.getMonth() + 1).padStart(2, "0")}-${String(day.getDate()).padStart(2, "0")}`
}

export function overdueDays(dueDate: string, today: string): number {
  const dayNumber = (value: string) => {
    const [year, month, day] = value.split("-").map(Number)
    const date = new Date(0)
    date.setUTCFullYear(year, month - 1, day)
    return date.getTime() / 86400000
  }
  return dayNumber(today) - dayNumber(dueDate)
}

export function matchesDueDate(card: Pick<Card, "dueDate" | "columnId">, filter: DueDateFilter, completedColumnId: string | null, today: string): boolean {
  if (!filter) return true
  if (!card.dueDate || card.columnId === completedColumnId) return false
  return filter === "today" ? card.dueDate === today : card.dueDate < today
}

export function dateLabel(dueDate: string, today: string, t: (key: string) => string): string {
  const [year, month, day] = dueDate.split("-")
  return t(year === today.slice(0, 4) ? "shortDate" : "yearDate")
    .replace("{year}", year).replace("{month}", String(Number(month))).replace("{day}", String(Number(day)))
}

/** One board-wide clock also catches up after sleep or a background tab resumes. */
export function useLocalDate(): string {
  const [today, setToday] = useState(() => localDate())
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const refresh = () => {
      clearTimeout(timer)
      const now = new Date()
      setToday(localDate(now))
      const midnight = new Date(now)
      midnight.setHours(24, 0, 0, 0)
      timer = setTimeout(refresh, midnight.getTime() - now.getTime() + 100)
    }
    refresh()
    window.addEventListener("focus", refresh)
    document.addEventListener("visibilitychange", refresh)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("focus", refresh)
      document.removeEventListener("visibilitychange", refresh)
    }
  }, [])
  return today
}
