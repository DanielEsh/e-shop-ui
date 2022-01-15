import React from 'react'
import { ModalOverlay } from './Modal.styles';
import {Transition} from '../Transitions/Transition';

export const Modal = (props) => {
    const {
        isOpen,
        children,
    } = props;

    return (
        <ModalOverlay className={ isOpen ? 'active' : '' }>
            {children}
        </ModalOverlay>
    )
}
