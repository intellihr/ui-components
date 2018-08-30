// tslint:disable-next-line:no-namespace
namespace Props {
  export enum Position {
    Left = 'left',
    Right = 'right',
    Center = 'center',
    Top = 'top',
    Bottom = 'bottom'
  }

  export interface IPositionXY {
    xPos: Position.Left | Position.Right,
    yPos: Position.Top | Position.Bottom
  }

  export enum Size {
    XXSmall = 'xxsmall',
    XSmall = 'xsmall',
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
    XLarge = 'xlarge',
    XXLarge = 'xxlarge'
  }

  export enum TypographyType {
    xsmall = 'xsmall',
    small = 'small',
    body = 'body',
    heading = 'heading',
    display = 'display',
    displayLarge = 'display-large'
  }
}

export {
  Props
}
