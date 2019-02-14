import React from 'react'
import styled from 'styled-components'

import { Variables } from '../../../../common'

const StyledModalHeader = styled.div`
  height: 80px;
  background-color: ${Variables.Color.n200};
  padding: 24px;
`

const StyledModalContent = styled.div`
  padding: 16px 24px;
  flex-grow: 1;
`

const StyledModalFooter = styled.div`
  height: 80px;
  background-color: ${Variables.Color.n200};
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

const StyledModalControls = styled.div`
  display: flex;
`

export {
  StyledModalHeader,
  StyledModalContent,
  StyledModalFooter,
  StyledModalControls
}
