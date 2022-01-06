import React from 'react';
import styled from 'styled-components';

import {Tooltip} from '../index';

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
                placement="left"
                popover={ renderPopoverContent() }
            >
                Hover on text
            </Tooltip>
        </>
    );
};

export default Default;
