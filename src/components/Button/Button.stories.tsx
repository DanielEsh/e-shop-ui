import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (args) => <Button { ...args } />;

export const RoundedOutline = ButtonTemplate.bind({});
RoundedOutline.args = { 
    children: 'RoundedOutline button',
    outline: true,
    rounded: true,
};

export const SuccessLarge = ButtonTemplate.bind({});
SuccessLarge.args = { 
    color: 'success',
    size: 'large',
    children: 'RoundedOutline button',
    outline: true,
    rounded: true,
};

export const Disabled = ButtonTemplate.bind({});
Disabled.args = { 
    color: 'dark',
    size: 'large',
    children: 'RoundedOutline button',
    outline: true,
    rounded: true,
    disabled: true,
};

export { default as Default } from './examples/Default';
export { default as Dark } from './examples/Dark';
