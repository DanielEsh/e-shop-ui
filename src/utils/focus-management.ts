export const focusElement = (element: HTMLElement) => {
  element?.focus({ preventScroll: true })
}

export enum Focus {
  /** Focus the first non-disabled element */
  First = 1 << 0,

  /** Focus the previous non-disabled element */
  Previous = 1 << 1,

  /** Focus the next non-disabled element */
  Next = 1 << 2,

  /** Focus the last non-disabled element */
  Last = 1 << 3,

  /** Wrap tab around */
  WrapAround = 1 << 4,

  /** Prevent scrolling the focusable elements into view */
  NoScroll = 1 << 5,
}

export enum FocusResult {
  /** Something went wrong while trying to focus. */
  Error,

  /** When `Focus.WrapAround` is enabled, going from position `N` to `N+1` where `N` is the last index in the array, then we overflow. */
  Overflow,

  /** Focus was successful. */
  Success,

  /** When `Focus.WrapAround` is enabled, going from position `N` to `N-1` where `N` is the first index in the array, then we underflow. */
  Underflow,
}

enum Direction {
  Previous = -1,
  Next = 1,
}

let focusableSelector = [
  '[contentEditable=true]',
  '[tabindex]',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
]
  .join(',')

export function getFocusableElements(container: HTMLElement | null = document.body) {
  if (container == null) return []

  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelector))
}

export function focusIn(container: HTMLElement | HTMLElement[], focus: Focus) {
  let elements = Array.isArray(container)
    ? container.slice().sort((a, z) => {
      let position = a.compareDocumentPosition(z)

      if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1
      if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1

      return 0
    })
    : getFocusableElements(container)
  let active = document.activeElement as HTMLElement

  let direction = (() => {
    if (focus & (Focus.First | Focus.Next)) return Direction.Next
    if (focus & (Focus.Previous | Focus.Last)) return Direction.Previous

    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last')
  })()

  let startIndex = (() => {
    if (focus & Focus.First) return 0
    if (focus & Focus.Previous) return Math.max(0, elements.indexOf(active)) - 1
    if (focus & Focus.Next) return Math.max(0, elements.indexOf(active)) + 1
    if (focus & Focus.Last) return elements.length - 1

    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last')
  })()

  let focusOptions = focus & Focus.NoScroll ? { preventScroll: true } : {}

  let offset = 0
  let total = elements.length
  let next = undefined
  do {
    if (offset >= total || offset + total <= 0) return FocusResult.Error

    let nextIdx = startIndex + offset

    if (focus & Focus.WrapAround) {
      nextIdx = (nextIdx + total) % total
    } else {
      if (nextIdx < 0) return FocusResult.Underflow
      if (nextIdx >= total) return FocusResult.Overflow
    }

    next = elements[nextIdx]

    next?.focus(focusOptions)

    offset += direction
  } while (next !== document.activeElement)

  if (!next.hasAttribute('tabindex')) next.setAttribute('tabindex', '0')

  return FocusResult.Success
}
