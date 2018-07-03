import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { getColor } from '../Color'

const DefaultDropdownButton = styled.button`
  padding: .5rem .3rem;
  background-color: transparent;
  cursor: pointer;
  transition: background-color .25s ease-out, color .25s ease-out;
  color: #929fab;

  &.hover, &:hover, &:active, &:focus {
    background-color: ${getColor('neutral-base')};
    color: ${getColor('main-text')};
    outline: none;
  }
  
  .fa {
    line-height: 1;
    margin: 0;
    font-size: 1.5rem;
    width: 1.3em;
  }
`

export {
  DefaultDropdownButton
}
