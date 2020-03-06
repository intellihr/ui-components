import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IBoardWrapperProps {
  margins?: Props.IMargins
}

const AvatarBoardWrapper = styled.div<IBoardWrapperProps>`
  ${(props) => styleForMargins(props.margins)}
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;

  background-color: ${Variables.Color.n250};
  border-radius: 4px;

  padding-right: ${Variables.Spacing.sLarge}px;
  padding-top: ${Variables.Spacing.sLarge}px;
`

export {
  AvatarBoardWrapper
}
