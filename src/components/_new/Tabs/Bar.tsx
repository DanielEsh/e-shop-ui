import { useState, useContext, useEffect, useRef } from 'react'
import cn from 'classnames'
import { focusIn, Focus } from '@/utils/focus-management'
import { keyList, isKeyCode } from '@/utils/isKeyCode'
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

  const onKeyDown = (event) => {
    if (isKeyCode(event.code, [keyList.LEFT])) {
      return focusIn(barRef.current, Focus.Previous | Focus.WrapAround)
    }

    if (isKeyCode(event.code, [keyList.RIGHT])) {
      focusIn(barRef.current, Focus.Next | Focus.WrapAround)
    }
  }

  useEffect(() => {
    tabs.current = barRef.current.querySelectorAll('[role="tab"]')
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
