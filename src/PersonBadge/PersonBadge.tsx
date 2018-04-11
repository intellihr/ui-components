import React from 'react'
import classNames from 'classnames'
import { isNil } from 'lodash'
import { Icon } from '../Icon/Icon'
const style = require('./PersonBadge.scss')

export interface SkeletonOptions {
  showSkeleton: boolean
  shape: string
}

export interface PersonBadgeProps {
  preferredOrFirstName?: string
  lastName?: string
  className?: string
  hoverLabel?: string
  hoverIcon?: string
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  size?: 'original' | 'small' | 'medium' | 'large' | 'xlarge'
  imageId?: string
  imageData?: string
  isOnLeave?: boolean
  skeletonOptions?: SkeletonOptions
  onImageError?: (error: any) => void
}

export interface PersonBadgeState {
  showInitials: boolean
}

export class PersonBadge extends React.Component<PersonBadgeProps> {
  public state: PersonBadgeState = { showInitials: true }

  public static defaultProps: PersonBadgeProps = {
    size: 'large',
    isOnLeave: false,
    onImageError: () => {}
  }

  constructor (props: any) {
    super(props)

    this.state = {
      showInitials: !this.hasImage(props)
    }
  }

  protected hasImage (props: any): boolean {
    const {
      imageId,
      imageData
    } = props

    return !isNil(imageId) || !isNil(imageData)
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
      <div className={classNames('person-badge-hover', size)}>
        <Icon type='camera' />
        <span className='person-badge-hover-label'>{hoverLabel}</span>
      </div>
    )
  }

  get initials (): string {
    const {
      preferredOrFirstName,
      lastName
    } = this.props

    const firstInitial = preferredOrFirstName ? preferredOrFirstName.charAt(0) : ''
    const lastInitital = lastName ? lastName.charAt(0) : ''

    return firstInitial + lastInitital
  }

  get picture (): JSX.Element {
    const {
      imageId,
      imageData,
      onImageError
    } = this.props

    return (
      <img
        src={imageId || imageData}
        onError={event => !isNil(onImageError) ? onImageError(event) : null}
      />
    )
  }

  get badgeContent (): JSX.Element {
    if (this.state.showInitials) {
      return (
        <div className='badge-initials-container'>
          <span className='badge-intials'>
            {this.initials}
          </span>
        </div>
      )
    }

    return (
      <div className='badge-picture-container'>
        {this.picture}
      </div>
    )
  }

  get extendedLeaveDot (): JSX.Element | null {
    const {
      isOnLeave
    } = this.props

    if (isOnLeave) {
      return <span className='extended-leave-circle' />
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
        style.PersonBadge,
        className,
        size
      )}>
        <div
          className={classNames(
            'person-badge-inner-container',
            { 'with-hover': !isNil(handleClick) }
          )}
          onClick={event => isNil(handleClick) ? null : handleClick(event)}
        >
          {this.hoverDom}
          {this.badgeContent}
        </div>
        {this.extendedLeaveDot}
      </div>
    )
  }
}
