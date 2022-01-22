import { forwardRef, ReactNode } from 'react'
import cn from 'classnames'

import {
  ButtonRoot,
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
    addonLeft,
    addonRight,
    color,
    size = 'medium',
    outline,
    disabled,
  } = props

  const classes = cn({
    'is-disabled': disabled,
    'is-outline': outline,
  }, [`color--${color}`, `size--${size}`])

  return (
    <ButtonRoot
      ref={ref}
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
    </ButtonRoot>
  )
})
