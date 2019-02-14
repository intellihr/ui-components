import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

import { IIndentedElement } from './IndentedElement'

export const IndentedWrapper = styled.div`
  padding-left: ${(props: IIndentedElement) => `${32 * props.depth}px`};
`
