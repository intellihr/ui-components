import React from 'react'
import classNames from 'classnames'
import { ThreeBounce, FadingCircle } from 'better-react-spinkit'
import { SpinnerWrapper } from './style'
import { getColor } from '../Color'

export interface SpinnerProps {
  /** Type of spinner to display */
  type: 'three-bounce' | 'fading-circle'
  /** Position of the spinner on the page */
  position?: 'page' | 'left' | 'center' | 'right' | 'inline'
  /** Size of the spinner */
  size?: number
  /** Colour of the spinner */
  color?: string
}

export class Spinner extends React.PureComponent<SpinnerProps> {
  public static defaultProps: Partial<SpinnerProps> = {
    color: getColor('primary'),
    size: 20
  }

  spinner () {
    const {
      type,
      size,
      color
    } = this.props

    const attributes = {size, color}

    switch (type) {
      case 'three-bounce':
        return <ThreeBounce {...attributes} />
      case 'fading-circle':
        return <FadingCircle {...attributes} />
    }
  }

  public render (): JSX.Element {
    const {
      position
    } = this.props

    return (
      <SpinnerWrapper className={classNames('spinner', position)}>
        {this.spinner()}
      </SpinnerWrapper>
    )
  }
}
