import React from 'react'
import classNames from 'classnames'
import {
  isNil,
  isEmpty
} from 'lodash'
import { FontAwesomeIcon } from '../Icon'
import {
  withSkeleton,
  SkeletonComponentProps
} from '../Skeleton'
const style = require('./Avatar.scss')

export interface AvatarProps {
  /** Size of the avatar  */
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  /** Initials to display if no valid `imageUrl` or `imageData` is passed to Avatar */
  initials?: string
  /** Text for the black, transparent overlay (both Label and Icon have to be present for the overlay to render) */
  hoverLabel?: string
  /** Label for the black, transparent overlay (both Label and Icon have to be present for the overlay to render) */
  hoverIcon?: string
  /** Handle the component click (If the function is not present, cursor and border effects will not appear on hover) */
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  /** Image URL */
  imageUrl?: string
  /** Image blob data */
  imageData?: string
  /** Display a coloured status dot on the avatar */
  statusDot?: 'primary' | 'secondary' | 'success' | 'warning' | 'alert' | 'neutral' | 'highlight'

  className?: string
}

export interface AvatarState {
  showInitials: boolean
}

class AvatarComponent extends React.Component<AvatarProps> {
  public state: AvatarState = {
    showInitials: true
  }

  public static defaultProps: AvatarProps = {
    size: 'medium'
  }

  constructor (props: AvatarProps) {
    super(props)

    this.state = {
      showInitials: !this.hasImage(props)
    }
  }

  componentDidUpdate (prevProps: AvatarProps): void {
    if (this.hasImage(prevProps) !== this.hasImage(this.props)) {
      this.setState({
        showInitials: !this.state.showInitials
      })
    }
  }

  protected hasImage (props: AvatarProps): boolean {
    const {
      imageUrl,
      imageData
    } = props

    return !isEmpty(imageUrl) || !isEmpty(imageData)
  }

  get hoverDom (): JSX.Element | null {
    const {
      size,
      hoverLabel,
      hoverIcon
    } = this.props

    if (isNil(hoverLabel) && isNil(hoverIcon)) {
      return null
    }

    return (
      <div className={classNames('avatar-hover', `avatar-${size}`)}>
        <FontAwesomeIcon type='camera' />
        <span className='avatar-hover-label'>{hoverLabel}</span>
      </div>
    )
  }

  get picture (): JSX.Element {
    const {
      imageUrl,
      imageData
    } = this.props

    return (
      <img
        src={imageUrl || imageData}
        onError={() => { this.setState({showInitials: true}) }}
      />
    )
  }

  get avatarContent (): JSX.Element {
    const {
      initials
    } = this.props

    if (this.state.showInitials) {
      return (
        <div className='avatar-initials-container'>
          <span className='avatar-initials'>
            {initials}
          </span>
        </div>
      )
    }

    return (
      <div className='avatar-picture-container'>
        {this.picture}
      </div>
    )
  }

  get statusDot (): JSX.Element | null {
    const {
      statusDot
    } = this.props

    if (statusDot) {
      return <span className={`status-dot ${statusDot}`} />
    }

    return null
  }

  public render (): JSX.Element | null {
    const {
      className,
      size,
      handleClick
    } = this.props

    return (
      <div className={classNames(
        style.Avatar,
        className,
        `avatar-${size}`
      )}>
        <div
          className={classNames(
            'avatar-inner-container',
            { 'with-hover': !isNil(handleClick) }
          )}
          onClick={event => isNil(handleClick) ? null : handleClick(event)}
        >
          {this.hoverDom}
          {this.avatarContent}
        </div>
        {this.statusDot}
      </div>
    )
  }
}

export const Avatar: React.ComponentClass<AvatarProps & SkeletonComponentProps> = withSkeleton(AvatarComponent)
