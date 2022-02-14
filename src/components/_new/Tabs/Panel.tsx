import { useContext } from 'react'
import { TabsContext } from '@/components/_new/Tabs/Tabs'

export const Panel = ({ value, children }) => {
  const { activeTab } = useContext(TabsContext)

  if (activeTab !== value) {
    return <></>
  }

  return (
    <div>
      {children}
    </div>
  )
}
