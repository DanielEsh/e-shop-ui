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
    background-color: #000;
    color: #fff;
    transform: translateX(-50%);
`