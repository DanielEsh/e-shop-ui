import { Tabs } from '@/components/Tabs'

const Default = () => {
  return (
    <div className="max-w-md">
      <Tabs
        defaultActiveTab={'1'}
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
  )
}

export default Default
