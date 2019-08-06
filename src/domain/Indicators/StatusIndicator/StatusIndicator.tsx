import classNames from 'classnames'
import React from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons'
import { Text } from '../../Typographies/Text'
import {StatusTitle, StyledStatusIndicator} from './style'

export interface IStatusIndicatorProps {
  /** Text to show inside the label  */
  text: string

  /** The primary text type  */
  textType?: Props.TypographyType

  /** Specify the primary text font weight */
  textWeight?: Variables.FontWeight

  /** Smaller text shown under the label */
  subtitleText?: string

  /** The subtitle text type  */
  subtitleTextType?: Props.TypographyType

  /** Specify the subtitle text font weight */
  subtitleTextWeight?: Variables.FontWeight

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
    isHollow: false,
    textType: Props.TypographyType.Small,
    textWeight: Variables.FontWeight.fwSemiBold,
    subtitleTextType: Props.TypographyType.Small,
    subtitleTextWeight: Variables.FontWeight.fwNormal
  }

  private get text (): JSX.Element | null {
    const {
      text,
      textType,
      textWeight,
      textColor
    } = this.props

    if (text) {
      return (
        <Text
          type={textType!}
          color={textColor}
          weight={textWeight}
          margins={{ top: -4 }}
        >
          {text}
        </Text>
      )
    }

    return null
  }

  private get subtitleText (): JSX.Element | null {
    const {
      subtitleText,
      subtitleTextType,
      subtitleTextWeight,
      textColor
    } = this.props

    if (subtitleText) {
      return (
        <Text
          type={subtitleTextType!}
          color={textColor}
          weight={subtitleTextWeight}
          isInline={false}
          margins={{ left: Variables.Spacing.sMedium }}
        >
          {subtitleText}
        </Text>
      )
    }

    return null
  }

  public render (): JSX.Element {
    const {
      color,
      isHollow,
      className
    } = this.props

    return (
      <StyledStatusIndicator className={classNames(className, 'dot-status-label')}>
        <StatusTitle>
          <FontAwesomeIcon
            type={isHollow ? 'regular' : 'solid'}
            icon='circle'
            color={color}
          />
          {this.text}
        </StatusTitle>
        {this.subtitleText}
      </StyledStatusIndicator>
    )
  }
}
