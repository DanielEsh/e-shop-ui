import React, {forwardRef, ReactElement} from 'react';

import {
    DropdownItemRoot,
} from "./Dropdown.styles";

export type DropdownItemProps = {
    children: ReactElement | string;
    header?: boolean;
    disabled?: boolean;
};

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>((props, ref) => {
    const {
        children,
        header,
        disabled,
    } = props;

    return (
        <DropdownItemRoot 
            ref={ ref }
            header={ header }
            disabled={ disabled }
        >
            {children}
        </DropdownItemRoot>
    )
})

DropdownItem.displayName = 'DropdownItem';
