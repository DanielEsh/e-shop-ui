import React, {forwardRef, ReactElement, useRef, createContext} from 'react';
import {Tooltip} from '../Tooltip';

import {
    Test,
    DropdownMenu,
    DropdownMenuItem,
} from "./Dropdown.styles";

export const DropdownContext = createContext(undefined);

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

    const context = {
        open,
    }

    return (
        <>
            <DropdownContext.Provider value={ context }>
                <Tooltip
                    popover={ menuPopover() }
                    placement="bottom-start"
                    clickable
                >
                    <Test
                        tabIndex="0"
                    >
                        {children}
                    </Test>
                </Tooltip>
            </DropdownContext.Provider>
            
        </>
    )
})

Dropdown.displayName = 'Dropdown';
