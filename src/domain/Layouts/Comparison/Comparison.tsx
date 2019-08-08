import React from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { ComparisonCard, StyledComparison } from './style'
import { StyledHighlightArea } from '../../Containers/HighlightArea/style'

interface IComparisonProps {
  /** The margins around the component */
  beforeComponent: React.ReactNode
  /** The component  */
  afterComponent: React.ReactNode
  /** If the component is being displayed on a mobile screen (it will then stack vertically) */
  isMobile?: boolean
  /** The margins around the component */
  margins?: Props.IMargins
  /** The component context */
  componentContext?: string
}

const Comparison: React.FC<IComparisonProps> = ({ beforeComponent, afterComponent, margins, componentContext, isMobile = false}) => (
  <StyledComparison
    isMobile={isMobile}
    margins={margins}
    data-component-type={Props.ComponentType.Comparison}
    data-component-context={componentContext}
  >
    <ComparisonCard>
      {beforeComponent}
    </ComparisonCard>
    <FontAwesomeIcon
      type='solid'
      icon={isMobile ? 'arrow-down' : 'arrow-right'}
      color={Variables.Color.n600}
      margins={{
        top: Variables.Spacing.sMedium,
        bottom: Variables.Spacing.sMedium,
        left: Variables.Spacing.sMedium,
        right: Variables.Spacing.sMedium
      }}
    />
    <ComparisonCard>
      {afterComponent}
    </ComparisonCard>
  </StyledComparison>
)

export {
  Comparison
}
