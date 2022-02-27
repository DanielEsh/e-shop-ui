import { ReactNode } from 'react';
export interface CheckboxProps {
    children: ReactNode;
    label?: string;
    className?: string;
    color?: 'primary' | 'secondary' | 'gray' | 'success' | 'error';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    checked?: boolean;
    onChange?: (event: any) => void;
    onClick?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    id?: string;
    name?: string;
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
