import React, {forwardRef, ReactElement} from 'react';

import {
    DropdownItemRoot,
} from "./Dropdown.styles";

export type DropdownItemProps = {
    children: ReactElement | string;
    header?: boolean;
    disabled?: boolean;
    tabIndex?: number | string;
};

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>((props, ref) => {
    const {
        children,
        header,
        disabled,
        tabIndex,
    } = props;

    return (
        <DropdownItemRoot 
            ref={ ref }
            header={ header }
            disabled={ disabled }
            tabIndex={ tabIndex }
        >
            {children}
        </DropdownItemRoot>
    )
})

DropdownItem.displayName = 'DropdownItem';
