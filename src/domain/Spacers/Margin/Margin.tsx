import React from 'react'

import { Props } from '../../../common'
import { styleForMargins } from '../services/margins'
import { StyledMargin } from './style'

type IMargin = React.FC<{
  margins?: Props.IMargins
  children?: React.ReactNode
}> & {
  styleForMargins: typeof styleForMargins
}

const Margin: IMargin = ({margins, children}) =>  (
  <StyledMargin
    margins={margins}
  >
    {children}
  </StyledMargin>
)

Margin.styleForMargins = styleForMargins

export {
  Margin
}
