import React from 'react'
import styled, { StyledFunction } from 'styled-components'
import { Anchor, IAnchorProps } from '../../Internals/Anchor/Anchor'

const { i400, i500, i600 } = require('../../../common/sass/variables.scss')

// tslint:disable-next-line:no-empty-interface
interface ITextLinkProps extends IAnchorProps {}

const styledAnchor: StyledFunction<ITextLinkProps> = styled(Anchor)

export const TextLink = styledAnchor`
  transition: color .25s ease-out;

  &,
  &:link,
  &:visited {
    color: ${i400};
  }

  &:hover {
    color: ${i500};
  }

  &:active {
    color: ${i600};
  }
`

TextLink.displayName = 'TextLink'

export {
  ITextLinkProps
}
