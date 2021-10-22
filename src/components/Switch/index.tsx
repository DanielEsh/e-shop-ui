import React from 'react';

export type SwitchProps = {
    label: string;
}

export const Switch: React.FC<SwitchProps> = ({label}) => {
    return (
        <>
            { label }
        </>
    )
}
