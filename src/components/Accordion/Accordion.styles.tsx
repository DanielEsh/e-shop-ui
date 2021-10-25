import styled, { css } from "styled-components";
import { theme } from "../Theme";

const headerZIndex = 1;
const headerAfterZIndex = -1;
const headerTransiion = `.3s ${theme.transition.ease}`;
const activeBackgroundColor = '#f0f1f2';

export const Header = styled('div')`
    position: relative;
    z-index: ${headerZIndex};
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &:after {
        content: '';
        position: absolute;
        z-index: ${headerAfterZIndex};
        bottom: -1px;
        left: 0;
        width: 100%;
        height: calc(100% + 1px);
        background-color: ${activeBackgroundColor};
        transform: scaleY(0);
        transform-origin: 100% 100%;
        transition: transform ${headerTransiion};
        will-change: transform;
    }

    &:hover {
        &:after {
            transform: scaleY(1);
        }
    }

    &.is-active {
        background-color: ${activeBackgroundColor};
    }
`

export const Content = styled('div')`
    overflow: hidden;
    max-height: ${props => props.maxHeight}px;
    background-color: ${activeBackgroundColor};
    transition: max-height .3s ease-in-out;
`
