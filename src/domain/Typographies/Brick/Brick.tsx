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
  /** The margins around the component */
  margins?: Props.IMargins
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
      children,
      margins
    } = this.props

    return (
      <BrickWrapper
        margins={margins}
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
