import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IStyledStatusIndicator {
  margins?: Props.IMargins
}

const StyledStatusIndicator = styled.div`
  font-size: ${Variables.FontSize.fzBody};
  font-weight: normal;
  vertical-align: bottom;

  ${(props: IStyledStatusIndicator) => props.margins && styleForMargins(props.margins)}

  .icon {
    bottom: 2px;
    font-size: ${Variables.FontSize.fzXSmall};
    margin-right: .5rem;
    position: relative;
  }
`

const StatusTitle = styled.div`
  display: flex;
  align-items: center;
`

export {
  StyledStatusIndicator,
  StatusTitle
}
