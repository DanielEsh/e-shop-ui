/* eslint-disable indent */
import {RefObject, useEffect} from 'react';
import {useFloating, flip, offset, getScrollParents, Placement, arrow} from '@floating-ui/react-dom';
import { Offset } from '../components/Tooltip';

export type OptionsType = {
    placement?: Placement;
    offset: Offset;
    arrow?: RefObject<HTMLElement>;
    isVisible?: boolean;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const usePopover = (options?: OptionsType) => {
    const {x, y, reference, floating, strategy, update, refs, middlewareData: {arrow: {x: arrowX, y: arrowY} = {}}} = useFloating({
        placement: options.placement,
        middleware: [flip(), offset({
            mainAxis: options?.offset?.y,
            crossAxis: options?.offset?.x,
        }), arrow({element: options.arrow})],
    });

    const styles = { 
        position: strategy,
        top: y ?? '',
        left: x ?? '',
    }

    const arrowStyles = {
      top: arrowY ?? '',
      left: arrowX ?? '',
    }

    useEffect(() => {
        if (!refs.reference.current || !refs.floating.current) 
          return;
        
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
      }, [refs.reference, refs.floating, update, options?.isVisible]);

    return { 
        styles,
        reference,
        floating,
        update,
        refs,
        arrowStyles
    }
};
