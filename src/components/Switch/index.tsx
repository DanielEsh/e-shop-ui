import React, { useState } from 'react';
import cn from 'classnames';

import { 
    Wrapper,
    SwitchWrapper,
    SwitchStyled,
} from './Switch.styles';


export type SwitchProps = {
    label: string;
    disabled: boolean;
    checked: boolean;
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
    onChange: () => void;
    value: string | number | boolean;
}

export const Switch: React.FC<SwitchProps> = ({label}) => {
    const [isActive, setIsActive] = useState<boolean>(false);


    const classes = cn({
        'is-active': isActive,
    });

    const handleChange = () => {
        setIsActive(!isActive);
    };

    return (
        <Wrapper>
            <label htmlFor="switch">
                Label text
            </label>
            <SwitchWrapper htmlFor="switch">
                <input
                    id="switch"
                    onChange={ handleChange }
                    role="switch"
                    type="checkbox" 
                />
                <SwitchStyled className={ classes } />
            </SwitchWrapper>
        </Wrapper>
    )
}
