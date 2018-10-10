import React from 'react'
import styled, { StyledComponentClass, css } from 'styled-components'
import { Variables } from '../../../common'

interface IStyledPopoverProps {
  transformOrigin: {
    xPos: 'left' | 'center' | 'right',
    yPos: 'top' | 'center' | 'bottom'
  }
}

const StyledPopover = styled.span`
  margin: 2px;
  position: absolute;
  width: min-content;
  z-index: ${Variables.ZIndex.zIndexDropdownMenu};

  transform: scale(0.1);
  transform-origin: ${(props: IStyledPopoverProps) => props.transformOrigin.xPos + ' ' + props.transformOrigin.yPos};
  transition: transform 150ms cubic-bezier(0.5, 1.8, 0.9, 0.8);

  &.entering,
  &.entered {
    transform: scale(1);
  }
`

export {
  StyledPopover
}
