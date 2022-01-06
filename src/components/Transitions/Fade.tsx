import React, { forwardRef, ReactElement } from "react";
import { Transition } from 'react-transition-group';

export type FadeProps = {
    children: ReactElement;
    inProp: boolean;
};

export const Fade = forwardRef<HTMLDivElement, FadeProps>((props, ref) => {
    const {
        children,
        inProp,
    } = props;

    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    };

    return (
        <Transition in={ inProp } timeout={ duration }>
            {state => (
                <div 
                    ref={ ref }
                    style={ {
                        ...defaultStyle,
                        ...transitionStyles[state]
                    } }
                >
                    {children}
                </div>
            )}
        </Transition>
    )
});

Fade.displayName = 'Fade';
