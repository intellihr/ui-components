import classNames from 'classnames'
import React from 'react'
import { Icon } from '../Icon'

const style = require('./DotStatusLabel.scss')

export interface DotStatusLabelProps {
    /** Text to show inside the label  */
    text: string

    /** Smaller text shown under the label */
    subtitleText?: string

    /** Colour of the icon  */
    color?: string

    /** Main colour of the text (and icon if no `color` provided)  */
    textColor?: 'alert' | 'success' | 'warning' | 'primary' | 'neutral' | 'secondary'

    /** Should the label use a hollow icon  */
    isHollow?: boolean
  }

export class DotStatusLabel extends React.Component<DotStatusLabelProps> {
  public static defaultProps: Partial<DotStatusLabelProps> = {
    isHollow: false
  }

  get subtitleText (): JSX.Element | null {
    const {
      subtitleText,
      textColor
    } = this.props

    if (subtitleText) {
      return (
        <div className={classNames('subtitle', textColor)}>
          {subtitleText}
        </div>
      )
    }

    return null
  }

  public render (): JSX.Element {
    const {
      text,
      color,
      textColor,
      isHollow
    } = this.props

    return (
      <span className={classNames(style.DotStatusLabel, 'dot-status-label', textColor)}>
        <Icon
          type={isHollow ? 'circle-o' : 'circle'}
          size={1}
          color={color}
        />
        {text}
        {this.subtitleText}
      </span>
    )
  }
}
