import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';

import { 
    Header,
    HeaderIcon,
    Content,
} from './Accordion.styles';
import AccordionIcon from './AccordionIcon';

export type AccordionProps = {
    header: string;
    content: string;
    active?: boolean;
}

export const Accordion:React.FC<AccordionProps> = ({
    header,
    content,
    active = false,
}) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [maxHeight, setMaxHeight] = useState<number>(0);
    let contentHeight = 0;

    const contentEl = useRef<HTMLDivElement>(null);
    const initialRender = useRef(false);

    const classes = cn({
        'is-active': isActive,
    });

    useEffect(() => {
        if (contentEl.current) contentHeight = contentEl.current.scrollHeight;

        if (!initialRender.current) {
            initialRender.current = true;
            if (active) {
                setMaxHeight(contentHeight);
                setIsActive(true);
            }
        }
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
            <Header 
                className={ classes }
                onClick={ handleToggle }
            >
                <div >
                    { header }
                </div>
                
                <HeaderIcon>
                    <AccordionIcon isOpened={ isActive } />
                </HeaderIcon>   
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
