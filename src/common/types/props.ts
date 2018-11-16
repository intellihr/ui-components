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
    AvatarGroup = 'avatar_group',
    BlockTabGroup = 'block_tab_group',
    Brick = 'brick',
    Button = 'button',
    ButtonIcon = 'button_icon',
    EmptyState = 'empty_state',
    LinkButton = 'link_button',
    Record = 'record',
    RecordName = 'record_name',
    Text = 'text',
    Timeline = 'timeline',
    TimelineEvent = 'timeline_event'
  }
}

export {
  Props
}
