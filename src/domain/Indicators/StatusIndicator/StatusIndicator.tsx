import classNames from 'classnames'
import React from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons'
import { Text } from '../../Typographies/Text'

const style = require('./StatusIndicator.scss')

export interface IStatusIndicatorProps {
  /** Text to show inside the label  */
  text: string

  /** Smaller text shown under the label */
  subtitleText?: string

  /** Colour of the icon  */
  color?: Variables.Color

  /** Main colour of the text (and icon if no `color` provided)  */
  textColor?: Variables.Color

  /** Should the label use a hollow icon  */
  isHollow?: boolean

  /** Extra classes to apply  */
  className?: string
}

export class StatusIndicator extends React.Component<IStatusIndicatorProps> {
  public static defaultProps: Partial<IStatusIndicatorProps> = {
    isHollow: false
  }

  get subtitleText(): JSX.Element | null {
    const {
      subtitleText,
      textColor
    } = this.props

    if (subtitleText) {
      return (
        <Text
          type={Props.TypographyType.Small}
          color={textColor}
          className='subtitle'
        >
          {subtitleText}
        </Text>
      )
    }

    return null
  }

  public render(): JSX.Element {
    const {
      text,
      color,
      textColor,
      isHollow,
      className
    } = this.props

    return (
      <span className={classNames(style.StatusIndicator, className, 'dot-status-label')}>
        <FontAwesomeIcon
          type={isHollow ? 'regular' : 'solid'}
          icon='circle'
          color={color}
        />
        <Text color={textColor}>
          {text}
        </Text>
        {this.subtitleText}
      </span>
    )
  }
}
