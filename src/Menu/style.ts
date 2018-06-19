import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

export const MenuItemAnchor = styled.a`
  padding: 1 rem;
`

export const styleMenuIcon = (Icon: React.ComponentType) => styled(Icon)`
  margin-right: 0.1825rem;
  width: 1.28571em;
  text-align: center;
  vertical-align: top;
`

export const StyledIcon = styled.span`
  margin-right: 0.2rem;
  width: 1.28571em;
  text-align: center;
  vertical-align: top;
`
