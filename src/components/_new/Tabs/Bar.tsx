import { useState, useContext, useEffect, useRef } from 'react'

import { TabsContext } from '@/components/_new/Tabs/Tabs'

export const Bar = ({ children }) => {
  const [boundingActiveTab, setBoundingActiveTab] = useState(null)
  const barRef = useRef<HTMLDivElement>(null)
  const tabs = useRef<any>(null)

  const { activeTab } = useContext(TabsContext)

  useEffect(() => {
    tabs.current = barRef.current.querySelectorAll('[role="tab"]')
  }, [])

  useEffect(() => {
    setBoundingActiveTab(tabs.current[activeTab].getBoundingClientRect())
  }, [activeTab])

  const styles = {
    top: boundingActiveTab?.top - 16,
    left: boundingActiveTab?.left - 16,
    width: boundingActiveTab?.width,
    height: boundingActiveTab?.height,
  }

  return (
    <div
      ref={barRef}
      className="relative flex p-2 space-x-4 bg-dark-500 rounded-md"
    >
      {boundingActiveTab && (
        <div
          className="absolute rounded-md bg-primary-500 transition-all duration-300"
          style={styles}
        />)}

      {children}
    </div>
  )
}
