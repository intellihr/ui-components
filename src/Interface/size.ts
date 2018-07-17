enum Size {
  XXSmall = 'xxsmall',
  XSmall = 'xsmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  XLarge = 'xlarge',
  XXLarge = 'xxlarge'
}

type AllSizes = Size.XXSmall | Size.XSmall | Size.Small | Size.Medium | Size.Large | Size.XLarge | Size.XXLarge

export {
  Size,
  AllSizes
}
