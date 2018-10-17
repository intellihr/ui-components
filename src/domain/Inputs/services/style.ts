import styled, { css } from 'styled-components'
import { Variables } from '../../../common'

export interface IInputWrapperProps {
  disabledPrefix?: string
  hasIcon: boolean
}

const InputWrapper = styled.div`
  position: relative;
  color: ${Variables.Color.n800};
  width: 100%;

  input {
    text-indent: 30px;
  }
  
  ${(props: IInputWrapperProps) => props.disabledPrefix && !props.hasIcon && css`
     input {
        text-indent: ${props.disabledPrefix.length * 10}px;
      }
  `}
  
  ${(props: IInputWrapperProps) => props.disabledPrefix && props.hasIcon && css`
     input {
        text-indent: ${props.disabledPrefix.length * 9 + 30}px;
      }
  `}
`
const PrefixWrapper = styled.div`
    position: absolute;
    width: auto;
    height: 39px;
    padding: 8px;
    border: 1px solid transparent;
    
    .fa {
    color: ${Variables.Color.n400};
    margin-left: 8px;
  }
`

const DisabledTextWrapper = styled.span`
    margin-left: 8px;
    line-height: 21px;
    vertical-align: top;
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
