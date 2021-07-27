import React from "react";
import { Meta, Story } from "@storybook/react";

import Select, {SelectProps} from './Select';

export default {
    title: 'Example/Select',
    component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select { ...args } />;

const standardValues = [
    'string1',
    'string2',
    'string3',
    'string4',
    'string5',
    'string6',
    'string7',
]

export const Standard = Template.bind({});
Standard.args = {
    theme: 'primary',
    options: standardValues,
};

export const Multiple = Template.bind({});
Multiple.args = {
    theme: 'primary',
    options: standardValues,
    multiple : true,
}