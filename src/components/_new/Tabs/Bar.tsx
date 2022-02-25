import { useState, useContext, useEffect, useRef } from 'react'
import cn from 'classnames'
import { focusElement } from '@/utils/focus-management'
import { TabsContext } from '@/components/_new/Tabs/Tabs'
import { Indicator } from '@/components/_new/Tabs/Indicator'

export const Bar = ({ children }) => {
  const [boundingActiveTab, setBoundingActiveTab] = useState(null)
  const barRef = useRef<HTMLDivElement>(null)
  const tabs = useRef<any>(null)

  const { activeTab, onChange, color } = useContext(TabsContext)

  const colorsList = {
    primary: 'bg-dark-500 ',
    secondary: 'bg-dark-500  dark:bg-light-500',
  }

  const classes = cn(
    'p-2 space-x-4 rounded-md',
    colorsList[color],
  )

  let index = 0

  const getNextFocusedNodeIndex = (direction: number) => {
    index += direction
    if (index > (tabs.current.length - 1)) index = 0
    if (index < 0) index = tabs.current.length - 1

    return index
  }

  const onKeyDown = (event) => {
    let direction = 0
    if (event.code === 'ArrowRight') {
      direction += -1
    }

    if (event.code === 'ArrowLeft') {
      direction += 1
    }

    const focusIndex = getNextFocusedNodeIndex(direction)

    focusElement(tabs.current[focusIndex])
  }

  useEffect(() => {
    tabs.current = barRef.current.querySelectorAll('[role="tab"]')
    focusElement(tabs.current[activeTab])
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
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
