import {
  ReactNode,
  forwardRef,
  useState,
} from 'react'
import { TabsContext } from '@/components/Tabs/Context'
import { Bar } from '@/components/Tabs/Bar'
import { Tab } from '@/components/Tabs/Tab'
import { Panel } from '@/components/Tabs/Panel'

export type TabsProps = {
    children: ReactNode
    direction?: 'vertical' | 'horizontal'
    defaultActiveTab: number | string
    color?: 'primary' | 'secondary' | 'gray'
    onChange?: (index: number | string) => void
}

export type ActiveTabIndicatorPropertiesTabType = {
  top: number
  left: number
  width: number
  height: number
}

export const TabsRoot = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children,
    defaultActiveTab,
    onChange,
    color = 'primary',
    direction = 'horizontal',
  } = props

  const [activeTabIndicatorProperties, setActiveTabIndicatorProperties] = useState<ActiveTabIndicatorPropertiesTabType | null>(null)
  const [activeTabValue, setActiveTabValue] = useState<string | number>(defaultActiveTab)

  const onChangeIndicator = (val: ActiveTabIndicatorPropertiesTabType) => {
    setActiveTabIndicatorProperties(val)
  }

  const onChangeActivaTab = (val: string | number) => {
    setActiveTabValue(val)
    onChange(val)
  }

  const context = {
    activeTab: activeTabValue,
    onChange,
    color: color,
    direction: direction,
    activeTabIndicatorProperties: activeTabIndicatorProperties,
    onChangeIndicator,
    onChangeActivaTab,
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
