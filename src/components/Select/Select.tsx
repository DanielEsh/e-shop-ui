import React from 'react';
import SelectIcon from "./SelectIcon";
import {SelectRoot, SelectInput, Icon} from './Select.styles'

export type SelectProps = {
    theme: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark',
}

const Select = ({
    theme,
                }) => {
    return (
        <SelectRoot>
            <SelectInput>
                Select
                <Icon>
                    <SelectIcon />
                </Icon>
            </SelectInput>
        </SelectRoot>
    );
};

export default Select;
