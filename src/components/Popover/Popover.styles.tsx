import styled from 'styled-components';

export const Target = styled('div')`
    position: relative;
    cursor: pointer;
`

export const PopoverContent = styled('div')`
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
    top: -5px;
    width: 10px;
    height: 10px;
    background-color: red;
`
