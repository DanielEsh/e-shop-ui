import React, {FC, useRef, useState, useEffect, ReactElement} from 'react';
import {Content} from "./Accordion.styles";

type AccordionBodyProps = {
    children: ReactElement;
    isOpened: boolean;
}

export const AccordionBody: FC<AccordionBodyProps> = ({
    children,
    isOpened
}) => {
    const [minHeight, setMinHeight] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    const getMinHeight = (node: HTMLDivElement) => {
        return node.scrollHeight;
    }

    useEffect(() => {
        if (ref.current)
            setMinHeight(getMinHeight(ref.current))
    }, []);

    return (
        <Content
            ref={ ref }
            isOpened={ isOpened }
            maxHeight={ minHeight }
        >
            {children}
        </Content>
    );
};
