import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

export interface IControllerWrapperProps {
  margins?: Props.IMargins
}

const ControllerWrapper = styled.div`
  ${(props: IControllerWrapperProps) => styleForMargins(props.margins)}
`

export {
  ControllerWrapper
}
