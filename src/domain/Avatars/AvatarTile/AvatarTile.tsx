import React, { useState } from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons'
import { Anchor } from '../../Internals'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { ISectionProps } from '../../Popovers/DropdownMenu/subcomponents/Section'
import { Brick, Text } from '../../Typographies'
import { BrickColor } from '../../Typographies/Brick/style'
import { Avatar } from '../Avatar'
import {
  StyledActionArea,
  StyledAvatarContainer,
  StyledContainer,
  StyledContentContainer,
  StyledDropdownButton,
  StyledDropdownMenu,
  StyledJobContainer,
  StyledJobNameContainer,
  StyledPersonNameContainer,
  StyledStatusBanner,
  StyledTitleContainer
} from './style'

interface IAvatarTileProps {
  /** The display name of the person */
  displayName: string
  /** The job name of the person */
  jobName: string
  /** Initials to display if no valid `imageUrl` is provided */
  initials?: string
  /** If number of jobs is greater than 1, brick with additional job information will be displayed */
  numberOfJobs?: number
  /** Image URL for the avatar */
  imageUrl?: string
  /** dropdown sections to show in the cards action button dropdown */
  dropdownSections?: ISectionProps[]
  /** The url to navigate to when clicking the top half of the card */
  href?: string
  /** The colour of the status if one is to be displayed */
  statusColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'neutral' | 'highlight' | 'dark'
  /** Text to describe the status */
  statusText?: string
  /** The margins around the component */
  margins?: Props.IMargins
  /** Children to render beneath the avatar */
  children?: React.ReactNode
  /** The data-component-context */
  componentContext?: string
}

const AvatarTile: React.FC<IAvatarTileProps> = ({
  displayName,
  initials,
  jobName,
  numberOfJobs,
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
  const set = () => setHovered(true)
  const unSet = () => setHovered(false)

  const displayStatusBanner = !!statusColor && !!statusText
  const displayJobCount = !!numberOfJobs && numberOfJobs > 1

  const actionButton = ({ toggleMenu, toggleComponentRef, ariaProps }: IDropdownMenuToggleComponentProps) => (
    <StyledDropdownButton
      onClick={toggleMenu}
      ref={toggleComponentRef}
      {...ariaProps}
    >
      <FontAwesomeIcon type='solid' icon='ellipsis-v' />
    </StyledDropdownButton>
  )

  const actionButtonDropdownMenu = (): JSX.Element | null => {
    if (dropdownSections && hovered) {
      return (
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
    }

    return null
  }

  const actionArea = (): JSX.Element | null => {
    if (href) {
      return (
        <Anchor href={href}>
          <StyledActionArea hovered={hovered} />
        </Anchor>
      )
    }

    return null
  }

  const statusBanner = (): JSX.Element | null => {
    if (displayStatusBanner) {
      return (
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
    }

    return null
  }

  const jobCountBrick = (): JSX.Element | null => {
    if (displayJobCount) {
      return (
        <Brick
          typographyType={Props.TypographyType.XSmall}
          margins={{
            left: 4
          }}
          color={BrickColor.Dark}
        >
          + {numberOfJobs! - 1}
        </Brick>
      )
    }

    return null
  }

  return (
    <StyledContainer
      onMouseEnter={set}
      onMouseLeave={unSet}
      hovered={hovered}
      margins={margins}
      displayStatusBanner={displayStatusBanner}
      data-component-type={Props.ComponentType.AvatarTile}
      data-component-context={componentContext}
    >
      {actionArea()}
      {statusBanner()}
      {actionButtonDropdownMenu()}
      <StyledAvatarContainer>
        <Avatar
          initials={initials}
          size={Props.AvatarSize.XLarge}
          imageUrl={imageUrl}
          statusDot={statusColor}
        />
      </StyledAvatarContainer>
      <StyledTitleContainer>
        <StyledPersonNameContainer hovered={hovered}>
          {displayName}
        </StyledPersonNameContainer>
        <StyledJobContainer>
          <StyledJobNameContainer displayJobCount={displayJobCount}>
            {jobName}
          </StyledJobNameContainer>
          {jobCountBrick()}
        </StyledJobContainer>
      </StyledTitleContainer>
      <StyledContentContainer>
        {children}
      </StyledContentContainer>
    </StyledContainer>
  )
}

export {
  AvatarTile
}
