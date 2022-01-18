import styled from 'styled-components';

export const StyledScrollbar = styled('div')`
    overflow-y: scroll;
  
    ::-webkit-scrollbar-track {
        //-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #000;
    }
`
