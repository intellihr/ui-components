import React from 'react'
import {
  AvatarContainer,
  AvatarEntityInfo,
  AvatarEntityWrapper,
  SecondaryTextWrapper,
  TertiaryTextWrapper
} from './style'
import { Avatar } from '../Avatar'
import { Text } from '../Text'
import { AvatarProps } from '../Avatar/Avatar'

export interface IAvatarEntity {
  /** The primary text */
  primaryText: string
  /** The secondary text */
  secondaryText?: string
  /** The tertiary text */
  tertiaryText?: string
  /** If true, displays AvatarEntity in a compact view */
  isCompact?: boolean
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

    return <Text inline={isCompact}>{primaryText}</Text>
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
      <SecondaryTextWrapper
        isCompact={isCompact}
      >
        <Text
          size='small'
          truncated
          inline={isCompact}
        >
          {text}
        </Text>
      </SecondaryTextWrapper>
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
      <TertiaryTextWrapper>
        <Text
          inline={false}
          truncated
        >
          {tertiaryText}
        </Text>
      </TertiaryTextWrapper>
    )
  }

  public render (): JSX.Element {
    const {
      isHoverable
    } = this.props

    return (
      <AvatarEntityWrapper
        className='avatar-entity'
        isHoverable={isHoverable}
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
