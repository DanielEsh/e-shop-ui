import React, {useEffect, useState, createContext} from 'react';

export const AccordionContext = createContext();

export type AccordionProps = {
    stayOpen: boolean;
    defaultOpen: [number];
    children: React.ReactElement;
}

export const AccordionR: React.FC<AccordionProps> = ({
    stayOpen = false,
    defaultOpen = [],
    children}) => {
    const [open, setOpen] = useState<Array<number>>([]);

    const toggle = (id) => {
        if (open.includes(id)) 
            return setOpen(open.filter(item => item !== id));
        if (stayOpen) 
            return setOpen([...open, id]);
        setOpen([id]);
    };

    useEffect(() => {
        if (stayOpen) 
            setOpen(defaultOpen);
        else 
            setOpen([defaultOpen[0]]);
        
    }, []);

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

