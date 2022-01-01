import React, {FC, ReactElement, useState, useRef, useEffect} from 'react';

import {
    PopoverContainer
} from './Popover.styles';

// import {Portal} from '../Portal';

export type PopoverProps = {
    content?: ReactElement;
    children?: ReactElement;
    offsetY: number;
    offsetX: number;
    isVisible?: boolean;
}

export const Popover:FC<PopoverProps> = (props) => {
    const [coords, setCoords] = useState({x:0, y:0});

    const activator = useRef(null);
    const ctnt = useRef(null);

    let gx, gy = 0;

    const { 
        content,
        children,
        isVisible,
        offsetY = -1,
        offsetX = 0,
    } = props;

    const getRect = (element) => {
        console.log('getRect', element.getBoundingClientRect());
        return element.getBoundingClientRect();
    };

    const computeCoordsFromPlacement = (reference, floating, placement = 'top') => {
        const commonX = reference.x + reference.width / 2 - floating.width / 2;
        const commonY = (reference.y + reference.height / 2 - floating.height / 2) + 200;

        let coords;
        switch (placement) {
        case 'top':
            coords = {x: commonX, y: reference.y - floating.height};
            break;
        case 'bottom':
            coords = {x: commonX, y: reference.y + reference.height};
            break;
        case 'right':
            coords = {x: reference.x + reference.width, y: commonY};
            break;
        case 'left':
            coords = {x: reference.x - floating.width, y: commonY};
            break;
        default:
            coords = {x: reference.x, y: reference.y};
        }

        return coords;
    };

    const computeOffset = (coords, offsetX, offsetY) => {
        return {
            x: coords.x + offsetX,
            y: coords.y + offsetY,
        }
    };

    useEffect( () => {
        const rectA = getRect(activator.current);
        const rectB = getRect(ctnt.current);

        const crds = computeCoordsFromPlacement(rectA, rectB);
        gx = crds.x;
        gy = crds.y;
        const offsetCrds = computeOffset(crds, offsetX, offsetY);
        setCoords(offsetCrds);
    }, []);

    return (
        <>
            <div ref={ activator }>
                { children }
            </div>
            {
                isVisible && (
                    <PopoverContainer 
                        ref={ ctnt }
                        style={ {
                            top: coords?.y,
                            left: coords?.x,
                        } }
                    >
                        {content}
                    </PopoverContainer>
                )
            }
        </>
    )
}

