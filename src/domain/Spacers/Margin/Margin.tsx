import React from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../services/margins'
import { StyledMargin } from './style'

type IMargin = React.FC<{
  margins?: Props.IMargins
  children?: React.ReactNode
}> & {
  styleForMargins: (margins?: Props.IMargins) => FlattenSimpleInterpolation | null
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
