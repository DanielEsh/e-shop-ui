import {
  ReactNode,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
} from 'react'

import { Bar } from '@/components/_new/Tabs/Bar'
import { Tab } from '@/components/_new/Tabs/Tab'
import { Panels } from '@/components/_new/Tabs/Panels'
import { Panel } from '@/components/_new/Tabs/Panel'

export type TabsProps = {
    children: ReactNode,
}

interface ITabs
    extends ForwardRefExoticComponent<
        TabsProps & RefAttributes<HTMLDivElement>
        > {
  Bar: typeof Bar;
  Tab: typeof Tab;
  Panels: typeof Panels;
  Panel: typeof Panel;
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
  Tab: Tab,
  Panels: Panels,
  Panel: Panel,
} as ITabs
