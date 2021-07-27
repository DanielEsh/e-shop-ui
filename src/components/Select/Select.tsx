import React, { useState } from 'react';
import SelectIcon from "./SelectIcon";
import {
    SelectRoot,
    SelectInput,
    Icon,
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
    multiple
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

    const renderSelectedOption = () => {
        if (multiple) {
            return isSelected.map(option => <SelectedItem>{option}</SelectedItem>);
        }

        return isSelected;
    }

    return (
        <SelectRoot onClick={handleRootClick}>
            <SelectInput>
                { renderSelectedOption() }
                <Icon>
                    <SelectIcon isOpened={isOpened} />
                </Icon>
            </SelectInput>
            {isOpened && <SelectOptions options={options} setSelected={handleSelectOption} setOpened={setOpened} />}
        </SelectRoot>
    );
};

const SelectOptions: React.FC<any> = ({options, setSelected, setOpened}) => {

    const handleOptionClick = (option) => {
        setSelected(option);
        setOpened(false);
    }

    return (
        <SelectDropDown>
            <SelectDropDownUl>
                {options.map((option, index) => (
                    <SelectDropDownLi
                        onClick={(e) => {
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
