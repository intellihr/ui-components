import styled, { css } from 'styled-components'

import { Variables } from '../../../common'
import { styleForLineBreakText } from '../../Typographies/services/textStyles'

interface ITooltipWrapperProps {
  width?: number
}

const TooltipIcon = styled.i`
  margin-left: 5px;
`

const TooltipWrapper = styled.span`
  .__react_component_tooltip {
    user-select: none;
    color: ${Variables.Color.n100};
    line-height: 15px;
    background-color: ${Variables.Color.n800};
    ${(props: ITooltipWrapperProps) => props.width && css`max-width: ${props.width}px`}
    ${styleForLineBreakText()}

    &.place-top:after {
      border-top-color: ${Variables.Color.n800};
    }

    &.place-right:after {
      border-right-color: ${Variables.Color.n800};
    }

    &.place-bottom:after {
      border-bottom-color: ${Variables.Color.n800};
    }

    &.place-left:after {
      border-left-color: ${Variables.Color.n800};
    }
  }
`

export {
  TooltipIcon,
  TooltipWrapper
}
