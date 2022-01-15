import React, {useEffect, useRef} from 'react'
import { ModalOverlay } from './Modal.styles';
import {Transition} from '../Transitions/Transition';


export type ModalProps = {
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}


export const Modal: React.FC<ModalProps> = (props) => {
    const ref = useRef(null);
    const {
        isOpen,
        onClose,
        children,
    } = props;

    useEffect(() => {
        console.log('Mounted', ref);
    }, [])

    return (
        <Transition 
            in={ isOpen }
            type="fade"
        >
            <ModalOverlay 
                ref={ ref }
                onClick={ onClose }
            >
                {children}
            </ModalOverlay>
        </Transition>
        
    )
}
