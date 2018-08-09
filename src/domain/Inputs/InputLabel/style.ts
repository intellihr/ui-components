import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { getColor } from '@Common/legacy'

export const StyledInputLabel = styled.label`
  color: ${getColor('main-text-light')};
  font-size: 0.9375rem;
  line-height: 1.8;

  &.is-invalid-label {
    color: ${getColor('alert')};
  }
`
