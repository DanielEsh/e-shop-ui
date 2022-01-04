import React, {FC, ReactElement, useState, useEffect} from 'react';
import { usePopover } from '../../hooks/usePopover';
import {Placement} from '@floating-ui/react-dom';


import {
    Target,
} from './Popover.styles';

import {Portal} from '../Portal';

export type PopoverProps = {
    content?: ReactElement;
    children?: ReactElement;
    offsetY?: number;
    offsetX?: number;
    attachEl?: HTMLElement;
    placement?: Placement;
    enterDelay?: number;
    leaveDelay?: number;
    clicked?: boolean;
}

export const Popover:FC<PopoverProps> = (props) => {
    const { 
        content,
        children,
        offsetY = -8,
        offsetX = 0,
        attachEl,
        placement = 'top',
        enterDelay = 250,
        leaveDelay = 250,
        clicked = false,
    } = props;

    const [isVisible, setVisible] = useState<boolean>(false);
    const [timeout, setCloseTimout] = useState(null);

    const { styles, reference, floating } = usePopover({
        placement: placement,
        offsetY,
        offsetX,
        isVisible
    });

    const showPopover = () => {
        setTimeout( () => {
            setVisible(true);
        }, enterDelay);
    }

    const hidePopover = () => {
        const timeout = setTimeout( () => {
            setVisible(false);
        }, leaveDelay);
        setCloseTimout(timeout);
    }

    const onReferenceClick = () => {
        if (!clicked) return;

        isVisible ? hidePopover() : showPopover();
    };

    const onReferenceEnter = () => {
        if (clicked) return;
        showPopover();

    };

    const onReferenceLeave = () => {
        if (clicked) return;
        hidePopover();
    };

    const onFloatingEnter = () => {
        clearTimeout(timeout);
        setVisible(true);
    }

    const onFloatingLeave = () => {
        hidePopover();
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
                ref={ reference }
                onClick={ onReferenceClick }
                onMouseEnter={ onReferenceEnter }
                onMouseLeave={ onReferenceLeave }
            >
                { children }
            </Target>
            <Portal container={ attachEl ? attachEl : null }>
                {
                    isVisible && (
                        <div
                            ref={ floating }
                            onMouseEnter={ onFloatingEnter }
                            onMouseLeave={ onFloatingLeave }
                            style={ styles }
                        >
                            {content}
                        </div>
                    )
                }
            </Portal>
        </>
    )
}

