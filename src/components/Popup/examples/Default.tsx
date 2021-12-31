import {useRef, useEffect} from "react";
import {Popup} from "../index";
import {Portal} from "../../Portal";

import React from 'react';

const Default = () => {
    const ref = useRef(null);

    useEffect(() => {
        ref.current = document.getElementById('custom-root');
        console.log('ref', ref.current);
    }, []);
    return (
        <Portal container={ document.getElementById('custom-root') }>
            <div>
                test test
            </div>
        </Portal>
    );
};

export default Default;
