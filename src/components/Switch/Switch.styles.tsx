import styled from "styled-components";
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

    &.is-active {
        background-color: #336699;

        &:before {
            transform: translateX(25px);
            background-color: #6699cc;
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

export const Wrapper = styled('div')`
    display: flex;
    justify-content: space-between;
`
