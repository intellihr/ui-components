import React from 'react'
import { Props } from '../../../common'
import { StyledPill } from './style'

type PillColors = 'alert' | 'success' | 'warning' | 'primary' | 'neutral' | 'secondary' | 'highlight' | 'dark'

type PillSizes = 'small' | 'medium' | 'large'

interface IPillProps {
  /** Text to show inside the label  */
  text: string
  /** Extra classes to apply to the label  */
  className?: string
  /** Background or border colour of the label  */
  color?: PillColors
  /** size of the label  */
  size?: PillSizes
  /** The margins around the component */
  margins?: Props.IMargins
}

const Pill: React.FC<IPillProps> = ({color = 'neutral', size = 'small', text, className, margins}) => (
  <StyledPill
    className={className}
    size={size!}
    color={color!}
    margins={margins}
  >
    {text}
  </StyledPill>
)

export {
  IPillProps,
  Pill,
  PillColors,
  PillSizes
}
