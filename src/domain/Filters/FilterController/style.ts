import styled, { css } from 'styled-components'

import { Props, Utils, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IControllerWrapperProps {
  margins?: Props.IMargins
}

interface IStyledControllerProps {
  hasBottomMargin: boolean
}

const ControllerWrapper = styled.div`
  ${(props: IControllerWrapperProps) => styleForMargins(props.margins)}
`

const StyledController =  styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: -${Variables.Spacing.sXSmall}px;
  margin-bottom: ${(props: IStyledControllerProps) => props.hasBottomMargin ? 0 : `-${Variables.Spacing.sXSmall}px`};
`

const StyledLeftComponent = styled.div`
    width: auto;
    flex: 1 1 0%;
    margin-right: ${Variables.Spacing.sXSmall}px;
    margin-bottom: ${Variables.Spacing.sXSmall}px;


    ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointDesktop })} {
      width: 100%;
      flex: 1 1 auto;
    }
`

const StyledRightComponent = styled.div`
    display: flex;
    width: auto;
    flex: 0 0 auto;
    align-items: center;
    margin-bottom: ${Variables.Spacing.sXSmall}px;
    margin-right: ${Variables.Spacing.sXSmall}px;

    ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointDesktop })} {
      width: 100%;
      flex: 1 1 0%;
    }
`

export {
  ControllerWrapper,
  StyledController,
  StyledLeftComponent,
  StyledRightComponent
}
