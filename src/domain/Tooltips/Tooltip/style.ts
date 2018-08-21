import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

const { n100, n800 } = require('../../../common/sass/variables.scss')

const TooltipIcon = styled.i`
  margin-left: 5px;
`

const TooltipWrapper = styled.span`
  .__react_component_tooltip {
    user-select: none;
    color: ${n100};
    background-color: ${n800};

    &.place-top:after {
      border-top-color: ${n800};
    }

    &.place-right:after {
      border-right-color: ${n800};
    }

    &.place-bottom:after {
      border-bottom-color: ${n800};
    }

    &.place-left:after {
      border-left-color: ${n800};
    }


  }
`

export {
  TooltipIcon,
  TooltipWrapper
}
