import { forwardRef } from 'react'

export type ButtonProps = {
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
    size?: 'small' | 'medium' | 'large';
    children: string;
    outline?: boolean,
    rounded?: boolean,
    disabled?: boolean,
    type?: 'button' | 'submit',
    rippleEffect?: boolean,
    onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button ref={ref}>
      {props}
    </button>
  )
})
