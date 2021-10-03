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
    transform: translateX(-50%);
`