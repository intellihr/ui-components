import React from 'react'
import styled from 'styled-components'
import { AnchorProps, withAnchor } from '../../Anchors'

const TextLinkLabel = styled.span`
  color: rgb(5, 87, 223);
`

interface TextLinkProps extends AnchorProps {}
const TextLink: React.ComponentClass<TextLinkProps> = withAnchor(TextLinkLabel)

export {
  TextLinkProps,
  TextLink
}
