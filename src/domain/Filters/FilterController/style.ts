import styled, { css } from 'styled-components'

import { Props, Utils, Variables } from '../../../common'
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
  flex-wrap: wrap;

  ${(props: IStyledControllerProps) => props.hasBottomMargin && css`
     margin-bottom: ${Variables.Spacing.sXSmall}px;
  `}
`

const StyledLeftComponent = styled.div`
    width: auto;
    flex: 1 1 0%;
    min-width: 290px;

    ${(props: IStyledLeftComponentProps) => props.hasRightMargin && css`
      margin-right: ${Variables.Spacing.sXSmall}px;
    `}

    ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointDesktop })} {
      width: 100%;
      flex: 1 1 auto;
      margin-right: 0;
      margin-bottom: ${Variables.Spacing.sXSmall}px;
    }
`

export {
  ControllerWrapper,
  StyledController,
  StyledLeftComponent
}
