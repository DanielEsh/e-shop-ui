import styled from 'styled-components'
import { theme } from '@/components/Theme'

export const FillHover = styled.span`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  width: 100%;
  padding-top: 100%;
  border-radius: 200px;
  transform: scale(0) translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  transition: transform .4s ${theme.transition.default}, background-color .8s ${theme.transition.default}, border-color .8s ${theme.transition.default};
`
