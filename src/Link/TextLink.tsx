import React from 'react'
import styled from 'styled-components'
import { AnchorProps, withAnchor } from '../Anchor'

const TextLinkLabel = styled.span`
  color: rgb(5, 87, 223);
`

export interface TextLinkProps extends AnchorProps {}
export const TextLink: React.ComponentClass<TextLinkProps> = withAnchor(TextLinkLabel)
