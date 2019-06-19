import React from 'react'
import styled, { StyledFunction } from 'styled-components'

import { Variables, Props } from '../../../common'
import { DropdownMenu } from '../../Popovers/DropdownMenu'
import { styleForMargins } from '../../Spacers/services/margins';

const dropdownMenu: StyledFunction<{ margins?: Props.IMargins }> = styled(({ margins, children, ...rest }) => <DropdownMenu {...rest} />)

const StyledDropdownMenu = dropdownMenu`
  ${(props) => styleForMargins(props.margins)}
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
