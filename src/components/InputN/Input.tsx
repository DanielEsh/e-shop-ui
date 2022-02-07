import { forwardRef, useEffect, useState } from 'react'
import cn from 'classnames'

import './Input.css'

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
    placeholder = '',
    disabled,
    id,
  } = props

  const [inputValue, setInputValue] = useState<string | number>('')

  const classes = cn(
    className,
    'relative w-full h-12 border rounded-md',
    {
      ['pointer-events-none opacity-50']: disabled,
    },
  )

  useEffect(() => {
    setInputValue(value)
  }, [])

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className={classes}>
      <input
        className="input w-full h-11 px-4 border-none rounded-md placeholder-transparent focus:outline-none"
        ref={ref}
        id={id}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
      />

      <label
        className="label absolute top-2 left-4 bg-white"
        htmlFor={id}
      >
        {placeholder}
      </label>
    </div>
  )
})
