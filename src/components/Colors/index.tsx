import React from 'react';
import styled from "styled-components";

import { theme } from "../Theme";

export const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ColorBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
    width: 250px;
    cursor: pointer;
    transition: background-color .25s linear;
    
    span {
      display: block;
    }
  
    &._primary {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      &:hover {
        background-color: ${theme.colors.primaryHover};
      }
    }
    
    &._success {
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.successHover};
      }
    }
  
    &._warning {
      background-color: ${theme.colors.warning};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.warningHover};
      }
    }
  
    &._danger {
      background-color: ${theme.colors.danger};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.dangerHover};
      }
    }
  
    &._info {
      background-color: ${theme.colors.info};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.infoHover};
      }
    }
  
    &._white {
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};

      &:hover {
        background-color: ${theme.colors.whiteHover};
      }
    }
  
    &._black {
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.blackHover};
      }
    }
`
/**
 * Only development mode
 * Show all colors
 */
const Colors: React.FC = () => {
    return (
        <ColorWrapper>
            <ColorBlock className="_primary">
                <span>Primary</span>
                <span>#5865F2</span>
            </ColorBlock>
            <ColorBlock className="_success">
                <span>Success</span>
                <span>#00c851</span>
            </ColorBlock>
            <ColorBlock className="_warning">
                <span>Warning</span>
                <span>#fb3</span>
            </ColorBlock>
            <ColorBlock className="_danger">
                <span>Danger</span>
                <span>#ff3547</span>
            </ColorBlock>
            <ColorBlock className="_info">
                <span>Info</span>
                <span>#33b5e5</span>
            </ColorBlock>
            <ColorBlock className="_white">
                <span>White</span>
                <span>#fcfcfc</span>
            </ColorBlock>
            <ColorBlock className="_black">
                <span>Black</span>
                <span>#2d2f33</span>
            </ColorBlock>
        </ColorWrapper>

    );
};

export default Colors;
