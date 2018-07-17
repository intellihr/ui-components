import React from 'react'

const sassGlobals = require('../sass/globals.scss')

interface ProvidedDefaults {
  /** Breakpoints used for the grid layout */
  breakpoints: {
    small: number
    medium: number
    large: number
    xlarge: number
    xxlarge: number
  }
}

interface Defaults extends ProvidedDefaults {
  /** Anchor component used for clickable links */
  AnchorComponent?: any
}

const defaults: ProvidedDefaults = {
  breakpoints: {
    small: parseInt(sassGlobals['breakpoint-small']),
    medium: parseInt(sassGlobals['breakpoint-medium']),
    large: parseInt(sassGlobals['breakpoint-large']),
    xlarge: parseInt(sassGlobals['breakpoint-xlarge']),
    xxlarge: parseInt(sassGlobals['breakpoint-xxlarge'])
  }
}

const DefaultsContext: React.Context<Defaults> = React.createContext(defaults)

const DefaultsConsumer = DefaultsContext.Consumer

const DefaultsProvider = DefaultsContext.Provider

export {
  ProvidedDefaults,
  Defaults,
  DefaultsConsumer,
  DefaultsProvider,
  defaults
}
