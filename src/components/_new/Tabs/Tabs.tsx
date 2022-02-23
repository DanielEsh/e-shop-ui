import {
  ReactNode,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  createContext,
} from 'react'

import { Bar } from '@/components/_new/Tabs/Bar'
import { Tab } from '@/components/_new/Tabs/Tab'
import { Panel } from '@/components/_new/Tabs/Panel'

export type TabsProps = {
    children: ReactNode
    direction?: 'vertical' | 'horizontal'
    activeTab: number | string
    color?: 'primary' | 'secondary' | 'gray'
    onChange?: (index: number) => void
}

interface ITabs
    extends ForwardRefExoticComponent<
        TabsProps & RefAttributes<HTMLDivElement>
        > {
  Bar: typeof Bar;
  Tab: typeof Tab;
  Panel: typeof Panel;
}

export const TabsContext = createContext(undefined)

export const TabsRoot = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  // const [tabs, setTabs] = useState(null)

  const {
    children,
    activeTab,
    onChange,
    color = 'primary',
  } = props

  const context = {
    activeTab,
    onChange,
    color: color,
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
  Panel: Panel,
} as ITabs
