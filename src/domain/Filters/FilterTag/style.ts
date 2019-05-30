import styled from 'styled-components'

import { Variables } from '../../../common'

const TagWrapper = styled.span`
  margin-right: 4px;
`

const StyledDeleteButton = styled.button`
  outline: none;
  cursor: pointer;
`

const StyledCross = styled.span`
    margin-left: 4px;
    font-size: 14px;

    &:hover {
      color: ${Variables.Color.r600};
    }
`
export {
  StyledDeleteButton,
  TagWrapper,
  StyledCross
}
