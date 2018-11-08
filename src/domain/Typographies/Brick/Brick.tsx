import React from 'react'
import { Props, Variables } from '../../../common'
import { BrickWrapper } from './style'
import { Text } from '../Text'

export interface IBrickProps {
  /** Text to show inside the Brick  */
  text: string
  /** Color of the brick  */
  color?: Props.FunctionalColor
  /** Specify the type of typography to use */
  typographyType?: Props.TypographyType
  /** Extra classes to apply */
  className?: string
  /** The data-component-context */
  componentContext?: string
}

export class Brick extends React.PureComponent<IBrickProps> {
  public static defaultProps: Partial<IBrickProps> = {
    color: Props.FunctionalColor.Neutral,
    typographyType: Props.TypographyType.Body
  }

  public render (): JSX.Element {
    const {
      text,
      color,
      typographyType,
      className,
      componentContext
    } = this.props

    const brickColors = Variables.functionalColors[color!]

    return (
      <BrickWrapper
        color={brickColors.backgroundColor}
        className={className}
        data-component-type={Props.ComponentType.Brick}
        data-component-context={componentContext}
      >
        <Text
          type={typographyType}
          color={brickColors.textColor}
        >
          {text}
        </Text>
      </BrickWrapper>
    )
  }
}
