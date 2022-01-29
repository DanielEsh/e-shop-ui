import { MutableRefObject } from 'react'

export const useRippleHover = <T extends HTMLElement = HTMLElement>(
  ref: MutableRefObject<T>,
) => {
  const applyRippleHover = (event) => {
    const { pageX, pageY } = event

    const x = pageX - ref.current.offsetLeft
    const y = pageY - ref.current.offsetTop

    ref.current.style.setProperty('--x', x + 'px')
    ref.current.style.setProperty('--y', y + 'px')
  }

  return {
    applyRippleHover,
  }
}
