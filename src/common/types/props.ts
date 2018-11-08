// tslint:disable-next-line:no-namespace
namespace Props {
  export enum Position {
    Left = 'left',
    Right = 'right',
    Center = 'center',
    Top = 'top',
    Bottom = 'bottom',
    Auto = 'auto'
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

  export enum AvatarSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
    XLarge = 'xlarge'
  }

  export enum TypographyType {
    XSmall = 'xsmall',
    Small = 'small',
    Body = 'body',
    Heading = 'heading',
    Display = 'display',
    DisplayLarge = 'display-large'
  }

  export enum ComponentType {
    Button = 'button',
    ButtonIcon = 'button_icon',
    EmptyState = 'empty_state',
    LinkButton = 'link_button',
    Brick = 'brick',
    Text = 'text'
  }

  export enum FunctionalColor {
    Alert = 'alert',
    Success = 'success',
    Warning = 'warning',
    Primary = 'primary',
    Neutral = 'neutral',
    Secondary = 'secondary',
    Highlight = 'highlight',
    Dark = 'dark'
  }
}

export {
  Props
}
