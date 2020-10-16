import React from 'react'

import { Props } from '../../../common'
import { StatusDotVariants, StyledStatusDot } from './style'

interface IStatusDotProps {
  /** Component context */
  componentContext?: string
  /** What style variant of status dot to display */
  variant?: StatusDotVariants
  /** The margins around the component */
  margins?: Props.Margin
  /** If true, will display the dot inline */
  isInline?: boolean
  /** If true, makes the dot pulse */
  isPulsing?: boolean
}

const StatusDot: React.FC<IStatusDotProps> & {Variant: typeof StatusDotVariants} = ({
  componentContext,
  margins,
  variant,
  isInline = false,
  isPulsing = false
}) => {
  return (
    <StyledStatusDot
      data-component-type={Props.ComponentType.StatusDot}
      data-component-context={componentContext}
      margins={margins}
      variant={variant}
      isInline={isInline}
      isPulsing={isPulsing}
    />
  )
}

StatusDot.Variant = StatusDotVariants

export {
  StatusDot
}
