import React, {useEffect, useRef} from 'react'
import { ModalOverlay } from './Modal.styles';
import {Transition} from '../Transitions/Transition';
import { isKeyCode, Keys } from '../../utils/isCodeKey';


export type ModalProps = {
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}


export const Modal: React.FC<ModalProps> = (props) => {
    const [isActive, setIsActive] = React.useState(false);

    const ref = useRef(null);
    const modal = useRef(null);
    const activeEl = useRef(null);
    const {
        isOpen,
        onClose,
        children,
    } = props;

    const focusableElements = [
        'a[href]',
        'area[href]',
        'input:not([disabled]):not([type=hidden])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        'button:not([disabled])',
        'object',
        'embed',
        '[tabindex]:not(.modal)',
        'audio[controls]',
        'video[controls]',
        '[contenteditable]:not([contenteditable="false"])',
    ];

    const getFocusableChildren = () => {
        if (!modal.current) return;

        return modal.current.querySelectorAll(focusableElements.join(', '));
    }

    const onOpenModal = (state) => {
        const children = getFocusableChildren();
        if (state) {
            activeEl.current = document.activeElement
            children[0].focus();
        }
        else {
            if (activeEl.current) activeEl.current.focus();
            onClose();
        }
        
        setIsActive(state);
    };

    const onKeyDown = (event) => {
        if (isKeyCode(event.keyCode, [Keys.ESC])) onOpenModal(false);
    }

    useEffect(() => {
        console.log('Mounted', ref);
        onOpenModal(isOpen);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
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

                <div ref={ modal }>
                    {children}
                </div>
            </>
        </Transition>
        
    )
}
