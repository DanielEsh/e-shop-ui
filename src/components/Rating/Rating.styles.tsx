import styled from "styled-components";
import { theme } from "../Theme";

export const RatingWrapper = styled('ul')`
    display: flex;
    margin: 0;
    padding: 0;
`

export const StarWrapper = styled('li')`
    position: relative;
    margin: 5px;
    list-style: none;
    width: 30px;
    height: 30px;
  
    &.is-active {
        color: #fadb14;
    }
`;

export const StarIconSvg = styled('svg')`
    width: 30px;
    height: 30px;
`;

export const First = styled('div')`
    position: absolute;
    top: 0;
    z-index: 1;
    width: 50%;
    height: 100%;
    color: #fadb14;
    overflow: hidden;
`

export const Second = styled('div')`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    color: #f0f0f0;
    overflow: hidden;
`
