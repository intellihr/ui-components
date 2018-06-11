import React from 'react'

export interface Defaults {
  /** Anchor component used for clickable links */
  AnchorComponent?: (props: any) => JSX.Element
  /** Breakpoints used for the grid layout */
  breakpoints?: string[]
}

const defaults: Defaults = {}
const DefaultsContext: React.Context<Defaults> = React.createContext(defaults)

export const DefaultsConsumer = DefaultsContext.Consumer
export const DefaultsProvider = DefaultsContext.Provider
