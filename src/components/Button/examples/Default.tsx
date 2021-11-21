import React, {useRef} from 'react';
import {Button} from "../index";

const Default = (): JSX.Element => {
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <Button ref={ btnRef }>
            Default button
        </Button>
    );
};

export default Default;
