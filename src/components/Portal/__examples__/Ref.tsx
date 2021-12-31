import React, {useState, useRef, useEffect} from 'react';
import {Portal} from "../../Portal";

const Ref = (): JSX.Element => {
    const [rootElement, setRootElement] = useState<HTMLElement>(null);
    const customRootElement = useRef(null);

    useEffect( () => {
        setRootElement(customRootElement.current);
    }, []);

    return (
        <>
            <div 
                ref={ customRootElement }
                id="portal-container"
            >
                portal container
            </div>

            <Portal container={ rootElement }>
                <div>
                    div element in custom-root container
                </div>
            </Portal>
        </>
    );
};

export default Ref;
