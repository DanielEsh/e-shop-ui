import React, {useState, useEffect, useRef, useMemo} from 'react';

import SliderDot from "./SliderDot";

import {
    SliderRoot,
    Rail,
    Track,
    ProgressBar,
    SliderCurrentValue,
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
    value: any;
    onChange: (item) => void,
    range: boolean,
}

const RangeSlider: React.FC<RangeSliderOptions> = ({
    theme = 'primary',
    min,
    max,
    value,
    disabled = false,
    mode = 'horizontal',
    label,
    showCurrent,
    transition = true,
    onChange,
    range= false,
}) => {

    const [firstValue, setFirstValue] = useState<number>(min);
    const [secondValue, setSecondValue] = useState<number>(max);
    const [isDragged, setIsDragged] = useState<boolean>(false);
    const [sliderSize, setSliderSize] = useState(1);
    const [oldValue, setOldValue] = useState([]);

    const sliderEl = useRef(true);
    const railEl = useRef(null);


    const handleResetSize = () => {
        if (railEl.current) {
            setSliderSize(railEl.current.clientWidth);
        }
    };


    useEffect(() => {
        if (sliderEl.current) {
            sliderEl.current = false;
            handleResetSize();
            window.addEventListener('resize', handleResetSize);
            setValues(value);
            return;
        }

        if (range) {
            onChange([firstValue, secondValue]);
        } else {
            onChange(firstValue);
        }

        return () => {
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
        return range
            ? `${100 * (maxValue - minValue) / (max - min)}%`
            : `${100 * (firstValue - min) / (max - min)}%`
    }, [maxValue, minValue]);

    const progressStart = useMemo(() => {
        return range
            ? `${100 * (minValue - min) / (max - min)}%`
            : '0%'
    }, [minValue]);

    const progressStyle = useMemo(() => {
        return {
            width: progressSize,
            left: progressStart,
        }
    }, [maxValue, minValue]);

    const setValues = (value) => {
        if (min > max) {
            return;
        }

        if (value.length && range) {
            setOldValue(value);
            setFirstValue(value[0]);
            setSecondValue(value[1]);
            return;
        }

        setOldValue(value);
        setFirstValue(value);
    }

    const handleDragStart = () => {
        setIsDragged(true);
    }

    const handleDragEnd = () => {
        setIsDragged(false);
    }

    return (
        <SliderRoot
            ref={ sliderEl }
            role="slider"
        >
            <SliderCurrentValue>
                <span>{ min }</span>
                <span>{ max }</span>
            </SliderCurrentValue>
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

                    {
                        range &&
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
                    }

                    <ProgressBar progressStyle={ progressStyle } />
                </Track>
            </Rail>
        </SliderRoot>
    );
};

export default RangeSlider;
