import React from 'react'
import AutosizeTextarea from 'react-autosize-textarea'
import styled, { StyledComponentClass } from 'styled-components'

import { Variables } from '../../../common'

const StyledAutosizeTextarea = styled(AutosizeTextarea)`
  min-height: 39px;
  resize: none;

  &:disabled,
  &[disabled] {
    color: ${Variables.Color.n600}
  }
`

export {
  StyledAutosizeTextarea
}
