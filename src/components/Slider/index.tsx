import React, {useState, useEffect} from 'react';

import SliderDot from "./SliderDot";

import {
    SliderRoot,
    Rail,
    Track,
    Progress,
    Dot
} from "./Slider.styles";

export type RangeSliderOptions = {
    theme: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark',
    min: number,
    max: number,
    disabled: boolean,
    mode: 'vertical' | 'horizontal',
    label: string,
    showCurrent: boolean,
}

const RangeSlider: React.FC<RangeSliderOptions> = ({
    theme = 'primary',
    min,
    max,
    disabled = false,
    mode = 'horizontal',
    label,
    showCurrent,
                                                   }) => {

    const [firstValue, setFirstValue] = useState(min);
    const [secondValue, setSecondValue] = useState(max);

    useEffect(() => {
        setFirstValue(min);
        setSecondValue(max);
    }, [firstValue, secondValue]);

    const handleDragStart = () => {
        console.log('dragStart');
        setFirstValue(min);
        setSecondValue(max);
    }

    const handleDragEnd = () => {
        console.log('dragEnd');
    }

    return (
        <SliderRoot role='slider'>
           <Rail>
               <Track>
                   <Progress>

                       <SliderDot
                           value={firstValue}
                           max={max}
                           min={min}
                           onDragStart={handleDragStart}
                           onDragEnd={handleDragEnd}
                       />

                       <SliderDot
                           value={secondValue}
                           max={max}
                           min={min}
                           onDragStart={handleDragStart}
                           onDragEnd={handleDragEnd}
                       />

                   </Progress>
               </Track>
           </Rail>
        </SliderRoot>
    );
};

export default RangeSlider;
