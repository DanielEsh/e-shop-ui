import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

export const PrimaryMedium = () => {
    return (
        <Button>
            Button
        </Button>
    )
}

export const RoundedOutline = () => {
    return (
        <Button
            outline
            rounded
            size={ 'medium' }
        >
            Button
        </Button>
    )
}

export const SuccessLarge = () => {
    return (
        <Button
            color={ 'success' }
            outline
            rounded
            size={ 'large' }
        >
            Button
        </Button>
    )
}

export const DarkLarge = () => {
    return (
        <Button
            color={ 'dark' }
            outline
            rounded
            size={ 'large' }
        >
            Button
        </Button>
    )
}

export const Disabled = () => {
    return (
        <Button
            color={ 'dark' }
            disabled
            outline
            rounded
            size={ 'large' }
        >
            Button
        </Button>
    )
}
