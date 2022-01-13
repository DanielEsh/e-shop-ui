import React, {forwardRef, ReactElement, useEffect, useRef} from 'react';
import { isKeyCode, Keys } from '../../utils/isCodeKey';
import { First } from '../Rating/Rating.styles';

import {
    DropdownMenuRoot,
} from "./Dropdown.styles";

export type DropdownMenuProps = {
    children: ReactElement | string;
};

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>((props, ref) => {
    const {
        children
    } = props;

    const [idx, setIdx] = React.useState<number>(0);

    const menuRef = useRef<HTMLDivElement>(null);
    const count = useRef(0);

    let nodes;
    let index = 0;

    const onKeyDown = (event) => {
        if (isKeyCode(event.keyCode, [Keys.UP, Keys.DOWN])) {
            const direction = event.keyCode - 39;
            setIdx(idx + direction);
            index += direction;
            count.current = count.current + direction;

            // console.log('nodes', nodes);


            if (count.current > (nodes.length - 1)) {
                index = 0;
                setIdx(0);
                count.current = 0;
            }

            if (count.current < 0) {
                index = nodes.length
                setIdx(nodes.length);
                count.current = nodes.length - 1;
            }
        }
    }

    const onBlur = () => {
        nodes[0].focus();
    }


    const getNotDisabledMenuNodes = () => {
        return []
            .slice
            .call(menuRef.current.querySelectorAll('[role="menuitem"]'))
            .filter(node => !node.attributes.disabled);
    };


    useEffect(() => {
        let firstNode, lastNode;        
        nodes = getNotDisabledMenuNodes();
        console.log(idx, nodes[count.current]);

        if (count.current >= 0) {
            nodes[count.current].focus();
        }
        
        
        
        
        
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [idx])

    return (
        <DropdownMenuRoot 
            ref={ menuRef }
            tabIndex="0"
        >
            {children}
        </DropdownMenuRoot>
    )
})

DropdownMenu.displayName = 'DropdownMenu';
