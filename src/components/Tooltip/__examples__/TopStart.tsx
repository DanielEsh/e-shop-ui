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
                placement="top-start"
                popover={ renderPopoverContent() }
                clickable
            >
                <div 
                    tabIndex={ 0 }
                >
                    Hover on text
                </div>
            </Tooltip>
        </>
    );
};

export default Default;
