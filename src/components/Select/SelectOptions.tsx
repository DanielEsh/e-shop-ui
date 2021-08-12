import React, { useState, useEffect, useRef } from 'react';
import {SelectDropDown, SelectDropDownLi, SelectDropDownUl} from "./Select.styles";

type Option = {
    label: String | Number,
    value: String | Number,
}

export type SelectOptions = {
    options: Array<Option>,
    selected: Array<Object>,
    setSelected: React.Dispatch<Object>,
    setOpened:  React.Dispatch<boolean>,
    multiple: boolean,
    maxOptionsVisible: number,
}

const SelectOptions: React.FC<SelectOptions> = ({options, selected, setSelected, setOpened, multiple, maxOptionsVisible}) => {
    const selectDropdown = useRef(null);
    const [maxHeight, setMaxHeight] = useState(0)

    const handleClick = (e) => {
        selectDropdown.current.contains(e.target) || setOpened(false)
    }

    useEffect(() => {
        const height = maxOptionsVisible * 40;
        setMaxHeight(height);
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    const handleOptionClick = (option) => {
        setSelected(option);
        multiple ? setOpened(true) : setOpened(false);
    }

    return (
        <SelectDropDown ref={selectDropdown} maxHeight={maxHeight} onClick={handleClick}>
            <SelectDropDownUl>
                {options.map((option, index) => (
                    <SelectDropDownLi
                        onClick={(e) => {
                            e.stopPropagation();
                            handleOptionClick(option);
                        }}
                        className={[selected.includes(option) ? '_active' : '']}
                        key={index}
                    >
                        {option.label}
                    </SelectDropDownLi>
                ))}
            </SelectDropDownUl>
        </SelectDropDown>
    )
}

export default SelectOptions;