import React from "react";
import { Meta, Story } from "@storybook/react";

import RangeSlider, {RangeSliderOptions} from './index';

export default {
    title: 'Example/Slider',
    component: RangeSlider,
} as Meta;

const Template: Story<RangeSliderOptions> = (args) => <RangeSlider { ...args } />;

export const Range = Template.bind({});
Range.args = {
    min: 0,
    max: 80,
    value: [
        30, 60
    ],
    onChange: (value) => console.log('value', value),
    range: true,
};

export const Standart = Template.bind({});
Standart.args = {
    min: 0,
    max: 80,
    value: 30,
    onChange: (value) => console.log('value', value),
};