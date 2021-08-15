import React, {useState, useEffect} from 'react';

import {Dot} from "./Slider.styles";

const SliderDot = ({value, max, min, onDragStart, onDragEnd}) => {
    const [position, setPosition] = useState(null);

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
    }, [])



    return (
        <Dot
            tabindex={0}
            style={position}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        />
    );
};

export default SliderDot;
