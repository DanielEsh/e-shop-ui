import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox
} as Meta;

export const OneItem = () => {
    const [checked, setChecked] = useState<boolean>(true)

    const handleChanged = (e: any) => {
        setChecked(e.target.checked);
    }

    return (
        <Checkbox
            isChecked={checked}
            onChange={handleChanged}
            size="medium"
            theme="primary">
            Test
        </Checkbox>
    )
}