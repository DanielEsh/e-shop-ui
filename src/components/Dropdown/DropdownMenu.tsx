import React, {forwardRef, ReactElement, useEffect, useRef} from 'react';

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

    useEffect(() => {
        menuRef.current.focus();
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
