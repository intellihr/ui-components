import { Variables } from '..'

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

  export type Margin = Variables.Spacing | Variables.Layout | {
    min?: Variables.Spacing | Variables.Layout | 'none'
    tablet?: Variables.Spacing | Variables.Layout | 'none'
    desktop?: Variables.Spacing | Variables.Layout | 'none'
    bigDesktop?: Variables.Spacing | Variables.Layout | 'none'
  }

  export interface IMargins {
    top?: Margin
    bottom?: Margin
    left?: Margin
    right?: Margin
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
    Board = 'board',
    Breadcrumb = 'breadcrumb',
    BreadcrumbGroup = 'breadcrumb_group',
    Brick = 'brick',
    Button = 'button',
    ButtonGroup = 'button_group',
    ButtonIcon = 'button_icon',
    Callout = 'callout',
    EmptyState = 'empty_state',
    GridLayout = 'grid_layout',
    GridLayoutCell = 'grid_layout_cell',
    HintWrapper = 'hint_wrapper',
    HorizontalRule = 'horizontal_rule',
    IconPicker = 'icon_picker',
    LayoutSpacer = 'layout_spacer',
    LayoutSpacerItem = 'layout_spacer_item',
    LinkButton = 'link_button',
    Record = 'record',
    RecordName = 'record_name',
    SmartList = 'smart_list',
    SmartListColumn = 'smart_list_column',
    Text = 'text',
    Tile = 'tile',
    Timeline = 'timeline',
    TimelineEvent = 'timeline_event',
    ToggleSwitch = 'toggle_switch',
    ToggleSwitchInput = 'toggle_switch_input'
  }

  export enum Orientation {
    Vertical = 'vertical',
    Horizontal = 'horizontal'
  }

  export enum HintWrapperType {
    Popover = 'popover',
    Tooltip = 'tooltip'
  }
}

export {
  Props
}
