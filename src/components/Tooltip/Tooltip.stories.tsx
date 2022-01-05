import { Meta } from '@storybook/react';

import {Tooltip} from './index';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        layout:'centered',
    },
} as Meta;

export { default as Default } from './__examples__/Default';
export { default as Clickable } from './__examples__/Clickable';
