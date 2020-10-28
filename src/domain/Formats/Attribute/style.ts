import styled, { css } from 'styled-components'

import {Props, Variables} from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IStyledAttributeProps {
  margins?: Props.IMargins
  isCollapsed: boolean
}

const iconWidth = Variables.Spacing.sMedium
const iconRightMargin = Variables.Spacing.sXSmall

const StyledAttribute = styled.div`
  ${(props: IStyledAttributeProps) => styleForMargins(props.margins)}
  ${(props: IStyledAttributeProps) => props.isCollapsed && css`
    display: inline-block;
  `}
`

const AttributeContentWrapper = styled.div`
  display: flex;
  align-items: center;
`

const FontAwesomeIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: ${iconWidth}px;
  margin-right: ${iconRightMargin}px;
`

export {
  StyledAttribute,
  AttributeContentWrapper,
  FontAwesomeIconWrapper,
  iconWidth,
  iconRightMargin
}
