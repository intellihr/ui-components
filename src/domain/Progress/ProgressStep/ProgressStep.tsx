import React from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { Text } from '../../Typographies/Text'
import { ProgressStepVariant, StyledProgressStep, StyledProgressStepDot } from './style'

interface IProgressStepProps {
  /** What style variant of progress step to display */
  variant?: ProgressStepVariant
  /** label of the progress step */
  label: string
  /** index of the progress step (start from 0) */
  index?: number
  /** Event handler when the past progress step is clicked */
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void
  /** The data-component-context */
  componentContext?: string
}

const ProgressStep: React.FC<IProgressStepProps> & {Variant: typeof ProgressStepVariant} = ({ variant = ProgressStepVariant.Upcoming, onClick, label, index, componentContext}) => {
  const clickEnabled = onClick && variant === ProgressStepVariant.Past
  return (
    <StyledProgressStep
      data-component-type={Props.ComponentType.ProgressStep}
      data-component-context={componentContext}
      isHoverable={clickEnabled}
      onClick={clickEnabled ? onClick : undefined}
    >
      <StyledProgressStepDot
        variant={variant}
        isHoverable={clickEnabled}
      >
        {variant === ProgressStepVariant.Current && <FontAwesomeIcon color={Variables.Color.n100} type='solid' icon='pencil-alt' />}
        {variant === ProgressStepVariant.Past && <FontAwesomeIcon color={Variables.Color.n100} type='solid' icon='check' />}
        {
          (variant === ProgressStepVariant.Upcoming && index) && (
            <Text type={Props.TypographyType.Body} color={Variables.Color.n100} weight={Variables.FontWeight.fwSemiBold}>{(index + 1).toString()}</Text>
          )
        }
      </StyledProgressStepDot>
      {label && (
        <Text
          type={Props.TypographyType.Small}
          color={variant === ProgressStepVariant.Upcoming ? Variables.Color.n500 : Variables.Color.n700}
          margins={{ left: Variables.Spacing.sXSmall }}
        >
          {label}
        </Text>
      )}
    </StyledProgressStep>
  )
}

ProgressStep.Variant = ProgressStepVariant

export {
  ProgressStep
}
