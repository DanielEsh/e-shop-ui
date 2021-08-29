import React, {useState, useEffect, useRef} from 'react';

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
    
    const el = useRef(null);

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
        <SliderRoot ref={ el } role="slider">
            <Rail>
                <Track>
                    <Progress>

                        <SliderDot
                            isDragged={ isDragged }
                            max={ max }
                            min={ min }
                            onChangeValue={ (value) => {
                                setFirstValue(value)
                            } }
                            onDragEnd={ handleDragEnd }
                            onDragStart={ handleDragStart }
                            ref={ el }
                            value={ firstValue }
                        />

                        <SliderDot
                            isDragged={ isDragged }
                            max={ max }
                            min={ min }
                            onChangeValue={ (value) => setSecondValue(value) }
                            onDragEnd={ handleDragEnd }
                            onDragStart={ handleDragStart }
                            ref={ el }
                            value={ secondValue }
                        />

                    </Progress>
                </Track>
            </Rail>
        </SliderRoot>
    );
};

export default RangeSlider;
