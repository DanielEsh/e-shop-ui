import styled, {css} from 'styled-components';

export const DropdownMenu = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: 1px solid gray;
    border-radius: 6px;
    background-color: #fff;
    color: #000;
`

export const DropdownMenuItem = styled('div')`
    margin: 10px 0;  
  
    ${(props) => {
        if (props.header) return css`
            font-weight: 600;
            color: #222;
            font-size: 18px;
        `

        if (props.disabled) return css`
             color: gray;
             font-size: 16px;
        `
      
        return css `
          color: #000;
          font-size: 16px;
        `
    }}
`
