import React, {useState} from 'react';
import styled from 'styled-components';
import {Transition} from '../Transition';
import {Button} from '../../Button';

const Container = styled('div')`
    display: flex;
    flex-direction: row;
    height: 128px;
    overflow: hidden;
`

const TransitionedBlock = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 568px;
    height: 128px;
    background-color: #000;
    color: #fff;
    font-size: 32px;
`

const text = 'Im pushUp Transition';

const PushUp = (): JSX.Element => {
    const [render, setRender] = useState<boolean>(false);

    return (
        <Container>
            <Button onClick={ () => setRender(!render) }>
                show transition
            </Button>
            <Transition 
                in={ render }
                type="pushUp"
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

export default PushUp;
