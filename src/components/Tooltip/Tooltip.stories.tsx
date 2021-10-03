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
   children: <div>Activator</div>
};

export const Clicked = Template.bind({});
Clicked.args = {
   children: <div>click me</div>,
   clicked: true,
};