import styled from 'styled-components';

export const ModalOverlay = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all .5s;
    
    &.active {
        opacity: 1;
        visibility: visible;
    }
` 
