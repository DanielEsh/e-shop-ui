import React, { forwardRef, useState, useLayoutEffect } from 'react';
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

type Coords = {
    x: number,
    y: number,
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
    const defaultCoords: Coords = {
        x: 50,
        y: 50,
    }
    const [hoverPosition, setHoverPosition] = useState<Coords>(defaultCoords);
    const [rippleArray, setRippleArray] = useState([]);
    const [rippleSize, setRippleSize] = useState(0);

    const classes = cn({
        'is-disabled': disabled,
        'is-outline': outline,
    }, [`color--${color}`, `size--${size}`])


    const onHover = (e:React.MouseEvent<HTMLButtonElement>) => {
        const event = e.nativeEvent;
        const { currentTarget: container } = e;

        if (!container) return;

        const x = event.offsetX / container.offsetWidth;
        const y = (event.offsetY + ((container.offsetWidth - container.offsetHeight) / 2)) / container.offsetWidth;

        setHoverPosition({
            x: 100 * (x - .5),
            y: 100 * (y - .5),
        })
    }

    /**
     * Clear ripple effect
     */
    useLayoutEffect(() => {
        const isRippleEffect = rippleArray.length;
        let bounce = null;
        if (!isRippleEffect) clearTimeout(bounce);

        bounce = setTimeout(() => {
            setRippleArray([]);
        }, 1000);
    }, [rippleArray.length])

    /**
     * Add Ripple Effect
     * @param event
     */
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
            ref={ ref }
            className={ classes }
            disabled={ disabled }
            isRounded={ rounded }
            onClick={ onRipple }
            onMouseEnter={ onHover }
            onMouseLeave={ onHover }
            type={ type }
        >
            <BtnHover
                style={ {transformOrigin: `${hoverPosition?.x}% ${hoverPosition?.y}%`} }
            />

            <RippleContainer>
                {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                    return (
                        <span
                            key={ index }
                            style={ {
                                top: ripple.y,
                                left: ripple.x,
                                width: rippleSize,
                                height: rippleSize
                            } }
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
