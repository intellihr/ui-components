import React from 'react'

import { Props } from '../../../common'
import { StyledShowForSizes } from './style'

const ShowForSizes: React.FC<Props.IShowForSizes> = ({lower, upper, children}) =>  (
  <StyledShowForSizes
    lower={lower}
    upper={upper}
  >
    {children}
  </StyledShowForSizes>
)

export {
  ShowForSizes
}
