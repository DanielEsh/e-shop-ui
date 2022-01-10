import React, {forwardRef, ReactElement, createContext} from 'react';
import {Tooltip} from '../Tooltip';

import {
    Test,
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

    const menuPopover = (): JSX.Element => {
        return (
            <span>test</span>
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
