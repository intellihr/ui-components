import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

export interface IInputWrapperProps {
  disabledPrefix?: string
  hasIcon: boolean
  prefixWrapperWidth: number
  hasTextIndent: boolean
  hasClearButton?: boolean
}

export interface IStyledInputProps {
  margins?: Props.IMargins
}

const wrapperPadding = 8

const InputWrapper = styled.div`
  position: relative;
  color: ${Variables.Color.n800};
  width: 100%;

  ${(props: IInputWrapperProps) => props.hasTextIndent && css`
     input {
        text-indent: ${props.prefixWrapperWidth - wrapperPadding}px;
      }
  `}

  ${(props: IInputWrapperProps) => props.hasClearButton && css`
      input {
        padding-right: 32px;
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

  margin: 0;
  ${(props: IStyledInputProps) => styleForMargins(props.margins)}

  &::-ms-clear {
    display: none;
  }
`

const StyleClearButton = styled.button`
  position: absolute;
  top: 11px;
  right: 12px;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${Variables.Color.r600};
  }
`

export {
  InputWrapper,
  PrefixWrapper,
  DisabledTextWrapper,
  StyledInput,
  StyleClearButton
}
