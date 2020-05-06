import styled, {css} from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

const StyledEmptyState = styled.div<{ margins?: Props.IMargins, isBackgroundTransparent?: boolean }>`
  ${(props: { margins?: Props.IMargins }) => styleForMargins(props.margins)}
  ${(props: { isBackgroundTransparent?: boolean }) => (
    props.isBackgroundTransparent
      ? css`background-color: transparent;`
      : css`background-color: ${Variables.Color.n150};`
)}
  border-color: ${Variables.Color.n400};
  border-width: 0;
  flex-grow: 1;
  padding: 48px;
  text-align: center;
`

const StyledPrimaryMessage = styled.div`
  color: ${Variables.Color.n700};
  font-size: ${Variables.FontSize.fzHeading}px;
  font-weight: ${Variables.FontWeight.fwSemiBold};
  letter-spacing: -0.02em;
  line-height: ${Variables.LineHeight.lhBody}px;
  margin-bottom: ${Variables.Spacing.sXSmall}px;
`

const StyledSecondaryMessage = styled.div`
  color: ${Variables.Color.n600};
  font-size: ${Variables.FontSize.fzBody}px;
  font-weight: ${Variables.FontWeight.fwNormal};
  letter-spacing: normal;
  line-height: ${Variables.LineHeight.lhBody}px;
  margin-bottom: ${Variables.Spacing.sMedium}px;
`

const StyledImage = styled.img`
  margin-top: ${Variables.Spacing.sMedium}px;
`

export {
  StyledEmptyState,
  StyledImage,
  StyledPrimaryMessage,
  StyledSecondaryMessage
}
