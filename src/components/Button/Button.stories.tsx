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

export { default as Default } from './__examples__/Default'
export { default as SizesColors } from './__examples__/Sizes&Colors'
export { default as CustomClassNames } from './__examples__/CustomClassNames'
export { default as Outline } from './__examples__/Outline'
export { default as NewButton } from './__examples__/NewButton'
