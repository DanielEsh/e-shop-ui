import {
  ReactNode,
  forwardRef,
} from 'react'

export type TabsProps = {
    children: ReactNode,
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children,
  } = props

  return (
    <div ref={ref}>
      {children}
    </div>
  )
})

Tabs.displayName = 'Tabs'
