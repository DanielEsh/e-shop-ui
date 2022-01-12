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

    let nodes;

    const onKeyDown = (event) => {
        if (isKeyCode(event.keyCode, [Keys.UP, Keys.DOWN])) {
            const direction = event.keyCode - 39;
            setIdx(idx + direction);
        }
    }

    const onBlur = () => {
        console.log('blur');
        nodes[0].focus();
    }


    useEffect(() => {
        let firstNode, lastNode;
        menuRef.current.focus();
        
        nodes = [].slice.call(menuRef.current.querySelectorAll('[role="menuitem"]'));
        
        if (idx <= nodes.length && idx >= 0) {
            nodes[idx].focus();
        }

        if (nodes.length) {
            const n =nodes.filter(node => !node.attributes.disabled)
            firstNode = n[0];
            lastNode = n[n.length - 1];
            console.log('firstNode', firstNode);
            console.log('lastNode', lastNode);
        }
       
        nodes[3].addEventListener('blur', onBlur);
        
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
