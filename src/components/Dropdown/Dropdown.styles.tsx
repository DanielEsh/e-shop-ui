import styled, {css} from 'styled-components';

export const Test = styled('div')`
    display: flex;
    padding: 16px;
    border: 1px solid black;
    outline: red;
    
    &:focus {
        background-color: red;
        outline: red;
    }
`

export const DropdownMenuRoot = styled('div')`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 6px;
    background-color: #fff;
    color: #000;

    &:focus {
        background-color: blue;
    }     
`

export const DropdownMenuItem = styled('div')`
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color .2s linear;

    &:hover {
        background-color: #d3d3d3;
    }
  
    &:focus {
        background-color: green;
    }
  
    ${(props) => {
        if (props.header) return css`
            font-weight: 600;
            color: #222;
            font-size: 18px;
        `

        if (props.disabled) return css`
             color: gray;
             font-size: 16px;
             cursor: default;
          
              &:hover {
                  background-color: #fff;
              }
        `
      
        return css `
          color: #000;
          font-size: 16px;
        `
    }}
`
