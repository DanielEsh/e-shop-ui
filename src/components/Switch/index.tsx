import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { 
    Wrapper,
    Name,
    SwitchWrapper,
    SwitchStyled,
} from './Switch.styles';


export type SwitchProps = {
    label?: string;
    isDisabled?: boolean;
    isActiveDefault?: boolean;
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
    onChange: () => void;
    value?: string | number | boolean;
}

export const Switch: React.FC<SwitchProps> = ({
    label,
    isActiveDefault = false,
    isDisabled = false,
}) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const classes = cn({
        'is-active': isActive,
        'is-disabled': isDisabled,
    });

    useEffect(() => {
        if (isActiveDefault) return setIsActive(true);
    }, []);

    const handleChange = () => {
        if (isDisabled) return;
        setIsActive(!isActive);
    };

    return (
        <Wrapper isDisabled={ isDisabled }>
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
