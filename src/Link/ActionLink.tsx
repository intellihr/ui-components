import React from 'react'
import styled from 'styled-components'
import { AnchorProps, withAnchor } from '../Anchor'

const ActionLinkLabel = styled.span`
  color: rgb(5, 87, 223);
  font-weight: 600;
  font-size: .9375rem;
  text-transform: uppercase;
`

export interface ActionLinkProps extends AnchorProps {}
export const ActionLink: React.ComponentClass<ActionLinkProps> = withAnchor(ActionLinkLabel)
