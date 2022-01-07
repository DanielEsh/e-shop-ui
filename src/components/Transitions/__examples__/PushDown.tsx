import React, {useState} from 'react';
import {Transition} from '../Transition';
import {Button} from '../../Button';

const Default = (): JSX.Element => {
    const [render, setRender] = useState<boolean>(false);

    return (
        <>
            <Button onClick={ () => setRender(!render) }>
                show transition
            </Button>
            <Transition 
                in={ render }
                type="pushDown"
            >
                <span>Im a fade Transition!</span>
            </Transition>
        </>
    )
}

export default Default;
