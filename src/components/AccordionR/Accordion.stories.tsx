import React from 'react';
import { Story, Meta } from '@storybook/react';

import {AccordionR, AccordionItem, AccordionHeader, AccordionBody} from './index';

export default {
    title: 'R',
    component: AccordionR,
} as Meta;

export const Primary = () => (
    <div>
        <AccordionR>
            <AccordionItem>
                <AccordionHeader number={ 1 }>
                    Header
                </AccordionHeader>
                <AccordionBody number={ 1 }>
                    Body
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader number={ 2 }>
                    Header
                </AccordionHeader>
                <AccordionBody number={ 2 }>
                    Body
                </AccordionBody>
            </AccordionItem>
        </AccordionR>
    </div>
);
