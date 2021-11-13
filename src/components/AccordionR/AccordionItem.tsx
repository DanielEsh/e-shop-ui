import React, {useContext} from 'react';

import {AccordionContext} from "./index";

import { AccordionHeader } from './AccordionHeader';
import { AccordionBody } from "./AccordionBody";

type AccordionItemProps = {
    number: number;
    header: React.ReactElement;
    body: React.ReactElement;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    number,
    header,
    body}) => {

    const { open, toggle } = useContext(AccordionContext);
    
    const onClick = () => {
        toggle(number);
    };

    return (
        <>
            <AccordionHeader onClick={ onClick }>
                {header}
            </AccordionHeader>
            <AccordionBody isOpened={ open.length ? open.includes(number) : false }>
                {body}
            </AccordionBody>
        </>
    );
};
