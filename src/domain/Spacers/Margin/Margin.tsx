import React from 'react'

import { Props } from '../../../common'
import { StyledMargin } from './style'

const Margin: React.FC<{
  margins?: Props.IMargins
  children?: React.ReactNode
  display?: 'block' | 'inline-block'
}> = ({margins, children, display = 'block'}) =>  (
  <StyledMargin margins={margins} display={display}>
    {children}
  </StyledMargin>
)

export {
  Margin
}
