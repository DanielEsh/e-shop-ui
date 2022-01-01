import React, {FC} from 'react';

export type PopoverProps = {
    isVisible?: boolean;
}

export const Popover:FC<PopoverProps> = (props) => {
    const { isVisible } = props;

    return (
        <div>{isVisible && <div>test</div>}</div>
    )
}

