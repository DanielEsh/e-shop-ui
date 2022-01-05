import styled from 'styled-components';

export const TooltipTarget = styled('div')`
    position: relative;
    cursor: pointer;
`

export const TooltipContent = styled('div')`
    transition: all .3s;

    &.tooltip-enter {
        opacity: 0;
        transform: scale(0.9);
    }
    &.tooltip-enter-active {
        opacity: 1;
        transform: translateX(0);
    }
    &.tooltip-exit {
        opacity: 1;
    }
    &.tooltip-exit-active {
        opacity: 0;
        transform: scale(0.9);
    }
`

export const Arrow = styled('div')`
    position: absolute;
    top: -5px;
    width: 10px;
    height: 10px;
    background-color: red;
`
