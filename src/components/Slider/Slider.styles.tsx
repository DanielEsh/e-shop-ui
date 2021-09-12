import styled from "styled-components";
import {theme} from "../Theme";

export const SliderRoot = styled('div')`
    width: 100%;
    height: 20px;
  
    &.is-disabled {
      z-index: 10;
      opacity: .5;
      cursor: not-allowed;
    }
`

export const SliderCurrentValue = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 4px 10px;
`

export const Rail = styled('div')`
  position: relative;
  padding: 0 8px;
  cursor: pointer;
`

export const Track = styled('div')`
  position: relative;
  background-color: #ccd3da;
  width: 100%;
  height: 1px;
`

export const ProgressBar = styled('div')`
  position: absolute;
  left: ${({progressStyle}) => progressStyle.left};
  bottom: 0;
  height: 2px;
  width: ${({progressStyle}) => progressStyle.width};
  background-color: red;
`

export const Step = styled('div')`
  position: absolute;
  top: 50%;
  left: ${({left}) => left}%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: red;
  border: 1px solid red;
  transform: translate(-50%, -50%);
`

export const DotHandle = styled('div')`
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: red;
    transition: transform .3s ease-in-out;
`

export const Dot = styled('div')`
  position: absolute;
  top: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  text-align: center;
  transform: translate(-50%, -50%);
  
  &.is-disabled {
    ${DotHandle} {
      opacity: .5;
      transform: scale(1);
      cursor: not-allowed;
    }
  }
  
  &.is-hovering {
    ${DotHandle} {
      transform: scale(1.3);
    }
  }
  
  &:hover {
    ${DotHandle} {
      transform: scale(1.3);
    }
    
    &.is-disabled {
      ${DotHandle} {
        transform: scale(1);
      }
    }
  }
`

export const DotTooltip = styled('div')`
    position: absolute;
    bottom: 100%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    padding: 4px 4px 12px;
    font-size: 16px;
    color: red;
    transform: translateX(-50%);
    font-weight: 500;
    pointer-events: none;
`