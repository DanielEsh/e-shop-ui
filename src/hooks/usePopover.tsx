/* eslint-disable indent */
import { usePopper } from 'react-popper';
import React, {useEffect, useRef, useState} from 'react';

export type OptionsType = {
    placement?: any,
    offsetX?: number,
    offsetY?: number,
    arrow?: HTMLElement,
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const usePopover = (
    options?: OptionsType
) => {
    // const { styles, attributes } = usePopper(reference, popper, {
    //     placement: options.placement,
    //     modifiers: [
    //         {
    //             name: 'offset',
    //             options: {
    //                 offset: [options.offsetY, options.offsetX],
    //             },
    //         },
    //         {
    //             name: 'arrow',
    //             options: {
    //                 element: options?.arrow,
    //             },
    //         },
    //     ],
    // });



    // return {
    //     styles,
    //     attributes,
    // }

    const [coords, setCoords] = useState(null);

    const activator = useRef(null);
    const popper = useRef<HTMLElement | null>(null);


    
    const getElementRects = (element: HTMLElement) => {
        return element.getBoundingClientRect(); 
    };

    const computeCoordsFromPlacement = (
        activator,
        popper,
        placement,
    ) => {
        const commonX = activator.x + activator.width / 2 - popper.width / 2;
        const commonY = activator.y + activator.height / 2 - popper.height / 2;

        let coords;
        switch (placement) {
            case 'top':
              coords = {x: commonX, y: activator.y - popper.height};
              break;
            case 'bottom':
              coords = {x: commonX, y: activator.y + activator.height};
              break;
            case 'right':
              coords = {x: activator.x + activator.width, y: commonY};
              break;
            case 'left':
              coords = {x: activator.x - popper.width, y: commonY};
              break;
            default:
              coords = {x: activator.x, y: activator.y};
          }

          return coords;
    };


    let styles = {};

    useEffect(() => {
        if (activator && popper) {
            const activatorRect = getElementRects(activator.current);
            const popperRect = getElementRects(popper.current);
            const coords = computeCoordsFromPlacement(activatorRect, popperRect, options.placement);

            setCoords(coords);
        }
    }, []);

    styles = {
        top: coords?.y,
        left: coords?.x,
    }

    return { 
        styles,
        activator,
        popper,
    }
};
