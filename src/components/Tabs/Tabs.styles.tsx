import styled from "styled-components";
import {theme} from "../Theme";

export const TabsRoot= styled('div')`
  display: flex;
  pointer-events: none;
  margin: 0;
  padding: 0;
  border: 0 solid transparent;
`

export const TabsContainer = styled('ul')`
  display: flex;
  flex-direction: ${(props) => props.direction === 'vertical' ? 'column' : 'row'};
  pointer-events: all;
  background-color: ${theme.colors.black};
  padding: 6px;
  border-radius: 14px;
  list-style: none;
  
  li {
    &:not(:first-child) {
      margin-left: ${(props) => props.direction === 'vertical' ? '0' : '10px'};
    }
  }
  
  &.color {
    &-primary {
      li {
        button {
          &:hover {
            color: ${theme.colors.primary};
          }

          &._disabled {
            &:hover {
              color: ${theme.colors.white};
            }
          }
          
          &._active {
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};

            &:hover {
              color: ${theme.colors.white};
            }
          }
        }
      }
    }

    &-success {
      li {
        button {
          &:hover {
            color: ${theme.colors.success};
          }
          
          &._disabled {
            &:hover {
              color: ${theme.colors.white};
            }
          }
          
          &._active {
            background-color: ${theme.colors.success};
            border: 1px solid ${theme.colors.success};

            &:hover {
              color: ${theme.colors.white};
            }
          }
        }
      }
    }
    
    &-warning {
      li {
        button {
          &:hover {
            color: ${theme.colors.warning};
          }
          
          &._disabled {
            &:hover {
              color: ${theme.colors.white};
            }
          }
          
          &._active {
            background-color: ${theme.colors.warning};
            border: 1px solid ${theme.colors.warning};

            &:hover {
              color: ${theme.colors.white};
            }
          }
        }
      }
    }
    
    &-danger {
      li {
        button {
          &:hover {
            color: ${theme.colors.danger};
          }
          
          &._disabled {
            &:hover {
              color: ${theme.colors.white};
            }
          }
          
          &._active {
            background-color: ${theme.colors.danger};
            border: 1px solid ${theme.colors.danger};

            &:hover {
              color: ${theme.colors.white};
            }
          }
        }
      }
    }
    
    &-info {
      li {
        button {
          &:hover {
            color: ${theme.colors.info};
          }
          
          &._disabled {
            &:hover {
              color: ${theme.colors.white};
            }
          }
          
          &._active {
            background-color: ${theme.colors.info};
            border: 1px solid ${theme.colors.info};

            &:hover {
              color: ${theme.colors.white};
            }
          }
        }
      }
    }
  }
`

export const TabLabel = styled('button')`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 48px;
  padding: 0 18px;
  border-radius: 14px;
  white-space: nowrap;
  font-size: 16px;
  line-height: 48px;
  transition: border-color .3s, color .3s, background-color .3s;
  font-weight: 500;
  pointer-events: auto;
  cursor: pointer;

  background-color: ${theme.colors.black};
  border: 1px solid ${theme.colors.black};
  color: ${theme.colors.white};
  
  &._disabled {
    cursor: not-allowed;
  }
`
