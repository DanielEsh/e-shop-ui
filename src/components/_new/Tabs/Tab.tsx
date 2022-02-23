import { ReactNode, FC, useContext, useState, useEffect } from 'react'
import cn from 'classnames'

import { TabsContext } from '@/components/_new/Tabs/Tabs'

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
  const { activeTab, onChange } = useContext(TabsContext)

  const classes = cn(
    'flex items-center justify-center w-full py-2.5 transition duration-150 ease-out text-white z-10',
    {
      ['text-black hover:text-black']: isActive,
      ['hover:text-primary-500']: !disabled,
      ['opacity-60 cursor-not-allowed hover:bg-transparent']: disabled,
    },
  )

  const onClick = () => {
    if (disabled) return
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
      disabled={disabled}
    >
      {children}
    </button>
  )
}
