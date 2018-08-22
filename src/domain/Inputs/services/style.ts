import styled from 'styled-components'

const { n800, n400 } = require('../../../common/sass/variables.scss')

export const InputWrapper = styled.div`
  position: relative;
  color: ${n800};

  input {
    text-indent: 30px;
  }

  .fa {
    position: absolute;
    top: 10px;
    left: 10px;
    color: ${n400};
  }
`
