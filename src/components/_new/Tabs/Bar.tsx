import { useState, useContext, useEffect, useRef } from 'react'

import { TabsContext } from '@/components/_new/Tabs/Tabs'
import { Indicator } from '@/components/_new/Tabs/Indicator'

export const Bar = ({ children }) => {
  const [boundingActiveTab, setBoundingActiveTab] = useState(null)
  const barRef = useRef<HTMLDivElement>(null)
  const tabs = useRef<any>(null)

  const { activeTab } = useContext(TabsContext)

  useEffect(() => {
    tabs.current = barRef.current.querySelectorAll('[role="tab"]')
  }, [])

  useEffect(() => {
    setBoundingActiveTab({
      width: tabs.current[activeTab].offsetWidth,
      left: tabs.current[activeTab].offsetLeft,
    })
  }, [activeTab])

  const styles = {
    left: boundingActiveTab?.left,
    width: boundingActiveTab?.width,
  }

  return (
    <div
      ref={barRef}
      className="p-2 space-x-4 bg-dark-500 rounded-md"
    >
      <div className="relative flex">
        {boundingActiveTab && <Indicator styles={styles} />}
        {children}
      </div>
    </div>
  )
}
