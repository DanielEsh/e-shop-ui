import { useEffect, useRef } from 'react'

export const Bar = ({ children }) => {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(barRef.current.querySelectorAll('[role="tab"]'))
  }, [])

  return (
    <div
      ref={barRef}
      className="flex p-2 space-x-4 bg-blue rounded-md"
    >
      {children}
    </div>
  )
}
