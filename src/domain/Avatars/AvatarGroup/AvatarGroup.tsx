import React from 'react'

import { Props } from '../../../common'
import {
  AvatarGroupSize,
  StyledAvatar,
  StyledAvatarGroupWrapper
} from './style'

interface IAvatarGroupAvatar {
  /** The initials within the avatar (when the image fails to load) */
  initials?: string,
  /** The image url to display as an avatar */
  imageUrl?: string
}

interface IAvatarGroup {
  /** The list of avatars to show in the group */
  avatars: IAvatarGroupAvatar[],
  /** Size of the avatar group */
  size?: AvatarGroupSize,
  /** The max number of avatars to display in the group; set to null for no limit */
  maxAvatarCount?: number | null,
  /** Whether to show an additional count if more avatars are provided than shown */
  showOverflowCount?: boolean,
  /** Whether the avatar group should have hover styles */
  isHoverable?: boolean,
  /** Onclick event for the avatar group */
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void,
  /** Component context */
  componentContext?: string,
  /** Inner ref to the wrapper */
  wrapperRef?: React.RefObject<HTMLSpanElement>,
  /** Wrapper props passthrough */
  wrapperOverrides?: any
}

interface IAvatarGroupState {
  /** Indexes of avatars which failed to load */
  avatarsFailedLoading: Set<number>
}

class AvatarGroup extends React.PureComponent<IAvatarGroup, IAvatarGroupState> {
  public static defaultProps: Partial<IAvatarGroup> = {
    size: 'medium',
    maxAvatarCount: 6,
    showOverflowCount: true,
    isHoverable: false
  }

  constructor (props: IAvatarGroup) {
    super(props)

    this.state = {
      avatarsFailedLoading: new Set()
    }
  }

  public render (): JSX.Element {
    const {
      size,
      componentContext,
      onClick,
      isHoverable,
      wrapperRef,
      wrapperOverrides
    } = this.props

    const truncatedAvatars = this.truncatedAvatars

    return (
      <StyledAvatarGroupWrapper
        avatarCount={truncatedAvatars.length}
        avatarGroupSize={size!}
        data-component-type={Props.ComponentType.AvatarGroup}
        data-component-context={componentContext}
        ref={wrapperRef}
        isHoverable={isHoverable}
        onClick={onClick}
        {...wrapperOverrides}
      >
        {truncatedAvatars.map(this.getAvatarForProps).reverse()}
      </StyledAvatarGroupWrapper>
    )
  }

  private get truncatedAvatars (): IAvatarGroupAvatar[] {
    const {
      avatars,
      maxAvatarCount,
      showOverflowCount
    } = this.props

    if (maxAvatarCount && avatars.length > maxAvatarCount) {
      const truncatedAvatars = avatars.slice(0, maxAvatarCount)

      if (showOverflowCount) {
        truncatedAvatars.pop()

        const overflowCount = Math.min(avatars.length - truncatedAvatars.length, 99)

        truncatedAvatars.push({
          initials: `+${overflowCount}`
        })
      }

      return truncatedAvatars
    }

    return avatars
  }

  private getAvatarForProps = (avatarProps: IAvatarGroupAvatar, index: number) => {
    const {
      maxAvatarCount,
      size
    } = this.props

    const {
      initials,
      imageUrl
    } = avatarProps

    const isInitials = !imageUrl || this.state.avatarsFailedLoading.has(index)
    let avatarContent: JSX.Element | string | undefined = initials

    if (!isInitials) {
      avatarContent = (
        <img
          data-img-index={index}
          src={imageUrl}
          onError={this.handleImageError}
        />
      )
    }

    return (
      <StyledAvatar
        key={index}
        avatarIndex={index}
        avatarGroupSize={size!}
        isInitials={isInitials}
        isOverflow={maxAvatarCount !== null && index === maxAvatarCount! - 1}
      >
        {avatarContent}
      </StyledAvatar>
    )
  }

  private handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const imageIndex = parseInt(event.currentTarget.dataset.imgIndex!, 10)
    const updatedSet = new Set(this.state.avatarsFailedLoading)
    updatedSet.add(imageIndex)

    this.setState({
      avatarsFailedLoading: updatedSet
    })
  }
}

export {
  IAvatarGroupAvatar,
  IAvatarGroup,
  AvatarGroup
}
