import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

export const StyledFormattedText = styled.div`
  white-space: pre-wrap;

  .react-markdown-block {
    > :last-child {
      margin-bottom: 0;
    }
  }
`
