import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Switch, SwitchProps } from '../Switch';

export default {
    title: 'Components/Switch',
    component: Switch,
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch { ...args } />;

export const Default = Template.bind({});
Default.args = {
    label: 'Switch',
};

export const Active = Template.bind({});
Active.args = {
    label: 'Active Switcher',
    active: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled Switcher',
    isDisabled: true,
};
