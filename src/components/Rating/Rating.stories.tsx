import React from 'react';
import {Meta } from '@storybook/react';

import { Rating } from './index';

export default {
    title: 'Components/Rating',
    component: Rating,
} as Meta;

export { default as Default } from './examples/Default';
export { default as HalfMode } from './examples/HalfMode';
export { default as EditableMode } from './examples/EditableMode';
export { default as MoreItemsCount } from './examples/MoreItemsCount';
