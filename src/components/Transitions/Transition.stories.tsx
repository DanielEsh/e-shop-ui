import { Meta } from '@storybook/react';

import {Transition} from './Transition';

export default {
    title: 'Transitions/Transition',
    component: Transition,
} as Meta;

export { default as Fade } from './__examples__/Fade';
export { default as Scale } from './__examples__/Scale';
export { default as PushUp } from './__examples__/PushUp';
export { default as PushRight } from './__examples__/PushRight';
export { default as PushDown } from './__examples__/PushDown';
export { default as PushLeft } from './__examples__/PushLeft';
