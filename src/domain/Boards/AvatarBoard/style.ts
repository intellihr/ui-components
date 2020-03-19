import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IBoardWrapperProps {
  margins?: Props.IMargins
}

const AvatarBoardWrapper = styled.div<IBoardWrapperProps>`
  ${(props) => styleForMargins(props.margins)}

  display: grid;
  grid-template-columns: repeat(auto-fit, 260px);
  gap: ${Variables.Spacing.s2XLarge}px;
  justify-content: center;
  justify-items: center;
`

export {
  AvatarBoardWrapper
}
