import React from 'react';

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
    return (
        <SliderRoot role='slider'>
           <Rail>
               <Track>
                   <Progress>
                       <Dot />
                       <Dot />
                   </Progress>
               </Track>
           </Rail>
        </SliderRoot>
    );
};

export default RangeSlider;
