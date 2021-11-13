import React from 'react';

export const AccordionHeader = ({children, onClick}) => {
    return (
        <div onClick={ onClick }>
            {children}
        </div>
    );
};

