import React from "react";
import { Meta, Story } from "@storybook/react";

import RangeSlider, {RangeSliderOptions} from './index';

export default {
    title: 'Example/Slider',
    component: RangeSlider,
} as Meta;

const Template: Story<RangeSliderOptions> = (args) => <RangeSlider { ...args } />;

export const Standard = Template.bind({});
Standard.args = {

};

