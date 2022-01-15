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
`


const Default = (): JSX.Element => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button onClick={ () => setShowModal(true) }>
                show Modal
            </Button>

            <Modal isOpen={ showModal }>
                <Transition 
                    type="pushLeft" 
                    in={ showModal }
                    mountOnEnter
                    unmountOnExit
                >
                    <ModalAside onClick={ () => setShowModal(false) }>
                        test
                    </ModalAside>
                </Transition>
                
            </Modal>
        </>
    )
}

export default Default;
