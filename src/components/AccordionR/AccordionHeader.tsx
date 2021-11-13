import React from 'react';

import {Header} from './Accordion.styles';

export const AccordionHeader = ({children, onClick}) => {
    return (
        <Header onClick={ onClick }>
            {children}
        </Header>
    );
};

