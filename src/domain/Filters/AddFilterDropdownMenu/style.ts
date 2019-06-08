import styled from 'styled-components'

import { Variables } from '../../../common'
import { DropdownMenu } from '../../Popovers/DropdownMenu'

const StyledDropdownMenu = styled(DropdownMenu)`
  width: 320px;
`

const OperatorTextWrapper = styled.div`
  margin-top: ${Variables.Spacing.sXSmall}px;
  margin-bottom: ${Variables.Spacing.sXSmall}px;
`

export {
  StyledDropdownMenu,
  OperatorTextWrapper
}
