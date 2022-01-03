import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

import {Popover} from '../index';
import {Button} from '../../Button';

const Container = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
`;

const Default = (): JSX.Element => {
    const customRootElement = useRef(null);
    const [popoverVisible, setPopoverVisible] = useState<boolean>(true);
    const [node, setNode] = useState(null);

    const renderPopoverContent = (): JSX.Element => {
        return (
            <div>
                test content
            </div>
        )
    };

    useEffect(() => {
        setNode(customRootElement.current)
    }, []);

    return (
        <>
            <Container ref={ customRootElement } />
            
            <Popover 
                attachEl={ node }
                content={ renderPopoverContent() }
                isVisible={ popoverVisible }
                offsetY={ 10 }
                placement="top"
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
