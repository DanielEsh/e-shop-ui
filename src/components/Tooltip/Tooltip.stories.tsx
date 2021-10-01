import React from 'react';
import { Story, Meta } from '@storybook/react';

import Tooltip, { TooltipProps } from './index';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip { ...args } />;

export const Default = Template.bind({});
Default.args = {
   
};