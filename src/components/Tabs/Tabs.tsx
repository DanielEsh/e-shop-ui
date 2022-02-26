import {
  ReactNode,
  forwardRef,
} from 'react'
import { TabsContext } from '@/components/Tabs/Context'
import { Bar } from '@/components/Tabs/Bar'
import { Tab } from '@/components/Tabs/Tab'
import { Panel } from '@/components/Tabs/Panel'

export type TabsProps = {
    children: ReactNode
    direction?: 'vertical' | 'horizontal'
    activeTab: number | string
    color?: 'primary' | 'secondary' | 'gray'
    onChange?: (index: number | string) => void
}

export const TabsRoot = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children,
    activeTab,
    onChange,
    color = 'primary',
    direction = 'horizontal',
  } = props

  const context = {
    activeTab,
    onChange,
    color: color,
    direction: direction,
    activeTabIndicatorProperties: null,
  }

  return (
    <TabsContext.Provider
      value={context}
    >
      <div ref={ref}>
        {children}
      </div>
    </TabsContext.Provider>
  )
})

TabsRoot.displayName = 'Tabs'

export const Tabs = Object.assign(TabsRoot, {
  Bar: Bar,
  Tab: Tab,
  Panel: Panel,
})
