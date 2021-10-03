import React from 'react';
import { Story, Meta } from '@storybook/react';

import Tooltip, { TooltipProps } from './index';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        layout:'centered',
    },
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip { ...args } />;

export const Default = Template.bind({});
Default.args = {
   children: <div>Activator</div>,
};

export const Bottom = Template.bind({});
Bottom.args = {
   children: <div>Activator</div>,
   placement: 'bottom',
   enterDelay: 250,
   leaveDelay: 250,
};

export const Left = Template.bind({});
Left.args = {
   children: <div>Activator</div>,
   placement: 'left',
};

export const Right = Template.bind({});
Right.args = {
   children: <div>Activator</div>,
   placement: 'right',
};

export const Clicked = Template.bind({});
Clicked.args = {
   children: <div>click me</div>,
   clicked: true,
   placement: 'top',
};