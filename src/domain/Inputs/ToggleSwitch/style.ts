import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IMarginToggleSwitch {
  margins?: Props.IMargins
}

const MarginToggleSwitch = styled.div<IMarginToggleSwitch>`
  ${(props: IMarginToggleSwitch) => styleForMargins(props.margins)}
`

export {
  MarginToggleSwitch
}
