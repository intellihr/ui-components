import styled from 'styled-components'
import { getColor } from '../Color'

export const InputWrapper = styled.div`
  position: relative;
  color: ${getColor('main-text-light')};

  input {
    text-indent: 30px;
  }

  .fa {
    position: absolute;
    top: 10px;
    left: 10px;
    color: ${getColor('border')};
  }
`
