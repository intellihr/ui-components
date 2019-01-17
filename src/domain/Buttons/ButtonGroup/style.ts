import styled from 'styled-components'

const StyledButtonGroup = styled.span`
  > a,
  > button {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export {
  StyledButtonGroup
}
