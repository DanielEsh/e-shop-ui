import React, { forwardRef, useRef, useState } from 'react';
import cn from 'classnames';

import {
    Btn,
    BtnHover,
    BtnText, RippleContainer
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
    const [positionX, setPositionX] = useState(50);
    const [positionY, setPositionY] = useState(50);
    const [rippleArray, setRippleArray] = useState([]);
    const [rippleSize, setRippleSize] = useState(0);

    const buttonEl = useRef<HTMLButtonElement>(null);

    const currentRef: any = ref ? ref : buttonEl;

    const classes = cn({
        'is-disabled': disabled,
        'is-outline': outline,
    }, [`color--${color}`, `size--${size}`])


    const onHover = (e:React.MouseEvent) => {
        const container = currentRef?.current;
        const event = e.nativeEvent;

        if (!container) return;

        const x = event.offsetX / container.offsetWidth;
        const y = (event.offsetY + ((container.offsetWidth - container.offsetHeight) / 2)) / container.offsetWidth;

        set

        setPositionX(100 * (x - .5));
        setPositionY(100 * (y - .5));
    }

    const onRipple = (event: React.MouseEvent<HTMLDivElement>) => {
        const { pageX, pageY, currentTarget } = event;

        const rippleContainer = currentTarget.getBoundingClientRect()

        const size =
            rippleContainer.width > rippleContainer.height
                ? rippleContainer.width
                : rippleContainer.height;
        const x = pageX - rippleContainer.x - size / 2;
        const y = pageY - rippleContainer.y - size / 2;

        setRippleArray([{
            x,
            y,
        }]);
        setRippleSize(size);
    }


    return (
        <Btn
            ref={ currentRef }
            className={ classes }
            disabled={ disabled }
            isRounded={ rounded }
            onClick={ onRipple }
            onMouseEnter={ onHover }
            onMouseLeave={ onHover }
            type={ type }
        >
            <BtnHover
                style={ {transformOrigin: `${positionX}% ${positionY}%`} }
            />

            <RippleContainer>
                {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: rippleSize,
                                height: rippleSize
                            }}
                        />
                    );
                })}
            </RippleContainer>

            <BtnText>
                { children }
            </BtnText>

        </Btn>
    );
})
