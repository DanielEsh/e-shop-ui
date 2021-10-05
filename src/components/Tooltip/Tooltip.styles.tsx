import styled from "styled-components";
import { theme } from "../Theme";

export const Wrapper = styled('div')`
    position: relative;
    display: inline-block;
`

export const Target = styled('div')`
    position: relative;
`

export const Content = styled('div')`
    position: absolute;
    left: 50%;
    padding: 8px;
    border-radius: 8px;
    background-color: ${theme.colors.black};
    color: #fff;
    transform: translateX(-50%);

    &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 15px;
        height: 15px;
        transform: translate(-50%) rotate(45deg);
        background-color: ${theme.colors.black};
    }
`