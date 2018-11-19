import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { Variables } from '../../../common'

const TooltipIcon = styled.i`
  margin-left: 5px;
`

const TooltipWrapper = styled.span`
  display: inline-block;

  .__react_component_tooltip {
    user-select: none;
    color: ${Variables.Color.n100};
    background-color: ${Variables.Color.n800};

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
