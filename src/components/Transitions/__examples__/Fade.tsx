import React, {useState} from 'react';
import styled from 'styled-components';
import {Transition} from '../Transition';
import {Button} from '../../Button';

const Container = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 568px;
    height: 128px;
    margin-top: 20px;
    background-color: #000;
    color: #fff;
    font-size: 32px;
`

const text = 'Im fade Transition';

const Default = (): JSX.Element => {
    const [render, setRender] = useState<boolean>(false);

    return (
        <>
            <Button onClick={ () => setRender(!render) }>
                show transition
            </Button>
            <Transition 
                in={ render }
                type="fade"
            >
                <Container>
                    <span>
                        { text }
                    </span>
                </Container>
            </Transition>
        </>
    )
}

export default Default;
