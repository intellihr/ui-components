import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

export interface IInputWrapperProps {
  disabledPrefix?: string
  hasIcon: boolean
  prefixWrapperWidth: number
  hasTextIndent: boolean
  hasClearButton: boolean
}

export interface IStyledTextInputProps {
  margins?: Props.IMargins
  width?: string
}

const wrapperPadding = Variables.Spacing.sXSmall

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
        padding-right: ${Variables.Spacing.sXLarge}px;
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

  .fas {
    color: ${Variables.Color.n400};
    line-height: 21px;
    vertical-align: top;
  }
`

const DisabledTextWrapper = styled.span`
  margin-left: ${Variables.Spacing.s2XSmall}px;
  line-height: 21px;
  vertical-align: top;
  user-select: none;
`

const StyledTextInput = styled.input`
  line-height: 16px;

  margin: 0;
  ${(props: IStyledTextInputProps) => styleForMargins(props.margins)}

  ${(props: IStyledTextInputProps) => props.width && css`
      width: ${props.width}px;
   `}

  &::-ms-clear {
    display: none;
  }
`

const StyleClearButton = styled.button`
  position: absolute;
  top: 11px;
  right: ${Variables.Spacing.sSmall}px;
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
  StyledTextInput,
  StyleClearButton
}
