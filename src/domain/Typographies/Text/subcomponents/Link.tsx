import React from 'react'

import { StyledA } from './style'

interface ILinkProps {
  /** Href to link to */
  href?: string
  /* Callback to fire on click */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  /** Href target */
  target?: string
  /** Underlines the text when hovered */
  underlineOnHover?: boolean
  /** Specifies the style variant */
  variant?: LinkVariant
}

enum LinkVariant {
  Default = 'default',
  Unstyled = 'unstyled'
}

const Link: React.FC<ILinkProps> = ({ children, href, onClick, variant, underlineOnHover, target}) => {
  return (
    <StyledA
      href={href}
      onClick={onClick}
      target={target}
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
