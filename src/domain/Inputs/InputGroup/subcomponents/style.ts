import React from 'react'
import styled, { StyledComponentClass, css } from 'styled-components'
import { Variables } from '../../../../common'
import { InputGroupPosition } from '../InputGroup'

interface IInputGroupButtonProps {
  groupPosition: InputGroupPosition
}

const InputGroupButton = styled.button`
  align-items: center;
  background-color: ${Variables.Color.n200};
  border: 1px solid ${Variables.Color.n400};
  color: ${Variables.Color.n700};
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  font-size: .9rem;
  font-weight: 600;
  height: 39px;
  line-height: 1;
  margin: 0;
  padding: 0 1em;
  outline: none;
  text-align: center;
  transition: background-color .25s ease-out, color .25s ease-out;
  min-width: 0;

  ${(props: IInputGroupButtonProps) => {
    /* 
      These border radiuses use IMPORTANT because of our current dependency on Foundation's Form styles.
      Please remove the `!important` after this dependency has been removed.
    */
    switch (props.groupPosition) {
      case 'left':
        return css`border-radius: 4px 0 0 4px !important;`
      case 'right':
        return css`border-radius: 0 4px 4px 0 !important;`
      default:
        return css`border-radius: 0 !important;`
    }
  }}

  &:disabled {
    cursor: not-allowed;
    background-color: ${Variables.Color.n150};
    color: ${Variables.Color.n400};
    
    &:hover {
      background-color: ${Variables.Color.n150};
    }
  }

  &:hover {
    background-color: ${Variables.Color.n250};
  }
  
  &:active {
    background-color: ${Variables.Color.n250};
  }
  
  &:focus {
    background-color: ${Variables.Color.n200};
    border-color: ${Variables.Color.i400};
  }
  
  .left-component {
    margin-right: 0.5rem;
    flex: 1 0 auto;
    
    .emoji-mart-emoji {
      height: 20px;
      overflow: hidden;
    }
  }
  
  .right-component {
    margin-left: 0.5rem;
    flex: 1 0 auto;
  }
`

export {
  InputGroupButton
}
