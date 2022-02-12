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

const Icon = () => {
  return (
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 8"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.905.345a.75.75 0 010 1.06L5.28 7.03a.75.75 0 01-1.06 0L1.095 3.905a.75.75 0 011.06-1.06L4.75 5.439 9.845.345a.75.75 0 011.06 0z"
        fill="#fff"
      />
    </svg>
  )
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    children,
  } = props

  return (
    <label className="flex">
      <span className="relative inline-flex items-center">
        <span className="relative block w-8 h-8 border bg-primary-500">
          <Icon />
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
