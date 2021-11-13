import React from 'react';
import { Story, Meta } from '@storybook/react';

import {Accordion} from './index';

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as Meta;

export { default as Default } from './examples/Default';
export { default as StayOpened } from './examples/StayOpened';
export { default as DefaultOpened } from './examples/DefaultOpened';
