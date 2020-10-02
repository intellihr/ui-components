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
  /** Component context */
  componentContext?: string
  margins?: Props.IMargins
  currentIndex: number
  isClickable?: boolean
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

const ProgressTracker: React.FC<IProgressTrackerProps> & {Step: typeof ProgressStep} = ({ currentIndex, isMobile = false, margins, isClickable = true, componentContext, children}) => {
  const progressTrackerChildren = React.Children.toArray(children)

  return (
    <StyledProgressTracker
      data-component-type={Props.ComponentType.ProgressTracker}
      data-component-context={componentContext}
      margins={margins}
      isMobile={isMobile}
    >
      {
        progressTrackerChildren.reduce((formattedChild: JSX.Element[], child: any, index) => {
          if (child ) {
            if (!isMobile || (isMobile && currentIndex === index)) {
              formattedChild.push(React.cloneElement(child, {
                ...child.props,
                index,
                variant: getVariant(index, currentIndex),
                isHoverable: isClickable
              }))
            }
          }

          if (!isMobile && progressTrackerChildren.length - 1 > index ) {
            formattedChild.push(<StyledProgressStepItemDivider/>)
          }

          if (isMobile && currentIndex === index) {
            formattedChild.push(<Text type={Props.TypographyType.Small} color={Variables.Color.n500} margins={{ left: Variables.Spacing.sXSmall }}>{`Step ${index + 1} of ${progressTrackerChildren.length}`}</Text>)
          }
          return formattedChild
        }, [])
      }
    </StyledProgressTracker>
  )
}

ProgressTracker.Step = ProgressStep

export {
  ProgressTracker
}
