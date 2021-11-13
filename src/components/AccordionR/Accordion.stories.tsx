import React from 'react';
import { Story, Meta } from '@storybook/react';

import {AccordionR} from './index';
import {AccordionItem} from './AccordionItem';

export default {
    title: 'R',
    component: AccordionR,
} as Meta;

export const Primary = () => (
    <div>
        <AccordionR>
            <AccordionItem
                body={ <div>Body</div> }
                header={ <div>Header</div> }
                number={ 1 }
            />
            <AccordionItem
                body={ <div>Body</div> }
                header={ <div>Header</div> }
                number={ 2 }
            />
        </AccordionR>
    </div>
);
