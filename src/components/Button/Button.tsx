import { forwardRef, ReactNode } from 'react'

export type ButtonProps = {
    children: ReactNode
    addonLeft?: ReactNode
    addonRight?: ReactNode
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
    size?: 'small' | 'medium' | 'large'
    type?: 'button' | 'submit'
    outline?: boolean
    rounded?: boolean
    disabled?: boolean
    rippleEffect?: boolean
    loading?: boolean
    onMouseDown?: () => void
    onMouseUp?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onClick?: () => void
    onFocus?: () => void
    onBlur?: () => void
    className?: string
    id?: string
    title?: string
    role?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
  } = props

  return (
    <button ref={ref}>
      {children}
    </button>
  )
})
