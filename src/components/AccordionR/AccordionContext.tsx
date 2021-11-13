import {createContext} from 'react';

export const AccordionContext = createContext({
    open: [],
    toggle: function(number){},
});
