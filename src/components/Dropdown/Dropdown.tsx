import React, {forwardRef, ReactElement, useRef} from 'react';
import {Tooltip} from '../Tooltip';

import {
    Test,
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

    const menu = useRef(null);

    const menuPopover = (): JSX.Element => {
        return (
            <DropdownMenu ref={ menu } tabIndex="0">
                <DropdownMenuItem header tabIndex="0">
                    Header
                </DropdownMenuItem>
                <DropdownMenuItem tabIndex="0">
                    Item
                </DropdownMenuItem>
                <DropdownMenuItem tabIndex="0">
                    Item
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    Disabled item
                </DropdownMenuItem>
            </DropdownMenu>
        )
    };

    const onClick = () => {
        console.log('click');
        setTimeout( () => {
            menu?.current.focus();
        }, 1000)
    };

    return (
        <>
            <Tooltip
                popover={ menuPopover() }
                placement="bottom-start"
                clickable
            >
                <Test
                    tabIndex="0"
                    onClick={ onClick }
                >
                    {children}
                </Test>
            </Tooltip>
        </>
    )
})

Dropdown.displayName = 'Dropdown';
