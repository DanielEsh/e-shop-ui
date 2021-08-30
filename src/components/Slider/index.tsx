import React, {useState, useEffect, useRef, useMemo} from 'react';

import SliderDot from "./SliderDot";

import {
    SliderRoot,
    Rail,
    Track,
    ProgressBar,
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
        //
    }, [firstValue, secondValue]);

    const minValue = useMemo(() => {
        return Math.min(firstValue, secondValue);
    }, [firstValue, secondValue]);

    const maxValue = useMemo(() => {
        return Math.max(firstValue, secondValue)
    }, [firstValue, secondValue]);

    const progressSize = useMemo(() => {
        return `${100 * (maxValue - minValue) / (max - min)}%`;
    }, [maxValue, minValue]);

    const progressStart = useMemo(() => {
        return `${100 * (minValue - min) / (max - min)}%`;
    }, [minValue]);

    const handleDragStart = () => {
        setIsDragged(true);
    }

    const handleDragEnd = () => {
        setIsDragged(false);
    }

    return (
        <SliderRoot ref={ el } role="slider">
            <Rail>
                <Track>
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

                    <ProgressBar left={ progressStart } width={ progressSize } />
                </Track>
            </Rail>
        </SliderRoot>
    );
};

export default RangeSlider;
