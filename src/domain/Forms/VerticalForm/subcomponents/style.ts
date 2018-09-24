import React from 'react'
import styled from 'styled-components'
import { Variables } from '../../../../common'

const FieldWrapper = styled.div`
  margin-bottom: 1rem;

  input, textarea, .Select .Select-control {
    margin: 0;
  }
`

const ErrorMessage = styled.div`
  font-size: ${Variables.FontSize.fzSmall}px;
  color: ${Variables.Color.r400};
`

export {
  FieldWrapper,
  ErrorMessage
}
