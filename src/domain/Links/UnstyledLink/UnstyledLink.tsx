import React from 'react'
import styled, { StyledFunction } from 'styled-components'

import { Anchor, IAnchorProps } from '../../Internals/Anchor/Anchor'

// tslint:disable-next-line:no-empty-interface
interface IUnstyledLinkProps extends IAnchorProps { }

const styledAnchor: StyledFunction<(props: IUnstyledLinkProps) => React.ReactElement> = styled(Anchor)

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
