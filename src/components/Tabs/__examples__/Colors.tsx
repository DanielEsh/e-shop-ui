import { useState } from 'react'
import { Tabs } from '@/components/Tabs'

const Default = () => {
  const [activeTab, setActiveTab] = useState('1')

  const onChange = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      <div className="max-w-md">
        <Tabs
          activeTab={activeTab}
          onChange={onChange}
          color="primary"
        >
          <Tabs.Bar>
            <Tabs.Tab value="0">
              Recent
            </Tabs.Tab>
            <Tabs.Tab value="1">
              Popular
            </Tabs.Tab>
            <Tabs.Tab
              value="3"
              disabled
            >
              Trading
            </Tabs.Tab>
          </Tabs.Bar>
          <div className="flex justify-center items-center max-w-md h-20 mt-4 bg-primary-500 rounded-md">
            <Tabs.Panel value="0">
              Recent panel
            </Tabs.Panel>
            <Tabs.Panel value="1">
              Popular panel
            </Tabs.Panel>
            <Tabs.Panel value="2">
              Trading panel
            </Tabs.Panel>
          </div>
        </Tabs>
      </div>

      <div className="max-w-md mt-5">
        <Tabs
          activeTab={activeTab}
          onChange={onChange}
          color="secondary"
        >
          <Tabs.Bar>
            <Tabs.Tab value="0">
              Recent
            </Tabs.Tab>
            <Tabs.Tab value="1">
              Popular
            </Tabs.Tab>
            <Tabs.Tab
              value="3"
              disabled
            >
              Trading
            </Tabs.Tab>
          </Tabs.Bar>
          <div className="flex justify-center items-center max-w-md h-20 mt-4 bg-dark-500 dark:bg-light-500 rounded-md text-white dark:text-black">
            <Tabs.Panel value="0">
              Recent panel
            </Tabs.Panel>
            <Tabs.Panel value="1">
              Popular panel
            </Tabs.Panel>
            <Tabs.Panel value="2">
              Trading panel
            </Tabs.Panel>
          </div>
        </Tabs>
      </div>
    </>
  )
}

export default Default
