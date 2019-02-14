import React from 'react'
import styled from 'styled-components'

const InputGroupWrapper = styled.div`
  display: flex;

  > *:not(button) {
    width: 0;
    flex: 1 1 auto;
  }
`

export {
  InputGroupWrapper
}
