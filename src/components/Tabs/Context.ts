import { createContext } from 'react'

export type TabsContextType = {
    activeTab: number | string
    activeTabIndicatorProperties: any
    onChange: (index: number | string) => void
    direction: 'vertical' | 'horizontal'
    color: 'primary' | 'secondary' | 'gray'
    onChangeIndicator: (val) => void
    onChangeActivaTab: (val: string | number) => void
}

export const TabsContext = createContext<TabsContextType | null>(null)
TabsContext.displayName = 'TabsContext'
