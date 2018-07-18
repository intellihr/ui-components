import React from 'react'

interface Defaults {
  /** Anchor component used for clickable links */
  AnchorComponent?: any
  /** Breakpoints used for the grid layout */
  breakpoints?: {
    xs: number,
    sm: number,
    md: number,
    lg: number
  }
}

const defaults: Defaults = {}
const DefaultsContext: React.Context<Defaults> = React.createContext(defaults)

const DefaultsConsumer = DefaultsContext.Consumer
const DefaultsProvider = DefaultsContext.Provider

export {
  Defaults,
  DefaultsConsumer,
  DefaultsProvider
}
