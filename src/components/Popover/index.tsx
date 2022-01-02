import React, {FC, ReactElement, useRef} from 'react';
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
    placement: Placement | Placement[];
}

export const Popover:FC<PopoverProps> = (props) => {
    const { 
        content,
        children,
        isVisible,
        offsetY = 0,
        offsetX = 8,
        attachEl,
        placement = 'top',
    } = props;

    const activator = useRef(null);
    const ctnt = useRef(null);
    const arrow = useRef(null);

    const { styles, attributes } = usePopover(activator.current, ctnt.current, {
        placement: placement,
        offsetY: offsetY,
        offsetX: offsetX,
        arrow: arrow.current,
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
                            ref={ ctnt }
                            style={ styles.popper } { ...attributes.popper }
                        >
                            {content}
                        </PopoverContainer>
                    )
                }
            </Portal>
        </>
    )
}

