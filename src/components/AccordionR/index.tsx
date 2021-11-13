import React, {useEffect, useState, createContext} from 'react';

export const AccordionContext = createContext();

export const AccordionR = ({stayOpen = false, defaultOpen = [1, 2], children}) => {
    const [open, setOpen] = useState([]);
    const toggle = (id) => {
        console.log('main toggle', open);
        if (open.includes(id)) {
            const arr = open.filter(item => item !== id);
            setOpen(arr);
        } else {
            setOpen([...open, id]);
        }

    };

    useEffect(() => {
        if (stayOpen) {
            setOpen(defaultOpen);
        } else {
            setOpen([defaultOpen[0]]);
        }
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

