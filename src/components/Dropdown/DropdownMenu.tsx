import React, {forwardRef, ReactElement, useEffect, useRef} from 'react';
import { isKeyCode, Keys } from '../../utils/isCodeKey';

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

    const menuRef = useRef<HTMLDivElement>(null);
    const count = useRef(0);

    let nodes;
    let index = 0;

    const getNextFocusedNodeIndex = (direction: number) => {
        index += direction;
        if (index > (nodes.length - 1)) index = 0;
        if (index < 0) index = nodes.length - 1;
        return index
    };

    const setFocusedNode = () => {
        nodes[count.current].focus();
    }

    const onKeyDown = (event: KeyboardEvent) => {
        if (isKeyCode(event.keyCode, [Keys.UP, Keys.DOWN])) {
            const direction = event.keyCode - 39;
            count.current = getNextFocusedNodeIndex(direction); 
            setFocusedNode();
        }
    }


    const getNotDisabledMenuNodes = () => {
        return []
            .slice
            .call(menuRef.current.querySelectorAll('[role="menuitem"]'))
            .filter(node => !node.attributes.disabled);
    };

    useEffect(() => { 
        nodes = getNotDisabledMenuNodes();
        setFocusedNode();

        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [])

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
