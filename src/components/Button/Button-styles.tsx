import styled from 'styled-components';
import theme from "../Theme";

export const BtnHover = styled.span`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  width: 100%;
  padding-top: 100%;
  border-radius: 200px;
  transform: scale(0) translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  transition: transform .4s cubic-bezier(.25, .74, .22, .99), background-color .8s cubic-bezier(.25, .74, .22, .99), border-color .8s cubic-bezier(.25, .74, .22, .99);
`

export const BtnText = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  pointer-events: none;
  transform: translateZ(0);
`

export const Btn = styled.button<{isRounded?: boolean}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  transition: color .8s cubic-bezier(.25, .74, .22, .99), 
              background-color .8s cubic-bezier(.25, .74, .22, .99), 
              border-color .8s cubic-bezier(.25, .74, .22, .99),
              box-shadow .4s cubic-bezier(.25, .74, .22, .99);
  user-select: none;
  overflow: hidden;
  transform: translate3d(0,0,0);
  height: auto;
  border-radius: ${
    (props) => props.isRounded ?
        '28px' :
        '2px'
};
  border: 1px solid;
  &.is-disabled {
    pointer-events: none;
  }
  
  &:hover {
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
  }
  &:hover ${BtnHover} {
    transform: scale(1) translate3d(-50%, -50%, 0);
    width: 110%;
  }
  &.color {
    &--primary {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      &.is-disabled {
        color: ${theme.colors.white};
        background-color: #63bbf1;
        border-color: #63bbf1;
      }
      &.is-outline {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
        border-color: ${theme.colors.primary};
        &:hover {
          color: white;
        }
      }
      &:hover ${BtnHover} {
        background-color: ${theme.colors.primaryHover};
        border-color: ${theme.colors.primaryHover};
        color: ${theme.colors.white};
      }
    }
    &--success {
      color: ${theme.colors.white};
      background-color: ${theme.colors.success};
      border-color: ${theme.colors.success};
      &.is-disabled {
        color: ${theme.colors.white};
        background-color: #25ad5b;
        border-color: #25ad5b;
      }
      &.is-outline {
        color: ${theme.colors.success};;
        background-color: ${theme.colors.white};
        border-color: ${theme.colors.success};;
        &:hover {
          color: ${theme.colors.white};
        }
      }
      &:hover ${BtnHover} {
        color: ${theme.colors.white};
        background-color: ${theme.colors.successHover};;
        border-color: ${theme.colors.successHover};;
      }
    }
    &--warning {
      color: ${theme.colors.white};
      background-color: ${theme.colors.warning};
      border-color: ${theme.colors.warning};
      &.is-disabled {
        color: ${theme.colors.white};
        background-color: #966e20;
        border-color: #966e20;
      }
      &.is-outline {
        color: ${theme.colors.warning};
        background-color: ${theme.colors.white};
        border-color: ${theme.colors.warning};
        &:hover {
          color: ${theme.colors.white};
        }
      }
      &:hover ${BtnHover} {
        color: ${theme.colors.white};
        background-color: ${theme.colors.warningHover};
        border-color: ${theme.colors.warningHover};
      }
    }
    &--danger {
      color: ${theme.colors.white};
      background-color: ${theme.colors.danger};
      border-color: ${theme.colors.danger};
      &.is-disabled {
        color: ${theme.colors.white};
        background-color: #a31a25;
        border-color: #a31a25;
      }
      &.is-outline {
        color: ${theme.colors.danger};
        background-color: ${theme.colors.white};
        border-color: ${theme.colors.danger};
        &:hover {
          color: ${theme.colors.white};
        }
      }
      &:hover ${BtnHover} {
        color: ${theme.colors.white};
        background-color: ${theme.colors.dangerHover};
        border-color: ${theme.colors.dangerHover};
      }
    }
    &--info {
      color: ${theme.colors.white};
      background-color: ${theme.colors.info};
      border-color: ${theme.colors.info};
      &.is-disabled {
        color: ${theme.colors.white};
        background-color: #207291;
        border-color: #207291;
      }
      &.is-outline {
        color: ${theme.colors.info};
        background-color: ${theme.colors.white};
        border-color: ${theme.colors.info};
        &:hover {
          color: ${theme.colors.white};
        }
      }
      &:hover ${BtnHover} {
        color: ${theme.colors.white};
        background-color: ${theme.colors.infoHover};
        border-color: ${theme.colors.infoHover};
      }
    }
  }
  &.size {
    &--medium {
      height: 44px;
      padding: 0 24px;
      font-size: 16px;
      line-height: 1;
    }
    &--large {
      height: 54px;
      padding: 0 40px;
      font-size: 16px;
      line-height: 1;
    }
    &--small {
      height: 32px;
      padding: 0 24px;
      font-size: 14px;
      line-height: 1.16;
    }
  }
`