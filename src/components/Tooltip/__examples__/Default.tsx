import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

import {Tooltip} from '../index';
import {Button} from '../../_new/Button';

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
            
            <Tooltip 
                containerEl={ node }
                placement="top"
                popover={ renderPopoverContent() }
            >
                <Button>
                    Click me
                </Button>
            </Tooltip>
        </>
    );
};

export default Default;
