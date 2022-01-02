import React, {RefObject} from 'react';
import { usePopper } from 'react-popper';

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

export const usePopover = (reference, popper, options?) => {
    const defaultOptions = {
        placement: 'top',
    }

    const { styles, attributes } = usePopper(reference, popper, {
        placement: options.placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [options.offsetY, options.offsetX],
                },
            },
        ],
    });

    return {
        styles,
        attributes,
    }
};
