import cn from 'classnames'

export const RippleHover = ({ color }) => {
  const colors = {
    primary: 'bg-primary-200',
    secondary: 'bg-dark-300',
    gray: 'bg-gray-300',
    success: 'bg-success-400',
    error: 'bg-error-400',
  }

  const classes = cn(
    'absolute top-0 left-0 w-full h-full rounded-full ripple-hover',
    colors[color],
  )

  return (
    <div className={classes} />
  )
}
