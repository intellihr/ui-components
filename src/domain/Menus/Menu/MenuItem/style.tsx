import React from 'react'
import styled from 'styled-components'

import { StyledMenuItem } from './MenuItemContent/style'

const StyledCollapsibleChildren = styled.span`
  ${StyledMenuItem} {
    padding-left: 2.8rem;
  }
`

export {
  StyledCollapsibleChildren
}
