import React, {RefObject} from 'react';
import { usePopper } from 'react-popper';

export const usePopover = (reference, popper, options?) => {
    const defaultOptions = {
        placement: 'top',
    }

    const { styles, attributes } = usePopper(reference, popper, {
        ...defaultOptions,
        ...options,
    });

    return {
        styles,
        attributes,
    }
};
