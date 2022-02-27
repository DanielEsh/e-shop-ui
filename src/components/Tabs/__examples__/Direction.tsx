import { useState } from 'react'
import { Tabs } from '@/components/Tabs'

const Direction = () => {
  const [activeTab, setActiveTab] = useState('1')

  const onChange = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      <div className="max-w-md">
        <Tabs
          defaultActiveTab={activeTab}
          onChange={onChange}
          direction="horizontal"
        >
          <Tabs.Bar>
            <Tabs.Tab value="0">
              Recent
            </Tabs.Tab>
            <Tabs.Tab value="1">
              Popular
            </Tabs.Tab>
            <Tabs.Tab
              value="2"
            >
              Test
            </Tabs.Tab>
            <Tabs.Tab
              value="3"
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
              Test panel
            </Tabs.Panel>
            <Tabs.Panel value="3">
              Trading panel
            </Tabs.Panel>
          </div>
        </Tabs>
      </div>

      <Tabs
        defaultActiveTab={activeTab}
        onChange={onChange}
        direction="vertical"
      >
        <div className="max-w-xs mt-10">
          <Tabs.Bar>
            <Tabs.Tab value="0">
              Recent
            </Tabs.Tab>
            <Tabs.Tab value="1">
              Popular
            </Tabs.Tab>
            <Tabs.Tab
              value="2"
            >
              Test
            </Tabs.Tab>
            <Tabs.Tab
              value="3"
            >
              Trading
            </Tabs.Tab>

          </Tabs.Bar>
        </div>
        <div className="flex justify-center items-center max-w-md h-20 mt-4 bg-primary-500 rounded-md">
          <Tabs.Panel value="0">
            Recent panel
          </Tabs.Panel>
          <Tabs.Panel value="1">
            Popular panel
          </Tabs.Panel>
          <Tabs.Panel value="2">
            Test panel
          </Tabs.Panel>
          <Tabs.Panel value="3">
            Trading panel
          </Tabs.Panel>
        </div>
      </Tabs>
    </>
  )
}

export default Direction
