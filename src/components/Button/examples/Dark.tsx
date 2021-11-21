import React, {useRef} from 'react';
import {Button} from "../index";

const Dark = (): JSX.Element => {
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <Button
            ref={ btnRef }
            color="dark"
            outline
            size="large"
        >
            Dark outlined button
        </Button>
    );
};

export default Dark;
