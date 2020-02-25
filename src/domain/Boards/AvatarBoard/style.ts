import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IBoardWrapperProps {
  margins?: Props.IMargins
}

const AvatarBoardWrapper = styled.div<IBoardWrapperProps>`
  ${(props) => styleForMargins(props.margins)}
  display: flex;
  flex-wrap: wrap;

  background-color: ${Variables.Color.n250};
  border-radius: 4px;

  padding: 20px;
`

export {
  AvatarBoardWrapper
}
