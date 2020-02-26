import { isEqual } from 'lodash'
import React, { useState } from 'react'

import { Props, Variables } from '../../../../common'
import { Avatar } from '../../../Avatars/Avatar'
import { FontAwesomeIcon } from '../../../Icons'
import { Anchor } from '../../../Internals'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../../Popovers/DropdownMenu'
import { ISectionProps } from '../../../Popovers/DropdownMenu/subcomponents/Section'
import { Text } from '../../../Typographies'
import {
  StyledActionArea,
  StyledAvatarContainer,
  StyledContainer,
  StyledContentContainer,
  StyledDropdownButton,
  StyledDropdownMenu,
  StyledPrimaryTextContainer,
  StyledSecondaryContainer,
  StyledSecondaryTextContainer,
  StyledStatusBanner,
  StyledTitleContainer
} from './style'

interface IAvatarTileProps {
  /** The primary text */
  primaryText: string
  /** The secondary text */
  secondaryText?: string
  /** The component to display to the right of the secondary text */
  secondaryRightElement?: JSX.Element
  /** Initials to display if no valid `imageUrl` is provided */
  initials?: string
  /** Image URL for the avatar */
  imageUrl?: string
  /** dropdown sections to show in the action button dropdown */
  dropdownSections?: ISectionProps[]
  /** The url to navigate to when clicking the top half of the tile */
  href?: string
  /** The colour of the status, if one is to be displayed */
  statusColor?: Props.AvatarStatusDotColor
  /** Text to describe the status */
  statusText?: string
  /** The margins around the component */
  margins?: Props.IMargins
  /** Children to render beneath the avatar on hover */
  children?: React.ReactNode
  /** The data-component-context */
  componentContext?: string
}

const AvatarTile: React.FC<IAvatarTileProps> = ({
  primaryText,
  initials,
  secondaryText,
  secondaryRightElement,
  imageUrl,
  dropdownSections,
  href,
  statusColor,
  statusText,
  margins,
  children,
  componentContext
}) => {
  const [hovered, setHovered] = useState(false)
  const onMouseEnter = () => setHovered(true)
  const onMouseLeave = () => setHovered(false)

  const displayStatusBanner = !!statusColor && !!statusText

  const actionButtonDropdownMenu = (dropdownSections && hovered)
    ? (
        <StyledDropdownMenu
          displayStatusBanner={displayStatusBanner}
        >
          <DropdownMenu
            toggleComponent={actionButton}
            sections={dropdownSections}
            parentAnchorPosition={{
              xPos: Props.Position.Right,
              yPos: Props.Position.Bottom
            }}
            dropdownAnchorPosition={{
              xPos: Props.Position.Right,
              yPos: Props.Position.Top
            }}
          />
        </StyledDropdownMenu>
    )
    : null

  const actionArea = href
    ? (
        <Anchor href={href}>
          <StyledActionArea hovered={hovered} />
        </Anchor>
    )
    : null

  const statusBanner = displayStatusBanner
    ? (
      <StyledStatusBanner statusColor={statusColor} hovered={hovered}>
        <Text
          type={Props.TypographyType.XSmall}
          color={Variables.Color.n100}
          weight={Variables.FontWeight.fwSemiBold}
        >
          {statusText}
        </Text>
      </StyledStatusBanner>
    )
    : null

  return (
    <StyledContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      hovered={hovered}
      margins={margins}
      displayStatusBanner={displayStatusBanner}
      data-component-type={Props.ComponentType.AvatarTile}
      data-component-context={componentContext}
    >
      {actionArea}
      {statusBanner}
      {actionButtonDropdownMenu}
      <StyledAvatarContainer>
        <Avatar
          initials={initials}
          size={Props.AvatarSize.XLarge}
          imageUrl={imageUrl}
          statusDot={statusColor}
        />
      </StyledAvatarContainer>
      <StyledTitleContainer>
        <StyledPrimaryTextContainer hovered={hovered}>
          {primaryText}
        </StyledPrimaryTextContainer>
        <StyledSecondaryContainer>
          <StyledSecondaryTextContainer>
            {secondaryText}
          </StyledSecondaryTextContainer>
          {secondaryRightElement}
        </StyledSecondaryContainer>
      </StyledTitleContainer>
      <StyledContentContainer>
        {children}
      </StyledContentContainer>
    </StyledContainer>
  )
}

const actionButton = ({ toggleMenu, toggleComponentRef, ariaProps }: IDropdownMenuToggleComponentProps) => (
  <StyledDropdownButton
    onClick={toggleMenu}
    ref={toggleComponentRef}
    {...ariaProps}
  >
    <FontAwesomeIcon type='solid' icon='ellipsis-v' />
  </StyledDropdownButton>
)

const MemoAvatarTile = React.memo(AvatarTile, ((prevProps, nextProps) => {
  return prevProps.primaryText === nextProps.primaryText &&
    prevProps.secondaryText === nextProps.secondaryText &&
    prevProps.secondaryRightElement === nextProps.secondaryRightElement &&
    prevProps.initials === nextProps.initials &&
    prevProps.imageUrl === nextProps.imageUrl &&
    prevProps.dropdownSections === nextProps.dropdownSections &&
    prevProps.href === nextProps.href &&
    prevProps.statusColor === nextProps.statusColor &&
    prevProps.statusText === nextProps.statusText &&
    prevProps.children === nextProps.children &&
    prevProps.componentContext === nextProps.componentContext &&
    isEqual(prevProps.margins, nextProps.margins)
}))

export {
  MemoAvatarTile as AvatarTile
}
