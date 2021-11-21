import React from 'react';
import {Button} from "../index";

const Disabled = (): JSX.Element => {
    return (
        <Button
            color="dark"
            disabled
            outline
            size="large"
        >
            Disabled button
        </Button>
    );
};

export default Disabled;
