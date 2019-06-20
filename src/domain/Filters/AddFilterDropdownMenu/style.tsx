import React from 'react'
import styled, { StyledFunction } from 'styled-components'

import { Props, Variables } from '../../../common'
import { DropdownMenu } from '../../Popovers/DropdownMenu'
import { IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { styleForMargins } from '../../Spacers/services/margins'

interface IStyledDropdownMenuProps {
  margins?: Props.IMargins
  toggleComponent: (props: IDropdownMenuToggleComponentProps) => React.ReactElement<any>
  componentContext?: string
}

const dropdownMenu: StyledFunction<IStyledDropdownMenuProps> = styled(({ margins, children, ...rest }) => <DropdownMenu {...rest} />)

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
