import React from 'react'
import styled, { StyledComponentClass, css } from 'styled-components'
import { IIndentedElement } from './IndentedElement'

export const IndentedWrapper = styled.div`
  ${(props: IIndentedElement) => props.depth && css`
    padding-left: ${32 * props.depth}px;
  `}
`
