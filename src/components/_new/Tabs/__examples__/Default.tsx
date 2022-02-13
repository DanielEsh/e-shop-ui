import { Tabs } from '@/components/_new/Tabs'

const Default = () => {
  return (
    <Tabs>
      <Tabs.Bar>
        <Tabs.Tab>
          Recent
        </Tabs.Tab>
        <Tabs.Tab>
          Popular
        </Tabs.Tab>
        <Tabs.Tab>
          Trading
        </Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Panels>
        <Tabs.Panel>
          Recent panel
        </Tabs.Panel>
        <Tabs.Panel>
          Popular panel
        </Tabs.Panel>
        <Tabs.Panel>
          Trading panel
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  )
}

export default Default
