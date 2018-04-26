import React from 'react'
import classNames from 'classnames'
import {
  isNil,
  isEmpty
} from 'lodash'
import { Icon } from '../Icon/Icon'
import {
  withSkeleton,
  SkeletonComponentProps
} from '../Skeleton/Skeleton'
const style = require('./PersonBadge.scss')

export interface PersonBadgeProps {
  /** size for the badge  */
  size?: 'small' | 'medium' | 'large' | 'xlarge'
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
  imageUrl?: string
  /** Image blob data */
  imageData?: string
  /** If true will place a yellow marker besides the profile picture */
  isOnLeave?: boolean

  className?: string
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
    isOnLeave: false
  }

  constructor (props: any) {
    super(props)

    this.state = {
      showInitials: !this.hasImage(props)
    }
  }

  componentDidUpdate (prevProps: PersonBadgeProps): void {
    if (this.hasImage(prevProps) !== this.hasImage(this.props)) {
      this.setState({
        showInitials: !this.state.showInitials
      })
    }
  }

  protected hasImage (props: any): boolean {
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
    const lastInitial = lastName ? lastName.charAt(0) : ''

    return firstInitial + lastInitial
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

  get badgeContent (): JSX.Element {
    if (this.state.showInitials) {
      return (
        <div className='badge-initials-container'>
          <span className='badge-initials'>
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
        `badge-${size}`
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

export const PersonBadge: React.ComponentClass<PersonBadgeProps & SkeletonComponentProps> = withSkeleton(PersonBadgeComponent)
