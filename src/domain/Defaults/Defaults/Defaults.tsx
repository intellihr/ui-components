import React from 'react'

const sassGlobals = require('@Common/sass/variables.scss')

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
  AnchorComponent?: React.ComponentType<any>
}

interface IDefaultsProviders {
  value?: Partial<IDefaults>
  children?: React.ReactNode
}

const defaults: IDefaults = {
  breakpoints: {
    small: parseInt(sassGlobals['breakpoint-small']) || 0,
    medium: parseInt(sassGlobals['breakpoint-medium']) || 1,
    large: parseInt(sassGlobals['breakpoint-large']) || 2,
    xlarge: parseInt(sassGlobals['breakpoint-xlarge']) || 3,
    xxlarge: parseInt(sassGlobals['breakpoint-xxlarge']) || 4
  }
}

const DefaultsContext: React.Context<IDefaults> = React.createContext(defaults)

const DefaultsConsumer = DefaultsContext.Consumer

class DefaultsProvider extends React.PureComponent<IDefaultsProviders> {
  public render (): JSX.Element {
    const {
      value,
      children
    } = this.props

    return (
      <DefaultsContext.Provider
        value={{
          ...defaults,
          ...value
        }}
      >
        {children}
      </DefaultsContext.Provider>
    )
  }
}

export {
  IDefaults,
  IDefaultsProviders,
  DefaultsConsumer,
  DefaultsProvider,
  defaults
}
