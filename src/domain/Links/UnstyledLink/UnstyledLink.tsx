import React from 'react'
import styled from 'styled-components'
import { Anchor, IAnchorProps } from '@Domain/Internals'

export const UnstyledLink = styled(Anchor)`
  &,
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
`

UnstyledLink.displayName = 'UnstyledLink'

interface IUnstyledLinkProps extends IAnchorProps {}

export {
  IUnstyledLinkProps
}
