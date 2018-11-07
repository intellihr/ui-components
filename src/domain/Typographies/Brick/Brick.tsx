import React from 'react'
import { Props } from '../../../common'
import { BrickWrapper } from './style'
import { Text } from '../Text'
import { Variables } from '../../../common'

export interface IBrickProps {
  /** Text to show inside the Brick  */
  text: string
  /** Color of the brick  */
  color?: 'alert' | 'success' | 'warning' | 'primary' | 'neutral' | 'secondary' | 'highlight' | 'dark'
  /** Specify the type of typography to use */
  typographyType?: Props.TypographyType
  /** Extra classes to apply */
  className?: string
}

export class Brick extends React.PureComponent<IBrickProps> {
  public static defaultProps: Partial<IBrickProps> = {
    color: 'neutral',
    typographyType: Props.TypographyType.Body
  }

  get textColor (): Variables.Color {
    const {
      color
    } = this.props

    switch (color) {
      case 'alert':
        return Variables.Color.r600
      case 'success':
        return Variables.Color.g600
      case 'warning':
        return Variables.Color.o600
      case 'primary':
        return Variables.Color.i600
      case 'secondary':
        return Variables.Color.b600
      case 'highlight':
        return Variables.Color.c600
      case 'dark':
        return Variables.Color.n200
      default:
        return Variables.Color.n800


    }

  }

  public render (): JSX.Element {
    const {
      text,
      color,
      typographyType,
      className
    } = this.props

    return (
      <BrickWrapper
        color={color}
        className={className}
      >
        <Text
          type={typographyType}
          color={this.textColor}
        >
          {text}
        </Text>
      </BrickWrapper>
    )
  }
}
