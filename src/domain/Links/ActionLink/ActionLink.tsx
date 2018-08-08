import React from 'react'
import styled from 'styled-components'
import { Anchor, IAnchorProps } from '../../Internals/Anchor/Anchor'

interface IActionLinkProps extends IAnchorProps {}

export const ActionLink = styled(Anchor)`
  font-weight: 600;
  font-size: .9375rem;
  text-transform: uppercase;
  
  &,
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: rgb(5, 87, 223);
  }
`

ActionLink.displayName = 'ActionLink'

export {
  IActionLinkProps
}
