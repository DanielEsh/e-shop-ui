import {
  ReactNode,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
} from 'react'

import { Bar } from '@/components/_new/Tabs/Bar'

export type TabsProps = {
    children: ReactNode,
}

interface ITabs
    extends ForwardRefExoticComponent<
        TabsProps & RefAttributes<HTMLDivElement>
        > {
  Bar: typeof Bar;
}

export const TabsRoot = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children,
  } = props

  return (
    <div ref={ref}>
      {children}
    </div>
  )
})

TabsRoot.displayName = 'Tabs'

export const Tabs = {
  ...TabsRoot,
  Bar: Bar,
} as ITabs
