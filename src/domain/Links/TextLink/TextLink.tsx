import React from 'react'
import styled, { StyledFunction } from 'styled-components'
import { Anchor, IAnchorProps } from '../../Internals/Anchor'
import { Variables } from '../../../common'

// tslint:disable-next-line:no-empty-interface
interface ITextLinkProps extends IAnchorProps {}

const styledAnchor: StyledFunction<ITextLinkProps> = styled(Anchor)

export const TextLink = styledAnchor`
  transition: color .25s ease-out;

  &,
  &:link,
  &:visited {
    color: ${Variables.Color.i400};
  }

  &:hover {
    color: ${Variables.Color.i500};
  }

  &:active {
    color: ${Variables.Color.i600};
  }
`

TextLink.displayName = 'TextLink'

export {
  ITextLinkProps
}
