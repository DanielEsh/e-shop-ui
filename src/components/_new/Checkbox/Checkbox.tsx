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
  const {
    children,
  } = props

  return (
    <label className="flex">
      <span className="relative inline-flex items-center">
        <span className="relative block w-8 h-8 border">
          <input
            ref={ref}
            type="checkbox"
            className="hidden"
          />
        </span>
        <span className="ml-2 select-none">
          {children}
        </span>
      </span>
    </label>
  )
})

Checkbox.displayName = 'Checkbox'
