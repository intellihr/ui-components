import styled from 'styled-components'

import { Utils, Variables } from '../../../common'

const BoardWrapper = styled.div``

const BoardTilesWrapper = styled.div`
  display: flex;
  align-content: stretch;
  flex-wrap: wrap;
  margin: 0 -24px -24px 0;
`

const StyledBoardLabel = styled.label`
  font-size: ${Variables.FontSize.fzHeading}px;
  line-height: ${Variables.LineHeight.lhHeading}px;
  font-weight: ${Variables.FontWeight.fwSemiBold};
  color: ${Variables.Color.n700};
  margin-bottom: 12px;

  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    width: 100%;
  }
`

const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    flex-wrap: wrap;
    margin-bottom: ${Variables.Spacing.s2XSmall}px;
  }
`

export {
  StyledBoardLabel,
  BoardWrapper,
  BoardTilesWrapper,
  StyledHeadingWrapper
}
