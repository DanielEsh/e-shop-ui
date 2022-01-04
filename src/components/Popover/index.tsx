import React, {FC, ReactElement, useRef, useEffect} from 'react';
import { usePopover } from '../../hooks/usePopover';
import {Placement} from '@floating-ui/react-dom';


import {
    PopoverContainer,
} from './Popover.styles';

import {Portal} from '../Portal';

export type PopoverProps = {
    content?: ReactElement;
    children?: ReactElement;
    offsetY?: number;
    offsetX?: number;
    isVisible?: boolean;
    attachEl?: HTMLElement;
    placement: Placement;
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

    let a, b;

    const { styles, reference, floating } = usePopover({
        placement: placement,
        offsetY,
        offsetX,
    });

   

    

    return (
        <>
            <div ref={ reference }>
                { children }
            </div>
            <Portal container={ attachEl ? attachEl : null }>
                {/* {
                    isVisible && (
                        <PopoverContainer 
                            ref={ popper }
                            style={ styles }
                        >
                            {content}
                        </PopoverContainer>
                    )
                } */}

                {
                    isVisible && (
                        <PopoverContainer 
                            ref={ floating }
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

