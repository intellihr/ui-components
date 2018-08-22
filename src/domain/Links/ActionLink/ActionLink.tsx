import React from 'react'
import styled, { StyledFunction } from 'styled-components'
import { Anchor, IAnchorProps } from '../../Internals/Anchor/Anchor'

const { i400, i500, i600 } = require('../../../common/sass/variables.scss')

// tslint:disable-next-line:no-empty-interface
interface IActionLinkProps extends IAnchorProps {}

const styledAnchor: StyledFunction<IActionLinkProps> = styled(Anchor)

export const ActionLink = styledAnchor`
  font-weight: 600;
  font-size: .9375rem;
  text-transform: uppercase;
  transition: color .25s ease-out;

  &,
  &:link,
  &:visited {
    color: ${i400};
  }

  &:hover {
    color: ${i500}
  }

  &:active {
    color: ${i600}
  }
`

ActionLink.displayName = 'ActionLink'

export {
  IActionLinkProps
}
