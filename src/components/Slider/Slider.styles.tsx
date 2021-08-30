import styled from "styled-components";
import {theme} from "../Theme";

export const SliderRoot = styled('div')`
    width: 100%;
    height: 20px;
`

export const SliderInfo = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
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

export const Dot = styled('div')`
  position: absolute;
  top: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  outline: none;
  background-color: red;
  text-align: center;
  transform: translate(-50%, -50%);
`