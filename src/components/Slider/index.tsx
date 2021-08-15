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

    const [firstValue, setFirstValue] = useState<number>(min);
    const [secondValue, setSecondValue] = useState<number>(max);
    const [isDragged, setIsDragged] = useState<boolean>(false);

    useEffect(() => {
        // setFirstValue(min);
        // setSecondValue(max);
    }, [firstValue, secondValue]);

    const handleDragStart = () => {
        setIsDragged(true);
    }

    const handleDragEnd = () => {
        setIsDragged(false);
        // setFirstValue(20)
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
                           isDragged={isDragged}
                           onDragStart={handleDragStart}
                           onDragEnd={handleDragEnd}
                           onChangeValue={(value) => {
                               setFirstValue(value)
                           }}
                       />

                       <SliderDot
                           value={secondValue}
                           max={max}
                           min={min}
                           isDragged={isDragged}
                           onDragStart={handleDragStart}
                           onDragEnd={handleDragEnd}
                           onChangeValue={(value) => setSecondValue(value)}
                       />

                   </Progress>
               </Track>
           </Rail>
        </SliderRoot>
    );
};

export default RangeSlider;
