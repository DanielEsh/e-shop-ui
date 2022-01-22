import { useState, MouseEvent } from 'react'

type Coords = {
    x: number,
    y: number,
}

const defaultCoords: Coords = {
  x: 50,
  y: 50,
}

export const useFillHover = () => {
  const [hoverPosition, setHoverPosition] = useState(defaultCoords)

  const onFillHover = (event:MouseEvent<HTMLButtonElement>) => {
    const nativeEvent = event.nativeEvent
    const { currentTarget: container } = event

    if (!container) {
      return
    }

    const x = nativeEvent.offsetX / container.offsetWidth
    const y = (nativeEvent.offsetY + ((container.offsetWidth - container.offsetHeight) / 2)) / container.offsetWidth

    setHoverPosition({
      x: 100 * (x - .5),
      y: 100 * (y - .5),
    })
  }

  const fillHoverStyles = { transformOrigin: `${hoverPosition?.x}% ${hoverPosition?.y}%` }

  return {
    onFillHover,
    fillHoverStyles,
  }
}
