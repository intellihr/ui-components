import styled, { css } from 'styled-components'
import { Variables } from '../../../common'

export interface IInputWrappeProps {
  disablePrefix: string |undefined
  hasIcon: boolean
}

const InputWrapper = styled.div`
  position: relative;
  color: ${Variables.Color.n800};

  input {
    text-indent: 30px;
  }
  
  ${(props: IInputWrappeProps) => {
  if (props.disablePrefix && !props.hasIcon) {
    return css `
      input {
        text-indent: ${props.disablePrefix.length * 10}px;
      }
    `
  }
  if (props.disablePrefix && props.hasIcon) {
    return css `
      input {
        text-indent: ${props.disablePrefix.length * 9 + 30}px;
      }
    `
  }
  }}

`
const PrefixWrapper = styled.div`
    position: absolute;
    top: 8px;
    left: 4px;
    width: auto;
    
    .fa {
    color: ${Variables.Color.n400};
    margin-left: 8px;
  }
`

const DisableTextWrapper = styled.span`
    margin-left: 8px;
`
export {
  InputWrapper,
  PrefixWrapper,
  DisableTextWrapper
}
