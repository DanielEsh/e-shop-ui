import { ReactNode, forwardRef } from 'react'

export interface CheckboxProps {
    children: ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  return (
    <div ref={ref}>
      {props.children}
    </div>
  )
})
