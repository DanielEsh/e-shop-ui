import { forwardRef, ReactNode } from 'react'

export type InputProps = {
    children: ReactNode,
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    children,
  } = props

  return (
    <div ref={ref}>
      {children}
    </div>
  )
})
