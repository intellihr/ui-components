import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IMarginToggleSwitch {
  margins?: Props.IMargins
  isChild?: boolean
}

const MarginToggleSwitch = styled.div<IMarginToggleSwitch>`
  ${(props: IMarginToggleSwitch) => styleForMargins(props.margins)}
  ${(props: IMarginToggleSwitch) => {
    if (props.isChild) {
      return css`
        margin-bottom: 16px;
        margin-left: ${Variables.Spacing.sLarge}px;
      `
    }
}}
`

const StyledChildren = styled.div`
  margin-top: ${Variables.Spacing.sLarge}px;
`

export {
  StyledChildren,
  MarginToggleSwitch
}
