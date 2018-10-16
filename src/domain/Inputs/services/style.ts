import styled, { css } from 'styled-components'
import { Variables } from '../../../common'

export interface IInputWrappeProps {
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
  
  ${(props: IInputWrappeProps) => props.disabledPrefix && !props.hasIcon && css`
     input {
        text-indent: ${props.disabledPrefix.length * 10}px;
      }
  `}
  
  ${(props: IInputWrappeProps) => props.disabledPrefix && props.hasIcon && css`
     input {
        text-indent: ${props.disabledPrefix.length * 9 + 30}px;
      }
  `}

`
const PrefixWrapper = styled.div`
    position: absolute;
    top: 8px;
    left: 4px;
    width: auto;
    user-select: none;
    
    .fa {
    color: ${Variables.Color.n400};
    margin-left: 8px;
  }
`

const DisabledTextWrapper = styled.span`
    margin-left: 8px;
`

export {
  InputWrapper,
  PrefixWrapper,
  DisabledTextWrapper
}
