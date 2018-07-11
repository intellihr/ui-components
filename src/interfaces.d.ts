namespace Size {
  export type xxsmall = 'xxsmall'
  export type xsmall = 'xsmall'
  export type small = 'small'
  export type medium = 'medium'
  export type large = 'large'
  export type xlarge = 'xlarge'
  export type xxlarge = 'xxlarge'
}

type AllSizes = Size.xxsmall | Size.xsmall | Size.small | Size.medium | Size.large | Size.xlarge | Size.xxlarge

export {
  Size,
  AllSizes
}
