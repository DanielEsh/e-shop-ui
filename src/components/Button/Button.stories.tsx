import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button { ...args } />;

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
    color: 'primary',
    label: 'Test Button',
    size: 'medium',
};

export const RoundedOutline = Template.bind({});
RoundedOutline.args = {
    label: 'Button',
    size: 'medium',
    outline: true,
    rounded: true,
};

export const SuccessLarge = Template.bind({});
SuccessLarge.args = {
    color: 'success',
    size: 'large',
    label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
    size: 'small',
    label: 'Button',
    disabled: true,
};
