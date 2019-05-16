import React from 'react'

import { Props } from '../../../common'
import { StyledHighlightArea } from './style'

type HightLightAreaColors = 'grey'

interface IHighlightAreaProps {
  /** Background color of the highlight area */
  color: HightLightAreaColors
  /** Margins around the highlight area */
  margins?: Props.IMargins
  /** Children components */
  children: React.ReactNode
  /** The component context */
  componentContext?: string
}

const HighlightArea: React.FC<IHighlightAreaProps> = ({ componentContext, color, margins, children }) => {
  return (
    <StyledHighlightArea
      color={color}
      margins={margins}
      data-component-type={Props.ComponentType.HightlightArea}
      data-component-context={componentContext}
    >
      {children}
    </StyledHighlightArea>
  )
}

export {
  HightLightAreaColors,
  IHighlightAreaProps,
  HighlightArea
}
