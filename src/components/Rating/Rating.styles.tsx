import styled from "styled-components";
import { theme } from "../Theme";

const goldColor = '#fadb14';
const grayDefaultColor = '#f0f0f0';

export const RatingWrapper = styled('ul')`
    display: flex;
    margin: 0;
    padding: 0;
    cursor: ${({editableMode}) => editableMode ? 'pointer' : 'auto'};
`

export const RatingValue = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    font-size: 18px;
`

export const StarWrapper = styled('li')`
    position: relative;
    margin: 5px;
    list-style: none;
    width: 30px;
    height: 30px;
  
    &.is-active {
        color: ${goldColor};
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
    color: ${grayDefaultColor};
    overflow: hidden;
    transition: color ${theme.transition.default} .3s;
  
    &.is-active {
        color: ${goldColor};
    }
`

export const Second = styled('div')`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    color: ${grayDefaultColor};
    overflow: hidden;
    transition: color ${theme.transition.default} .3s;

    &.is-active {
        color: ${goldColor};
    }
`
