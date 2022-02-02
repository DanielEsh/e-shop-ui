import { forwardRef, useEffect, useState } from 'react'
import cn from 'classnames'

export type InputProps = {
    className?: string
    color?: 'primary' | 'secondary' | 'gray' | 'success' | 'error'
    value?: string | number
    label?: string
    placeholder?: string
    disabled?: boolean
    readonly?: boolean
    required?: boolean
    onClick?: () => void
    onChange?: () => void
    onFocus?: () => void
    onBlur?: () => void
    name?: string
    id?: string
    type?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    value = '',
    label = '',
    type = 'text',
    id,
  } = props

  const [inputValue, setInputValue] = useState<string | number>('')

  const classes = cn(
    className,
    'relative w-full h-12 border rounded-md',
  )

  useEffect(() => {
    setInputValue(value)
  }, [])

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className={classes}>
      <label
        className="absolute left-0"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="w-full h-11 px-4 border-none focus:outline-none"
        ref={ref}
        id={id}
        type={type}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
})
