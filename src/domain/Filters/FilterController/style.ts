import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IControllerWrapperProps {
  margins?: Props.IMargins
}

interface IStyledLeftComponentProps {
  hasRightMargin: boolean
}

interface IStyledControllerProps {
  hasBottomMargin: boolean
}

const ControllerWrapper = styled.div`
  ${(props: IControllerWrapperProps) => styleForMargins(props.margins)}
`

const StyledController =  styled.div`
  display: flex;
  align-items: center;

  ${(props: IStyledControllerProps) => props.hasBottomMargin && css`
     margin-bottom: ${Variables.Spacing.sXSmall}px;
  `}
`

const StyledLeftComponent = styled.div`
    width: auto;
    flex: 1 1 0%;

    ${(props: IStyledLeftComponentProps) => props.hasRightMargin && css`
      margin-right: ${Variables.Spacing.sXSmall}px;
    `}
`

export {
  ControllerWrapper,
  StyledController,
  StyledLeftComponent
}
