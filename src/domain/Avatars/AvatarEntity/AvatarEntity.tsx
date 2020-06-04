import React from 'react'

import { Avatar } from '../'
import { Props, Variables } from '../../../common'
import { Text } from '../../Typographies/Text'
import { AvatarStatusDotColor } from '../Avatar'
import {
  AvatarEntityInfo,
  MainContentWrapper,
  StyledAvatarEntity
} from './style'

enum Size {
  Small = 'small',
  Normal = 'normal'
}

export interface IAvatarEntityProps {
  /** The primary text */
  primaryText: string
  /** The secondary text */
  secondaryText?: string
  /** The tertiary text */
  tertiaryText?: string
  /** Specify the size of avatar entity to use */
  size?: Size
  /** If true, displays AvatarEntity in a compact view */
  isCompact?: boolean
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
  public static Size = Size
  public static defaultProps: Partial<IAvatarEntityProps> = {
    isCompact: false,
    isHoverable: false,
    size: Size.Normal
  }

  get avatar (): JSX.Element {
    const {
      initials,
      imageUrl,
      statusDot,
      size
    } = this.props

    return (
      <div>
        <Avatar
          initials={initials}
          imageUrl={imageUrl}
          statusDot={statusDot}
          size={size === Size.Small ? Props.AvatarSize.Small : Props.AvatarSize.Medium}
        />
      </div>
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
        type={size === Size.Normal ? Props.TypographyType.Body : Props.TypographyType.Small}
      >
        {primaryText}
      </Text>
    )
  }

  get secondaryText (): JSX.Element | null {
    const {
      secondaryText,
      isCompact,
      size
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
        isTruncated
        color={Variables.Color.n700}
        margins={isCompact ? { left: Variables.Spacing.sXSmall } : undefined}
        type={size === Size.Normal ? Props.TypographyType.Small : Props.TypographyType.XSmall}
      >
        {text}
      </Text>
    )
  }

  get tertiaryText (): JSX.Element | null {
    const {
      tertiaryText,
      isCompact,
      size
    } = this.props

    if (!tertiaryText || isCompact) {
      return null
    }

    return (
      <Text
        isInline={false}
        isTruncated
        color={Variables.Color.n700}
        margins={{ left: size === Size.Normal ? 48 : 38 }}
        type={size === Size.Normal ? Props.TypographyType.Small : Props.TypographyType.XSmall}
      >
        {tertiaryText}
      </Text>
    )
  }

  public render (): JSX.Element {
    const {
      isHoverable,
      isCompact,
      margins,
      componentContext,
      size
    } = this.props

    return(
      <StyledAvatarEntity
        data-component-type={Props.ComponentType.AvatarEntity}
        data-component-context={componentContext}
        margins={margins}
      >
        <MainContentWrapper
          isHoverable={isHoverable}
          size={size}
        >
          {this.avatar}
          <AvatarEntityInfo
            isCompact={isCompact}
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
  Size
}
