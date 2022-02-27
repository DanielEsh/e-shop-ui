import { useContext, useEffect, useRef, ReactNode, FC } from 'react'
import cn from 'classnames'
import { focusIn, Focus } from '@/utils/focus-management'
import { keyList, isKeyCode } from '@/utils/isKeyCode'
import { TabsContext } from '@/components/Tabs/Context'
import { Indicator } from '@/components/Tabs/Indicator'

export type BarProps = {
  children: ReactNode
}

export const Bar: FC<BarProps> = ({ children }) => {
  const barRef = useRef<HTMLDivElement>(null)

  const { color, direction, activeTabIndicatorProperties } = useContext(TabsContext)

  const colorsList = {
    primary: 'bg-dark-500',
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
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const styles = {
    left: activeTabIndicatorProperties?.left,
    width: activeTabIndicatorProperties?.width,
    top: activeTabIndicatorProperties?.top,
    height: activeTabIndicatorProperties?.height,
  }

  return (
    <div
      ref={barRef}
      className={classes}
    >
      {activeTabIndicatorProperties && <Indicator styles={styles} />}
      {children}
    </div>
  )
}
