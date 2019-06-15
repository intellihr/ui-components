import React from 'react'
import styled, { StyledFunction } from 'styled-components'

import { Variables } from '../../../common'
import { Anchor, IAnchorProps } from '../../Internals/Anchor'

// tslint:disable-next-line:no-empty-interface
interface IActionLinkProps extends IAnchorProps { }

const styledAnchor: StyledFunction<(props: IActionLinkProps) => React.ReactElement> = styled(Anchor)

export const ActionLink = styledAnchor`
  font-weight: 600;
  font-size: .9375rem;
  text-transform: uppercase;
  transition: color .25s ease-out;

  &,
  &:link,
  &:visited {
    color: ${Variables.Color.i400};
  }

  &:hover {
    color: ${Variables.Color.i500}
  }

  &:active {
    color: ${Variables.Color.i600}
  }
`

ActionLink.displayName = 'ActionLink'

export {
  IActionLinkProps
}
