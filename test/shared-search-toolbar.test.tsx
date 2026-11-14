import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { SearchToolbar } from "../src/client/components/ui/search-toolbar"
import { FilterMenu } from "../src/client/components/ui/filter-menu"
import { t } from "../src/client/lib/i18n"

function Example() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("")
  return <SearchToolbar query={query} onQueryChange={setQuery} label="Search" placeholder="Search items">
    <FilterMenu label="Filter" value={filter} onValueChange={setFilter} options={[{ value: "", label: "All" }, { value: "published", label: "Published", count: 2 }]} />
  </SearchToolbar>
}

describe("shared search and filter controls", () => {
  it("clears the controlled query without changing its filter", async () => {
    const user = userEvent.setup()
    render(<Example />)
    const search = screen.getByRole("searchbox", { name: "Search" })
    await user.type(search, "Report")
    await user.click(screen.getByRole("button", { name: t("clearSearch") }))
    expect((search as HTMLInputElement).value).toBe("")
    expect(screen.getByRole("button", { name: "Filter" }).getAttribute("aria-pressed")).toBe("false")
  })

  it("supports keyboard selection, checked state, Escape and restored trigger focus", async () => {
    const user = userEvent.setup()
    render(<Example />)
    const trigger = screen.getByRole("button", { name: "Filter" })
    trigger.focus()
    await user.keyboard("{Enter}")
    expect((await screen.findByRole("menuitemradio", { name: "All" })).getAttribute("aria-checked")).toBe("true")
    await user.keyboard("{End}{Enter}")
    await waitFor(() => expect(screen.queryByRole("menu")).toBeNull())
    expect(trigger.getAttribute("aria-pressed")).toBe("true")
    await user.keyboard("{Enter}")
    expect((await screen.findByRole("menuitemradio", { name: /Published/ })).getAttribute("aria-checked")).toBe("true")
    await user.keyboard("{Escape}")
    await waitFor(() => expect(document.activeElement).toBe(trigger))
    expect(screen.queryByRole("menu")).toBeNull()
  })
})
