import React, {useState, useEffect, useRef, useMemo} from 'react';
import cn from 'classnames';

import SliderDot from "./SliderDot";

import {
    SliderRoot,
    Rail,
    Track,
    ProgressBar,
    SliderCurrentValue,
    Step,
} from "./Slider.styles";

export type RangeSliderOptions = {
    theme: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark',
    min: number,
    max: number,
    step: number,
    disabled: boolean,
    tooltip: 'never' | 'always' | 'focus',
    transition: boolean,
    value: any;
    onChange?: (item) => void,
    range: boolean,
    showMaxMin: boolean,
}

const RangeSlider: React.FC<RangeSliderOptions> = ({
    theme = 'primary',
    min,
    max,
    value,
    step= 1,
    disabled = false,
    tooltip='never',
    transition = true,
    onChange,
    range= false,
    showMaxMin= false,
}) => {

    const [firstValue, setFirstValue] = useState<number>(min);
    const [secondValue, setSecondValue] = useState<number>(max);
    const [isDragged, setIsDragged] = useState<boolean>(false);
    const [sliderSize, setSliderSize] = useState(1);
    const [oldValue, setOldValue] = useState([]);
    const [focusDot, setFocusDot] = useState(0);

    const sliderEl = useRef(true);
    const railEl = useRef(null);

    const classes = cn({
        'is-disabled': disabled,
    })


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

        if (onChange) {
            if (range) {
                onChange([firstValue, secondValue]);
            } else {
                onChange(firstValue);
            }
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

    const stops = useMemo(() => {
        if (step === 0) {
            return [];
        }

        const stopCount = (max - min) / step;
        const stepWidth = 100 * step / (max - min);
        const result = [];

        for (let i = 1; i < stopCount; i++) {
            result.push(i * stepWidth);
        }

        return result;
    }, [step, firstValue, max, min, range]);

    const setValues = (value) => {
        if (min > max || disabled) {
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

    const handleDragStart = (index) => {
        setFocusDot(index);
        setIsDragged(true);
    }

    const handleDragEnd = () => {
        setFocusDot(0);
        setIsDragged(false);
    }

    const setPosition = (percent) => {
        let dot = 'dot1';
        const targetValue = min + percent * (max - min) / 100;
        if (range) {
            if (Math.abs(minValue - targetValue) < Math.abs(maxValue - targetValue)) {
                dot = firstValue < secondValue ? 'dot1' : 'dot2';
            } else {
                dot = firstValue > secondValue ? 'dot1' : 'dot2';
            }

            if (dot === 'dot1') {
                setValues([targetValue, secondValue])
            } else {
                setValues([firstValue, targetValue])
            }
            return;
        }

        setValues(targetValue);
    }

    const handleRailClick = (e) => {
        if (isDragged || step > 1) {
            return;
        }

        const sliderOffsetLeft = railEl.current.getBoundingClientRect().left;
        const currentValue = (e.clientX - sliderOffsetLeft) / sliderSize * 100;
        setPosition(currentValue);
    }

    return (
        <SliderRoot
            className={ classes }
            ref={ sliderEl }
            role="slider"
        >
            {
                showMaxMin &&
                <SliderCurrentValue>
                    <span>{ min }</span>
                    <span>{ max }</span>
                </SliderCurrentValue>
            }
            <Rail
                onClick={ handleRailClick }
                ref={ railEl }
            >
                <Track>
                    <SliderDot
                        disabled={ disabled }
                        focus={ focusDot === 1 }
                        isDragged={ isDragged }
                        max={ max }
                        min={ min }
                        onChangeValue={ (value) => {
                            setFirstValue(value)
                        } }
                        onDragEnd={ handleDragEnd }
                        onDragStart={ () => handleDragStart(1) }
                        railSize={ sliderSize }
                        step={ step }
                        tooltip={ tooltip }
                        value={ firstValue }
                    />

                    {
                        range &&
                        <SliderDot
                            disabled={ disabled }
                            focus={ focusDot === 2 }
                            isDragged={ isDragged }
                            max={ max }
                            min={ min }
                            onChangeValue={ (value) => setSecondValue(value) }
                            onDragEnd={ handleDragEnd }
                            onDragStart={ () => handleDragStart(2) }
                            railSize={ sliderSize }
                            step={ step }
                            tooltip={ tooltip }
                            value={ secondValue }
                        />
                    }

                    <ProgressBar progressStyle={ progressStyle } />

                    {
                        step >= 2 &&
                        stops.map((stop, index) => (
                            <Step
                                key={ index }
                                left={ stop }
                            />
                        ))
                    }
                </Track>
            </Rail>
        </SliderRoot>
    );
};

export default RangeSlider;
