import React from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { ComparisonCard, StyledComparison } from './style'

interface IComparisonProps {
  /** The margins around the component */
  beforeComponent: React.ReactNode
  /** The component  */
  afterComponent: React.ReactNode
  /** The margins around the component */
  margins?: Props.IMargins
  /** The component context */
  componentContext?: string
}

const iconMargins = {
  top: Variables.Spacing.sMedium,
  bottom: Variables.Spacing.sMedium,
  left: Variables.Spacing.sMedium,
  right: Variables.Spacing.sMedium
}

const Comparison: React.FC<IComparisonProps> = ({ beforeComponent, afterComponent, margins, componentContext}) => (
  <StyledComparison
    margins={margins}
    data-component-type={Props.ComponentType.Comparison}
    data-component-context={componentContext}
  >
    <ComparisonCard>
      {beforeComponent}
    </ComparisonCard>
    <FontAwesomeIcon
      type='solid'
      icon='arrow-down'
      color={Variables.Color.n600}
      showForSizes={{upper: Variables.Breakpoint.breakpointTablet}}
      margins={iconMargins}
    />
    <FontAwesomeIcon
      type='solid'
      icon='arrow-right'
      color={Variables.Color.n600}
      showForSizes={{lower: Variables.Breakpoint.breakpointTablet}}
      margins={iconMargins}
    />
    <ComparisonCard>
      {afterComponent}
    </ComparisonCard>
  </StyledComparison>
)

export {
  Comparison
}
