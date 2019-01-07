import styled from 'styled-components'

const StyledButtonGroup = styled.span`
  > a,
  > button {
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0px;
    }
  }
`

export {
  StyledButtonGroup
}
