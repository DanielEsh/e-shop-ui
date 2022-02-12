import { ReactNode, forwardRef, useState } from 'react'
import cn from 'classnames'

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
      className="absolute top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 8"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.905.345a.75.75 0 010 1.06L5.28 7.03a.75.75 0 01-1.06 0L1.095 3.905a.75.75 0 011.06-1.06L4.75 5.439 9.845.345a.75.75 0 011.06 0z"
        fill="currentColor"
      />
    </svg>
  )
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    children,
  } = props

  const [isChecked, setIsChanged] = useState<boolean>(false)

  const handleChange = () => {
    setIsChanged(!isChecked)
  }

  const checkboxClasses = cn(
    'relative block w-8 h-8 border bg-white rounded-md group-hover:bg-primary-500 group-hover:border-primary-500',
    {
      'border-primary-500 text-black': isChecked,
    })

  return (
    <label className="group relative inline-flex items-center">
      <span className={checkboxClasses}>
        {
          isChecked && <Icon />
        }
        <input
          ref={ref}
          type="checkbox"
          className="absolute top-0 left-0 opacity-0"
          checked={isChecked}
          onChange={handleChange}
        />
      </span>
      <span className="ml-2 select-none">
        {children}
      </span>
    </label>
  )
})

Checkbox.displayName = 'Checkbox'
