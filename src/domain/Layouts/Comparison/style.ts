import styled from 'styled-components'

import { Props, Utils, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { styleForLineBreakText } from '../../Typographies/services/textStyles'

interface IStyledComparisonProps {
  margins?: Props.IMargins
}

const ComparisonCard = styled.div`
  border-radius: ${Variables.Style.borderRadius}px;
  border: 1px solid ${Variables.Color.n400};
  padding: ${Variables.Spacing.sMedium}px;
  width: 100%;
  ${styleForLineBreakText()}
`

const StyledComparison = styled.div`
  justify-content: space-around;
  display: flex;

  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    align-items: center;
    flex-direction: column;
  }

  ${Utils.mediaQueryBetweenSizes({ minPx: Variables.Breakpoint.breakpointTablet })} {
    align-items: start;
    flex-direction: row;
  }

  ${(props: IStyledComparisonProps) => styleForMargins(props.margins)}
`

export {
  StyledComparison,
  ComparisonCard
}
