import React, {useState, useEffect, useMemo, useCallback} from 'react';
import cn from 'classnames';

import {
    Dot,
    DotTooltip,
    DotHandle
} from "./Slider.styles";

const SliderDot = ({
    value,
    max, 
    min, 
    isDragged, 
    onDragStart,
    onDragEnd,
    onChangeValue,
    tooltip,
    focus,
    railSize,
    step,
    disabled
}) => {
    const [position, setPosition] = useState(null);
    const [startX, setStartX] = useState(0);
    const [startPosition, setStartPosition] = useState(0)
    const [isHovering, setIsHovering] = useState(false);

    const classes = cn({
        'is-hovering': isHovering || isDragged && !disabled,
        'is-disabled': disabled,
    })

    /** Set left position for dots **/
    const calculateCurrentPosition = useCallback((value) => {
        return `${(value - min) / (max - min) * 100}%`;
    }, [min, max])

    const currentPosition = calculateCurrentPosition(value);

    const style = useMemo(() => {
        return {
            left: currentPosition,
            transition: 'left 0s ease'
        }
    }, [value]);

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
        setPosition(style);
    }, [value])

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    /** When clicked on dot, start dragged end touch events **/
    const handleMouseDown = (event: React.MouseEvent) => {
        onDragStart(event)
        bindEvents();
    }

    /** Calculate current value, change dot position **/
    const changePosition = (percent: number) => {
        if (disabled) {
            return;
        }

        if (percent < 0) {
            percent = 0;
        }
        if (percent > 100) {
            percent = 100;
        }

        const lengthPerStep = 100 / ((max - min) / step);
        const steps = Math.round(percent / lengthPerStep);
        let value = steps * lengthPerStep * (max - min) * 0.01 + min;
        value = parseFloat(value.toFixed(1));
        onChangeValue(value);
    }

    /** When dragStart set started values **/
    const handleDragStart = (event: React.MouseEvent) => {
        onDragStart();
        setStartX(event.clientX);
        setStartPosition(parseFloat(currentPosition));
    }

    /** When dragged we listen mouse events end set new position on Dot **/
    const handleDragged = (event: React.MouseEvent) => {
        const currentXPosition = event.clientX;
        const diff = (currentXPosition - startX) / railSize * 100;
        changePosition(startPosition + diff);
    }

    /** Clear events **/
    const handleDragEnd = () => {
        onDragEnd();
        unbindEvents();
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
}

export default SliderDot;
