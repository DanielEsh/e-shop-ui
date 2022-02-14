import { useContext } from 'react'
import { TabsContext } from '@/components/_new/Tabs/Tabs'

export const Tab = ({ value, children }) => {
  const { onChange } = useContext(TabsContext)

  const onClick = () => {
    console.log('tabClick', value)
    onChange(value)
  }

  return (
    <div
      role="tab"
      className="flex items-center justify-center w-full py-2.5 bg-gray-200 rounded-md"
      onClick={onClick}
    >
      {children}
    </div>
  )
}
