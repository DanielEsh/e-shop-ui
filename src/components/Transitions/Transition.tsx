import React, { forwardRef, ReactElement } from "react";
import { Transition as RTransition } from 'react-transition-group';
import { TransitionVariants } from './utils';

export type TransitionProps = {
    type: 'fade' | 'scale' | 'pushUp' | 'pushLeft' | 'pushRight' | 'pushDown';
    children: ReactElement;
    in: boolean;
    timingFunction?: 'string';
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

export const Transition = forwardRef<HTMLDivElement, TransitionProps>((props, ref) => {
    const {
        type = 'fade',
        children,
        timingFunction = 'linear',
        duration = 300,
        appear,
        mountOnEnter = true,
        unmountOnExit = true,
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
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: `${timingFunction}`
    }

    return (
        <RTransition 
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
                        ...TransitionVariants[type][state],
                    } }
                >
                    {children}
                </div>
            )}
        </RTransition>
    )
});

Transition.displayName = 'Transition';
