import { useState } from 'react'
import { Tabs } from '@/components/_new/Tabs'

const Default = () => {
  const [activeTab, setActiveTab] = useState('1')

  const onChange = (index) => {
    setActiveTab(index)
  }

  return (
    <Tabs
      activeTab={activeTab}
      onChange={onChange}
    >
      <Tabs.Bar>
        <Tabs.Tab value="1">
          Recent
        </Tabs.Tab>
        <Tabs.Tab value="2">
          Popular
        </Tabs.Tab>
        <Tabs.Tab value="3">
          Trading
        </Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Panels>
        <Tabs.Panel value="1">
          Recent panel
        </Tabs.Panel>
        <Tabs.Panel value="2">
          Popular panel
        </Tabs.Panel>
        <Tabs.Panel value="3">
          Trading panel
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  )
}

export default Default
