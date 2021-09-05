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
            console.log('MOUNT');
            handleResetSize();
            window.addEventListener('resize', handleResetSize);
            setValues(value);
            return;
        }
        console.log('Update', sliderEl);
        //const newValue = [firstValue, secondValue];

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

    const setValues = (value) => {
        console.log('value', value);
        if (min > max) {
            return;
        }

        if (value.length) {
            setOldValue(value);
            setFirstValue(value[0]);
            setSecondValue(value[1]);
            return;
        }
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
