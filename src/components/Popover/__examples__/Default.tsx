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

const TooltipContent = styled('div')`
    width: 256px;
    height: 56px;
    background-color: #000;
    color: #fff;
`

const Default = (): JSX.Element => {
    const customRootElement = useRef(null);
    const [popoverVisible, setPopoverVisible] = useState<boolean>(false);
    const [node, setNode] = useState(null);

    const renderPopoverContent = (): JSX.Element => {
        return (
            <TooltipContent>
                test content
            </TooltipContent>
        )
    };

    useEffect(() => {
        setNode(customRootElement.current)
    }, []);

    return (
        <>
            <Container ref={ customRootElement } />
            
            <Popover 
                containerEl={ node }
                isVisible={ popoverVisible }
                placement="top"
                popover={ renderPopoverContent() }
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
