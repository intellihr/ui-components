import React from 'react'

import { Props } from '../../../common'
import { BrickColor, BrickWrapper } from './style'

export interface IBrickProps {
  /** Color of the brick  */
  color?: BrickColor
  /** Specify the type of typography to use */
  typographyType?: Props.TypographyType
  /** Extra classes to apply */
  className?: string
  /** The data-component-context */
  componentContext?: string
}

export class Brick extends React.PureComponent<IBrickProps> {
  public static Color = BrickColor
  public static defaultProps: Partial<IBrickProps> = {
    color: BrickColor.Neutral,
    typographyType: Props.TypographyType.Body
  }

  public render (): JSX.Element {
    const {
      color,
      typographyType,
      className,
      componentContext,
      children
    } = this.props

    return (
      <BrickWrapper
        color={color!}
        className={className}
        typographyType={typographyType!}
        data-component-type={Props.ComponentType.Brick}
        data-component-context={componentContext}
      >
        {children}
      </BrickWrapper>
    )
  }
}
