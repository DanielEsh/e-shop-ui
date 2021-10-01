import React, { forwardRef } from 'react';
import cn from 'classnames';

import { 
    Wrapper,
    Target,
    Content,
 } from './Tooltip.styles';

export type TooltipProps = {

}

const Tooltip = ({
    children
}, ref) => {

    const classes = cn(

    )

    return (
        <Wrapper>
            <Content>
                Tooltip
            </Content>
            <Target>
                Test element
            </Target>
        </Wrapper>
    );
}

export default forwardRef(Tooltip);