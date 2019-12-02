import { isEqual } from 'lodash'
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

const MemoMargin = React.memo(Margin, (prevProps, nextProps) => isEqual(prevProps.margins, nextProps.margins))
MemoMargin.displayName = 'Margin'

export {
  MemoMargin as Margin
}
