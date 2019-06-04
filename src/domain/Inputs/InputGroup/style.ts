import React from 'react'
import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IInputGroupWrapperProps {
  margins?: Props.IMargins
}

const InputGroupWrapper = styled.div`
  display: flex;

  ${(props: IInputGroupWrapperProps) => styleForMargins(props.margins)}

  > *:not(button) {
    width: 0;
    flex: 1 1 auto;
  }
`

export {
  InputGroupWrapper
}
