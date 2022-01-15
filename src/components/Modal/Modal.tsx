import React from 'react'
import { ModalOverlay } from './Modal.styles';
import {Transition} from '../Transitions/Transition';

export const Modal = (props) => {
    const {
        isOpen,
        onClose,
        children,
    } = props;

    return (
        <ModalOverlay 
            className={ isOpen ? 'active' : '' }
            onClick={ onClose }
        >
            {children}
        </ModalOverlay>
    )
}
