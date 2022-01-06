import React, {useState} from 'react';
import {Scale} from './Scale';
import {Button} from '../../Button';

const Default = (): JSX.Element => {
    const [render, setRender] = useState<boolean>(false);

    return (
        <>
            <Button onClick={ () => setRender(!render) }>
                show transition
            </Button>
            <Scale in={ render }>
                <span>Im a scale Transition!</span>
            </Scale>
        </>
    )
}

export default Default;
