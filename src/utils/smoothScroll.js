/**
 * Smooth-scrolls to a section by its id, accounting for the fixed navbar height.
 * @param {string} targetId - The id of the target element (without #)
 * @param {number} [offset=70] - Pixel offset subtracted from the top (navbar height)
 */
export function smoothScrollToId(targetId, offset = 70) {
  const el = document.getElementById(targetId)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
