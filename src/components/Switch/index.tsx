import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { 
    Wrapper,
    Name,
    SwitchWrapper,
    SwitchStyled,
} from './Switch.styles';


export type SwitchProps = {
    label: string;
    disabled: boolean;
    active: boolean;
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
    onChange: () => void;
    value: string | number | boolean;
}

export const Switch: React.FC<SwitchProps> = ({
    label,
    active = false,
}) => {
    const [isActive, setIsActive] = useState<boolean>(false);


    const classes = cn({
        'is-active': isActive,
    });

    useEffect(() => {
        if (active) return setIsActive(true);
    }, []);

    const handleChange = () => {
        setIsActive(!isActive);
    };

    return (
        <Wrapper>
            <Name htmlFor="switch">
                { label }
            </Name>
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
