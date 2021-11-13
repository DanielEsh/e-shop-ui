import React, {createContext, useContext, useRef, useEffect, useState, useMemo} from 'react';

import {Content} from '../Accordion/Accordion.styles';

// const testContextValue = {
//     active: [],
//     toggle(number) {
//         console.log(number);
//         this.active.push(number);
//     }
// }

const AccordionContext = createContext();

export const AccordionHeader = ({children, number}) => {
    // const setContext = useContext(AccordionContext);
    // const {toggle} = useContext(AccordionContext);
    const { open, toggle } = useContext(AccordionContext);
    
    return (
        <div onClick={ () => toggle(number) }>{children}</div>
    )
}

export const AccordionBody = ({children, number}) => {
    const [dimensions, setDimensions] = useState(0);
    const ref = useRef(null);

    const { open } = useContext(AccordionContext);
    // const {active} = useContext(AccordionContext);
    // const context = useContext(AccordionContext);

    const getDimensions = (node) => {
        return node.scrollHeight;
    }


    useEffect(() => {
        if (ref.current) 
            setDimensions(getDimensions(ref.current))

        console.log('context', open);
    }, []);

    return (
        <Content
            ref={ ref }
            isOpened={ (Array.isArray(open) ? open.includes(number) : open === number) }
            maxHeight={ dimensions }
        >
            {children}
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

export const AccordionR = ({children}) => {
    const [open, setOpen] = useState([]);
    const toggle = (id) => {
        open === id ? setOpen([]) : setOpen(id);
    };

    const accordionContext = {
        open,
        toggle,
    }

    return (
        <div>
            <AccordionContext.Provider value={ accordionContext }>
                {children}
            </AccordionContext.Provider>
        </div>
    );
};

