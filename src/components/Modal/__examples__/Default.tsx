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

const ModalContent = styled('div')`
    padding: 56px;
`

const ExamplesForm = (): JSX.Element => {
    return (
        <ModalContent>
            <h2>Title</h2>
            <p>Description</p>

            <form>
                <div>
                    <label htmlFor="">
                        Name
                    </label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">
                        Phone
                    </label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">
                        Email
                    </label>
                    <input type="text" />
                </div>

                <Button>
                    Submit
                </Button>
            </form>
        </ModalContent>
    )
}


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
                <ModalAside 
                    onClick={ () => console.log('click') }
                >
                    <ExamplesForm />
                </ModalAside>
                
            </Modal>
        </>
    )
}

export default Default;
