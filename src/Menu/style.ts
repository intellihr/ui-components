import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

const MenuItemAnchorWrapper = styled.a`
  padding: 1 rem;
  display: flex;
  align-items: center;
`

const IconWrapper = styled.span`
  margin-right: 0.2rem;
  width: 1.28571em;
  text-align: center;
  vertical-align: top;
`

const LoadingIconWrapper = styled.span`
  float: right;
`

export {
  MenuItemAnchorWrapper,
  IconWrapper,
  LoadingIconWrapper
}
