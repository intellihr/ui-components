import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

const { n600, r500 } = require('../../../common/sass/variables.scss')


export const StyledInputLabel = styled.label`
  color: ${n600};
  font-size: 0.9375rem;
  line-height: 1.8;

  &.is-invalid-label {
    color: ${r500};
  }
`
