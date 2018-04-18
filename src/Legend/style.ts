import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

const LegendWrapper = styled.ul`
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

const LegendLabel = styled.span`
  margin-left: 5px;
  white-space: nowrap;
  width: 100%;
`

export {
  LegendWrapper,
  LegendLabel
}
