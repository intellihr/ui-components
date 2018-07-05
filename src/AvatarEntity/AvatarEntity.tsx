import React from 'react'
import classNames from 'classnames'
import { AvatarContainer, AvatarEntityInfo, AvatarEntityWrapper } from './style'
import { Avatar } from '../Avatar'
import { Text } from '../Text'
import { AvatarProps } from '../Avatar/Avatar'

export interface IAvatarEntity {
  /** Initials to display if no valid `imageUrl` or `imageData` is passed to Avatar */
  avatarInitials: string
  /** Image URL */
  avatarUrl?: string
  /** Display a coloured status dot on the avatar */
  avatarStatusColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'neutral' | 'highlight'
  /** Display an icon on the avatar */
  avatarStatusIcon?: JSX.Element
  /** If true, displays AvatarEntity in a compact view */
  isCompact?: boolean
  /** The primary text */
  primaryText: string
  /** The secondary text */
  secondaryText?: string
  /** The tertiary text */
  tertiaryText?: string
  /** If true, will display a hover state style when hovered */
  isHoverable?: boolean
}

export class AvatarEntity extends React.PureComponent<IAvatarEntity & AvatarProps> {
  public static defaultProps: Partial<IAvatarEntity> = {
    isCompact: false,
    isHoverable: false
  }

  get avatar (): JSX.Element {
    const {
      initials,
      imageUrl,
      statusDot,
      statusIcon,
      isCompact
    } = this.props

    return <AvatarContainer>
      <Avatar
        initials={initials}
        imageUrl={imageUrl}
        statusDot={statusDot}
        statusIcon={statusIcon}
        size={isCompact ? 'small' : 'medium'}
      />
    </AvatarContainer>
  }

  get primaryText (): JSX.Element {
    const {
      primaryText,
      isCompact
    } = this.props

    return <Text isInline={isCompact}>{primaryText}</Text>
  }

  get secondaryText (): JSX.Element | null {
    const {
      secondaryText,
      isCompact
    } = this.props

    if (!secondaryText) {
      return null
    }

    let text = secondaryText

    if (isCompact) {
      text = `(${text})`
    }

    return (
      <Text
        className='person-secondary-text'
        isSmall
        isTruncated
        isInline={isCompact}
      >
        {text}
      </Text>
    )
  }

  get tertiaryText (): JSX.Element | null {
    const {
      tertiaryText,
      isCompact
    } = this.props

    if (!tertiaryText || isCompact) {
      return null
    }

    return (
      <Text
        className='person-tertiary-text'
        isInline={false}
        isTruncated
      >
        {tertiaryText}
      </Text>
    )
  }

  public render(): JSX.Element {
    const {
      isHoverable,
      isCompact
    } = this.props

    return (
      <AvatarEntityWrapper
        className='avatar-entity'
        isHoverable={isHoverable}
        isCompact={isCompact}
      >
        {this.avatar}
        <AvatarEntityInfo>
          {this.primaryText}
          {this.secondaryText}
          {this.tertiaryText}
        </AvatarEntityInfo>
      </AvatarEntityWrapper>
    )
  }
}
