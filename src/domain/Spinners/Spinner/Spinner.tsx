import { FadingCircle, ThreeBounce } from 'better-react-spinkit'
import classNames from 'classnames'
import React from 'react'

import { Variables } from '../../../common'
import { SpinnerWrapper } from './style'

export interface ISpinnerProps {
  /** Type of spinner to display */
  type: 'three-bounce' | 'fading-circle'
  /** Position of the spinner on the page */
  position?: 'page' | 'left' | 'center' | 'right' | 'inline'
  /** Size of the spinner */
  size?: number
  /** Colour of the spinner */
  color?: string
}

export class Spinner extends React.PureComponent<ISpinnerProps> {
  public static defaultProps: Partial<ISpinnerProps> = {
    color: Variables.Color.i400,
    size: 20
  }

  public spinner () {
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
