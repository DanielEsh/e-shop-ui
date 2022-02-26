import React, {useState} from 'react';
import styled from 'styled-components';
import {Transition} from '../Transition';
import {Button} from '../../_new/Button';

const Container = styled('div')`
    display: flex;
    flex-direction: row;
`

const TransitionedBlock = styled('div')`
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

const text = 'Im scale Transition';

const Scale = (): JSX.Element => {
    const [render, setRender] = useState<boolean>(false);

    return (
        <Container>
            <Button onClick={ () => setRender(!render) }>
                show transition
            </Button>
            <Transition 
                in={ render }
                type="scale"
            >
                <TransitionedBlock>
                    <span>
                        { text }
                    </span>
                </TransitionedBlock>
            </Transition>
        </Container>
    )
}

export default Scale;
