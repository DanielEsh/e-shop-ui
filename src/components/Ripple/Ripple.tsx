import React from 'react'

export const RippleContainer = ({ ripples }) => {
  return (
    <div className="absolute inset-0 z-10">
      {ripples.length > 0 &&
      ripples.map((ripple, index) => {
        return (
          <span
            className="absolute bg-currentColor rounded-full my-scale-0 animate-ripple"
            key={ index }
            style={ {
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
            } }
          />
        )
      })}
    </div>
  )
}
