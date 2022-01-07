import React, {forwardRef, ReactElement} from 'react';

export type DropdownProps = {
    children: ReactElement | string;
};

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
    const {
        children
    } = props;

    return (
        <div ref={ ref }>
            {children}
        </div>
    )
})

Dropdown.displayName = 'Dropdown';
