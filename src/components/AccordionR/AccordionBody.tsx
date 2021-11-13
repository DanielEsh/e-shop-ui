import React, {useRef, useState, useEffect} from 'react';
import {Content} from "./Accordion.styles";

export const AccordionBody = ({children, isOpened}) => {
    const [dimensions, setDimensions] = useState(0);
    const ref = useRef(null);

    const getDimensions = (node) => {
        return node.scrollHeight;
    }

    useEffect(() => {
        if (ref.current)
            setDimensions(getDimensions(ref.current))
    }, []);

    return (
        <Content
            ref={ ref }
            isOpened={ isOpened }
            maxHeight={ dimensions }
        >
            {children}
        </Content>
    );
};
