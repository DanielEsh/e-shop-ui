import React, {forwardRef, ReactElement, useState, useRef, useEffect} from 'react';
import {Placement} from '@floating-ui/react-dom';
import { usePopover } from '../../hooks/usePopover';
import { useForkRef } from '../../hooks/useForkRef';
import { useOnClickOutside } from "../../hooks/useClickOutside";
import { CSSTransition } from 'react-transition-group';

import {Portal} from '../Portal';
import {
    TooltipTarget,
    TooltipContent,
    Arrow,
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

    const arrowRef = useRef<HTMLElement>(null);
    let activeElement;

    const { styles, reference, floating, arrowStyles, refs } = usePopover({
        placement: placement,
        offset: offset,
        arrow: arrowRef,
        isVisible,
    });

    const forkedRef = useForkRef(ref, reference);

    const showPopover = () => {
        activeElement = document.activeElement;
        setTimeout( () => {
            setIsVisible(true);
        }, enterDelay);
    }

    const hidePopover = () => {
        const timeout = setTimeout( () => {
            setIsVisible(false);
            activeElement.focus();
        }, leaveDelay);
        setCloseTimout(timeout);
    }

    useOnClickOutside(refs.floating, hidePopover);

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
                ref={ forkedRef }
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
                        <Arrow 
                            ref={ arrowRef }
                            style={ arrowStyles }
                        />
                    </TooltipContent>
                </CSSTransition>
            </Portal>
        </>
    );
});

Tooltip.displayName = 'Tooltip';
