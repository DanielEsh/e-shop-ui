import React, {forwardRef, ReactElement, createContext} from 'react';
import {Tooltip} from '../Tooltip';

import {
    Test,
} from "./Dropdown.styles";

export const DropdownContext = createContext(undefined);

export type DropdownProps = {
    children: ReactElement | string;
    menu: ReactElement;
};

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
    const {
        children,
        menu,
    } = props;

    const context = {
        open,
    }

    return (
        <>
            <DropdownContext.Provider value={ context }>
                <Tooltip
                    ref={ ref }
                    popover={ menu }
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
