import React, { useRef, useState } from 'react';
import { Btn, BtnHover, BtnText  } from './Button-styles'

export type ButtonProps  = {
    theme: 'primary' | 'success' | 'warning' | 'danger' | 'info'
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
                                                  theme = 'primary',
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


    const handleMouseListener = (e:any) => {
        const container = button.current;
        const event = e.nativeEvent;

        if (!container) {
            return;
        }

        const x = event.offsetX / container.offsetWidth;
        const y = (event.offsetY + ((container.offsetWidth - container.offsetHeight) / 2)) / container.offsetWidth;

        setpositionX(100 * (x - .5));
        setPositionY(100 * (y - .5));
    }


    return (
        <Btn
            ref={button}
            type={type}
            disabled={disabled}
            className={[`color--${theme}`, `size--${size}`,  disabled ? 'is-disabled' : '', outline ? 'is-outline' : ''].join(' ')}
            isRounded={rounded}
            onMouseEnter={handleMouseListener}
            onMouseLeave={handleMouseListener}
        >
            <BtnHover
                style={{transformOrigin: `${positionX}% ${positionY}%`}}
            />

            <BtnText>
                {label}
            </BtnText>

        </Btn>
    );
};