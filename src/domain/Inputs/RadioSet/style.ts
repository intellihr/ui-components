import styled, { css } from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IRadioSetWrapperProps {
  orientation: Props.Orientation
  margins?: Props.IMargins
}

interface IStyledRadioInputWrapperProps {
  margins?: Props.IMargins
}

const RadioSetWrapper = styled.div`
  display: inline-flex;
  max-width: 100%;

  ${(props: IRadioSetWrapperProps) => styleForMargins(props.margins)}

  ${(props: IRadioSetWrapperProps) => {
    if (props.orientation === Props.Orientation.Vertical) {
      return css`
        flex-direction: column
      `
    }
    return css`
      flex-direction: row;
      flex-wrap: wrap;
    `
  }}
`

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
  RadioSetWrapper,
  StyledRadioInput,
  StyledRadioInputWrapper
}
