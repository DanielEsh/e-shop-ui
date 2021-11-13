import React, {createContext, useContext, useRef} from 'react';

const testContextValue = {
    open: 'open',
    toggle: 'toggle',
}

const AccordionContext = createContext(testContextValue);

export const AccordionHeader = () => {
    return (
        <div>Header</div>
    )
}

export const AccordionBody = () => {
    const ref = useRef(null);

    const getDimensions = (node) => {

    }

    return (
        <div ref={ ref }>Body</div>
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

