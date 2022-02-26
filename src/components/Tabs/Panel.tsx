import { useContext } from 'react'
import { TabsContext } from '@/components/Tabs/Tabs'

export const Panel = ({ value, children }) => {
  const { activeTab } = useContext(TabsContext)

  if (activeTab !== value) {
    return <></>
  }

  return (
    <>
      {children}
    </>
  )
}
