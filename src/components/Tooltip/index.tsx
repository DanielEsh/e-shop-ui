import React, { forwardRef, useState } from 'react';
import cn from 'classnames';

import { 
    Wrapper,
    Target,
    Content,
 } from './Tooltip.styles';

export type TooltipProps = {
    children: HTMLElement;
    content: string;
    clicked: boolean;
}

const Tooltip = ({
    children,
    content = 'content',
    clicked,
}, ref) => {
    const [isVisible, setVisible] = useState<boolean>(false);

    const classes = cn(

    )

    const handleMouseEnter = () => {
        if (clicked) return;
        setVisible(true);
    }

    const handleMouseLeave = () => {
        if (clicked) return;
        setVisible(false);
    }

    const handleClick = () => {
        if (clicked) {
            setVisible(!isVisible)
        }
    }

    return (
        <Wrapper>
            {
                isVisible && (
                    <Content>
                        { content }
                    </Content>
                )
            }
            <Target
                onClick={ handleClick }
                onMouseEnter={ handleMouseEnter }
                onMouseLeave={ handleMouseLeave }
            >
                { children }
            </Target>
        </Wrapper>
    );
}

export default forwardRef(Tooltip);