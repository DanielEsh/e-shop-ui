import React, { useState, useEffect, useRef } from 'react';
import classNames from "classnames";

import SelectIcon from "./SelectIcon";
import ResetIcon from "./ResetIcon";
import {
    SelectRoot,
    SelectInput,
    Icon,
    Reset,
    IconWrapper,
    SelectDropDown,
    SelectDropDownUl,
    SelectDropDownLi,
    SelectedItem,
    SelectNative,
} from './Select.styles';

export type SelectProps = {
    theme: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark',
    value: string,
    options: [],
    name: string,
    multiple: boolean,
    defaultValue: string | number | [],
    clear: boolean,
    maxOptionsVisible: number,
    native: boolean,
}

const Select = ({
    theme,
    value,
    options,
    multiple,
    defaultValue,
    clear,
    maxOptionsVisible = 1,
    native,
                }) => {
    const [isOpened, setOpened] = useState<boolean>(false);
    const [isSelected, setSelected] = useState<any>(multiple ? [] : []);

    const rootClassName = classNames( `color-${theme}`)

    const handleRootClick = () => {
        setOpened(!isOpened);
    }

    const handleSelectOption = (item) => {
        console.log('open', item);
        if (multiple) {
            console.log('multiple',isSelected);
            if (isSelected.includes(item)) {
                const filteredSelected = isSelected.filter(option => option !== item)
                setSelected(filteredSelected);
                return;
            }
            setSelected([...isSelected, item])
            return;
        }

        setSelected([item])
    }

    const handleRemoveOption = (option) => {
        console.log('option', option);
        const arr = isSelected.filter((item, index) => index !== option);
        console.log('arr', arr);
        setSelected(arr);
    }

    const renderSelectedOption = () => {
        if (multiple) {
            return isSelected.map((option, index) =>
                <SelectedItem
                    key={index}
                >
                    {option.label}
                    <IconWrapper
                        onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveOption(index);
                    }}>
                        <ResetIcon />
                    </IconWrapper>
                </SelectedItem>);
        }

        return isSelected.map(option => option.label);
    }

    const reset = () => {
        if (!defaultValue && !clear) return;
        setSelected(defaultValue);
        setOpened(false);
    }

    const renderCustomSelect = () => {
        return (
            <SelectRoot
                className={rootClassName}
                onClick={handleRootClick}
            >
                <SelectInput>
                    { renderSelectedOption() }
                    {
                        defaultValue && clear && isSelected.length > 1 &&
                        <Reset onClick={(e) => {
                            e.stopPropagation();
                            reset();
                        }}>
                            <ResetIcon />
                        </Reset>
                    }
                    <Icon>
                        <SelectIcon isOpened={isOpened} />
                    </Icon>
                </SelectInput>

                {
                    isOpened &&
                    <SelectOptions
                        options={options}
                        selected={isSelected}
                        setSelected={handleSelectOption}
                        setOpened={setOpened}
                        multiple={multiple}
                        maxOptionsVisible={maxOptionsVisible}
                    />
                }
            </SelectRoot>
        )
    }

    const renderNativeOptions = () => {
        return (
            options.map(({ label, value}, index) => {
                return (
                    <option
                        key={index}
                        value={value}>
                        {label}
                    </option>
                );
            })
        );
    }

    const renderNativeSelect = () => {
        return (
            <SelectNative
                name="select">
                { renderNativeOptions() }
            </SelectNative>
        )
    }

    return (
        native ? renderNativeSelect() : renderCustomSelect()
    );
};

const SelectOptions: React.FC<any> = ({options, selected, setSelected, setOpened, multiple, maxOptionsVisible}) => {
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

export default Select;
