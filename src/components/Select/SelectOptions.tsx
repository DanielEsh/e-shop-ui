import React, { useState, useEffect, useRef } from 'react';
import {SelectDropDown, SelectDropDownLi, SelectDropDownUl} from "./Select.styles";

type Option = {
    label: string | number,
    value: string | number,
}

export type SelectOptions = {
    options: Array<Option>,
    selected: Array<Object>,
    setSelected: React.Dispatch<Object>,
    setOpened: React.Dispatch<boolean>,
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
        <SelectDropDown maxHeight={ maxHeight } onClick={ handleClick } ref={ selectDropdown }>
            <SelectDropDownUl>
                {options.map((option, index) => (
                    <SelectDropDownLi
                        className={ [selected.includes(option) ? '_active' : ''] }
                        key={ index }
                        onClick={ (e) => {
                            e.stopPropagation();
                            handleOptionClick(option);
                        } }
                    >
                        {option.label}
                    </SelectDropDownLi>
                ))}
            </SelectDropDownUl>
        </SelectDropDown>
    )
}

export default SelectOptions;
