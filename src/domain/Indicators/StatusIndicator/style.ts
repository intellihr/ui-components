import styled from 'styled-components'

import { Variables } from '../../../common'

const StyledStatusIndicator = styled.div`
   font-size: ${Variables.FontSize.fzBody};
   font-weight: normal;
   vertical-align: bottom;

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
