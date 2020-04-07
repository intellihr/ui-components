import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IBoardWrapperProps {
  margins?: Props.IMargins
}

const AvatarBoardWrapper = styled.div<IBoardWrapperProps>`
  ${(props) => styleForMargins(props.margins)}

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: ${Variables.Spacing.sXLarge}px;
  justify-content: center;
  justify-items: center;
`

export {
  AvatarBoardWrapper
}
