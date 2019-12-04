import React from 'react'

import { Props } from '../../../common'
import { StyledMargin } from './style'

const Margin: React.FC<{
  margins?: Props.IMargins
  children?: React.ReactNode
}> = ({margins, children}) =>  (
  <StyledMargin
    margins={margins}
  >
    {children}
  </StyledMargin>
)

export {
  Margin
}
