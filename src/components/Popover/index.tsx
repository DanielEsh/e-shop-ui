import React, {FC, ReactElement, useRef, useEffect} from 'react';
import { usePopover } from '../../hooks/usePopover';

import {
    PopoverContainer,
} from './Popover.styles';

import {Portal} from '../Portal';

export type Placement = [
    'top-start',
    'top',
    'top-end',
    'bottom-start',
    'bottom',
    'bottom-end',
    'right-start',
    'right',
    'right-end',
    'left-start',
    'left',
    'left-end',
]

export type PopoverProps = {
    content?: ReactElement;
    children?: ReactElement;
    offsetY?: number;
    offsetX?: number;
    isVisible?: boolean;
    attachEl?: HTMLElement;
    placement: any;
}

export const Popover:FC<PopoverProps> = (props) => {
    const { 
        content,
        children,
        isVisible,
        offsetY = -8,
        offsetX = 0,
        attachEl,
        placement = 'top',
    } = props;

    // const activator = useRef(null);
    // const ctnt = useRef(null);
    // const arrow = useRef(null);

    let a,b;

    const { styles, activator, popper } = usePopover({
        placement: placement,
        offsetY,
        offsetX,
    });

    return (
        <>
            <div ref={ activator }>
                { children }
            </div>
            <Portal container={ attachEl ? attachEl : null }>
                {
                    isVisible && (
                        <PopoverContainer 
                            ref={ popper }
                            style={ styles }
                        >
                            {content}
                        </PopoverContainer>
                    )
                }
            </Portal>
        </>
    )
}

