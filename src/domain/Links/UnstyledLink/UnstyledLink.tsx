import React from 'react'
import styled from 'styled-components'
import { Anchor, IAnchorProps } from '@Domain/Internals'

interface IUnstyledLinkProps extends IAnchorProps {}

export const UnstyledLink = styled(Anchor)<IUnstyledLinkProps>`
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
