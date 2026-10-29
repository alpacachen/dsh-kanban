/** Literal, case-insensitive search shared by the board and Agent tools. */
export function matchCardSearch(card, query = '') {
  const needle = query.trim().toLowerCase()
  if (!needle) return true
  return [card.id, card.title, card.note, ...(card.comments || []).map((comment) => comment.content)]
    .some((text) => typeof text === 'string' && text.toLowerCase().includes(needle))
}
