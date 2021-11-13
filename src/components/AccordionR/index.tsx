import React, {createContext, useContext, useRef, useEffect, useState, CSSProperties} from 'react';

import {Content} from '../Accordion/Accordion.styles';

const testContextValue = {
    open: false,
    toggle: 'toggle',
}

const AccordionContext = createContext(testContextValue);

export const AccordionHeader = () => {
    return (
        <div>Header</div>
    )
}

export const AccordionBody = () => {
    const [dimensions, setDimensions] = useState(0);
    const ref = useRef(null);

    const {open} = useContext(AccordionContext);

    const getDimensions = (node) => {
        console.log(node.scrollHeight);
        return node.scrollHeight;
    }


    useEffect(() => {
        if (ref.current) 
            setDimensions(getDimensions(ref.current))
        
    }, []);

    return (
        <Content
            ref={ ref }
            isOpened={ open }
            minHeight={ dimensions }
        >
            Body
        </Content>
    )
}

export const AccordionItem = ({children}) => {
    const value = useContext(AccordionContext);
    return (
        <div>
            {children}
        </div>
    );
};

export const AccordionR = () => {
    return (
        <div>
            <AccordionContext.Provider value={ testContextValue }>
                <AccordionItem>
                    <AccordionHeader />
                    <AccordionBody />
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader />
                    <AccordionBody />
                </AccordionItem>
            </AccordionContext.Provider>
        </div>
    );
};

