import { useState, useContext, useEffect, useRef } from 'react'
import cn from 'classnames'

import { TabsContext } from '@/components/_new/Tabs/Tabs'
import { Indicator } from '@/components/_new/Tabs/Indicator'

export const Bar = ({ children }) => {
  const [boundingActiveTab, setBoundingActiveTab] = useState(null)
  const barRef = useRef<HTMLDivElement>(null)
  const tabs = useRef<any>(null)

  const { activeTab, color } = useContext(TabsContext)

  const colorsList = {
    primary: 'bg-dark-500 ',
    secondary: 'bg-dark-500  dark:bg-light-500',
  }

  const classes = cn(
    'p-2 space-x-4 rounded-md',
    colorsList[color],
  )

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
      className={classes}
    >
      <div className="relative flex">
        {boundingActiveTab && <Indicator styles={styles} />}
        {children}
      </div>
    </div>
  )
}
