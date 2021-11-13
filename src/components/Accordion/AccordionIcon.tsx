import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const Icon = styled('div')`
    display: block;
    width: 100%;
    height: 100%;
    transform: rotate(0deg);
    transition: transform .3s ease;
      
    &.is-opened {
        transform: rotate(180deg);
    }
`

export type AccordionIconProps = {
    isOpened: boolean;
}

const AccordionIcon: React.FC<AccordionIconProps> = ({isOpened}) => {
    const classes = cn({
        'is-open': isOpened,
    })

    return (
        <Icon className={ classes }>
            <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 12.5L6.464 8.964l1.18-1.178L10 10.143l2.357-2.357 1.179 1.178L10 12.5z"
                    fill="currentColor"
                />
            </svg>
        </Icon>
    )
};

export default AccordionIcon;