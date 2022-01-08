import styled from 'styled-components';

export const TooltipTarget = styled('div')`
    position: relative;
    display: inline-block;
    cursor: pointer;
`

export const TooltipContent = styled('div')`
    &.tooltip-enter {
        opacity: 0;
        transform: scale(0.9);
    }
    &.tooltip-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity .3s, transform .3s;
    }
    &.tooltip-exit {
        opacity: 1;
    }
    &.tooltip-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity .3s, transform .3s;
    }
`

export const Arrow = styled('div')`
    position: absolute;
    top: 86%;
    width: 16px;
    height: 16px;
    background-color: #000;
    transform: rotate(316deg);
    display: none;
`
