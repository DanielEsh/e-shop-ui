import React, { useState } from 'react';
import SelectIcon from "./SelectIcon";
import ResetIcon from "./ResetIcon";
import {
    SelectRoot,
    SelectInput,
    Icon,
    Reset,
    SelectDropDown,
    SelectDropDownUl,
    SelectDropDownLi,
    SelectedItem,
} from './Select.styles'

export type SelectProps = {
    theme: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark',
    value: String,
    options: Array<any>,
    name: string,
    multiple: boolean,
    defaultValue: string | number | [],
    clear: Boolean,
}

/*
TODO:
доделать функцию мультиселекта
сделать
сделать селект тегов
сделать сброс на дефолтное значение
скрол у дропдауна

bordered
clearAll
maxOptionsCount


 */

const Select = ({
    theme,
    value,
    options,
    multiple,
    defaultValue,
    clear,
                }) => {
    const [isOpened, setOpened] = useState<boolean>(false);
    const [isSelected, setSelected] = useState<any>(multiple ? [] : '');

    const handleRootClick = () => {
        setOpened(!isOpened);
    }

    const handleSelectOption = (item) => {
        if (multiple) {
            console.log('multiple',isSelected);
            setSelected([...isSelected, item])
            return;
        }
        setSelected(item);
        console.log(isSelected);
    }

    const handleRemoveOption = (option) => {
        console.log('option', option);
        const arr = isSelected.filter((item, index) => index !== option);
        console.log('arr', arr);
        setSelected(arr);
    }

    const renderSelectedOption = () => {
        if (!isSelected.length) return;
        if (multiple) {
            return isSelected.map((option, index) =>
                <SelectedItem
                    key={index}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveOption(index);
                    }}>
                    {option}
                </SelectedItem>);
        }

        return isSelected;
    }

    const reset = () => {
        if (!defaultValue && !clear) return;
        setSelected(defaultValue);
        setOpened(false);
    }

    return (
        <SelectRoot onClick={handleRootClick}>
            <SelectInput>
                { renderSelectedOption() }
                {
                    defaultValue && clear &&
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
                    setSelected={handleSelectOption}
                    setOpened={setOpened}
                    multiple={multiple}
                />
            }
        </SelectRoot>
    );
};

const SelectOptions: React.FC<any> = ({options, setSelected, setOpened, multiple}) => {

    const handleOptionClick = (option) => {
        setSelected(option);
        multiple ? setOpened(true) : setOpened(false);
    }

    return (
        <SelectDropDown>
            <SelectDropDownUl>
                {options.map((option, index) => (
                    <SelectDropDownLi
                        onClick={(e) => {
                            e.stopPropagation();
                            handleOptionClick(option);
                        }}
                        key={index}
                    >
                        {option}
                    </SelectDropDownLi>
                ))}
            </SelectDropDownUl>
        </SelectDropDown>
    )
}

export default Select;
