import React, {forwardRef, ReactElement, useState, useEffect} from 'react';
import {Placement} from '@floating-ui/react-dom';
import { usePopover } from '../../hooks/usePopover';
import { useForkRef } from '../../hooks/useForkRef';
import { CSSTransition } from 'react-transition-group';

import {Portal} from '../Portal';
import {
    Target,
    PopoverContent,
} from './Popover.styles';

export type Offset = {
    x?: number;
    y?: number;
}

export type PopoverProps = {
    isVisible?: boolean;
    popover?: ReactElement;
    children?: ReactElement;
    offset?: Offset;
    containerEl?: HTMLElement; 
    placement?: Placement;
    enterDelay?: number;
    leaveDelay?: number;
    onClose?: () => void;
    onActivatorClick?: () => void;
    onActivatorMouseEnter?: () => void;
    onActivatorMouseLeave?: () => void;
    onPopoverClick?: () => void;
    onPopoverMouseEnter?: () => void;
    onPopoverMouseLeave?: () => void;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
    const { 
        isVisible,
        popover,
        children,
        offset = {x: 0, y: 8 },
        containerEl,
        placement = 'top',
        enterDelay = 300,
        leaveDelay = 300,
        onClose,
        onActivatorClick,
        onActivatorMouseEnter,
        onActivatorMouseLeave,
        onPopoverClick,
        onPopoverMouseEnter,
        onPopoverMouseLeave,
    } = props;

    const [timeout, setCloseTimout] = useState(null);

    const { styles, reference, floating } = usePopover({
        placement: placement,
        offset: offset,
        isVisible,
    });

    const showPopover = () => {
        setTimeout( () => {
            onClose();
        }, enterDelay);
    }

    const hidePopover = () => {
        const timeout = setTimeout( () => {
            onClose();
        }, leaveDelay);
        setCloseTimout(timeout);
    }

    const onReferenceClick = () => {
        onActivatorClick();
        isVisible ? hidePopover() : showPopover();
    };

    const onReferenceEnter = () => {
        onActivatorMouseEnter();
    };

    const onReferenceLeave = () => {
        onActivatorMouseLeave();
    };

    const onFloatingEnter = () => {
        clearTimeout(timeout);
        onPopoverMouseEnter();
    }

    const onFloatingLeave = () => {
        onPopoverMouseLeave();
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
            <Target 
                ref={ useForkRef(ref, reference) }
                onClick={ onReferenceClick }
                onMouseEnter={ onReferenceEnter }
                onMouseLeave={ onReferenceLeave }
            >
                { children }
            </Target>
            <Portal container={ containerEl ? containerEl : null }>
                <CSSTransition
                    classNames="tooltip"
                    in={ isVisible }
                    mountOnEnter
                    timeout={ 300 }
                    unmountOnExit
                >
                    <PopoverContent
                        ref={ floating }
                        onClick={ onPopoverClick }
                        onMouseEnter={ onFloatingEnter }
                        onMouseLeave={ onFloatingLeave }
                        style={ styles }
                    >
                        {popover}
                    </PopoverContent>
                </CSSTransition>
            </Portal>
        </>
    );
});

Popover.displayName = 'Popover';
