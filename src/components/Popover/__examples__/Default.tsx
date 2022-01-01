import React, {useState, useRef} from 'react';
import styled from 'styled-components';

import {Popover} from '../index';
import {Button} from '../../Button';
import {Portal} from '../../Portal';

const Container = styled('div')`
    position: relative;
`;

const Default = (): JSX.Element => {
    const ref = useRef(null);
    const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

    const renderPopoverContent = (): JSX.Element => {
        return (
            <div>
                test content
            </div>
        )
    };

    return (
        <>
            <Container ref={ ref } />
            
            <Popover 
                content={ renderPopoverContent() }
                isVisible={ popoverVisible }
            >
                <Button 
                    onClick={ () => setPopoverVisible(!popoverVisible) }
                >
                    Click me
                </Button>
            </Popover>
        </>
    );
};

export default Default;
