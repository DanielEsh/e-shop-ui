import React from 'react'
import { Meta } from '@storybook/react'

import Fonts from './Fonts'

export default {
  title: 'Fonts',
  component: Fonts,
} as Meta

const Template = (args) => <Fonts { ...args } />

export const All = Template.bind({})
All.args = {}
