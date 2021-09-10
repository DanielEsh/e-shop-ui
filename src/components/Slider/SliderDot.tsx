import React, {useState, useEffect, useMemo} from 'react';
import cn from 'classnames';

import {Dot, DotTooltip, DotHandle} from "./Slider.styles";

const SliderDot = React.forwardRef(({value, max, min, isDragged, onDragStart, onDragEnd, onChangeValue, tooltip, focus, railSize}, ref) => {
    const [position, setPosition] = useState(null);
    const [isClick, setClick] = useState<boolean>(false)
    const [startX, setStartX] = useState(0);
    const [startPosition, setStartPosition] = useState(0)
    const [currentX, setCurrentX] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const classes = cn({
        'is-hovering': isHovering || isDragged,
    })

    const calculateCurrentPosition = (value) => {
        return `${(value - min) / (max - min) * 100}%`;
    }

    const currentPosition = calculateCurrentPosition(value);

    const style = () => {
        return {
            left: currentPosition,
            transition: 'left 0s ease'
        }
    }
    
    const showTooltip = useMemo(() => {
        switch (tooltip) {
        case 'always':
            return true;
        case 'never':
            return false;
        case 'focus':
            return focus || isDragged;
        default:
            return false;
        }
    }, [tooltip, focus, isDragged])

    useEffect(() => {
        setPosition(style());
    }, [value])

    const handleDragStart = (event: React.MouseEvent) => {
        onDragStart();
        setClick(true);
        console.log('dragStart', event.clientX);
        setStartX(event.clientX);
        setStartPosition(parseFloat(currentPosition));
    }

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    /** Когда кликнули на ползунок, вешаем события на драг и тач **/
    const handleMouseDown = (event: React.MouseEvent) => {
        // console.log('mouseDown')
        onDragStart(event)
        bindEvents();
    }

    const handleDragged = (event) => {
        // console.log('handleDragged');
        let diff = 0;
        setCurrentX(event.clientX);
        diff = (event.clientX - startPosition) / railSize * 100;
        rposition(startPosition + diff);
    }

    const handleDragEnd = (event) => {
        onDragEnd();
        setClick(false);
        unbindEvents();
    }

    const rposition = (percent) => {
        // console.log('rpos', percent);
        if (percent < 0) {
            percent = 0;
        }
        if (percent > 100) {
            percent = 100;
        }

        const lengthPerStep = 100 / ((max - min) / 1);
        const steps = Math.round(percent / lengthPerStep);
        let value = steps * lengthPerStep * (max - min) * 0.01 + min;
        value = parseFloat(value.toFixed(1));
        onChangeValue(value);
    }

    const bindEvents = () => {
        window.addEventListener('mousemove', handleDragged);
        window.addEventListener('touchmove', handleDragged);
        window.addEventListener('mouseup', handleDragEnd);
        window.addEventListener('touchend', handleDragEnd);
        window.addEventListener('contextmenu', handleDragEnd);
    }

    const unbindEvents = () => {
        window.removeEventListener('mousemove', handleDragged);
        window.removeEventListener('touchmove', handleDragged);
        window.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('touchend', handleDragEnd);
        window.removeEventListener('contextmenu', handleDragEnd);
    }



    return (
        <>
            <Dot
                className={ classes }
                onDragEnd={ handleDragEnd }
                onDragStart={ handleDragStart }
                onMouseDown={ handleMouseDown }
                onMouseEnter={ handleMouseEnter }
                onMouseLeave={ handleMouseLeave }
                style={ position }
                tabindex={ 0 }
            >
                {
                    showTooltip &&
                    <DotTooltip>
                        { value }
                    </DotTooltip>
                }
                <DotHandle />
            </Dot>
        </>
    );
});

export default SliderDot;
