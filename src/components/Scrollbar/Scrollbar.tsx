import React from 'react';
import {StyledScrollbar} from "./Scrollbar.styles";
import styled from 'styled-components';

const Container = styled('div')`
     
`

export const Scrollbar = ({children}) => {
    return (
        <StyledScrollbar>
            {children}
        </StyledScrollbar>
    );
};
