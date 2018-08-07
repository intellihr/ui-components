import React from 'react'
import styled from 'styled-components'
import { IAnchorProps, Anchor } from '@Domain/Internals'

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

interface ITextLinkProps extends IAnchorProps {}

export {
  ITextLinkProps
}
