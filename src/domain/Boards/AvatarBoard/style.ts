import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IBoardWrapperProps {
  margins?: Props.IMargins
}

const AvatarBoardWrapper = styled.div<IBoardWrapperProps>`
  ${(props) => styleForMargins(props.margins)}
`

const AvatarBoardChildrenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  background-color: ${Variables.Color.n250};
  border-radius: 4px;
`

export {
  AvatarBoardWrapper,
  AvatarBoardChildrenWrapper
}
