import React, {useState, useEffect, useRef, useMemo} from 'react';

import SliderDot from "./SliderDot";

import {
    SliderRoot,
    Rail,
    Track,
    ProgressBar,
    SliderInfo,
} from "./Slider.styles";

export type RangeSliderOptions = {
    theme: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark',
    min: number,
    max: number,
    disabled: boolean,
    mode: 'vertical' | 'horizontal',
    label: string,
    showCurrent: boolean,
    transition: boolean,
}

const RangeSlider: React.FC<RangeSliderOptions> = ({
    theme = 'primary',
    min,
    max,
    disabled = false,
    mode = 'horizontal',
    label,
    showCurrent,
    transition = true,
}) => {

    const [firstValue, setFirstValue] = useState<number>(min);
    const [secondValue, setSecondValue] = useState<number>(max);
    const [isDragged, setIsDragged] = useState<boolean>(false);
    const [sliderSize, setSliderSize] = useState(1);
    
    const railEl = useRef(null);


    const handleResetSize = () => {
        if (railEl.current) {
            console.log('rail', railEl.current.clientWidth);
            setSliderSize(railEl.current.clientWidth);
        }
    }


    useEffect(() => {
        console.log('Mounted');
        handleResetSize();
        window.addEventListener('resize', handleResetSize);
        return () => {
            console.log('Destroy');
            window.removeEventListener('resize', handleResetSize);
        }
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

    const progressStyle = useMemo(() => {
        return {
            width: progressSize,
            left: progressStart,
        }
    }, [maxValue, minValue]);

    const handleDragStart = () => {
        setIsDragged(true);
    }

    const handleDragEnd = () => {
        setIsDragged(false);
    }

    return (
        <SliderRoot role="slider">
            <SliderInfo>
                <span>{ min }</span>
                <span>{ max }</span>
            </SliderInfo>
            <Rail ref={ railEl }>
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
                        railSize={ sliderSize }
                        value={ firstValue }
                    />

                    <SliderDot
                        isDragged={ isDragged }
                        max={ max }
                        min={ min }
                        onChangeValue={ (value) => setSecondValue(value) }
                        onDragEnd={ handleDragEnd }
                        onDragStart={ handleDragStart }
                        railSize={ sliderSize }
                        value={ secondValue }
                    />

                    <ProgressBar progressStyle={ progressStyle } />
                </Track>
            </Rail>
        </SliderRoot>
    );
};

export default RangeSlider;
