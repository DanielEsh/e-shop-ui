import { ReactNode, FC, useContext, useCallback, useRef, useEffect } from 'react'
import cn from 'classnames'
import { ActiveTabIndicatorPropertiesTabType } from '@/components/Tabs/Tabs'
import { TabsContext } from '@/components/Tabs/Context'

type TabProps = {
  value: string | number
  children: ReactNode
  disabled?: boolean
}

export const Tab: FC<TabProps> = (props) => {
  const {
    value,
    children,
    disabled,
  } = props

  const tabRef = useRef<HTMLButtonElement>(null)

  const { activeTab, onChangeIndicator, onChangeActivaTab, color } = useContext(TabsContext)

  const isActive = useCallback(() => {
    return value === activeTab
  }, [activeTab])

  const colorsList = {
    primary: 'text-white hover:text-primary-500',
    secondary: 'text-white hover:text-light-300 dark:text-black',
  }

  const colorsActiveList = {
    primary: 'text-black hover:text-black',
    secondary: 'text-black dark:text-white',
  }

  const colorsDisabled = {
    primary: 'text-white hover:text-white',
    secondary: 'text-white hover:text-white dark:text-black dark:hover:text-black',
  }

  const classes = cn(
    'flex items-center justify-center w-full py-2.5 transition duration-150 ease-out z-10',
    {
      [colorsActiveList[color]]: isActive(),
      [colorsList[color]]: !disabled,
      ['opacity-60 cursor-not-allowed hover:bg-transparent']: disabled,
      [colorsDisabled[color]]: disabled,
    },
  )

  const onClick = () => {
    if (!disabled) onChangeActivaTab(value)
  }

  useEffect(() => {
    if (isActive()) {
      const value: ActiveTabIndicatorPropertiesTabType = {
        top: tabRef.current.offsetTop,
        left: tabRef.current.offsetLeft,
        width: tabRef.current.offsetWidth,
        height: tabRef.current.offsetHeight,
      }

      onChangeIndicator(value)
    }
  }, [activeTab])

  return (
    <button
      ref={tabRef}
      role="tab"
      tabIndex={isActive ? 0 : -1}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
