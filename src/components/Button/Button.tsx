import { forwardRef, ReactNode } from 'react'
import cn from 'classnames'

import {
  ButtonAddonLeft,
  ButtonAddonRight,
} from '@/components/Button/Button.styled'

export type ButtonProps = {
    children: ReactNode
    addonLeft?: ReactNode
    addonRight?: ReactNode
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
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
  } = props

  const rootClasses = 'flex justify-center items-center rounded-md'

  const colors = {
    primary: 'bg-primary-500 text-white border border-primary-500',
    dark: 'bg-dark-500 text-white border border-dark-500',
    info: 'bg-gray-100 text-dark border border-gray-100',
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
      // ['h-5 bg-blue-300 p-5']: size === 'medium',
    })

  return (
    <button
      ref={ref}
      {...props}
      className={classes}
    >
      {
        addonLeft && (
          <ButtonAddonLeft>
            {addonLeft}
          </ButtonAddonLeft>
        )
      }

      {children}

      {
        addonRight && (
          <ButtonAddonRight>
            {addonRight}
          </ButtonAddonRight>
        )
      }
    </button>
  )
})
