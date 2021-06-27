import React from "react";
import { Meta, Story } from "@storybook/react";

import Select, {SelectProps} from './Select';

export default {
    title: 'Example/Select',
    component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select { ...args } />;

export const Standard = Template.bind({});
Standard.args = {
    theme: 'primary',
};