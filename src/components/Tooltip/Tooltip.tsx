import React, {forwardRef, ReactElement, useState, useEffect} from 'react';
import {Placement} from '@floating-ui/react-dom';
import { usePopover } from '../../hooks/usePopover';
import { useForkRef } from '../../hooks/useForkRef';
import { CSSTransition } from 'react-transition-group';

import {Portal} from '../Portal';
import {
    TooltipTarget,
    TooltipContent,
} from './Tooltip.styles';

export type Offset = {
    x?: number;
    y?: number;
}

export type TooltipProps = {
    popover?: ReactElement;
    children?: ReactElement;
    offset?: Offset;
    containerEl?: HTMLElement; 
    placement?: Placement;
    enterDelay?: number;
    leaveDelay?: number;
    clickable?: boolean;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
    const { 
        popover,
        children,
        offset = {x: 0, y: 8 },
        containerEl,
        placement = 'top',
        enterDelay = 300,
        leaveDelay = 300,
        clickable = false,
    } = props;

    const [isVisible, setIsVisible] = useState(false);
    const [timeout, setCloseTimout] = useState(null);

    const { styles, reference, floating } = usePopover({
        placement: placement,
        offset: offset,
        isVisible,
    });

    const showPopover = () => {
        setTimeout( () => {
            setIsVisible(true);
        }, enterDelay);
    }

    const hidePopover = () => {
        const timeout = setTimeout( () => {
            setIsVisible(false);
        }, leaveDelay);
        setCloseTimout(timeout);
    }

    const onReferenceClick = () => {
        if (clickable) isVisible ? hidePopover() : showPopover();
    };

    const onReferenceEnter = () => {
        if (clickable) return;
        showPopover();
    };

    const onReferenceLeave = () => {
        if (clickable) return;
        hidePopover() 
    };

    const onFloatingEnter = () => {
        if (clickable) return;
        clearTimeout(timeout);
    }

    const onFloatingLeave = () => {
        if (clickable) return;
        hidePopover() 
    }

    const onPressEsc = (event) => {
        if (event.code === 'Escape') hidePopover();
    }

    useEffect(() => {
        document.addEventListener('keydown', onPressEsc);
        return () => {
            document.removeEventListener('keydown', onPressEsc);
        }
    }, [])

    return (
        <>
            <TooltipTarget 
                ref={ useForkRef(ref, reference) }
                onClick={ onReferenceClick }
                onMouseEnter={ onReferenceEnter }
                onMouseLeave={ onReferenceLeave }
            >
                { children }
            </TooltipTarget>
            <Portal container={ containerEl ? containerEl : null }>
                <CSSTransition
                    classNames="tooltip"
                    in={ isVisible }
                    mountOnEnter
                    timeout={ 300 }
                    unmountOnExit
                >
                    <TooltipContent
                        ref={ floating }
                        onMouseEnter={ onFloatingEnter }
                        onMouseLeave={ onFloatingLeave }
                        style={ styles }
                    >
                        {popover}
                    </TooltipContent>
                </CSSTransition>
            </Portal>
        </>
    );
});

Tooltip.displayName = 'Tooltip';