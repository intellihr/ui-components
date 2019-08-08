import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IStyledComparisonProps {
  isMobile: boolean
  margins?: Props.IMargins
}

const ComparisonCard = styled.div`
  border-radius: ${Variables.Style.borderRadius}px;
  border: 1px solid ${Variables.Color.n400};
  padding: ${Variables.Spacing.sMedium}px;
  width: 100%;
  height: fit-content;
  word-break: break-word;
`

const StyledComparison = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: ${(props: IStyledComparisonProps) => props.isMobile ? 'center' : 'top'};
  flex-direction: ${(props: IStyledComparisonProps) => props.isMobile ? 'column' : 'row'};
  ${(props: IStyledComparisonProps) => styleForMargins(props.margins)}
`

export {
  StyledComparison,
  ComparisonCard
}
