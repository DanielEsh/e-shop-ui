import React from "react";
import { Meta } from "@storybook/react";

import Input from './Input';

export default {
    title: 'Example/Input',
    component: Input,
} as Meta;

const Template = (args) => <Input { ...args } />;

export const Standard = Template.bind({});
Standard.args = {
    label: 'Standard',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled input',
    disabled: true,
};