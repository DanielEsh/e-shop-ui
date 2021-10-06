import styled, { css } from "styled-components";
import { theme } from "../Theme";

export const Wrapper = styled('div')`
    position: relative;
    display: inline-block;
`

export const Target = styled('div')`
    position: relative;
`

export const Content = styled('div')`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: ${theme.colors.black};
    color: #fff;
    transform: translate(-50%, -50%);

    &:after {
        content: '';
        position: absolute;
        ${({ placement }) => {
            if (placement === 'top') return css`
                bottom: -40%;
                left: 50%;
            `
            if (placement === 'bottom') return css`
                bottom: 50%;
                left: 50%;
            `
            if (placement === 'left') return css`
                top: 50%;
                right: -20%;
            `
            if (placement === 'right') return css`
                top: 50%;
                left: 0;
            `
        }};
        display: ${ props=> props.arrow ? 'block' : 'none' };
        width: 15px;
        height: 15px;
        transform: translate(-50%, -50%) rotate(45deg);
        background-color: ${theme.colors.black};
    }
`