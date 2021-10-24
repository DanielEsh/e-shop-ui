import React, { useState, useEffect, useRef } from 'react';

import { 
    Header,
    Content,
} from './Accordion.styles';

export type AccordionProps = {
    header: string;
    content: string;
}

export const Accordion:React.FC<AccordionProps> = ({
    header,
    content,
}) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [maxHeight, setMaxHeight] = useState<number>(0);
    let contentHeight = 0;

    const contentEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentEl.current) contentHeight = contentEl.current.scrollHeight;
        console.log('contentHeight', contentHeight);
    }, [maxHeight]);

    const handleToggle = () => {
        if (!isActive) 
            setMaxHeight(contentHeight);
        else 
            setMaxHeight(0);
        
        
        return setIsActive(!isActive);
    };


    return (
        <div className="AccordionItem">
            <Header onClick={ handleToggle }>
                <div >
                    { header }
                </div>
                
                <span>
                    { isActive ? "-" : "+" }
                </span>   
            </Header>
            <Content 
                ref={ contentEl }
                maxHeight={ maxHeight }
            >
                { content }
            </Content>
        </div>
    )
}
