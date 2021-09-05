import React from "react";
import { Meta, Story } from "@storybook/react";

import RangeSlider, {RangeSliderOptions} from './index';

export default {
    title: 'Example/Slider',
    component: RangeSlider,
} as Meta;

const Template: Story<RangeSliderOptions> = (args) => <RangeSlider { ...args } />;

export const Standart = Template.bind({});
Standart.args = {
    min: 0,
    max: 80,
    value: 30,
    onChange: (value) => console.log('value', value),
};

export const StandartAlwaysTooltip = Template.bind({});
StandartAlwaysTooltip.args = {
    min: 0,
    max: 80,
    value: 30,
    tooltip: 'always',
    onChange: (value) => console.log('value', value),
};

export const StandartFocusTooltip = Template.bind({});
StandartFocusTooltip.args = {
    min: 0,
    max: 80,
    value: 30,
    tooltip: 'focus',
};

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

export const RangeAlwaysTooltip = Template.bind({});
RangeAlwaysTooltip.args = {
    min: 0,
    max: 80,
    value: [
        30, 60
    ],
    tooltip: 'always',
    onChange: (value) => console.log('value', value),
    range: true,
};

export const RangeFocusTooltip = Template.bind({});
RangeFocusTooltip.args = {
    min: 0,
    max: 80,
    value: [
        30, 60
    ],
    tooltip: 'focus',
    range: true,
};