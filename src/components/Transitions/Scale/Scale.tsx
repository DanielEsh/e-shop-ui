import React, { forwardRef, ReactElement } from "react";
import { Transition } from 'react-transition-group';

export type ScaleProps = {
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

export const Scale = forwardRef<HTMLDivElement, ScaleProps>((props, ref) => {
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
        display: 'inline-block',
        transition: `transform ${duration}ms ease-in-out`,
        transform: 'scale(0)',
    }

    const transitionStyles = {
        entering: { transform: 'scale(1)'},
        entered:  { transform: 'scale(1)' },
        exiting:  { transform: 'scale(0)'},
        exited:  { transform: 'scale(0)' },
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

Scale.displayName = 'Scale';
