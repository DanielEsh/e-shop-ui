import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './index';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (args) => <Button { ...args } />;

export { default as Default } from './examples/Default';
export { default as Dark } from './examples/Dark';
export { default as SuccessLarge } from './examples/SuccessLarge';
export { default as Disabled } from './examples/Disabled';

