import React from 'react'
import styled, { StyledFunction } from 'styled-components'
import { Anchor, IAnchorProps } from '../../Internals/Anchor/Anchor'

interface IUnstyledLinkProps extends IAnchorProps {}

const styledAnchor: StyledFunction<IUnstyledLinkProps> = styled(Anchor)

export const UnstyledLink = styledAnchor`
  &,
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
`

UnstyledLink.displayName = 'UnstyledLink'

export {
  IUnstyledLinkProps
}
