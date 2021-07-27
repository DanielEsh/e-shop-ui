import React from 'react';
import styled from 'styled-components';

const Icon = styled('div')`
  position: absolute;
  right: 0;
  display: block;
  width: 20px;
  transform: rotate(0deg);
  transition: transform .3s ease;
  
  &.is-opened {
    transform: rotate(180deg);
  }
`

const SelectIcon = ({isOpened}) => {
    return (
        <Icon className={isOpened ? 'is-opened' : ''}>
            <svg className="v-select__arrow v-select__arrow--hover"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20">
                        <path
                            d="M10 12.5L6.464 8.964l1.18-1.178L10 10.143l2.357-2.357 1.179 1.178L10 12.5z" />
            </svg>
         </Icon>
    );
};

export default SelectIcon;
