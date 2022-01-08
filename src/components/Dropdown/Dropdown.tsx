import React, {forwardRef, ReactElement} from 'react';
import {Tooltip} from '../Tooltip';

import {
    DropdownMenu,
    DropdownMenuItem,
} from "./Dropdown.styles";

export type DropdownProps = {
    children: ReactElement | string;
};

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
    const {
        children
    } = props;

    const menuPopover = (): JSX.Element => {
        return (
            <DropdownMenu>
                <DropdownMenuItem header>
                    Header
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Item
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Item
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    Disabled item
                </DropdownMenuItem>
            </DropdownMenu>
        )
    };

    return (
        <>
            <Tooltip
                popover={ menuPopover() }
                placement="bottom-start"
                clickable
            >
                <div>{children}</div>
            </Tooltip>
        </>
    )
})

Dropdown.displayName = 'Dropdown';
