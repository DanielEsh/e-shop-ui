import React, {useState} from 'react';
import {Modal} from '../index';
import styled from 'styled-components';
import { Transition } from '../../Transitions/Transition';
import { Button } from '../../Button';

const ModalAside = styled('div')`
    position: absolute;
    top: 0;
    right: 0;
    width: 500px;
    height: 100%;
    background-color: #fff;
    /* transform: translateX(100%);
    transition: all .3s linear;

    &.active {
        transform: translateX(0%);
    } */
`


const Default = (): JSX.Element => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button onClick={ () => setShowModal(true) }>
                show Modal
            </Button>

            <Modal 
                isOpen={ showModal }
                onClose={ () => setShowModal(false) }
            >
                <Transition 
                    in={ showModal }
                    type="pushLeft"
                >
                    <ModalAside 
                        onClick={ () => console.log('click') }
                    >
                        test
                    </ModalAside>
                </Transition>
                
            </Modal>
        </>
    )
}

export default Default;
