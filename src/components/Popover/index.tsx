import React, {FC, ReactElement} from 'react';

import {
    PopoverContainer
} from './Popover.styles';

// import {Portal} from '../Portal';

export type PopoverProps = {
    content?: ReactElement;
    children?: ReactElement;
    isVisible?: boolean;
}

export const Popover:FC<PopoverProps> = (props) => {
    const { 
        content,
        children,
        isVisible,
    } = props;

    return (
        <>
            { children }
            {
                isVisible && (
                    <PopoverContainer>
                        {content}
                    </PopoverContainer>
                )
            }
        </>
    )
}

