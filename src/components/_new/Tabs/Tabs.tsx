import {
  ReactNode,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  createContext,
  useState,
} from 'react'

import { Bar } from '@/components/_new/Tabs/Bar'
import { Tab } from '@/components/_new/Tabs/Tab'
import { Panels } from '@/components/_new/Tabs/Panels'
import { Panel } from '@/components/_new/Tabs/Panel'

export type TabsProps = {
    children: ReactNode
    direction?: 'vertical' | 'horizontal'
    activeTab: number | string
    onChange?: (index: number) => void
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

export const TabsContext = createContext(undefined)

export const TabsRoot = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  // const [tabs, setTabs] = useState(null)

  const {
    children,
    activeTab,
    onChange,
  } = props

  const context = {
    activeTab,
    onChange,
  }

  return (
    <TabsContext.Provider value={context}>
      <div ref={ref}>
        {children}
      </div>
    </TabsContext.Provider>

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
