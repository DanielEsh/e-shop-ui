import React, { useState } from 'react';
import SelectIcon from "./SelectIcon";
import {
    SelectRoot,
    SelectInput,
    Icon,
    SelectDropDown,
    SelectDropDownUl,
    SelectDropDownLi
} from './Select.styles'

export type SelectProps = {
    theme: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark',
    value: String,
    list: Array<any>,
}

const Select = ({
    theme,
    value,
    list,
                }) => {
    const [isOpened, setOpened] = useState<boolean>(false);

    const handleClick = () => {
        setOpened(!isOpened);
    }

    return (
        <SelectRoot onClick={handleClick}>
            <SelectInput>
                { value }
                <Icon>
                    <SelectIcon isOpened={isOpened} />
                </Icon>
            </SelectInput>
            {isOpened ? <SelectOptions list={list} /> : null    }
        </SelectRoot>
    );
};

const SelectOptions: React.FC<any> = ({list}) => {
    return (
        <SelectDropDown>
            <SelectDropDownUl>
                {list.map((item) => <SelectDropDownLi>{item}</SelectDropDownLi>)}
            </SelectDropDownUl>
        </SelectDropDown>
    )
}

export default Select;
