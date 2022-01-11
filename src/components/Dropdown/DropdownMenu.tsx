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

    const [idx, setIdx] = React.useState<number>(0);

    const menuRef = useRef<HTMLDivElement>(null);

    let nodes;

    const onKeyDown = (event) => {
        if (isKeyCode(event.keyCode, [Keys.UP, Keys.DOWN])) {
            const direction = event.keyCode - 39;
            setIdx(idx + direction);
        }
    }


    useEffect(() => {
        menuRef.current.focus();
        nodes = menuRef.current.childNodes;
        if (idx <= nodes.length && idx >= 0) {
            nodes[idx].focus();
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
