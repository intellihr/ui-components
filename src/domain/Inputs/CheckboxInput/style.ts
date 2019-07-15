import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

export interface IStyledCheckboxInputWrapperProps {
  margins?: Props.IMargins
}

const StyledCheckboxInput = styled.input`
  line-height: 16px;

  margin: 0;

  &::-ms-clear {
    display: none;
  }
`

const StyledCheckboxInputWrapper = styled.div`
  ${(props: IStyledCheckboxInputWrapperProps) => styleForMargins(props.margins)}
`

export {
  StyledCheckboxInput,
  StyledCheckboxInputWrapper
}
