import React from 'react'
import classNames from 'classnames'
import { isNil } from 'lodash'
import { Icon } from '../Icon/Icon'
import {
  withSkeleton,
  SkeletonComponentProps
} from '../Skeleton/Skeleton'
const style = require('./PersonBadge.scss')

export interface PersonBadgeProps extends SkeletonComponentProps {
  /** This will be used for the first character of the initials badge if the image URL nad data are missing */
  preferredOrFirstName?: string
  /** This will be used for the second character of the initials badge if the image URL nad data are missing */
  lastName?: string
  /** Text for the black, transparent overlay (both Label and Icon have to be present for the overlay to render) */
  hoverLabel?: string
  /** Label for the black, transparent overlay (both Label and Icon have to be present for the overlay to render) */
  hoverIcon?: string
  /** Handle the component click (If the function is not present, curson and border effects will not appear on hover) */
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  /** Image URL */
  imageId?: string
  /** Image blob data */
  imageData?: string
  /** If true will place a yellow marker besides the profile picture */
  isOnLeave?: boolean
  /** Handler for the case if image doesn't load */
  onImageError?: (error: any) => void
}

export interface PersonBadgeState {
  showInitials: boolean
}

export class PersonBadgeComponent extends React.Component<PersonBadgeProps> {
  public state: PersonBadgeState = {
    showInitials: true
  }

  public static defaultProps: PersonBadgeProps = {
    size: 'medium',
    isOnLeave: false,
    onImageError: () => {},
    skeletonOptions: {
      showSkeleton: true,
      shape: 'circle'
    }
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

export const PersonBadge = withSkeleton(PersonBadgeComponent)
