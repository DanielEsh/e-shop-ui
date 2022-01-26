import { forwardRef, ReactNode } from 'react'
import cn from 'classnames'

export type ButtonProps = {
    children: ReactNode
    addonLeft?: ReactNode
    addonRight?: ReactNode
    color?: 'primary' | 'secondary' | 'gray' | 'success' | 'warning' | 'danger'
    size?: 'small' | 'medium' | 'large'
    type?: 'button' | 'submit'
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
    className,
    addonLeft,
    addonRight,
    color = 'primary',
    size = 'medium',
    disabled,
  } = props

  const rootClasses = 'flex justify-center items-center border rounded-md focus:outline-none focus:ring'

  const colors = {
    primary: 'bg-primary-500 border-primary-500 text-white ring-offset-1 ring-primary-300',
    secondary: `
        bg-dark-500 text-white border-dark-500
        dark:bg-light-500 dark:text-black dark:border-light-500
        ring-offset-1 ring-dark-300`,
    gray: 'bg-gray-100 text-black border-gray-100 ring-offset-1 ring-gray-300',
    success: 'bg-success border-success text-white ring-offset-1 ring-success',
    warning: 'bg-warning border-warning text-white ring-offset-1 ring-warning',
    danger: 'bg-danger border-danger text-white ring-offset-1 ring-danger',
  }

  const sizes = {
    small: 'py-1 px-2',
    medium: 'py-2 px-4',
    large: 'py-4 px-8',
  }

  const classes = cn(
    className,
    rootClasses,
    colors[color],
    sizes[size],
    {
      [' opacity-70 cursor-not-allowed']: disabled,
    })

  return (
    <button
      ref={ref}
      {...props}
      className={classes}
    >
      {
        addonLeft && (
          <span className="mx-1 mr-2">
            {addonLeft}
          </span>
        )
      }

      {children}

      {
        addonRight && (
          <span className="mx-1 ml-2">
            {addonRight}
          </span>
        )
      }
    </button>
  )
})
