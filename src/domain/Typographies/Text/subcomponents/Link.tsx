import React, { useContext } from 'react'

import { isExternalURL } from '../../../Internals/Anchor/helper'
import { StyledA } from './style'

interface ILinkProps {
  /** Href to link to */
  href?: string
  /* Callback to fire on click */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  /** @deprecated Use `openInNewTab` instead. Href target */
  target?: string
  /** Open href in new tab */
  openInNewTab?: boolean
  /** Underlines the text when hovered */
  underlineOnHover?: boolean
  /** Specifies the style variant */
  variant?: LinkVariant
}

enum LinkVariant {
  Default = 'default',
  Unstyled = 'unstyled'
}

const Link: React.FC<ILinkProps> = ({ children, href, onClick, variant, underlineOnHover, target, openInNewTab }) => {
  const targetProp = openInNewTab ? '_blank' : target
  let relProp: string | undefined

  if (href && isExternalURL(href)) {
    const rels = new Set((relProp ?? '').split(/\s+/).filter(Boolean as any))
    rels.add('noreferrer')

    relProp = Array.from(rels.values()).join(' ')
  }

  return (
    <StyledA
      href={href}
      onClick={onClick}
      target={targetProp}
      rel={relProp}
      role={(!!onClick && !href) ? 'button' : undefined}
      variant={variant || LinkVariant.Default}
      underlineOnHover={underlineOnHover}
    >
      {children}
    </StyledA>
  )
}

export {
  Link,
  ILinkProps,
  LinkVariant
}
