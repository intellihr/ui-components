import React from 'react'

import { Props, Variables } from '../../../common'
import { Text } from '../../Typographies/Text'
import {
  ProgressStep, ProgressStepVariant
} from '../ProgressStep'
import {
  StyledProgressStepItemDivider,
  StyledProgressTracker
} from './style'

interface IProgressTrackerProps {
  /** The data-component-context */
  componentContext?: string
  /** The margins around the component */
  margins?: Props.IMargins
  /** Current step index of the progress tracker with the current progress step style */
  currentIndex: number
  /** Applies style for mobile viewports */
  isMobile?: boolean
}

const getVariant = (index: number, currentIndex: number) => {
  if (currentIndex === index) {
    return ProgressStepVariant.Current
  }
  if (currentIndex < index) {
    return ProgressStepVariant.Upcoming
  }
  if (currentIndex > index) {
    return ProgressStepVariant.Past
  }
}

const ProgressTracker: React.FC<IProgressTrackerProps> & {Step: typeof ProgressStep} = ({ currentIndex, isMobile = false, margins, componentContext, children}) => {
  const progressTrackerChildrenLength = React.Children.toArray(children).length

  return (
    <StyledProgressTracker
      data-component-type={Props.ComponentType.ProgressTracker}
      data-component-context={componentContext}
      margins={margins}
      isMobile={isMobile}
      hasTwoItems={progressTrackerChildrenLength < 3}
    >
      {
        React.Children.map(children,(child: any, index) => {
          if (child && child?.type && child?.type?.name === ProgressStep.name) {
            return (
              <>
                {
                  (!isMobile || (isMobile && currentIndex === index)) &&
                  React.cloneElement(child, {
                    ...child?.props,
                    index,
                    variant: getVariant(index, currentIndex)
                  })
                }
                {
                  !isMobile && progressTrackerChildrenLength - 1 > index && <StyledProgressStepItemDivider/>
                }
                {
                  isMobile && currentIndex === index &&
                  <Text
                    type={Props.TypographyType.Small}
                    color={Variables.Color.n500}
                    margins={{ left: Variables.Spacing.sXSmall }}
                  >
                    {`Step ${index + 1} of ${progressTrackerChildrenLength}`}
                  </Text>
                }
              </>
            )
          }
        })
      }
    </StyledProgressTracker>
  )
}

ProgressTracker.Step = ProgressStep

export {
  ProgressTracker
}
