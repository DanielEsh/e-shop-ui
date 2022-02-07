import React, {useRef} from 'react';
import styled from 'styled-components';

import {Tooltip} from '../index';
import {Button} from '../../_new/Button';

const TooltipContent = styled('div')`
    width: 256px;
    height: 56px;
    background-color: #000;
    color: #fff;
`

const Default = (): JSX.Element => {
    const renderPopoverContent = (): JSX.Element => {
        return (
            <TooltipContent>
                test content
            </TooltipContent>
        )
    };

    return (
        <>
            <Tooltip 
                clickable
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
