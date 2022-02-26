import { Meta } from '@storybook/react'

import Text from './Text'

export default {
  title: 'Text',
  component: Text,
} as Meta

const Template = (args) => <Text { ...args } />

export const All = Template.bind({})
All.args = {}
