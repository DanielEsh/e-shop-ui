import React from 'react';

export type RangeSliderOptions = {

}

const RangeSlider = () => {
    return (
        <div>
            <input
                type="range"
                min="0"
                max="1000"
                className="thumb thumb--right"
            />
        </div>
    );
};

export default RangeSlider;
