import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IStyledStatusProps {
  margins?: Props.IMargins
}

const StyledStatus = styled.div`
  display: flex;
  align-items: center;
  ${(props: IStyledStatusProps) => styleForMargins(props.margins)};
`

export {
  StyledStatus
}
