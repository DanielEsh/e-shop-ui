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