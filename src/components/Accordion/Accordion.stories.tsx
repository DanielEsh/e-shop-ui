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
    header: 'AccordionItem',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis adipisci id rem veritatis suscipit consequuntur molestiae odit vitae provident aliquam reiciendis hic, blanditiis molestias est qui iure voluptates sunt.'
};

export const ActiveDefault = Template.bind({});
ActiveDefault.args = {
    header: 'AccordionItem',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Odio quis adipisci id rem veritatis suscipit consequuntur molestiae
    odit vitae provident aliquam reiciendis hic, blanditiis molestias est qui iure voluptates sunt.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Odio quis adipisci id rem veritatis suscipit consequuntur molestiae
    odit vitae provident aliquam reiciendis hic, blanditiis molestias est qui iure voluptates sunt.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Odio quis adipisci id rem veritatis suscipit consequuntur molestiae
    odit vitae provident aliquam reiciendis hic, blanditiis molestias est qui iure voluptates sunt.`,
    active: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    header: 'AccordionItem',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Odio quis adipisci id rem veritatis suscipit consequuntur molestiae
    odit vitae provident aliquam reiciendis hic, blanditiis molestias est qui iure voluptates sunt.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Odio quis adipisci id rem veritatis suscipit consequuntur molestiae
    odit vitae provident aliquam reiciendis hic, blanditiis molestias est qui iure voluptates sunt.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Odio quis adipisci id rem veritatis suscipit consequuntur molestiae
    odit vitae provident aliquam reiciendis hic, blanditiis molestias est qui iure voluptates sunt.`,
    disabled: true,
};
