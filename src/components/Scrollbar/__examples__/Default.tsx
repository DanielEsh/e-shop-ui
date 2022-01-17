import React from 'react';
import {Scrollbar} from "../Scrollbar";
import styled from 'styled-components';

const Container = styled('div')`
    height: 1200px;
`

const Default = (): JSX.Element => {
    return (
        <Scrollbar>
            <Container />
        </Scrollbar>
    );
};

export default Default;
