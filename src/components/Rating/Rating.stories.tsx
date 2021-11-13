import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Rating } from './index';

export default {
    title: 'Components/Rating',
    component: Rating,
} as Meta;

export const Test = () => {
    return (
        <Rating />
    )
};