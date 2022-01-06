import React, { forwardRef, ReactElement } from "react";
import { Transition } from 'react-transition-group';

export type FadeProps = {
    children: ReactElement;
    in: boolean;
    duration?: number;
    appear?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    enter?: true;
    exit?: true;
    onEnter?: () => void;
    onEntering?: () => void;
    onEntered?: () => void;
    onExit?: () => void;
    onExiting?: () => void;
    onExited?: () => void;
};

export const Fade = forwardRef<HTMLDivElement, FadeProps>((props, ref) => {
    const {
        children,
        duration = 300,
        appear,
        mountOnEnter,
        unmountOnExit,
        enter,
        exit,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
    } = props;

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
        <Transition 
            in={ props.in } 
            timeout={ duration }
            appear={ appear }
            mountOnEnter={ mountOnEnter }
            unmountOnExit={ unmountOnExit }
            enter={ enter }
            exit={ exit }
            onEnter={ onEnter }
            onEntering={ onEntering }
            onEntered={ onEntered }
            onExit={ onExit }
            onExiting={ onExiting }
            onExited={ onExited }
        >
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
