import React, { forwardRef, ReactNode, useRef } from 'react'
import cn from 'classnames'

import { Loader } from '@/components/Loader/Loader'

import { useRipple, RippleContainer } from '@/components/Ripple'
import { useRippleHover, RippleHover } from '@/components/RippleHover'
import { useMergedRef } from '@/hooks/useMergeRef'

import './ripple.css'

export type ButtonProps = {
    children: ReactNode
    addonLeft?: ReactNode
    addonRight?: ReactNode
    className?: string
    color?: 'primary' | 'secondary' | 'gray' | 'success' | 'warning' | 'danger'
    size?: 'small' | 'medium' | 'large'
    type?: 'button' | 'submit'
    outline?: boolean
    disabled?: boolean
    loading?: boolean
    onMouseDown?: () => void
    onMouseUp?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onClick?: () => void
    onFocus?: () => void
    onBlur?: () => void
    id?: string
    title?: string
    role?: string
    href?: string
}

export const Button = forwardRef<HTMLElement, ButtonProps>((props, innerRef) => {
  const {
    children,
    className,
    addonLeft,
    addonRight,
    color = 'primary',
    size = 'medium',
    loading,
    disabled,
    onClick,
    onMouseLeave,
    href,
  } = props

  const rootClasses = 'relative flex justify-center items-center border rounded-md overflow-hidden ripple-hover__container focus:outline-none focus:ring '

  const colors = {
    primary: 'bg-primary-500 border-primary-500 text-white ring-offset-1 ring-primary-300',
    secondary: 'bg-dark-500 text-white border-dark-500 dark:bg-light-500 dark:text-black dark:border-light-500 ring-offset-1 ring-dark-300',
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

  const defaultRef = useRef<HTMLButtonElement>(null)
  const mergedRefs = useMergedRef(innerRef, defaultRef)

  const Tag = href ? 'a' : 'button'

  const classes = cn(
    'button',
    className,
    rootClasses,
    colors[color],
    sizes[size],
    {
      [' opacity-70 cursor-not-allowed']: disabled,
    })

  const { applyRippleEffect, ripplePosition } = useRipple()
  const { applyRippleHover } = useRippleHover(defaultRef)

  const handleClick = (event) => {
    applyRippleEffect(event)
    if (onClick) onClick()
  }

  const handleMouseEnter = (event) => {
    applyRippleHover(event)
    if (onMouseLeave) onMouseLeave()
  }

  return (
    <Tag
      ref={mergedRefs}
      {...props}
      className={classes}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      {
        !loading && addonLeft && (
          <span className="z-10 mx-1 mr-2">
            {addonLeft}
          </span>
        )
      }

      { !disabled && <RippleHover /> }
      { !disabled && <RippleContainer ripples={ripplePosition} />}

      {!loading && (
        <span className="z-10">{children}</span>
      )}

      {
        loading && <Loader />
      }

      {
        !loading && addonRight && (
          <span className="z-10 mx-1 ml-2">
            {addonRight}
          </span>
        )
      }
    </Tag>
  )
})
