import React from 'react'
import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

const StyledSpan = styled.span<{margins?: Props.IMargins}>`
   ${(props: {margins?: Props.IMargins}) => styleForMargins(props.margins)}
`

export {
  StyledSpan
}
