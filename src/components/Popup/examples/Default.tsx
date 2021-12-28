import {Popup} from "../index";
import {Portal} from "../../Portal";

import React from 'react';

const Default = () => {
    const el = document.getElementById('root');
    return (
        <Portal>
            <Popup />
        </Portal>
    );
};

export default Default;
