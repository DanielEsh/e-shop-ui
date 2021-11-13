import React, {FC, ReactElement} from 'react';

import {Header} from './Accordion.styles';

type AccordionHeaderProps = {
    children: ReactElement;
    onClick: () => void;
}

export const AccordionHeader: FC<AccordionHeaderProps> = ({
    children,
    onClick,
}) => {
    return (
        <Header onClick={ onClick }>
            {children}
        </Header>
    );
};

