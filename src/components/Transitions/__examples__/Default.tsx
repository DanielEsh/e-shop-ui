import React, {useState} from 'react';
import {Fade} from '../Fade';
import {Button} from '../../Button';

const Default = (): JSX.Element => {
    const [render, setRender] = useState<boolean>(false);

    return (
        <>
            <Button onClick={ () => setRender(!render) }>
                show transition
            </Button>
            <Fade inProp={ render }>
                <span>Im a fade Transition!</span>
            </Fade>
        </>
    )
}

export default Default;
