import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Accordion, AccordionProps } from '../Accordion';

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion { ...args } />;

export const Default = Template.bind({});
Default.args = {
    label: 'Switch',
};