import styled from 'styled-components';

export const Body = styled.span`
    position: relative;
    display: inline-flex;
    align-items: center;
`

export const InputWrapper = styled.span`
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
`

export const Input = styled.input`
    display:none;
`

export const Icon = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.2rem;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity .2s ease;        
`

export const Text = styled.span`
    white-space: nowrap;
    transition: color .3s ease;
`

export const CheckboxLabel = styled.label`
    user-select: none;
    cursor: pointer;
    &.color {
        &--primary {
            ${InputWrapper} {
                border: 1px solid #1ea7fd;
            }
            &.is-checked {
                ${InputWrapper} {
                    background: #1ea7fd;
                }
            }
            &:hover {
                &.is-checked {
                    ${InputWrapper} {
                        background: #1ea7fd;
                    } 
                }
                ${InputWrapper} {
                    background: #89d0fc;
                    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
                                0 2px 2px rgba(0,0,0,0.12), 
                                0 4px 4px rgba(0,0,0,0.12), 
                                0 8px 8px rgba(0,0,0,0.12),
                                0 16px 16px rgba(0,0,0,0.12);
                } 
            }
        }
    }
    &.size {
        &--medium {
            ${Text} {
                font-size: 16px;
                line-height: normal;
                font-weight: 500;
                margin-left: 8px;
            }
            
        }
    }
    &.is-checked {
            ${Icon} {
                opacity: 1;
            }
        }
`