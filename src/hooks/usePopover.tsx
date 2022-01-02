import React, {RefObject} from 'react';
import { usePopper } from 'react-popper';
import {useFloating, shift} from '@floating-ui/react-dom';

export type Direction = [
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

export type OptionsType = {
    placement: Direction | Direction[],
    offsetX: number,
    offsetY: number,
}

type usePopoverType = {
    activator: RefObject<HTMLElement>,
    
}

export const usePopover = (options?) => {
    const defaultOptions = {
        placement: 'top',
    }

    const {x, y, reference, floating, strategy} = useFloating({
        placement: 'top',
        middleware: [shift()],
    });

    const styles = {
        position: strategy,
        top: y ?? '',
        left: x ?? '',
    }

    return {
        styles,
        reference,
        floating,
    }
};
