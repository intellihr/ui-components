import styled from 'styled-components'
import { Variables } from '../../../common'

const BoardWrapper = styled.div`
  display: flex;
  align-content: stretch; 
  flex-wrap: wrap;
  margin: 0 -24px -24px 0;
`

const StyledBoardLabel = styled.label`
  font-size: ${Variables.FontSize.fzHeading}px;
  line-height: ${Variables.LineHeight.lhHeading}px;
  font-weight: ${Variables.FontWeight.fwHeavy};
  color: ${Variables.Color.n700};
  text-transform: capitalize;
  margin-bottom: 12px;
`

export {
  StyledBoardLabel,
  BoardWrapper
}
