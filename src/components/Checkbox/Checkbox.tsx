import React from 'react';
import { CheckboxLabel, Body, InputWrapper, Input, Icon, Text } from './Checkbox.styles';

export type CheckboxProps = {
    isChecked: boolean
    onChange: (e: any) => void
    theme?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
    size: 'small' | 'medium' | 'large'
    disabled?: boolean
    children: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
                                                      isChecked,
                                                      onChange,
                                                      theme = 'primary',
                                                      size = 'medium',
                                                      disabled,
                                                      children,
                                                  }) => {
    return (
        <CheckboxLabel
            className={[`color--${theme}`, `size--${size}`, disabled ? 'is-disabled' : '', isChecked ? 'is-checked': ''].join(' ')}
        >
            <Body>
                <InputWrapper>
                    <Input
                        type="checkbox"
                        checked={isChecked}
                        onChange={onChange}
                    />
                    <Icon className="v-checkbox__arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 8">
                        <path d="M10.905.345a.75.75 0 010 1.06L5.28 7.03a.75.75 0 01-1.06 0L1.095 3.905a.75.75 0 011.06-1.06L4.75 5.439 9.845.345a.75.75 0 011.06 0z"
                              fill="#fff" />
                    </Icon>
                </InputWrapper>

                <Text>
                    { children }
                </Text>
            </Body>
        </CheckboxLabel>
    )
}