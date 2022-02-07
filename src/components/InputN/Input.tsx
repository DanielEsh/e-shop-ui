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
    onClick?: () => void
    onChange?: (event) => void
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
    onClick,
    onChange,
    onFocus,
    onBlur,
    id,
    name,
  } = props

  const [inputValue, setInputValue] = useState<string | number>(value)

  const rootClasses = cn(
    className,
    'relative w-full h-12 border rounded-md',
    {
      ['pointer-events-none opacity-50']: disabled,
      ['border-error-500']: color === 'error',
      ['border-success-500']: color === 'success',
    },
  )

  const inputClasses = cn(
    'input w-full h-11 px-4 border-none rounded-md placeholder-transparent focus:outline-none',
  )

  const labelClasses = cn(
    'label absolute top-2 left-4 bg-white',
    {
      ['text-error-500']: color === 'error',
      ['text-success-500']: color === 'success',
    },
  )

  const handleChange = (event) => {
    if (readonly) return
    setInputValue(event.target.value)
    if (onChange) onChange(event)
  }

  return (
    <>
      <div className={rootClasses}>
        <input
          className={inputClasses}
          ref={ref}
          id={id}
          type={type}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
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
