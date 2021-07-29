import styled from "styled-components";
import {theme} from "../Theme";

export const SelectRoot = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid;
`;

export const SelectInput = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
`

export const Icon = styled('div')`
  position: absolute;
  right: 0;
  height: 20px;
  width: 20px;
`

export const IconWrapper = styled('div')`
  height: 20px;
  width: 20px;

  &:hover {
    color: #8e8c8c;
  }
`

export const Reset = styled('div')`
  position: absolute;
  right: 30px;
  z-index: 2;
  height: 20px;
  width: 20px;
`

export const SelectDropDown = styled('div')`
  position: absolute;
  top: 100%;
  left: -10px;
  width: 100%;
  padding: 10px 12px;
  background-color: #fff;
  //box-shadow: 0 4px 8px rgb(0 0 0 / 4%), 0 0 2px rgb(0 0 0 / 6%), 0 0 1px rgb(0 0 0 / 4%);
  box-shadow: 3px 3px 10px 6px rgb(0 0 0 / 6%);
  transform: translateY(0);
`

export const SelectDropDownUl = styled('ul')`
    list-style: none;
    margin: 0;
  padding: 0;
`

export const SelectDropDownLi = styled('li')`
  padding: 10px 0;
  font-size: 14px;
  line-height: 1.52;
  font-weight: 500;
`

export const SelectedItem = styled('div')`
    display: flex;
    margin-top: 2px;
    margin-right: 10px;
    margin-bottom: 2px;
    padding: 6px;
    background-color: #f5f5f5;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
`