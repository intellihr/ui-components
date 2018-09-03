import React from 'react'
import {
  AvatarContainer,
  AvatarEntityInfo,
  AvatarEntityWrapper,
  SecondaryTextWrapper
} from './style'
import { Avatar, IAvatarProps } from '../'
import { Text } from '../../Typographies'
import { Props, Variables } from '../../../common'

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

export class AvatarEntity extends React.PureComponent<IAvatarEntity & IAvatarProps> {
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
        size={isCompact ? Props.AvatarSize.Small : Props.AvatarSize.Medium}
      />
    </AvatarContainer>
  }

  get primaryText (): JSX.Element {
    const {
      primaryText,
      isCompact
    } = this.props

    return (
      <Text
        color={Variables.Color.n700}
        isInline={isCompact}
      >
        {primaryText}
      </Text>
    )
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
          color={Variables.Color.n600}
          type={Props.TypographyType.xsmall}
          isTruncated
          isInline={isCompact}
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
        <Text
          color={Variables.Color.n600}
          type={Props.TypographyType.xsmall}
          weight='heavy'
          isInline={false}
          isTruncated
        >
          {tertiaryText}
        </Text>
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
