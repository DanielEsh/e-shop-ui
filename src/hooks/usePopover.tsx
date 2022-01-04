/* eslint-disable indent */
import {useEffect} from 'react';
import {useFloating, flip, offset, getScrollParents, Placement} from '@floating-ui/react-dom';

export type OptionsType = {
    placement?: Placement;
    offsetX?: number;
    offsetY?: number;
    arrow?: HTMLElement;
    isVisible?: boolean;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const usePopover = (options?: OptionsType) => {
    const {x, y, reference, floating, strategy, update, refs} = useFloating({
        placement: options.placement,
        middleware: [flip(), offset({
            mainAxis: options.offsetY,
            crossAxis: options.offsetX,
        })],
    });

    const styles = { 
        position: strategy,
        top: y ?? '',
        left: x ?? '',
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
    }
};
