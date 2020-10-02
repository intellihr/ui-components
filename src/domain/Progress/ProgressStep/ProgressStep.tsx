import React from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { Text } from '../../Typographies/Text'
import { ProgressStepVariant, StyledProgressStep, StyledProgressStepDot } from './style'

interface IProgressStepProps {
  /** What style variant of progress step to display */
  variant?: ProgressStepVariant
  label: string
  index?: number
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void
  /** If the step should have a hover style */
  isHoverable?: boolean
}

const ProgressStep: React.FC<IProgressStepProps> & {Variant: typeof ProgressStepVariant} = ({ variant = ProgressStepVariant.Upcoming, isHoverable = true, onClick, label, index}) => {
  const clickEnabled = variant !== ProgressStepVariant.Current && isHoverable && onClick
  return (
    <StyledProgressStep isHoverable={clickEnabled} onClick={clickEnabled ? onClick : undefined}>
      <StyledProgressStepDot
        variant={variant}
        isHoverable={clickEnabled}
      >
        {variant === ProgressStepVariant.Current && <FontAwesomeIcon color={Variables.Color.n100} type='solid' icon='pencil-alt' />}
        {variant === ProgressStepVariant.Past && <FontAwesomeIcon color={Variables.Color.n100} type='solid' icon='check' />}
        {
          (variant !== ProgressStepVariant.Current && variant !== ProgressStepVariant.Past && index) && (
            <Text type={Props.TypographyType.Body} color={Variables.Color.n100} weight={Variables.FontWeight.fwSemiBold}>{(index + 1).toString()}</Text>
          )
        }
      </StyledProgressStepDot>
      <Text type={Props.TypographyType.Small} color={variant === ProgressStepVariant.Upcoming ? Variables.Color.n500 : Variables.Color.n700} margins={label ? { left: Variables.Spacing.sXSmall } : undefined}>{label}</Text>
    </StyledProgressStep>
  )
}

ProgressStep.Variant = ProgressStepVariant

export {
  ProgressStep
}
