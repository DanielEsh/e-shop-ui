import styled from "styled-components";
import { theme } from "../Theme";

const headerZIndex = 1;
const headerAfterZIndex = -1;
const headerTransiion = `.3s ${theme.transition.ease}`;
const headerColor = '#000';
const backgroundColor = '#fff';
const activeBackgroundColor = '#f0f1f2';

export const Header = styled('div')`
    position: relative;
    z-index: ${headerZIndex};
    padding: 30px 0;
    display: flex;
    align-items: center;
    background-color: ${backgroundColor};
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

    &.is-disabled {
        background-color: ${backgroundColor};
        cursor: not-allowed;

        &:hover {
            &:after {
                transform: scaleY(0);
            }
        }
    }
`

export const HeaderIcon = styled('span')`
    position: absolute;
    top: 50%;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: ${headerColor};
    transform: translate(-50%, -50%);
`

export const Content = styled('div')`
    overflow: hidden;
    max-height: ${props => props.isOpened ? props.maxHeight : 0}px;
    background-color: ${activeBackgroundColor};
    transition: max-height .3s ease-in-out;
`
