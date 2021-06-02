import React from 'react';
import { Meta } from '@storybook/react';

import Colors from "./index";

export default {
    title: 'Example/Colors',
    component: Colors,
} as Meta;

const Template = (args) => <Colors { ...args } />;

export const All = Template.bind({});
All.args = {};
