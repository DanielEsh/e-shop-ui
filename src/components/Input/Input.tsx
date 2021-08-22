import React, {useState, useEffect} from 'react';
import {InputRoot, InputLabel, InputNative} from "./input.styles";

export type InputProps = {
    theme: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark',
    name: string,
    id: string,
    label: string,
    placeholder: string,
    value: string | number,
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
    id,
    label,
    placeholder,
    value,
    error,
    disabled,
    readonly,
    required,
    onFocus,
    onBlur,
    onChange,
}) => {
    const [isFocused, setFocused] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string | number>('')

    useEffect(() => {
        setInputValue(value);
    }, []);


    const handleFocus = () => {
        if (readonly) {
            return;
        }

        setFocused(true);
        onFocus();
    }

    const handleBlur = () => {
        if (inputValue || readonly) {
            return;
        }

        setFocused(false);
        onBlur();
    }

    const handleChange = (event) => {
        if (readonly) {
            return;
        }

        setInputValue(event.target.value);
        onChange();
    }


    return (
        <InputRoot className={ [`color--${theme}`, isFocused || value || placeholder ? 'is-focused' : '', disabled ? 'is-disabled' : ''] }>
            <InputLabel htmlFor={ id }>
                { label }
            </InputLabel>
            <InputNative
                disabled={ disabled }
                id={ id }
                name={ name }
                onBlur={ handleBlur }
                onChange={ handleChange }
                onFocus={ handleFocus }
                placeholder={ placeholder }
                readonly={ readonly }
                required={ required }
                type="text"
                value={ inputValue }
            />
        </InputRoot>
    );
};

export default Input;
