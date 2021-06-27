import React from 'react';

const SelectIcon = () => {
    return (
        <div className="v-select__arrow-box">
            <svg className="v-select__arrow v-select__arrow--hover"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20">
                        <path
                            d="M10 12.5L6.464 8.964l1.18-1.178L10 10.143l2.357-2.357 1.179 1.178L10 12.5z" />
            </svg>
         </div>
    );
};

export default SelectIcon;
