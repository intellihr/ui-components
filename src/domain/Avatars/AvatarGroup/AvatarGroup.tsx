import React from 'react'
import { Props } from '../../../common'
import {
  StyledAvatarGroupWrapper,
  StyledAvatar
} from './style'

interface IAvatarGroupAvatar {
  /** The initials within the avatar (when the image fails to load) */
  initials?: string
  /** The image url to display as an avatar */
  imageUrl?: string
}

interface IAvatarGroup {
  /** The list of avatars to show in the group */
  avatars: IAvatarGroupAvatar[],
  /** The max number of avatars to display in the group; set to null for no limit */
  maxAvatarCount?: number | null,
  /** Whether to show an additional count if more avatars are provided than shown */
  showOverflowCount?: boolean,
  /** Whether the avatar group should have hover styles */
  isHoverable?: boolean,
  /** Onclick event for the avatar group */
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void,
  /** Component context */
  componentContext?: string
  /** Wrapper props passthrough */
  wrapperOverrides?: any
}

interface IAvatarGroupState {
  /** Indexes of avatars which failed to load */
  avatarsFailedLoading: Set<number>
}

class AvatarGroup extends React.PureComponent<IAvatarGroup, IAvatarGroupState> {
  public static defaultProps: Partial<IAvatarGroup> = {
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
      componentContext,
      onClick,
      wrapperOverrides
    } = this.props

    return (
      <StyledAvatarGroupWrapper
        data-component-type={Props.ComponentType.AvatarGroup}
        data-component-context={componentContext}
        onClick={onClick}
        {...wrapperOverrides}
      >
        {this.truncatedAvatars.map(this.getAvatarForProps)}
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

        truncatedAvatars.push({
          initials: `+${avatars.length - truncatedAvatars.length}`
        })
      }

      return truncatedAvatars
    }

    return avatars
  }

  private getAvatarForProps = (avatarProps: IAvatarGroupAvatar, index: number) => {
    const {
      initials,
      imageUrl
    } = avatarProps

    let avatarContent

    if (!imageUrl || this.state.avatarsFailedLoading.has(index)) {
      avatarContent = (
        <div className='avatar-initials-container'>
          <span className='avatar-initials'>
            {initials}
          </span>
        </div>
      )
    } else {
      avatarContent = (
        <div className='avatar-picture-container'>
          <img
            data-img-index={index}
            src={imageUrl}
            onError={this.handleImageError}
          />
        </div>
      )
    }

    return (
      <StyledAvatar
        key={index}
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
