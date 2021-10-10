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
    arrow: boolean;
    placement: 'top' | 'left' | 'bottom' | 'right';
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
    arrow=true,
    placement = 'top',
    contentOffset = 8,
    enterDelay = 250,
    leaveDelay = 250,
}, ref) => {
    const [isVisible, setVisible] = useState<boolean>(false);
    const [isShow, setShow] = useState<boolean>(false);
    const [position, setPosition] = useState(null);
    const [timeout, setCloseTimout] = useState(null);

    const contentEl = useRef<HTMLDivElement>(null);
    const targetEl = useRef<HTMLDivElement>(null);

    const contentClasses = cn({
        'is-hovering': isShow
    });

    useEffect(() => {
        document.addEventListener('keydown', handlePressEsc);
        return () => {
            document.removeEventListener('keydown', handlePressEsc);
        }
    }, [])

    const show = () => {
        setTimeout( () => {
            setVisible(true);
            setShow(true);
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
        setShow(false);
        hide();
    }

    const handleContentEnter = () => {
        clearTimeout(timeout);
        setVisible(true);
    }

    const handleContentLeave = () => {
        // hide();
    }

    const handleClick = () => {
        if (clicked) {
            setVisible(!isVisible)
        }
    }

    const handlePressEsc = (event) => {
        if (event.code === 'Escape') {
            hide();
        }
    }

    const setContentPosition = () => {
        const content = contentEl.current;
        const target = targetEl.current;
        const arrowOffset = arrow ? 6 : 0;

        if (placement === 'top') {
            content.style.left = `${target.clientWidth / 2}px`;
            content.style.top = `-${content.clientHeight + contentOffset + arrowOffset}px`
        } else if (placement === 'bottom') {
            content.style.left = `${target.clientWidth / 2}px`;
            content.style.top = `${target.clientHeight + contentOffset + arrowOffset}px`;
        } else if (placement === 'left') {
            content.style.left = `-${target.clientWidth / 2 + contentOffset + arrowOffset}px`;
            content.style.top = `-${target.clientHeight / 2}px`
        } else {
            content.style.left = `${target.clientWidth}px`;
            content.style.top = `-${target.clientHeight / 2}px`
        }
    }

    return (
        <Wrapper>
            {
                 <Content 
                    ref={ contentEl }
                    className={ contentClasses }
                    arrow={ arrow }
                    placement={ placement }
                    onMouseEnter={ handleContentEnter }
                    onMouseLeave={ handleContentLeave }
             >
                 <div>
                     { isVisible && content }
                 </div>
             </Content>
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