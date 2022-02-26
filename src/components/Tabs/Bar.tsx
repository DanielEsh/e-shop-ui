import { useState, useContext, useEffect, useRef } from 'react'
import cn from 'classnames'
import { focusIn, Focus } from '@/utils/focus-management'
import { keyList, isKeyCode } from '@/utils/isKeyCode'
import { TabsContext } from '@/components/Tabs/Tabs'
import { Indicator } from '@/components/Tabs/Indicator'

export const Bar = ({ children }) => {
  const [boundingActiveTab, setBoundingActiveTab] = useState(null)
  const barRef = useRef<HTMLDivElement>(null)
  const tabs = useRef<any>(null)

  const { activeTab, color, direction } = useContext(TabsContext)

  const colorsList = {
    primary: 'bg-dark-500 ',
    secondary: 'bg-dark-500  dark:bg-light-500',
  }

  const classes = cn(
    'relative flex p-2 rounded-md',
    colorsList[color],
    {
      ['flex-row']: direction === 'horizontal',
      ['flex-col']: direction === 'vertical',
    },
  )

  const onKeyDown = (event) => {
    if (direction === 'horizontal') {
      if (isKeyCode(event.code, [keyList.LEFT])) {
        return focusIn(barRef.current, Focus.Previous | Focus.WrapAround)
      }

      if (isKeyCode(event.code, [keyList.RIGHT])) {
        focusIn(barRef.current, Focus.Next | Focus.WrapAround)
      }
    }

    if (direction === 'vertical') {
      if (isKeyCode(event.code, [keyList.UP])) {
        return focusIn(barRef.current, Focus.Previous | Focus.WrapAround)
      }

      if (isKeyCode(event.code, [keyList.DOWN])) {
        focusIn(barRef.current, Focus.Next | Focus.WrapAround)
      }
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
      top: tabs.current[activeTab].offsetTop,
      height: tabs.current[activeTab].offsetHeight,
    })
  }, [activeTab])

  const styles = {
    left: boundingActiveTab?.left,
    width: boundingActiveTab?.width,
    top: boundingActiveTab?.top,
    height: boundingActiveTab?.height,
  }

  return (
    <div
      ref={barRef}
      className={classes}
    >
      {boundingActiveTab && <Indicator styles={styles} />}
      {children}
    </div>
  )
}
