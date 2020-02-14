import { isNil } from 'lodash'
import React from 'react'

import { Props } from '../../../common/types/props'
import { StyledEmptyState } from './style'

export interface IEmptyStateProps {
  /** The message to be shown in the first line as a title/heading */
  primaryMessage?: string | null
  /** The message to be shown in the second line as a sub title */
  secondaryMessage?: string | null
  /** This will accept the button component */
  buttonComponent?: JSX.Element
  /** The image to render */
  image?: {
    url: string
    width?: number
  }
  /** The margins around the component */
  margins?: Props.IMargins
  /** The data-component-context */
  componentContext?: string
}

export class EmptyState extends React.Component<IEmptyStateProps> {
  public static defaultProps: Partial<IEmptyStateProps> = {
    primaryMessage: `Oops... We couldn't find anything for this section.`,
    secondaryMessage: `Please speak to your system admin or add information.`
  }

  private defaultImageWith = 400

  get primaryMessage (): JSX.Element | null {
    const {
      primaryMessage
    } = this.props

    if (!isNil(primaryMessage)) {
      return (
        <div className='ihr-primary-message'>
          {primaryMessage}
        </div>
      )
    }
    return null
  }

  get secondaryMessage (): JSX.Element | null {
    const {
      secondaryMessage
    } = this.props

    if (!isNil(secondaryMessage)) {
      return (
        <div className='ihr-secondary-message'>
          {secondaryMessage}
        </div>
      )
    }
    return null
  }

  get image (): JSX.Element | null {
    const {
      image
    } = this.props

    if (!isNil(image) && image.url !== '') {
      return (
        <img
          className='ihr-image-component'
          src={image.url}
          width={image.width ? image.width : this.defaultImageWith}
        />
      )
    }
    return null
  }

  public render (): JSX.Element {
    const { componentContext, buttonComponent, margins } = this.props

    return (
      <StyledEmptyState
        className='ihr-empty-state'
        data-component-type={Props.ComponentType.EmptyState}
        data-component-context={componentContext}
        margins={margins}
      >
          {this.primaryMessage}
          {this.secondaryMessage}
          {buttonComponent}
          {this.image}
      </StyledEmptyState>
      )
    }
}
