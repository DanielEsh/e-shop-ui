import { forwardRef, useState } from 'react'
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
    errorField?: string | number
    success?: boolean
    successField?: string | number,
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
    color,
    value = '',
    label = '',
    type = 'text',
    placeholder = '',
    disabled,
    readonly,
    errorField,
    id,
  } = props

  const [inputValue, setInputValue] = useState<string | number>(value)

  const rootClasses = cn(
    className,
    'relative w-full h-12 border rounded-md',
    {
      ['pointer-events-none opacity-50']: disabled,
      ['border-error-500']: color === 'error',
    },
  )

  const inputClasses = cn(
    'input w-full h-11 px-4 border-none rounded-md placeholder-transparent focus:outline-none',
  )

  const labelClasses = cn(
    'label absolute top-2 left-4 bg-white',
    {
      ['text-error-500']: color === 'error',
    },
  )

  const handleChange = (event) => {
    if (readonly) return
    setInputValue(event.target.value)
  }

  return (
    <>
      <div className={rootClasses}>
        <input
          className={inputClasses}
          ref={ref}
          id={id}
          type={type}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
        />

        <label
          className={labelClasses}
          htmlFor={id}
        >
          {placeholder}
        </label>
      </div>
      {
        color === 'error' && errorField && (
          <div className="text-h6 text-error-500">
            {errorField}
          </div>
        )
      }
    </>
  )
})
