import React, { useRef, useState } from 'react';
import { Btn, BtnHover, BtnText } from './Button-styles'

export type ButtonProps = {
    color: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
    size: 'small' | 'medium' | 'large';
    label: string;
    outline?: boolean,
    rounded?: boolean,
    disabled?: boolean,
    type?: 'button' | 'submit',
    onClick?: () => void;
}


export const Button: React.FC<ButtonProps> = ({
    type = 'button',
    color = 'primary',
    size = 'medium',
    label,
    rounded,
    outline,
    disabled,
    onClick,
}) => {
    const [positionX, setpositionX] = useState(50);
    const [positionY, setPositionY] = useState(50);

    const button = useRef<HTMLButtonElement>(null);


    const handleMouseListener = (e:React.MouseEvent) => {
        const container = button.current;
        const event = e.nativeEvent;

        if (!container) {return;}

        const x = event.offsetX / container.offsetWidth;
        const y = (event.offsetY + ((container.offsetWidth - container.offsetHeight) / 2)) / container.offsetWidth;

        setpositionX(100 * (x - .5));
        setPositionY(100 * (y - .5));
    }


    return (
        <Btn
            className={ [`color--${color}`, `size--${size}`, disabled ? 'is-disabled' : '', outline ? 'is-outline' : ''].join(' ') }
            disabled={ disabled }
            isRounded={ rounded }
            onClick={ onClick }
            onMouseEnter={ () => handleMouseListener }
            onMouseLeave={ handleMouseListener }
            ref={ button }
            type={ type }
        >
            <BtnHover
                style={ {transformOrigin: `${positionX}% ${positionY}%`} }
            />

            <BtnText>
                {label}
            </BtnText>

        </Btn>
    );
};
