import React from 'react'
import styled, { css } from 'styled-components'
import { Props, Variables } from '../../../common'

interface IStyledPopoverProps {
  transformOrigin: {
    xPos: Props.Position,
    yPos: Props.Position
  },
  animationType: 'dropdown' | 'tooltip'
}

const StyledPopover = styled.span`
  margin: 2px;
  position: absolute;
  width: min-content;
  z-index: ${Variables.ZIndex.zIndexDropdownMenu};

  ${(props: IStyledPopoverProps) => {

  switch(props.animationType) {
      case 'dropdown':
        return css`
          opacity: 0.9;
          transform: scale(0.9);
          transform-origin: ${props.transformOrigin.xPos + ' ' + props.transformOrigin.yPos};
          transition: transform 150ms cubic-bezier(0.5, 1.8, 0.9, 0.8);
        
          &.entering,
          &.entered {
            opacity: 1;
            transform: scale(1);
          }
        `
      case 'tooltip':
        return css`
          opacity: 0.8;
          transition: opacity 300ms cubic-bezier(.68,-.55,.265,1.55);
          
          &.entering,
          &.entered {
            opacity: 1;
          }
        `
    }
}}
`

export {
  StyledPopover
}
