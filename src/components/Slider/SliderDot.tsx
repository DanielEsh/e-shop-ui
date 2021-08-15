import React, {useState, useEffect} from 'react';

import {Dot} from "./Slider.styles";

const SliderDot = ({value, max, min, isDragged, onDragStart, onDragEnd, onChangeValue},) => {
    const [position, setPosition] = useState(null);
    const [isClick, setClick] = useState<boolean>(false)
    const [startX, setStartX] = useState(0);
    const [startPosition, setStartPosition] = useState(0)
    const [currentX, setCurrentX] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

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
        diff = (event.clientX - startPosition) / 100;
        console.log('event', event.clientX);
        console.log('current', currentX);
        console.log('DIFF', diff);
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

        console.log('VALUE', value);
        onChangeValue(value);
    }

    const bindEvents = () => {
        // console.log('bind');
        window.addEventListener('mousemove', handleDragged);
        window.addEventListener('touchmove', handleDragged);
        window.addEventListener('mouseup', handleDragEnd);
        window.addEventListener('touchend', handleDragEnd);
        window.addEventListener('contextmenu', handleDragEnd);
    }

    const unbindEvents = () => {
        console.log('unbind');
        window.removeEventListener('mousemove', handleDragged);
        window.removeEventListener('touchmove', handleDragged);
        window.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('touchend', handleDragEnd);
        window.removeEventListener('contextmenu', handleDragEnd);
    }



    return (
        <Dot
            tabindex={0}
            style={position}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
        />
    );
};

export default SliderDot;
