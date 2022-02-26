import { ReactNode, FC, useContext, useState, useEffect } from 'react'
import cn from 'classnames'

import { TabsContext } from '@/components/Tabs/Tabs'

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

  const [isActive, setIsActive] = useState<boolean>(false)
  const { activeTab, onChange, color } = useContext(TabsContext)

  const colorsList = {
    primary: 'text-white hover:text-primary-500',
    secondary: 'text-white hover:text-light-300 dark:text-black',
  }

  const colorsActiveList = {
    primary: 'text-black hover:text-black',
    secondary: 'text-black dark:text-white',
  }

  const classes = cn(
    'flex items-center justify-center w-full py-2.5 transition duration-150 ease-out z-10',
    {
      [colorsActiveList[color]]: isActive,
      [colorsList[color]]: !disabled,
      ['opacity-60 cursor-not-allowed hover:bg-transparent']: disabled,
    },
  )

  const onClick = () => {
    if (disabled) return
    onChange(value)
    console.log(color)
  }

  const changeActiveTab = () => {
    return value === activeTab
  }

  useEffect(() => {
    setIsActive(changeActiveTab)
  }, [activeTab])

  return (
    <button
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
