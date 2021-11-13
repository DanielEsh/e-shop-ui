import styled from "styled-components";
import { theme } from "../Theme";

export const RatingWrapper = styled('ul')`
    display: flex;
    margin: 0;
    padding: 0;
`

export const StarWrapper = styled('li')`
    margin: 5px;
    list-style: none;
  
    &.is-active {
        color: #fadb14;
    }
`;

export const StarIconSvg = styled('svg')`
    width: 30px;
    height: 30px;
`;
