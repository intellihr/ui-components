import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../services/margins'

const StyledMargin = styled.div<{margins?: Props.IMargins,  display?: 'block' | 'inline-block'}>`
  display: ${({display}) => display};
  ${({margins}) => styleForMargins(margins)}
`

export {
  StyledMargin
}
