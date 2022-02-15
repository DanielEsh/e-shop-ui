import { useContext, useState, useEffect } from 'react'
import cn from 'classnames'

import { TabsContext } from '@/components/_new/Tabs/Tabs'

export const Tab = ({ value, children }) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const { activeTab, onChange } = useContext(TabsContext)

  const classes = cn(
    'flex items-center justify-center w-full py-2.5 rounded-md hover:bg-light-300 transition duration-150 ease-out',
    {
      [' bg-light-500 hover:bg-light-500']: isActive,
    },
  )

  const onClick = () => {
    onChange(value)
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
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
