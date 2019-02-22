import React from 'react'
import AutosizeTextarea from 'react-autosize-textarea'
import styled, { StyledComponentClass } from 'styled-components'

const StyledAutosizeTextarea = styled(AutosizeTextarea)`
  min-height: 39px;
  resize: none;
  margin: 0;
`

export {
  StyledAutosizeTextarea
}
