import React, {useEffect, useRef} from 'react'
import { ModalOverlay } from './Modal.styles';
import {Transition} from '../Transitions/Transition';
import {Portal} from '../Portal';
import { isKeyCode, Keys } from '../../utils/isCodeKey';


export type ModalProps = {
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    notClickableOverlay?: boolean;
    containerEl?: HTMLElement;
}


export const Modal: React.FC<ModalProps> = (props) => {
    const [isActive, setIsActive] = React.useState(false);

    const ref = useRef(null);
    const modal = useRef(null);
    const activeEl = useRef(null);

    const {
        isOpen,
        onClose,
        onOpen,
        notClickableOverlay = false,
        children,
        containerEl,
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

    const onOverlayClick = () => {
        if (notClickableOverlay) return

        onClose();
    }

    const onToggleModal = (state) => {
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
        if (isKeyCode(event.keyCode, [Keys.ESC])) onToggleModal(false);
        if (isKeyCode(event.keyCode, [Keys.TAB])) onTabClick(event);
    }

    useEffect(() => {
        onToggleModal(isOpen);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen])

    useEffect(() => {
        const child = getFocusableChildren();
        
        if (isActive) {
            if (onOpen) {
                onOpen();
            }
            activeEl.current = document.activeElement
            setTimeout(() => {
                child[0].focus();
            }, 100)
        }
        else {
            if (activeEl.current) activeEl.current.focus();
            if (onClose) {
                onClose();
            }
        }
    }, [isActive])

    return (
        <Portal container={ containerEl }>
            <Transition
                in={ isActive }
                type="fade"
                duration={ 400 }
            >
                <>
                    <ModalOverlay
                        ref={ ref }
                        onClick={ onOverlayClick }
                    />

                    <div ref={ modal }>
                        {children}
                    </div>
                </>
            </Transition>
        </Portal>
    )
}
