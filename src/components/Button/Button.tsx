import React, { forwardRef, useRef, useState } from 'react';
import cn from 'classnames';

import { 
    Btn, 
    BtnHover, 
    BtnText
} from './Button.styled'

export type ButtonProps = {
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
    size?: 'small' | 'medium' | 'large';
    children: string;
    outline?: boolean,
    rounded?: boolean,
    disabled?: boolean,
    type?: 'button' | 'submit',
    onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    type = 'button',
    color = 'primary',
    size = 'medium',
    children,
    rounded,
    outline,
    disabled,
    onClick,
}, ref) => {
    const [positionX, setpositionX] = useState(50);
    const [positionY, setPositionY] = useState(50);

    const buttonEl = useRef<HTMLButtonElement>(null);

    const currentRef = ref ? ref : buttonEl;

    const classes = cn({
        'is-disabled': disabled,
        'is-outline': outline,
    }, [`color--${color}`, `size--${size}`])


    const handleMouseListener = (e:React.MouseEvent) => {
        const container = currentRef?.current;
        const event = e.nativeEvent;

        if (!container) return;

        const x = event.offsetX / container.offsetWidth;
        const y = (event.offsetY + ((container.offsetWidth - container.offsetHeight) / 2)) / container.offsetWidth;

        setpositionX(100 * (x - .5));
        setPositionY(100 * (y - .5));
    }


    return (
        <Btn
            ref={ currentRef }
            className={ classes }
            disabled={ disabled }
            isRounded={ rounded }
            onClick={ onClick }
            onMouseEnter={ handleMouseListener }
            onMouseLeave={ handleMouseListener }
            type={ type }
        >
            <BtnHover
                style={ {transformOrigin: `${positionX}% ${positionY}%`} }
            />

            <BtnText>
                { children }
            </BtnText>

        </Btn>
    );
})
