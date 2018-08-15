import React from 'react'
import styled, { StyledFunction } from 'styled-components'
import { Anchor, IAnchorProps } from '../../Internals/Anchor/Anchor'

// tslint:disable-next-line:no-empty-interface
interface ITextLinkProps extends IAnchorProps {}

const styledAnchor: StyledFunction<ITextLinkProps> = styled(Anchor)

export const TextLink = styledAnchor`
  &,
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: rgb(5, 87, 223);
  }
`

TextLink.displayName = 'TextLink'

export {
  ITextLinkProps
}
