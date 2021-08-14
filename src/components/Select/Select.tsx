import React, { useState } from 'react';
import classNames from "classnames";

import SelectOptions from './SelectOptions';
import SelectIcon from "./SelectIcon";
import ResetIcon from "./ResetIcon";
import {
    SelectRoot,
    SelectInput,
    Icon,
    Reset,
    IconWrapper,
    SelectedItem,
    SelectNative,
} from './Select.styles';

type Option = {
    label: String,
    value: string,
}

export type SelectProps = {
    theme: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark',
    options: Array<Option>,
    name: string,
    multiple: boolean,
    defaultValue: Array<Option>,
    clear: boolean,
    maxOptionsVisible: number,
    native: boolean,
}


const Select: React.FC<SelectProps> = ({
    theme,
    options,
    multiple,
    defaultValue,
    clear,
    maxOptionsVisible = 1,
    native,
                }) => {
    const [isOpened, setOpened] = useState<boolean>(false);
    const [isSelected, setSelected] = useState([]);

    const rootClassName = classNames( `color-${theme}`)

    const handleRootClick = () => {
        setOpened(!isOpened);
    }

    const handleSelectOption = (item) => {
        if (multiple) {
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
        const arr = isSelected.filter((item, index) => index !== option);
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



export default Select;
