import styled from 'styled-components'

import { Variables } from '../../../common'

const StyledDeleteButton = styled.button`
  outline: none;
  cursor: pointer;
`

const StyledCross = styled.span`
    margin-left: 6px;
    font-size: ${Variables.FontSize.fzSmall}px;

    &:hover {
      color: ${Variables.Color.r600};
    }
`
export {
  StyledDeleteButton,
  StyledCross
}
