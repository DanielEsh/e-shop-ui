import React from 'react';
import { Dropdown } from "../Dropdown";
import {Button} from '../../Button';

const Default = (): JSX.Element => {
    return (
        <>
            <Dropdown>
                <Button>
                    button
                </Button>
            </Dropdown>
        </>
    );
};

export default Default;
