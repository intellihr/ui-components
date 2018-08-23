import styled from 'styled-components'
import { Variables } from '../../../common'

export const InputWrapper = styled.div`
  position: relative;
  color: ${Variables.Color.n800};

  input {
    text-indent: 30px;
  }

  .fa {
    position: absolute;
    top: 10px;
    left: 10px;
    color: ${Variables.Color.n400};
  }
`
