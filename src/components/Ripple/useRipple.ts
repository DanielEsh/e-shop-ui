import { useState, MouseEvent, useLayoutEffect } from 'react'

export const useRipple = () => {
  const [ripplePosition, setRipplePosition] = useState([])

  const applyRippleEffect = (event: MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY, currentTarget } = event

    const rippleContainer = currentTarget.getBoundingClientRect()

    const size =
          rippleContainer.width > rippleContainer.height
            ? rippleContainer.width
            : rippleContainer.height
    const x = pageX - rippleContainer.x - size / 2
    const y = pageY - rippleContainer.y - size / 2

    setRipplePosition([{
      x,
      y,
      size,
    }])
  }

  useLayoutEffect(() => {
    const isRippleEffect = ripplePosition.length
    const RippleTime = 800
    let bounce = null

    if (!isRippleEffect) clearTimeout(bounce)

    bounce = setTimeout(() => {
      setRipplePosition([])
      clearTimeout(bounce)
    }, RippleTime * 2)

    return () => clearTimeout(bounce)
  }, [ripplePosition.length])

  return {
    applyRippleEffect,
    ripplePosition,
  }
}
