import React, {FC, ReactElement, useRef, useEffect} from 'react';
import { usePopover } from '../../hooks/usePopover';
import {useFloating, flip, getScrollParents} from '@floating-ui/react-dom';

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

    let a, b;

    // const { styles, activator, popper } = usePopover({
    //     placement: placement,
    //     offsetY,
    //     offsetX,
    // });

    const {x, y, reference, floating, strategy, update, refs} = useFloating({
        placement: 'top',
        middleware: [flip()],
    });

    useEffect(() => {
        if (!refs.reference.current || !refs.floating.current) {
          return;
        }
        const parents = [
          ...getScrollParents(refs.reference.current),
          ...getScrollParents(refs.floating.current),
        ];
        parents.forEach((parent) => {
          parent.addEventListener('scroll', update);
          parent.addEventListener('resize', update);
        });
        return () => {
          parents.forEach((parent) => {
            parent.removeEventListener('scroll', update);
            parent.removeEventListener('resize', update);
          });
        };
      }, [refs.reference, refs.floating, update]);

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
                            style={ {
                                position: strategy,
                                top: y ?? '',
                                left: x ?? '',
                            } }
                        >
                            {content}
                        </PopoverContainer>
                    )
                }
            </Portal>
        </>
    )
}

