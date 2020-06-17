import React from 'react'

import { Props, Variables } from '../../../common'
import { Text } from '../../Typographies/Text'
import {Avatar, AvatarStatusDotColor} from '../Avatar'
import {
  AvatarEntityInfo,
  MainContentWrapper,
  StyledAvatar,
  StyledAvatarEntity, StyledTertiaryText
} from './style'

enum AvatarEntitySize {
  Small = 'small',
  Normal = 'normal',
  SmallCompact = 'smallCompact',
  NormalCompact = 'normalCompact'
}

export interface IAvatarEntityProps {
  /** The primary text */
  primaryText: string
  /** The secondary text */
  secondaryText?: string
  /** The tertiary text */
  tertiaryText?: string
  /** Specify the size of avatar entity to use */
  size?: AvatarEntitySize
  /** If true, will display a hover state style when hovered */
  isHoverable?: boolean
  /** Margins around the component */
  margins?: Props.IMargins
  /** Initials to display if no valid `imageUrl` or `imageData` is passed to Avatar */
  initials?: string
  /** Image URL */
  imageUrl?: string
  /** Display a coloured status dot on the avatar */
  statusDot?: AvatarStatusDotColor | 'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'neutral' | 'highlight' | 'dark'
  /** The component context */
  componentContext?: string
}

class AvatarEntity extends React.PureComponent<IAvatarEntityProps> {
  public static Size = AvatarEntitySize
  public static defaultProps: Partial<IAvatarEntityProps> = {
    isHoverable: false,
    size: AvatarEntitySize.Normal
  }

  get avatar (): JSX.Element {
    const {
      initials,
      imageUrl,
      statusDot,
      size
    } = this.props

    return (
      <StyledAvatar
        size={size}
      >
        <Avatar
          initials={initials}
          imageUrl={imageUrl}
          statusDot={statusDot}
          size={size === AvatarEntitySize.Small ? Props.AvatarSize.Small : Props.AvatarSize.Medium}
        />
      </StyledAvatar>
    )
  }

  get primaryText (): JSX.Element {
    const {
      primaryText,
      size
    } = this.props

    return (
      <Text
        isTruncated
        color={Variables.Color.n800}
        type={size === AvatarEntitySize.Normal ? Props.TypographyType.Body : Props.TypographyType.Small}
      >
        {primaryText}
      </Text>
    )
  }

  get secondaryText (): JSX.Element | null {
    const {
      secondaryText,
      size
    } = this.props

    if (!secondaryText) {
      return null
    }

    let text = secondaryText

    if (size === AvatarEntitySize.NormalCompact || size === AvatarEntitySize.SmallCompact) {
      text = `(${text})`
    }

    return (
      <Text
        isTruncated
        color={Variables.Color.n700}
        margins={size === AvatarEntitySize.NormalCompact || size === AvatarEntitySize.SmallCompact ? { left: Variables.Spacing.sXSmall } : undefined}
        type={size === AvatarEntitySize.Normal ? Props.TypographyType.Small : Props.TypographyType.XSmall}
      >
        {text}
      </Text>
    )
  }

  get tertiaryText (): JSX.Element | null {
    const {
      tertiaryText,
      size
    } = this.props

    if (!tertiaryText || size === AvatarEntitySize.NormalCompact || size === AvatarEntitySize.SmallCompact) {
      return null
    }

    return (
      <StyledTertiaryText
        size={size}
      >
        <Text
          isInline={false}
          isTruncated
          color={Variables.Color.n700}
          type={size === AvatarEntitySize.Normal ? Props.TypographyType.Small : Props.TypographyType.XSmall}
        >
          {tertiaryText}
        </Text>
      </StyledTertiaryText>
    )
  }

  public render (): JSX.Element {
    const {
      isHoverable,
      margins,
      componentContext,
      size
    } = this.props

    return(
      <StyledAvatarEntity
        data-component-type={Props.ComponentType.AvatarEntity}
        data-component-context={componentContext}
        margins={margins}
        isHoverable={isHoverable}
      >
        <MainContentWrapper
          size={size}
        >
          {this.avatar}
          <AvatarEntityInfo
            size={size}
          >
            {this.primaryText}
            {this.secondaryText}
          </AvatarEntityInfo>
        </MainContentWrapper>
        {this.tertiaryText}
      </StyledAvatarEntity>
    )
  }
}

export {
  AvatarEntity,
  AvatarEntitySize
}
