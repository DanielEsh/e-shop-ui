import { forwardRef } from 'react'

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
    value = '',
    type = 'text',
  } = props

  return (
    <input type={type} ref={ref} value={value} />
  )
})
