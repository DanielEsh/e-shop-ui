import React, {forwardRef, ReactElement} from 'react';

import {
    DropdownItemRoot,
} from "./Dropdown.styles";

export type DropdownItemProps = {
    children: ReactElement | string;
    header?: boolean;
    disabled?: boolean;
    tabIndex?: number | string;
    dataKey?: number | string;
};

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>((props, ref) => {
    const {
        children,
        header,
        disabled,
        tabIndex,
        dataKey,
    } = props;

    return (
        <DropdownItemRoot 
            ref={ ref }
            role="menuitem"
            header={ header }
            disabled={ disabled }
            tabIndex={ tabIndex }
            data-key={ dataKey }
        >
            {children}
        </DropdownItemRoot>
    )
})

DropdownItem.displayName = 'DropdownItem';
