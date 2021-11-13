import React from 'react';
import {Accordion} from '../index';
import {AccordionItem} from '../AccordionItem';

const Default = () => {
    return (
        <div>
            <Accordion stayOpen>
                <AccordionItem
                    body={ <div>Body1</div> }
                    header={ <div>Header1</div> }
                    number={ 1 }
                />
                <AccordionItem
                    body={ <div>Body2</div> }
                    header={ <div>Header2</div> }
                    number={ 2 }
                />
            </Accordion>
        </div>
    );
};

export default Default;
