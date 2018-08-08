import React from 'react'
import styled from 'styled-components'
import { Anchor, IAnchorProps } from '../../Internals/Anchor/Anchor'

interface ITextLinkProps extends IAnchorProps {}

export const TextLink = styled(Anchor)`
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
