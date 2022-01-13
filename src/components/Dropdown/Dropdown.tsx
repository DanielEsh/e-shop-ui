import React, {forwardRef, ReactElement, createContext} from 'react';
import {Tooltip, Offset} from '../Tooltip';
import {Placement} from '@floating-ui/react-dom';

import {
    Test,
} from "./Dropdown.styles";

export const DropdownContext = createContext(undefined);

export type DropdownProps = {
    children: ReactElement | string;
    menu: ReactElement;
    offset?: Offset;
    placement?: Placement;
    enterDelay?: number;
    leaveDelay?: number;
    clickable?: boolean;
};

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
    const {
        children,
        menu,
        placement = 'bottom-start',
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
                    placement={ placement }
                    { ...props }
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
