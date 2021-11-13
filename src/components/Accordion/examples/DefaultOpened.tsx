import React from 'react';
import {Accordion} from '../index';
import {AccordionItem} from '../AccordionItem';

const Default = () => {
    return (
        <div>
            <Accordion defaultOpen={ [1, 3, 4] } stayOpen>
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
                <AccordionItem
                    body={ <div>Body3</div> }
                    header={ <div>Header3</div> }
                    number={ 3 }
                />
                <AccordionItem
                    body={ <div>Body4</div> }
                    header={ <div>Header4</div> }
                    number={ 4 }
                />
                <AccordionItem
                    body={ <div>Body5</div> }
                    header={ <div>Header5</div> }
                    number={ 5 }
                />
            </Accordion>
        </div>
    );
};

export default Default;
