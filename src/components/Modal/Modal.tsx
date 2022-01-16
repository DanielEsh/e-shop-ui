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

    const getFocusedChild = () => {
        let currentFocus;
        const focusableChildren = getFocusableChildren();
        
        try {
            currentFocus = document.activeElement;
        } catch (err) {
            currentFocus = focusableChildren[0];
        }
        return currentFocus;
    }

    const onOpenModal = (state) => {
        setIsActive(state);
    };

    const onTabClick = (e) => {
        const focusableChildren = getFocusableChildren();
        const totalFocusable = focusableChildren.length;
        if (totalFocusable === 0) return;
        const currentFocus = getFocusedChild();

        let focusedIndex = 0;

        for (let i = 0; i < totalFocusable; i += 1) 
            if (focusableChildren[i] === currentFocus) {
                focusedIndex = i;
                break;
            }
    

        if (e.shiftKey && focusedIndex === 0) {
            e.preventDefault();
            focusableChildren[totalFocusable - 1].focus();
        } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
            e.preventDefault();
            focusableChildren[0].focus();
        }
    }

    const onKeyDown = (event) => {
        if (isKeyCode(event.keyCode, [Keys.ESC])) onOpenModal(false);
        if (isKeyCode(event.keyCode, [Keys.TAB])) onTabClick(event);
    }

    useEffect(() => {
        onOpenModal(isOpen);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen])

    useEffect(() => {
        const child = getFocusableChildren();
        
        if (isActive) {
            activeEl.current = document.activeElement
            setTimeout(() => {
                child[0].focus();
            }, 100)
        }
        else {
            if (activeEl.current) activeEl.current.focus();
            onClose();
        }
    }, [isActive])

    return (
        <Transition 
            in={ isActive }
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
