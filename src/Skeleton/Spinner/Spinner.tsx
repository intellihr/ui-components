import React from 'react'
import classNames from 'classnames'
import * as BetterSpinner from 'better-react-spinkit'
import { isEqual } from 'lodash'
import { SpinnerWrapper } from './style'

export interface SpinnerProps {
  /** Type of spinner to display */
  type?: 'three-bounce' | 'fading-circle'
  /** Position of the spinner on the page */
  position?: 'page' | 'left' | 'center' | 'right' | 'inline'
  /** Size of the spinner */
  size?: number
  /** Colour of the spinner */
  color?: string
}

export class Spinner extends React.Component<SpinnerProps> {
  public static defaultProps: Partial<SpinnerProps> = {
    type: 'three-bounce',
    color: '#432DF3',
    size: 20
  }

  shouldComponentUpdate (nextProps: SpinnerProps) {
    return !isEqual(this.props, nextProps)
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
        return <BetterSpinner.ThreeBounce {...attributes} />
      case 'fading-circle':
        return <BetterSpinner.FadingCircle {...attributes} />
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
