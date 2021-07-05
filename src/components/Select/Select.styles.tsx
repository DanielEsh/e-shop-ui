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
  justify-content: space-between;
  width: 100%;
`

export const Icon = styled('div')`
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
  box-shadow: 0 4px 8px rgb(0 0 0 / 4%), 0 0 2px rgb(0 0 0 / 6%), 0 0 1px rgb(0 0 0 / 4%);
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