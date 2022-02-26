import { forwardRef, ReactNode, useState, useEffect, useRef } from 'react'
import cn from 'classnames'

import './Input.css'
import {useMergedRef} from "@/hooks/useMergeRef";

export type InputProps = {
    className?: string
    color?: 'primary' | 'secondary' | 'gray' | 'success' | 'error'
    value?: string | number
    label?: string
    placeholder?: string
    disabled?: boolean
    readOnly?: boolean
    errorField?: string | number
    onClick?: () => void
    onChange?: (event) => void
    onFocus?: () => void
    onBlur?: () => void
    autoFocus?: boolean
    name?: string
    id?: string
    type?: string
    icon?: ReactNode
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
    readOnly,
    errorField,
    onClick,
    onChange,
    onFocus,
    onBlur,
    autoFocus,
    id,
    name,
    icon,
  } = props

  const [inputValue, setInputValue] = useState<string | number>(value)

  const defaultInputRef = useRef<HTMLInputElement>(null)

  const mergedRefs = useMergedRef(ref, defaultInputRef)

  const rootClasses = cn(
    className,
    'relative w-full h-12 border rounded-md',
    {
      ['pointer-events-none opacity-50']: disabled,
      ['border-error-500']: color === 'error',
      ['border-success-500']: color === 'success',
      ['border-primary-500']: color === 'primary',
    },
  )

  const inputClasses = cn(
    'input w-full h-full px-4 border-none rounded-md placeholder-transparent focus:outline-none',
  )

  const labelClasses = cn(
    'label absolute top-2 left-4 bg-white',
    {
      ['text-error-500']: color === 'error',
      ['text-success-500']: color === 'success',
    },
  )

  const handleChange = (event) => {
    if (readOnly) return
    setInputValue(event.target.value)
    if (onChange) onChange(event)
  }

  useEffect(() => {
    if (autoFocus && defaultInputRef) {
      defaultInputRef.current.focus()
    }
  }, [])

  return (
    <>
      <div className={rootClasses}>
        <input
          className={inputClasses}
          ref={mergedRefs}
          id={id}
          type={type}
          name={name}
          value={inputValue}
          placeholder={placeholder ? placeholder : label}
          readOnly={readOnly}
          disabled={disabled}
          onChange={handleChange}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {
          icon && (
            <div className="absolute top-1/2 right-4 w-5 h-5 transform -translate-y-1/2">
              {icon}
            </div>
          )
        }

        <label
          className={labelClasses}
          htmlFor={id}
        >
          {label}
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
