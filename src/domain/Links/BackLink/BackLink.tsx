import React from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { StyledBackLink } from './style'

interface IBackLinkProps {
  /** URL on which relative links are based */
  href: string
  /** onClick event */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  /** Margins around the table */
  margins?: Props.IMargins
  /** The component context */
  componentContext?: string
  /** Object with extra props to pass to the external anchor */
  anchorComponentProps?: {
    [i: string]: any
  }
  /** link label text */
  children: string
}

const BackLink: React.FC<IBackLinkProps> = (props) => {
  const {
    margins,
    componentContext,
    onClick,
    children,
    href,
    anchorComponentProps
  } = props

  return (
    <StyledBackLink
      margins={margins}
      data-component-type={Props.ComponentType.BackLink}
      data-component-context={componentContext}
      onClick={onClick}
      href={href}
      anchorComponentProps={anchorComponentProps}
    >
      <FontAwesomeIcon margins={{right: Variables.Spacing.sXSmall}} icon='angle-left' type='solid' size='small'/>
      {children}
    </StyledBackLink>
  )
}

export {
  BackLink
}
