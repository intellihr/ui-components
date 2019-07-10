import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

export interface IStyledRadioInputWrapperProps {
  margins?: Props.IMargins
}

const StyledRadioInput = styled.input`
  line-height: 16px;

  margin: 0;

  &::-ms-clear {
    display: none;
  }
`

const StyledRadioInputWrapper = styled.div`
  ${(props: IStyledRadioInputWrapperProps) => styleForMargins(props.margins)}
`

export {
  StyledRadioInput,
  StyledRadioInputWrapper
}
