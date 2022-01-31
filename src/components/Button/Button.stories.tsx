import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@/components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta

export { default as NewButton } from './examples/NewButton'
