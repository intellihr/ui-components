import React from 'react'
import * as styled from 'styled-components'

export const LegendWrapper = styled.default.ul`
  margin: 0;
  padding: 0;

  li {
    align-items: center;
    display: flex;
    font-size: .8rem;
    margin-bottom: 3px;

    &:last-child {
      margin-bottom: 0;
    }

    i {
      font-size: 10px;
    }
  }
`

export const LegendLabel = styled.default.span`
  margin-left: 5px;
  white-space: nowrap;
  width: 100%;
`
