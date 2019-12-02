import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../services/margins'

const StyledMargin = styled.div<{margins?: Props.IMargins}>`
  ${({margins}) => styleForMargins(margins)}
`

export {
  StyledMargin
}
