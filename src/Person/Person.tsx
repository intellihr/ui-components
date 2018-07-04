import React from 'react'
import classNames from 'classnames'
import { AvatarContainer, PersonInfo, PersonWrapper } from './style'
import { Avatar } from '../Avatar'
import { Text } from '../Text'

export interface IPerson {
  /** Initials to display if no valid `imageUrl` or `imageData` is passed to Avatar */
  avatarInitials: string
  /** Image URL */
  avatarUrl?: string
  /** Display a coloured status dot on the avatar */
  avatarStatusColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'neutral' | 'highlight'
  /** Display an icon on the avatar */
  avatarStatusIcon?: JSX.Element
  /** If true, displays Person in a compact view */
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

export class Person extends React.PureComponent<IPerson> {
  public static defaultProps: Partial<IPerson> = {
    isCompact: false,
    isHoverable: false
  }

  avatar () {
    const {
      avatarInitials,
      avatarUrl,
      avatarStatusColor,
      avatarStatusIcon,
      isCompact
    } = this.props

    return <AvatarContainer>
      <Avatar
        initials={avatarInitials}
        imageUrl={avatarUrl}
        statusDot={avatarStatusColor}
        statusIcon={avatarStatusIcon}
        size={isCompact ? 'small' : 'medium'}
      />
    </AvatarContainer>
  }

  primaryText () {
    const {
      primaryText,
      isCompact
    } = this.props

    return <Text isInline={isCompact}>{primaryText}</Text>
  }

  secondaryText () {
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

  tertiaryText () {
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
      isHoverable
    } = this.props

    return (
      <PersonWrapper
        className={classNames('person')}
        isHoverable={isHoverable}
      >
        {this.avatar()}
        <PersonInfo>
          {this.primaryText()}
          {this.secondaryText()}
          {this.tertiaryText()}
        </PersonInfo>
      </PersonWrapper>
    )
  }
}
