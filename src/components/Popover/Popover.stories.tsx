import { Meta } from '@storybook/react';

import {Popover} from './index';

export default {
    title: 'Components/Popover',
    component: Popover,
    parameters: {
        layout:'centered',
    },
} as Meta;

export { default as Default } from './__examples__/Default';
