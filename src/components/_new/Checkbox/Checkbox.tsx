import { ReactNode, forwardRef } from 'react'

export interface CheckboxProps {
    children: ReactNode
    label?: string
    className?: string
    color?: 'primary' | 'secondary' | 'gray' | 'success' | 'error'
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    checked?: boolean
    onChange?: (event) => void
    onClick?: () => void
    onFocus?: () => void
    onBlur?: () => void
    id?: string
    name?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  return (
    <div className="flex items-center">
      <input
        ref={ref}
        type="checkbox"
      />
      <div>
        {props.children}
      </div>
    </div>
  )
})
