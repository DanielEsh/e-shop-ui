import React, {forwardRef, ReactElement} from 'react';
import {Tooltip} from '../Tooltip';

export type DropdownProps = {
    children: ReactElement | string;
};

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
    const {
        children
    } = props;

    const menuPopover = (): JSX.Element => {
        return (
            <div>test</div>
        )
    };

    return (
        <>
            <Tooltip
                popover={ menuPopover() }
                clickable
            >
                <span>{children}</span>
            </Tooltip>
        </>
    )
})

Dropdown.displayName = 'Dropdown';
