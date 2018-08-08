import React from 'react'
import styled from 'styled-components'
import { IAnchorProps, Anchor } from '@Domain/Internals'

interface ITextLinkProps extends IAnchorProps {}

export const TextLink = styled(Anchor)<ITextLinkProps>`
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
