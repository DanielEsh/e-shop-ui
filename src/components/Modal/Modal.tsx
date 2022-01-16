import React, {useEffect, useRef} from 'react'
import { ModalOverlay } from './Modal.styles';
import {Transition} from '../Transitions/Transition';


export type ModalProps = {
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}


export const Modal: React.FC<ModalProps> = (props) => {
    const [isActive, setIsActive] = React.useState(false);

    const ref = useRef(null);
    const activeEl = useRef(null);
    const {
        isOpen,
        onClose,
        children,
    } = props;

    const onOpenModal = (state) => {
        if (state) {
            activeEl.current = document.activeElement
        } else {
            if (activeEl.current) activeEl.current.focus();
        }
        
        
        setIsActive(state);
    };

    useEffect(() => {
        console.log('Mounted', ref);
        onOpenModal(isOpen);
    }, [isOpen])

    return (
        <Transition 
            in={ isOpen }
            type="fade"
            duration={ 400 }
        >
            <>
                <ModalOverlay 
                    ref={ ref }
                    onClick={ onClose }
                />

                <div>
                    {children}
                </div>
            </>
        </Transition>
        
    )
}
