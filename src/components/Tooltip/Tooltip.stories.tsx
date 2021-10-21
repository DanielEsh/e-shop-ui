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
   children: <div>Hover on Me</div>,
   content: 'Tip positioned Top'
};

export const Bottom = Template.bind({});
Bottom.args = {
   children: <div>Activator</div>,
   content: 'Tip positioned Bottom',
   placement: 'bottom',
   enterDelay: 250,
   leaveDelay: 250,
};

export const Left = Template.bind({});
Left.args = {
   children: <div>Hello World</div>,
   content: 'Left with arrow',
   arrow: true,
   placement: 'left',
};

export const Right = Template.bind({});
Right.args = {
   children: <div>Activator</div>,
   content: 'Right with Arrow',
   arrow: true,
   placement: 'right',
};

export const Clicked = Template.bind({});
Clicked.args = {
   children: <div>click me</div>,
   clicked: true,
   placement: 'top',
};