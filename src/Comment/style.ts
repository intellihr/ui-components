import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { getColor } from '../Color'

const ActionMenuButtonToggleButton = styled.button`
  background-color: transparent;
  color: ${getColor('badge-background-dark')};
  cursor: pointer;
  padding: .2rem;
  transition: background-color .25s ease-out, color .25s ease-out;

  &:hover,
  &:active,
  &:focus {
    background-color: ${getColor('neutral-base')};
    color: ${getColor('main-text')};
    outline: none;
  }

  .fa {
    font-size: 1rem;
    line-height: 1;
    margin: 0;
    width: 1.3em;
  }
`

export {
  ActionMenuButtonToggleButton
}
