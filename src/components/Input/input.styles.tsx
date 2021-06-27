import styled from 'styled-components';
import { theme } from "../Theme";

export const InputRoot = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    width: 100%;
    border-bottom: 1px solid;
    font-size: 16px;
    line-height: 1.52;
    font-weight: 500;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    background-color: red;
    bottom: -1px;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform .3s ease;
  }
  
  &.is-disabled {
    input {
      cursor: not-allowed;
    }
  }
  
  &.is-focused {
    label {
      transform: translateY(-20px) scale(.75);
    }
  }
  
  &.color {
    &--primary {
      &.is-focused {
        color: ${theme.colors.primary};
      }
    }
  }
`

export const InputLabel = styled.label`
  position: absolute;
  left: 0;
  pointer-events: none;
  transform-origin: left center;
  transition: transform .3s ease, color .2s ease;
`

export const InputNative= styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  padding: 0;
`