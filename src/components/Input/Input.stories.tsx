import React from "react";
import { Meta } from "@storybook/react";

import Input from './Input';

export default {
    title: 'Example/Input',
    component: Input,
} as Meta;

const Template = (args) => <Input { ...args } />;

export const All = Template.bind({});
All.args = {
    label: 'Standart',
};