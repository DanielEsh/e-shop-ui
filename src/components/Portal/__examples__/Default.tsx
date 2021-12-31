import React from 'react';
import {Portal} from "../../Portal";

const Default = (): JSX.Element => {
    return (
        <Portal container={ document.getElementById('custom-root') }>
            <div>
                div element in custom-root container
            </div>
        </Portal>
    );
};

export default Default;
