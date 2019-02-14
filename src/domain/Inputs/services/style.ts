import styled, { css } from 'styled-components'

import { Variables } from '../../../common'

export interface IInputWrapperProps {
  disabledPrefix?: string
  hasIcon: boolean
  prefixWrapperWidth: number
}

const wrapperPadding = 8

const InputWrapper = styled.div`
  position: relative;
  color: ${Variables.Color.n800};
  width: 100%;

  ${(props: IInputWrapperProps) => css`
     input {
        text-indent: ${props.prefixWrapperWidth - wrapperPadding}px;
      }
  `}

`
const PrefixWrapper = styled.div`
    position: absolute;
    width: auto;
    height: 39px;
    padding: ${wrapperPadding}px;
    border: 1px solid transparent;
    line-height: 16px;

    .fa {
    color: ${Variables.Color.n400};
    line-height: 21px;
    vertical-align: top;
  }
`

const DisabledTextWrapper = styled.span`
    margin-left: 4px;
    line-height: 21px;
    vertical-align: top;
    user-select: none;
`

const StyledInput = styled.input`
  line-height: 16px;

  &::-ms-clear {
    display: none;
  }
`

export {
  InputWrapper,
  PrefixWrapper,
  DisabledTextWrapper,
  StyledInput
}
