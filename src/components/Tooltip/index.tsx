import React, { forwardRef, useState, useEffect, useRef } from 'react';
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
    placement: 'top' | 'left' | 'bottom' | 'right'
    contentOffset: number;
    enterDelay: number;
    leaveDelay: number;
}

type PositionProps = {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
}

const Tooltip = ({
    children,
    content = 'content',
    clicked,
    placement = 'top',
    contentOffset = 25,
    enterDelay = 250,
    leaveDelay = 250,
}, ref) => {
    const [isVisible, setVisible] = useState<boolean>(false);
    const [position, setPosition] = useState<PositionProps>(null);
    const [timeout, setCloseTimout] = useState(null);

    const contentEl = useRef<HTMLDivElement>(null);
    const targetEl = useRef<HTMLDivElement>(null);

    const classes = cn(

    )

    useEffect(() => {
    }, [])

    const show = () => {
        setTimeout( () => {
            setVisible(true);
            setContentPosition();
        }, enterDelay);
    }

    const hide = () => {
        const timeout = setTimeout( () => setVisible(false), leaveDelay);
        setCloseTimout(timeout);
    }

    const handleMouseEnter = () => {
        if (clicked) return;
        show();
    }

    const handleMouseLeave = () => {
        if (clicked) return;
        hide();
    }

    const handleContentEnter = () => {
        clearTimeout(timeout);
        setVisible(true);
    }

    const handleContentLeave = () => {
        hide();
    }

    const handleClick = () => {
        if (clicked) {
            setVisible(!isVisible)
        }
    }

    const setContentPosition = () => {
        const content = contentEl.current;
        const target = targetEl.current;

        if (placement === 'top') {
            content.style.top = `-${contentOffset}px`;
        } else if (placement === 'bottom') {
            content.style.top = `${contentOffset}px`;
        } else if (placement === 'left') {
            content.style.left = `-${content.clientWidth}px`
        } else {
            content.style.left  = `${content.clientWidth + target.clientWidth}px`
        }
    }

    return (
        <Wrapper>
            {
                isVisible && (
                    <Content 
                        ref={ contentEl }
                        onMouseEnter={ handleContentEnter }
                        onMouseLeave={ handleContentLeave }
                    >
                        { content }
                    </Content>
                )
            }
            <Target
                ref={ targetEl }
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