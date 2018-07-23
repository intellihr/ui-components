import React from 'react'

const sassGlobals = require('@Common/sass/globals.scss')

interface IDefaults {
  /** Breakpoints used for the grid layout */
  breakpoints: {
    small: number
    medium: number
    large: number
    xlarge: number
    xxlarge: number
  }

  /** Anchor component used for clickable links */
  AnchorComponent?: any
}

const defaults: IDefaults = {
  breakpoints: {
    small: parseInt(sassGlobals['breakpoint-small']),
    medium: parseInt(sassGlobals['breakpoint-medium']),
    large: parseInt(sassGlobals['breakpoint-large']),
    xlarge: parseInt(sassGlobals['breakpoint-xlarge']),
    xxlarge: parseInt(sassGlobals['breakpoint-xxlarge'])
  }
}

const DefaultsContext: React.Context<IDefaults> = React.createContext(defaults)

const DefaultsConsumer = DefaultsContext.Consumer

const DefaultsProvider = DefaultsContext.Provider

export {
  IDefaults,
  DefaultsConsumer,
  DefaultsProvider,
  defaults
}
