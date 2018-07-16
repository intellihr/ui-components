import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { getColor } from '../Color'

const DefaultDropdownButton = styled.button`
  background-color: transparent;
  color: #929fab;
  cursor: pointer;
  padding: .5rem .3rem;
  transition: background-color .25s ease-out, color .25s ease-out;

  &:hover,
  &:active,
  &:focus {
    background-color: ${getColor('neutral-base')};
    color: ${getColor('main-text')};
    outline: none;
  }

  .fa {
    font-size: 1.5rem;
    line-height: 1;
    margin: 0;
    width: 1.3em;
  }
`

export {
  DefaultDropdownButton
}
