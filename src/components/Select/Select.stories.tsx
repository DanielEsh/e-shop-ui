import React from "react";
import { Meta, Story } from "@storybook/react";

import Select, {SelectProps} from './Select';

export default {
    title: 'Example/Select',
    component: Select,
} as Meta;

const Template = (args) => <Select { ...args } />;

const standardValues = [
    {
        label: 'string1',
        value: 'string1',
    },
    {
        label: 'string2',
        value: 'string2',
    },
    {
        label: 'string3',
        value: 'string3',
    },
    {
        label: 'string4',
        value: 'string4',
    },
    {
        label: 'string5',
        value: 'string5',
    },
    {
        label: 'string6',
        value: 'string6',
    },
    {
        label: 'string7',
        value: 'string7',
    },
]

export const Standard = Template.bind({});
Standard.args = {
    theme: 'primary',
    options: standardValues,
    maxOptionsVisible: 8,
};

export const Multiple = Template.bind({});
Multiple.args = {
    theme: 'primary',
    options: standardValues,
    multiple : true,
    maxOptionsVisible: 4,
}

export const Reset = Template.bind({});
Reset.args = {
    theme: 'primary',
    options: standardValues,
    multiple: true,
    defaultValue: [],
    clear: true,
    maxOptionsVisible: 4,
}

export const Native = Template.bind({});
Native.args = {
    theme: 'primary',
    options: standardValues,
    multiple: false,
    defaultValue: [],
    clear: true,
    maxOptionsVisible: 4,
    native: true,
}