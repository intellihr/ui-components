import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

export interface IInputWrapperProps {
  disabledPrefix?: string
  hasIcon: boolean
  prefixWrapperWidth: number
  hasTextIndent: boolean
}

export interface IStyledNumberInputProps {
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
  margin-left: ${Variables.Spacing.s2XSmall}px;
  line-height: 21px;
  vertical-align: top;
  user-select: none;
`

const StyledNumberInput = styled.input`
  line-height: 16px;

  margin: 0;
  ${(props: IStyledNumberInputProps) => styleForMargins(props.margins)}

  ${(props: IStyledNumberInputProps) => props.width && css`
      width: ${props.width}px;
   `}

  &::-ms-clear {
    display: none;
  }
`

export {
  InputWrapper,
  PrefixWrapper,
  DisabledTextWrapper,
  StyledNumberInput
}
