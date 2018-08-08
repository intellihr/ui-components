import React from 'react'
import styled from 'styled-components'
import { Anchor, IAnchorProps } from '../../Internals/Anchor/Anchor'

interface IUnstyledLinkProps extends IAnchorProps {}

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

export {
  IUnstyledLinkProps
}
