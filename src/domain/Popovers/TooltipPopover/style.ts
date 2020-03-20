import styled, { css } from 'styled-components'

import { Variables } from '../../../common'
import { styleForLineBreakText } from '../../Typographies/services/textStyles'
import { TooltipPopoverVariant } from './TooltipPopover'

interface IStyledToggleComponentWrapper {
  noHelpCursor?: boolean
}

interface IStyledTooltipContentProps {
  width?: number
  variant: TooltipPopoverVariant
}

const StyledToggleComponentWrapper = styled.span`
  cursor: ${(props: IStyledToggleComponentWrapper) => props.noHelpCursor ? 'auto' : 'help'};
`

const StyledTooltipContent = styled.div`
  width: max-content;

  ${styleForLineBreakText()}
  ${(props: IStyledTooltipContentProps) => props.width && css`max-width: ${props.width}px`}

  ${(props: IStyledTooltipContentProps) => {

    switch (props.variant) {
      case 'neutral':
        return css`
            background-color: ${Variables.Color.n100};
            border-radius: ${Variables.Style.borderRadius}px;
            border: 1px solid ${Variables.Color.n400};
            box-shadow: 0 2px 4px rgba(38, 45, 51, 0.1);
            padding: ${Variables.Spacing.sMedium}px;
          `
      case 'dark':
        return css`
            color: ${Variables.Color.n100};
            background-color: ${Variables.Color.n800};
            border-radius: ${Variables.Style.borderRadius}px;
            opacity: 0.9;
            box-shadow: ${Variables.BoxShadow.bsLv3Active};
            padding: ${Variables.Spacing.s2XSmall}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.s2XSmall}px ${Variables.Spacing.sMedium}px;
          `
    }
  }}
`

export {
  StyledToggleComponentWrapper,
  StyledTooltipContent
}
