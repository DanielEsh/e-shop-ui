import styled, { css } from "styled-components";
// import { theme } from "../Theme";

export const SwitchStyled = styled('span')`
    position: absolute;
    cursor: pointer;
    background-color: #ccc;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;

    &:before {
        position: absolute;
        content: "";
        left: 2px;
        top: 2px;
        width: 21px;
        height: 21px;
        background-color: #aaa;
        border-radius: 50%;
        transition: transform 0.3s ease;
    }

    &:hover {
       &:before {
            box-shadow: 0 0 0 5px hsla(0, 0%, 100%, 0.25);
       }
    }

    &.is-active {
        background-color: #336699;

        &:before {
            transform: translateX(25px);
            background-color: #6699cc;
        }        
    }

    &.is-disabled {
        opacity: 0.6;
        cursor: not-allowed;

        &:hover {
            &:before {
                box-shadow: none;
            }
        }
    }
`

export const SwitchWrapper = styled('label')`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;

    input[type="checkbox"] {
        display: none;
    }
`

export const Name = styled('label')`
    cursor: pointer;
    user-select: none;
`

export const Wrapper = styled('div')`
    display: flex;
    justify-content: space-between;

    ${({isDisabled}) => {
        if (isDisabled) 
            return css`
                cursor: not-allowed;

                ${Name} {
                    pointer-events: none;
                }
            `
        
    }}
`
