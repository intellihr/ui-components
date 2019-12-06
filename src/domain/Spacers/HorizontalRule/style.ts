import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../services/margins'

interface IStyledHRProps {
  margins?: Props.IMargins
}

const StyledHR = styled.hr<IStyledHRProps>`
  border-bottom: 1px solid ${Variables.Color.n400};

  ${(props: IStyledHRProps) => styleForMargins(props.margins)}
`

export {
  StyledHR
}
