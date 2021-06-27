import React, {useState} from 'react';
import {InputRoot, InputLabel, InputNative} from "./input.styles";

export type InputProps = {
    theme: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark',
    name: string,
    label: string,
    placeholder: string,
    error: string,
    disabled: boolean,
    readonly: boolean,
    required: boolean,
    outlined: boolean,
    onClick: () => void,
    onChange: () => void,
    onFocus: () => void,
    onBlur: () => void,
}

const Input: React.FC<InputProps> = ({
                                        theme= 'primary',
                                        name,
                                        label,
                                        placeholder,
                                        error,
                                        disabled,
                                        readonly,
                                        required,
                                        onFocus,
                                        onBlur,
                                        onChange,
                                     }) => {
    const [isFocused, setFocused] = useState<boolean>(false);
    const [value, setValue] = useState<string | number>('')

    const handleFocus = () => {
        if (readonly) {
            return;
        }
        setFocused(true);
        onFocus();
    }

    const handleBlur = () => {
        if (value || readonly) {
            return;
        }
        setFocused(false);
        onBlur();
    }

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange();
    }


    return (
        <InputRoot className={[`color--${theme}`, isFocused ? 'is-focused' : '', disabled ? 'is-disabled' : '']}>
            <InputLabel htmlFor="">
                { label }
            </InputLabel>
            <InputNative
                type="text"
                value={value}
                disabled={disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
        </InputRoot>
    );
};

export default Input;